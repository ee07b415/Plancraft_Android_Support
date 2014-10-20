#pragma strict

public static var moveSpeed : float = 0;
public var mousePosition : Vector2;
public var x : float;
public var y : float;
public var xinc: float = 0;
public var sensitive : float = 2;

function Update ()
{
	/*
	//mouse control
	mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	
	if(Mathf.Abs(mousePosition.x)<5&&Mathf.Abs(mousePosition.y)<5){
		transform.position.x=3*mousePosition.x/Mathf.Sqrt(mousePosition.x*mousePosition.x+mousePosition.y*mousePosition.y);
		transform.position.y=3*mousePosition.y/Mathf.Sqrt(mousePosition.x*mousePosition.x+mousePosition.y*mousePosition.y);
		//var deg = Mathf.Asin(transform.position.y/Mathf.Sqrt(transform.position.x*transform.position.x+transform.position.y*transform.position.y)) - 180;
		//var axis = Vector3(0,0,1);
	}
	*/
	
	//Accelerometer
	var px = transform.position.x;
	var py = transform.position.y;
	
	var pu = Input.acceleration.x*(1+Mathf.Abs(Input.acceleration.z));
	var pv = Input.acceleration.y*(1+Mathf.Abs(Input.acceleration.z));
	
	var force = Vector2(pu,pv);
	var face = Vector2(px,py);
	var xnormal = Vector2(1,0);
	var forceangle =Vector2.Angle(force,xnormal); 
	var faceangle =Vector2.Angle(face,xnormal);
	
	if(pv<0)
		forceangle=360-forceangle;
	if(py<0)
		faceangle=360-faceangle;
	if(pu!=0&&pv!=0)
		moveSpeed = Mathf.Sin(Vector2.Angle(force,face)/57.2957795);
	
	if(py<0){
		if(forceangle<faceangle&&forceangle>faceangle-180)
			moveSpeed=-moveSpeed;
	}else{
		if(forceangle>faceangle+180||forceangle<faceangle)
			moveSpeed=-moveSpeed;
	}

	if(Mathf.Abs(xinc)<6.2831853){
		xinc = xinc + moveSpeed*Time.deltaTime;
	}else{
		xinc = 0;
	}
	
	x=3*Mathf.Cos(xinc);
	y=3*Mathf.Sin(xinc);
	transform.position.x = x;
	transform.position.y = y;
	//Debug.Log("x:"+x+"*y:"+y+"xinc:"+xinc);
	
	if(transform.position.x>=0){
		transform.rotation = Quaternion.AngleAxis(57.2957795*Mathf.Asin(transform.position.y/Mathf.Sqrt(transform.position.x*transform.position.x+transform.position.y*transform.position.y))+90, Vector3(0,0,1));
	}else{
		transform.rotation = Quaternion.AngleAxis(-57.2957795*Mathf.Asin(transform.position.y/Mathf.Sqrt(transform.position.x*transform.position.x+transform.position.y*transform.position.y))-90, Vector3(0,0,1));
	}
	
	/*
	// keyboard control
	var x : float = GameObject.Find("You").transform.position.x;
	var y : float = GameObject.Find("You").transform.position.y;

	if(y<5){		
    if(Input.GetKey(KeyCode.UpArrow))
        transform.Translate(Vector3.up * moveSpeed * Time.deltaTime);
    }
    
    if(y>-5){
    if(Input.GetKey(KeyCode.DownArrow))
        transform.Translate(-Vector3.up * moveSpeed * Time.deltaTime);
    }
    
    if(x>-5){
    if(Input.GetKey(KeyCode.LeftArrow))
        transform.Translate(Vector3.left * moveSpeed * Time.deltaTime);
    }
    
    if(x<5){
    if(Input.GetKey(KeyCode.RightArrow))
        transform.Translate(Vector3.right * moveSpeed * Time.deltaTime);
    }
    */
}