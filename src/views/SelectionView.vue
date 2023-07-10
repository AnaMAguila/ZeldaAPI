<script setup>
    import {RouterLink, useRoute} from 'vue-router';
    import {categoryArray} from '@/composables/getData.js';
    import {useGetData, firstMayusc} from '@/composables/getData.js';

    const route = useRoute();
    const recogeDatos = categoryArray.find(e => e.name === route.params.category);

    const {data, getData, loading, error} = useGetData();
    getData(recogeDatos.url);
</script>

<template>
    <div class="container text-center">
        <h1 class="m-3">{{$route.params.category.toUpperCase()}}</h1>
        <p v-if="loading">Loading...</p>
        <div class="alert alert-danger" v-if="error">{{error}}</div>
        <div v-if="data">
            <div class="row justify-content-md-center">
                <div class="card col-12 col-sm-6 col-md-4 col-lg-2 m-1" v-for="result in data" :key="result.id">
                    <img :src="result.image" :alt="result.name"  class="card-img-top">
                    <div class="card-body">
                        <router-link :to="{name: 'details', params: {details: JSON.stringify(result)}}">
                            <p class="card-title">{{firstMayusc(result.name)}}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>