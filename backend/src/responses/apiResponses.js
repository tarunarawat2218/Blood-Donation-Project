exports.success = (res, data, message) => {
    res.status(200).json({success: true, data, message});
};

exports.created = (res, data, message) => {
    res.status(201).json({success: true, data, message});
};

exports.badRequest = (res, message) => {
    res.status(400).json({success: false, message});
};

exports.unauthorized = (res, message) => {
    res.status(401).json({success: false, message});
};

exports.forbidden = (res, message) => {
    res.status(403).json({success: false, message});
};

exports.notFound = (res, message) => {
    res.status(404).json({success: false, message});
};

exports.conflict = (res, message) => {
    res.status(409).json({success: false, message});
};

exports.internalServerError = (res, message, error) => {
    res.status(500).json({success: false, message, error});
};
