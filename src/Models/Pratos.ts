class Prato {
  image: string
  title: string
  category: string[]
  description: string
  nota: string
  id: number

  constructor(
    nota: string,
    title: string,
    category: string[],
    description: string,
    image: string,
    id: number
  ) {
    this.category = category
    this.title = title
    this.description = description
    this.nota = nota
    this.image = image
    this.id = id
  }
}

export default Prato
