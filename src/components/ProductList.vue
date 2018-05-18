<template>
	<div>
		<!-- 导航 -->
		<el-row>
			<el-col :span = "12">
				<el-breadcrumb class="singlePageTitle" separator="/">
					  <el-breadcrumb-item>商品管理</el-breadcrumb-item>
					  <el-breadcrumb-item>商品列表</el-breadcrumb-item>
				</el-breadcrumb>
			</el-col>
			<el-col :span = "12" style="text-align:right">
				<el-button size="medium" type="primary" icon="el-icon-circle-plus-outline" @click="addNew">添加商品</el-button>
			</el-col>
		</el-row>
		<!-- 搜索区 -->
		<div class="table_search_space">
				<el-form size="small" :inline="true" label-position="right" label-width="100px">
					<el-form-item label="关键字："> 
								<el-input v-model="keyword"></el-input>
					</el-form-item>

					<el-form-item>
					    <el-button type="primary" icon="el-icon-search" plain @click="search">查找</el-button>
					</el-form-item>
				</el-form>
		</div>
		<!-- table -->
		 <template>
		    <el-table border v-loading="listLoading" :data="tableData" style="width: 100%" size = "mini">
			    <el-table-column prop="lmName" label="名称" width=""></el-table-column>
			    <el-table-column prop="lmIndex" label="位置" width=""></el-table-column>
			    <el-table-column prop="lmOnlinedate" :formatter="tdFormDataYMD" label="上线日期" width=""></el-table-column>
			    <el-table-column prop="lmSwitch" label="开关" width="">
			    	<template slot-scope="scope">
			    		<span v-if="scope.row.lmSwitch" style="color:green;">ON</span>
			    		<span v-else style="color:red;">OFF</span>
			    	</template>
			    </el-table-column>
			    <el-table-column prop="caoZuo" label="操作" width="">
				    <template slot-scope="scope">
				    	<el-button size="mini" icon="el-icon-edit" @click="edit(scope)">编辑</el-button>
			            <el-button size="mini" type="danger" icon="el-icon-remove-outline" @click="idelete(scope)">删除</el-button>
			        </template>
			    </el-table-column>
		    </el-table>
		 </template>
		 <!-- 分页 -->
		 <div style="text-align:center;margin-top:30px;">
			 <el-pagination
			 		background
			       @current-change="handleCurrentChange"
			       :current-page.sync="currentPage"
			       layout="total, prev, pager, next"
			       :total="totalCnt"
			       :page-size="4">
			 </el-pagination>
		</div>
		 <!-- 新增模态框 -->
		<el-dialog :title="dialogTitle" append-to-body :visible.sync="dialogFormVisible" :close-on-press-escape="coustFalst" :close-on-click-modal="coustFalst">
			<el-form size="mini" label-position="right" :rules="rules" label-width="100px" ref="formData" :model="formData">
					<el-row>
						<el-col :span="10">
							<el-form-item label="商品名称：" prop="mc"> 
								<el-input v-model="formData.mc"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="20">
							<el-form-item label="商品描述：" prop="ms"> 
									<el-input v-model="formData.ms" controls-position="right"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-form-item label="标签：" > 
							<el-checkbox-group v-model="formData.bqGroup">
								<el-checkbox label="特价"></el-checkbox>
								<el-checkbox label="新品"></el-checkbox>
							</el-checkbox-group>
					</el-form-item>
					<el-row>
						<el-col :span="10">
							<el-form-item label="现价："> 
									<el-input-number style="width: 100%;" v-model="formData.xj" controls-position="right" :min="1" :max="100000"></el-input-number>
							</el-form-item>
						</el-col>
						<el-col :span="10">
							<el-form-item label="原价："> 
									<el-input-number style="width: 100%;" v-model="formData.yj" controls-position="right" :min="0" :max="100000"></el-input-number>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="10">
							<el-form-item label="规格："> 
									<el-input v-model="formData.gg" controls-position="right"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="10">
							<el-form-item label="单位：" prop="dw"> 
									<el-input v-model="formData.dw" controls-position="right"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="10">
							<el-form-item label="产地："> 
									<el-input v-model="formData.cd" controls-position="right"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="10">
							<el-form-item label="储藏方式："> 
									<el-input v-model="formData.ccfs" controls-position="right"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="10">
							<el-form-item label="品牌："> 
									<el-input v-model="formData.pp" controls-position="right"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
			</el-form>

			<div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormVisible = false" >取 消</el-button>
			    <el-button type="primary" @click="submitForm('formData')">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				keyword:'',
				dialogTitle:'添加商品',
				listLoading:true,
				currentPage: 1,
				totalCnt:0,
				editId:'',
				tableData:[

				],
				dialogFormVisible: false,	//显示，隐藏模态框
				coustFalst: false,
				formData:{
					mc:'',
					ms:'',
					bqGroup:[],
					xj:'',
					yj:'',
					gg:'',
					dw:'',
					cd:'',
					ccfs:'',
					pp:'',
				},
				rules:{
					mc: [
			            { required: true, message: '请输入商品名称', trigger: 'blur' },
			        ],
			        ms: [
			            { required: true, message: '请输入商品描述', trigger: 'blur' },
			        ],
			        dw: [
			            { required: true, message: '请输入单位', trigger: 'blur' },
			        ],
				},
			}
		},
		methods:{
			//编辑
			edit(scope){
				this.editId = scope.row.id;
				this.dialogTitle = "编辑商品";
				this.dialogFormVisible = true;
				this.resetForm('formData');
				this.formData = JSON.parse(JSON.stringify(scope.row));
				this.formData.lmOnlinedate = new Date(this.formData.lmOnlinedate);	//时间需要转一下，否则校验的时候会报错
			},
			//删除
			idelete(scope){
				var _this = this;
				this.$confirm('确认删除该记录吗?', '提示', {
			        confirmButtonText: '确定',
			        cancelButtonText: '取消',
			        type: 'warning'
		        }).then(() => {
		        	$.post(this.utils.baseUrl+"deleteColumn.do",{"id":scope.row.id},function(resp){
		        		_this.$message({
		        		    type: 'success',
		        		    message: '删除成功!'
		        		});
		        		_this.getList();
		        	})
		        }).catch(() => {
        
		        }); 
			},
			//日期初始化
			tdFormDataYMD(row){
		    	return this.utils.formDataYMD(row.lmOnlinedate);
			},
			//获取列表
			getList(){
				var _this = this;
				_this.listLoading = true;
				$.post(this.utils.baseUrl+"getProductList.do",{"keyword":this.keyword,"page":this.currentPage},function(resp){
					// _this.tableData = resp.data.list;
					_this.listLoading = false;
					// _this.totalCnt = resp.data.totalCnt;
				});
			},
			//改变页码
			handleCurrentChange(val) {
			    this.currentPage = val;
			    this.getList();
			},
			//查询
			search(){
				this.currentPage = 1;
				this.getList();
			},
			//新增按钮
			addNew(){
				this.editId = "";
				this.dialogTitle = "添加商品";
				this.resetForm('formData');
		    	this.formData = {
					mc:'',
					ms:'',
					bqGroup:[],
					xj:'',
					yj:'',
					gg:'',
					dw:'',
					cd:'',
					ccfs:'',
					pp:'',
				},
				this.dialogFormVisible = true;
			},
			//新增，修改表单提交
			submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            let param = {};
		            param.name = this.formData.mc;
		            param.ms = this.formData.ms;
		            param.bq = this.formData.bqGroup.join(',');
		            param.xj = this.formData.xj;
		            param.yj = this.formData.yj;
		            param.gg = this.formData.gg;
		            param.dw = this.formData.dw;
		            param.cd = this.formData.cd;
		            param.ccfs = this.formData.ccfs;
		            param.pp = this.formData.pp;
		            if(this.editId != ""){
						param.id = this.editId;
		            }
					var _this = this;
					$.post(this.utils.baseUrl+"addProduct.do",param,function(resp){
							if(resp.code == "ok"){
								_this.dialogFormVisible = false;
								_this.$message({
								      message: (_this.editId == ""?"添加成功！":"保存成功！"),
								      type: 'success',
								      duration: 2000
								});		
								_this.getList();				
							}
					})

		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		    },
		    //表单重置
		    resetForm(formName) {
		    	if (this.$refs[formName] !== undefined) {
		    	     this.$refs[formName].resetFields();
		    	 }
     		}
		},
		created(){
			this.getList();
		},
	}
</script>

<style scoped lang="scss">
		
</style>