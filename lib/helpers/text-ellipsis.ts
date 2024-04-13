export const ellipsis = (text: string, maxLength: number = 60) => {
    if (text.length > maxLength - 3)
        return `${text.slice(0, maxLength - 3).trim()}...`
    return text
}
