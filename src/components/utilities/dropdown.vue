<template>
    <div class="selectButtonRoot">
        <div class="dropDownButtonContainer">
            <slot></slot>
            <ul v-for="item in this.$props.arrayList" :key="item.id">
                <!-- <img @load="spinner = false" v-if="item.url" :src="item.url" alt="">
                <i v-if="spinner" class="spinner"></i> -->
                <li @click="$emit('clicked', item.name)"> {{item.name}} </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'selectButton',
        props: ['searchKey', 'arrayList'],
        data() {
            return {
                searchedKey: this.searchKey,
                searchedGame: '',
                listArray: '',
                spinner: true
            }
        },
        // watch: {
        //     searchedGame() {
        //         const letters = new RegExp(`${this.searchedGame}`, 'i')
        //         let filteredList = this.$props.arrayList.filter(object => letters.test(object[`${this.searchedKey}`]))
        //         this.listArray = !filteredList || !this.searchedGame ? '' : filteredList
        //         this.$emit('gamesFiltered')
        //         return this.listArray
        //     },
        // }
    }
</script>

<style scoped lang="scss">
    .dropDownButtonContainer {
        width: 100%;
        input {
            color: black;
            border-radius: 5px ;
            border: solid 1px gray;
            text-indent: 3px;
            height: 1.2rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            padding: 5px;
            width: 90%;
        }
        input:focus {
            outline: none;
            box-shadow: 0px 0px 3px 0px;
            transition: all 0.2s ease-in;
        }
        ul {
            list-style: none;
            padding: 0;
            border-radius: 5px;
            width: 100%;
            
            li {
                
            }
        }
    }
</style>