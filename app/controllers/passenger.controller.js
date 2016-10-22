/**
 * Created by hoang on 10/13/2016.
 */
var mongoose = require('mongoose');

require('./passenger');

var Passenger = mongoose.model('Passenger');

var passenger = {};

passenger.get = function(bookId,assignedValue){
    assignedValue = assignedValue | null;
    if(assignedValue == null) {
        Passenger.find({"madatcho": bookId}, 'danhxung ho ten', function (err, data) {
            if (err) {
                return null;
            } else {
                return data;
            }
        });
    }else{
        Passenger.find({"madatcho": bookId}, 'danhxung ho ten', function (err, data) {
            if (err) {
                assignedValue = null;
            } else {
                assignedValue = data;
            }
        });
    }
};

passenger.add = function(newPassenger){
    Passenger.create(newPassenger,function(err,data){
        if(err) return false;
        return true;
    });
};

module.exports = passenger;