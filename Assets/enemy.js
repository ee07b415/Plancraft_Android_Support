#pragma strict

public var bullet : GameObject;
public var wave : int = 3;

public var angl = 6.2831853/8;
public var x : float;
public var y : float;

function Start () {

}

function Update () {
	var bulletInstance : GameObject;
	if(Scoreb.curtime>49.5&&wave==3){
			for(var i : int = 0;i<8;i++){
				x = 0.1*Mathf.Sin(angl*(i+1/32));
				y = 0.1*Mathf.Cos(angl*(i+1/32));
				bulletInstance = Instantiate(bullet, Vector2(x,y), GameObject.Find("enemy").transform.rotation);
				Scoreb.score=Scoreb.score+4;
			}
			wave--;
	}
	
	if(Scoreb.curtime>51.5&&wave==2){
			for(i = 0;i<8;i++){
				x = 0.1*Mathf.Sin(angl*(i+1/32));
				y = 0.1*Mathf.Cos(angl*(i+1/32));
				bulletInstance = Instantiate(bullet, Vector2(x,y), GameObject.Find("enemy").transform.rotation);
				Scoreb.score=Scoreb.score+4;
			}
			wave--;
	}
	
	if(Scoreb.curtime>54&&wave==1){
			for(i = 0;i<8;i++){
				x = 0.1*Mathf.Sin(angl*(i+1/32));
				y = 0.1*Mathf.Cos(angl*(i+1/32));
				bulletInstance = Instantiate(bullet, Vector2(x,y), GameObject.Find("enemy").transform.rotation);
				Scoreb.score=Scoreb.score+4;
			}
			wave--;
	}
	
}