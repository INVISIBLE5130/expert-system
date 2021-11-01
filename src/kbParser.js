const fs = require( 'fs' );

const eslParser = ( str, opts ) => {
    const options = opts || {};
    const { logs } = options;

    const kbObject = {
        allows: {},
        questions: {},
        rules: []
    };

    const dataObj = str
        .split( ';' )
        .map( row => row.replace( /(\r\n|\n|\r)/gm, '' ).trim() )
        .filter( str => str )
        .map( row => {
            if ( row.substr( 0, 5 ) === 'allow' ) {
                const rowData = row.split( '=' );
                const parsedKey = rowData[0]
                    .replace( 'allow', '' )
                    .replace( '(', '' )
                    .replace( ')', '' )
                    .replace( /\"/gm, '' )
                    .trim();
                const parsedValues = rowData[1].split( ',' ).map( v => v.trim() );
                kbObject.allows[parsedKey] = parsedValues;
            } else if ( row.substr( 0, 8 ) === 'question' ) {
                const rowData = row.split( '=' );
                const parsedKey = rowData[0]
                    .replace( 'question', '' )
                    .replace( '(', '' )
                    .replace( ')', '' )
                    .replace( /\"/gm, '' )
                    .trim();
                const parsedValues = rowData[1].replace( /\"/gm, '' ).trim();

                kbObject.questions[parsedKey] = parsedValues;
            } else if ( row.substr( 0, 4 ) === 'rule' ) {
                const rowData = row.split( ':' )[1].split( 'then' );
                const ruleObj = {
                    conditions: {},
                    action: {}
                };

                // if( rowData[0].includes('&') ){
                rowData[0].split( '&' ).forEach( cond => {
                    const condData = cond.split( '=' );
                    ruleObj.conditions[condData[0].trim()] = condData[1].trim();
                } );
                // }else{
                //     const condData = rowData[0].split('=');
                //     ruleObj[ condData[0] ] = condData[1];
                // }
                rowData[1].split( '&' ).forEach( cond => {
                    const condData = cond.split( '=' );
                    ruleObj.action[condData[0].trim()] = condData[1].trim();
                } );

                kbObject.rules.push( ruleObj );
            } else {
                throw new Error( 'Line must start on allow | question | rule' );
            }
            return row;
        } );

    let i = 1;

    if ( logs ) {
        dataObj.forEach( row => {
            console.log( `${i++} | ` + JSON.stringify( row ) );
        } );
    }

    return kbObject;
};

fs.readFile( __dirname + '/kb1.txt', ( error, data ) => {
    if ( error ) {
        throw error;
    }
    const dataStr = data.toString();
    console.log( JSON.stringify( eslParser( dataStr ) ) );
} );

module.exports = eslParser;
