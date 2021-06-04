export default function overflow(container) {

    const {target} = container;
    const list = Array.from(target.children);
    const dropdown = target.parentNode.querySelector(".navigation-overflow");

    const tops = list.map(el=>el.getBoundingClientRect().top);
    const [first] = tops;
    const index = tops.findIndex(v=>v > first);

    // index -1 means no wrappers here.

    const diff = index === -1 ? 0 : list.length - index;

    const minItems = 2;
    const unwrap = index === list.length - minItems && diff === minItems
    const restore = index < 0 || diff < 2 || diff >= list.length;

    console.log(1111, index, diff, unwrap)

    const removeDropdown = ()=>{
        // cleanup and get out!
        dropdown.style.display = "none";
        dropdown.innerHTML = ``;
    }

    const insertDropdown = (n)=>{
        const items = list.slice(n).map(el=>el.outerHTML).join("");
        dropdown.style.display = "block";
        dropdown.innerHTML = `<ul>${items}</ul>`;
    }

    if (unwrap) return removeDropdown();

    // Initial visibility will cause a nested resize Event as the
    // droplist is inserted into the DOM

    if (diff === 1) return insertDropdown(-2);

    if (restore) return removeDropdown();

    // show the dropdown element
    const min = Math.max(index, 2);
    return insertDropdown(min);
}

