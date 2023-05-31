const publicoCtrl = {};

publicoCtrl.renderSalones = (req, res) => {
    res.render('salones');
};

publicoCtrl.renderEventos = (req, res) => {
    res.render('eventos');
};

publicoCtrl.renderExtracurriculares = (req, res) => {
    res.render('extracurriculares');
};
publicoCtrl.renderPersonalizar = (req, res) => {
    res.render('personalizar');
};
module.exports = publicoCtrl;