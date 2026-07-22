/* @ds-bundle: {"format":4,"namespace":"OpiumDesign_9241cc","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"b0f6cd2b3879","components/core/Button.jsx":"f59c8edd550d","components/core/IconButton.jsx":"b146c3a23402","components/core/Tag.jsx":"2e4a1e352307","components/feedback/Dialog.jsx":"cda14d2a974a","components/feedback/Toast.jsx":"1127ae15d9b3","components/feedback/Tooltip.jsx":"8676ca4872f1","components/forms/Checkbox.jsx":"a9ae2f0382ed","components/forms/Input.jsx":"7b746cdaa02a","components/forms/Radio.jsx":"5c4a098209aa","components/forms/Select.jsx":"8702156018c9","components/forms/Switch.jsx":"9366bc9a797e","components/surfaces/Card.jsx":"596faaa16922","components/surfaces/Tabs.jsx":"fb486688b494","ui_kits/label-site/Home.jsx":"75b16167db14","ui_kits/label-site/Merch.jsx":"6ff2f095a78a","ui_kits/label-site/Nav.jsx":"14125b307a75","ui_kits/label-site/Releases.jsx":"e4d53e893088","ui_kits/label-site/Shows.jsx":"103fe221685b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OpiumDesign_9241cc = window.OpiumDesign_9241cc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  children
}) {
  const tones = {
    neutral: {
      background: 'var(--surface-inset)',
      color: 'var(--text-secondary)'
    },
    accent: {
      background: 'var(--accent-primary)',
      color: 'var(--paper-000)'
    },
    pop: {
      background: 'var(--accent-pop)',
      color: 'var(--ink-950)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--paper-000)',
      border: '1px solid var(--border-strong)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: 'var(--radius-sm)',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  pop = false,
  disabled = false,
  children,
  onClick,
  type = 'button'
}) {
  const pad = {
    sm: '8px 14px',
    md: '11px 20px',
    lg: '14px 28px'
  }[size];
  const fontSize = {
    sm: '13px',
    md: '14px',
    lg: '16px'
  }[size];
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase',
    fontSize,
    padding: pad,
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'transform var(--dur-fast) var(--ease-snap), background var(--dur-fast)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  };
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--paper-000)',
      boxShadow: pop ? 'var(--shadow-pop)' : 'none'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--paper-000)',
      border: '2px solid var(--paper-000)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)'
    },
    pop: {
      background: 'var(--accent-pop)',
      color: 'var(--ink-950)'
    },
    danger: {
      background: 'var(--danger)',
      color: 'var(--paper-000)'
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  return React.createElement('button', {
    type,
    disabled,
    style,
    onClick,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translate(1px,1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  children,
  label,
  active = false,
  onClick,
  size = 36
}) {
  return React.createElement('button', {
    'aria-label': label,
    title: label,
    onClick,
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: active ? 'var(--surface-inset)' : 'transparent',
      color: active ? 'var(--accent-pop)' : 'var(--text-secondary)',
      border: '1px solid ' + (active ? 'var(--border-strong)' : 'transparent'),
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast), color var(--dur-fast)'
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.color = 'var(--paper-000)';
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '13px',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 6px 5px 12px'
    }
  }, children, onRemove && React.createElement('button', {
    onClick: onRemove,
    'aria-label': 'Remove',
    style: {
      border: 'none',
      background: 'var(--surface-inset)',
      color: 'var(--text-secondary)',
      borderRadius: '50%',
      width: '18px',
      height: '18px',
      cursor: 'pointer',
      lineHeight: 1,
      fontSize: '12px'
    }
  }, '\u2715'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--surface-overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sticker)',
      padding: '24px',
      width: '380px',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)'
    },
    onClick: e => e.stopPropagation()
  }, title && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      textTransform: 'uppercase',
      marginBottom: '12px'
    }
  }, title), React.createElement('div', {
    style: {
      fontSize: '14px',
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, children)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'neutral',
  title,
  message
}) {
  const tones = {
    neutral: 'var(--paper-000)',
    accent: 'var(--accent-primary)',
    success: 'var(--success)',
    danger: 'var(--danger)'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-soft)',
      borderLeft: '4px solid ' + tones[tone],
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      fontFamily: 'var(--font-body)',
      boxShadow: 'var(--shadow-card)',
      maxWidth: '340px'
    }
  }, React.createElement('div', null, title && React.createElement('div', {
    style: {
      fontWeight: 700,
      fontSize: '14px',
      marginBottom: '2px'
    }
  }, title), React.createElement('div', {
    style: {
      fontSize: '13px',
      color: 'var(--text-secondary)'
    }
  }, message)));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--ink-950)',
      color: 'var(--paper-000)',
      fontSize: '12px',
      fontFamily: 'var(--font-mono)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-strong)',
      whiteSpace: 'nowrap',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      border: '2px solid ' + (checked ? 'var(--accent-pop)' : 'var(--border-strong)'),
      background: checked ? 'var(--accent-pop)' : 'transparent',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-950)',
      fontSize: '12px',
      fontWeight: 900
    }
  }, checked ? '\u2713' : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: '11px',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-mono)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    style: {
      background: 'var(--surface-inset)',
      border: '1px solid ' + (error ? 'var(--danger)' : 'var(--border-soft)'),
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-primary)',
      padding: '11px 12px',
      fontSize: '14px',
      fontFamily: 'var(--font-body)',
      outline: 'none'
    },
    onFocus: e => e.currentTarget.style.boxShadow = '0 0 0 2px var(--focus-ring)',
    onBlur: e => e.currentTarget.style.boxShadow = 'none'
  }), error && React.createElement('span', {
    style: {
      fontSize: '12px',
      color: 'var(--danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(),
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: '2px solid ' + (checked ? 'var(--accent-primary)' : 'var(--border-strong)'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && React.createElement('span', {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: '11px',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-mono)'
    }
  }, label), React.createElement('select', {
    value,
    onChange,
    style: {
      background: 'var(--surface-inset)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-primary)',
      padding: '11px 12px',
      fontSize: '14px',
      fontFamily: 'var(--font-body)',
      outline: 'none'
    }
  }, options.map(o => React.createElement('option', {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 38,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent-primary)' : 'var(--surface-inset)',
      border: '1px solid var(--border-soft)',
      position: 'relative',
      transition: 'background var(--dur-fast)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'var(--paper-000)',
      transition: 'left var(--dur-fast) var(--ease-snap)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  children,
  sticker = false
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6)',
      boxShadow: sticker ? 'var(--shadow-sticker)' : 'var(--shadow-card)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)'
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t,
    onClick: () => onChange && onChange(t),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '10px 14px',
      color: t === active ? 'var(--paper-000)' : 'var(--text-muted)',
      borderBottom: '2px solid ' + (t === active ? 'var(--accent-pop)' : 'transparent'),
      marginBottom: '-1px'
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/label-site/Home.jsx
try { (() => {
function Home({
  setPage,
  Button,
  Badge,
  Card,
  Tag
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "grain-overlay",
    style: {
      background: 'var(--blood-600)',
      padding: '96px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Catalog No. OPM-004"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(48px,8vw,104px)',
      lineHeight: .9,
      color: 'var(--paper-000)',
      textTransform: 'uppercase',
      margin: 0
    }
  }, "NO GODS", /*#__PURE__*/React.createElement("br", null), "NO MASTERS"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--paper-100)',
      maxWidth: 520,
      fontSize: 17,
      lineHeight: 1.5
    }
  }, "New EP from Nerve Damage \u2014 four songs, fourteen minutes, out on cassette and digital now."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "pop",
    pop: true,
    onClick: () => setPage('Releases')
  }, "Listen Now"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setPage('Merch')
  }, "Shop Merch"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      color: 'var(--paper-000)',
      textTransform: 'uppercase',
      margin: 0
    }
  }, "Latest Presses"), /*#__PURE__*/React.createElement("span", {
    onClick: () => setPage('Releases'),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--accent-pop)',
      cursor: 'pointer',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "VIEW ALL \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, [{
    name: 'Nerve Damage',
    sub: 'Cassette / Digital',
    cat: 'OPM-004',
    sticker: true
  }, {
    name: 'Hollow Choir',
    sub: 'Vinyl / 500 copies',
    cat: 'OPM-003'
  }, {
    name: 'Static Prayer',
    sub: 'Digital',
    cat: 'OPM-002'
  }].map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.cat,
    sticker: r.sticker
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1',
      background: 'var(--ink-800)',
      borderRadius: 'var(--radius-sm)',
      marginBottom: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "disc-3",
    style: {
      width: 36,
      height: 36,
      color: 'var(--text-muted)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      textTransform: 'uppercase',
      color: 'var(--paper-000)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, r.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, null, r.cat)))))), /*#__PURE__*/React.createElement("section", {
    className: "halftone-bg",
    style: {
      padding: '56px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--accent-pop)',
      letterSpacing: 'var(--tracking-stamp)',
      textTransform: 'uppercase'
    }
  }, "Next Show"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      color: 'var(--paper-000)',
      textTransform: 'uppercase',
      marginTop: 6
    }
  }, "Basement Fest \u2014 Chicago")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setPage('Shows')
  }, "All Dates")));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/label-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/label-site/Merch.jsx
