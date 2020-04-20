const  { spawn }  =  require ( 'child_process' ) ;

const  Telegraf  =  требуется ( 'telegraf' )

const  bot  =  new  Telegraf ( '1141540861: AAG8L5I6PH1ZZK-Q6qw2BLpy9EmhEgYRuho' )


бот . команда ( 'mkdir' ,  ( ctx )  =>  {
    const  mkdir  =  spawn ( 'mkdir' ,  [ 'folder' ] ) ;
    вернуть  ctx . ответить ( 'Папка папка создана' )
} )

бот . запуск ( )
© 2020 GitHub, Inc.