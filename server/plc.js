var nodepccc = require('nodepccc');
var conn = new nodepccc;

conn.initiateConnection({ port: 44818, host: '192.168.0.20' })

const modify = (address, value, callback) => {
    if (!address || !value) {
        return "Albahaca"
    }
    conn.writeItems(tag(address), Number(value))
    callback({ address: tag(address), value })
}


const tag = (tag) => {
    switch (tag) {
        case "BlinkingLights":
            return "B3:0/1"
        case "Stop":
            return "B3:0/5"
    }
}

module.exports = {
    modify
}
