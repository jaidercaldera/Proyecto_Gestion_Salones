const adminCtrl = {};
const User = require("../models/User");
const horarioUsurario = require("../models/horarioUsurario");

let id = null;
adminCtrl.renderHorarios = async (req, res) => {
    const idUser = id.email 
    try{
        const horario = await horarioUsurario.findOne({email :idUser})
        console.log(horario); 
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
        res.render('admin/horariosAdmin', {horario : horario});
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
    const email = req.body.idemail;
    const lunesD = req.body.lunes;
    const martesD = req.body.martes;
    const miercolesD = req.body.miercoles;
    const juevesD = req.body.jueves;
    const viernesD = req.body.viernes;
    const sabadoD = req.body.sabado;
    const newHorarioUser = new horarioUsurario({
        email : email,
        lunes : lunesD,
        martesD : martesD,
        miercoles : miercolesD,
        jueves : juevesD,
        viernes : viernesD,
        sabado : sabadoD
    })
        newHorarioUser.save((err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error al guardar el usuario en la base de datos.');
            } else {
                req.flash("succes_msg", "Horario guardado exitosamente");
                res.redirect("/admin/selectUser")
            };
        });
    }
module.exports = adminCtrl;