export const Delay = async (seconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(() => resolve(), seconds * 1000))
}
