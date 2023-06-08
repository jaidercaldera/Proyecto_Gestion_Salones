

const personalCtrl = {};
const horarioUsurario = require("../models/horarioUsurario");
personalCtrl.renderPersonal = async(req, res) => {
    const user = req.user
    try{
        const horario = await horarioUsurario.findOne({id:user}) 
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
            return res.render('user/personal', {horario: horarioVacio, user: user});
        };
        res.render('user/personal', {horario, user:user});
    }catch(error){
        console.error('Error al obtener el horario:', error);
        res.status(500).json({ mensaje: 'Ocurrió un error al obtener el horario' });
    }
    
    res.render('user/personal', {user:user});
};

personalCtrl.renderActividades = (req, res) => {
    res.render('user/actividades');
};

module.exports = personalCtrl;