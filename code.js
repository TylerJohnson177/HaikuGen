$(document).ready(function ()
{
   $("button#addWord").on("click", addWord);
   $("button#generate").on("click", generate);
});

//Global arrays and variables

let index = [2,2,2,2,2,2,2];
let syllableArray = [[""], ["lake", "ice"], ["forest", "snowstorm"], ["thunderstorm", "saturday"], ["superior", "directory"], ["subterranean", "supercelestial"], ["parasympathetic", "comfortability"], ["inconventionality", "establishmentarian"], [""]];

function addWord()
{

    //Get the users word

    let word = $("#wordBox").val();

    //find the number of dashes in the word

    let numSyll = word.split("-").length;

    if (numSyll < 8)
    {
        let wordNoDash = word.replaceAll("-", "");

        //add it to the array bases on the number of syllables

        syllableArray[numSyll][index[numSyll]] = wordNoDash;
        index[numSyll]++;
    }
    else
    {
       $("p#error") .text("Error, cannot enter words with more than 7 syllables");
    }

}

function generate()
{

    $("p#firstLine") .text("");
    $("p#secondLine") .text("");
    $("p#thirdLine") .text("");
    //create 3 arrays for each of the lines

    let line1 = ["", "", "", "", ""];
    let line2 = ["", "", "", "", "", "", ""];
    let line3 = ["", "", "", "", ""];

    //generate a random number between 1 and the amount of syllables remaining until it has all the syllables required

    let syllCountLine1 = 0;
    let syllCountLine2 = 0;
    let syllCountLine3 = 0;
    let word1 = 0;
    let word2 = 0;
    let word3 = 0;

    //Line one
    do
    {
        let randomSyll;

        do
        {
             randomSyll = Math.floor(Math.random() * (6 - syllCountLine1));

        }
        while(syllableArray[randomSyll][0] === "")

        let array = syllableArray[randomSyll];
        let randomWord = Math.floor(Math.random() * (array.length));

        line1[word1] = syllableArray[randomSyll][randomWord];
        syllCountLine1 += randomSyll;
        word1 ++;
    }
    while(syllCountLine1 < 5)

    //Line Two

    do
    {
        let randomSyll;

        do
        {
            randomSyll = Math.floor(Math.random() * (8 - syllCountLine2));

        }
        while(syllableArray[randomSyll][0] === "")

        let array = syllableArray[randomSyll];
        let randomWord = Math.floor(Math.random() * (array.length));

        line2[word2] = syllableArray[randomSyll][randomWord];
        syllCountLine2 += randomSyll;
        word2 ++;
    }
    while(syllCountLine2 < 7)

    //Line 3

    do
    {
        let randomSyll;

        do
        {
            randomSyll = Math.floor(Math.random() * (6 - syllCountLine3));

        }
        while(syllableArray[randomSyll][0] === "")

        let array = syllableArray[randomSyll];
        let randomWord = Math.floor(Math.random() * (array.length));

        line3[word3] = syllableArray[randomSyll][randomWord];
        syllCountLine3 += randomSyll;
        word3 ++;
    }
    while(syllCountLine3 < 5)

    //Line 1

    for(let i = 0; i < line1.length; i++)
    {
        $("p#firstLine") .append(line1[i] + " ");
    }

    //Line 2

    for(let i = 0; i < line2.length; i++)
    {
        $("p#secondLine") .append(line2[i] + " ");
    }

    //Line 3

    for(let i = 0; i < line3.length; i++)
    {
        $("p#thirdLine") .append(line3[i] + " ");
    }

}




