// ====================
//  PORT
// ====================

process.env.PORT = process.env.PORT || 3000;


// ====================
//  DATABASE
// ====================

let urlDB;

if( process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/careers';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ====================
//  SEED
// ====================

process.env.SEED_AUTH = process.env.SEED_AUTH || 'este-es-el-seed-desarrollo';

// ====================
//  TOKEN 
// ====================
// 60 SEG
// 60 MIN
// 24 HORAS
// 30 DIAS

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;