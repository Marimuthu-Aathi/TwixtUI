import React from 'react';

const ToolName = ({ name, status, emoji }) => {
    const getStatusEmoji = () => {
        switch (status) {
            case 'down':
                return '🔻';
            case 'deprecated':
                return '⚠️';
            case 'christmas':
                return '🎄';
            case 'newyear':
                return '🎆';
            default:
                return '';
        }
    };

    return (
        <div className="flex items-center space-x-2 font-special">
            <span>{name}</span>
            {getStatusEmoji() && <span>{getStatusEmoji()}</span>}
            {emoji && <span>{emoji}</span>}
            <span className="text-xs text-gray-500">Powered by Tailwind</span>
        </div>
    );
};

export default ToolName;
