/* 
 * English layout for smart-tv-keyboard
 * Denys Petrovnin <dipcore@gmail.com>
 * Date: 17-May-2015 11:16:22 PM
 */
smartTvKeyboardLayouts = typeof smartTvKeyboardLayouts === 'undefined'? {} : smartTvKeyboardLayouts;
smartTvKeyboardLayouts.en = {
    unshift: [
    	[
            {text: '`', value: '`', length: 1, color: 'grey'},
            {text: '1', value: '1', length: 1, color: 'grey'},
            {text: '2', value: '2', length: 1, color: 'grey'},
            {text: '3', value: '3', length: 1, color: 'grey'},
            {text: '4', value: '4', length: 1, color: 'grey'},
            {text: '5', value: '5', length: 1, color: 'grey'},
            {text: '6', value: '6', length: 1, color: 'grey'},
            {text: '7', value: '7', length: 1, color: 'grey'},
            {text: '8', value: '8', length: 1, color: 'grey'},
            {text: '9', value: '9', length: 1, color: 'grey'},
            {text: '0', value: '0', length: 1, color: 'grey'},
            {text: '-', value: '-', length: 1, color: 'grey'},
            {text: '=', value: '=', length: 1, color: 'grey'},
            {text: 'Clear', value: '&&clear', length: 2, color: 'red'}
        ],
        [
            {text: 'q', value: 'q', length: 1, color: 'grey'},
            {text: 'w', value: 'w', length: 1, color: 'grey'},
            {text: 'e', value: 'e', length: 1, color: 'grey'},
            {text: 'r', value: 'r', length: 1, color: 'grey'},
            {text: 't', value: 't', length: 1, color: 'grey'},
            {text: 'y', value: 'y', length: 1, color: 'grey'},
            {text: 'u', value: 'u', length: 1, color: 'grey'},
            {text: 'i', value: 'i', length: 1, color: 'grey'},
            {text: 'o', value: 'o', length: 1, color: 'grey'},
            {text: 'p', value: 'p', length: 1, color: 'grey'},
            {text: '[', value: '[', length: 1, color: 'grey'},
            {text: ']', value: ']', length: 1, color: 'grey'},
            {text: '\\', value: '\\', length: 1, color: 'grey'},
            {text: 'Back', value: '&&back', length: 2, color: 'red'}
        ],
        [
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: 'a', value: 'a', length: 1, color: 'grey'},
            {text: 's', value: 's', length: 1, color: 'grey'},
            {text: 'd', value: 'd', length: 1, color: 'grey'},
            {text: 'f', value: 'f', length: 1, color: 'grey'},
            {text: 'g', value: 'g', length: 1, color: 'grey'},
            {text: 'h', value: 'h', length: 1, color: 'grey'},
            {text: 'j', value: 'j', length: 1, color: 'grey'},
            {text: 'k', value: 'k', length: 1, color: 'grey'},
            {text: 'l', value: 'l', length: 1, color: 'grey'},
            {text: ';', value: ';', length: 1, color: 'grey'},
            {text: '\'', value: '\'', length: 1, color: 'grey'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: 'Enter', value: '&&enter', length: 2, color: 'dark-blue'}
        ],
        [
            {text: 'abc', value: '&&switchMode', length: 2, color: 'green'},
            {text: 'z', value: 'z', length: 1, color: 'grey'},
            {text: 'x', value: 'x', length: 1, color: 'grey'},
            {text: 'c', value: 'c', length: 1, color: 'grey'},
            {text: 'v', value: 'v', length: 1, color: 'grey'},
            {text: 'b', value: 'b', length: 1, color: 'grey'},
            {text: 'n', value: 'n', length: 1, color: 'grey'},
            {text: 'm', value: 'm', length: 1, color: 'grey'},
            {text: ',', value: ',', length: 1, color: 'grey'},
            {text: '.', value: '.', length: 1, color: 'grey'},
            {text: '/', value: '/', length: 1, color: 'grey'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: '<', value: '&&cursorMoveLeft', length: 1, color: 'blue'},
            {text: '>', value: '&&cursorMoveRight', length: 1, color: 'blue'}
        ],
        [
            {text: 'Eng', value: '&&switchLanguage', length: 2, color: 'green'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: 'Space', value: ' ', length: 6, color: 'grey'},
            {text: '', value: ';', length: 1, color: 'disabled'},
            {text: '', value: '/', length: 1, color: 'disabled'},
            {text: '', value: ' ', length: 1, color: 'disabled'},
            {text: 'Cancel', value: '&&cancel', length: 2, color: 'blue'}
        ]
    ],
    shift: [
        [
            {text: '~', value: '~', length: 1, color: 'grey'},
            {text: '!', value: '!', length: 1, color: 'grey'},
            {text: '@', value: '@', length: 1, color: 'grey'},
            {text: '#', value: '#', length: 1, color: 'grey'},
            {text: '$', value: '$', length: 1, color: 'grey'},
            {text: '%', value: '%', length: 1, color: 'grey'},
            {text: '^', value: '^', length: 1, color: 'grey'},
            {text: '&', value: '&', length: 1, color: 'grey'},
            {text: '*', value: '*', length: 1, color: 'grey'},
            {text: '(', value: '(', length: 1, color: 'grey'},
            {text: ')', value: ')', length: 1, color: 'grey'},
            {text: '_', value: '_', length: 1, color: 'grey'},
            {text: '+', value: '+', length: 1, color: 'grey'},
            {text: 'Clear', value: '&&clear', length: 2, color: 'red'}
        ],
        [
            {text: 'Q', value: 'Q', length: 1, color: 'grey'},
            {text: 'W', value: 'W', length: 1, color: 'grey'},
            {text: 'E', value: 'E', length: 1, color: 'grey'},
            {text: 'R', value: 'R', length: 1, color: 'grey'},
            {text: 'T', value: 'T', length: 1, color: 'grey'},
            {text: 'Y', value: 'Y', length: 1, color: 'grey'},
            {text: 'U', value: 'U', length: 1, color: 'grey'},
            {text: 'I', value: 'I', length: 1, color: 'grey'},
            {text: 'O', value: 'O', length: 1, color: 'grey'},
            {text: 'P', value: 'P', length: 1, color: 'grey'},
            {text: '{', value: '{', length: 1, color: 'grey'},
            {text: '}', value: '}', length: 1, color: 'grey'},
            {text: '|', value: '|', length: 1, color: 'grey'},
            {text: 'Back', value: '&&back', length: 2, color: 'red'}
        ],
        [
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: 'A', value: 'A', length: 1, color: 'grey'},
            {text: 'S', value: 'S', length: 1, color: 'grey'},
            {text: 'D', value: 'D', length: 1, color: 'grey'},
            {text: 'F', value: 'F', length: 1, color: 'grey'},
            {text: 'G', value: 'G', length: 1, color: 'grey'},
            {text: 'H', value: 'H', length: 1, color: 'grey'},
            {text: 'J', value: 'J', length: 1, color: 'grey'},
            {text: 'K', value: 'K', length: 1, color: 'grey'},
            {text: 'L', value: 'L', length: 1, color: 'grey'},
            {text: ':', value: ':', length: 1, color: 'grey'},
            {text: '"', value: '"', length: 1, color: 'grey'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: 'Enter', value: '&&enter', length: 2, color: 'dark-blue'}
        ],
        [
            {text: 'ABC', value: '&&switchMode', length: 2, color: 'green'},
            {text: 'Z', value: 'Z', length: 1, color: 'grey'},
            {text: 'X', value: 'X', length: 1, color: 'grey'},
            {text: 'C', value: 'C', length: 1, color: 'grey'},
            {text: 'V', value: 'V', length: 1, color: 'grey'},
            {text: 'B', value: 'B', length: 1, color: 'grey'},
            {text: 'N', value: 'N', length: 1, color: 'grey'},
            {text: 'M', value: 'M', length: 1, color: 'grey'},
            {text: '<', value: '<', length: 1, color: 'grey'},
            {text: '>', value: '>', length: 1, color: 'grey'},
            {text: '?', value: '?', length: 1, color: 'grey'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: '<', value: '&&cursorMoveLeft', length: 1, color: 'blue'},
            {text: '>', value: '&&cursorMoveRight', length: 1, color: 'blue'}
        ],
        [
            {text: 'Eng', value: '&&switchLanguage', length: 2, color: 'green'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: 'Space', value: ' ', length: 6, color: 'grey'},
            {text: '', value: ';', length: 1, color: 'disabled'},
            {text: '', value: '/', length: 1, color: 'disabled'},
            {text: '', value: ' ', length: 1, color: 'disabled'},
            {text: 'Cancel', value: '&&cancel', length: 2, color: 'blue'}
        ]
    ],
    symb: [
        [
            {text: '`', value: '`', length: 1, color: 'grey'},
            {text: '1', value: '1', length: 1, color: 'grey'},
            {text: '2', value: '2', length: 1, color: 'grey'},
            {text: '3', value: '3', length: 1, color: 'grey'},
            {text: '4', value: '4', length: 1, color: 'grey'},
            {text: '5', value: '5', length: 1, color: 'grey'},
            {text: '6', value: '6', length: 1, color: 'grey'},
            {text: '7', value: '7', length: 1, color: 'grey'},
            {text: '8', value: '8', length: 1, color: 'grey'},
            {text: '9', value: '9', length: 1, color: 'grey'},
            {text: '0', value: '0', length: 1, color: 'grey'},
            {text: '-', value: '-', length: 1, color: 'grey'},
            {text: '=', value: '=', length: 1, color: 'grey'},
            {text: 'Clear', value: '&&clear', length: 2, color: 'red'}
        ],
        [
            {text: '/', value: '/', length: 1, color: 'grey'},
            {text: '^', value: '^', length: 1, color: 'grey'},
            {text: '~', value: '~', length: 1, color: 'grey'},
            {text: '?', value: '?', length: 1, color: 'grey'},
            {text: '!', value: '!', length: 1, color: 'grey'},
            {text: '\'', value: '\'', length: 1, color: 'grey'},
            {text: '\"', value: '\"', length: 1, color: 'grey'},
            {text: '(', value: '(', length: 1, color: 'grey'},
            {text: ')', value: ')', length: 1, color: 'grey'},
            {text: ':', value: ':', length: 1, color: 'grey'},
            {text: ';', value: ';', length: 1, color: 'grey'},
            {text: '+', value: '+', length: 1, color: 'grey'},
            {text: '&', value: '&', length: 1, color: 'grey'},
            {text: 'Back', value: '&&back', length: 2, color: 'red'}
        ],
        [
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: '%', value: '%', length: 1, color: 'grey'},
            {text: '*', value: '*', length: 1, color: 'grey'},
            {text: '<', value: '<', length: 1, color: 'grey'},
            {text: '>', value: '>', length: 1, color: 'grey'},
            {text: '[', value: '[', length: 1, color: 'grey'},
            {text: ']', value: ']', length: 1, color: 'grey'},
            {text: '{', value: '{', length: 1, color: 'grey'},
            {text: '}', value: '}', length: 1, color: 'grey'},
            {text: ',', value: ',', length: 1, color: 'grey'},
            {text: '§', value: '§', length: 1, color: 'grey'},
            {text: '#', value: '#', length: 1, color: 'grey'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: 'Enter', value: '&&enter', length: 2, color: 'dark-blue'}
        ],
        [
            {text: '123;)', value: '&&switchMode', length: 2, color: 'green'},
            {text: '¿', value: '¿', length: 1, color: 'grey'},
            {text: '£', value: '£', length: 1, color: 'grey'},
            {text: '¥', value: '¥', length: 1, color: 'grey'},
            {text: '＼', value: '＼', length: 1, color: 'grey'},
            {text: '|', value: '|', length: 1, color: 'grey'},
            {text: '.', value: '.', length: 1, color: 'grey'},
            {text: '@', value: '@', length: 1, color: 'grey'},
            {text: '_', value: '_', length: 1, color: 'grey'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: '<', value: '&&cursorMoveLeft', length: 1, color: 'blue'},
            {text: '>', value: '&&cursorMoveRight', length: 1, color: 'blue'}
        ],
        [
            {text: 'Eng', value: '&&switchLanguage', length: 2, color: 'green'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: '', value: null, length: 1, color: 'disabled'},
            {text: 'Space', value: ' ', length: 6, color: 'grey'},
            {text: '', value: ';', length: 1, color: 'disabled'},
            {text: '', value: '/', length: 1, color: 'disabled'},
            {text: '', value: ' ', length: 1, color: 'disabled'},
            {text: 'Cancel', value: '&&cancel', length: 2, color: 'blue'}
        ]
    ]
};