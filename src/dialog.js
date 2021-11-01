const { input } = require( 'console-input' );
require( 'colors' );
const data = require( './SES_KB' );

const startExpertize = ( data, searchKey ) => {
    const localKeys = {};
    while ( data.rules.length && !localKeys[searchKey] ) {
        const currentRule = data.rules[0];
        let checkRuleConditions = true;
        for ( const key of Object.keys( localKeys ) ) {
            if ( currentRule.conditions[key] && localKeys[key] !== currentRule.conditions[key] ) {
                checkRuleConditions = false;
            }
        }
        if ( !checkRuleConditions ) {
            data.rules.shift();
            continue;
        }
        const currentConditionKey = Object.keys( currentRule.conditions ).filter( condition => !Object.keys( localKeys ).includes( condition ) )[0];
        if ( currentConditionKey ) {
            const dataItem = data.data[currentConditionKey];
            console.log( `${dataItem.question}`.yellow );

            let i = 1;
            dataItem.allows.forEach( v => console.log( `${i++} => ${v}` ) );
            const userInput = input( ' ==> ' );
            localKeys[currentConditionKey] = dataItem.allows[userInput - 1];
        }

        let checkRuleResult = true;
        for ( const conditionsKey in currentRule.conditions ) {
            const check = localKeys[conditionsKey] === currentRule.conditions[conditionsKey];
            if ( !check ) {
                checkRuleResult = false;
            }
        }
        if ( checkRuleResult ) {
            for ( const actionKey in currentRule.action ) {
                localKeys[actionKey] = currentRule.action[actionKey];
            }
            data.rules.shift();
        }
    }
    return localKeys[searchKey];
};

console.log( '\n***\nResult: ' + startExpertize( data, 'факультет' ) );
