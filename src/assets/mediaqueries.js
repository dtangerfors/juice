const size = {
    small: '37.5em',
    medium: '48em',
    large: '64em',
    xLarge: '75em'
}

const screen = {
    small: `only screen and (max-width: ${size.small})`,
    medium: `only screen and (max-width: ${size.medium})`,
    large: `only screen and (max-width: ${size.large})`,
    xLarge: `only screen and (max-width: ${size.xLarge})`,
    darkMode: `(prefers-color-scheme: dark)`,
    noHover: `only screen and (hover:none)`
};

export default screen