import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
// kisi ko bolne se kuchh nahi hota bas apne pe bharosa rakho or thoda kud ko push karo like go tune deside kiya h karne ko wo kar le bas or go desid kart h karne ko wo asa desid karo go realistic ho go pura kar sako
