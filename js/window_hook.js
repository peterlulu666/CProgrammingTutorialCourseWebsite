/*
*
* © 2015 Northeastern University
* College of Computer and Information Science (CCIS)
*
* pop-up window and iframe populator
*
*/


var q_arr = [];


function windowHook(chapter){
    var Q_DIV_SIZE_CONST = 305;
    var Q_multiples = -320 * q_arr.length;
    console.log("Q_multiples");
    var newDoc;
    var HTMLstring = "";

    HTMLstring = '<HTML>\n';
    HTMLstring += '<HEAD>\n';
    HTMLstring += '<TITLE>New Document</TITLE>\n';
    HTMLstring += '<link rel="stylesheet" href="css/Q_styles.css">';

    HTMLstring += '</HEAD>\n';
    HTMLstring += '<BODY>\n';
    HTMLstring += '<div id="Q_holder" onmouseout="Q_out(' + Q_multiples +  ');" onmouseover="Q_hover();">\n';
    HTMLstring += '<div id="knowl_check_tab">Check Your Knowledge</div>\n';
        
    for(var n = 0; n < q_arr.length; n++){
        console.log("entered q populator function");
        
        HTMLstring += '<div class="q_area"><div id="' + q_arr[n] + '" class="q_form"></div><div id="' + q_arr[n] + '" class="feedback"></div></div>\n';
    }
    
    HTMLstring += '</div>\n'; // END Q_holder
    HTMLstring += '<div id="book_contain">\n';
    HTMLstring += '<iframe id="book_frame" src="' + getURL(chapter) + '" frameborder="0" seamless="seamless" width="100%" height="100%" ></iframe>';
    HTMLstring += '</div>\n'; // END book contain
    HTMLstring += '</BODY>\n';

    HTMLstring += '<script' + " src='js/Q_engine.js'></scr" + "ipt>\n";
    HTMLstring += '<script' + ">get_json('p_q');" + "</scr" + "ipt>"; // This function is dynamically called on creation

    HTMLstring += '</HTML>';

    newWindow = window.open("",'_blank','toolbar=yes, status=yes, resizable=yes, scrollbars=0, left=150, top=35, outerWidth=1100, outerHeight=1000');
    newDoc = newWindow.document;

    newDoc.write(HTMLstring);

    newDoc.getElementById("Q_holder").setAttribute("style", "height:" + Q_DIV_SIZE_CONST * q_arr.length + "px");
    
    if(q_arr.length == 0){
        newDoc.getElementById("Q_holder").style["bottom"] = "-2000px"; // set initial bottom value for q holder !important
    }else{
        newDoc.getElementById("Q_holder").style["bottom"] = Q_multiples + "px"; // set initial bottom value for q holder !important
    }
        
        console.log("newDoc created");
        console.log("exit windowHook");
    

    return newDoc;
} // END window hook


function appendWin(newDoc){
    console.log("Entered append");

    //var div = document.createElement("div"); // create div before appending
    //newDoc.body.appendChild(div);
    //div.setAttribute('id', 'Q_insert');

    //var inText = document.createTextNode("Appended Div");
    //div.appendChild(inText);
       
    newDoc.close();
    
} // END append win





