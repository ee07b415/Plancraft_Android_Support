#pragma strict

function Start () {
	renderer.enabled = false;
}

function Update () {

	if(Input.GetMouseButtonDown(0)){
		var x : float = GameObject.Find("You").transform.position.x;
		var y : float = GameObject.Find("You").transform.position.y;
		gameObject.transform.position=Vector2(x,y);
		renderer.enabled = true;
	}
	var h : float = transform.position.y;
	
	if (h>5){
		gameObject.transform.position=Vector2(x,y);
		renderer.enabled = false;
	}else{
		transform.Translate(Vector2.up * Time.deltaTime);
	}
}
/*
function OnMouseDown(){

	Debug.Log("clicked");
	var x : float = GameObject.Find("You").transform.position.x;
	var y : float = GameObject.Find("You").transform.position.y;
	gameObject.transform.position=Vector2(x,y);
	Debug.Log(x+","+y);
	gameObject.SetActive(true);
}
*/