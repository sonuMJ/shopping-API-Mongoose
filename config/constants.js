module.exports = {
    DB_URL : `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.sowwj.mongodb.net/sportsshop?retryWrites=true&w=majority`,
    DB_NAME : "onlineshopping",
    PRODUCT_TABLE : "products",
    CART_TABLE : "cart",
    ORDER_TABLE : "order",
}