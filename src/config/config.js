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

process.env.SEED_JWT = process.env.SEED_JWT || 'este-es-el-seed-desarrollo';

// ====================
//  TOKEN EXPIRATION
// ====================
// 60 SEC
// 60 MIN
// 24 HRS
// 30 DAYS

process.env.EXPIRATION_TOKEN = 60 * 60 * 24 * 30;