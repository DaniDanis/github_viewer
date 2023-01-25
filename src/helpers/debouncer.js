export function debounceDecorator(f, tempo) {
    let _timeOutCode = null
    function decorada() {
        if(_timeOutCode) {
            clearTimeout(_timeOutCode)
        }
        const _arguments = arguments
        _timeOutCode = setTimeout(() => {
            f.apply(this, _arguments)
            _timeOutCode = null
        }, tempo)
    }
    return decorada
}

// Como usar: função: debounceDecorator(function () {
//     seu codigo
// }, tempo)
// onde tempo é o tempo que o debounceDecorator vai usar :D 