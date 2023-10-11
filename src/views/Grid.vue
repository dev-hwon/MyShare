<template>
  <div>
    <div class="sample">
      <div class="col_wrap col_gap_16">
        <div class="col col_lg_4 col_md_4 col_sm_3 col_xs_2"><div class="box">box1</div></div>
        <div class="col col_lg_4 col_md_3 col_sm_3 col_xs_2"><div class="box">box2</div></div>
        <div class="col col_lg_4 col_md_12 col_sm_3 col_xs_2"><div class="box">box3</div></div>

        <div class="col col_lg_6 col_md_3 col_sm_3 col_xs_2"><div class="box">box5</div></div>
        <div class="col col_lg_6 col_md_3 col_sm_3 col_xs_2"><div class="box">box6</div></div>

        <div class="col col_lg_7 col_md_3 col_sm_3 col_xs_2"><div class="box">box7</div></div>
        <div class="col col_lg_5 col_md_3 col_sm_3 col_xs_2"><div class="box">box8</div></div>

        <div class="col col_lg_2 col_md_3 col_sm_3 col_xs_2"><div class="box">box9</div></div>
        <div class="col col_lg_10 col_md_3 col_sm_3 col_xs_2"><div class="box">box10</div></div>
        
        <div class="col col_lg_2 col_md_3 col_sm_3 col_xs_2"><div class="box">box11</div></div>
        <div class="col col_lg_2 col_md_3 col_sm_3 col_xs_2"><div class="box">box12</div></div>
        <div class="col col_lg_2 col_md_3 col_sm_3 col_xs_2"><div class="box">box13</div></div>
        <div class="col col_lg_2 col_md_3 col_sm_3 col_xs_2"><div class="box">box14</div></div>
        <div class="col col_lg_2 col_md_3 col_sm_3 col_xs_2"><div class="box">box15</div></div>
        <div class="col col_lg_2 col_md_3 col_sm_3 col_xs_2"><div class="box">box16</div></div>
      </div>
    </div>
    <div class="box_pre" v-text="gridHtml"></div>
    <div class="box_pre_exp">
      .col_wrap : .col 사용시 사용(필수)<br />
      .col_gap_[number] : column 간격설정 css에서 직접추가하여사용<br />
      .col : column(필수, default : auto)<br />
      .col_[lg,md,sm,xs]_[number] : column 브라우저별 간격
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      gridHtml : `<div class="col_wrap col_gap_16">\n    <div class="col col_lg_3 col_md_4 col_sm_3 col_xs_2"><div class="box box1">box1</div></div>\n    <div class="col col_lg_3 col_md_4 col_sm_3 col_xs_2"><div class="box box2">box2</div></div>\n    <div class="col col_lg_3 col_md_4 col_sm_3 col_xs_2"><div class="box box3">box3</div></div>\n    <div class="col col_lg_3 col_md_4 col_sm_3 col_xs_2"><div class="box box4">box4</div></div>\n</div>`
    }
  }
  // created() {
  //   this.$refs.pre
  // }
}
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  height:100px;
  background-color: #ddd;
}
.box_pre {
  display: block;
  padding:12px 16px;
  white-space: pre-wrap;
  font-size: 13px;
  border:1px solid #ddd;
  border-radius: 8px;
  background-color: #f5f5f5;
}
.box_pre_exp {
  
}
</style>