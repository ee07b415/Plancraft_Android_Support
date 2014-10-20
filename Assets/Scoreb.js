#pragma strict

//public class Scoreb{
// JavaScript
public static var score: int = 0;
public static var historyscore: int = 0;
public var paused: boolean;
public static var curtime : float;
//}

function OnGUI () {
	// Make a background box
	GUI.Box (Rect (10,10,100,40), "Score: "+Scoreb.score);
		
	if(PlayerPrefs.HasKey("historyscore")){
		historyscore = PlayerPrefs.GetInt("historyscore");
	}
	
	GUI.Box (Rect (10,50,100,40), "HighScore: \n"+Scoreb.historyscore);
	GUI.Box (Rect (10,90,100,70), "Ax: "+Input.acceleration.x+"\nAy:"+Input.acceleration.y+"\nAz:"+Input.acceleration.z+"\nSpeed:"+cubemove.moveSpeed);
	
	if (GUI.Button (Rect (10,160,100,40), "Restart")) {
		Scoreb.score = 0;
		Application.LoadLevel (Application.loadedLevel);
	}
	
	curtime = audio.time;
	
	if (GUI.Button (Rect (10,200,100,40), "Pause")) {
		Time.timeScale = 0;
		audio.Pause();
		paused = true;
	}
	
	if (paused) {
			if (GUI.Button (new Rect (110,200,100,40), "continue")) {
				Time.timeScale = 1;
				audio.Play(44100);
				paused = false;
			}
	}
	/*/ Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
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
	*/	
}
