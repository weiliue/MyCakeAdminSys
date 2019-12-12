<template>
    <div>
        <MyHeader></MyHeader>  
         
        <router-view></router-view>  
        <MyFooter></MyFooter> 
    </div>
</template>

<script>
    import MyHeader from "./MyHeader"
    
    import MyFooter from "./MyFooter"

    export default {
        name:"Home",
        components: {
            MyHeader,
            
            MyFooter
        }
    }
</script>

<style>
</style>