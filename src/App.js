import logo from './platzi.webp';
import './App.css';

function App() {
	return (
		<div className='App'>
			<TodoItem />
			<TodoItem />
			<TodoItem />

			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edita el archivo <code>src/App.js</code> y guarda para recargar.
				</p>
				<a className='App-link' href='https://platzi.com/reactjs' target='_blank' rel='noopener noreferrer'>
					Aprende React en Platzi
				</a>
			</header>
		</div>
	);
}

function TodoItem() {
	return (
		<li>
			<span>V</span>
			<p> Llorar con la llorona </p>
			<samp>X</samp>
		</li>
	);
}

export default App;
