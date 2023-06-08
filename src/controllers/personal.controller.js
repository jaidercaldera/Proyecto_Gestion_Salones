

const personalCtrl = {};

personalCtrl.renderPersonal = (req, res) => {
    const user = req.user
    res.render('user/personal', {user:user});
};

personalCtrl.renderActividades = (req, res) => {
    res.render('user/actividades');
};

module.exports = personalCtrl;