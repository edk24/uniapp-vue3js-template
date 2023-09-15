const cancelerMap = new Map();

class RequestCancel {
    static createInstance() {
        return this.instance ?? (this.instance = new RequestCancel());
    }

    add(url, requestTask) {
        this.remove(url);
        if (cancelerMap.has(url)) {
            cancelerMap.delete(url);
        }
        cancelerMap.set(url, requestTask);
    }

    remove(url) {
        if (cancelerMap.has(url)) {
            const requestTask = cancelerMap.get(url);
            requestTask && requestTask.abort();
            cancelerMap.delete(url);
        }
    }
}

const requestCancel = RequestCancel.createInstance();

export default requestCancel;