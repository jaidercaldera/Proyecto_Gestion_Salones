const publicoCtrl = {};

publicoCtrl.renderSalones = (req, res) => {
    res.render('user/salones');
};

publicoCtrl.renderEventos = (req, res) => {
    res.render('user/eventos');
};

publicoCtrl.renderExtracurriculares = (req, res) => {
    res.render('user/extracurriculares');
};
publicoCtrl.renderPersonalizar = (req, res) => {
    res.render('user/personalizar');
};
module.exports = publicoCtrl;