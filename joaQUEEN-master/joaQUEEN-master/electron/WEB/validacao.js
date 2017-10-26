//validacao de campos do index


$(document).ready(function (){
    $("#btn_upload").click(function (e){
      e.preventDefault();
      if ($("input[name=Title]").val() == ""){
        titulo = $("input[name=Title]").val();
        alert("Insert the title of the song!");
      }else {
        if ($("input[name=Artist]").val() == ""){
            artista = $("input[name=Artist]").val();
            alert("Insert the name of the artist!");
        } else {
          if($("input[name=Genre]").val() == ""){
            genero = $("input[name=Genre]").val();
            alert("Insert the genre of the song!");
          } else {
            if($("input[name=myFile]").val() == ""){
              alert("Please, select one file!");
            } else {
              
                  //cria uma classe Song para musicas
                  class Song{
                      constructor(title, artist, genre, file){
                        this.title = title;
                        this.artist = artist;
                        this.genre = genre;
                        this.file = file;
                      }

                      getTitle(){
                        return this.title;
                      }

                      getArtist(){
                        return this.artist;
                      }

                      getGenre(){
                        return this.genre;
                      }

                      getFile(){
                        return this.file;
                      }
                  }

                  //pega os atributos do formulário do index
                  var t = $(document.getElementsByName('Title')).val();
                  var a = $(document.getElementsByName('Artist')).val();
                  var g = $(document.getElementsByName('Genre')).val();
                  var f = $(document.getElementsByName('myFile')).val();

                  //instancia um objeto da classe Song
                  var musica = new Song(t, a, g, f);

                  //teste
                  alert('Title: ' + musica.getTitle() +
                  '\nArtist: ' + musica.getArtist() +
                  '\nGenre: ' + musica.getGenre() +
                  '\nFile: ' + musica.getFile());
              }
          }
        }
      }
    });
});
