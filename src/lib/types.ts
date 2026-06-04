export type Project = {
    id: number,
    image: string,
    name: string,
    description: string,
    synopsis?: string,
    keyTools?: string[],
    tools: string[],
    link?: string
}