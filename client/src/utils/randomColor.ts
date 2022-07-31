import chroma from 'chroma-js'

const random = chroma.random()
const stringColor: string = random.toString()

export const randomColor = (): string => { return stringColor  }
