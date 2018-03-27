var Subject = function() {
    this.observers = [];
    return {
        subscribeObserver: function(observer) {
            this.observers.push(observer);
        },
        unsubscribeObserver: function(observer) {
            var index = this.observers.indexOf(observer);
            if (index > -1) {
                this.observers.splice(index, 1);
            }
        },
        notifyObserver: function(observer) {
            var index = this.observers.indexOf(observer);
            if (index > -1) {
                this.observers[index].notify(index);
            }
        },
        notifyAllObservers: function() {
            for (var i = 0; i < this.observers.length; i++) {
                this.observers[i].notify(i);
            };
        }
    };
};



var Observer = function(elem) {
    var _elem = elem;
    var _addResult = function(result) {
        var _template = "<p class=\"card-text\">" + result + "</p>";
        _elem.innerHTML += _template;
    }

    return {
        notify: function(action, value) {
            console.log("Obeserver working!");
            if (action === "new-result") {
                addResult(value);
            } else {
                console.log("unkwnon action!");
                return;
            }
        }
    }
};