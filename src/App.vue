<template>
  <div>
    <!-- <r-button color="rgb(250, 255, 255)" mode="large">
      Hello World
    </r-button> -->
    <div style="display:flex;flex-direction: column;">
      <circle-image :size="10" url="https://scontent.fcgk2-1.fna.fbcdn.net/v/t1.6435-9/66583370_464331174362595_7124328318509252608_n.png?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE3c-tmBYY1qll-pdy1YsEjjfLk6QUdDlGN8uTpBR0OUTvyvRjsyLtlP0w3kaGvWWfC6Jq3o61Vn5UBfdtqJgZj&_nc_ohc=0n17-tlze4EAX__Vdfq&_nc_ht=scontent.fcgk2-1.fna&oh=00_AT-_dHpzuhXLi3Wv5GJV7mIzSUg0fwWkuhIr_gPW_YVBJA&oe=623AF593"></circle-image>
      <circle-image :size="10" url="https://scontent.fcgk2-1.fna.fbcdn.net/v/t1.6435-9/129596619_1337411539954867_9029057953965523620_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=108&ccb=1-5&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeHdQrRirj8tTT_NfnD5ejVLUseyhjtIQd1Sx7KGO0hB3bJY2_SkxCHABLWh6mBdn3a2GWxyTQ_nS7M_37Zd6JEx&_nc_ohc=QCJtXSf6sOsAX-80ZsZ&_nc_ht=scontent.fcgk2-1.fna&oh=00_AT_7g2ZAZPdqu6Sin3h9uWjD8T3NQI8ps_pz8Lx_89a1ZQ&oe=6239554C"></circle-image>
      <circle-image :size="10" url="https://i.pinimg.com/originals/03/4b/de/034bde783ea726b922100c86547831e8.jpg"></circle-image>
      <circle-image :size="10" url="https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg"></circle-image>
    </div>
  </div>
</template>

<script>
// import RButton from './components/Button/RButton.vue'
import CircleImage from './components/Image/CircleImage.vue'

export default {
  name: 'App',
  components: {
    // RButton,
    CircleImage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex-container {
  display: flex;
  flex-direction: row;
}

@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>
