// fashion img 
import img1 from '../../assets/img/product-image/product1.png'
import img2 from '../../assets/img/product-image/product2.png'
import img3 from '../../assets/img/product-image/product3.png'
import img4 from '../../assets/img/product-image/product4.png'
import img5 from '../../assets/img/product-image/product5.png'
import img6 from '../../assets/img/product-image/product6.png'
import img7 from '../../assets/img/product-image/product7.png'
import img8 from '../../assets/img/product-image/product8.png'
import img9 from '../../assets/img/product-image/product9.png'
import img10 from '../../assets/img/product-image/product10.png'

// furniture img 
import imgf1 from '../../assets/img/furniture/product/1.jpg'
import imgf2 from '../../assets/img/furniture/product/2.jpg'
import imgf3 from '../../assets/img/furniture/product/3.jpg'
import imgf4 from '../../assets/img/furniture/product/4.jpg'
import imgf5 from '../../assets/img/furniture/product/5.jpg'
import imgf6 from '../../assets/img/furniture/product/6.jpg'
import imgf7 from '../../assets/img/furniture/product/7.jpg'
import imgf8 from '../../assets/img/furniture/product/8.jpg'
import imgf9 from '../../assets/img/furniture/product/9.jpg'
import imgf10 from '../../assets/img/furniture/product/10.jpg'

// electronics img 
import imge1 from '../../assets/img/electronics/product/1.jpg'
import imge2 from '../../assets/img/electronics/product/2.jpg'
import imge3 from '../../assets/img/electronics/product/3.jpg'
import imge4 from '../../assets/img/electronics/product/4.jpg'
import imge5 from '../../assets/img/electronics/product/5.jpg'
import imge6 from '../../assets/img/electronics/product/6.jpg'
import imge7 from '../../assets/img/electronics/product/7.jpg'
import imge8 from '../../assets/img/electronics/product/8.jpg'
import imge9 from '../../assets/img/electronics/product/9.jpg'
import imge10 from '../../assets/img/electronics/product/10.jpg'

// pharmacy img 
import Pro1 from '../../assets/img/pharmacy/product/pro-1.png'
import Pro2 from '../../assets/img/pharmacy/product/pro-2.png'
import Pro3 from '../../assets/img/pharmacy/product/pro-3.png'
import Pro4 from '../../assets/img/pharmacy/product/pro-4.png'


