export function* generateCgaracterByStep(text: string): Generator<string> {
  const textStringList = text.split('')
  for (let i = 0; i < textStringList.length; i++) {
    const text = textStringList.slice(0, i + 1)
    console.log(text.join(''))
    yield text.join('')
  }
}
