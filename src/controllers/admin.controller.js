const adminCtrl = {};
const User = require("../models/User")
let id = null;
adminCtrl.renderHorarios = (req, res) => {
    res.render('admin/horariosAdmin');
};

adminCtrl.renderEventos = (req, res) => {
    res.render('admin/eventosAdmin');
};

adminCtrl.renderExtra = (req, res) => {
    res.render('admin/extraAdmin');
};

adminCtrl.renderSalones = (req, res) => {
    res.render('admin/salonesAdmin',{id});
};

adminCtrl.renderSelectUser = (req, res) =>{
    res.render('admin/selectUser')
};

adminCtrl.renderHorarioUser = async (req, res) =>{
    const {email} = req.body;
    id = await User.findOne({email : email});
    console.log(id);
    if(id){
        req.flash("succes_msg", "Usuario Encontrado");
        console.log(id.email)
        res.redirect("/salonesAdmin");
    }else{
        req.flash("error_msg", "Usuario no encontrado");
        res.redirect("/admin/selectUser");
    }
};

module.exports = adminCtrl;