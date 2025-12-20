// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelephonyProvidersEdgesSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The caller ID value for the site. The callerID must be a valid E.164 formatted phone number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#caller_id TelephonyProvidersEdgesSite#caller_id}
  */
  readonly callerId?: string;
  /**
  * The caller name for the site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#caller_name TelephonyProvidersEdgesSite#caller_name}
  */
  readonly callerName?: string;
  /**
  * The resource's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#description TelephonyProvidersEdgesSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#id TelephonyProvidersEdgesSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Site location ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#location_id TelephonyProvidersEdgesSite#location_id}
  */
  readonly locationId: string;
  /**
  * Media model for the site Valid Values: Premises, Cloud. Changing the media_model attribute will cause the site object to be dropped and created with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#media_model TelephonyProvidersEdgesSite#media_model}
  */
  readonly mediaModel: string;
  /**
  * The ordered list of AWS regions through which media can stream. A full list of available media regions can be found at the GET /api/v2/telephony/mediaregions endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#media_regions TelephonyProvidersEdgesSite#media_regions}
  */
  readonly mediaRegions?: string[];
  /**
  * Latency based on media region Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#media_regions_use_latency_based TelephonyProvidersEdgesSite#media_regions_use_latency_based}
  */
  readonly mediaRegionsUseLatencyBased?: boolean | cdktf.IResolvable;
  /**
  * The name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#name TelephonyProvidersEdgesSite#name}
  */
  readonly name: string;
  /**
  * Used for primary phone edge assignment on physical edges only.  List of primary sites the phones can be assigned to. If no primary_sites are defined, the site id for this site will be used as the primary site id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#primary_sites TelephonyProvidersEdgesSite#primary_sites}
  */
  readonly primarySites?: string[];
  /**
  * Used for secondary phone edge assignment on physical edges only.  List of secondary sites the phones can be assigned to.  If no primary_sites or secondary_sites are defined then the current site will defined as primary and secondary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#secondary_sites TelephonyProvidersEdgesSite#secondary_sites}
  */
  readonly secondarySites?: string[];
  /**
  * Set this site as the default site for the organization. Only one genesyscloud_telephony_providers_edges_site resource should be set as the default. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#set_as_default_site TelephonyProvidersEdgesSite#set_as_default_site}
  */
  readonly setAsDefaultSite?: boolean | cdktf.IResolvable;
  /**
  * edge_auto_update_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#edge_auto_update_config TelephonyProvidersEdgesSite#edge_auto_update_config}
  */
  readonly edgeAutoUpdateConfig?: TelephonyProvidersEdgesSiteEdgeAutoUpdateConfig;
  /**
  * number_plans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#number_plans TelephonyProvidersEdgesSite#number_plans}
  */
  readonly numberPlans?: TelephonyProvidersEdgesSiteNumberPlans[] | cdktf.IResolvable;
}
export interface TelephonyProvidersEdgesSiteEdgeAutoUpdateConfig {
  /**
  * Date time is represented as an ISO-8601 string without a timezone. For example: yyyy-MM-ddTHH:mm:ss.SSS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#end TelephonyProvidersEdgesSite#end}
  */
  readonly end: string;
  /**
  * A reoccurring rule for updating the Edges assigned to the site. The only supported frequencies are daily and weekly. Weekly frequencies require a day list with at least oneday specified. All other configurations are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#rrule TelephonyProvidersEdgesSite#rrule}
  */
  readonly rrule: string;
  /**
  * Date time is represented as an ISO-8601 string without a timezone. For example: yyyy-MM-ddTHH:mm:ss.SSS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#start TelephonyProvidersEdgesSite#start}
  */
  readonly start: string;
  /**
  * The timezone of the window in which any updates to the edges assigned to the site can be applied. The minimum size of the window is 2 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#time_zone TelephonyProvidersEdgesSite#time_zone}
  */
  readonly timeZone: string;
}

