const registrationModel = require("../models/registration.models");


const getregistration = async (registrationParams) => {
    //console.log("clientParams",clientBody);
    const result = await registrationModel.find({ registrationParams }); //(clientBody||{})
    //console.log(clientParams);
    console.log(result);
    return result;
  };
  
  const createregistration = async (registrationBody) => {
    const newData = new registrationModel({
      images: registrationBody.images,
      ownername: registrationBody.ownername,
      businessname: registrationBody.businessname
    });
      
    const result = await newData.save();
    //console.log(result);
    return result;
  
  };




// const getregistration = async(registrationParams) => {
//     const result = await registrationModel.find({registrationParams}, (err, items) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         }
//         else {
//             return result;
//             // res.render('imagesPage', { items: items });
//         }
//     });
// }

// const createregistration =('/', upload.single('image'), (req, res, next) => {
  
//     var obj = {
//         ownername: req.body.ownername,
//         businessname: req.body.businessname,
//         img: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/png'
//         }
//     }
//     registrationModel.create(obj, (err, item) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             // item.save();
//             res.redirect('/');
//         }
//     });
// });
    

  



module.exports = {
    getregistration,
    createregistration
}
    
   
    
