$(document).ready(function () {
  $(".fixed-action-btn").floatingActionButton();
  $(".preloader-background").hide();
  $('.modal').modal();

  var db = openDatabase('lista', '1.0', 'lista', 1024*1024*2);

  db.transaction(function(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS registros(id INTEGER PRIMARY KEY, tarefa VARCHAR, data VARCHAR, prioridade VARCHAR, descricao VARCHAR, realizada INTEGER)');
  });

  // var tarefa = 'Minha tarefa';
  // var data = '15/08/2021';
  // var prioridade = 'alta';
  // var descricao = 'lorem ipsum sit amet dolor';
  // var realizada = 0;

  // db.transaction(function(tx){
  //   tx.executeSql('INSERT INTO registros(tarefa, data, prioridade, descricao, realizada) VALUES(?,?,?,?,?)',[tarefa, data, prioridade, descricao, realizada], function(){
  //   });
  // });

  // var id = 12;
  // db.transaction(function(tx){
  //   tx.executeSql('DELETE FROM registros WHERE id = ?',[id], function(){
  //     alert('Registro removido com sucesso');
  //   });
  // });

  // var tarefa = 'Sua tarefa Yuuuuuuri';
  // var id =  3;

  //   db.transaction(function(tx){
  //   tx.executeSql('UPDATE registros SET tarefa = ? WHERE id = ?',[tarefa, id], function(){
  //     alert('Registro atualizado com sucesso');
  //   });
  // });


    db.transaction(function(tx){
    tx.executeSql('SELECT * FROM registros',[], function(tx, results){
      let total = results.rows.length;
      let i;
      for(i=0; i<total; i++){
        alert(results.rows.item(i).tarefa);
      }
      //alert('Select realizado com sucesso');
    });
  });








});