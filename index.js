// Write a function which count the number of occurrence of words in a paragraph or a sentence.
// The function `countWords` takes a paragraph and two words as parameters. 
// It compare  which word is most frequently occurred in the paragraph. 

function countWords(paragraph, word1, word2 ) {
    // console.log(paragraph.split(' '))
    let countWord1 = 0, countWord2 = 0;
    paragraph.split(' ').filter(element => {
        if(element === word1) {
            countWord1++;
        }
        if(element === word2) {
            countWord2++;
        }
    });
    console.log(`word 1 passed = ${word1} count repeated ${countWord1}, word 2 passed = ${word2} count repeated ${countWord2}`)
}

countWords('Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim Lorem quis nostrud exercitation ullamco laboris nisi ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est Lorem', 'Lorem', 'ipsum')

