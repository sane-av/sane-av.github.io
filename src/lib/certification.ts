export interface CertificationQuestion {
  id: string;
  question: string;
  options: string[];
  answerHash: string;
}

export interface Certification {
  id: string;
  title: string;
  description: string;
  passingScore: number;
  questions: CertificationQuestion[];
}

export async function sha256(message: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function checkAnswer(questionId: string, selectedOption: string, correctHash: string): Promise<boolean> {
  const h = await sha256(questionId + ":" + selectedOption);
  return h === correctHash;
}

export function calcScore(correct: number, total: number): number {
  return Math.round((correct / total) * 100);
}

export function hexToBytes(hex: string): Uint8Array<ArrayBuffer> {
  const len = hex.length / 2;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
  }
  return bytes;
}

export function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes).map((b: number) => b.toString(16).padStart(2, "0")).join("");
}

export const SIGNING_KEY_HEX = "7b3e4570e05be684b0964d9875e4078d06004bbd287925c199871260b2f0e963";
