import React,{useState} from "react"


function ColorPicker(){
	const[color,setColor]=useState("#ffffffff")
	function handleColorChange(e){
		setColor(e.target.value)
	}
return(
	<>
	
	<div className="Color-Picker-Cont">
		<h1>
			Color Picker
		</h1>
		<div className="color-display" style={{backgroundColor: color}}>
			<p> Selected Color: {color}
			</p>
		</div>
		<label>Select A color:</label>
		<input type="color" value={color} onChange ={handleColorChange}/>

	</div>
	</>
)
}
export default ColorPicker