try { (() => {
function Merch({
  Card,
  Button,
  Badge
}) {
  const items = [{
    name: 'Nerve Damage Tee',
    price: '$28',
    badge: 'New'
  }, {
    name: 'Screamo Hoodie',
    price: '$52'
  }, {
    name: 'Basement Tour Poster',
    price: '$16'
  }, {
    name: 'Enamel Pin Set',
    price: '$12'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 40px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      color: 'var(--paper-000)',
      textTransform: 'uppercase',
      marginBottom: 32
    }
  }, "Merch"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, items.map(i => /*#__PURE__*/React.createElement(Card, {
    key: i.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1',
      background: 'var(--ink-800)',
      borderRadius: 'var(--radius-sm)',
      marginBottom: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shirt",
    style: {
      width: 32,
      height: 32,
      color: 'var(--text-muted)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      color: 'var(--paper-000)',
      fontSize: 14
    }
  }, i.name), i.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "pop"
  }, i.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      margin: '6px 0 12px'
    }
  }, i.price), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Add to Cart")))));
}
window.Merch = Merch;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/label-site/Merch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/label-site/Nav.jsx
try { (() => {
function Nav({
  page,
  setPage
}) {
  const links = ['Home', 'Releases', 'Shows', 'Merch'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--ink-950)',
      borderBottom: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setPage('Home'),
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: 'var(--paper-000)',
      textTransform: 'uppercase',
      letterSpacing: '.01em',
      cursor: 'pointer'
    }
  }, "Opium Design"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    onClick: () => setPage(l),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: page === l ? 'var(--accent-pop)' : 'var(--text-secondary)',
      cursor: 'pointer',
      borderBottom: page === l ? '2px solid var(--accent-pop)' : '2px solid transparent',
      paddingBottom: 4
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 18,
      height: 18,
      color: 'var(--text-secondary)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shopping-bag",
    style: {
      width: 18,
      height: 18,
      color: 'var(--text-secondary)'
    }
  })));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/label-site/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/label-site/Releases.jsx
