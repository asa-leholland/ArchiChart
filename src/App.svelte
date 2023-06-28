<script>
	let developerMode;

	let apps = [
	  { name: 'App 1', alias: 'A1', description: 'Description of App 1', color: 'red', category: 'API' },
	  { name: 'App 2', alias: 'A2', description: 'Description of App 2', color: 'blue', category: 'Frontend' },
	  { name: 'App 3', alias: 'A3', description: 'Description of App 3', color: 'green', category: 'Database' },
	];

	let selectedApp = null;
	let containers = [];

	function selectApp(app) {
	  if (selectedApp === app) {
		selectedApp = null;
	  } else {
		selectedApp = app;
	  }
	}

	function saveChanges() {
	}
  </script>



<main>
	<div class="system-context-view">
	  {#each apps as app}
		{#if !developerMode && app.category !== 'Testing'}
		  <div
			class="app-box"
			style="background-color: {app.color}"
			class:selected={selectedApp === app}
			on:click={() => selectApp(app)}
		  >
			<div class="app-name">{app.name}</div>
			{#if selectedApp === app}
			  <div class="app-description">{app.description}</div>
			{/if}
		  </div>
		{/if}
		{#if developerMode}
		  <div
			class="app-box"
			style="background-color: {app.color}"
			class:selected={selectedApp === app}
			on:click={() => selectApp(app)}
		  >
			<div class="app-name">{app.name}</div>
			{#if selectedApp === app}
			  <div class="app-description">{app.description}</div>
			{/if}
		  </div>
		{/if}
	  {/each}
	</div>

	{#if selectedApp}
	  <div class="container-view">
		<div class="system-app-box" style="background-color: {selectedApp.color}">
		  <h2>{selectedApp.name}</h2>
		  <p>{selectedApp.description}</p>
		</div>

		{#each containers as container}
		  <div class="container-box" style="background-color: {container.color}">
			<h3>{container.name}</h3>
		  </div>
		{/each}
	  </div>
	{/if}

	<div class="toggle-switch">
	  <label>
		<input type="checkbox" bind:checked={developerMode} />
		Developer Mode
	  </label>
	</div>

	<button on:click={saveChanges}>Save</button>
  </main>


  <style>
	.system-context-view {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.app-box {
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
}

.app-name {
  font-weight: bold;
}

.app-description {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.app-box:hover .app-description {
  opacity: 1;
  visibility: visible;
}

.system-app-box {
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.container-box {
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

  </style>