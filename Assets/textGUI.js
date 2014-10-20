#pragma strict

function OnGUI () {
	// Make a background box
	GUI.Box (Rect (10,10,100,40), "Score: "+Scoreb.score);	
	GUI.Box (Rect (10,50,100,40), "HighScore: \n"+Scoreb.historyscore);

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (10,90,80,20), "Level 1")) {
		firedest.levelcont = 1;
		Application.LoadLevel (Application.loadedLevel);
		
		if(Scoreb.score>Scoreb.historyscore){
			Scoreb.historyscore=Scoreb.score;
		}
		Scoreb.score=0;
	}
	
	if (GUI.Button (Rect (10,130,80,20), "Level 2")) {
		firedest.levelcont = 2;
		Application.LoadLevel (Application.loadedLevel);
		
		if(Scoreb.score>Scoreb.historyscore){
			Scoreb.historyscore=Scoreb.score;
		}
		Scoreb.score=0;
	}
	
	
}
