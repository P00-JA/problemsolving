//function to generate each pattern 
//for n there is Cn patterns
//Cn = 2n!/(n+1)!n!
function eachPattern(openBrackets,closingBrackets,pattern){
    if(openBrackets==0 && closingBrackets==0){
        console.log(pattern);
        return pattern;
    }
    if(openBrackets>0){
        eachPattern(openBrackets-1,closingBrackets+1,pattern+'(');
    }
    if(closingBrackets>0){
        eachPattern(openBrackets,closingBrackets-1,pattern+')');
    }
}
//function that generate combination of n number of parentheses
function generateParenthesesCombo(n){
   (eachPattern(n,0,''));
}
generateParenthesesCombo(4);