import { Component, Vue } from 'vue-property-decorator'
@Component
class TableColors extends Vue {
    
    
    public setColorRow(i:number){

        let c = this.generateGradient(i);
        return `background-color: ${c}`;
    }

    private hexToRgb(hex:string){
        let r, g, b;
        // Remove the hash if given
        hex = hex.replace('#', '');
        // If invalid code given return white
        if(hex.length !== 3 && hex.length !== 6){
            return [255,255,255];
        }
        // Double up charaters if only three suplied
        if(hex.length == 3){
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }
        // Convert to [r,g,b] array
        r = parseInt(hex.substr(0, 2), 16);
        g = parseInt(hex.substr(2, 2), 16);
        b = parseInt(hex.substr(4, 2), 16);

        return [r,g,b];
    }

    // Converts an RGB color array e.g. [255,255,255] into a hexidecimal color value e.g. 'FFFFFF'
    private rgbToHex (color:Array<any>){
        // Set boundries of upper 255 and lower 0
        color[0] = (color[0] > 255) ? 255 : (color[0] < 0) ? 0 : color[0];
        color[1] = (color[1] > 255) ? 255 : (color[1] < 0) ? 0 : color[1];
        color[2] = (color[2] > 255) ? 255 : (color[2] < 0) ? 0 : color[2];
        
        return  this.zeroFill(color[0].toString(16), 2) + this.zeroFill(color[1].toString(16), 2) + this.zeroFill(color[2].toString(16), 2);
      }
      
      // Pads a number with specified number of leading zeroes
      private zeroFill ( number:any, width:number ){
        width -= number.toString().length;
        if ( width > 0 ){
            return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
        }
        return number;
      }


     private generateGradient(i:number){

        let result = [], rStep, gStep, bStep, rows;

        rows = i;
        
        let colorA = this.hexToRgb('004988'); // [r,g,b]
        let colorB = this.hexToRgb('FFFFFF'); // [r,g,b]
        
          // Calculate the intervals for each color
          rStep = ( Math.max(colorA[0], colorB[0]) - Math.min(colorA[0], colorB[0]) ) / rows;
          gStep = ( Math.max(colorA[1], colorB[1]) - Math.min(colorA[1], colorB[1]) ) / rows;
          bStep = ( Math.max(colorA[2], colorB[2]) - Math.min(colorA[2], colorB[2]) ) / rows;
      
          // Set the starting value as the first color value
        let rVal = colorA[0],
          gVal = colorA[1],
          bVal = colorA[2];
      
          rVal = (colorA[0] < colorB[0]) ? rVal + Math.round(rStep) : rVal - Math.round(rows);
          gVal = (colorA[1] < colorB[1]) ? gVal + Math.round(gStep) : gVal - Math.round(rows);
          bVal = (colorA[2] < colorB[2]) ? bVal + Math.round(bStep) : bVal - Math.round(rows);
          
          return '#'+this.rgbToHex([rVal, gVal, bVal]);
      }
}
export default TableColors