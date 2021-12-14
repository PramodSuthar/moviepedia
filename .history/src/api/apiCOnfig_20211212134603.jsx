const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '4d8394722d0bfc1c8df2dea7ef3026cd',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;