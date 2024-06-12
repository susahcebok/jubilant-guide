<script>
	export let name;
</script>

<main>
	<h1>PFP {name}!</h1>
	<p>Bingkai profil Anda dengan warna perlawanan. Biarkan foto profil Anda berbicara banyak tentang perdamaian dan keadilan.</p>

        <div class="image-upload">
        <label for="file">
        <p><img id="cvs" src="pilihfile.png"/></p>
        </label>
        <input id="file" type="file" accept="image/*" onchange="loadFile(event)" style="display:none;">
        </div>

        <p>
        <button id="download" onclick="canvasToPng()">Download</button>
        <span id="share"></span>
        </p>
</main>

<style>
	main { 
                width: 600px;
                margin: 5em auto;
                padding: 3em;
                background-color: #fdfdff;
                border-radius: 0.5em;
                box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
        }

	p {
                line-height: 1.6;
        }

	@media (max-width: 700px) {
        main {
                margin: 0 auto;
                width: auto;
         }
       }
</style>
