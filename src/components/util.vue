<script>
	const baseUrl = "http://localhost:8080/shop/";
	const tdFormDataYMD = function(row){
	    	var v = row.birthday;
	    	return moment(v).format("YYYY-MM-DD");
	}
	const formDataYMD = function(val){
	    	return moment(val).format("YYYY-MM-DD");
	}
export default
	{
		tdFormDataYMD,
		formDataYMD,
		baseUrl,
	}
</script>