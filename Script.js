document.getElementById('viewMoreBtn').addEventListener('click', function() {
    const secondaryFeatures = document.getElementById('secondaryFeatures');
    const btn = this;
    if (secondaryFeatures.style.display === 'grid') {
        secondaryFeatures.style.display = 'none';
        btn.textContent = 'View All Features +';
    } else {
        secondaryFeatures.style.display = 'grid';
        btn.textContent = 'Show Less -';
    }
});


const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['HR', 'IT', 'Sales', 'Marketing', 'R&D'],
        datasets: [{
            label: 'Project Overview',
            data: [10, 20, 15, 25, 18],
            backgroundColor: '#4f46e5',
            borderRadius: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'doughnut',
    data: {
        labels: ['Used', 'Remaining'],
        datasets: [{
            data: [45, 55],
            backgroundColor: ['#4f46e5', '#c3c6ff'],
            borderWidth: 0
        }]
    },
    options: {
        cutout: '0%',
        plugins: {
            legend: { display: false }
        }
    }
});