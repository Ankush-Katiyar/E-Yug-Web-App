import React from 'react';
import ReactDOM from 'react-dom';


export function Construction() {

    return (

        <div>

        <h1>List of Construction Workers and Contractors</h1>

        <form>
            <label for="worker-name">Worker/Contractor Name:</label>
            <input type="text" id="worker-name" name="worker-name"> </input> <br/>
    
            <label for="work-type">Type of Work:</label>
            <select id="work-type" name="work-type">
                <option value="construction-worker">Construction Worker</option>
                <option value="contractor">Contractor</option>
            </select><br/>
    
            <label for="worker-contact">Contact Information:</label>
            <input type="text" id="worker-contact" name="worker-contact">   </input>  <br/>
    
            <button type="submit">Add Worker/Contractor</button>
        </form>
    
    
        <h2>List of Workers and Contractors</h2>
    
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type of Work</th>
                    <th>Contact Information</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Smith</td>
                    <td>Construction Worker</td>
                    <td>555-555-5555</td>
                </tr>
                <tr>
                    <td>Jane Doe</td>
                    <td>Contractor</td>
                    <td>555-555-5555</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
  }

export default Construction;
