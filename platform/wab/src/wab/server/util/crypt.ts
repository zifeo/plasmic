import crypto from "crypto";

const encryptionAlgorithm = "aes-256-gcm";
const stableIv = "7b40ddbfd7b334bd9628a2ab624717f6";
const stableSalt =
  "82dfa5d0e69f74709499686119a46db3420ffc9e8703e1d2c0dc0b6e4049bd6aa55b84e393f8100e8754f76a2eabf718c58a7c06b4a5774130197dffc593aa1e";

/**
 * Used when we need a stable encryption (which is weaker!), for situations
 * such as when the encrypted data is a random token generated by us and that we
 * need to be able to query the row by the token (non-stable encrypted tokens
 * would output different values when encrypting the same token so they can't be
 * queried).
 *
 * In general, secrets must be stored using `encryptTransformer`.
 */
export function makeStableEncryptor(key: string) {
  const stableKey = crypto.pbkdf2Sync(key, stableSalt, 100000, 32, "sha512");
  return {
    /**
     * Encrypts `value`
     */
    to: (value: string): string => {
      const cipher = crypto.createCipheriv(
        encryptionAlgorithm,
        stableKey,
        stableIv
      );
      const encrypted = Buffer.concat([
        cipher.update(String(value), "utf8"),
        cipher.final(),
      ]);
      const tag = cipher.getAuthTag();
      return Buffer.concat([tag, encrypted]).toString("hex");
    },

    /**
     * Decrypts `value` string
     */
    from: (value: string): string => {
      const tagLength = 16;
      const bufferValue = Buffer.from(value, "hex");
      const tag = bufferValue.slice(0, tagLength);
      const encrypted = bufferValue.slice(tagLength);
      const decipher = crypto.createDecipheriv(
        encryptionAlgorithm,
        stableKey,
        stableIv
      );
      decipher.setAuthTag(tag);
      return decipher.update(encrypted) + decipher.final("utf8");
    },
  };
}
