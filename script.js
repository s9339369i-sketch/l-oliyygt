document.addEventListener("DOMContentLoaded",()=>{
	const loginForm = document.getElementById("loginForm");
	if(loginForm){
		loginForm.addEventListener("Submit",Function (e){
			e.preventDefault();
			  
			  
			  const name = document.getElementById("studentName").valu;
			  const id = document.getElementById("studentid").valu;
			  const teacher = document.getElementById("teacherName").valu;
			  const Password = document.getElementById("examPassword").valu;
			  
			  
		if(Password==="examl23"){
			sessionStorage.setItem("studentName",name);
			window.Location.href = "exam.html";
		}else{
			alert("Invalid exam Password!");
		}
		});
	}
	const examFrom = document.getElementById("examFrom");
	if(examFrom){
		examFrom.addEventListener("Submit",Function(e){
			e.preventDefault();
			let score = ()
			if(document.querySelector(('input[name="q1"]:checked')?.valu==="Paris")score++;
			if(document.querySelector(('input[name="q2"]:checked')?.valu==="javaScript")
				score++;
			win.Location.href= 'result.html?score=${score}';
		});
	}
});
			
			
			
			