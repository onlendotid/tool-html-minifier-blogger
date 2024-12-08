function minifyHTML() {
    var input = document.getElementById('inputHTML').value;
    var output = input.replace(/\s{2,}/g, ' ')
                      .replace(/\n/g, '')
                      .replace(/> </g, '><');
    document.getElementById('outputHTML').value = output;
  }

  function beautifyHTML() {
    var input = document.getElementById('inputHTML').value;
    var formatted = input.replace(/></g, '>\n<')
                         .replace(/ {2,}/g, ' ')
                         .replace(/\n\s*\n/g, '\n')
                         .trim(); 
    document.getElementById('outputHTML').value = formatted;
  }

  function copyOutput() {
    var output = document.getElementById('outputHTML');
    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Kode berhasil disalin!');
  }

  function clearOutput() {
    document.getElementById('inputHTML').value = '';
    document.getElementById('outputHTML').value = '';
  }
