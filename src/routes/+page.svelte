<script lang="ts">
    import { onMount } from "svelte"

    let lat: number | undefined = undefined
    let lon: number | undefined = undefined
    let acc: number | undefined = undefined

    onMount((): void => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat = position.coords.latitude
                lon = position.coords.longitude
                acc = position.coords.accuracy
            },
            (error) => {
                console.log(error.message)
            }
        )
    })
</script>

<div>Werte</div>
<div>Latitude: {#if lat !== undefined} {lat} {/if}</div>
<div>Longitude: {#if lon !== undefined} {lon} {/if}</div>
<div>Accuracy: {#if acc !== undefined} {acc} {/if}</div>
<br />
<div>Erklärungen</div>
<div><span style="font-weight: 700;">Latitude</span>: Breitengrad (Nord/Süd)</div>
<div><span style="font-weight: 700;">Longitude</span>: Längengrad (Ost/West)</div>
<div><span style="font-weight: 700;">Accuracy</span>: Genauigkeit der Position in Metern</div>
