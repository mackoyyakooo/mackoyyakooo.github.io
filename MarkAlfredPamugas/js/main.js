<script>
  const handlePrint = () ={">"} window.print();

  const btnPrint = document.getElementById('print');
  console.log(btnPrint); // Optional: for debugging

  if (btnPrint) {
    btnPrint.addEventListener('click', handlePrint)
  }
</script>
