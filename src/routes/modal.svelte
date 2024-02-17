<script>
    import { messageModal, titleModal, showModal, showOneOption, showTwoOptions, deleteProgressModal, deleteProgressBarModal, deleteProgressBarFinished, deleteProgress, file } from './messageModal.js'

    import fullEventList from '../data/FullEventList.json'

    function closeModal() {
        showModal.set(false)
    }

    async function removeSchedules() {
        if (fullEventList.length === 0) {
            messageModal.set('There are no schedules to delete')
            titleModal.set('Error')
            showOneOption.set(true)
        } else {
            showModal.set(false)
            deleteProgressModal.set(true)
            deleteProgressBarModal.set(true)

            fetch('https://uvu-scheduling-app-server1.vercel.app/delete', {
                method: 'DELETE'
            })

            .then(() => {
                file.set("No file")
                deleteProgress.set('full')
            })

            .then(() => {
                setTimeout(() => {
                    deleteProgressBarModal.set(false)
                    deleteProgressBarFinished.set(true)
                }, 2000)
            })
        }

    }
  
</script>

<!-- reuseable modal that will appear given the circumstances -->

{#if $showModal} 
    {#if $showOneOption}
        <div class="fixed flex justify-center z-50 w-full">
            <div class="bg-white border border-primary rounded-md shadow-gray-400 shadow-md w-8/12 md:w-6/12">
                <div class="flex justify-start py-6 border-b border-gray-300 mx-8">
                    <h1 class="font-bold text-gray-600 text-xl">{$titleModal}</h1>
                </div>

                <p class="mx-8 my-16">{$messageModal}</p>

                <div class="flex justify-center bg-gray-100 rounded-b-md py-4">
                    <button on:click={closeModal} class="py-2 px-6 border border-primary text-primary rounded-md hover:text-white hover:bg-primary">Close</button>
                </div>
            </div>
        </div>
    {:else if $showTwoOptions}

        <div class="fixed flex justify-center z-50 w-full">
            <div class="bg-white border border-primary rounded-md shadow-gray-400 shadow-md w-8/12 md:w-6/12">
                <div class="flex justify-start py-6 border-b border-gray-300 mx-8">
                    <h1 class="font-bold text-red-500 text-xl">{$titleModal}</h1>
                </div>

                <p class="mx-8 my-16">{$messageModal}</p>

                <div class="flex justify-end bg-gray-100 rounded-b-md py-4 gap-4 pr-4">
                    <div class="flex justify-center">
                        <button on:click={closeModal} class="py-2 px-6 border border-primary text-primary rounded-md hover:text-white hover:bg-primary">cancel</button>
                    </div>
                    <div class="flex justify-center">
                        <button on:click={removeSchedules} class="py-2 px-6 border border-primary text-white rounded-md hover:text-primary bg-primary hover:bg-inherit">Remove Schedules</button>
                    </div>
                </div>
            </div>
        </div>
    {/if}
{/if}


