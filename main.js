const tvseries = [
    {
    name: 'Breaking Bad',
    id: 'bb',
    rating: '9.4',
    rateID: 'bb-rate',
    img: 'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
    imgID: 'bb-img',
    },
    {
    name: 'Fullmetal Alchemist: Brotherhood',
    id: 'fmab',
    rating: '9.0',
    rateID: 'fmab-rate',
    img: 'https://cdn.discordapp.com/attachments/689435600947904513/903253401721245706/Fmab-poster.png',
    imgID: 'fmab-img',
    },
    {
    name: 'Game of Thrones',
    id: 'got',
    rating: '9.2',
    rateID: 'got-rate',
    img: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg',
    imgID: 'got-img'
    },
    {
    name: 'Chernobyl',
    id: 'cher',
    rating: '9.3',
    rateID: 'cher-rate',
    img: 'https://chronophlogiston.files.wordpress.com/2019/06/tumblr_prj0rhfn3h1rkkyz2o1_1280.jpg',
    imgID: 'cher-img'
    },  
    {
    name: 'Attack on Titan',
    id: 'aot',
    rating: '9.0',
    rateID: 'aot-rate',
    img: 'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg',
    imgID: 'aot-img'
    },  
    {
    name: 'Cowboy Bebop',
    id: 'cb',
    rating: '8.9',
    rateID: 'cb-rate',
    img: 'https://m.media-amazon.com/images/M/MV5BNGNlNjBkODEtZThlOC00YzUxLWI0MjMtMjk3YzJmMDFlNWZlXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_.jpg',
    imgID: 'cb-img'
    },  
    {
    name: 'One Punch Man',
    id: 'opm',
    rating: '8.8',
    rateID: 'opm-rate',
    img: 'https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg',
    imgID: 'opm-img'
    },  
    {
    name: 'Stranger Things',
    id: 'st',
    rating: '8.7',
    rateID: 'st-rate',
    img: 'https://cdn1-production-images-kly.akamaized.net/IHr3dhNlhcOq3ZbTwgImWyK2vVs=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2845137/original/008089400_1562293837-Foto_17_-_Poster_Utama_Stranger_Things_3.jpg',
    imgID: 'st-img'
    },  
    {
    name: 'The Boys',
    id: 'tb',
    rating: '8.7',
    rateID: 'tb-rate',
    img: 'http://oyster.ignimgs.com/wordpress/stg.ign.com/2020/08/Homelander-Clean.jpg',
    imgID: 'tb-img'
    }    
]

for (var i = 0; i < tvseries.length; i++) {
    document.getElementById(tvseries[i].id).innerHTML = tvseries[i].name;
    document.getElementById(tvseries[i].rateID).innerHTML = tvseries[i].rating;
    document.getElementById(tvseries[i].imgID).src = tvseries[i].img;
}