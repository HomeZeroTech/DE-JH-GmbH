import React, { useState, useEffect, useRef, useCallback } from "react";

/* ───────────────────────── SVG ICONS ───────────────────────── */

const IconBack = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
);

const IconClose = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8899AA"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);

/* Step 1 option icons */
const IconRenovate = () => (
    <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" />
        <path d="M9 22V12h6v10" />
    </svg>
);

const IconTrendUp = () => (
    <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
    </svg>
);

const IconShieldCheck = () => (
    <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
    </svg>
);

const IconWrench = () => (
    <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94L14.7 6.3z" />
    </svg>
);

/* Step 2 icons */
const IconCircleCheck = () => (
    <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
    </svg>
);

const IconCircleX = () => (
    <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
);

/* Step 3 icons */
const IconMonitor = () => (
    <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
);

const IconPhone = () => (
    <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
);

/* Step 4 field icons */
const IconLocation = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="10" r="3" />
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    </svg>
);

const IconEmail = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
    </svg>
);

const IconNoSpam = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
);

const IconDSGVO = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
    </svg>
);

const IconUser = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const IconPhoneField = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#004A8F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
);

/* Step 5 icons */
const IconCheckLarge = () => (
    <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#008A26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
    </svg>
);

const IconWarningLarge = () => (
    <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D4782F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

/* ───────────────────── CHECKBOX ICONS ──────────────────────── */

const CheckboxEmpty = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" stroke="#C0C8D0" strokeWidth="1.5" />
    </svg>
);

const CheckboxChecked = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#004A8F" />
        <path
            d="M8 12.5l2.5 2.5 5-5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

/* ─────────────────── PROGRESS INDICATOR ────────────────────── */

function ProgressBar({ currentStep }) {
    const stepMap = { 1: 0, 2: 1, 3: 2, "4a": 3, "4b": 3 };
    const current = stepMap[currentStep] ?? 0;
    const total = current >= 3 ? 4 : 3;

    return (
        <div className="pico-progress">
            {Array.from({ length: total }).map((_, i) => (
                <span
                    key={i}
                    className={
                        i === current
                            ? "pico-progress-pill"
                            : i < current
                                ? "pico-progress-dot pico-progress-dot--done"
                                : "pico-progress-dot"
                    }
                />
            ))}
        </div>
    );
}

/* ─────────────────────── STEP 1 ────────────────────────────── */

const STEP1_OPTIONS = [
    { id: "renovate", label: "mein Haus modernisieren.", Icon: IconRenovate },
    { id: "costs", label: "dauerhaft Heizkosten senken.", Icon: IconTrendUp },
    {
        id: "independent",
        label: "unabhängiger von Öl & Gas werden.",
        Icon: IconShieldCheck,
    },
    {
        id: "replace",
        label: "eine alte oder defekte Heizung ersetzen.",
        Icon: IconWrench,
    },
];

function Step1({ interests, toggleInterest, onNext }) {
    const hasSelection = interests.length > 0;

    return (
        <div className="pico-step">
            <h2 className="pico-step-title">
                Warum interessieren Sie sich für eine Wärmepumpe?
            </h2>
            <p className="pico-step-subtitle">Ich möchte …</p>

            <div className="pico-options">
                {STEP1_OPTIONS.map(({ id, label, Icon }) => {
                    const checked = interests.includes(id);
                    return (
                        <button
                            key={id}
                            type="button"
                            className={`pico-option-card ${checked ? "pico-option-card--selected" : ""}`}
                            onClick={() => toggleInterest(id)}
                            aria-pressed={checked}
                        >
                            <span className="pico-option-check">
                                {checked ? (
                                    <CheckboxChecked />
                                ) : (
                                    <CheckboxEmpty />
                                )}
                            </span>
                            <span className="pico-option-icon">
                                <Icon />
                            </span>
                            <span className="pico-option-label">{label}</span>
                        </button>
                    );
                })}
            </div>

            <button
                className={`pico-btn-primary ${hasSelection ? "pico-btn-primary--active" : ""}`}
                disabled={!hasSelection}
                onClick={onNext}
            >
                Weiter
            </button>
        </div>
    );
}

/* ──────────────────────── STEP 2 ───────────────────────────── */

