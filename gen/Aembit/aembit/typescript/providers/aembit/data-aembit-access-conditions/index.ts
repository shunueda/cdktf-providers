// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitAccessConditionsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAembitAccessConditionsAccessConditionsCrowdstrikeConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#match_hostname DataAembitAccessConditions#match_hostname}
  */
  readonly matchHostname: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#match_serial_number DataAembitAccessConditions#match_serial_number}
  */
  readonly matchSerialNumber: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#max_last_seen DataAembitAccessConditions#max_last_seen}
  */
  readonly maxLastSeen: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#prevent_rfm DataAembitAccessConditions#prevent_rfm}
  */
  readonly preventRfm: boolean | cdktf.IResolvable;
}

export function dataAembitAccessConditionsAccessConditionsCrowdstrikeConditionsToTerraform(struct?: DataAembitAccessConditionsAccessConditionsCrowdstrikeConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_hostname: cdktf.booleanToTerraform(struct!.matchHostname),
    match_serial_number: cdktf.booleanToTerraform(struct!.matchSerialNumber),
    max_last_seen: cdktf.numberToTerraform(struct!.maxLastSeen),
    prevent_rfm: cdktf.booleanToTerraform(struct!.preventRfm),
  }
}


export function dataAembitAccessConditionsAccessConditionsCrowdstrikeConditionsToHclTerraform(struct?: DataAembitAccessConditionsAccessConditionsCrowdstrikeConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.matchHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_serial_number: {
      value: cdktf.booleanToHclTerraform(struct!.matchSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_last_seen: {
      value: cdktf.numberToHclTerraform(struct!.maxLastSeen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prevent_rfm: {
      value: cdktf.booleanToHclTerraform(struct!.preventRfm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitAccessConditionsAccessConditionsCrowdstrikeConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitAccessConditionsAccessConditionsCrowdstrikeConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHostname = this._matchHostname;
    }
    if (this._matchSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSerialNumber = this._matchSerialNumber;
    }
    if (this._maxLastSeen !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLastSeen = this._maxLastSeen;
    }
    if (this._preventRfm !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventRfm = this._preventRfm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitAccessConditionsAccessConditionsCrowdstrikeConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchHostname = undefined;
      this._matchSerialNumber = undefined;
      this._maxLastSeen = undefined;
      this._preventRfm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchHostname = value.matchHostname;
      this._matchSerialNumber = value.matchSerialNumber;
      this._maxLastSeen = value.maxLastSeen;
      this._preventRfm = value.preventRfm;
    }
  }

  // match_hostname - computed: true, optional: false, required: true
  private _matchHostname?: boolean | cdktf.IResolvable; 
  public get matchHostname() {
    return this.getBooleanAttribute('match_hostname');
  }
  public set matchHostname(value: boolean | cdktf.IResolvable) {
    this._matchHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHostnameInput() {
    return this._matchHostname;
  }

  // match_local_ip - computed: true, optional: false, required: false
  public get matchLocalIp() {
    return this.getBooleanAttribute('match_local_ip');
  }

  // match_mac_address - computed: true, optional: false, required: false
  public get matchMacAddress() {
    return this.getBooleanAttribute('match_mac_address');
  }

  // match_serial_number - computed: true, optional: false, required: true
  private _matchSerialNumber?: boolean | cdktf.IResolvable; 
  public get matchSerialNumber() {
    return this.getBooleanAttribute('match_serial_number');
  }
  public set matchSerialNumber(value: boolean | cdktf.IResolvable) {
    this._matchSerialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSerialNumberInput() {
    return this._matchSerialNumber;
  }

  // max_last_seen - computed: true, optional: false, required: true
  private _maxLastSeen?: number; 
  public get maxLastSeen() {
    return this.getNumberAttribute('max_last_seen');
  }
  public set maxLastSeen(value: number) {
    this._maxLastSeen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLastSeenInput() {
    return this._maxLastSeen;
  }

  // prevent_rfm - computed: true, optional: false, required: true
  private _preventRfm?: boolean | cdktf.IResolvable; 
  public get preventRfm() {
    return this.getBooleanAttribute('prevent_rfm');
  }
  public set preventRfm(value: boolean | cdktf.IResolvable) {
    this._preventRfm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preventRfmInput() {
    return this._preventRfm;
  }
}
export interface DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisions {
  /**
  * The subdivision identifier as defined by ISO 3166.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#subdivision_code DataAembitAccessConditions#subdivision_code}
  */
  readonly subdivisionCode: string;
}

export function dataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisionsToTerraform(struct?: DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subdivision_code: cdktf.stringToTerraform(struct!.subdivisionCode),
  }
}


export function dataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisionsToHclTerraform(struct?: DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subdivision_code: {
      value: cdktf.stringToHclTerraform(struct!.subdivisionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subdivisionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdivisionCode = this._subdivisionCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subdivisionCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subdivisionCode = value.subdivisionCode;
    }
  }

  // subdivision_code - computed: true, optional: false, required: true
  private _subdivisionCode?: string; 
  public get subdivisionCode() {
    return this.getStringAttribute('subdivision_code');
  }
  public set subdivisionCode(value: string) {
    this._subdivisionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdivisionCodeInput() {
    return this._subdivisionCode;
  }
}

export class DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisionsList extends cdktf.ComplexList {
  public internalValue? : DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisionsOutputReference {
    return new DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAembitAccessConditionsAccessConditionsGeoipConditionsLocations {
  /**
  * A list of two-letter country code identifiers (as defined by ISO 3166-1) to allow as part of the validation for this access condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#country_code DataAembitAccessConditions#country_code}
  */
  readonly countryCode: string;
  /**
  * A list of subdivision identifiers (as defined by ISO 3166) to allow as part of the validation for this access condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#subdivisions DataAembitAccessConditions#subdivisions}
  */
  readonly subdivisions?: DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisions[] | cdktf.IResolvable;
}

export function dataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsToTerraform(struct?: DataAembitAccessConditionsAccessConditionsGeoipConditionsLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    subdivisions: cdktf.listMapper(dataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisionsToTerraform, false)(struct!.subdivisions),
  }
}


export function dataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsToHclTerraform(struct?: DataAembitAccessConditionsAccessConditionsGeoipConditionsLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdivisions: {
      value: cdktf.listMapperHcl(dataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisionsToHclTerraform, false)(struct!.subdivisions),
      isBlock: true,
      type: "list",
      storageClassType: "DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAembitAccessConditionsAccessConditionsGeoipConditionsLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._subdivisions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdivisions = this._subdivisions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitAccessConditionsAccessConditionsGeoipConditionsLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countryCode = undefined;
      this._subdivisions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countryCode = value.countryCode;
      this._subdivisions.internalValue = value.subdivisions;
    }
  }

  // country_code - computed: true, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // subdivisions - computed: true, optional: true, required: false
  private _subdivisions = new DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisionsList(this, "subdivisions", false);
  public get subdivisions() {
    return this._subdivisions;
  }
  public putSubdivisions(value: DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsSubdivisions[] | cdktf.IResolvable) {
    this._subdivisions.internalValue = value;
  }
  public resetSubdivisions() {
    this._subdivisions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdivisionsInput() {
    return this._subdivisions.internalValue;
  }
}

export class DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsList extends cdktf.ComplexList {
  public internalValue? : DataAembitAccessConditionsAccessConditionsGeoipConditionsLocations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsOutputReference {
    return new DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAembitAccessConditionsAccessConditionsGeoipConditions {
  /**
  * A list of geographical locations, each containing a country code and optional subdivisions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#locations DataAembitAccessConditions#locations}
  */
  readonly locations: DataAembitAccessConditionsAccessConditionsGeoipConditionsLocations[] | cdktf.IResolvable;
}

export function dataAembitAccessConditionsAccessConditionsGeoipConditionsToTerraform(struct?: DataAembitAccessConditionsAccessConditionsGeoipConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(dataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsToTerraform, false)(struct!.locations),
  }
}


export function dataAembitAccessConditionsAccessConditionsGeoipConditionsToHclTerraform(struct?: DataAembitAccessConditionsAccessConditionsGeoipConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(dataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsToHclTerraform, false)(struct!.locations),
      isBlock: true,
      type: "list",
      storageClassType: "DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitAccessConditionsAccessConditionsGeoipConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitAccessConditionsAccessConditionsGeoipConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitAccessConditionsAccessConditionsGeoipConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations.internalValue = value.locations;
    }
  }

  // locations - computed: true, optional: false, required: true
  private _locations = new DataAembitAccessConditionsAccessConditionsGeoipConditionsLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
  }
  public putLocations(value: DataAembitAccessConditionsAccessConditionsGeoipConditionsLocations[] | cdktf.IResolvable) {
    this._locations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }
}
export interface DataAembitAccessConditionsAccessConditionsTimeConditionsSchedule {
  /**
  * Day of Week, for example: Tuesday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#day DataAembitAccessConditions#day}
  */
  readonly day: string;
  /**
  * The end time of the schedule in 24-hour format (HH:mm), e.g., '18:00' for 6:00 PM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#end_time DataAembitAccessConditions#end_time}
  */
  readonly endTime: string;
  /**
  * The start time of the schedule in 24-hour format (HH:mm), e.g., '07:00' for 7:00 AM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#start_time DataAembitAccessConditions#start_time}
  */
  readonly startTime: string;
}

export function dataAembitAccessConditionsAccessConditionsTimeConditionsScheduleToTerraform(struct?: DataAembitAccessConditionsAccessConditionsTimeConditionsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function dataAembitAccessConditionsAccessConditionsTimeConditionsScheduleToHclTerraform(struct?: DataAembitAccessConditionsAccessConditionsTimeConditionsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitAccessConditionsAccessConditionsTimeConditionsScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAembitAccessConditionsAccessConditionsTimeConditionsSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitAccessConditionsAccessConditionsTimeConditionsSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // day - computed: true, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // end_time - computed: true, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class DataAembitAccessConditionsAccessConditionsTimeConditionsScheduleList extends cdktf.ComplexList {
  public internalValue? : DataAembitAccessConditionsAccessConditionsTimeConditionsSchedule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAembitAccessConditionsAccessConditionsTimeConditionsScheduleOutputReference {
    return new DataAembitAccessConditionsAccessConditionsTimeConditionsScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAembitAccessConditionsAccessConditionsTimeConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#schedule DataAembitAccessConditions#schedule}
  */
  readonly schedule: DataAembitAccessConditionsAccessConditionsTimeConditionsSchedule[] | cdktf.IResolvable;
  /**
  * Timezone value such as America/Chicago, Europe/Istanbul
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#timezone DataAembitAccessConditions#timezone}
  */
  readonly timezone: string;
}

export function dataAembitAccessConditionsAccessConditionsTimeConditionsToTerraform(struct?: DataAembitAccessConditionsAccessConditionsTimeConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.listMapper(dataAembitAccessConditionsAccessConditionsTimeConditionsScheduleToTerraform, false)(struct!.schedule),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function dataAembitAccessConditionsAccessConditionsTimeConditionsToHclTerraform(struct?: DataAembitAccessConditionsAccessConditionsTimeConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: cdktf.listMapperHcl(dataAembitAccessConditionsAccessConditionsTimeConditionsScheduleToHclTerraform, false)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DataAembitAccessConditionsAccessConditionsTimeConditionsScheduleList",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitAccessConditionsAccessConditionsTimeConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitAccessConditionsAccessConditionsTimeConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitAccessConditionsAccessConditionsTimeConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schedule.internalValue = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schedule.internalValue = value.schedule;
      this._timezone = value.timezone;
    }
  }

  // schedule - computed: true, optional: false, required: true
  private _schedule = new DataAembitAccessConditionsAccessConditionsTimeConditionsScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataAembitAccessConditionsAccessConditionsTimeConditionsSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // timezone - computed: true, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface DataAembitAccessConditionsAccessConditionsWizConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#container_cluster_connected DataAembitAccessConditions#container_cluster_connected}
  */
  readonly containerClusterConnected: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#max_last_seen DataAembitAccessConditions#max_last_seen}
  */
  readonly maxLastSeen: number;
}

export function dataAembitAccessConditionsAccessConditionsWizConditionsToTerraform(struct?: DataAembitAccessConditionsAccessConditionsWizConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_cluster_connected: cdktf.booleanToTerraform(struct!.containerClusterConnected),
    max_last_seen: cdktf.numberToTerraform(struct!.maxLastSeen),
  }
}


export function dataAembitAccessConditionsAccessConditionsWizConditionsToHclTerraform(struct?: DataAembitAccessConditionsAccessConditionsWizConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_cluster_connected: {
      value: cdktf.booleanToHclTerraform(struct!.containerClusterConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_last_seen: {
      value: cdktf.numberToHclTerraform(struct!.maxLastSeen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitAccessConditionsAccessConditionsWizConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitAccessConditionsAccessConditionsWizConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerClusterConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerClusterConnected = this._containerClusterConnected;
    }
    if (this._maxLastSeen !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLastSeen = this._maxLastSeen;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitAccessConditionsAccessConditionsWizConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerClusterConnected = undefined;
      this._maxLastSeen = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerClusterConnected = value.containerClusterConnected;
      this._maxLastSeen = value.maxLastSeen;
    }
  }

  // container_cluster_connected - computed: true, optional: false, required: true
  private _containerClusterConnected?: boolean | cdktf.IResolvable; 
  public get containerClusterConnected() {
    return this.getBooleanAttribute('container_cluster_connected');
  }
  public set containerClusterConnected(value: boolean | cdktf.IResolvable) {
    this._containerClusterConnected = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerClusterConnectedInput() {
    return this._containerClusterConnected;
  }

  // max_last_seen - computed: true, optional: false, required: true
  private _maxLastSeen?: number; 
  public get maxLastSeen() {
    return this.getNumberAttribute('max_last_seen');
  }
  public set maxLastSeen(value: number) {
    this._maxLastSeen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLastSeenInput() {
    return this._maxLastSeen;
  }
}
export interface DataAembitAccessConditionsAccessConditions {
}

export function dataAembitAccessConditionsAccessConditionsToTerraform(struct?: DataAembitAccessConditionsAccessConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitAccessConditionsAccessConditionsToHclTerraform(struct?: DataAembitAccessConditionsAccessConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitAccessConditionsAccessConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAembitAccessConditionsAccessConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitAccessConditionsAccessConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crowdstrike_conditions - computed: true, optional: false, required: false
  private _crowdstrikeConditions = new DataAembitAccessConditionsAccessConditionsCrowdstrikeConditionsOutputReference(this, "crowdstrike_conditions");
  public get crowdstrikeConditions() {
    return this._crowdstrikeConditions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // geoip_conditions - computed: true, optional: false, required: false
  private _geoipConditions = new DataAembitAccessConditionsAccessConditionsGeoipConditionsOutputReference(this, "geoip_conditions");
  public get geoipConditions() {
    return this._geoipConditions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // time_conditions - computed: true, optional: false, required: false
  private _timeConditions = new DataAembitAccessConditionsAccessConditionsTimeConditionsOutputReference(this, "time_conditions");
  public get timeConditions() {
    return this._timeConditions;
  }

  // wiz_conditions - computed: true, optional: false, required: false
  private _wizConditions = new DataAembitAccessConditionsAccessConditionsWizConditionsOutputReference(this, "wiz_conditions");
  public get wizConditions() {
    return this._wizConditions;
  }
}

export class DataAembitAccessConditionsAccessConditionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAembitAccessConditionsAccessConditionsOutputReference {
    return new DataAembitAccessConditionsAccessConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions aembit_access_conditions}
*/
export class DataAembitAccessConditions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_access_conditions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitAccessConditions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitAccessConditions to import
  * @param importFromId The id of the existing DataAembitAccessConditions that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitAccessConditions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_access_conditions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/access_conditions aembit_access_conditions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitAccessConditionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitAccessConditionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_access_conditions',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_conditions - computed: true, optional: false, required: false
  private _accessConditions = new DataAembitAccessConditionsAccessConditionsList(this, "access_conditions", false);
  public get accessConditions() {
    return this._accessConditions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
