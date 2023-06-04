

const personalCtrl = {};

personalCtrl.renderPersonal = (req, res) => {
    const user = req.user
    res.render('personal', {user:user, user:user});
};

personalCtrl.renderActividades = (req, res) => {
    res.render('actividades');
};

module.exports = personalCtrl;