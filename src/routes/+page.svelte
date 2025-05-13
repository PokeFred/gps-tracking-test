<svelte:head>
    <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<script lang="ts">
    import { UserLocation, UserLocationError } from "$utils/GPS"
</script>

<div class="mx-auto max-w-sm border-x border-black">
    <div class="text-xl font-bold text-center border-b border-black px-4 py-2">Title</div>
    {#await UserLocation.fetchLocation()}
        <div>Loading...</div>
    {:then data: UserLocation}
        <div class="p-4">
            <div class="w-full text-base border border-black rounded-xl p-4">
                <div class="grid grid-cols-[auto_auto]">
                    <span class="underline">Werte</span>
                    <span></span>
                    <span>Latitude:</span>
                    <span>{data.getLat()}</span>
                    <span>Longitude:</span>
                    <span>{data.getLon()}</span>
                    <span>Accuracy:</span>
                    <span>{data.getAcc()}</span>
                    <span class="h-4"></span>
                    <span></span>
                    <span class="underline">Erklärungen</span>
                    <span></span>
                    <span class="font-bold">Latitude:</span>
                    <span>Breitengrad (Nord/Süd)</span>
                    <span class="font-bold">Longitude:</span>
                    <span>Längengrad (Ost/West)</span>
                    <span class="font-bold">Accuracy:</span>
                    <span>Genauigkeit der Position in Metern</span>
                </div>
            </div>
        </div>
    {:catch error: UserLocationError}
        <div class="p-4">
            <div class="w-full text-white bg-red-500/60 border-2 border-red-500 rounded-xl p-4">
                <div class="text-lg underline text-center">Fehler</div>
                <div class="text-base text-center">{error.getMessage()}</div>
            </div>
        </div>
    {/await}
</div>
