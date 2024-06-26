import CharactersContext from '../Providers/CharactersProvider'
import ChosenCharacterContext from '../Providers/ChosenCharacterProvider';
import { GetItem, HasIntrinsicUpgrade, ItemInstance } from '../Destiny/Fetch';
import VerboseContext from '../Providers/VerboseCharactersProvider';
import TokenContext from '../Providers/TokenProvider';

import {
    useState,
    useEffect,
    useContext
} from 'react';

import { Popup } from './Popup';

import SelectedContext from '../Providers/SelectedProvider';
import { ItemDisplay } from './ItemDisplay';
import { ReceiveItem, handleItemDragOver } from './ItemTransfer';
import { ItemBucketHash, ItemLocation } from './ItemEnumDefinition'

export const CharacterInventory = () => {
    const { chosenCharacter, secondaryCharacter } = useContext(ChosenCharacterContext);
    const { characters, updateCharacters } = useContext(CharactersContext);
    const { verbose, inventory, equipped, vault, divHeight, updateInventory, updateVault, updateDivHeight } = useContext(VerboseContext);
    const { item, setItem } = useContext(SelectedContext);
    const { token, membershipId } = useContext(TokenContext);

    const [ hash, setHash ] = useState<any>([]);
    const [ prevHash, setPrevHash ] = useState<any>([]);
    const [ revealed, setRevealed ] = useState<boolean>(false);
    const [ coords, setCoords ] = useState<any>([0, 0]);

    const [ itemHashes, updateItemHashes ] = useState<any[]>([]);

    const [ isLoading, setIsLoading ] = useState(true);
    const [ opacity, setOpacity ] = useState(1);

    const _ReceiveItem = async (event, characterId, slot) => {
        let t = await ReceiveItem(event, characterId, slot, {equipped, inventory, vault});

        const tempVault = vault.filter(item => item["hash"] !== t[0]["hash"]);
        
        t[0]["bucketHash"] = t[0]["equippingBlock"]["equipmentSlotTypeHash"];

        const tempInventory = [...inventory, {...t[0], "character": t[1]}];

        updateVault(tempVault);
        updateInventory(tempInventory);
    }

    const _GiveItem = (event, characterId, slot) => {

    }

    // on icon click -> for showing verbose info
    const handleIconClick = (info: any) => {
        if (info == item) {
            setItem("");

            return;
        }
        
        setItem(info);
        // EquipItem(chosenCharacter, info);
        console.log(info);
    }

    // animation for character change
    useEffect(() => {
        setOpacity(.25);
        const timer = setTimeout(() => setOpacity(1), 250);
        return () => clearTimeout(timer);
    }, [chosenCharacter]);

    // update all info when character info changes
    useEffect(() => {
        setIsLoading(true);
    
        if (verbose && verbose["Response"]) {
            if (verbose["Response"]["characterEquipment"]["data"][chosenCharacter] && verbose["Response"]["characterEquipment"]["data"][chosenCharacter]["items"]) {
                updateItemHashes(verbose["Response"]["characterEquipment"]["data"][chosenCharacter]["items"]);
                
                setIsLoading(false);
            }
        }

    }, [verbose, chosenCharacter, characters]);

    const [ CurrentLoadout, setCurrentLoadout ] = useState<any[]>([]);
    const [ CurrentInventory, setCurrentInventory ] = useState<any[][]>([]);
    const [ SecondLoadout, setSecondLoadout ] = useState<any[]>([]);
    const [ SecondInventory, setSecondInventory ] = useState<any[]>([]);

    // sorts items by buckets to display for the first character
    useEffect(() => {
        const fetchInventoryInfo = async () => {
            let tempLoadout = [...CurrentLoadout];
            let tempInv = [...CurrentInventory];

            for (let i in equipped) {
                if (equipped[i]["character"] === chosenCharacter) {
                    if (equipped[i]["bucketHash"] === ItemBucketHash.KINETIC) {
                        tempLoadout[0] = equipped[i];
                    }
                    if (equipped[i]["bucketHash"] === ItemBucketHash.ENERGY) {
                        tempLoadout[1] = equipped[i];
                    }
                    if (equipped[i]["bucketHash"] === ItemBucketHash.POWER) {
                        tempLoadout[2] = equipped[i];
                    }
                }
            }

            setCurrentLoadout(tempLoadout);

            let kInvTemp = [];
            let sInvTemp = [];
            let hInvTemp = [];

            for (let i in inventory) {                

                if (inventory[i]["character"] === chosenCharacter) {
                    if (inventory[i]["bucketHash"] === ItemBucketHash.KINETIC) {                        
                        kInvTemp.push(inventory[i]);
                    }
                    if (inventory[i]["bucketHash"] === ItemBucketHash.ENERGY) {                        
                        sInvTemp.push(inventory[i]);
                    }
                    if (inventory[i]["bucketHash"] === ItemBucketHash.POWER) {
                        hInvTemp.push(inventory[i]);
                    }
                }
            }

            tempInv[0] = kInvTemp;
            tempInv[1] = sInvTemp;
            tempInv[2] = hInvTemp;

            setCurrentInventory(tempInv);
        }
        
        fetchInventoryInfo();

    }, [chosenCharacter, equipped, inventory, vault]);

    // kind of shitty, but same as above for the second character
    useEffect(() => {
        const fetchInventoryInfo = async () => {
            let tempLoadout = [...SecondLoadout];
            let tempInv = [...SecondInventory];

            for (let i in equipped) {
                if (equipped[i]["character"] === secondaryCharacter) {
                    if (equipped[i]["bucketHash"] === ItemBucketHash.KINETIC) {
                        tempLoadout[0] = equipped[i];
                    }
                    if (equipped[i]["bucketHash"] === ItemBucketHash.ENERGY) {
                        tempLoadout[1] = equipped[i];
                    }
                    if (equipped[i]["bucketHash"] === ItemBucketHash.POWER) {
                        tempLoadout[2] = equipped[i];
                    }
                }
            }

            setSecondLoadout(tempLoadout);

            let kInvTemp = [];
            let sInvTemp = [];
            let hInvTemp = [];

            for (let i in inventory) {                

                if (inventory[i]["character"] === secondaryCharacter) {
                    if (inventory[i]["bucketHash"] === ItemBucketHash.KINETIC) {                        
                        kInvTemp.push(inventory[i]);
                    }
                    if (inventory[i]["bucketHash"] === ItemBucketHash.ENERGY) {                        
                        sInvTemp.push(inventory[i]);
                    }
                    if (inventory[i]["bucketHash"] === ItemBucketHash.POWER) {
                        hInvTemp.push(inventory[i]);
                    }
                }
            }

            tempInv[0] = kInvTemp;
            tempInv[1] = sInvTemp;
            tempInv[2] = hInvTemp;
            // console.log(tempInv);

            setSecondInventory(tempInv);
        }

        if (secondaryCharacter) {
            fetchInventoryInfo()
        }
    }, [secondaryCharacter, equipped, inventory, vault])

    // get item info when items change - in theory this doesn't matter anymore
    useEffect(() => {
        const fetchItems = async () => {
            if (itemHashes.length > 0) {
                const promises = itemHashes.map(itemHash => GetItem(itemHash["itemHash"]));
                let fetchedItems = await Promise.all(promises);

                const promiseInstance = itemHashes.map(instanceId => ItemInstance(membershipId, instanceId["itemInstanceId"]));
                const itemInstances = await Promise.all(promiseInstance);
                
                for (let i in fetchedItems) {
                    Object.assign(fetchedItems[i], itemInstances[i])
                }
            }
        };
    
        fetchItems();
    }, [itemHashes]);

    // return this while no character is selected
    if (isLoading) {
        return <div style={{ 
            paddingLeft: "45px",
            paddingTop: "30px",
            color: "white",
            fontWeight: "700",
        }}>
            Select a character
        </div>;
    }

    return (
        <>
        {revealed ? 
            <div className={`z-10`} style={{
                
            }}>
                {/* <Popup
                    left={coords[0]}
                    top={coords[1]}
                /> */}
            </div> : ""}
        <div className="flex flex-row z-0 pt-[30px]" style={{ 
            paddingLeft: "45px",
            fontWeight: "700",
            opacity: opacity,
            transition: 'opacity 0.25s ease-out',
        }}>
            {CurrentLoadout.length > 0 && CurrentInventory.length > 0 ? 
            <div>
                {Array(3).fill(0).map((_, i) => (
                    <div className="h-[200px]" style={{ display: "flex", marginBottom: "30px" }} key={i}>
                        <div style={{ display: "inline-block", width: "60px", height: "70px" }} onDragOver={(event) => handleItemDragOver(event)} onDrop={(event) => _ReceiveItem(event, characters[chosenCharacter]["characterId"], ItemLocation.EQUIPPED)}>
                            <div onClick={() => handleIconClick(CurrentLoadout[i])}>
                                <ItemDisplay itemInfo={CurrentLoadout[i]} iconSize={60} craftIconSize={12} characterId={characters[chosenCharacter]["characterId"]} slot={"Loadout"}/> 
                            </div>                                   
                        </div>
                        <div className={SecondInventory.length < 3 && SecondInventory.length > 6 ? "h-[232px]" : "h-[175px]"} style={{
                            display: "grid",
                            gridGap: "5px",
                            gridTemplateColumns: "repeat(3, 50px)",
                            marginLeft: "14px",
                        }} onDragOver={(event) => handleItemDragOver(event)} onDrop={(event) => _ReceiveItem(event, characters[chosenCharacter]["characterId"], ItemLocation.INVENTORY)}>
                            {Array(CurrentInventory[i].length).fill(0).map((_, j) => (
                                <div key={j} style={{ display: "inline-block" }}>
                                    <div onClick={() => handleIconClick(CurrentInventory[i][j])}>
                                        <ItemDisplay itemInfo={CurrentInventory[i][j]} iconSize={50} craftIconSize={11} characterId={characters[chosenCharacter]["characterId"]} slot={"Inventory"}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            : ""}
        </div>
        <div className="flex flex-row z-0 ml-[80px] pt-[30px]" style={{
            fontWeight: "700",
            opacity: opacity,
            transition: 'opacity 0.25s ease-out',
        }}>
            {secondaryCharacter && SecondLoadout && SecondLoadout.length > 0 ? 
            <div>
                {Array(3).fill(0).map((_, i) => (
                    <div className="h-[200px]" style={{ display: "flex", marginBottom: "30px" }} key={i}>
                        <div style={{ display: "inline-block", width: "60px", height: "70px" }} onDragOver={(event) => handleItemDragOver(event)} onDrop={(event) => _ReceiveItem(event, characters[secondaryCharacter]["characterId"], ItemLocation.EQUIPPED)}>
                            <div onClick={() => handleIconClick(SecondLoadout[i])}>
                                <ItemDisplay itemInfo={SecondLoadout[i]} iconSize={60} craftIconSize={13} characterId={characters[secondaryCharacter]["characterId"]} slot={"Loadout"}/>
                            </div>
                        </div>
                        <div className="h-[175px]" style={{ 
                            display: "grid",
                            gridGap: "5px",
                            gridTemplateColumns: "repeat(3, 50px)",
                            marginLeft: "14px",
                        }} onDragOver={(event) => handleItemDragOver(event)} onDrop={(event) => _ReceiveItem(event, characters[secondaryCharacter]["characterId"], ItemLocation.INVENTORY)}>
                            {Array(SecondInventory[i].length).fill(0).map((_, j) => (
                                <div key={j} style={{ display: "inline-block" }}>
                                    <div onClick={() => handleIconClick(SecondInventory[i][j])}>
                                        <ItemDisplay itemInfo={SecondInventory[i][j]} iconSize={50} craftIconSize={12} characterId={characters[secondaryCharacter]["characterId"]} slot={"Inventory"}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div> : ""}
        </div>
        </>
    )
}