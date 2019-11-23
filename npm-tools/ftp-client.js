const ftpClient = require('ftp-client'),

 config={ 	host: '202.28.22.136',
    			port: 21,
     			user: 'gtfarng',
     			password: 'vir512521'}

 options = { logging: 'basic'}

//console.log(config)
//console.log(options)
client = new ftpClient(config, options);

client.connect( () =>{
 
    client.upload(['./test/**'], '/home/gtfarng/ftp', {
        baseDir: 'test',
        overwrite: 'older'
    },  (result)=> {
        console.log(result);
    });
})