try { (() => {
function Releases({
  Card,
  Badge,
  Tag
}) {
  const releases = [{
    name: 'Nerve Damage',
    sub: 'EP · Cassette / Digital',
    cat: 'OPM-004',
    badge: 'New'
  }, {
    name: 'Hollow Choir',
    sub: 'LP · Vinyl, 500 copies',
    cat: 'OPM-003',
    badge: 'Sold Out'
  }, {
    name: 'Static Prayer',
    sub: 'Single · Digital',
    cat: 'OPM-002'
  }, {
    name: 'Rust Belt Requiem',
    sub: 'LP · Vinyl / Cassette',
    cat: 'OPM-001'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 40px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      color: 'var(--paper-000)',
      textTransform: 'uppercase',
      marginBottom: 32
    }
  }, "Releases"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, releases.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.cat
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1',
      background: 'var(--ink-800)',
      borderRadius: 'var(--radius-sm)',
      marginBottom: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "disc-3",
    style: {
      width: 32,
      height: 32,
      color: 'var(--text-muted)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      textTransform: 'uppercase',
      color: 'var(--paper-000)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      margin: '4px 0 10px'
    }
  }, r.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, r.cat), r.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: r.badge === 'New' ? 'pop' : 'outline'
  }, r.badge))))));
}
window.Releases = Releases;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/label-site/Releases.jsx", error: String((e && e.message) || e) }); }

// ui_kits/label-site/Shows.jsx
try { (() => {
function Shows({
  Button,
  Badge
}) {
  const shows = [{
    date: 'AUG 02',
    city: 'Chicago, IL',
    venue: 'Basement Fest',
    status: 'Tickets'
  }, {
    date: 'AUG 09',
    city: 'Detroit, MI',
    venue: 'The Loading Dock',
    status: 'Tickets'
  }, {
    date: 'AUG 15',
    city: 'Columbus, OH',
    venue: 'Ace of Cups',
    status: 'Sold Out'
  }, {
    date: 'AUG 22',
    city: 'Pittsburgh, PA',
    venue: 'Cattivo',
    status: 'Tickets'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 40px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      color: 'var(--paper-000)',
      textTransform: 'uppercase',
      marginBottom: 32
    }
  }, "Shows"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, shows.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.venue,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '18px 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--accent-pop)',
      width: 70
    }
  }, s.date), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      color: 'var(--paper-000)',
      fontSize: 16
    }
  }, s.venue), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, s.city)), s.status === 'Sold Out' ? /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Sold Out") : /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Tickets")))));
}
window.Shows = Shows;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/label-site/Shows.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
