#pragma strict

public var bullet : GameObject;
//public var bullet2 : GameObject;

public var xstart : float;
public var ystart : float;

function Start(){
	 xstart = GameObject.Find("You").transform.position.x;
	 ystart = GameObject.Find("You").transform.position.y;
}

function Update () {

	var x : float = Mathf.Abs(GameObject.Find("enemy").transform.position.x-transform.position.x);
	var y : float = Mathf.Abs(GameObject.Find("enemy").transform.position.y-transform.position.y);

	if(x<0.5&&y<0.5){
		Destroy (gameObject);
		var bulletInstance : GameObject;
		//var bulletInstance2 : GameObject;
        bulletInstance = Instantiate(bullet, Vector2(-xstart/10.0,-ystart/10.0), GameObject.Find("enemy").transform.rotation);
        //bulletInstance2 = Instantiate(bullet2, GameObject.Find("enemy").transform.position, GameObject.Find("enemy").transform.rotation);
        Scoreb.score=Scoreb.score+4;
	}

	transform.Translate(Vector2(0,1) * Time.deltaTime);

	if(transform.position.y>5||transform.position.y<-5){
		Destroy (gameObject);
	}
}
