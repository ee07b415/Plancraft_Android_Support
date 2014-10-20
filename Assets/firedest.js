#pragma strict
// level control
public static var levelcont	: int = 1;
//  for level one initial direction
public var initx	:  float;
public var inity	:  float;

//level two initial direction
public var initdirection : int = 1;
public var inirecord : int;
//level two enemy finder for 2nd order line use
public var x : float;
public var y : float;
public var slope : float = 1.0;
public var inlock : int = 1; // in case of fly away, direction change can only happen once on each wall

function Start(){
	 x = GameObject.Find("enemy").transform.position.x;
	 y = GameObject.Find("enemy").transform.position.y;
	 initx = transform.position.x;
	 inity = transform.position.y;
	 inirecord = initdirection;
}

function Update () {

	// fire translate
	if(transform.position.y<6){
		switch(levelcont){
			case 1://straight line
					//Debug.Log(transform.position.x+" "+transform.position.y);
					transform.Translate(Vector2(initx/(Mathf.Sqrt(initx*initx+inity*inity)),inity/(Mathf.Sqrt(initx*initx+inity*inity))) * 3 * Time.deltaTime);
					if(Mathf.Abs(transform.position.y)>=5){		
						inity = inity-2*inity*Mathf.Floor(Mathf.Abs(transform.position.y)/5);
						transform.position = Vector2(transform.position.x,10*transform.position.y/Mathf.Abs(transform.position.y)-transform.position.y);
					}
					
					if(Mathf.Abs(transform.position.x)>=5){
						initx = initx-2*initx*Mathf.Floor(Mathf.Abs(transform.position.x)/5);
						transform.position = Vector2(10*transform.position.x/Mathf.Abs(transform.position.x)-transform.position.x,transform.position.y);
					}
			break;
			case 2://Parabola
				transform.position.x=transform.position.x+2*Time.deltaTime*initdirection;
				transform.position.y=y-slope*slope*(transform.position.x-x)*(transform.position.x-x);
			
				// edge detection on x
				if(transform.position.x>=5.0 && inlock == inirecord){
					x=10*initdirection-x;
					initdirection=-initdirection;
					inlock = -inlock;
				}
				if(transform.position.x<=-5.0 && inlock == -inirecord){
					x=10*initdirection-x;
					initdirection=-initdirection;
					inlock = -inlock;
				}
				// edge detection on y
				if(Mathf.Abs(transform.position.y)>5.0){
					x=x+2*Mathf.Sqrt(y+5)*initdirection/slope;
				}
			break;	
		}
	}
	
	//jugle on collision
	var x : float = Mathf.Abs(GameObject.Find("You").transform.position.x-transform.position.x);
	var y : float = Mathf.Abs(GameObject.Find("You").transform.position.y-transform.position.y);
	
	//future bug place if bullet moving too fast, need better algorithm to detect colision
	if(x<0.14&&y<0.14){
		/*
		Application.LoadLevel (Application.loadedLevel);
		
		if(Scoreb.score>Scoreb.historyscore){
			Scoreb.historyscore=Scoreb.score;
		}
		Scoreb.score=0;
		*/
		Scoreb.score-=4;
		Destroy (gameObject);
	}
}