export const ProductData = [
    {
        id: 1,
        labels: "Trending",
        category: "fashion",
        img: img1,
        hover_img: img10,
        title: "Black Blouses For Woman",
        price: 38,
        description: `Blouses made of 100%
        artificial silk. Buttoned cuffs
        and a classic collar, has a
        loose oversize silhouette,
        sizes: 40 - 54.`,
        rating: {
            rate: 3.9,
            count: 30
        },
        color: [
            {
                color: "green",
                img: img8,
                quantity: 1,
            },
            {
                color: "red",
                img: img9,
                quantity: 1,
            },
            {
                color: "blue",
                img: img7,
                quantity: 1,
            },
        ]
    },
    {
        id: 2,
        labels: "",
        category: "fashion",
        img: img2,
        hover_img: img9,
        title: "A Blouse",
        price: 72,
        description: `A blouse with a print made of 100% artificial
        silk is the perfect combination of style and
        comfort. Sizes: 40 - 54.`,
        rating: {
            rate: 3.3,
            count: 80
        },
        color: [
            {
                color: "green",
                img: img6,
                quantity: 1,
            },
            {
                color: "red",
                img: img10,
                quantity: 1,
            },
            {
                color: "blue",
                img: img5,
                quantity: 1,
            },
        ]
    },
    {
        id: 3,
        labels: "50% OFF",
        category: "fashion",
        img: img3,
        hover_img: img7,
        title: "Silk pajamas",
        price: 34,
        description: `Silk pajamas - armani silk fabric -97% polyester and 3% spandex,
        sizes: s m l x.`,
        rating: {
            rate: 4.9,
            count: 156
        },
        color: [
            {
                color: "green",
                img: img6,
                quantity: 1,
            },
            {
                color: "red",
                img: img7,
                quantity: 1,
            },
            {
                color: "blue",
                img: img8,
                quantity: 1,
            },
        ]
    },
    {
        id: 4,
        labels: "Hot",
        category: "fashion",
        img: img4,
        hover_img: img6,
        title: "Silk pajamas",
        price: 43,
        description: `Silk pajamas - armani silk fabric -
        97% polyester and 3% spandex,
        sizes: s m l x.`,
        rating: {
            rate: 1.9,
            count: 190
        },
        color: [
            {
                color: "green",
                img: img3,
                quantity: 1,
            },
            {
                color: "red",
                img: img9,
                quantity: 1,
            },
            {
                color: "blue",
                img: img5,
                quantity: 1,
            },
        ]
    },
    {
        id: 5,
        labels: "Upcoming",
        category: "fashion",
        img: img5,
        hover_img: img1,
        title: "Blouse",
        price: 52,
        description: `Blouses made of 100% artificial silk.
        Buttoned cuffs and a classic collar,
        has a loose oversize silhouette,
        sizes: 40 - 54.`,
        rating: {
            rate: 3.6,
            count: 20
        },
        color: [
            {
                color: "green",
                img: img10,
                quantity: 1,
            },
            {
                color: "red",
                img: img9,
                quantity: 1,
            },
            {
                color: "blue",
                img: img2,
                quantity: 1,
            },
        ]
    },
    {
        id: 6,
        labels: "Upcoming",
        category: "fashion",
        img: img6,
        hover_img: img4,
        title: "Blouse",
        price: 14,
        description: `A blouse with a print made of 100%
        artificial silk is the perfect combination
        of style and comfort. Sizes: 40 - 54`,
        rating: {
            rate: 3.9,
            count: 120
        },
        color: [
            {
                color: "green",
                img: img7,
                quantity: 1,
            },
            {
                color: "red",
                img: img8,
                quantity: 1,
            },
            {
                color: "blue",
                img: img9,
                quantity: 1,
            },
        ]
    },
    {
        id: 7,
        labels: "Trending",
        category: "fashion",
        img: img7,
        hover_img: img3,
        title: "Dress",
        price: 41,
        description: `Indulge in the allure of our exquisite collection of dresses designed to captivate and enchant. Whether you're looking for a chic cocktail dress, a sophisticated evening gown, or a casual sundress, we have the perfect piece to elevate your style.`,
        rating: {
            "rate": 1.9,
            "count": 10
        },
        color: [
            {
                color: "green",
                img: img2,
                quantity: 1,
            },
            {
                color: "red",
                img: img8,
                quantity: 1,
            },
            {
                color: "blue",
                img: img1,
                quantity: 1,
            },
        ]
    },
    {
        id: 8,
        labels: "Best Selling",
        category: "fashion",
        img: img8,
        hover_img: img2,
        title: "Skater Dress",
        price: 21,
        description: `Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada.`,
        rating: {
            rate: 2.9,
            count: 20
        },
        color: [
            {
                color: "green",
                img: img9,
                quantity: 1,
            },
            {
                color: "red",
                img: img8,
                quantity: 1,
            },
            {
                color: "blue",
                img: img10,
                quantity: 1,
            },
        ]
    },
    {
        id: 9,
        labels: "Popular",
        category: "fashion",
        img: img9,
        hover_img: img1,
        title: "Dress",
        price: 46,
        description: ` Indulge in the allure of our exquisite collection of dresses designed to captivate and enchant. Whether you're looking for a chic cocktail dress, a sophisticated evening gown, or a casual sundress, we have the perfect piece to elevate your style..`,
        rating: {
            rate: 3.9,
            count: 120
        },
        color: [
            {
                color: "green",
                img: img5,
                quantity: 1,
            },
            {
                color: "red",
                img: img6,
                quantity: 1,
            },
            {
                color: "blue",
                img: img7,
                quantity: 1,
            },
        ]
    },
    {
        id: 10,
        labels: "Top Choice",
        category: "fashion",
        img: img10,
        hover_img: img3,
        title: "Shawls",
        price: 74,
        description: `Elevate your ensemble with our exquisite collection of shawls, designed to add a touch of elegance and sophistication to any outfit. Whether you're dressing up for a special occasion or looking to add a chic layer to your everyday look, our shawls are the perfect accessory.. `,
        rating: {
            rate: 3.9,
            count: 220
        },
        color: [
            {
                color: "green",
                img: img2,
                quantity: 1,
            },
            {
                color: "red",
                img: img3,
                quantity: 1,
            },
            {
                color: "blue",
                img: img4,
                quantity: 1,
            },
        ]
    },


    // furniture data
    {
        id: 11,
        labels: "Popular",
        category: "furniture",
        img: imgf1,
        hover_img: imgf10,
        title: "Blouse",
        price: 918,
        description: `A blouse with a print made of 100% artificial
        silk is the perfect combination of style and
        comfort. Sizes: 40 - 54.`,
        rating: {
            rate: 3.9,
            count: 320
        },
        color: [
            {
                color: "green",
                img: imgf2,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf3,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf4,
                quantity: 1,
            },
        ]
    },
    {
        id: 12,
        labels: "Popular",
        category: "furniture",
        img: imgf2,
        hover_img: imgf9,
        title: "Blouse",
        price: 864,
        description: `A blouse with a print made of 100% artificial
        silk is the perfect combination of style and
        comfort. Sizes: 40 - 54.`,
        rating: {
            rate: 3.9,
            count: 120
        },
        color: [
            {
                color: "green",
                img: imgf5,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf6,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf7,
                quantity: 1,
            },
        ]
    },
    {
        id: 13,
        labels: "Popular",
        category: "furniture",
        img: imgf3,
        hover_img: imgf8,
        title: "Blouse",
        price: 263,
        description: `A blouse with a print made of 100% artificial
        silk is the perfect combination of style and
        comfort. Sizes: 40 - 54.`,
        rating: {
            rate: 4.9,
            count: 201
        },
        color: [
            {
                color: "green",
                img: imgf8,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf9,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf10,
                quantity: 1,
            },
        ]
    },
    {
        id: 14,
        labels: "Popular",
        category: "furniture",
        img: imgf4,
        hover_img: imgf9,
        title: "Blouse",
        price: 591,
        description: `A blouse with a print made of 100% artificial
        silk is the perfect combination of style and
        comfort. Sizes: 40 - 54.`,
        rating: {
            rate: 1.9,
            count: 20
        },
        color: [
            {
                color: "green",
                img: imgf8,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf7,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf1,
                quantity: 1,
            },
        ]
    },
    {
        id: 15,
        labels: "Up coming",
        category: "furniture",
        img: imgf5,
        hover_img: imgf8,
        title: "Dress",
        price: 743,
        description: `Indulge in the allure of our exquisite collection of dresses designed to captivate and enchant. Whether you're looking for a chic cocktail dress, a sophisticated evening gown, or a casual sundress, we have the perfect piece to elevate your style.`,
        rating: {
            rate: 4.9,
            count: 620
        },
        color: [
            {
                color: "green",
                img: imgf2,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf3,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf4,
                quantity: 1,
            },
        ]
    },
    {
        id: 16,
        labels: "Popular",
        category: "furniture",
        img: imgf6,
        hover_img: imgf7,
        title: "Wooden Dining Chair",
        price: 963,
        description: `Denali has a contemporary look within its shape. This chair can be a set for your 
        dining table as well as can be used as an accent chair for the distinguished look.`,
        rating: {
            rate: 4.2,
            count: 20
        },
        color: [
            {
                color: "green",
                img: imgf5,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf6,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf7,
                quantity: 1,
            },
        ]
    },
    {
        id: 17,
        labels: "Best Seller",
        category: "furniture",
        img: imgf7,
        hover_img: imgf6,
        title: "Classic Dining Chair",
        price: 789,
        description: `Are you looking for a chair that is affordable, simple yet sophisticated, and comfortable? Look no further, Fairbanks-109,
         and serves all these purposes and much more with agility. This piece of furniture is strong and sturdy.`,
        rating: {
            rate: 3.9,
            count: 45
        },
        color: [
            {
                color: "green",
                img: imgf8,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf9,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf10,
                quantity: 1,
            },
        ]
    },
    {
        id: 18,
        labels: "On sell",
        category: "furniture",
        img: imgf8,
        hover_img: imgf5,
        title: "Lemon Chair Classic",
        price: 852,
        description: `The chair has a straight backside with designs consisting of empty box-like structures right in the middle.
         Both sides of the invention in the middle have spaces. The horizontal sitting area is slightly curved.`,
        rating: {
            rate: 2.9,
            count: 920
        },
        color: [
            {
                color: "green",
                img: imgf9,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf10,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf1,
                quantity: 1,
            },
        ]
    },
    {
        id: 19,
        labels: "Popular",
        category: "furniture",
        img: imgf9,
        hover_img: imgf4,
        title: "Wooden Dining Chair",
        price: 784,
        description: `This item of the furniture fits perfectly in most rooms. It is designed to achieve its goal of relieving you from a 
        day of stress and hard work, 
        and with the homely feel the chair itself emanates, you can rely on this product to provide comfort throughout the day. `,
        rating: {
            rate: 4.9,
            count: 520
        },
        color: [
            {
                color: "green",
                img: imgf2,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf3,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf4,
                quantity: 1,
            },
        ]
    },
    {
        id: 20,
        labels: "New Arrival",
        category: "furniture",
        img: imgf10,
        hover_img: imgf3,
        title: "LB Shoe Rack ",
        price: 434,
        description: `Having a Lacquer finish in antique, the chair’s innate homely feel makes it
         fantastic for home usage, more so than anywhere else.
         Kiln-dried beech wood and veneered engineered wood have been used to make this chair.`,
        rating: {
            rate: 2.5,
            count: 230
        },
        color: [
            {
                color: "green",
                img: imgf5,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf6,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf7,
                quantity: 1,
            },
        ]
    },
    // category data
    {
        id: 21,
        labels: "New",
        category: "electronics",
        img: imge1,
        hover_img: imge10,
        title: "Men's Blazers",
        price: 334,
        description: `Elevate your formal attire with our sophisticated collection of men's blazers, designed to exude classic charm and impeccable style. Whether you're dressing up for a business meeting, a special event, or a casual outing, our blazers are the perfect addition to your wardrobe..`,
        rating: {
            rate: 4.9,
            count: 20
        },
        color: [
            {
                color: "green",
                img: imge2,
                quantity: 1,
            },
            {
                color: "red",
                img: imge3,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge4,
                quantity: 1,
            },
        ]
    },
    {
        id: 22,
        labels: "Hot",
        category: "electronics",
        img: imge2,
        hover_img: imge9,
        title: "Men's Suits",
        price: 714,
        description: `Elevate your formal wardrobe with our impeccable collection of men's suits, designed to offer a perfect blend of style, comfort, and sophistication. Whether you're attending a business meeting, a wedding, or any formal event, our suits are tailored to make you look and feel your best.`,
        rating: {
            rate: 2.9,
            count: 120
        },
        color: [
            {
                color: "green",
                img: imge5,
                quantity: 1,
            },
            {
                color: "red",
                img: imge6,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge7,
                quantity: 1,
            },
        ]
    },
    {
        id: 23,
        labels: "New Arrival",
        category: "electronics",
        img: imge3,
        hover_img: imge8,
        title: "Men's Suits",
        price: 344,
        description: `Elevate your formal wardrobe with our impeccable collection of men's suits, designed to offer a perfect blend of style, comfort, and sophistication. Whether you're attending a business meeting, a wedding, or any formal event, our suits are tailored to make you look and feel your best.`,
        rating: {
            rate: 1.9,
            count: 10
        },
        color: [
            {
                color: "green",
                img: imge8,
                quantity: 1,
            },
            {
                color: "red",
                img: imge9,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge10,
                quantity: 1,
            },
        ]
    },
    {
        id: 24,
        labels: "New",
        category: "electronics",
        img: imge4,
        hover_img: imge7,
        title: "Men's Suits",
        price: 1044,
        description: `Elevate your formal wardrobe with our impeccable collection of men's suits, designed to offer a perfect blend of style, comfort, and sophistication. Whether you're attending a business meeting, a wedding, or any formal event, our suits are tailored to make you look and feel your best.`,
        rating: {
            rate: 3.9,
            count: 100
        },
        color: [
            {
                color: "green",
                img: imge1,
                quantity: 1,
            },
            {
                color: "red",
                img: imge2,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge3,
                quantity: 1,
            },
        ]
    },
    {
        id: 25,
        labels: "Hot",
        category: "electronics",
        img: imge5,
        hover_img: imge6,
        title: "Men's Suits",
        price: 344,
        description: `Elevate your formal wardrobe with our impeccable collection of men's suits, designed to offer a perfect blend of style, comfort, and sophistication. Whether you're attending a business meeting, a wedding, or any formal event, our suits are tailored to make you look and feel your best.`,
        rating: {
            rate: 2.9,
            count: 610
        },
        color: [
            {
                color: "green",
                img: imge4,
                quantity: 1,
            },
            {
                color: "red",
                img: imge5,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge6,
                quantity: 1,
            },
        ]
    },
    {
        id: 26,
        labels: "New Arrival",
        category: "electronics",
        img: imge6,
        hover_img: imge5,
        title: "Men's Suits",
        price: 944,
        description: `Elevate your formal wardrobe with our impeccable collection of men's suits, designed to offer a perfect blend of style, comfort, and sophistication. Whether you're attending a business meeting, a wedding, or any formal event, our suits are tailored to make you look and feel your best.`,
        rating: {
            rate: 4.9,
            count: 1110
        },
        color: [
            {
                color: "green",
                img: imge7,
                quantity: 1,
            },
            {
                color: "red",
                img: imge8,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge9,
                quantity: 1,
            },
        ]
    },
    {
        id: 27,
        labels: "20% OFF",
        category: "electronics",
        img: imge7,
        hover_img: imge4,
        title: "Men's Suits",
        price: 144,
        description: `Elevate your formal wardrobe with our impeccable collection of men's suits, designed to offer a perfect blend of style, comfort, and sophistication. Whether you're attending a business meeting, a wedding, or any formal event, our suits are tailored to make you look and feel your best.`,
        rating: {
            rate: 1.9,
            count: 10
        },
        color: [
            {
                color: "green",
                img: imge10,
                quantity: 1,
            },
            {
                color: "red",
                img: imge1,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge2,
                quantity: 1,
            },
        ]
    },
    {
        id: 28,
        labels: "20% OFF",
        category: "electronics",
        img: imge8,
        hover_img: imge3,
        title: "Men's Suits",
        price: 544,
        description: `Elevate your formal wardrobe with our impeccable collection of men's suits, designed to offer a perfect blend of style, comfort, and sophistication. Whether you're attending a business meeting, a wedding, or any formal event, our suits are tailored to make you look and feel your best.`,
        rating: {
            rate: 3.9,
            count: 2510
        },
        color: [
            {
                color: "green",
                img: imge3,
                quantity: 1,
            },
            {
                color: "red",
                img: imge4,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge5,
                quantity: 1,
            },
        ]
    },
    {
        id: 29,
        labels: "20% OFF",
        category: "electronics",
        img: imge9,
        hover_img: imge2,
        title: "Canon PowerShot Digital Camera",
        price: 544,
        description: `Powerful 42x Optical Zoom with Optical Image Stabilizer for outstanding optical performance
        Aspect Ratio: 16:9/3:2/4:3/1:1. Built-in Wi-Fi and NFC allows for easy sharing and transferring of images and videos.
        20.0 Megapixel sensor with DIGIC 4+ Image Processor helps deliver stunning image quality and approx number 
        of shots recordable to 16 GB memory card`,
        rating: {
            rate: 2.9,
            count: 910
        },
        color: [
            {
                color: "green",
                img: imge6,
                quantity: 1,
            },
            {
                color: "red",
                img: imge7,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge8,
                quantity: 1,
            },
        ]
    },
    {
        id: 30,
        labels: "20% OFF",
        category: "electronics",
        img: imge10,
        hover_img: imge1,
        title: "Apple EarPods with Lightning",
        price: 544,
        description: `Unlike traditional, circular earbuds, the design of the EarPods is defined by the geometry of the ear which 
        makes them more comfortable for more people than any other earbud-style headphones
        The speakers inside the EarPods have been engineered to maximize sound output and minimize
         sound loss, which means you get high-quality audio`,
        rating: {
            rate: 4.9,
            count: 510
        },
        color: [
            {
                color: "green",
                img: imge9,
                quantity: 1,
            },
            {
                color: "red",
                img: imge10,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge1,
                quantity: 1,
            },
        ]
    },
]