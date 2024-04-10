const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send('Welcome  to user')
})


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'futuretouchs@gmail.com', 
        pass: 'ufvmdzzopesgubhg' 
    }
});


app.post("/sendmail", (req, res) => {
   
    console.log(req.body)


    
    const doctorName = req.body.doctor_name || '';
    const name = req.body.S_name || '';
    const phone = req.body.S_phone || '';
    const email = req.body.S_email || '';
    const message = req.body.message || '';
    const Location_form = req.body.Location_form || '';
    const Location_to = req.body.Location_to || '';
    const userEmailsir = req.body.userEmailsir || 'manshusmartboy@gmail.com';
    const tentative_schedule = req.body.tentative_schedule || '';
    const delivery_method = req.body.delivery_method || '';
    const moving_from_country = req.body.moving_from_country || '';
    const selectedCity = req.body.selectedCity || '';
    const cityTempo = req.body.cityTempo || '';

    const destinationcity = req.body.destinationcity || '';



    

 

   const S_date = req.body.S_date || ''
    const moving_from_state = req.body.moving_from_state || '';
    const moving_from_city = req.body.moving_from_city || '';
    const moving_to_country = req.body.moving_to_country || '';
    const Location_form_state = req.body.Location_form_state || '';
    const Location_to_state = req.body.Location_to_state || '';
    const delivery_type = req.body.delivery_type || '';

    const sourcecity = req.body.sourcecity || '';

    const pickUpLocation = req.body.pickUpLocation || '';
    const dropOffLocation = req.body.dropOffLocation || '';
    const shiftTime = req.body.shiftTime || '';

    const vehicleshiftingfrom = req.body.vehicleshiftingfrom || '';
    const vehicleshiftingto = req.body.vehicleshiftingto || '';





    
  const new_url = req.body.new_url || '';
  const need_service = req.body.need_service || '';



    let htmlBody = `
        ${doctorName ? '<p><strong>Doctor:</strong> ' + doctorName + '</p>' : ''}
        ${name ? '<p><strong>Name:</strong> ' + name + '</p>' : ''}
        ${phone ? '<p><strong>Phone:</strong> ' + phone + '</p>' : ''}
        ${email ? '<p><strong>Email:</strong> ' + email + '</p>' : ''}
        ${Location_form ? '<p><strong>Location Form:</strong> ' + Location_form + '</p>' : ''}
        ${Location_to ? '<p><strong>Location To:</strong> ' + Location_to + '</p>' : ''}
        ${tentative_schedule ? '<p><strong> Tentative Schedule:</strong> ' + tentative_schedule + '</p>' : ''}
        ${delivery_method ? '<p><strong> Delivery Method:</strong> ' + delivery_method + '</p>' : ''}
        ${moving_from_country ? '<p><strong>Moving From Country </strong> ' + moving_from_country + '</p>' : ''}
        ${new_url ? '<p><strong> Website Url </strong> ' + new_url + '</p>' : ''}
        ${moving_to_country ? '<p><strong>Moving To Country </strong> ' + moving_to_country + '</p>' : ''}
        ${moving_from_state ? '<p><strong>Moving From State:</strong> ' + moving_from_state + '</p>' : ''}
        ${moving_from_state ? '<p><strong>Moving From State:</strong> ' + moving_from_state + '</p>' : ''}
        ${Location_form_state ? '<p><strong> Location From state :</strong> ' + Location_to_state + '</p>' : ''}
        ${cityTempo ? '<p><strong> Enter your City :</strong> ' + cityTempo + '</p>' : ''}
        ${sourcecity ? '<p><strong> Enter Source City :</strong> ' + sourcecity + '</p>' : ''}
        ${destinationcity ? '<p><strong> Enter Destination City :</strong> ' + destinationcity + '</p>' : ''}
        ${pickUpLocation ? '<p><strong> Pickup from :</strong> ' + pickUpLocation + '</p>' : ''}
        ${dropOffLocation ? '<p><strong> Drop at :</strong> ' + dropOffLocation + '</p>' : ''}
        ${shiftTime ? '<p><strong> Shifting Date :</strong> ' + shiftTime + '</p>' : ''}
        ${vehicleshiftingfrom ? '<p><strong> Vehicle Shifting From:</strong> ' + vehicleshiftingfrom + '</p>' : ''}
        ${vehicleshiftingto ? '<p><strong> Vehicle Shifting To:</strong> ' + vehicleshiftingto + '</p>' : ''}


        ${selectedCity ? '<p><strong>  Selected City :</strong> ' + selectedCity + '</p>' : ''}
        ${Location_to_state ? '<p><strong> Location TO state </strong> ' + Location_to_state + '</p>' : ''}
        ${delivery_type ? '<p><strong> Delivery Type </strong> ' + delivery_type + '</p>' : ''}
        ${need_service ? '<p><strong> Services </strong> ' + need_service + '</p>' : ''}
        ${S_date ? '<p><strong> Moving Date </strong> ' + S_date + '</p>' : ''}
        ${message ? '<p><strong>Message:</strong> ' + message + '</p>' : ''}
    `;
    
    let mailOptions = {
        from: 'futuretouchs@gmail.com', 
        to: userEmailsir, 
        subject: 'Appointment Booking', 
        html: htmlBody
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error occurred:', error);
        }
        console.log('Email sent:', info.response);
    });

    res.send('Email sent');

});




app.listen(9000,()=>{
    console.log('server is running on port 9000')
})