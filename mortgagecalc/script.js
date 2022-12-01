
        function calculate() { 
            var p = document.getElementById('p').value; 
            p = Number(p); 
            var r = document.getElementById('r').value; 
            r = Number(r); 
            var t = document.getElementById('t').value; 
            t = Number(t); 
            var m = document.getElementById('m').value; 
            m = Number(m);
            var n = 12;  
            var b = p (1 + r / n)**n*t; 
            var noot = - m * [(1 + r / n)**n*t - 1] / (r /n); 

            var fin = b - noot; 
            fin = fin.toFixed(2);  
            
            var out = msg('The remaining money of what you have is:' + fin);
            document.getElementById('out').innerHTML = out; 
        }
        function reset() { 
            document.getElementById('p').value = ""; 
            document.getElementById('r').value = ""; 
            document.getElementById('t').value = ""; 
            document.getElementById('m').value = ""; 
        }
   