// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of seconds used to determine if a call is abandoned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#abandon_seconds OutboundSettings#abandon_seconds}
  */
  readonly abandonSeconds?: number;
  /**
  * The denominator to be used in determining the compliance abandon rate.Valid values: ALL_CALLS, CALLS_THAT_REACHED_QUEUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#compliance_abandon_rate_denominator OutboundSettings#compliance_abandon_rate_denominator}
  */
  readonly complianceAbandonRateDenominator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#id OutboundSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum number of calls that can be placed per agent on any campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#max_calls_per_agent OutboundSettings#max_calls_per_agent}
  */
  readonly maxCallsPerAgent?: number;
  /**
  * The maximum percentage of lines that should be used for Outbound, expressed as a decimal in the range [0.0, 1.0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#max_line_utilization OutboundSettings#max_line_utilization}
  */
  readonly maxLineUtilization?: number;
  /**
  * Whether or not to reschedule time-zone blocked contacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#reschedule_time_zone_skipped_contacts OutboundSettings#reschedule_time_zone_skipped_contacts}
  */
  readonly rescheduleTimeZoneSkippedContacts?: boolean | cdktf.IResolvable;
  /**
  * automatic_time_zone_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#automatic_time_zone_mapping OutboundSettings#automatic_time_zone_mapping}
  */
  readonly automaticTimeZoneMapping?: OutboundSettingsAutomaticTimeZoneMapping[] | cdktf.IResolvable;
}
export interface OutboundSettingsAutomaticTimeZoneMappingCallableWindowsMapped {
  /**
  * The earliest time to dial a contact. Valid format is HH:mm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#earliest_callable_time OutboundSettings#earliest_callable_time}
  */
  readonly earliestCallableTime?: string;
  /**
  * The latest time to dial a contact. Valid format is HH:mm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#latest_callable_time OutboundSettings#latest_callable_time}
  */
  readonly latestCallableTime?: string;
}

export function outboundSettingsAutomaticTimeZoneMappingCallableWindowsMappedToTerraform(struct?: OutboundSettingsAutomaticTimeZoneMappingCallableWindowsMappedOutputReference | OutboundSettingsAutomaticTimeZoneMappingCallableWindowsMapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest_callable_time: cdktf.stringToTerraform(struct!.earliestCallableTime),
    latest_callable_time: cdktf.stringToTerraform(struct!.latestCallableTime),
  }
}


