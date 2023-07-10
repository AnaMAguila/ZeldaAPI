<script setup>
    import {useRoute} from 'vue-router';
    import {firstMayusc} from '@/composables/getData.js';
    
    const route = useRoute();    
    const details = JSON.parse(route.params.details);
    console.log(details);

</script>

<template>
    <div class="container">
        <h1 class="text-center m-3">{{details.name.toUpperCase()}}</h1>
        
        <div class="row">
            <div class="col-4">
                <img :src="details.image" :alt="details.name">
            </div>

            <div class="col-8">
                <p>Description: {{details.description}}</p>
                <p>Category: {{firstMayusc(details.category)}}</p>

                <p>Locations: 
                    <ul>
                        <li v-for="location in details.common_locations" :key="location">
                            {{firstMayusc(location)}}
                        </li>
                    </ul>
                </p>

                <p v-if="details.cooking_effect">Cooking effect: {{firstMayusc(details.cooking_effect)}}</p>
                <p v-if="details.drops">Drops: 
                    <ul>
                        <li v-for="drop in details.drops" :key="drop">
                            {{firstMayusc(drop)}}
                        </li>
                    </ul>
                </p>
            </div>
        </div>   
    </div>
</template>