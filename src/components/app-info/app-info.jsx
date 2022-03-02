import "./app-info.css";

const AppInfo = ({ allEmployees, countPremiumEmployees }) => {
    const premiumEmployees = countPremiumEmployees();
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {allEmployees}</h2>
            <h2>Премию получат: {premiumEmployees}</h2>
        </div>
    )
}

export default AppInfo;