export function outboundSettingsAutomaticTimeZoneMappingCallableWindowsMappedToHclTerraform(struct?: OutboundSettingsAutomaticTimeZoneMappingCallableWindowsMappedOutputReference | OutboundSettingsAutomaticTimeZoneMappingCallableWindowsMapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest_callable_time: {
      value: cdktf.stringToHclTerraform(struct!.earliestCallableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest_callable_time: {
      value: cdktf.stringToHclTerraform(struct!.latestCallableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundSettingsAutomaticTimeZoneMappingCallableWindowsMappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundSettingsAutomaticTimeZoneMappingCallableWindowsMapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliestCallableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliestCallableTime = this._earliestCallableTime;
    }
    if (this._latestCallableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestCallableTime = this._latestCallableTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundSettingsAutomaticTimeZoneMappingCallableWindowsMapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._earliestCallableTime = undefined;
      this._latestCallableTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._earliestCallableTime = value.earliestCallableTime;
      this._latestCallableTime = value.latestCallableTime;
    }
  }

  // earliest_callable_time - computed: false, optional: true, required: false
  private _earliestCallableTime?: string; 
  public get earliestCallableTime() {
    return this.getStringAttribute('earliest_callable_time');
  }
  public set earliestCallableTime(value: string) {
    this._earliestCallableTime = value;
  }
  public resetEarliestCallableTime() {
    this._earliestCallableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestCallableTimeInput() {
    return this._earliestCallableTime;
  }

  // latest_callable_time - computed: false, optional: true, required: false
  private _latestCallableTime?: string; 
  public get latestCallableTime() {
    return this.getStringAttribute('latest_callable_time');
  }
  public set latestCallableTime(value: string) {
    this._latestCallableTime = value;
  }
  public resetLatestCallableTime() {
    this._latestCallableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestCallableTimeInput() {
    return this._latestCallableTime;
  }
}
export interface OutboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmapped {
  /**
  * The earliest time to dial a contact. Valid format is HH:mm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#earliest_callable_time OutboundSettings#earliest_callable_time}
  */
  readonly earliestCallableTime?: string;
  /**
  * The latest time to dial a contact. Valid format is HH:mm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#latest_callable_time OutboundSettings#latest_callable_time}
  */
  readonly latestCallableTime?: string;
  /**
  * The time zone to use for contacts that cannot be mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#time_zone_id OutboundSettings#time_zone_id}
  */
  readonly timeZoneId?: string;
}

export function outboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmappedToTerraform(struct?: OutboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmappedOutputReference | OutboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest_callable_time: cdktf.stringToTerraform(struct!.earliestCallableTime),
    latest_callable_time: cdktf.stringToTerraform(struct!.latestCallableTime),
    time_zone_id: cdktf.stringToTerraform(struct!.timeZoneId),
  }
}


export function outboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmappedToHclTerraform(struct?: OutboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmappedOutputReference | OutboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest_callable_time: {
      value: cdktf.stringToHclTerraform(struct!.earliestCallableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest_callable_time: {
      value: cdktf.stringToHclTerraform(struct!.latestCallableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.timeZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliestCallableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliestCallableTime = this._earliestCallableTime;
    }
    if (this._latestCallableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestCallableTime = this._latestCallableTime;
    }
    if (this._timeZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZoneId = this._timeZoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._earliestCallableTime = undefined;
      this._latestCallableTime = undefined;
      this._timeZoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._earliestCallableTime = value.earliestCallableTime;
      this._latestCallableTime = value.latestCallableTime;
      this._timeZoneId = value.timeZoneId;
    }
  }

  // earliest_callable_time - computed: false, optional: true, required: false
  private _earliestCallableTime?: string; 
  public get earliestCallableTime() {
    return this.getStringAttribute('earliest_callable_time');
  }
  public set earliestCallableTime(value: string) {
    this._earliestCallableTime = value;
  }
  public resetEarliestCallableTime() {
    this._earliestCallableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestCallableTimeInput() {
    return this._earliestCallableTime;
  }

  // latest_callable_time - computed: false, optional: true, required: false
  private _latestCallableTime?: string; 
  public get latestCallableTime() {
    return this.getStringAttribute('latest_callable_time');
  }
  public set latestCallableTime(value: string) {
    this._latestCallableTime = value;
  }
  public resetLatestCallableTime() {
    this._latestCallableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestCallableTimeInput() {
    return this._latestCallableTime;
  }

  // time_zone_id - computed: false, optional: true, required: false
  private _timeZoneId?: string; 
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  public resetTimeZoneId() {
    this._timeZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId;
  }
}
export interface OutboundSettingsAutomaticTimeZoneMappingCallableWindows {
  /**
  * mapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#mapped OutboundSettings#mapped}
  */
  readonly mapped?: OutboundSettingsAutomaticTimeZoneMappingCallableWindowsMapped;
  /**
  * unmapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#unmapped OutboundSettings#unmapped}
  */
  readonly unmapped?: OutboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmapped;
}

export function outboundSettingsAutomaticTimeZoneMappingCallableWindowsToTerraform(struct?: OutboundSettingsAutomaticTimeZoneMappingCallableWindowsOutputReference | OutboundSettingsAutomaticTimeZoneMappingCallableWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapped: outboundSettingsAutomaticTimeZoneMappingCallableWindowsMappedToTerraform(struct!.mapped),
    unmapped: outboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmappedToTerraform(struct!.unmapped),
  }
}


export function outboundSettingsAutomaticTimeZoneMappingCallableWindowsToHclTerraform(struct?: OutboundSettingsAutomaticTimeZoneMappingCallableWindowsOutputReference | OutboundSettingsAutomaticTimeZoneMappingCallableWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapped: {
      value: outboundSettingsAutomaticTimeZoneMappingCallableWindowsMappedToHclTerraform(struct!.mapped),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundSettingsAutomaticTimeZoneMappingCallableWindowsMappedList",
    },
    unmapped: {
      value: outboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmappedToHclTerraform(struct!.unmapped),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundSettingsAutomaticTimeZoneMappingCallableWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundSettingsAutomaticTimeZoneMappingCallableWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapped = this._mapped?.internalValue;
    }
    if (this._unmapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmapped = this._unmapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundSettingsAutomaticTimeZoneMappingCallableWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mapped.internalValue = undefined;
      this._unmapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mapped.internalValue = value.mapped;
      this._unmapped.internalValue = value.unmapped;
    }
  }

  // mapped - computed: false, optional: true, required: false
  private _mapped = new OutboundSettingsAutomaticTimeZoneMappingCallableWindowsMappedOutputReference(this, "mapped");
  public get mapped() {
    return this._mapped;
  }
  public putMapped(value: OutboundSettingsAutomaticTimeZoneMappingCallableWindowsMapped) {
    this._mapped.internalValue = value;
  }
  public resetMapped() {
    this._mapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedInput() {
    return this._mapped.internalValue;
  }

  // unmapped - computed: false, optional: true, required: false
  private _unmapped = new OutboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmappedOutputReference(this, "unmapped");
  public get unmapped() {
    return this._unmapped;
  }
  public putUnmapped(value: OutboundSettingsAutomaticTimeZoneMappingCallableWindowsUnmapped) {
    this._unmapped.internalValue = value;
  }
  public resetUnmapped() {
    this._unmapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmappedInput() {
    return this._unmapped.internalValue;
  }
}
export interface OutboundSettingsAutomaticTimeZoneMapping {
  /**
  * The countries that are supported for automatic time zone mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#supported_countries OutboundSettings#supported_countries}
  */
  readonly supportedCountries?: string[];
  /**
  * callable_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#callable_windows OutboundSettings#callable_windows}
  */
  readonly callableWindows?: OutboundSettingsAutomaticTimeZoneMappingCallableWindows;
}

export function outboundSettingsAutomaticTimeZoneMappingToTerraform(struct?: OutboundSettingsAutomaticTimeZoneMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    supported_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedCountries),
    callable_windows: outboundSettingsAutomaticTimeZoneMappingCallableWindowsToTerraform(struct!.callableWindows),
  }
}


export function outboundSettingsAutomaticTimeZoneMappingToHclTerraform(struct?: OutboundSettingsAutomaticTimeZoneMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    supported_countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedCountries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    callable_windows: {
      value: outboundSettingsAutomaticTimeZoneMappingCallableWindowsToHclTerraform(struct!.callableWindows),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundSettingsAutomaticTimeZoneMappingCallableWindowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundSettingsAutomaticTimeZoneMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundSettingsAutomaticTimeZoneMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._supportedCountries !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedCountries = this._supportedCountries;
    }
    if (this._callableWindows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callableWindows = this._callableWindows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundSettingsAutomaticTimeZoneMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._supportedCountries = undefined;
      this._callableWindows.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._supportedCountries = value.supportedCountries;
      this._callableWindows.internalValue = value.callableWindows;
    }
  }

  // supported_countries - computed: false, optional: true, required: false
  private _supportedCountries?: string[]; 
  public get supportedCountries() {
    return this.getListAttribute('supported_countries');
  }
  public set supportedCountries(value: string[]) {
    this._supportedCountries = value;
  }
  public resetSupportedCountries() {
    this._supportedCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedCountriesInput() {
    return this._supportedCountries;
  }

  // callable_windows - computed: false, optional: true, required: false
  private _callableWindows = new OutboundSettingsAutomaticTimeZoneMappingCallableWindowsOutputReference(this, "callable_windows");
  public get callableWindows() {
    return this._callableWindows;
  }
  public putCallableWindows(value: OutboundSettingsAutomaticTimeZoneMappingCallableWindows) {
    this._callableWindows.internalValue = value;
  }
  public resetCallableWindows() {
    this._callableWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableWindowsInput() {
    return this._callableWindows.internalValue;
  }
}

export class OutboundSettingsAutomaticTimeZoneMappingList extends cdktf.ComplexList {
  public internalValue? : OutboundSettingsAutomaticTimeZoneMapping[] | cdktf.IResolvable

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
  public get(index: number): OutboundSettingsAutomaticTimeZoneMappingOutputReference {
    return new OutboundSettingsAutomaticTimeZoneMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings genesyscloud_outbound_settings}
*/
export class OutboundSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundSettings to import
  * @param importFromId The id of the existing OutboundSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_settings genesyscloud_outbound_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OutboundSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_settings',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abandonSeconds = config.abandonSeconds;
    this._complianceAbandonRateDenominator = config.complianceAbandonRateDenominator;
    this._id = config.id;
    this._maxCallsPerAgent = config.maxCallsPerAgent;
    this._maxLineUtilization = config.maxLineUtilization;
    this._rescheduleTimeZoneSkippedContacts = config.rescheduleTimeZoneSkippedContacts;
    this._automaticTimeZoneMapping.internalValue = config.automaticTimeZoneMapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abandon_seconds - computed: false, optional: true, required: false
  private _abandonSeconds?: number; 
  public get abandonSeconds() {
    return this.getNumberAttribute('abandon_seconds');
  }
  public set abandonSeconds(value: number) {
    this._abandonSeconds = value;
  }
  public resetAbandonSeconds() {
    this._abandonSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonSecondsInput() {
    return this._abandonSeconds;
  }

  // compliance_abandon_rate_denominator - computed: false, optional: true, required: false
  private _complianceAbandonRateDenominator?: string; 
  public get complianceAbandonRateDenominator() {
    return this.getStringAttribute('compliance_abandon_rate_denominator');
  }
  public set complianceAbandonRateDenominator(value: string) {
    this._complianceAbandonRateDenominator = value;
  }
  public resetComplianceAbandonRateDenominator() {
    this._complianceAbandonRateDenominator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceAbandonRateDenominatorInput() {
    return this._complianceAbandonRateDenominator;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_calls_per_agent - computed: false, optional: true, required: false
  private _maxCallsPerAgent?: number; 
  public get maxCallsPerAgent() {
    return this.getNumberAttribute('max_calls_per_agent');
  }
  public set maxCallsPerAgent(value: number) {
    this._maxCallsPerAgent = value;
  }
  public resetMaxCallsPerAgent() {
    this._maxCallsPerAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCallsPerAgentInput() {
    return this._maxCallsPerAgent;
  }

  // max_line_utilization - computed: false, optional: true, required: false
  private _maxLineUtilization?: number; 
  public get maxLineUtilization() {
    return this.getNumberAttribute('max_line_utilization');
  }
  public set maxLineUtilization(value: number) {
    this._maxLineUtilization = value;
  }
  public resetMaxLineUtilization() {
    this._maxLineUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLineUtilizationInput() {
    return this._maxLineUtilization;
  }

  // reschedule_time_zone_skipped_contacts - computed: false, optional: true, required: false
  private _rescheduleTimeZoneSkippedContacts?: boolean | cdktf.IResolvable; 
  public get rescheduleTimeZoneSkippedContacts() {
    return this.getBooleanAttribute('reschedule_time_zone_skipped_contacts');
  }
  public set rescheduleTimeZoneSkippedContacts(value: boolean | cdktf.IResolvable) {
    this._rescheduleTimeZoneSkippedContacts = value;
  }
  public resetRescheduleTimeZoneSkippedContacts() {
    this._rescheduleTimeZoneSkippedContacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescheduleTimeZoneSkippedContactsInput() {
    return this._rescheduleTimeZoneSkippedContacts;
  }

  // automatic_time_zone_mapping - computed: false, optional: true, required: false
  private _automaticTimeZoneMapping = new OutboundSettingsAutomaticTimeZoneMappingList(this, "automatic_time_zone_mapping", false);
  public get automaticTimeZoneMapping() {
    return this._automaticTimeZoneMapping;
  }
  public putAutomaticTimeZoneMapping(value: OutboundSettingsAutomaticTimeZoneMapping[] | cdktf.IResolvable) {
    this._automaticTimeZoneMapping.internalValue = value;
  }
  public resetAutomaticTimeZoneMapping() {
    this._automaticTimeZoneMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticTimeZoneMappingInput() {
    return this._automaticTimeZoneMapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abandon_seconds: cdktf.numberToTerraform(this._abandonSeconds),
      compliance_abandon_rate_denominator: cdktf.stringToTerraform(this._complianceAbandonRateDenominator),
      id: cdktf.stringToTerraform(this._id),
      max_calls_per_agent: cdktf.numberToTerraform(this._maxCallsPerAgent),
      max_line_utilization: cdktf.numberToTerraform(this._maxLineUtilization),
      reschedule_time_zone_skipped_contacts: cdktf.booleanToTerraform(this._rescheduleTimeZoneSkippedContacts),
      automatic_time_zone_mapping: cdktf.listMapper(outboundSettingsAutomaticTimeZoneMappingToTerraform, true)(this._automaticTimeZoneMapping.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abandon_seconds: {
        value: cdktf.numberToHclTerraform(this._abandonSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compliance_abandon_rate_denominator: {
        value: cdktf.stringToHclTerraform(this._complianceAbandonRateDenominator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_calls_per_agent: {
        value: cdktf.numberToHclTerraform(this._maxCallsPerAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_line_utilization: {
        value: cdktf.numberToHclTerraform(this._maxLineUtilization),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reschedule_time_zone_skipped_contacts: {
        value: cdktf.booleanToHclTerraform(this._rescheduleTimeZoneSkippedContacts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automatic_time_zone_mapping: {
        value: cdktf.listMapperHcl(outboundSettingsAutomaticTimeZoneMappingToHclTerraform, true)(this._automaticTimeZoneMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundSettingsAutomaticTimeZoneMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
