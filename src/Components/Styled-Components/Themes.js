export const lightTheme = {
    body:"rgba(255,255,255,0.76)",
    btn:"rgba(208,208,208,0.77)",
    text:"#424242",
    tr:"#fdf3f3",
    fontFamily:"'Source Sans Pro', sans-serif",
    bodyRgba : "252, 246, 244",
    textRgba:"0,0,0",
}

export const DarkTheme = {
    body:"#434343",
    text:"#FCF6F4",
    fontFamily:"'Source Sans Pro', sans-serif",
    textRgba : "252, 246, 244",
    bodyRgba:"0,0,0",
}

export const MediaQueries = size => {
    return style => `@media (max-width: ${size}px) { ${style} }`
}