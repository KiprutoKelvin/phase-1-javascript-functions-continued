// code your solution here
const saturdayFun = (activity = "roller-skate") => {

return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
 const mondayWork = (activity = "go to the office") => {
return (`This Monday, I will ${activity}.`);
}
mondayWork();
const wrapAdjective = (timesOperator = '*') => {
    return function(sign = 'special'){
        return (`You are ${timesOperator}${sign}${timesOperator}!`);
    }
}
wrapAdjective();