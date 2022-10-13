function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  //Menampilkan Data input sebelum di filter berdasarkan Availability
  console.log("Data input sebelum di filter berdasarkan Availability :");  
  console.table(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Membuat Filter berdasarkan Availability menggunakan metode Looping for..of
  for(let i of cars){
    // Membuat sebuah variabel untuk menampung data properties Available
    let available = i.available;
    if(available === true){
      result.push(i);
    }
  }

  //Menampilkan Data output setelah di filter berdasarkan Availability
  console.log("Data output setelah di filter berdasarkan Availability :");  
  console.table(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
