
interface ThemeProps {
    colors: {
        primary: string,
        secondary: string,
        grey: string
    },
    transitions: {
        default: string,
        slow: string,
        median: string,
        fast: string
    },

    shadows: {
        default: string,
    },

    font: {
        default: string
    }

    button: {
        textColor: {
            primary: string,
            secondary: string,
        },
        bgColor: {
            primary: string,
            secondary: string,
        },
        border: {
            default: string,
            colors: {
                primary: string,
                secondary: string,
            },
            size: string,
            radius: string
        }
    },

    input: {
        default: {
            textColor: {
                primary: string,
                secondary: string,
            },
            border: {
                default: string,
                colors: {
                    primary: string,
                    secondary: string,
                },
                size: string,
                radius: string
            }
        },

        error: {
            border: {
                default: string,
                colors: {
                    primary: string,
                    secondary: string,
                },
                size: string,
                radius: string
            },
            shadow: string
        }
    },

    efects: {
        input: {
            focus: {
                border: string,
                shadow: string
            }
        }
    }
}


export interface InitialThemeValueType {
    light: ThemeProps
    dark: ThemeProps
}

export const InitialThemeValue: InitialThemeValueType = {
    light: {
        colors: {
            primary: "#ffffffff",
            secondary: "#000000ff",
            grey: "#707070ff"
        },
        transitions: {
            default: "all .5s ease",
            fast: "all .3s ease",
            median: "all 1s ease",
            slow: "all 2s ease",
        },
        shadows: {
            default: "0px 5px 20px 5px #0000000a"
        },
    
        font: {
            default: "'Roboto', Arial"
        },
    
        button: {
            bgColor: {
                primary: "#0065e8ff",
                secondary: "#003982ff",
            },
            border: {
                colors: {
                    primary: "#0065e8ff",
                    secondary: "#003982ff",
                },
                default: "1px solid #0065e8ff",
                radius: "7px",
                size: "1px"
            },
            textColor: {
                primary: "#ffffffff",
                secondary: "#fafafaff",
            }
        },
    
        input: {
            default: {
                border: {
                    colors: {
                        primary: "#ccccccff",
                        secondary: "#fafafaff",
                    },
                    default: "1px solid #ccccccff",
                    radius: "7px",
                    size: "1px"
                },
                textColor: {
                    primary: "#000000ff",
                    secondary: "#0065e8ff",
                }
            },
            error: {
                border: {
                    colors: {
                        primary: "#ccccccff",
                        secondary: "#fafafaff",
                    },
                    default: "1px solid #f7000060",
                    radius: "7px",
                    size: "1px"
                },
                shadow: "0 0 1px 0.10rem #f7000060"
            }
        },
    
        efects: {
            input: {
                focus: {
                    border: "1px solid #0065e830",
                    shadow: "0 0 1px 0.15rem #0065e830"
                }
            }
        } 
    },
    dark: {
        colors: {
            primary: "#000000ff",
            secondary: "#ffffffff",
            grey: "#fafafaff"
        },
        transitions: {
            default: "all .5s ease",
            fast: "all .3s ease",
            median: "all 1s ease",
            slow: "all 2s ease",
        },
        shadows: {
            default: "0px 5px 20px 5px #00000000"
        },
    
        font: {
            default: "'Roboto', Arial"
        },
    
        button: {
            bgColor: {
                primary: "#0065e8ff",
                secondary: "#003982ff",
            },
            border: {
                colors: {
                    primary: "#0065e8ff",
                    secondary: "#003982ff",
                },
                default: "1px solid #0065e8ff",
                radius: "7px",
                size: "1px"
            },
            textColor: {
                primary: "#ffffffff",
                secondary: "#fafafaff",
            }
        },
    
        input: {
            default: {
                border: {
                    colors: {
                        primary: "#ccccccff",
                        secondary: "#fafafaff",
                    },
                    default: "1px solid #0065e8ff",
                    radius: "7px",
                    size: "1px"
                },
                textColor: {
                    primary: "#000000ff",
                    secondary: "#0065e8ff",
                }
            },
            error: {
                border: {
                    colors: {
                        primary: "#ccccccff",
                        secondary: "#fafafaff",
                    },
                    default: "1px solid #f7000060",
                    radius: "7px",
                    size: "1px"
                },
                shadow: "0 0 1px 0.10rem #f7000060"
            }
        },
    
        efects: {
            input: {
                focus: {
                    border: "1px solid #0065e830",
                    shadow: "0 0 1px 0.15rem #0065e830"
                }
            }
        } 
    }
} 