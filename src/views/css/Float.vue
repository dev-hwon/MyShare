<template>
  <div>
      <div class="">Float.vue</div>
      
    </div>
  </template>
  <script>
  export default {
    
  }
  </script>
  <style>
  .sample_title {
    font-size: 24px;
    font-weight: bold;
    color:#555;
  }
  .box_sample {
    padding-top:16px;
    resize: horizontal;
    overflow: auto
  }
  .box_sample [data-domname] { position: relative; }
  .box_sample [data-domname]::before { 
    content: attr(data-domname);
    position:absolute;
    top:-12px;
    left:20px;
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 4px; 
    padding:2px 8px;
    font-size: 12px;
  }
  
  .box_css {
    padding: 16px;
    font-size: 14px;
    color:#666;
    border:1px solid #ddd;
    border-radius : 8px; 
    background-color: #f5f5f5;
  }
  
  .parent_node {
    display: flex;
    flex-wrap:wrap;
    gap:20px;
    padding:40px 20px;
    background-color: #ddd;
  }
  
  .child_node {
    flex:1 1 auto;
    height:200px;
    background-color: #aaa;
  }
  
  
  </style>