// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * CrowdStrike Specific rules for the Access Condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#crowdstrike_conditions AccessCondition#crowdstrike_conditions}
  */
  readonly crowdstrikeConditions?: AccessConditionCrowdstrikeConditions;
  /**
  * Description for the Access Condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#description AccessCondition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#geoip_conditions AccessCondition#geoip_conditions}
  */
  readonly geoipConditions?: AccessConditionGeoipConditions;
  /**
  * Reference to the Integration used for this Access Condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#integration_id AccessCondition#integration_id}
  */
  readonly integrationId: string;
  /**
  * Active status of the Access Condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#is_active AccessCondition#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Name for the Access Condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#name AccessCondition#name}
  */
  readonly name: string;
  /**
  * Tags are key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#tags AccessCondition#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Defines the conditions for scheduling based on time, including specific time slots and timezone settings for the Access Condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#time_conditions AccessCondition#time_conditions}
  */
  readonly timeConditions?: AccessConditionTimeConditions;
  /**
  * Wiz Specific rules for the Access Condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#wiz_conditions AccessCondition#wiz_conditions}
  */
  readonly wizConditions?: AccessConditionWizConditions;
}
export interface AccessConditionCrowdstrikeConditions {
  /**
  * The condition requires that managed hosts have a hostname which matches the CrowdStrike identified hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#match_hostname AccessCondition#match_hostname}
  */
  readonly matchHostname: boolean | cdktf.IResolvable;
  /**
  * The condition requires that managed hosts have a local IP that matches the CrowdStrike-identified local or connection IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#match_local_ip AccessCondition#match_local_ip}
  */
  readonly matchLocalIp?: boolean | cdktf.IResolvable;
  /**
  * The condition requires that managed hosts have a MAC address which matches the CrowdStrike identified MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#match_mac_address AccessCondition#match_mac_address}
  */
  readonly matchMacAddress?: boolean | cdktf.IResolvable;
  /**
  * The condition requires that managed hosts have a system serial number which matches the CrowdStrike identified serial number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#match_serial_number AccessCondition#match_serial_number}
  */
  readonly matchSerialNumber: boolean | cdktf.IResolvable;
  /**
  * The maximum number of seconds since the managed Cluster was last seen by CrowdStrike. Accepted range: 1-31449600 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#max_last_seen AccessCondition#max_last_seen}
  */
  readonly maxLastSeen: number;
  /**
  * The condition requires that managed hosts not be in CrowdStrike Reduced Functionality Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#prevent_rfm AccessCondition#prevent_rfm}
  */
  readonly preventRfm: boolean | cdktf.IResolvable;
}

export function accessConditionCrowdstrikeConditionsToTerraform(struct?: AccessConditionCrowdstrikeConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_hostname: cdktf.booleanToTerraform(struct!.matchHostname),
    match_local_ip: cdktf.booleanToTerraform(struct!.matchLocalIp),
    match_mac_address: cdktf.booleanToTerraform(struct!.matchMacAddress),
    match_serial_number: cdktf.booleanToTerraform(struct!.matchSerialNumber),
    max_last_seen: cdktf.numberToTerraform(struct!.maxLastSeen),
    prevent_rfm: cdktf.booleanToTerraform(struct!.preventRfm),
  }
}


