function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || Number (fano.value) > ano) {
      window.alert('[ERRO]Verifique seus dados e tente novamente!')
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano -Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked){
         genero =  'Homem'
         if (idade >=0 && idade < 10){
            img.setAttribute('src', 'fotos/foto-bebe-m.png')
         } else if (idade < 25){
            img.setAttribute('src', 'fotos/foto-jovem-m.png')
           
         } else if(idade < 50){
            img.setAttribute('src', 'fotos/foto-adulto-m.png')


         } else {
            img.setAttribute('src', 'fotos/foto-idoso-m.png')

         }



      } else if (fsex[1].checked){
         genero = 'Mulher'
         if (idade >=0 && idade < 10){
            img.setAttribute('src', 'fotos/foto-bebe-f.png')

         } else if (idade < 25){
            img.setAttribute('src', 'fotos/foto-jovem-f.png')

           
         } else if(idade < 50){
            img.setAttribute('src', 'fotos/foto-adulto-f.png')


         } else {
            img.setAttribute('src', 'fotos/foto-idoso-f.png')

         }


      }


      res.innerHTML =`Detectamos ${genero} com idade de ${idade} anos.`
      res.appendChild(img)

   }
}