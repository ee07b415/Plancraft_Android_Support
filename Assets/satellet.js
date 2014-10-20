#pragma strict

public var x : float;
public var y : float;
public var speed : float;
public var xinc: float = 0;
public var time : int = 91; 
public var arr : int[];
public var CLKint : int = 0;
public static var loc : int =1;

function Start() {
	arr = new int[91];
	for(var i : int=0; i < time; i++){
		arr[i]=1;
	}
	arr[49]=10;
	arr[50]=10;
	arr[51]=10;
	arr[52]=10;
	arr[53]=10;
	arr[54]=10;
	
}

function Update () {

	if(CLKint>=90){		
		Application.LoadLevel (Application.loadedLevel);
		
		if(Scoreb.score>Scoreb.historyscore){
			Scoreb.historyscore=Scoreb.score;
			PlayerPrefs.SetInt("historyscore", Scoreb.score);
		}
		Scoreb.score=0;
	}
	CLKint = parseInt(Scoreb.curtime);
	
	if(Mathf.Abs(xinc)<6.2831853){
		xinc = xinc + speed*Time.deltaTime*arr[CLKint];
	}else{
		xinc = 0;
		loc = 1;
	}
	
	x=4*Mathf.Sin(xinc);
	y=4*Mathf.Cos(xinc);
	transform.position.x = x;
	transform.position.y = y;
}