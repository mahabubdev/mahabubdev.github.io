import { useState, useEffect } from 'react';
import { SkillSectionWrapper, SkillNav, SkillsContainer, AllSkills } from "./styled";
import { Icon } from '@iconify/react';

const SkillSection = ({ allSkills }) => {
    // states & filtering
    const [skills, setSkills] = useState(allSkills);
    const [current, setCurrent] = useState('');
    const [prepared, setPrepared] = useState(false);
    
    useEffect(() => {
        const initialFiltered = skills.filter(obj => obj.level === 'expert');
        setSkills(initialFiltered);
        setCurrent('expert');
        setPrepared(true);
    }, [])

    //filter functionality
    function filterSkills (ctx) {
        setPrepared(false);
        let filtered = allSkills.filter(obj => obj.level === ctx);
        setSkills(filtered);
        setCurrent(ctx);
        setPrepared(true);
    }

    console.log("skills---->", skills);


    return (
        <SkillSectionWrapper>
            <h2>my core skills</h2>

            <SkillsContainer>
                <SkillNav>
                    <li onClick={() => filterSkills('expert')}><span className={`btn btn-switch ${current === 'expert' ? 'active' : ''}`}>expertise</span></li>
                    <li onClick={() => filterSkills('comfortable')}><span className={`btn btn-switch ${current === 'comfortable' ? 'active' : ''}`}>comfortable</span></li>
                    <li onClick={() => filterSkills('familiar')}><span className={`btn btn-switch ${current === 'familiar' ? 'active' : ''}`}>familiar</span></li>
                    <li onClick={() => filterSkills('tools')}><span className={`btn btn-switch ${current === 'tools' ? 'active' : ''}`}>tools & others</span></li>
                </SkillNav>


                <AllSkills>
                    {
                        prepared && skills.map((s,i) => (
                            <div key={i} className="skill_item">
                                <span>
                                    <Icon icon={s.icon} />
                                </span>
                                <small>{s.label}</small>
                            </div>
                        ))
                    }
                </AllSkills>
            </SkillsContainer>
        </SkillSectionWrapper>
    )
}

export default SkillSection;