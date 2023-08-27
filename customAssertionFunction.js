const expect = function(val) {
    return {
        toBe: function(actualVal) {
            if (val === actualVal) {
                return true
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe: function(actualValue) {
            if (val !== actualValue) {
                return true
            } else {
                throw new Error("Equal")
            }
        }
    }
};

expect(5).toBe(5) // returns true
expect(5).toBe(4) // throws error "Not Equal"

expect(5).notToBe(5) // throws error "Equal"
expect(5).notToBe(4) // returns true
