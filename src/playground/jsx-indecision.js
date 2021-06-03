console.log("App.js is running!");


// if statements
// ternary operators
// logical and operator

const content = {
    title: "Indecision App",
    subtitble: "Subtitle goes here",
    options: []
};
// JSX - JavaScript XML
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const checkOptionExist = (options) => {
    if (options && options.length > 0)
        return <p>Here are your options</p>
    else
        return <p>No Options</p>
};

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        content.options.push(option);
        e.target.elements.option.value = '';
    }
    renderIndecisionApp();
};

const onRemoveAll = (e) => {
    content.options = [];
    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * content.options.length);
    const option = content.options[randomNum];
    alert(option);
};

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{content.title}</h1>
            {content.subtitble && <p> {content.subtitble} </p>}
            {checkOptionExist(content.options)}
            <button disabled={content.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    content.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
