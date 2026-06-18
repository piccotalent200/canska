"use client";

import FormField from "./FormField";

const AddressSection = ({ title, subtitle, fields, setters, fieldErrors = {}, fieldIds = {}, onFieldChange = () => {}, footer }) => {
  const wrap = (key, setter) => (val) => {
    setter(val);
    onFieldChange(key);
  };

  return (
    <div className="bg-white rounded-3xl border border-solid border-[#6F2DAE1A] p-6 md:p-[34px_40px]">
      <div className="border-b border-[#6F2DAE1A] border-solid pb-[24px] mb-[24px] space-y-1">
        <h2 className="text-[30px] leading-[36px] font-normal text-[#0A0A0A]">{title}</h2>
        {subtitle && <p className="text-sm leading-[20px] font-normal text-gray-500">{subtitle}</p>}
      </div>

      <div className="space-y-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[54px] gap-y-[20px]">
          <FormField label="Apartment / House Name" value={fields.apartmentName} onChange={setters.setApartmentName} />
          <FormField label="Apartment / House No" value={fields.apartmentNo} onChange={setters.setApartmentNo} />
          <div id={fieldIds.streetRoad}>
            <FormField label="Street / Road" value={fields.streetRoad} onChange={wrap("streetRoad", setters.setStreetRoad)} error={fieldErrors.streetRoad} />
          </div>
          <FormField label="Area / Zone" value={fields.areaZone} onChange={setters.setAreaZone} />
          <div id={fieldIds.cityTown}>
            <FormField label="City / Town" value={fields.cityTown} onChange={wrap("cityTown", setters.setCityTown)} error={fieldErrors.cityTown} />
          </div>
          <FormField label="District / Region" value={fields.districtRegion} onChange={setters.setDistrictRegion} />
          <FormField label="State / Province" value={fields.stateProvince} onChange={setters.setStateProvince} />
          <div id={fieldIds.country}>
            <FormField label="Country" value={fields.country} onChange={wrap("country", setters.setCountry)} error={fieldErrors.country} />
          </div>
          <div id={fieldIds.postZipCode}>
            <FormField label="Post / Zip Code" value={fields.postZipCode} onChange={wrap("postZipCode", setters.setPostZipCode)} error={fieldErrors.postZipCode} />
          </div>
        </div>
        {footer}
      </div>
    </div>
  );
};

export default AddressSection;
