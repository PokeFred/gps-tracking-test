<script lang="ts">
    import { onMount } from "svelte"
    import { UserLocation } from "$utils/GPS"

    let p: UserLocation | null = null
    onMount(async (): Promise<void> => {
        p = await UserLocation.fetchLocation()
    })
</script>

<div>Werte</div>
<div>Latitude: {#if p !== null} {p.getLat()} {/if}</div>
<div>Longitude: {#if p !== null} {p.getLon()} {/if}</div>
<div>Accuracy: {#if p !== null} {p.getAcc()} {/if}</div>
<br />
<div>Erklärungen</div>
<div><span style="font-weight: 700;">Latitude</span>: Breitengrad (Nord/Süd)</div>
<div><span style="font-weight: 700;">Longitude</span>: Längengrad (Ost/West)</div>
<div><span style="font-weight: 700;">Accuracy</span>: Genauigkeit der Position in Metern</div>
