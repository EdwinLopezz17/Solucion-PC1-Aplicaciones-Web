
<template>
    <div>
        <div v-for="item in datas" :key="item.id">
            <p>Name: {{ item.name.common }}</p>
            <p>Official Name: {{ item.name.official }}</p>
            <p>Currency: {{ item.currency }}</p>
            <p>Capital: {{ item.capital }}</p>
            <p>Region: {{ item.region }}</p>
            <p>Sub-region: {{ item.subregion }}</p>
            <p>Languages: {{ item.languages }}</p>
            <p>Area: {{ item.area }} km²</p>
            <p>Population: {{ item.population }}</p>
            <img :src="item.flags.png" alt="" id="flag">
            <img :src="item.coatOfArms.png" alt="" id="escudo">
        </div>
    </div>
</template>


<script>
  import {ApiService} from "@/services/api-service";
export default {
    name: "ThePeru",

    data(){
        return{
            datas:[],
            dataService: new ApiService(),
        }
    },
    beforeMount() {
        //invocar API
        this.dataService.getAll().then((response) => {
            if (response.status === 200) {
                this.datas = response.data;
            } else {
                alert("Ha ocurrido un error al obtener los datos.");
            }
        }).catch((error) => {
            alert("Ha ocurrido un error al obtener los datos: " + error.message);
        });
    }
}
</script>

<style scoped>
    div{
        background-color: antiquewhite;
        color: black;
    }
    #flag{
        width: 150px;
        height: 100px;
        margin:20px;
    }
    #escudo{
        width: 150px;
        height: 150px;
    }
</style>