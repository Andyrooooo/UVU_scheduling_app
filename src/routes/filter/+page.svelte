<script>
    import fullEventList from '../../data/FullEventList.json'
    import { createEventDispatcher } from 'svelte'
    import { slide } from 'svelte/transition'
    const dispatch = createEventDispatcher()
    // import { appData } from '../appData.js'

    let eventList = []
    let openProfessorList = false

    // Open and closes the professor list
    function toggleProfessorList() {
    openProfessorList = !openProfessorList
    }
    
    // removes duplicate professor names from the select element
    let onlyOneProfessor = [...new Set(fullEventList.map(item => item.instructor))]

    // function that filters the data to only include the professor names
	function filterProfessor(event) {
		let selectedValue = event.target.value

		let tempEventList = fullEventList.filter((item) => item.instructor === `${selectedValue}`)
		eventList = [...tempEventList]

        dispatch('filterProfessor', {filteredData: tempEventList})
	}
</script>

<div class="">
    <div class="rounded-t-lg bg-primary py-6 w-full pl-3 text-white">
        <h1>Filter By...</h1>
    </div>

    <!-- Professors List -->
    <div class="flex justify-between py-2 bg-white border border-primary">
        <div class="pl-3">Professors</div>
        <button on:click={toggleProfessorList} class="fa-solid fa-chevron-down px-3 {openProfessorList ? 'rotated' : 'rotateAgain'}"></button>
    </div>

    {#if openProfessorList}
    <input type="text" class="h-10 px-3 border-none w-full bg-gray-50" placeholder="Search..." />
        <ul class="bg-gray-100 h-40 overflow-y-scroll bg-gray-200">
            {#if onlyOneProfessor.length === 0}
                <li transition:slide class="pl-4 py-1">There are no professors listed</li>
            {:else}
                {#each onlyOneProfessor as professor}
                    <li transition:slide class="pl-4 py-1">
                        <button class="w-full text-left" value={professor} on:click={filterProfessor}>{professor}</button>
                    </li>
                {/each}
            {/if}
        </ul>
    {/if}


</div>

<style>
    .rotated {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }
    .rotateAgain {
        transform: rotate(360deg);
        transition: transform 0.3s ease;
    }
</style>

















<!----------------------------------------- Old Script code ---------------------------------------------->

<!-- let openProfessorList = false
    let openRoomList = false
    let openCourseList = false

    // function that filters the data to only include the room numbers
    function filterRoom(event) {
        let selectedValue = event.target.value
        
        let tempEventList = fullEventList.filter(
            (item) => item.extendedProps.building_room === `${selectedValue}`
        )
        eventList = [...tempEventList]
        console.log(eventList)

        dispatch('filterRoom', {filteredData: tempEventList})
    }

    // function that filters the data to only include the professor names
	function filterProfessor(event) {
		let selectedValue = event.target.value

		let tempEventList = fullEventList.filter((item) => item.instructor === `${selectedValue}`)
		eventList = [...tempEventList]

        dispatch('filterProfessor', {filteredData: tempEventList})
	}

    // function that filters the data to only include the course names
	function filterCourse(event) {
		let selectedValue = event.target.value

		let tempEventList = fullEventList.filter((item) => item.course === `${selectedValue}`)
		eventList = [...tempEventList]

        dispatch('filterCourse', {filteredData: tempEventList})
	}


	// filters out duplicate building room names from the select element
  let OnlyOneBuildingRoom = [...new Set(fullEventList.map(item => item.extendedProps.building_room))]
  let onlyOneProfessor = [...new Set(fullEventList.map(item => item.instructor))]
  let onlyOneCourse = [...new Set(fullEventList.map(item => item.course))]



  // Open and closes the professor list
  function toggleProfessorList() {
    openProfessorList = !openProfessorList
  }

  // Open and closes the room list
  function toggleRoomList() {
    openRoomList = !openRoomList
  }


// Open and closes the course list
function toggleCourse() {
        openCourseList = !openCourseList
    } -->







<!----------------------------------------- Old HTML code ---------------------------------------------->
    <!-- <div class="filterContainer">
        <div class="filterTitle py-6 w-full pl-3 text-white">
            <h1>Filter By...</h1>
        </div> -->
    
        <!-- Professors List -->
        <!-- <div class="flex justify-between professorContainer py-2 bg-white">
            <div class="pl-3">Professors</div>
            <button on:click={toggleProfessorList} class="fa-solid fa-chevron-down px-3 {openProfessorList ? 'rotated' : 'rotateAgain'}"></button>
        </div>
    
        {#if openProfessorList}
            <ul class="bg-gray-100 h-40 scrollList">
                <input type="text" class="h-10 px-3 border-none w-full" placeholder="Search..." />
                {#each onlyOneProfessor as professor}
                    <li transition:slide class="pl-4 py-1">
                        <button class="w-full text-left" value={professor} on:click={filterProfessor}>{professor}</button>
                    </li>
                {/each}
            </ul>
        {/if} -->
    
    
        <!-- Rooms List -->
        <!-- <div class="flex justify-between professorContainer py-2 bg-white">
            <div class="pl-3">Rooms</div>
            <button on:click={toggleRoomList} class="fa-solid fa-chevron-down px-3 {openRoomList ? 'rotated' : 'rotateAgain'}"></button>
        </div>
        
        {#if openRoomList}
            <ul class="bg-gray-100 h-40 scrollList">
                <input type="text" class="w-full h-10 px-3 border-none" placeholder="Search..." />
                {#each OnlyOneBuildingRoom as buildingRoom}
                    <li transition:slide class="pl-4 py-2">
                        <button class="w-full text-left" value={buildingRoom} on:click={filterRoom}>{buildingRoom}</button> 
                    </li>
                {/each}
            </ul>
        {/if} -->
    
        <!-- Course List -->
        <!-- <div class:menuOpen={openCourseList} class="flex justify-between py-2 bg-white filterBot">
            <div class="pl-3">Course</div>
            <button on:click={toggleCourse} class="fa-solid fa-chevron-down px-3 {openCourseList ? 'rotated' : 'rotateAgain'}"></button>
        </div>
    
        {#if openCourseList}
            <ul class="bg-gray-100 h-40 scrollList filterBot">
                <input type="text" class="w-full h-10 px-3 border-none" placeholder="Search..." />
                {#each onlyOneCourse as course}
                    <li transition:slide class="pl-4 py-2">
                        <button class="w-full text-left" value={course} on:click={filterCourse}>{course}</button> 
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
     -->










<!----------------------------------------- Old CSS code ---------------------------------------------->

     <!-- .scrollList {
        overflow-y: scroll;
    } 

        .filterContainer {
        border: 1px solid #275D38;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        border-bottom-right-radius: 0.6rem;
        border-bottom-left-radius: 0.6rem;
    }
    .filterTitle {
        background: #275D38;
        border-top-right-radius: 0.375rem;
        border-top-left-radius: 0.375rem;
    }
    li:hover {
       border-left: 4px solid #275D38;
       padding-left: .75rem;
       /* background: #275D38;
       color: white; */
    }
    .rotated {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }
    .rotateAgain {
        transform: rotate(360deg);
        transition: transform 0.3s ease;
    }
    .filterBot {
        border-bottom-right-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
    }
    .menuOpen {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom: 1px solid #275D38;
    }
    .professorContainer {
        border-bottom: 1px solid #275D38;
    } -->