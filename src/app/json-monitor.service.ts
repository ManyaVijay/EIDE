import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonMonitorService {
  filePath: any[]=[];

  constructor(private http: HttpClient) { }

  getMonitorData(fileNames: string[]): Observable<any[]> {
    const requests = fileNames.map(fileName => {
      const filePath = `assets/JSONmonitors/${fileName}.json`;
      const storedData = localStorage.getItem(filePath);
      if (storedData) {
        // Data is available in local storage, parse and return it
        return JSON.parse(storedData);
      } else {
        // Data is not available in local storage, fetch it and store it locally
        // You need to implement your logic to fetch the data here.
        // For example, you can use Angular's HttpClient to make an HTTP request.
  
        // Assuming you have a service to fetch the data, replace 'DataService' with your actual service name
        // and call your service's method to fetch the data.
        // const fetchedData = this.dataService.fetchData(fileName);
  
        // For demonstration purposes, I'll assume fetchedData is an object that you want to store.
        const getMonitorData = { exampleData: 'This is fetched data' };
  
        // Store the fetched data in local storage
        localStorage.setItem(filePath, JSON.stringify(getMonitorData));
  
        // Return the fetched data
        return this.http.get(filePath);
      }
      return this.http.get(filePath);

    });

    return forkJoin(requests);
  }

  saveEdidDataLocally(data: any) {
    localStorage.setItem('edidData', JSON.stringify(data));
  }

  searchInResponses(responses: any[], searchTerm: string): any[] {
    // Implement your search logic here
    return responses.filter(response => response.someProperty.includes(searchTerm));
  }
}
