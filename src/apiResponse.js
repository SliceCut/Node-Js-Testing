/**
 * 
 * @param {Response} res 
 * @param {any} error 
 * @param {number} code 
 * @returns 
 */
 const sendError = (res, error, code)=> {
    return res.status(code).json({
        "status" : code,
        "message" : error
    });
}

/**
 * 
 * @param {Response} res 
 * @param {string} message 
 * @param {*} data 
 * @param {number} code
 */
const successResponse = (res, message, data = null, code = 200) => {
    var response = {
        "status": code,
        "message" : message
    };
    if(data) {
        response.data = data;
    }

    return res.status(code).json(response);
}

exports.successResponse = successResponse
exports.sendError = sendError