function Step2({ onSelect }) {
    return (
        <div className="pico-step">
            <h2 className="pico-step-title">
                Sind Sie Eigentümer der Immobilie?
            </h2>

            <div className="pico-options pico-options--spaced">
                <button
                    type="button"
                    className="pico-option-card"
                    onClick={() => onSelect(true)}
                >
                    <span className="pico-option-icon">
                        <IconCircleCheck />
                    </span>
                    <span className="pico-option-label">Ja</span>
                </button>
                <button
                    type="button"
                    className="pico-option-card"
                    onClick={() => onSelect(false)}
                >
                    <span className="pico-option-icon">
                        <IconCircleX />
                    </span>
                    <span className="pico-option-label">Nein</span>
                </button>
            </div>
        </div>
    );
}

/* ──────────────────────── STEP 3 ───────────────────────────── */

function Step3({ onSelect }) {
    return (
        <div className="pico-step">
            <h2 className="pico-step-title">Wie möchten Sie fortfahren?</h2>

            <div className="pico-options pico-options--spaced">
                <button
                    type="button"
                    className="pico-option-card"
                    onClick={() => onSelect("online")}
                >
                    <span className="pico-option-icon">
                        <IconMonitor />
                    </span>
                    <span className="pico-option-label">
                        Online-Check starten & Preisschätzung erhalten
                    </span>
                </button>
                <button
                    type="button"
                    className="pico-option-card"
                    onClick={() => onSelect("callback")}
                >
                    <span className="pico-option-icon">
                        <IconPhone />
                    </span>
                    <span className="pico-option-label">
                        Rückruf anfordern für ein persönliches Gespräch
                    </span>
                </button>
            </div>
        </div>
    );
}

/* ──────────────────────── STEP 4a ──────────────────────────── */