export function telephonyProvidersEdgesSiteEdgeAutoUpdateConfigToTerraform(struct?: TelephonyProvidersEdgesSiteEdgeAutoUpdateConfigOutputReference | TelephonyProvidersEdgesSiteEdgeAutoUpdateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    rrule: cdktf.stringToTerraform(struct!.rrule),
    start: cdktf.stringToTerraform(struct!.start),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function telephonyProvidersEdgesSiteEdgeAutoUpdateConfigToHclTerraform(struct?: TelephonyProvidersEdgesSiteEdgeAutoUpdateConfigOutputReference | TelephonyProvidersEdgesSiteEdgeAutoUpdateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rrule: {
      value: cdktf.stringToHclTerraform(struct!.rrule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TelephonyProvidersEdgesSiteEdgeAutoUpdateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TelephonyProvidersEdgesSiteEdgeAutoUpdateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._rrule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrule = this._rrule;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TelephonyProvidersEdgesSiteEdgeAutoUpdateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._rrule = undefined;
      this._start = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._rrule = value.rrule;
      this._start = value.start;
      this._timeZone = value.timeZone;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // rrule - computed: false, optional: false, required: true
  private _rrule?: string; 
  public get rrule() {
    return this.getStringAttribute('rrule');
  }
  public set rrule(value: string) {
    this._rrule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rruleInput() {
    return this._rrule;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface TelephonyProvidersEdgesSiteNumberPlansDigitLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#end TelephonyProvidersEdgesSite#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#start TelephonyProvidersEdgesSite#start}
  */
  readonly start?: string;
}

export function telephonyProvidersEdgesSiteNumberPlansDigitLengthToTerraform(struct?: TelephonyProvidersEdgesSiteNumberPlansDigitLengthOutputReference | TelephonyProvidersEdgesSiteNumberPlansDigitLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function telephonyProvidersEdgesSiteNumberPlansDigitLengthToHclTerraform(struct?: TelephonyProvidersEdgesSiteNumberPlansDigitLengthOutputReference | TelephonyProvidersEdgesSiteNumberPlansDigitLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TelephonyProvidersEdgesSiteNumberPlansDigitLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TelephonyProvidersEdgesSiteNumberPlansDigitLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TelephonyProvidersEdgesSiteNumberPlansDigitLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface TelephonyProvidersEdgesSiteNumberPlansNumbers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#end TelephonyProvidersEdgesSite#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#start TelephonyProvidersEdgesSite#start}
  */
  readonly start?: string;
}

export function telephonyProvidersEdgesSiteNumberPlansNumbersToTerraform(struct?: TelephonyProvidersEdgesSiteNumberPlansNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function telephonyProvidersEdgesSiteNumberPlansNumbersToHclTerraform(struct?: TelephonyProvidersEdgesSiteNumberPlansNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TelephonyProvidersEdgesSiteNumberPlansNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TelephonyProvidersEdgesSiteNumberPlansNumbers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TelephonyProvidersEdgesSiteNumberPlansNumbers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class TelephonyProvidersEdgesSiteNumberPlansNumbersList extends cdktf.ComplexList {
  public internalValue? : TelephonyProvidersEdgesSiteNumberPlansNumbers[] | cdktf.IResolvable

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
  public get(index: number): TelephonyProvidersEdgesSiteNumberPlansNumbersOutputReference {
    return new TelephonyProvidersEdgesSiteNumberPlansNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TelephonyProvidersEdgesSiteNumberPlans {
  /**
  * Used to classify this number plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#classification TelephonyProvidersEdgesSite#classification}
  */
  readonly classification: string;
  /**
  * Use regular expression capture groups to build the normalized number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#match_format TelephonyProvidersEdgesSite#match_format}
  */
  readonly matchFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#match_type TelephonyProvidersEdgesSite#match_type}
  */
  readonly matchType: string;
  /**
  * The name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#name TelephonyProvidersEdgesSite#name}
  */
  readonly name: string;
  /**
  * Use regular expression capture groups to build the normalized number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#normalized_format TelephonyProvidersEdgesSite#normalized_format}
  */
  readonly normalizedFormat?: string;
  /**
  * digit_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#digit_length TelephonyProvidersEdgesSite#digit_length}
  */
  readonly digitLength?: TelephonyProvidersEdgesSiteNumberPlansDigitLength;
  /**
  * numbers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#numbers TelephonyProvidersEdgesSite#numbers}
  */
  readonly numbers?: TelephonyProvidersEdgesSiteNumberPlansNumbers[] | cdktf.IResolvable;
}

export function telephonyProvidersEdgesSiteNumberPlansToTerraform(struct?: TelephonyProvidersEdgesSiteNumberPlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    match_format: cdktf.stringToTerraform(struct!.matchFormat),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    normalized_format: cdktf.stringToTerraform(struct!.normalizedFormat),
    digit_length: telephonyProvidersEdgesSiteNumberPlansDigitLengthToTerraform(struct!.digitLength),
    numbers: cdktf.listMapper(telephonyProvidersEdgesSiteNumberPlansNumbersToTerraform, true)(struct!.numbers),
  }
}


export function telephonyProvidersEdgesSiteNumberPlansToHclTerraform(struct?: TelephonyProvidersEdgesSiteNumberPlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classification: {
      value: cdktf.stringToHclTerraform(struct!.classification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_format: {
      value: cdktf.stringToHclTerraform(struct!.matchFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    normalized_format: {
      value: cdktf.stringToHclTerraform(struct!.normalizedFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    digit_length: {
      value: telephonyProvidersEdgesSiteNumberPlansDigitLengthToHclTerraform(struct!.digitLength),
      isBlock: true,
      type: "list",
      storageClassType: "TelephonyProvidersEdgesSiteNumberPlansDigitLengthList",
    },
    numbers: {
      value: cdktf.listMapperHcl(telephonyProvidersEdgesSiteNumberPlansNumbersToHclTerraform, true)(struct!.numbers),
      isBlock: true,
      type: "list",
      storageClassType: "TelephonyProvidersEdgesSiteNumberPlansNumbersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TelephonyProvidersEdgesSiteNumberPlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TelephonyProvidersEdgesSiteNumberPlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._matchFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFormat = this._matchFormat;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._normalizedFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalizedFormat = this._normalizedFormat;
    }
    if (this._digitLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitLength = this._digitLength?.internalValue;
    }
    if (this._numbers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numbers = this._numbers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TelephonyProvidersEdgesSiteNumberPlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classification = undefined;
      this._matchFormat = undefined;
      this._matchType = undefined;
      this._name = undefined;
      this._normalizedFormat = undefined;
      this._digitLength.internalValue = undefined;
      this._numbers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classification = value.classification;
      this._matchFormat = value.matchFormat;
      this._matchType = value.matchType;
      this._name = value.name;
      this._normalizedFormat = value.normalizedFormat;
      this._digitLength.internalValue = value.digitLength;
      this._numbers.internalValue = value.numbers;
    }
  }

  // classification - computed: false, optional: false, required: true
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
  }

  // match_format - computed: false, optional: true, required: false
  private _matchFormat?: string; 
  public get matchFormat() {
    return this.getStringAttribute('match_format');
  }
  public set matchFormat(value: string) {
    this._matchFormat = value;
  }
  public resetMatchFormat() {
    this._matchFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFormatInput() {
    return this._matchFormat;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // normalized_format - computed: false, optional: true, required: false
  private _normalizedFormat?: string; 
  public get normalizedFormat() {
    return this.getStringAttribute('normalized_format');
  }
  public set normalizedFormat(value: string) {
    this._normalizedFormat = value;
  }
  public resetNormalizedFormat() {
    this._normalizedFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizedFormatInput() {
    return this._normalizedFormat;
  }

  // digit_length - computed: false, optional: true, required: false
  private _digitLength = new TelephonyProvidersEdgesSiteNumberPlansDigitLengthOutputReference(this, "digit_length");
  public get digitLength() {
    return this._digitLength;
  }
  public putDigitLength(value: TelephonyProvidersEdgesSiteNumberPlansDigitLength) {
    this._digitLength.internalValue = value;
  }
  public resetDigitLength() {
    this._digitLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitLengthInput() {
    return this._digitLength.internalValue;
  }

  // numbers - computed: false, optional: true, required: false
  private _numbers = new TelephonyProvidersEdgesSiteNumberPlansNumbersList(this, "numbers", false);
  public get numbers() {
    return this._numbers;
  }
  public putNumbers(value: TelephonyProvidersEdgesSiteNumberPlansNumbers[] | cdktf.IResolvable) {
    this._numbers.internalValue = value;
  }
  public resetNumbers() {
    this._numbers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numbersInput() {
    return this._numbers.internalValue;
  }
}

export class TelephonyProvidersEdgesSiteNumberPlansList extends cdktf.ComplexList {
  public internalValue? : TelephonyProvidersEdgesSiteNumberPlans[] | cdktf.IResolvable

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
  public get(index: number): TelephonyProvidersEdgesSiteNumberPlansOutputReference {
    return new TelephonyProvidersEdgesSiteNumberPlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site genesyscloud_telephony_providers_edges_site}
*/
export class TelephonyProvidersEdgesSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_telephony_providers_edges_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelephonyProvidersEdgesSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelephonyProvidersEdgesSite to import
  * @param importFromId The id of the existing TelephonyProvidersEdgesSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelephonyProvidersEdgesSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_telephony_providers_edges_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_site genesyscloud_telephony_providers_edges_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelephonyProvidersEdgesSiteConfig
  */
  public constructor(scope: Construct, id: string, config: TelephonyProvidersEdgesSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_telephony_providers_edges_site',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._callerId = config.callerId;
    this._callerName = config.callerName;
    this._description = config.description;
    this._id = config.id;
    this._locationId = config.locationId;
    this._mediaModel = config.mediaModel;
    this._mediaRegions = config.mediaRegions;
    this._mediaRegionsUseLatencyBased = config.mediaRegionsUseLatencyBased;
    this._name = config.name;
    this._primarySites = config.primarySites;
    this._secondarySites = config.secondarySites;
    this._setAsDefaultSite = config.setAsDefaultSite;
    this._edgeAutoUpdateConfig.internalValue = config.edgeAutoUpdateConfig;
    this._numberPlans.internalValue = config.numberPlans;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caller_id - computed: false, optional: true, required: false
  private _callerId?: string; 
  public get callerId() {
    return this.getStringAttribute('caller_id');
  }
  public set callerId(value: string) {
    this._callerId = value;
  }
  public resetCallerId() {
    this._callerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerIdInput() {
    return this._callerId;
  }

  // caller_name - computed: false, optional: true, required: false
  private _callerName?: string; 
  public get callerName() {
    return this.getStringAttribute('caller_name');
  }
  public set callerName(value: string) {
    this._callerName = value;
  }
  public resetCallerName() {
    this._callerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerNameInput() {
    return this._callerName;
  }

  // description - computed: false, optional: true, required: false
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

  // location_id - computed: false, optional: false, required: true
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getBooleanAttribute('managed');
  }

  // media_model - computed: false, optional: false, required: true
  private _mediaModel?: string; 
  public get mediaModel() {
    return this.getStringAttribute('media_model');
  }
  public set mediaModel(value: string) {
    this._mediaModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaModelInput() {
    return this._mediaModel;
  }

  // media_regions - computed: true, optional: true, required: false
  private _mediaRegions?: string[]; 
  public get mediaRegions() {
    return this.getListAttribute('media_regions');
  }
  public set mediaRegions(value: string[]) {
    this._mediaRegions = value;
  }
  public resetMediaRegions() {
    this._mediaRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaRegionsInput() {
    return this._mediaRegions;
  }

  // media_regions_use_latency_based - computed: false, optional: true, required: false
  private _mediaRegionsUseLatencyBased?: boolean | cdktf.IResolvable; 
  public get mediaRegionsUseLatencyBased() {
    return this.getBooleanAttribute('media_regions_use_latency_based');
  }
  public set mediaRegionsUseLatencyBased(value: boolean | cdktf.IResolvable) {
    this._mediaRegionsUseLatencyBased = value;
  }
  public resetMediaRegionsUseLatencyBased() {
    this._mediaRegionsUseLatencyBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaRegionsUseLatencyBasedInput() {
    return this._mediaRegionsUseLatencyBased;
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

  // primary_sites - computed: true, optional: true, required: false
  private _primarySites?: string[]; 
  public get primarySites() {
    return this.getListAttribute('primary_sites');
  }
  public set primarySites(value: string[]) {
    this._primarySites = value;
  }
  public resetPrimarySites() {
    this._primarySites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySitesInput() {
    return this._primarySites;
  }

  // secondary_sites - computed: true, optional: true, required: false
  private _secondarySites?: string[]; 
  public get secondarySites() {
    return this.getListAttribute('secondary_sites');
  }
  public set secondarySites(value: string[]) {
    this._secondarySites = value;
  }
  public resetSecondarySites() {
    this._secondarySites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySitesInput() {
    return this._secondarySites;
  }

  // set_as_default_site - computed: false, optional: true, required: false
  private _setAsDefaultSite?: boolean | cdktf.IResolvable; 
  public get setAsDefaultSite() {
    return this.getBooleanAttribute('set_as_default_site');
  }
  public set setAsDefaultSite(value: boolean | cdktf.IResolvable) {
    this._setAsDefaultSite = value;
  }
  public resetSetAsDefaultSite() {
    this._setAsDefaultSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsDefaultSiteInput() {
    return this._setAsDefaultSite;
  }

  // edge_auto_update_config - computed: false, optional: true, required: false
  private _edgeAutoUpdateConfig = new TelephonyProvidersEdgesSiteEdgeAutoUpdateConfigOutputReference(this, "edge_auto_update_config");
  public get edgeAutoUpdateConfig() {
    return this._edgeAutoUpdateConfig;
  }
  public putEdgeAutoUpdateConfig(value: TelephonyProvidersEdgesSiteEdgeAutoUpdateConfig) {
    this._edgeAutoUpdateConfig.internalValue = value;
  }
  public resetEdgeAutoUpdateConfig() {
    this._edgeAutoUpdateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeAutoUpdateConfigInput() {
    return this._edgeAutoUpdateConfig.internalValue;
  }

  // number_plans - computed: false, optional: true, required: false
  private _numberPlans = new TelephonyProvidersEdgesSiteNumberPlansList(this, "number_plans", false);
  public get numberPlans() {
    return this._numberPlans;
  }
  public putNumberPlans(value: TelephonyProvidersEdgesSiteNumberPlans[] | cdktf.IResolvable) {
    this._numberPlans.internalValue = value;
  }
  public resetNumberPlans() {
    this._numberPlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberPlansInput() {
    return this._numberPlans.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      caller_id: cdktf.stringToTerraform(this._callerId),
      caller_name: cdktf.stringToTerraform(this._callerName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location_id: cdktf.stringToTerraform(this._locationId),
      media_model: cdktf.stringToTerraform(this._mediaModel),
      media_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mediaRegions),
      media_regions_use_latency_based: cdktf.booleanToTerraform(this._mediaRegionsUseLatencyBased),
      name: cdktf.stringToTerraform(this._name),
      primary_sites: cdktf.listMapper(cdktf.stringToTerraform, false)(this._primarySites),
      secondary_sites: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondarySites),
      set_as_default_site: cdktf.booleanToTerraform(this._setAsDefaultSite),
      edge_auto_update_config: telephonyProvidersEdgesSiteEdgeAutoUpdateConfigToTerraform(this._edgeAutoUpdateConfig.internalValue),
      number_plans: cdktf.listMapper(telephonyProvidersEdgesSiteNumberPlansToTerraform, true)(this._numberPlans.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      caller_id: {
        value: cdktf.stringToHclTerraform(this._callerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caller_name: {
        value: cdktf.stringToHclTerraform(this._callerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      location_id: {
        value: cdktf.stringToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_model: {
        value: cdktf.stringToHclTerraform(this._mediaModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mediaRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      media_regions_use_latency_based: {
        value: cdktf.booleanToHclTerraform(this._mediaRegionsUseLatencyBased),
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
      primary_sites: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._primarySites),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secondary_sites: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondarySites),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      set_as_default_site: {
        value: cdktf.booleanToHclTerraform(this._setAsDefaultSite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edge_auto_update_config: {
        value: telephonyProvidersEdgesSiteEdgeAutoUpdateConfigToHclTerraform(this._edgeAutoUpdateConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TelephonyProvidersEdgesSiteEdgeAutoUpdateConfigList",
      },
      number_plans: {
        value: cdktf.listMapperHcl(telephonyProvidersEdgesSiteNumberPlansToHclTerraform, true)(this._numberPlans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TelephonyProvidersEdgesSiteNumberPlansList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
