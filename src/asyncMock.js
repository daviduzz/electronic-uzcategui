// const products = [
//     {id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', price: 109.95, description: 'Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday', category: "men's clothing"},
//     {id: 2, title: 'Mens Casual Premium Slim Fit T-Shirts ', price: 22.3, description: 'Slim-fitting style, contrast raglan long sleeve, t…e round neckline includes a three-button placket.', category: "men's clothing"},
//     {id: 3, title: 'Mens Cotton Jacket', price: 55.99, description: 'great outerwear jackets for Spring/Autumn/Winter, …and or son in this thanksgiving or Christmas Day.', category: "men's clothing"},
//     {id: 4, title: 'Mens Casual Slim Fit', price: 15.99, description: 'The color could be slightly different between on t…uld be reviewed below on the product description.', category: "men's clothing"},
//     {id: 5, title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", price: 695, description: 'From our Legends Collection, the Naga was inspired…th love and abundance, or outward for protection.', category: 'jewelery'},
//     {id: 6, title: 'Solid Gold Petite Micropave ', price: 168, description: 'Satisfaction Guaranteed. Return or exchange any or…eed. Return or exchange any order within 30 days.', category: 'jewelery'},
//     {id: 7, title: 'White Gold Plated Princess', price: 9.99, description: "Classic Created Wedding Engagement Solitaire Diamo…agement, Wedding, Anniversary, Valentine's Day...", category: 'jewelery'},
//     {id: 8, title: 'Pierced Owl Rose Gold Plated Stainless Steel Double', price: 10.99, description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel', category: 'jewelery'},
//     {id: 9, title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ', price: 64, description: 'USB 3.0 and USB 2.0 Compatibility Fast data transf…ser’s hardware configuration and operating system', category: 'electronics'},
//     {id: 10, title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', price: 109, description: 'Easy upgrade for faster boot up, shutdown, applica…drive capacity, host device, OS and application.)', category: 'electronics'},
// ]

const products = [
    { 
        id: '1', 
        name: 'Iphone 12', 
        price: 1000, 
        category: 'celular', 
        img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
        stock: 25, 
        description:'Descripcion de Iphone 12'
    },
    { id: '2', name: 'Samsung S21', price: 800, category: 'celular', img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock: 16, description:'Descripcion de Samsung s21'},
    { id: '3', name: 'Ipad 8va gen', price: 1200, category: 'tablet', img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', stock: 10, description:'Descripcion de Ipad'},
    {id: '4', name: 'WD 2TB Portable External Hard Drive', price: 64,category: 'almacenamiento',img:'https://http2.mlstatic.com/D_NQ_NP_956888-MLV49580585693_042022-O.jpg' , description: 'USB 3.0 and USB 2.0 Compatibility Fast data transf…ser’s hardware configuration and operating system'},
]
export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}