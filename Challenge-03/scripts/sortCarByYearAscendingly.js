function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  //Menampilkan data input sebelum disorting berdasarkan Ascending Year
  console.log("Data input sebelum disorting berdasarkan Ascending Year :");  
  console.table(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  /*
  Side Effects adalah efek samping setiap perubahan keadaan yang terjadi di luar function yang dipanggil. 
  Tujuan terbesar dari setiap functional programming language adalah meminimalkan efek samping, dengan memisahkannya dari kode perangkat lunak lainnya.
  */
  const result = [...cars];
  
  // Tulis code-mu disini
  // Membuat sebuah variabel n untuk menentukan panjang array
  const n = cars.length;

  // Membuat sorting menggunakan algoritma Bubble Sort
  for(let i = 0; i < n ; i++){
    for(let j = 0; j < n - i - 1; j++){
      if(result[j]["year"] > result[j + 1]["year"]){
        let sort = result[j];
        result[j] = result[j + 1];
        result[j + 1] = sort;
      }
    }
  }

  //Menampilkan hasil output setelah disorting berdasarkan Ascending Year
  console.log("Data output setelah disorting berdasarkan Ascending Year :");  
  console.table(result);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
