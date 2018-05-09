<template>
	<!-- 头部 -->
	<el-row class="i_index">
		  <el-col :span="24" class="i_header">
		  		<div class="grid-content bg-purple">xxx微商平台系统</div>
		  		<el-dropdown class="user_space">
				      <span class="el-dropdown-link">
				        超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
					        <el-dropdown-item>个人信息</el-dropdown-item>
					        <el-dropdown-item>修改密码</el-dropdown-item>
					        <el-dropdown-item>退出登录</el-dropdown-item>
				      </el-dropdown-menu>
			    </el-dropdown>
		  </el-col>
		  <!-- 内容区 -->
		  <!-- <el-col :span="24" class="i_article"> -->
		  		<div class="left_nav">
			  		<!-- 展开按钮 -->
					<div class="clooapse_space" @click.prevent="isCollapse = !isCollapse" :class="{open:isCollapse,close:!isCollapse}">
						<i class="iconfont icon-liebiaozhankai-copy" v-show="!isCollapse"></i>	
						<i class="iconfont icon-liebiaozhankai" v-show="isCollapse"></i>					
					</div>
					<!-- 导航 -->
					<el-menu background-color="#EEF1F6" unique-opened router :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">						    
						<template v-for="(item,index) in $router.options.routes" v-if="item.navShow">
							<el-submenu :index="index+''" v-if="!item.oneLevel">
							    <template slot="title">
								      <i class="el-icon-location"></i>
								      <span slot="title">{{item.navName}}</span>
							    </template>
							    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="child.navShow">
							        <span slot="title">{{child.navName}}</span>
							    </el-menu-item>
						    </el-submenu>
						    <el-menu-item v-if="item.oneLevel&&item.children.length>0" :index="item.children[0].path">
							    <i class="el-icon-menu"></i>
							    <span slot="title">{{item.children[0].navName}}</span>
							</el-menu-item>
						</template>
					</el-menu>
				</div>
				<!-- 内容切换区 -->
				<div :class="[spaceWidthDefault,isCollapse?spaceWidthAdj:'']">
						<transition name="fade" mode="out-in"><router-view></router-view></transition>
				</div>
		    <!-- </el-col> -->
	</el-row>
</template>

<script>
	export default{
		data(){
			return{
 				isCollapse: false,
 				nindex:0,
 				spaceWidthDefault:'all_articalSpace',
 				spaceWidthAdj:'spaceWidthAdj',
			}
		},
		methods:{
			handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		    },
		    handleClose(key, keyPath) {
		        console.log(key, keyPath);
		    }
		},
		mounted(){

		},
		created(){

		}
	}
</script>

<style scoped lang="scss">
	.i_index{
		position: absolute;
	    top: 0;
	    bottom: 0;
	    width: 100%;
	    .i_header{
	    	height: 60px;
		    line-height: 60px;
		    background: #20A0FF;
		    padding: 0;
		    >div{
		    	float: left;
		    }
		    .user_space{
		    	float: right;
		    	color: #fff;
		    }
	    }
	    .left_nav{
		    position: absolute;
		    left: 0;
		    top: 60px;
		    bottom: 0;
		    overflow-y: auto;
		    background:#EEF1F6;
		    &::-webkit-scrollbar {
		        display: none;
		    }
		    .clooapse_space{
	    	    padding: 6px 0;
			    background: #f0f9eb;
			    text-align: center;
			    cursor:pointer;
			    border-right: solid 1px #e6e6e6;
		    }
		    .open{
		    	background: #20A0FF;
		    	color:#fff;
		    }
		    .close{
		    	background: #fff;
		    	color:#20A0FF;
		    }
	    }
	    .all_articalSpace{
			background: #fff;
		    position: absolute;
		    left: 201px;
		    right: 0;
		    top: 60px;
		    bottom: 0;
		    width: auto;
		    padding: 20px;
		    overflow-y: auto;		   
		    transition: left .3s ease-in-out;
	    }
		.spaceWidthAdj{
			left: 65px;
		}
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
	    width: 200px;
	    min-height: 400px;
	 }

	//全局样式
	.form_space{
	 	background: #ecf5ff8c;
	    padding: 30px;
	    margin-top: 20px;
	}
</style>