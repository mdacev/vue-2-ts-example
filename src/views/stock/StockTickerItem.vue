<template>
    <v-container class="container">
        <v-row justify="center">

            <v-card
                class="card-custom"
                width="400"
                max-width="400"
                elevation="3"
                dark
            >
                <v-list disabled>
                <v-subheader class="text-date">{{formatDate}}</v-subheader>
                <v-list-item-group>
                    <v-list-item class="item">
                        <v-list-item-icon>
                            <v-icon v-text="'mdi-bank'"  style="color: orange;"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="`${this.stock.symb}`" class="text-symb"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="item">
                        <v-list-item-icon>
                            <v-icon v-text="'mdi-arrow-up'"  style="color: green;"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="`High:  ${this.stock.high}`" class="text-high"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="item">
                        <v-list-item-icon>
                            <v-icon v-text="'mdi-arrow-down'"  style="color: red;"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="`Low:  ${this.stock.low}`" class="text-low"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="item">
                        <v-list-item-icon>
                            <v-icon v-text="'mdi-alpha-o-circle-outline'" style="color:slateblue"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="`Open:  ${this.stock.open}`" class="text-open"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="item">
                        <v-list-item-icon>
                            <v-icon v-text="'mdi-alpha-c-circle-outline'" ></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="`Close:  ${this.stock.close}`"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="item">
                        <v-list-item-icon>
                            <v-icon v-text="'mdi-view-column'" style="color:royalblue;"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="`Volume:  ${this.stock.volume}`" class="text-volume"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-card>
        </v-row>
    </v-container>
</template>

<script lang="ts">

import { ITicker } from '@/models/models';
import { Component, Prop, Vue } from 'vue-property-decorator';
import moment from 'moment';

@Component
export default class HomeItem extends Vue {

  @Prop() private stock!: ITicker;


  //computed
  get formatDate(){
    return `Date:  ${moment( this.stock.date ).format('DD/MM/YYYY')}`
  }
}



</script>

<style lang="css" scoped>
.container{
    width: 100%;
}
.card-custom{
    text-align : center;
    background-color: rgb(39, 48, 48) !important;
    width: 100%;
}
.text-high{
    color: green;
}
.text-low{
    color: red;
}
.text-volume { 
    font-weight: bold;
    color:royalblue; 
}
.text-date{
    font-style: oblique;
    background-color: #004988;
    color: white !important;
    height: 25px;
    border-radius: 5px;
    margin: 5px;
}
.text-open{
    color:slateblue;
}
.text-symb{
    color: orange;
}
.item{
    max-height: 20px;
}
.filter{
    font-weight: bold;
}
</style>