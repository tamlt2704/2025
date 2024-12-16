export function authorize(id: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(['admin']), 1000);
  });
}
