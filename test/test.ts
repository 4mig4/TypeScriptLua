function f(events: { name: string; handler: any; }[]) { 
            print(events[0].name);                                              
            if (events[1]) print("failed");                                     
}                                                                             

f([{ name: "blur", handler: 1 }]);                                            