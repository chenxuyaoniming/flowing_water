

export default (function() {
    const info = [];
    function getInfo() {
        return info
    }
    function setInfo(data) {
        info.push(data);
    }
    function delInfo(index) {
        info.splice(index, 1)
    }

    return {
        getInfo,
        setInfo,
        delInfo
    }
})()