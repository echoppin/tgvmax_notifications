const request_sncf = require('./request_sncf')

function serilizer_definetrip(body) {
    const params_list = ["date", "origin_id", "origin_label", "destination_id", "destination_label", "user_id"]
    for (param in params_list) {
        if (body[param] == "") {
            return false
        }
    }
    return true
}

function serializer_output_definetrip(body) {
    const sncf_response = request_sncf.get_price(body).then((response) => {
        console.log("sncf_response")
        console.log(response)
        return response})
}


module.exports = { serilizer_definetrip, serializer_output_definetrip };