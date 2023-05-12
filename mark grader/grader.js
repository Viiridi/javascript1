var more = true;
        var Grade = '';
        while(more){
            mark = prompt("Enter a mark")
            if (mark >= 90){
                Grade = 'A';
            }
            if(90 > mark && mark >= 80){
                Grade = 'B';
            } 
            if(80 > mark && mark >= 70){
                Grade = 'C';
            } 
            if(70 > mark && mark >= 60){
                Grade = 'D';
            } 
            if(60 > mark && mark >= 50){
                Grade = 'E';
            } 
            if(50 > mark){
                Grade = 'F';
            }
            alert(Grade);
            more = confirm('Are there more marks to grade?')
        }