function Step4a({ formData, setFormData, onSubmit }) {
    const addressInputRef = useRef(null);
    const autocompleteRef = useRef(null);
    const [addressSelected, setAddressSelected] = useState(false);

    /* Init Google Maps Autocomplete when API is ready */
    useEffect(() => {
        let interval;
        const init = () => {
            if (
                window.google &&
                window.google.maps &&
                window.google.maps.places &&
                addressInputRef.current &&
                !autocompleteRef.current
            ) {
                const ac = new window.google.maps.places.Autocomplete(
                    addressInputRef.current,
                    {
                        types: ["address"],
                        componentRestrictions: { country: "de" },
                    },
                );
                ac.addListener("place_changed", () => {
                    const place = ac.getPlace();
                    if (!place.address_components) return;
                    const get = (type) => {
                        const c = place.address_components.find((c) =>
                            c.types.includes(type),
                        );
                        return c ? c.long_name : "";
                    };
                    setFormData((prev) => ({
                        ...prev,
                        address: place.formatted_address || "",
                        street: get("route"),
                        housenumber: get("street_number"),
                        zipcode: get("postal_code"),
                        city:
                            get("locality") ||
                            get("administrative_area_level_1"),
                    }));
                    setAddressSelected(true);
                });
                autocompleteRef.current = ac;
                clearInterval(interval);
            }
        };
        interval = setInterval(init, 300);
        init();
        return () => clearInterval(interval);
    }, [setFormData]);

    const [touched, setTouched] = useState({});

    const emailIsValid =
        !formData.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const emailError = !emailIsValid;
    const addressError = !addressSelected;
    const housenumberError = addressSelected && !formData.housenumber;
    const privacyError = !formData.privacyChecked;

    const submitActive =
        addressSelected && !housenumberError && formData.privacyChecked && emailIsValid;

    const handleBlur = (field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    const handleSubmit = () => {
        if (!submitActive) {
            // Mark all fields as touched to show missing warnings
            setTouched({
                address: true,
                email: true,
                privacyChecked: true,
            });
            return;
        }
        onSubmit();
    };

    return (
        <div className="pico-step pico-step-form">
            <h2 className="pico-step-title">Ihre Adresse</h2>

            <div className="pico-field-group pico-field-group--highlight">
                <div className="pico-input-wrap">
                    <input
                        ref={addressInputRef}
                        type="text"
                        className={`pico-input ${(addressError || housenumberError) && touched.address ? "pico-input-error" : ""}`}
                        placeholder="Ihre Adresse*"
                        value={formData.address}
                        onBlur={() => handleBlur("address")}
                        onChange={(e) => {
                            setAddressSelected(false);
                            setFormData((p) => ({
                                ...p,
                                address: e.target.value,
                            }));
                        }}
                    />
                    <span className="pico-input-icon">
                        <IconLocation />
                    </span>
                    {addressError && touched.address && (
                        <p className="pico-error-text">
                            Bitte wählen Sie eine Adresse aus.
                        </p>
                    )}
                    {housenumberError && touched.address && (
                        <p className="pico-error-text">
                            Bitte geben Sie eine Hausnummer an.
                        </p>
                    )}
                </div>
                <p className="pico-field-hint">
                    Wir benötigen Ihre Adresse ausschließlich für Ihren
                    persönlichen Wärmepumpen-Check.
                </p>
            </div>

            <div className="pico-input-wrap">
                <input
                    type="email"
                    className={`pico-input ${emailError && touched.email ? "pico-input-error" : ""}`}
                    placeholder="Ihre E-Mail-Adresse (optional)"
                    value={formData.email}
                    onBlur={() => handleBlur("email")}
                    onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                />
                <span className="pico-input-icon">
                    <IconEmail />
                </span>
                {emailError && touched.email && (
                    <p className="pico-error-text">
                        Bitte geben Sie eine gültige E-Mail-Adresse an.
                    </p>
                )}
            </div>

            <div className="pico-info-lines">
                <div className="pico-info-line">
                    <IconEmail />{" "}
                    <span>Ihre E-Mail-Adresse für eventuelle Rückfragen.</span>
                </div>
                <div className="pico-info-line">
                    <IconNoSpam />{" "}
                    <span>Sie erhalten keine ungefragte Werbung.</span>
                </div>
                <div className="pico-info-line">
                    <IconDSGVO />{" "}
                    <span>
                        Ihre Daten werden gemäß DSGVO sicher gespeichert.
                    </span>
                </div>
            </div>

            <label className="pico-checkbox-label">
                <input
                    type="checkbox"
                    checked={formData.privacyChecked}
                    onChange={(e) =>
                        setFormData((p) => ({
                            ...p,
                            privacyChecked: e.target.checked,
                        }))
                    }
                    onBlur={() => handleBlur("privacyChecked")}
                />
                <span className="pico-checkbox-custom" />
                <span className="pico-checkbox-text">
                    Ich habe die{" "}
                    <a
                        href="https://www.juergenhohnen.de/datenschutz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu.
                    <span className="pico-required">*</span>
                </span>
            </label>
            {privacyError && touched.privacyChecked && (
                <p className="pico-error-text">
                    Bitte stimmen Sie der Datenschutzerklärung zu.
                </p>
            )}

            <button
                className={`pico-btn-primary ${submitActive ? "pico-btn-primary--active" : ""}`}
                onClick={handleSubmit}
            >
                Check starten
            </button>
        </div>
    );
}

/* ──────────────────────── STEP 4b ──────────────────────────── */

function Step4b({ formData, setFormData, onSuccess, onBuildingNotFound, onOutsideArea }) {
    const [submitting, setSubmitting] = useState(false);
    const addressInputRef = useRef(null);
    const autocompleteRef = useRef(null);
    const [addressSelected, setAddressSelected] = useState(false);

    /* Init Google Maps Autocomplete */
    useEffect(() => {
        let interval;
        const init = () => {
            if (
                window.google &&
                window.google.maps &&
                window.google.maps.places &&
                addressInputRef.current &&
                !autocompleteRef.current
            ) {
                const ac = new window.google.maps.places.Autocomplete(
                    addressInputRef.current,
                    {
                        types: ["address"],
                        componentRestrictions: { country: "de" },
                    },
                );
                ac.addListener("place_changed", () => {
                    const place = ac.getPlace();
                    if (!place.address_components) return;
                    const get = (type) => {
                        const c = place.address_components.find((c) =>
                            c.types.includes(type),
                        );
                        return c ? c.long_name : "";
                    };
                    setFormData((prev) => ({
                        ...prev,
                        address: place.formatted_address || "",
                        street: get("route"),
                        housenumber: get("street_number"),
                        zipcode: get("postal_code"),
                        city:
                            get("locality") ||
                            get("administrative_area_level_1"),
                    }));
                    setAddressSelected(true);
                });
                autocompleteRef.current = ac;
                clearInterval(interval);
            }
        };
        interval = setInterval(init, 300);
        init();
        return () => clearInterval(interval);
    }, [setFormData]);

    const [touched, setTouched] = useState({});
    const sanitizedPhone = formData.phone.replace(/\s/g, "");
    const phoneIsValid = /^\+?[0-9]{6,15}$/.test(sanitizedPhone);
    const phoneError = !phoneIsValid;

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const emailError = !emailIsValid;

    const firstNameError = !formData.firstName;
    const lastNameError = !formData.lastName;
    const addressError = !addressSelected;
    const housenumberError = addressSelected && !formData.housenumber;
    const privacyError = !formData.privacyChecked;

    const submitActive =
        !firstNameError &&
        !lastNameError &&
        !addressError &&
        !housenumberError &&
        emailIsValid &&
        phoneIsValid &&
        !privacyError;

    const handleBlur = (field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    const handleSubmit = async () => {
        if (!submitActive) {
            // Mark all fields as touched to show missing warnings
            setTouched({
                firstName: true,
                lastName: true,
                address: true,
                email: true,
                phone: true,
                privacyChecked: true,
            });
            return;
        }
        if (submitting) return;
        setSubmitting(true);

        const body = {
            FlowID: "6d87188b-26d4-4029-8ac0-475678d8c200",
            Firstname: formData.firstName || "",
            Lastname: formData.lastName || "",
            Email: formData.email || "",
            Phonenumber: formData.phone || "",
            HouseDetails: {
                Country: "DE",
                Zipcode: formData.zipcode || "",
                Housenumber: formData.housenumber || "",
                HouseNumberAddition: "",
                Street: formData.street || "",
                City: formData.city || "",
            },
        };

        try {
            const res = await fetch(
                "https://pico.homezero.nl/rest/pico/v1/assignments/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-API-Key": "36FMhB7kRc0rupVTEROKMzIdJNK2efuA",
                    },
                    body: JSON.stringify(body),
                },
            );

            let data = {};
            try {
                data = await res.json();
            } catch (e) {
                console.warn(
                    "Pico API: Response is not valid JSON",
                );
            }

            if (data.error === "Could not find a building with this address") {
                onBuildingNotFound();
            } else if (data.error === "address not inside the operating area") {
                onOutsideArea();
            } else if (!res.ok) {
                console.warn(`Pico API returned status ${res.status}`);
                onBuildingNotFound();
            } else {
                onSuccess();
            }
        } catch (err) {
            console.error("Pico API network/fetch error:", err);
            onBuildingNotFound();
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="pico-step pico-step-form">
            <h2 className="pico-step-title">Ihre Kontaktdaten</h2>

            <div className="pico-two-col">
                <div className="pico-input-wrap">
                    <input
                        type="text"
                        className={`pico-input ${firstNameError && touched.firstName ? "pico-input-error" : ""}`}
                        placeholder="Vorname*"
                        value={formData.firstName}
                        onBlur={() => handleBlur("firstName")}
                        onChange={(e) =>
                            setFormData((p) => ({
                                ...p,
                                firstName: e.target.value,
                            }))
                        }
                    />
                    <span className="pico-input-icon">
                        <IconUser />
                    </span>
                    {firstNameError && touched.firstName && (
                        <p className="pico-error-text">
                            Bitte Vorname angeben.
                        </p>
                    )}
                </div>
                <div className="pico-input-wrap">
                    <input
                        type="text"
                        className={`pico-input ${lastNameError && touched.lastName ? "pico-input-error" : ""}`}
                        placeholder="Nachname*"
                        value={formData.lastName}
                        onBlur={() => handleBlur("lastName")}
                        onChange={(e) =>
                            setFormData((p) => ({
                                ...p,
                                lastName: e.target.value,
                            }))
                        }
                    />
                    <span className="pico-input-icon">
                        <IconUser />
                    </span>
                    {lastNameError && touched.lastName && (
                        <p className="pico-error-text">
                            Bitte Nachname angeben.
                        </p>
                    )}
                </div>
            </div>

            <div className="pico-input-wrap">
                <input
                    ref={addressInputRef}
                    type="text"
                    className={`pico-input ${(addressError || housenumberError) && touched.address ? "pico-input-error" : ""}`}
                    placeholder="Ihre Adresse*"
                    value={formData.address}
                    onBlur={() => handleBlur("address")}
                    onChange={(e) => {
                        setAddressSelected(false);
                        setFormData((p) => ({ ...p, address: e.target.value }));
                    }}
                />
                <span className="pico-input-icon">
                    <IconLocation />
                </span>
                {addressError && touched.address && (
                    <p className="pico-error-text">
                        Bitte wählen Sie eine Adresse aus.
                    </p>
                )}
                {housenumberError && touched.address && (
                    <p className="pico-error-text">
                        Bitte geben Sie eine Hausnummer an.
                    </p>
                )}
            </div>

            <div className="pico-input-wrap">
                <input
                    type="email"
                    className={`pico-input ${emailError && touched.email ? "pico-input-error" : ""}`}
                    placeholder="Ihre E-Mail-Adresse*"
                    value={formData.email}
                    onBlur={() => handleBlur("email")}
                    onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                />
                <span className="pico-input-icon">
                    <IconEmail />
                </span>
                {emailError && touched.email && (
                    <p className="pico-error-text">
                        Bitte geben Sie eine gültige E-Mail-Adresse an.
                    </p>
                )}
            </div>

            <div className="pico-input-wrap">
                <input
                    type="tel"
                    className={`pico-input ${phoneError && touched.phone ? "pico-input-error" : ""}`}
                    placeholder="Ihre Telefonnummer*"
                    value={formData.phone}
                    onBlur={() => handleBlur("phone")}
                    onChange={(e) =>
                        setFormData((p) => ({ ...p, phone: e.target.value }))
                    }
                />
                <span className="pico-input-icon">
                    <IconPhoneField />
                </span>
                {phoneError && touched.phone && (
                    <p className="pico-error-text">
                        Bitte geben Sie eine gültige Telefonnummer an.
                    </p>
                )}
            </div>

            <div className="pico-info-lines">
                <div className="pico-info-line">
                    <IconNoSpam />{" "}
                    <span>Sie erhalten keine ungefragte Werbung.</span>
                </div>
                <div className="pico-info-line">
                    <IconDSGVO />{" "}
                    <span>
                        Ihre Daten werden gemäß DSGVO sicher gespeichert.
                    </span>
                </div>
            </div>

            <label className="pico-checkbox-label">
                <input
                    type="checkbox"
                    checked={formData.privacyChecked}
                    onChange={(e) =>
                        setFormData((p) => ({
                            ...p,
                            privacyChecked: e.target.checked,
                        }))
                    }
                    onBlur={() => handleBlur("privacyChecked")}
                />
                <span className="pico-checkbox-custom" />
                <span className="pico-checkbox-text">
                    Ich habe die{" "}
                    <a
                        href="https://www.juergenhohnen.de/datenschutz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu.
                    <span className="pico-required">*</span>
                </span>
            </label>
            {privacyError && touched.privacyChecked && (
                <p
                    className="pico-error-text"
                    style={{ marginTop: "-2px", marginBottom: "8px" }}
                >
                    Bitte stimmen Sie der Datenschutzerklärung zu.
                </p>
            )}

            <button
                className={`pico-btn-primary ${submitActive ? "pico-btn-primary--active" : ""}`}
                disabled={submitting}
                onClick={handleSubmit}
            >
                {submitting ? "Wird gesendet…" : "Rückruf anfordern"}
            </button>
        </div>
    );
}

/* ──────────────────────── STEP 5a ──────────────────────────── */

function Step5a() {
    return (
        <div className="pico-step pico-step-center">
            <IconCheckLarge />
            <h2 className="pico-step-title" style={{ marginTop: 16 }}>
                Vielen Dank!
            </h2>
            <p className="pico-step-subtitle">
                Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei
                Ihnen.
            </p>
        </div>
    );
}

/* ──────────────────────── STEP 5b ──────────────────────────── */

function Step5b({ onBack }) {
    return (
        <div className="pico-step pico-step-center">
            <IconWarningLarge />
            <h2 className="pico-step-title" style={{ marginTop: 16 }}>
                Adresse nicht gefunden
            </h2>
            <p className="pico-step-subtitle" style={{ whiteSpace: "pre-wrap" }}>
                {"Leider können wir Ihre Adresse nicht finden.\n\nFalls Sie einen Hausnummernzusatz haben, überprüfen Sie bitte, ob er korrekt eingegeben wurde."}
            </p>
            <button className="pico-btn-primary" onClick={onBack} style={{ marginTop: 24 }}>
                Zurück
            </button>
        </div>
    );
}

/* ──────────────────────── STEP 5c ──────────────────────────── */

function Step5c() {
    return (
        <div className="pico-step pico-step-center">
            <IconWarningLarge />
            <h2 className="pico-step-title" style={{ marginTop: 16 }}>
                Schade! In Ihrer Region sind wir noch nicht aktiv.
            </h2>
            <p className="pico-step-subtitle" style={{ whiteSpace: "pre-wrap" }}>
                {"Wir arbeiten daran, unser Einsatzgebiet zu erweitern. Schauen Sie doch bald mal wieder auf unserer Website vorbei, um zu sehen, ob wir auch zu Ihnen kommen."}
            </p>
            <a href="https://go.homezero.nl/jh" className="pico-btn-primary" style={{ marginTop: 24, display: "inline-block", textDecoration: "none" }}>
                Zurück zur Homepage
            </a>
        </div>
    );
}

/* ──────────────────── MAIN APP COMPONENT ───────────────────── */

const INITIAL_FORM = {
    interests: [],
    isOwner: null,
    path: null,
    address: "",
    street: "",
    housenumber: "",
    zipcode: "",
    city: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    privacyChecked: false,
};

function App() {
    const [step, setStep] = useState("1");
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [isClosed, setIsClosed] = useState(false);
    const hzContainerRef = useRef(null);

    /* Load embed.js for Google Maps API + hz-embed */
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://homezerotech.github.io/Widget/Production/embed.js";
        script.defer = true;
        document.head.appendChild(script);

        return () => {
            try {
                document.head.removeChild(script);
            } catch (_) { }
        };
    }, []);

    /* Render hidden hz-embed (loads Google Maps API automatically) */
    useEffect(() => {
        if (
            hzContainerRef.current &&
            !hzContainerRef.current.querySelector("hz-embed")
        ) {
            hzContainerRef.current.innerHTML = `
        <hz-embed
          src="https://configurator.homezero.nl/link/start?id=3826d61f-6790-4fca-ab8d-e0891ae4d9d9"
          data-address-format="international"
          data-language="de"
          data-open-new-tab="true"
          data-show-phone="false"
          data-phone-required="false"
          data-show-email="true"
          data-email-required="false"
          data-button-text="Start Scan"
          data-button-radius="7px"
          data-color="#008A26"
          data-google-search="true"
          data-country="de"
        ></hz-embed>`;
        }
    }, []);

    /* ---- helpers ---- */

    const toggleInterest = useCallback((id) => {
        setFormData((prev) => ({
            ...prev,
            interests: prev.interests.includes(id)
                ? prev.interests.filter((x) => x !== id)
                : [...prev.interests, id],
        }));
    }, []);

    const goBack = () => {
        const backMap = { 2: "1", 3: "2", "4a": "3", "4b": "3" };
        const prev = backMap[step];
        if (prev) {
            /* Reset form fields relevant to steps we're leaving */
            if (step === "4a" || step === "4b") {
                setFormData((p) => ({
                    ...p,
                    address: "",
                    street: "",
                    housenumber: "",
                    zipcode: "",
                    city: "",
                    email: "",
                    firstName: "",
                    lastName: "",
                    phone: "",
                    privacyChecked: false,
                }));
            }
            setStep(prev);
        }
    };

    const handleClose = () => {
        setIsClosed(true);
    };

    const showBack = ["2", "3", "4a", "4b"].includes(step);
    const showClose = false; /* Quit option removed for 5a/5b/5c */
    const showProgress = !["5a", "5b", "5c"].includes(step);

    /* Step 4a submit: trigger hidden hz-embed */
    const handleStep4aSubmit = () => {
        try {
            const hzEmbed = hzContainerRef.current?.querySelector("hz-embed");
            if (hzEmbed) {
                /* Try to find the hz-embed internal input and button */
                const shadowRoot = hzEmbed.shadowRoot;
                const root = shadowRoot || hzEmbed;
                const input = root.querySelector(
                    'input[type="text"], input[type="search"], input',
                );
                const btn = root.querySelector("button");
                if (input) {
                    /* Set address value */
                    const nativeInputValueSetter =
                        Object.getOwnPropertyDescriptor(
                            window.HTMLInputElement.prototype,
                            "value",
                        ).set;
                    nativeInputValueSetter.call(input, formData.address);
                    input.dispatchEvent(new Event("input", { bubbles: true }));
                    input.dispatchEvent(new Event("change", { bubbles: true }));
                }
                /* Also try setting email */
                const emailInputs = root.querySelectorAll(
                    'input[type="email"], input[placeholder*="mail"]',
                );
                if (emailInputs.length > 0 && formData.email) {
                    const nativeInputValueSetter =
                        Object.getOwnPropertyDescriptor(
                            window.HTMLInputElement.prototype,
                            "value",
                        ).set;
                    nativeInputValueSetter.call(emailInputs[0], formData.email);
                    emailInputs[0].dispatchEvent(
                        new Event("input", { bubbles: true }),
                    );
                }
                /* Click submit button after a brief delay */
                setTimeout(() => {
                    if (btn) btn.click();
                }, 500);
            }
        } catch (err) {
            console.warn(
                "hz-embed interaction failed, opening URL directly:",
                err,
            );
        }

        /* Fallback / parallel: construct URL and open in new tab */
        const params = new URLSearchParams();
        if (formData.street) params.set("street", formData.street);
        if (formData.housenumber)
            params.set("housenumber", formData.housenumber);
        if (formData.zipcode) params.set("zipcode", formData.zipcode);
        if (formData.city) params.set("city", formData.city);
        if (formData.email) params.set("email", formData.email);
        params.set("country", "de");

        const baseUrl =
            "https://configurator.homezero.nl/link/start?id=3826d61f-6790-4fca-ab8d-e0891ae4d9d9";
        const fullUrl = `${baseUrl}&${params.toString()}`;
        window.open(fullUrl, "_blank");
    };

    if (isClosed) return null;

    return (
        <div className="pico-widget">
            {/* -- header -- */}
            <div className="pico-widget-header">
                <div className="pico-header-left">
                    {showBack && (
                        <button
                            className="pico-btn-icon"
                            onClick={goBack}
                            aria-label="Zurück"
                        >
                            <IconBack />
                        </button>
                    )}
                </div>
                <div className="pico-header-center">
                    {showProgress && <ProgressBar currentStep={step} />}
                </div>
                <div className="pico-header-right">
                    {showClose && (
                        <button
                            className="pico-btn-icon"
                            onClick={handleClose}
                            aria-label="Schließen"
                        >
                            <IconClose />
                        </button>
                    )}
                </div>
            </div>

            {/* -- body -- */}
            <div className="pico-widget-body">
                {step === "1" && (
                    <Step1
                        interests={formData.interests}
                        toggleInterest={toggleInterest}
                        onNext={() => setStep("2")}
                    />
                )}

                {step === "2" && (
                    <Step2
                        onSelect={(val) => {
                            setFormData((p) => ({ ...p, isOwner: val }));
                            setStep("3");
                        }}
                    />
                )}

                {step === "3" && (
                    <Step3
                        onSelect={(val) => {
                            setFormData((p) => ({ ...p, path: val }));
                            setStep(val === "online" ? "4a" : "4b");
                        }}
                    />
                )}

                {step === "4a" && (
                    <Step4a
                        formData={formData}
                        setFormData={setFormData}
                        onSubmit={handleStep4aSubmit}
                    />
                )}

                {step === "4b" && (
                    <Step4b
                        formData={formData}
                        setFormData={setFormData}
                        onSuccess={() => setStep("5a")}
                        onBuildingNotFound={() => setStep("5b")}
                        onOutsideArea={() => setStep("5c")}
                    />
                )}

                {step === "5a" && <Step5a />}
                {step === "5b" && <Step5b onBack={() => setStep("4b")} />}
                {step === "5c" && <Step5c />}
            </div>

            {/* Hidden hz-embed container */}
            <div
                ref={hzContainerRef}
                className="pico-hz-embed-hidden"
                aria-hidden="true"
            />
        </div>
    );
}

export default App;
