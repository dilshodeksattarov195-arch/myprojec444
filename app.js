const orderFetchConfig = { serverId: 504, active: true };

const orderFetchHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_504() {
    return orderFetchConfig.active ? "OK" : "ERR";
}

console.log("Module orderFetch loaded successfully.");