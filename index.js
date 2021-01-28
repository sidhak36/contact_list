

const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
// const db = require('./models/config')
// const Contact = require('./models/contactSchema').Contact;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));


let contactList = [
    {
        name: "sidhak",
        number: "90012939394",
    },
    {
        name: "aman",
        number: "4987289278790",
    },
    {
        name: "rahul",
        number: "792374979094",
    },
];

app.get('/', function(req, res){
    res.send('<h1>Hola!</h1>');
});

app.get('/contacts', function(req, res){
    // Contact.find({}, function(err, contact){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     res.render('contact', {contact_list: contact});
    // });
    res.render('contact', {contact_list: contactList});
    return;
});

app.post('/add-contact', function(req, res){
    contactList.push(req.body);
    // Contact.create(req.body, function(err, contact){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log(`Contact created successfully!`);
    // });
    res.redirect('/contacts');
});

app.get('/delete-contact', function(req, res){

    let index = -1;
    for(let i = 0; i < contactList.length; i++){
        if(contactList[i].number == req.query.number){
            index = i;
        }
    }

    if(index != -1){
        contactList.splice(index, 1);
    }
    // Contact.findByIdAndDelete(req.query.id, function(err, contact){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log(typeof(contact._id));
    //     console.log(`The contact is deleted successfully`);
    // });
    res.redirect('back');
});

app.listen(port, function(err){
    if(err){
        console.log('An error occured while starting server', err);
        return;
    }

    console.log(`Successfully started server at port ${port}`);
});

