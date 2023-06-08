const adminCtrl = {};
const User = require("../models/User");
const horarioUsurario = require("../models/horarioUsurario");

let id = null;
adminCtrl.renderHorarios = async (req, res) => {
    try{
        const horario = await horarioUsurario.findOne({email : id.email}) 
        if(!horario){
            const horarioVacio=[]
            for(let hora = 6; hora<= 20; hora++){
                const fila={
                    hora: hora + ':00',
                    lunes: '',
                    martes: '',
                    miercoles: '',
                    jueves: '',
                    viernes: '',
                    sabado: ''
                };
                horarioVacio.push(fila);
            };
            return res.render('admin/horariosAdmin', {horario: horarioVacio, id: id});
        };
        res.render('admin/horariosAdmin', {horario});
    }catch(error){
        console.error('Error al obtener el horario:', error);
        res.status(500).json({ mensaje: 'Ocurrió un error al obtener el horario' });
    }
};

adminCtrl.renderEventos = (req, res) => {
    res.render('admin/eventosAdmin');
};

adminCtrl.renderExtra = (req, res) => {
    res.render('admin/extraAdmin');
};

adminCtrl.renderSalones =  (req, res) => {
    
    res.render('admin/salonesAdmin',{id});
};

adminCtrl.renderSelectUser = async (req, res) =>{
    res.render("admin/selectUser")
};

adminCtrl.renderHorarioUser = async (req, res) =>{
    const {email} = req.body;
    id = await User.findOne({email : email});
    console.log(id);
    if(id){
        req.flash("succes_msg", "Usuario Encontrado");
        console.log(id.email)
        res.redirect("/admin/horariosAdmin");
    }else{
        req.flash("error_msg", "Usuario no encontrado");
        res.redirect("/admin/selectUser");
    }
};

adminCtrl.saveHorarioUser = async (req, res) =>{
    const {clase, salon , hora} = req.body;
    const newHorario = new horarioUsurario({clase, salon , hora});
    newHorario.id = id.email;
    await newHorario.save();
    req.flash("success_msg", "Horario registrado.");
    res.redirect("/admin/horariosAdmin");
}
module.exports = adminCtrl;