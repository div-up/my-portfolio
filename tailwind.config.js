module.exports = {
    darkMode:'class',
    content:["./src/**/*.{js,jsx}"],
    theme:{
        extend:{
            fontFamily:{
                sans:["Inter","sans-serif"],
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
              },
        }
    },
    plugins:[]
}