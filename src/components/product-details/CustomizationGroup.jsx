import { Check } from 'lucide-react';

export default function CustomizationGroup({
  title,
  required = false,
  type = 'radio', // 'radio' or 'checkbox'
  options = [],
  selectedValues, // single string ID for radio, or Array of string IDs for checkbox
  onChange,
}) {
  if (!options || options.length === 0) return null;

  const handleRadioClick = (optId) => {
    onChange(optId);
  };

  const handleCheckboxClick = (optId) => {
    const current = Array.isArray(selectedValues) ? [...selectedValues] : [];
    if (current.includes(optId)) {
      onChange(current.filter((id) => id !== optId));
    } else {
      onChange([...current, optId]);
    }
  };

  return (
    <div className="py-4 border-b border-white/10 select-none">
      {/* HEADER: TITLE & REQUIRED / OPTIONAL BADGE */}
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-heading font-bold text-white text-sm sm:text-base uppercase tracking-wider">
          {title}
        </h4>
        <span
          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
            required
              ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
              : 'bg-white/5 text-gray-400 border border-white/10'
          }`}
        >
          {required ? 'Required' : 'Optional'}
        </span>
      </div>

      {/* OPTIONS LIST */}
      <div className="space-y-2">
        {options.map((opt) => {
          const isSelected =
            type === 'radio'
              ? selectedValues === opt.id
              : Array.isArray(selectedValues) && selectedValues.includes(opt.id);

          return (
            <div
              key={opt.id}
              onClick={() =>
                type === 'radio' ? handleRadioClick(opt.id) : handleCheckboxClick(opt.id)
              }
              className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-orange-500/10 border-orange-500/60 text-white shadow-md shadow-orange-500/10'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {/* LEFT: INDICATOR ICON & NAME */}
              <div className="flex items-center gap-3">
                {type === 'radio' ? (
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-gray-500 bg-transparent'
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                ) : (
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-orange-500 bg-orange-500 text-white'
                        : 'border-gray-500 bg-transparent'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                )}

                <span className="text-sm font-medium text-white">{opt.name}</span>
              </div>

              {/* RIGHT: PRICE DELTA */}
              <span className="text-xs font-bold text-orange-400">
                {opt.price > 0 ? `+ Rs. ${opt.price}` : 'Free'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
