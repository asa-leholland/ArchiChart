<script>
	let developerMode;

	let apps = [
	  {
		name: 'App 1',
		alias: 'A1',
		description: 'Description of App 1',
		color: 'red',
		category: 'Production',
		containers: ['API', 'Admin'],
	  },
	  {
		name: 'App 2',
		alias: 'A2',
		description: 'Description of App 2',
		color: 'blue',
		category: 'Production',
		containers: ['Frontend', 'Admin'],
	  },
	  {
		name: 'App 3',
		alias: 'A3',
		description: 'Description of App 3',
		color: 'green',
		category: 'Production',
		containers: ['Database', 'Admin'],
	  },
	  {
		name: 'App 3 Testing',
		alias: 'A3',
		description: 'Description of App 3',
		color: 'green',
		category: 'Testing',
		containers: ['Database', 'Admin'],
	  },
	];

	let selectedApp = null;
	let containers = [];

	function selectApp(app) {
	  if (selectedApp === app) {
		selectedApp = null;
	  } else {
		selectedApp = app;
		containers = app.containers;
	  }
	}

	function saveChanges() {
	  // Send the updated app, containers, and connections data to the backend
	  // to be saved in the private GitHub repository using the token from .env
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
			  <div class="container-view">
				{#each app.containers as container}
				  <div class="container-box" style="background-color: {app.color}">
					<h3>{container}</h3>
				  </div>
				{/each}
			  </div>
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
			  <div class="container-view">
				{#each app.containers as container}
				  <div class="container-box" style="background-color: {app.color}">
					<h3>{container}</h3>
				  </div>
				{/each}
			  </div>
			{/if}
		  </div>
		{/if}
	  {/each}
	</div>

	<div class="toggle-switch">
	  <label>
		<input type="checkbox" bind:checked={developerMode} />
		Developer Mode
	  </label>
	</div>
	{#if developerMode}
	  <button on:click={saveChanges}>Save</button>
	{/if}
  </main>


  <style>
body {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.system-context-view {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.app-box {
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transform-origin: top;
  transition: transform 0.3s;
}

.app-box[selected] {
  transform: scaleY(1.1);
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
transition: height 0.3s;
overflow: hidden;
}

.container-view {
display: flex;
flex-wrap: wrap;
gap: 10px;
margin-top: 10px;
}

.container-box {
padding: 10px;
border-radius: 10px;
background-color: white;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}
  </style>