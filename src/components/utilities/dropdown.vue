<template>
    <div class="selectButtonRoot">
        <input type="text" v-model="gameSearched" placeholder="Type a game name..." id="gameSearchedInput">
        <div :class="`dropDownButtonContainer ${dropTransition ? 'dropAnimation' : ''}`">
            <ul v-for="item in this.$props.arrayList" :key="item.id">
                <img @load="spinner = false" v-if="item.url" :src="item.url" alt="">
                <img v-else :src="noUrlImage" alt="">
                <li @click="$emit('clicked', item.name)">  {{item.name}} </li>
            </ul>
        </div>
    </div>
</template>

<script>
import nourl from '@/static/no_url_founded.jpeg'

    export default {
        name: 'selectButton',
        props: ['searchKey', 'arrayList'],
        data() {
            return {
                searchedKey: this.searchKey,
                listArray: '',
                spinner: true,
                noUrlImage: nourl,
                dropTransition: false
            }
        },
        watch: {
            arrayList(nv) {
                console.log(nv)
                this.dropTransition = nv.length > 0
            }
        }
    }
</script>

<style scoped lang="scss">
.dropAnimation {
    animation: dropdown 1s ease-in-out none;
}
    .selectButtonRoot {
        position: relative;
        .dropDownButtonContainer{
            display: flex;
            flex-direction: column;
            position: absolute;
            width: 100%;
            max-height: 155px;
            overflow-y: auto;
            overflow-x: hidden;
            background-color: whitesmoke;
            border-radius: 5px;
            z-index: 1;
        }
        
        @keyframes dropdown {
            0% {
                height: 0px;
            }
            100% {
                height: min-content;
            }
        }
        ul {
            display: flex;
            justify-content: flex-start;
            gap: 5px;
            list-style: none;
            padding: 0px 5px 0px 0px;
            margin: 0;
            text-align: center;
            img {
                display: inline-block;
                width: 15px;
                height: 15px;
                flex-grow: 0;
                align-self: center;
                margin-left: 10px;
            }
            li {
                position: relative;
                color: black;
                text-indent: 3px;
                font-family: 'Montserrat', sans-serif;
                font-weight: bold;
                padding: 5px;
                width: 100%;
            }
        }
    }

    .dropDownButtonContainer::-webkit-scrollbar {
        width: 6px;
    }

    .dropDownButtonContainer::-webkit-scrollbar-thumb {
        background-color: rgb(140, 210, 228);
        border-radius: 5px;
    }
</style>