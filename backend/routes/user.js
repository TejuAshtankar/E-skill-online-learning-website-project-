require('dotenv').config();
const express = require('express');
const router = express.Router();
const connection = require('../connection');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
var auth=require('../services/authentication');
var checkRole =require('../services/checkRole')


//registeration
router.post('/signup', (req, res) => {
    let userdata = req.body;
    query = "select email, password, role, status from cafenodejs.user where email=?"
    connection.query(query, [userdata.email], function (err, results) {
        if (!err) {

            if (results.length <= 0) {
                query = "INSERT INTO cafenodejs.user(name, contactNumber, email,password,status,role) values (?,?,?,?,'false','user')";
                connection.query(query, [userdata.name, userdata.contactNumber, userdata.email, userdata.password], (err, results) => {
                    if (!err) {
                        return res.status(200).json({ message: "user sucessfully registered" })
                    }
                    else {
                        return res.status(500).json("error occured" + err);
                    }
                })
            }
            else {
                return res.status(400).json({ msg: "email alread exists" })
            }
        }
        else { return res.status(500).json("error at the end" + err) }
    })

})

//login
router.post('/login', (req, res) => {
    let reqdata = req.body;
    var query = "select email, password, role, status from cafenodejs.user where email=?"
    connection.query(query, [reqdata.email], function (err, result) {
        if (!err) {
            if (result.length <= 0 || result[0].password != reqdata.password) {
                res.status(401).json({ msg: "invalid user or password" })
            }
            else if (result[0].status === 'false') {
                return res.status(401).json({ msg: "wait for admin aproval" })
            } else
                if (result[0].password == reqdata.password) {

                    //generating token
                    const response = { email: result[0].email, role: result[0].role }
                    const accessToken = jwt.sign(response, process.env.ACCESS_KEY, { expiresIn: '8h' })
                    res.status(200).json({ token:accessToken })


                } else {
                    res.status(400).json({ msg: "something went wrong please try again" });
                }

        }
        else {
            res.status(500).json(err);
        }

    })

})

//transport define
var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

//forgetpassword

router.post('/forgetpassword', (req, res) => {
    const reqdata = req.body;
    query = "select email, password, role, status from cafenodejs.user where email=?";
    connection.query(query, [reqdata.email], function (err, result) {
        if (!err) {
            if (result.length <= 0) {
                return res.status().json({ msg: "password has been sucesfull send to entered mail" })
            } else {

                var mailOptions = {
                    from: process.env.EMAIL,
                    to: result[0].email,
                    subject: 'password by cafe management system',
                    html: '<p><b>Your login details for cafe managemnet sstem</b> <br><b>Email:</b>' + result[0].email + '<br><b>password:</b>' + result[0].password + '<br><a href="http://localhost:4200/">click here to login</a></p>'
                };
                transport.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('EmailSend :' + info.response);
                    }
                })
            }
        }
    })
})


//get user all data
router.get('/get', auth.authenticationToken,checkRole.checkRole,(req,res)=> {
    
var query ="select id,name,email,contactnumber,status from cafenodejs.user where role='user'";
    connection.query(query, function(err, result){
        if (!err) {
            
            return res.status(200).json(result);

        } else {
            return res.status(500).json("error"+err);
        }
    })
})

//to update the status
router.patch('/update',auth.authenticationToken,checkRole.checkRole,(req, res) => {
    const reqdata = req.body;
    query = "update cafenodejs.user set status=? where id=?";
    connection.query(query, [reqdata.status, reqdata.id], function (err, result) {
        if (!err) {
            if (result.affectedRows == 0) {
                return res.status(404)
            } else {
                return res.status(200).json({ msg: "user updated sucessfully" })
            }
        } else {
            return res.status(500).json(err);
        }

    })
})


//check token 
router.get('/checkToken', auth.authenticationToken,checkRole.checkRole,(req, res) => {
    return res.status(200).json({msg:"true"});

})

//change password
router.post('/changePassword',auth.authenticationToken, (req, res) => {
    const reqdata = req.body;
    //we are taking email from token alread pesent inside local.storage
    const email=res.locals.email;
    var query = "select * from cafenodejs.user where email=? and password=?";
    connection.query(query, [email,reqdata.oldPassword], function (err, result) {

        if(!err){
            if(result.length <=0){
                return res.status(400).json({msg:"incorrect old password"});
                
            }else if(result[0].password == reqdata.oldPassword){
                query="update cafenodejs.user set password=? where email=?";
                connection.query(query,[reqdata.newPassword,email],(err, result)=>{
                    if(!err){
                        return res.status(200).json({msg:"password updated sucesfull."})
                    }else{
                        return res.status(500).json(err);
                    }
                })
            }
            else{return res.status(400).json({msg:"something went wrong , plz tr again"});
        }
        }else{
            return res.status(500).json(err);
        }
    })
})




module.exports = router;