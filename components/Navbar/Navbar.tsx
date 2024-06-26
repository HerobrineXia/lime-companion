import { useState, useEffect, useContext } from 'react';
import SidebarContext from '../Providers/SidebarProvider';
import LoadoutContext, { LoadoutsContextProps } from '../Providers/LoadoutsProvider';
import ChosenCharacterContext from '../Providers/ChosenCharacterProvider';
import CharactersContext from '../Providers/CharactersProvider';

export const Navbar = () => {
    const { sidebarOpen } = useContext(SidebarContext);
    const { characters } = useContext(CharactersContext);
    const { chosenCharacter, secondaryCharacter, thirdOption, setSecondaryCharacter, setThirdOption } = useContext(ChosenCharacterContext);

    const [ firstOption, setFirstOption ] = useState<string>("none");
    const [ secondOption, setSecondOption ] = useState<string>("");

    const [ third, setThird ] = useState<string>("Verbose Item Info");
    const [ thirdOptions, setThirdOptions ] = useState<string[]>(["Loadouts", "Vault", "Lore"]);
    const [ showSecondAccordian, setShowSecondAccordian ] = useState<boolean>(false);

    // I know the naming convention might be wis but this is the third character option and the second is the third header option
    useEffect(() => {
        setThirdOption(third);
    }, [third]);

    useEffect(() => {
        const Default = () => {
            if (chosenCharacter && firstOption == "none") {
                for (let i in characters) {
                    if (characters[i]["characterId"] != chosenCharacter) {

                        if (characters[i]["classType"] == 0) {
                            setFirstOption("Titan");

                            return "Titan";

                        } else if (characters[i]["classType"] == 1) {
                            setFirstOption("Hunter");

                            return "Hunter";

                        } else {
                            setFirstOption("Warlock");

                            return "Warlock";
                        }
                    }
                }
            }
        }

        if (firstOption == "none" && chosenCharacter) {
            let ignore = Default();

            setThird(third);

            for (let i in characters) {
                if (characters[i]["classType"] == 0) {
                    if (ignore != "Titan" && characters[chosenCharacter]["classType"] != 0) {
                        setSecondOption("Titan");
                    }
                } else if (characters[i]["classType"] == 1) {
                    if (ignore != "Hunter" && characters[chosenCharacter]["classType"] != 1) {
                        setSecondOption("Hunter");
                    }
                } else {
                    if (ignore != "Warlock" && characters[chosenCharacter]["classType"] != 2) {
                        setSecondOption("Warlock");
                    }
                }
            }
        } else if (chosenCharacter) {
            if (characters[chosenCharacter]["classType"] == 0) {
                setFirstOption("Hunter");
                setSecondOption("Warlock");
            }
            if (characters[chosenCharacter]["classType"] == 1) {
                setFirstOption("Titan");
                setSecondOption("Warlock");
            }
            if (characters[chosenCharacter]["classType"] == 2) {
                setFirstOption("Titan");
                setSecondOption("Hunter");
            }
        }

    }, [chosenCharacter]);

    useEffect(() => {
        for (let i in characters) {
            console.log()
            if (firstOption == "Titan" && characters[i]["classType"] == 0) {
                setSecondaryCharacter(i);
            }
            if (firstOption == "Hunter" && characters[i]["classType"] == 1) {
                setSecondaryCharacter(i);
            }
            if (firstOption == "Warlock" && characters[i]["classType"] == 2) {
                setSecondaryCharacter(i);
            }
        }

    }, [firstOption]);

    const handleOptionClick = () => {
        let t = firstOption;
        setFirstOption(secondOption);
        setSecondOption(t);        
    }

    const handleThirdClick = () => {
        setShowSecondAccordian(!showSecondAccordian);
    }

    const handleThirdOption = (option: any) => (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        let t = [];

        for (let i in thirdOptions) {
            if (thirdOptions[i] != option) {
                t.push(thirdOptions[i]);
            }
        }

        t.push(third);

        // console.log(option);

        setThird(option);
        setThirdOptions(t);
    }

    return (
        <div className={`top-0 relative z-20 navbar`}>
            <div className={`transition-all duration-1000 ${sidebarOpen ? "pushed": ""}`} style={{ 
            color: "white",
            fontSize: "17px",
            marginLeft: "10px",
            marginTop: "13px"
        }}>
                <div style={{ fontWeight: "700" }}>Lime Companion</div>

                {chosenCharacter === "" ? "" : 
                    <div style={{ width: "20px", fontWeight: "700", marginLeft: "10px", marginTop: "0px", fontSize: "17px", color: "#406da8" }}>
                        {characters[chosenCharacter]["classType"] === 0 && "Titan"}
                        {characters[chosenCharacter]["classType"] === 1 && "Hunter"}
                        {characters[chosenCharacter]["classType"] === 2 && "Warlock"}
                    </div>
                }
                <div className="z-1 pl-[185px]">
                    {firstOption == "none" ? <div>
                        
                    </div> : 
                    <div className="z-10 fixed text-center font-[700]" onClick={handleOptionClick} style={{
                        width: "140px",
                        transition: 'opacity 0.25s ease-out',
                        color: "#49875e",
                    }}>
                        {firstOption}
                    </div>
                    }
                </div>               

                <div className="z-1 pl-[240px]">
                    <div className="fixed font-light text-center" onClick={handleThirdClick} style={{
                        width: "200px"
                    }}>
                        {third}
                        {showSecondAccordian === true && 

                        <div className="z-10 text-center pt-2 accordian" style={{
                            width: "200px",
                            height: "120px",
                            backgroundColor: "rgb(33, 32, 30)"
                        }}>
                            <p className="z-1 mt-2 width-[300px] text-center font-light text-white" onClick={handleThirdOption(thirdOptions[0])} >{thirdOptions[0]}</p>
                            <p className="z-1 mt-2 width-[300px] text-center font-light text-white" onClick={handleThirdOption(thirdOptions[1])} >{thirdOptions[1]}</p>
                            <p className="z-1 mt-2 width-[300px] text-center font-light text-white" onClick={handleThirdOption(thirdOptions[2])} >{thirdOptions[2]}</p>
                        </div>
                        }
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Navbar;