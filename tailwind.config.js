module.exports = {
    content: [
        './src/**/*.{html,js,tsx}',
        './src/pages/**/*.tsx',
        './src/components/**.tsx',
        './src/layouts/**.tsx',
    ],
    plugins:[
        require('@tailwindcss/typography')
    ]
}
