
export const fileCheck = (file) => {
    if (!file) return false;

    if (file.type !== 'image/jpeg' && file.type !=='image/png') {
        alert('Загружаемый файл должен быть в формате JPEG или PNG')
        return false;
    }

    if (file.size > 1000000){
        alert('Размер загружаемого файла должен быть не более 1Мб')
        return false;
    }
    return true
}