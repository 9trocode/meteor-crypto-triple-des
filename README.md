Triple DES algorithm for CryptoJS, standard secure algorithms. 
based on https://github.com/p-j/meteor-crypto-md5

[DES](https://en.wikipedia.org/wiki/Data_Encryption_Standard) message digest cryptographic
hash function algorithm from [CryptoJS](https://code.google.com/p/crypto-js/),
packaged for Meteor.

Dependency
----------
- [`jparker:crypto-core`](https://github.com/p-j/meteor-crypto-core).

Install
-------

Inside your project folder run
```
$ meteor add ikaedesu:crypto-triple-des
```

The following method under the CryptoJS namespace will now be available
on **both the client and server**:

`CryptoJS.DES(message)`


Usage
-------
```javascript
encrypted = CryptoJS.DES.encrypt("Message", "Passphrase");
console.log(encrypted.toString());
// U2FsdGVkX1+luaxAzoyoyJI/5sAzyUW1

decrypted = CryptoJS.DES.decrypt(encrypted, "Passphrase");
console.log(decrypted.toString(CryptoJS.enc.Utf8));
// Message
```

See also
--------
The CryptoJS project lives at <https://code.google.com/p/crypto-js/> and the documentation for MD5 is at <https://code.google.com/p/crypto-js/#DES>.

Credits
-------

Based on [Dan Dascalescu's and Tom Coleman's work](https://github.com/oortcloud/meteor-crypto-md5)
and [Jérémie Parker's jparker:crypto-core](https://github.com/p-j/meteor-crypto-md5)
