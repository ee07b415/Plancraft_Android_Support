#pragma strict

public var bullet : GameObject;

public var xstart : float;
public var ystart : float;
public var x : float;
public var y : float;

function Update ()
{
	
	xstart = GameObject.Find("Satellet").transform.position.x;
	ystart = GameObject.Find("Satellet").transform.position.y;
	x=GameObject.Find("You").transform.position.x;
	y=GameObject.Find("You").transform.position.y;
	
    if((x-xstart)*(x-xstart)+(y-ystart)*(y-ystart)<=1.14)
    {
    	if(satellet.loc ==1){
        	var bulletInstance : GameObject;
        	bulletInstance = Instantiate(bullet, GameObject.Find("You").transform.position, GameObject.Find("You").transform.rotation);
        	satellet.loc=0;
        }
    }

}