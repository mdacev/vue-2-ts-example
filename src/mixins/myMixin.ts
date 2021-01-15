import { Component, Vue } from 'vue-property-decorator'
@Component
class MyMixin extends Vue {

  public projVersion: string = 'Test project'

  public setProjectName(newVal: string): void {
    this.projVersion = newVal
  }

  public setFixedNumber(num:number) : string{
    return num.toFixed(5) ;
  }

  
}
export default MyMixin