const moods = [
    {
        name: 'adventurous',
        description: 'For those seeking thrilling journeys and epic tales',
        icon: '🗺️'
    },
    {
        name: 'romantic',
        description: 'Love stories and heartwarming tales',
        icon: '💝'
    },
    {
        name: 'mysterious',
        description: 'Intriguing puzzles and suspenseful narratives',
        icon: '🔍'
    },
    {
        name: 'peaceful',
        description: 'Calming stories for relaxation',
        icon: '🌸'
    },
    {
        name: 'melancholic',
        description: 'Deep, thoughtful stories that touch the soul',
        icon: '🌧️'
    },
    {
        name: 'inspiring',
        description: 'Stories that motivate and uplift',
        icon: '✨'
    },
    {
        name: 'humorous',
        description: 'Light-hearted tales full of wit and laughter',
        icon: '😄'
    },
    {
        name: 'nostalgic',
        description: 'Stories that remind us of simpler times',
        icon: '📷'
    },
    {
        name: 'curious',
        description: 'Books that satisfy your thirst for knowledge',
        icon: '🔮'
    },
    {
        name: 'determined',
        description: 'Stories of perseverance and achievement',
        icon: '💪'
    }
];

function createMoodCards() {
    const moodGrid = document.getElementById('moodGrid');
    
    moods.forEach(mood => {
        const card = document.createElement('div');
        card.className = 'mood-card block p-6 border rounded-lg shadow-md hover:shadow-lg';
        card.innerHTML = `
            <div class="text-4xl mb-4">${mood.icon}</div>
            <h2 class="text-2xl font-semibold capitalize mb-2">
                ${mood.name}
            </h2>
            <p class="text-gray-600">${mood.description}</p>
        `;
        
        card.addEventListener('click', () => {
            window.location.href = `/recommendations/${mood.name}`;
        });
        
        moodGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', createMoodCards); 