export function accessConditionCrowdstrikeConditionsToHclTerraform(struct?: AccessConditionCrowdstrikeConditions | cdktf.IResolvable): any {
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
    match_local_ip: {
      value: cdktf.booleanToHclTerraform(struct!.matchLocalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_mac_address: {
      value: cdktf.booleanToHclTerraform(struct!.matchMacAddress),
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

export class AccessConditionCrowdstrikeConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessConditionCrowdstrikeConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHostname = this._matchHostname;
    }
    if (this._matchLocalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLocalIp = this._matchLocalIp;
    }
    if (this._matchMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchMacAddress = this._matchMacAddress;
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

  public set internalValue(value: AccessConditionCrowdstrikeConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchHostname = undefined;
      this._matchLocalIp = undefined;
      this._matchMacAddress = undefined;
      this._matchSerialNumber = undefined;
      this._maxLastSeen = undefined;
      this._preventRfm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchHostname = value.matchHostname;
      this._matchLocalIp = value.matchLocalIp;
      this._matchMacAddress = value.matchMacAddress;
      this._matchSerialNumber = value.matchSerialNumber;
      this._maxLastSeen = value.maxLastSeen;
      this._preventRfm = value.preventRfm;
    }
  }

  // match_hostname - computed: false, optional: false, required: true
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

  // match_local_ip - computed: true, optional: true, required: false
  private _matchLocalIp?: boolean | cdktf.IResolvable; 
  public get matchLocalIp() {
    return this.getBooleanAttribute('match_local_ip');
  }
  public set matchLocalIp(value: boolean | cdktf.IResolvable) {
    this._matchLocalIp = value;
  }
  public resetMatchLocalIp() {
    this._matchLocalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLocalIpInput() {
    return this._matchLocalIp;
  }

  // match_mac_address - computed: true, optional: true, required: false
  private _matchMacAddress?: boolean | cdktf.IResolvable; 
  public get matchMacAddress() {
    return this.getBooleanAttribute('match_mac_address');
  }
  public set matchMacAddress(value: boolean | cdktf.IResolvable) {
    this._matchMacAddress = value;
  }
  public resetMatchMacAddress() {
    this._matchMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchMacAddressInput() {
    return this._matchMacAddress;
  }

  // match_serial_number - computed: false, optional: false, required: true
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

  // max_last_seen - computed: false, optional: false, required: true
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

  // prevent_rfm - computed: false, optional: false, required: true
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
export interface AccessConditionGeoipConditionsLocationsSubdivisions {
  /**
  * A list of subdivision identifiers (as defined by ISO 3166) to allow as part of the validation for this access condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#subdivision_code AccessCondition#subdivision_code}
  */
  readonly subdivisionCode: string;
}

export function accessConditionGeoipConditionsLocationsSubdivisionsToTerraform(struct?: AccessConditionGeoipConditionsLocationsSubdivisions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subdivision_code: cdktf.stringToTerraform(struct!.subdivisionCode),
  }
}


export function accessConditionGeoipConditionsLocationsSubdivisionsToHclTerraform(struct?: AccessConditionGeoipConditionsLocationsSubdivisions | cdktf.IResolvable): any {
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

export class AccessConditionGeoipConditionsLocationsSubdivisionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessConditionGeoipConditionsLocationsSubdivisions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessConditionGeoipConditionsLocationsSubdivisions | cdktf.IResolvable | undefined) {
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

  // subdivision_code - computed: false, optional: false, required: true
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

export class AccessConditionGeoipConditionsLocationsSubdivisionsList extends cdktf.ComplexList {
  public internalValue? : AccessConditionGeoipConditionsLocationsSubdivisions[] | cdktf.IResolvable

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
  public get(index: number): AccessConditionGeoipConditionsLocationsSubdivisionsOutputReference {
    return new AccessConditionGeoipConditionsLocationsSubdivisionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessConditionGeoipConditionsLocations {
  /**
  * A list of two-letter country code identifiers (as defined by ISO 3166-1) to allow as part of the validation for this access condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#country_code AccessCondition#country_code}
  */
  readonly countryCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#subdivisions AccessCondition#subdivisions}
  */
  readonly subdivisions?: AccessConditionGeoipConditionsLocationsSubdivisions[] | cdktf.IResolvable;
}

export function accessConditionGeoipConditionsLocationsToTerraform(struct?: AccessConditionGeoipConditionsLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    subdivisions: cdktf.listMapper(accessConditionGeoipConditionsLocationsSubdivisionsToTerraform, false)(struct!.subdivisions),
  }
}


export function accessConditionGeoipConditionsLocationsToHclTerraform(struct?: AccessConditionGeoipConditionsLocations | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(accessConditionGeoipConditionsLocationsSubdivisionsToHclTerraform, false)(struct!.subdivisions),
      isBlock: true,
      type: "list",
      storageClassType: "AccessConditionGeoipConditionsLocationsSubdivisionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessConditionGeoipConditionsLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessConditionGeoipConditionsLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AccessConditionGeoipConditionsLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
      this._subdivisions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
      this._subdivisions.internalValue = value.subdivisions;
    }
  }

  // country_code - computed: false, optional: false, required: true
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

  // subdivisions - computed: false, optional: true, required: false
  private _subdivisions = new AccessConditionGeoipConditionsLocationsSubdivisionsList(this, "subdivisions", false);
  public get subdivisions() {
    return this._subdivisions;
  }
  public putSubdivisions(value: AccessConditionGeoipConditionsLocationsSubdivisions[] | cdktf.IResolvable) {
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

export class AccessConditionGeoipConditionsLocationsList extends cdktf.ComplexList {
  public internalValue? : AccessConditionGeoipConditionsLocations[] | cdktf.IResolvable

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
  public get(index: number): AccessConditionGeoipConditionsLocationsOutputReference {
    return new AccessConditionGeoipConditionsLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessConditionGeoipConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#locations AccessCondition#locations}
  */
  readonly locations: AccessConditionGeoipConditionsLocations[] | cdktf.IResolvable;
}

export function accessConditionGeoipConditionsToTerraform(struct?: AccessConditionGeoipConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(accessConditionGeoipConditionsLocationsToTerraform, false)(struct!.locations),
  }
}


export function accessConditionGeoipConditionsToHclTerraform(struct?: AccessConditionGeoipConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(accessConditionGeoipConditionsLocationsToHclTerraform, false)(struct!.locations),
      isBlock: true,
      type: "list",
      storageClassType: "AccessConditionGeoipConditionsLocationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessConditionGeoipConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessConditionGeoipConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessConditionGeoipConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locations.internalValue = value.locations;
    }
  }

  // locations - computed: false, optional: false, required: true
  private _locations = new AccessConditionGeoipConditionsLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
  }
  public putLocations(value: AccessConditionGeoipConditionsLocations[] | cdktf.IResolvable) {
    this._locations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }
}
export interface AccessConditionTimeConditionsSchedule {
  /**
  * Day of Week, for example: Tuesday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#day AccessCondition#day}
  */
  readonly day: string;
  /**
  * The end time of the schedule in 24-hour format (HH:mm), e.g., '18:00' for 6:00 PM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#end_time AccessCondition#end_time}
  */
  readonly endTime: string;
  /**
  * The start time of the schedule in 24-hour format (HH:mm), e.g., '07:00' for 7:00 AM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#start_time AccessCondition#start_time}
  */
  readonly startTime: string;
}

export function accessConditionTimeConditionsScheduleToTerraform(struct?: AccessConditionTimeConditionsSchedule | cdktf.IResolvable): any {
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


export function accessConditionTimeConditionsScheduleToHclTerraform(struct?: AccessConditionTimeConditionsSchedule | cdktf.IResolvable): any {
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

export class AccessConditionTimeConditionsScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessConditionTimeConditionsSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AccessConditionTimeConditionsSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // day - computed: false, optional: false, required: true
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

  // end_time - computed: false, optional: false, required: true
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

  // start_time - computed: false, optional: false, required: true
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

export class AccessConditionTimeConditionsScheduleList extends cdktf.ComplexList {
  public internalValue? : AccessConditionTimeConditionsSchedule[] | cdktf.IResolvable

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
  public get(index: number): AccessConditionTimeConditionsScheduleOutputReference {
    return new AccessConditionTimeConditionsScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessConditionTimeConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#schedule AccessCondition#schedule}
  */
  readonly schedule: AccessConditionTimeConditionsSchedule[] | cdktf.IResolvable;
  /**
  * Timezone value such as America/Chicago, Europe/Istanbul
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#timezone AccessCondition#timezone}
  */
  readonly timezone: string;
}

export function accessConditionTimeConditionsToTerraform(struct?: AccessConditionTimeConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.listMapper(accessConditionTimeConditionsScheduleToTerraform, false)(struct!.schedule),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function accessConditionTimeConditionsToHclTerraform(struct?: AccessConditionTimeConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: cdktf.listMapperHcl(accessConditionTimeConditionsScheduleToHclTerraform, false)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "AccessConditionTimeConditionsScheduleList",
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

export class AccessConditionTimeConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessConditionTimeConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AccessConditionTimeConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schedule.internalValue = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schedule.internalValue = value.schedule;
      this._timezone = value.timezone;
    }
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new AccessConditionTimeConditionsScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AccessConditionTimeConditionsSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // timezone - computed: false, optional: false, required: true
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
export interface AccessConditionWizConditions {
  /**
  * The condition requires that managed Clusters be defined as Container Cluster Connected by Wiz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#container_cluster_connected AccessCondition#container_cluster_connected}
  */
  readonly containerClusterConnected: boolean | cdktf.IResolvable;
  /**
  * The maximum number of seconds since the managed Cluster was last seen by Wiz. Accepted range: 1-31449600 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#max_last_seen AccessCondition#max_last_seen}
  */
  readonly maxLastSeen: number;
}

export function accessConditionWizConditionsToTerraform(struct?: AccessConditionWizConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_cluster_connected: cdktf.booleanToTerraform(struct!.containerClusterConnected),
    max_last_seen: cdktf.numberToTerraform(struct!.maxLastSeen),
  }
}


export function accessConditionWizConditionsToHclTerraform(struct?: AccessConditionWizConditions | cdktf.IResolvable): any {
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

export class AccessConditionWizConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessConditionWizConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AccessConditionWizConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerClusterConnected = undefined;
      this._maxLastSeen = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerClusterConnected = value.containerClusterConnected;
      this._maxLastSeen = value.maxLastSeen;
    }
  }

  // container_cluster_connected - computed: false, optional: false, required: true
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

  // max_last_seen - computed: false, optional: false, required: true
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

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition aembit_access_condition}
*/
export class AccessCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_access_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessCondition to import
  * @param importFromId The id of the existing AccessCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_access_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/access_condition aembit_access_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessConditionConfig
  */
  public constructor(scope: Construct, id: string, config: AccessConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_access_condition',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1',
        providerVersionConstraint: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._crowdstrikeConditions.internalValue = config.crowdstrikeConditions;
    this._description = config.description;
    this._geoipConditions.internalValue = config.geoipConditions;
    this._integrationId = config.integrationId;
    this._isActive = config.isActive;
    this._name = config.name;
    this._tags = config.tags;
    this._timeConditions.internalValue = config.timeConditions;
    this._wizConditions.internalValue = config.wizConditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crowdstrike_conditions - computed: false, optional: true, required: false
  private _crowdstrikeConditions = new AccessConditionCrowdstrikeConditionsOutputReference(this, "crowdstrike_conditions");
  public get crowdstrikeConditions() {
    return this._crowdstrikeConditions;
  }
  public putCrowdstrikeConditions(value: AccessConditionCrowdstrikeConditions) {
    this._crowdstrikeConditions.internalValue = value;
  }
  public resetCrowdstrikeConditions() {
    this._crowdstrikeConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crowdstrikeConditionsInput() {
    return this._crowdstrikeConditions.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // geoip_conditions - computed: false, optional: true, required: false
  private _geoipConditions = new AccessConditionGeoipConditionsOutputReference(this, "geoip_conditions");
  public get geoipConditions() {
    return this._geoipConditions;
  }
  public putGeoipConditions(value: AccessConditionGeoipConditions) {
    this._geoipConditions.internalValue = value;
  }
  public resetGeoipConditions() {
    this._geoipConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipConditionsInput() {
    return this._geoipConditions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // time_conditions - computed: false, optional: true, required: false
  private _timeConditions = new AccessConditionTimeConditionsOutputReference(this, "time_conditions");
  public get timeConditions() {
    return this._timeConditions;
  }
  public putTimeConditions(value: AccessConditionTimeConditions) {
    this._timeConditions.internalValue = value;
  }
  public resetTimeConditions() {
    this._timeConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeConditionsInput() {
    return this._timeConditions.internalValue;
  }

  // wiz_conditions - computed: false, optional: true, required: false
  private _wizConditions = new AccessConditionWizConditionsOutputReference(this, "wiz_conditions");
  public get wizConditions() {
    return this._wizConditions;
  }
  public putWizConditions(value: AccessConditionWizConditions) {
    this._wizConditions.internalValue = value;
  }
  public resetWizConditions() {
    this._wizConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wizConditionsInput() {
    return this._wizConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      crowdstrike_conditions: accessConditionCrowdstrikeConditionsToTerraform(this._crowdstrikeConditions.internalValue),
      description: cdktf.stringToTerraform(this._description),
      geoip_conditions: accessConditionGeoipConditionsToTerraform(this._geoipConditions.internalValue),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      is_active: cdktf.booleanToTerraform(this._isActive),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_conditions: accessConditionTimeConditionsToTerraform(this._timeConditions.internalValue),
      wiz_conditions: accessConditionWizConditionsToTerraform(this._wizConditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crowdstrike_conditions: {
        value: accessConditionCrowdstrikeConditionsToHclTerraform(this._crowdstrikeConditions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessConditionCrowdstrikeConditions",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geoip_conditions: {
        value: accessConditionGeoipConditionsToHclTerraform(this._geoipConditions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessConditionGeoipConditions",
      },
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      time_conditions: {
        value: accessConditionTimeConditionsToHclTerraform(this._timeConditions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessConditionTimeConditions",
      },
      wiz_conditions: {
        value: accessConditionWizConditionsToHclTerraform(this._wizConditions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessConditionWizConditions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
