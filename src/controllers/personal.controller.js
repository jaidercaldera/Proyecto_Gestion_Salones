

const personalCtrl = {};

personalCtrl.renderPersonal = (req, res) => {
    res.render('personal');
};

personalCtrl.renderActividades = (req, res) => {
    res.render('actividades');
};

module.exports = personalCtrl;