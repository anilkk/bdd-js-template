(function() {

    function formatString (str) {
        var  formatStr = '';
        if ((str.indexOf('//') === 0) &&  (typeof str[2] !== 'number')) {
            return str.replace('//', '').replace(new RegExp(str[2], 'g'), ',');
        }
        else {
            return str;
        }
        
    }
    String.prototype.calc = function() {
        var total = 0;
        formatString(this.toString()).replace(/\n/, ',').split(',').forEach(function(element, index) {
            var value = parseInt(element);
            if (element.length & (value < 1000)) {
                total += value;
            }
        });

        return total;
    };
})();
