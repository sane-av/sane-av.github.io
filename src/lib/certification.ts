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

export function checkAnswer(questionId: string, selectedOption: string, correctHash: string): Promise<boolean> {
  return sha256(questionId + ":" + selectedOption).then((h) => h === correctHash);
}

export function calcScore(correct: number, total: number): number {
  return Math.round((correct / total) * 100);
}
