export default function Switch({ changeLang }) {
    return (
        <select title="Language" defaultValue='fr' id="language-select" onChange={changeLang}>
            <option value="fr"> Fr </option>
            <option value="en"> En </option>
        </select>
    );
}