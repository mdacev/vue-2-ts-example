<template>
    <v-container class="pb-0 mb-0 container-filter">
        <v-row class="pb-2">
            <v-col cols="6">
               <v-select 
               v-model="select" 
               :items="options" 
               label="Order by..." 
               @change="changeOrder"
               class="filter"
               dark
               >
               </v-select>
            </v-col>
            <v-col cols="6">
                <v-text-field
                    v-model="filter"
                    label="Filter by symbol"
                    @input="changeFilter"
                    class="filter"
                    dark
                >
                </v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">

import { Component, Emit, Prop, Vue } from 'vue-property-decorator'


@Component
export default class HomeFilter extends Vue {
    
    select:string = "High";
    options: Array<string> = [
          "High",
           "Low",
           "Open", 
           "Close", 
           "Volume",
           "Date"
    ];//Hardcode Options...

    private filter:string="";
    private order!:string;
    

    get fiterChanged(){
        return this.filter;
    }

    @Emit('change-filter')
    changeFilter(){
        return this.filter;
    }

    get orderChanged(){
        return this.order;
    }

    @Emit('change-order')
    changeOrder(){
        return this.order;
    }
    
}
</script>

<style lang="scss" scoped>
.container-filter{
    height: 80px;
}
.filter{
    color: blanchedalmond !important;
    background-color: rgb(28, 34, 43) !important;
}
</style>