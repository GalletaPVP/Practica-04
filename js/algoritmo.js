function analizar(){
    var fecha_input = document.getElementById('numero_fecha').value;
    var fecha2019 = '2019-12-21',
        fecha2020 = '2020-12-20',
        fecha2021 = '2021-12-20';
    if(fecha_input >= fecha2019 && fecha_input <= fecha2020){
        var fecha_in_verano = '2019-12-21',
        fecha_fi_verano = '2020-03-21',
        fecha_in_otoño = '2020-03-22',
        fecha_fi_otoño = '2020-06-20',
        fecha_in_invierno = '2020-06-21',
        fecha_fi_invierno = '2020-09-22',
        fecha_in_primavera = '2020-09-23',
        fecha_fi_primavera = '2020-12-20';
        if(fecha_input >= fecha_in_verano && fecha_input <= fecha_fi_verano){
            document.getElementById('tipo_estacion').innerText = 'VERANO';
            document.getElementById('precio_cafe').value = 0.30;
            document.getElementById('precio_cafe').innerText = 'S/.0.30';
            document.getElementById('precio_helado').value = 3.50;
            document.getElementById('precio_helado').innerText = 'S/.3.50';
        }else if(fecha_input >= fecha_in_otoño && fecha_input <= fecha_fi_otoño){
            document.getElementById('tipo_estacion').innerText = 'OTOÑO';
            document.getElementById('precio_cafe').value = 1.00;
            document.getElementById('precio_cafe').innerText = 'S/.1.00';
            document.getElementById('precio_helado').value = 0.70;
            document.getElementById('precio_helado').innerText = 'S/.0.70';
        }else if(fecha_input >= fecha_in_invierno && fecha_input <= fecha_fi_invierno){
            document.getElementById('tipo_estacion').innerText = 'INVIERNO';
            document.getElementById('precio_cafe').value = 5.00;
            document.getElementById('precio_cafe').innerText = 'S/.5.00';
            document.getElementById('precio_helado').value = 0.30;
            document.getElementById('precio_helado').innerText = 'S/.0.30';
        }else if(fecha_input >= fecha_in_primavera && fecha_input <= fecha_fi_primavera){
            document.getElementById('tipo_estacion').innerText = 'PRIMAVERA';
            document.getElementById('precio_cafe').value = 1.50;
            document.getElementById('precio_cafe').innerText = 'S/.1.50';
            document.getElementById('precio_helado').value = 1.50;
            document.getElementById('precio_helado').innerText = 'S/.1.50';
        }
    }else if(fecha_input >= fecha2020 && fecha_input <= fecha2021){
        var fecha_in_verano = '2020-12-21',
        fecha_fi_verano = '2021-03-21',
        fecha_in_otoño = '2021-03-22',
        fecha_fi_otoño = '2021-06-20',
        fecha_in_invierno = '2021-06-21',
        fecha_fi_invierno = '2021-09-22',
        fecha_in_primavera = '2021-09-23',
        fecha_fi_primavera = '2021-12-20';
        if(fecha_input >= fecha_in_verano && fecha_input <= fecha_fi_verano){
            document.getElementById('tipo_estacion').innerText = 'VERANO';
            document.getElementById('precio_cafe').value = 0.30;
            document.getElementById('precio_cafe').innerText = 'S/.0.30';
            document.getElementById('precio_helado').value = 3.50;
            document.getElementById('precio_helado').innerText = 'S/.3.50';
        }else if(fecha_input >= fecha_in_otoño && fecha_input <= fecha_fi_otoño){
            document.getElementById('tipo_estacion').innerText = 'OTOÑO';
            document.getElementById('precio_cafe').value = 1.00;
            document.getElementById('precio_cafe').innerText = 'S/.1.00';
            document.getElementById('precio_helado').value = 0.70;
            document.getElementById('precio_helado').innerText = 'S/.0.70';
        }else if(fecha_input >= fecha_in_invierno && fecha_input <= fecha_fi_invierno){
            document.getElementById('tipo_estacion').innerText = 'INVIERNO';
            document.getElementById('precio_cafe').value = 5.00;
            document.getElementById('precio_cafe').innerText = 'S/.5.00';
            document.getElementById('precio_helado').value = 0.30;
            document.getElementById('precio_helado').innerText = 'S/.0.30';
        }else if(fecha_input >= fecha_in_primavera && fecha_input <= fecha_fi_primavera){
            document.getElementById('tipo_estacion').innerText = 'PRIMAVERA';
            document.getElementById('precio_cafe').value = 1.50;
            document.getElementById('precio_cafe').innerText = 'S/.1.50';
            document.getElementById('precio_helado').value = 1.50;
            document.getElementById('precio_helado').innerText = 'S/.1.50';
        }  
    }
}
function calcular(){
    var precio_cafe = document.getElementById('precio_cafe').value;
    var pedido_cafe = document.getElementById('pedido_cafe').value;
    var precio_helado = document.getElementById('precio_cafe').value;
    var pedido_helado = document.getElementById('pedido_helado').value;
    var fecha_input = document.getElementById('numero_fecha').value;
    var costo_total = 0,
        total_igv = 0,
        total_pagar = 0;
    if(fecha_input === ""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Falta seleccionar la fecha',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }else if(pedido_cafe === ""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Falta ingresar el pedido de cafe',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }else if(pedido_helado === ""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Falta ingresar el pedido de helado',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }else{
        costo_total = (precio_cafe * pedido_cafe) + (precio_helado * pedido_helado);
        total_igv = costo_total * 0.18;
        total_pagar = costo_total + total_igv;
    }
    document.getElementById('costo_total').value = Math.round(costo_total);
    document.getElementById('igv_total').value = total_igv.toFixed(2);
    document.getElementById('total_pagar').value = Math.round(total_pagar);
}
function borrar(){
    document.getElementById('pedido_cafe').value = '';
    document.getElementById('pedido_helado').value = '';
    document.getElementById('costo_total').value = '';
    document.getElementById('igv_total').value = '';
    document.getElementById('total_pagar').value = '';
}

document.getElementById('numero_fecha').addEventListener('input', analizar)
document.getElementById('calcular').addEventListener('click', calcular)
document.getElementById('limpiar').addEventListener('click', borrar)