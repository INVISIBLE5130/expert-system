export const remoteData = {
    data: {
        старт: {
            question: 'Начать опрос?',
            allows: [ 'да', 'нет' ]
        },
        форма_обучения: {
            question: 'На какой форме обучения Вы хотели бы учиться?',
            allows: [ 'контракт', 'бюджет', 'заочное' ]
        },
        отличие: {
            question: 'У Вас есть в аттестате отличие?',
            allows: [ 'нет', 'серебрянная_медаль', 'золотая_медаль' ]
        },
        оценка_экзамен: {
            question: 'Какую оценку Вы получили на комплексном экзамене?',
            allows: [ 'высокая', 'средняя', 'низкая' ]
        },
        оценка_сум_аттестат: {
            question: 'Какой суммарный балл Вашего аттестата?',
            allows: [ 'высокая', 'средняя', 'низкая' ]
        },
        интерес_гр1: {
            question: 'Что Вам наиболее интересно?',
            allows: [ 'компьютеры', 'экономика', 'исскуств_интеллект', 'веб_дизайн', 'менеджмент' ]
        },
        интерес_гр2: {
            question: 'Что Вам наиболее интересно?',
            allows: [ 'енергетика', 'лазеры', 'екология', 'робототехника', 'телекомуникации' ]
        },
        интерес_гр3: {
            question: 'Что Вам наиболее интересно?',
            allows: [ 'автомобили', 'радиоэлектроника', 'строительство', 'техн_повыш_износостойкости', 'микроэлектроника' ]
        },
        факультет: {
            question: '',
            allows: [ 'ИТКИ', 'АКСУ', 'ЕЕМ', 'РЭ', 'МТТ', 'БУД', 'ТЕГП' ]
        },
        група: {
            question: '',
            allows: [ '1', '2', '3' ]
        }
    },
    rules: [
        {
            conditions: { старт: 'нет' },
            action: { факультет: 'другой_университет' }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'бюджет',
                отличие: 'золотая_медаль',
                оценка_экзамен: 'высокая',
                оценка_сум_аттестат: 'высокая',
                интерес_гр1: 'исскуств_интеллект',
                интерес_гр2: 'робототехника',
                интерес_гр3: 'микроэлектроника',
                факультет: 'ИТКИ',
                група: '1',
            },
            action: {
                група: '1'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'бюджет',
                оценка_экзамен: 'высокая',
                оценка_сум_аттестат: 'высокая',
                отличие: 'серебрянная_медаль'
            },
            action: {
                група: '2'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'бюджет',
                оценка_экзамен: 'средняя',
                оценка_сум_аттестат: 'высокая',
                отличие: 'золотая_медаль'
            },
            action: {
                група: '2'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'бюджет',
                оценка_экзамен: 'средняя',
                оценка_сум_аттестат: 'высокая',
                отличие: 'серебрянная_медаль'
            },
            action: {
                група: '2'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'бюджет',
                оценка_экзамен: 'высокая',
                оценка_сум_аттестат: 'средняя',
                отличие: 'серебрянная_медаль'
            },
            action: {
                група: '3'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'контракт',
                оценка_экзамен: 'средняя',
                оценка_сум_аттестат: 'средняя',
                отличие: 'серебрянная_медаль'
            },
            action: {
                група: '1'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'контракт',
                оценка_экзамен: 'высокая',
                оценка_сум_аттестат: 'средняя',
                отличие: 'серебрянная_медаль'
            },
            action: {
                група: '1'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'контракт',
                оценка_экзамен: 'средняя',
                оценка_сум_аттестат: 'высокая',
                отличие: 'серебрянная_медаль'
            },
            action: {
                група: '1'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'контракт',
                оценка_экзамен: 'низкая',
                оценка_сум_аттестат: 'средняя'
            },
            action: {
                група: '2'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'контракт',
                оценка_экзамен: 'средняя',
                оценка_сум_аттестат: 'низкая'
            },
            action: {
                група: '2'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'контракт',
                оценка_экзамен: 'низкая',
                оценка_сум_аттестат: 'низкая'
            },
            action: {
                група: '3'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'заочное',
                оценка_экзамен: 'высокая',
                оценка_сум_аттестат: 'высокая'
            },
            action: {
                група: '1'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'заочное',
                оценка_экзамен: 'высокая',
                оценка_сум_аттестат: 'средняя'
            },
            action: {
                група: '1'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'заочное',
                оценка_экзамен: 'средняя',
                оценка_сум_аттестат: 'высокая'
            },
            action: {
                група: '1'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'заочное',
                оценка_экзамен: 'низкая',
                оценка_сум_аттестат: 'средняя'
            },
            action: {
                група: '2'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'заочное',
                оценка_экзамен: 'средняя',
                оценка_сум_аттестат: 'средняя'
            },
            action: {
                група: '2'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'заочное',
                оценка_экзамен: 'средняя',
                оценка_сум_аттестат: 'низкая'
            },
            action: {
                група: '2'
            }
        },
        {
            conditions: {
                старт: 'да',
                форма_обучения: 'заочное',
                оценка_экзамен: 'низкая',
                оценка_сум_аттестат: 'низкая'
            },
            action: {
                група: '3'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '1',
                интерес_гр1: 'компьютеры'
            },
            action: {
                факультет: 'ИТКИ'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '1',
                интерес_гр1: 'исскуств_интеллект'
            },
            action: {
                факультет: 'ИТКИ'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '1',
                интерес_гр1: 'веб_дизайн'
            },
            action: {
                факультет: 'ИТКИ'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '1',
                интерес_гр1: 'экономика'
            },
            action: {
                факультет: 'ЕЕМ'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '1',
                интерес_гр1: 'менеджмент'
            },
            action: {
                факультет: 'ЕЕМ'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '2',
                интерес_гр1: 'лазеры'
            },
            action: {
                факультет: 'АКСУ'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '2',
                интерес_гр1: 'робототехника'
            },
            action: {
                факультет: 'АКСУ'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '2',
                интерес_гр1: 'телекомуникации'
            },
            action: {
                факультет: 'РЭ'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '2',
                интерес_гр1: 'енергетика'
            },
            action: {
                факультет: 'ТЕГП'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '2',
                интерес_гр1: 'екология'
            },
            action: {
                факультет: 'ТЕГП'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '3',
                интерес_гр1: 'автомобили'
            },
            action: {
                факультет: 'МТТ'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '3',
                интерес_гр1: 'радиоэлектроника'
            },
            action: {
                факультет: 'РЭ'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '3',
                интерес_гр1: 'микроэлектроника'
            },
            action: {
                факультет: 'РЭ'
            }
        },
        {
            conditions: {
                старт: 'да',
                група: '3',
                интерес_гр1: 'строительство'
            },
            action: {
                факультет: 'БУД'
            }
        }
    ]
};
