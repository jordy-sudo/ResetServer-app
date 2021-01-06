// ===========================================
//  Puerto
// ===========================================
process.env.PORT = process.env.PORT || 3000;

// ===========================================
//  Entorno
// ===========================================
process.env.NODE_ENV=process.env.NODE_ENV || 'dev';

// ===========================================
//  Base de datos
// ===========================================
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB= "mongodb://localhost:27017/cocoa";
}else{
    urlDB= "mongodb+srv://cocoa-user:btpTrihek0RW1IsG@cluster0.osl8q.mongodb.net/cocoa"
}

process.env.URLDB = urlDB;