import router from './index'
import state from '../store/state'

router.beforeEach((to, from, next) => {
  state.tabbar.map((item)=>{
    if(item.link == to.path){
      item.isActive=true;
      
    }else{
      item.isActive=false;
    }
  })
  next();
})

export default router;
