export type User = {
  id: string;
  name: string;
};

export function authenticate(user: User): Promise<User | undefined> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ id: '1', name: 'Bob' }));
  });
}
