const ftpClient = require('ftp-client'),

 config={ 	host: '192.168.10.125',
    			port: 21,
     			user: 'ftp_upload',
     			password: 'p@ssw0rd'}

 options = { logging: 'basic'}

//console.log(config)
//console.log(options)
client = new ftpClient(config, options);

client.connect( () =>{
 
    client.upload(['./test/**'], '/home/ftp_upload/DoctorNote/', {
        baseDir: 'test',
        overwrite: 'older'
    },  (result)=> {
        console.log(result);
    });
})