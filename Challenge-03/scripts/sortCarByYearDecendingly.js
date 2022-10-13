function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  //Menampilkan data input sebelum disorting berdasarkan Decending Year
  console.log("Data input sebelum disorting berdasarkan Decending Year :");  
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

  // Membuat sorting menggunakan algoritma Binary Search
  let swapped;

  do{
    swapped = false;

    for(let i = 0; i < n - 1; i++){
      if(result[i]["year"] < result[i + 1]["year"]){
        let sort = result[i];
        result[i] = result[i + 1];
        result[i + 1] = sort;

        swapped = true;
      }
    }
  } while(swapped)

  //Menampilkan hasil output setelah disorting berdasarkan Decending Year
  console.log("Data output setelah disorting berdasarkan Decending Year :");  
  console.table(result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
