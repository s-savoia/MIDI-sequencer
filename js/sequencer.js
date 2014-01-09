//---- GENERAL INFO regarding MIDI playing:
	// delay - play one note every quarter second
	//	note - the MIDI note
	// velocity - how hard the note hits
//---- END OF GENERAL INFO -------------

//---- PLAYER/SEQUENCER ---------------
//loads the soundfont
window.onload = function () {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: "acoustic_grand_piano"});	
}

//the sequencer function
function playSequence(arrayP) {
	var delay = 0;
	//goes through each section of notes in the "musicSheet"
	for(sect = 0; sect < arrayP.length; sect++){
		//loops the bar of notes x times
		for(bar = 0; bar < arrayP[sect][1]; bar++) {
			//goes through the notes in each bar
			for(i = 0; i < arrayP[sect][0].length; i++) {
				MIDI.setVolume(0, arrayP[sect][0][i][1]);
				MIDI.noteOn(0, arrayP[sect][0][i][2], arrayP[sect][0][i][1], delay);
				MIDI.noteOff(0, arrayP[sect][0][i][2], delay + arrayP[sect][0][i][0]);
				delay = delay + arrayP[sect][0][i][0] + arrayP[sect][0][i][3];
			}
		}
	}
}
//---- END OF PLAYER/SEQUENCER --------------

//---- MUSIC TO PLAY ------------------

//an array of notes to play notes = [time note is played, velocity, midi-tone, time before next note]
var notes = new Array();
notes[0] = [0.7,127,28,0.1];
notes[1] = [0.7,127,28,0.1];
notes[2] = [0.4,127,32,0];
notes[3] = [0.4,127,31,0];

var notesTwo = new Array();
notesTwo[0] = [0.7,127,43,0.1];
notesTwo[1] = [0.7,127,43,0.1];
notesTwo[2] = [0.4,127,44,0];
notesTwo[3] = [0.4,127,46,0];

var notesThree = new Array();
notesThree[0] = [0.7,127,39,0.1];
notesThree[1] = [0.7,127,39,0.1];
notesThree[2] = [0.4,127,40,0];
notesThree[3] = [0.4,127,42,0];

var musicSheet = new Array();
musicSheet[0] = [notes, 4];
musicSheet[1] = [notesTwo, 2];
musicSheet[2] = [notesThree, 2];
musicSheet[3] = [notes, 4];
musicSheet[4] = [notesTwo, 2];
musicSheet[5] = [notesThree, 2];
//---- END OF MUSIC ----------------