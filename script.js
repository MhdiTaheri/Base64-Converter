function convert() {
    const conversionDirection = document.getElementById('conversionDirection').value;
    const inputData = document.getElementById('inputData').value.trim();
    let output = '';
  
    if (conversionDirection === 'textToBase64') {
      output = btoa(inputData);
    } else if (conversionDirection === 'base64ToText') {
      try {
        output = atob(inputData);
      } catch (error) {
        showAlert('Invalid Base64 input!', 'error');
        return;
      }
    }
  
    document.getElementById('resultArea').value = output;
  }
  
  function copyResults() {
    const resultTextarea = document.getElementById('resultArea');
    resultTextarea.select();
    document.execCommand('copy');
    showAlert('Results copied to clipboard!', 'success');
  }
  
  function showAlert(message, icon) {
    Swal.fire({
      icon: icon,
      title: message,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      toast: true,
      position: 'top-end',
      background: '#333',
      iconColor: '#fff',
      customClass: {
        popup: 'colored-toast'
      }
    });
  }
  