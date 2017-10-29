  function updateOrder() {
        const TAXRATE = 0.0925;
        const DONUTPRICE = 0.50;
        var numCakeDonuts = parseInt(document.getElementById("cakedonuts").value);
        var numGlazedDonuts = parseInt(document.getElementById("glazeddonuts").value);
        var subTotal = (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
        var tax = subTotal * TAXRATE;
        var total = subTotal + tax;
        document.getElementById("subtotal").value = "$" + subTotal.toFixed(2);
        document.getElementById("tax").value = "$" + tax.toFixed(2);
        document.getElementById("total").value = "$" + total.toFixed(2);
      }

      function placeOrder(form) {
        // Submit the order to the server
        form.submit();
      }