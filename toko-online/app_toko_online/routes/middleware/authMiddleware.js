exports.adminOnly = (req, res, next) => {
    const isAdmin = req.body.isAdmin;
    if (isAdmin === true) {
        console.log('Middleware: Akses Admin Diberikan.');
        next();//lanjutkan
    }else{
        return res.status(403).json({
            success: false,
            message: 'Akses Ditolak. Endpoint ini membutuhkan hak admin'
        });
    }
};