import React from 'react';

const SizeGuide = () => {
  return (
    <div className="container mt-5">
      <h1>Size Guide</h1>
      <p>Finding the right size is important for a perfect fit. Please refer to the following size chart to determine your size:</p>
      <table className="table">
        <thead>
          <tr>
            <th>Size</th>
            <th>Chest (inches)</th>
            <th>Waist (inches)</th>
            <th>Hip (inches)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>XS</td>
            <td>31-32</td>
            <td>24-25</td>
            <td>33-34</td>
          </tr>
          <tr>
            <td>S</td>
            <td>33-34</td>
            <td>26-27</td>
            <td>35-36</td>
          </tr>
          <tr>
            <td>M</td>
            <td>35-37</td>
            <td>28-30</td>
            <td>37-39</td>
          </tr>
          <tr>
            <td>L</td>
            <td>38-40</td>
            <td>31-33</td>
            <td>40-42</td>
          </tr>
          <tr>
            <td>XL</td>
            <td>41-43</td>
            <td>34-36</td>
            <td>43-45</td>
          </tr>
        </tbody>
      </table>
      <p>For further assistance, please contact our customer service team.</p>
    </div>
  );
};

export default SizeGuide;
