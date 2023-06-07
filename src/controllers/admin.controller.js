const adminCtrl = {};

adminCtrl.renderHorarios = (req, res) => {
    res.render('horariosAdmin');
};

adminCtrl.renderEventos = (req, res) => {
    res.render('eventosAdmin');
};

adminCtrl.renderExtra = (req, res) => {
    res.render('extraAdmin');
};

adminCtrl.renderSalones = (req, res) => {
    res.render('salonesAdmin');
};




module.exports = adminCtrl;