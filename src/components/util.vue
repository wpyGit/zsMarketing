<script>
	const baseUrl = "http://localhost:8080/shop/";
	// const tdFormDataYMD = function(row){
	//     	var v = row.birthday;
	//     	return moment(v).format("YYYY-MM-DD");
	// }
	const formDataYMD = function(val){
	    	return moment(val).format("YYYY-MM-DD");
	}
	//16进制颜色转rgb(rgba)
	const hexToRgba = function(hex, opacity) { 
		return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")"; 
	}
export default
	{
		formDataYMD,
		baseUrl,
	}
</script>