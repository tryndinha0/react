import PropTypes from 'prop-types'

let Estudante = (props)=>{
    const styles = {
        border: "2px solid black",
        margin: "5px ",
        padding: "3px"
    }
    return(
        <div style={styles}>
            <p>Nome: {props.name}</p>
            <p>Idade: {props.idade}</p>
            <p>Kpop: {props.kpop ? "Sim" : "Não"}</p>
        </div>
    )
}
Estudante.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    eEstudante:PropTypes.bool
}
Estudante.defaultProps = {
    name: "daniel",
    idade: 18,
    kpop: "sim"

}

export default Estudante