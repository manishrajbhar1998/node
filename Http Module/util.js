function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}


exports.name = (params) => {
    console.log(params)
}

module.exports = {
    add,
    sub
}


