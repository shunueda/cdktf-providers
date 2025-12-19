// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbZoneStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#id DataThunderGslbZoneStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the name for the DNS zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#name DataThunderGslbZoneStats#name}
  */
  readonly name: string;
  /**
  * dns_caa_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#dns_caa_record_list DataThunderGslbZoneStats#dns_caa_record_list}
  */
  readonly dnsCaaRecordList?: DataThunderGslbZoneStatsDnsCaaRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_mx_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#dns_mx_record_list DataThunderGslbZoneStats#dns_mx_record_list}
  */
  readonly dnsMxRecordList?: DataThunderGslbZoneStatsDnsMxRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ns_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#dns_ns_record_list DataThunderGslbZoneStats#dns_ns_record_list}
  */
  readonly dnsNsRecordList?: DataThunderGslbZoneStatsDnsNsRecordListStruct[] | cdktf.IResolvable;
  /**
  * service_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#service_list DataThunderGslbZoneStats#service_list}
  */
  readonly serviceList?: DataThunderGslbZoneStatsServiceListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsStats;
}
export interface DataThunderGslbZoneStatsDnsCaaRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#hits DataThunderGslbZoneStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneStatsDnsCaaRecordListStatsToTerraform(struct?: DataThunderGslbZoneStatsDnsCaaRecordListStatsOutputReference | DataThunderGslbZoneStatsDnsCaaRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneStatsDnsCaaRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneStatsDnsCaaRecordListStatsOutputReference | DataThunderGslbZoneStatsDnsCaaRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsDnsCaaRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsDnsCaaRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsDnsCaaRecordListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
    }
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }
}
export interface DataThunderGslbZoneStatsDnsCaaRecordListStruct {
  /**
  * Issuer Critical Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#critical_flag DataThunderGslbZoneStats#critical_flag}
  */
  readonly criticalFlag: number;
  /**
  * Specify other property tags, only allowed lowercase alphanumeric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#property_tag DataThunderGslbZoneStats#property_tag}
  */
  readonly propertyTag: string;
  /**
  * Specify the Issuer Domain Name or a URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#rdata DataThunderGslbZoneStats#rdata}
  */
  readonly rdata: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsDnsCaaRecordListStats;
}

export function dataThunderGslbZoneStatsDnsCaaRecordListStructToTerraform(struct?: DataThunderGslbZoneStatsDnsCaaRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical_flag: cdktf.numberToTerraform(struct!.criticalFlag),
    property_tag: cdktf.stringToTerraform(struct!.propertyTag),
    rdata: cdktf.stringToTerraform(struct!.rdata),
    stats: dataThunderGslbZoneStatsDnsCaaRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneStatsDnsCaaRecordListStructToHclTerraform(struct?: DataThunderGslbZoneStatsDnsCaaRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical_flag: {
      value: cdktf.numberToHclTerraform(struct!.criticalFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    property_tag: {
      value: cdktf.stringToHclTerraform(struct!.propertyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdata: {
      value: cdktf.stringToHclTerraform(struct!.rdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderGslbZoneStatsDnsCaaRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsDnsCaaRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsDnsCaaRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneStatsDnsCaaRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criticalFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalFlag = this._criticalFlag;
    }
    if (this._propertyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyTag = this._propertyTag;
    }
    if (this._rdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdata = this._rdata;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsDnsCaaRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criticalFlag = undefined;
      this._propertyTag = undefined;
      this._rdata = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criticalFlag = value.criticalFlag;
      this._propertyTag = value.propertyTag;
      this._rdata = value.rdata;
      this._stats.internalValue = value.stats;
    }
  }

  // critical_flag - computed: false, optional: false, required: true
  private _criticalFlag?: number; 
  public get criticalFlag() {
    return this.getNumberAttribute('critical_flag');
  }
  public set criticalFlag(value: number) {
    this._criticalFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalFlagInput() {
    return this._criticalFlag;
  }

  // property_tag - computed: false, optional: false, required: true
  private _propertyTag?: string; 
  public get propertyTag() {
    return this.getStringAttribute('property_tag');
  }
  public set propertyTag(value: string) {
    this._propertyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTagInput() {
    return this._propertyTag;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata?: string; 
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
  public set rdata(value: string) {
    this._rdata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsDnsCaaRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsDnsCaaRecordListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderGslbZoneStatsDnsCaaRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneStatsDnsCaaRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneStatsDnsCaaRecordListStructOutputReference {
    return new DataThunderGslbZoneStatsDnsCaaRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneStatsDnsMxRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#hits DataThunderGslbZoneStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneStatsDnsMxRecordListStatsToTerraform(struct?: DataThunderGslbZoneStatsDnsMxRecordListStatsOutputReference | DataThunderGslbZoneStatsDnsMxRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneStatsDnsMxRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneStatsDnsMxRecordListStatsOutputReference | DataThunderGslbZoneStatsDnsMxRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsDnsMxRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsDnsMxRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsDnsMxRecordListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
    }
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }
}
export interface DataThunderGslbZoneStatsDnsMxRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#mx_name DataThunderGslbZoneStats#mx_name}
  */
  readonly mxName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsDnsMxRecordListStats;
}

export function dataThunderGslbZoneStatsDnsMxRecordListStructToTerraform(struct?: DataThunderGslbZoneStatsDnsMxRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mx_name: cdktf.stringToTerraform(struct!.mxName),
    stats: dataThunderGslbZoneStatsDnsMxRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneStatsDnsMxRecordListStructToHclTerraform(struct?: DataThunderGslbZoneStatsDnsMxRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mx_name: {
      value: cdktf.stringToHclTerraform(struct!.mxName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderGslbZoneStatsDnsMxRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsDnsMxRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsDnsMxRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneStatsDnsMxRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxName = this._mxName;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsDnsMxRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mxName = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mxName = value.mxName;
      this._stats.internalValue = value.stats;
    }
  }

  // mx_name - computed: false, optional: false, required: true
  private _mxName?: string; 
  public get mxName() {
    return this.getStringAttribute('mx_name');
  }
  public set mxName(value: string) {
    this._mxName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mxNameInput() {
    return this._mxName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsDnsMxRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsDnsMxRecordListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderGslbZoneStatsDnsMxRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneStatsDnsMxRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneStatsDnsMxRecordListStructOutputReference {
    return new DataThunderGslbZoneStatsDnsMxRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneStatsDnsNsRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#hits DataThunderGslbZoneStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneStatsDnsNsRecordListStatsToTerraform(struct?: DataThunderGslbZoneStatsDnsNsRecordListStatsOutputReference | DataThunderGslbZoneStatsDnsNsRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneStatsDnsNsRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneStatsDnsNsRecordListStatsOutputReference | DataThunderGslbZoneStatsDnsNsRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsDnsNsRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsDnsNsRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsDnsNsRecordListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
    }
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }
}
export interface DataThunderGslbZoneStatsDnsNsRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#ns_name DataThunderGslbZoneStats#ns_name}
  */
  readonly nsName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsDnsNsRecordListStats;
}

export function dataThunderGslbZoneStatsDnsNsRecordListStructToTerraform(struct?: DataThunderGslbZoneStatsDnsNsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ns_name: cdktf.stringToTerraform(struct!.nsName),
    stats: dataThunderGslbZoneStatsDnsNsRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneStatsDnsNsRecordListStructToHclTerraform(struct?: DataThunderGslbZoneStatsDnsNsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ns_name: {
      value: cdktf.stringToHclTerraform(struct!.nsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderGslbZoneStatsDnsNsRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsDnsNsRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsDnsNsRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneStatsDnsNsRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsName = this._nsName;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsDnsNsRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsName = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsName = value.nsName;
      this._stats.internalValue = value.stats;
    }
  }

  // ns_name - computed: false, optional: false, required: true
  private _nsName?: string; 
  public get nsName() {
    return this.getStringAttribute('ns_name');
  }
  public set nsName(value: string) {
    this._nsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsNameInput() {
    return this._nsName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsDnsNsRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsDnsNsRecordListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderGslbZoneStatsDnsNsRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneStatsDnsNsRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneStatsDnsNsRecordListStructOutputReference {
    return new DataThunderGslbZoneStatsDnsNsRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsCaaRecordListStats {
  /**
  * Number of times the CAA has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#hits DataThunderGslbZoneStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneStatsServiceListDnsCaaRecordListStatsToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsCaaRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsCaaRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsCaaRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsCaaRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsCaaRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsCaaRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsCaaRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsCaaRecordListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
    }
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsCaaRecordListStruct {
  /**
  * Issuer Critical Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#critical_flag DataThunderGslbZoneStats#critical_flag}
  */
  readonly criticalFlag: number;
  /**
  * Specify other property tags, only allowed lowercase alphanumeric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#property_tag DataThunderGslbZoneStats#property_tag}
  */
  readonly propertyTag: string;
  /**
  * Specify the Issuer Domain Name or a URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#rdata DataThunderGslbZoneStats#rdata}
  */
  readonly rdata: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsServiceListDnsCaaRecordListStats;
}

export function dataThunderGslbZoneStatsServiceListDnsCaaRecordListStructToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsCaaRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical_flag: cdktf.numberToTerraform(struct!.criticalFlag),
    property_tag: cdktf.stringToTerraform(struct!.propertyTag),
    rdata: cdktf.stringToTerraform(struct!.rdata),
    stats: dataThunderGslbZoneStatsServiceListDnsCaaRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsCaaRecordListStructToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsCaaRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical_flag: {
      value: cdktf.numberToHclTerraform(struct!.criticalFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    property_tag: {
      value: cdktf.stringToHclTerraform(struct!.propertyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdata: {
      value: cdktf.stringToHclTerraform(struct!.rdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderGslbZoneStatsServiceListDnsCaaRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsCaaRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsCaaRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsCaaRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criticalFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalFlag = this._criticalFlag;
    }
    if (this._propertyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyTag = this._propertyTag;
    }
    if (this._rdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdata = this._rdata;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsCaaRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criticalFlag = undefined;
      this._propertyTag = undefined;
      this._rdata = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criticalFlag = value.criticalFlag;
      this._propertyTag = value.propertyTag;
      this._rdata = value.rdata;
      this._stats.internalValue = value.stats;
    }
  }

  // critical_flag - computed: false, optional: false, required: true
  private _criticalFlag?: number; 
  public get criticalFlag() {
    return this.getNumberAttribute('critical_flag');
  }
  public set criticalFlag(value: number) {
    this._criticalFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalFlagInput() {
    return this._criticalFlag;
  }

  // property_tag - computed: false, optional: false, required: true
  private _propertyTag?: string; 
  public get propertyTag() {
    return this.getStringAttribute('property_tag');
  }
  public set propertyTag(value: string) {
    this._propertyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTagInput() {
    return this._propertyTag;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata?: string; 
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
  public set rdata(value: string) {
    this._rdata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsServiceListDnsCaaRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsServiceListDnsCaaRecordListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderGslbZoneStatsServiceListDnsCaaRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneStatsServiceListDnsCaaRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneStatsServiceListDnsCaaRecordListStructOutputReference {
    return new DataThunderGslbZoneStatsServiceListDnsCaaRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsCnameRecordListStats {
  /**
  * Number of times the CNAME has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#cname_hits DataThunderGslbZoneStats#cname_hits}
  */
  readonly cnameHits?: number;
}

export function dataThunderGslbZoneStatsServiceListDnsCnameRecordListStatsToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsCnameRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsCnameRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cname_hits: cdktf.numberToTerraform(struct!.cnameHits),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsCnameRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsCnameRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsCnameRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cname_hits: {
      value: cdktf.numberToHclTerraform(struct!.cnameHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsCnameRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsCnameRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cnameHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameHits = this._cnameHits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsCnameRecordListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cnameHits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cnameHits = value.cnameHits;
    }
  }

  // cname_hits - computed: false, optional: true, required: false
  private _cnameHits?: number; 
  public get cnameHits() {
    return this.getNumberAttribute('cname_hits');
  }
  public set cnameHits(value: number) {
    this._cnameHits = value;
  }
  public resetCnameHits() {
    this._cnameHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameHitsInput() {
    return this._cnameHits;
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsCnameRecordListStruct {
  /**
  * Specify the alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#alias_name DataThunderGslbZoneStats#alias_name}
  */
  readonly aliasName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsServiceListDnsCnameRecordListStats;
}

export function dataThunderGslbZoneStatsServiceListDnsCnameRecordListStructToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsCnameRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_name: cdktf.stringToTerraform(struct!.aliasName),
    stats: dataThunderGslbZoneStatsServiceListDnsCnameRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsCnameRecordListStructToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsCnameRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_name: {
      value: cdktf.stringToHclTerraform(struct!.aliasName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderGslbZoneStatsServiceListDnsCnameRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsCnameRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsCnameRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsCnameRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasName = this._aliasName;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsCnameRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasName = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasName = value.aliasName;
      this._stats.internalValue = value.stats;
    }
  }

  // alias_name - computed: false, optional: false, required: true
  private _aliasName?: string; 
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }
  public set aliasName(value: string) {
    this._aliasName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNameInput() {
    return this._aliasName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsServiceListDnsCnameRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsServiceListDnsCnameRecordListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderGslbZoneStatsServiceListDnsCnameRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneStatsServiceListDnsCnameRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneStatsServiceListDnsCnameRecordListStructOutputReference {
    return new DataThunderGslbZoneStatsServiceListDnsCnameRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsMxRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#hits DataThunderGslbZoneStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneStatsServiceListDnsMxRecordListStatsToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsMxRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsMxRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsMxRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsMxRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsMxRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsMxRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsMxRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsMxRecordListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
    }
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsMxRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#mx_name DataThunderGslbZoneStats#mx_name}
  */
  readonly mxName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsServiceListDnsMxRecordListStats;
}

export function dataThunderGslbZoneStatsServiceListDnsMxRecordListStructToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsMxRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mx_name: cdktf.stringToTerraform(struct!.mxName),
    stats: dataThunderGslbZoneStatsServiceListDnsMxRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsMxRecordListStructToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsMxRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mx_name: {
      value: cdktf.stringToHclTerraform(struct!.mxName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderGslbZoneStatsServiceListDnsMxRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsMxRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsMxRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsMxRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxName = this._mxName;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsMxRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mxName = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mxName = value.mxName;
      this._stats.internalValue = value.stats;
    }
  }

  // mx_name - computed: false, optional: false, required: true
  private _mxName?: string; 
  public get mxName() {
    return this.getStringAttribute('mx_name');
  }
  public set mxName(value: string) {
    this._mxName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mxNameInput() {
    return this._mxName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsServiceListDnsMxRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsServiceListDnsMxRecordListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderGslbZoneStatsServiceListDnsMxRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneStatsServiceListDnsMxRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneStatsServiceListDnsMxRecordListStructOutputReference {
    return new DataThunderGslbZoneStatsServiceListDnsMxRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStats {
  /**
  * Number of times the NAPTR has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#naptr_hits DataThunderGslbZoneStats#naptr_hits}
  */
  readonly naptrHits?: number;
}

export function dataThunderGslbZoneStatsServiceListDnsNaptrRecordListStatsToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    naptr_hits: cdktf.numberToTerraform(struct!.naptrHits),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsNaptrRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    naptr_hits: {
      value: cdktf.numberToHclTerraform(struct!.naptrHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naptrHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.naptrHits = this._naptrHits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._naptrHits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._naptrHits = value.naptrHits;
    }
  }

  // naptr_hits - computed: false, optional: true, required: false
  private _naptrHits?: number; 
  public get naptrHits() {
    return this.getNumberAttribute('naptr_hits');
  }
  public set naptrHits(value: number) {
    this._naptrHits = value;
  }
  public resetNaptrHits() {
    this._naptrHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrHitsInput() {
    return this._naptrHits;
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStruct {
  /**
  * Specify the flag (e.g., a, s). Default is empty flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#flag DataThunderGslbZoneStats#flag}
  */
  readonly flag: string;
  /**
  * Specify the replacement or regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#naptr_target DataThunderGslbZoneStats#naptr_target}
  */
  readonly naptrTarget: string;
  /**
  * Specify Service and Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#service_proto DataThunderGslbZoneStats#service_proto}
  */
  readonly serviceProto: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStats;
}

export function dataThunderGslbZoneStatsServiceListDnsNaptrRecordListStructToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flag: cdktf.stringToTerraform(struct!.flag),
    naptr_target: cdktf.stringToTerraform(struct!.naptrTarget),
    service_proto: cdktf.stringToTerraform(struct!.serviceProto),
    stats: dataThunderGslbZoneStatsServiceListDnsNaptrRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsNaptrRecordListStructToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flag: {
      value: cdktf.stringToHclTerraform(struct!.flag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    naptr_target: {
      value: cdktf.stringToHclTerraform(struct!.naptrTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_proto: {
      value: cdktf.stringToHclTerraform(struct!.serviceProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderGslbZoneStatsServiceListDnsNaptrRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flag !== undefined) {
      hasAnyValues = true;
      internalValueResult.flag = this._flag;
    }
    if (this._naptrTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.naptrTarget = this._naptrTarget;
    }
    if (this._serviceProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProto = this._serviceProto;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flag = undefined;
      this._naptrTarget = undefined;
      this._serviceProto = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flag = value.flag;
      this._naptrTarget = value.naptrTarget;
      this._serviceProto = value.serviceProto;
      this._stats.internalValue = value.stats;
    }
  }

  // flag - computed: false, optional: false, required: true
  private _flag?: string; 
  public get flag() {
    return this.getStringAttribute('flag');
  }
  public set flag(value: string) {
    this._flag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag;
  }

  // naptr_target - computed: false, optional: false, required: true
  private _naptrTarget?: string; 
  public get naptrTarget() {
    return this.getStringAttribute('naptr_target');
  }
  public set naptrTarget(value: string) {
    this._naptrTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrTargetInput() {
    return this._naptrTarget;
  }

  // service_proto - computed: false, optional: false, required: true
  private _serviceProto?: string; 
  public get serviceProto() {
    return this.getStringAttribute('service_proto');
  }
  public set serviceProto(value: string) {
    this._serviceProto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProtoInput() {
    return this._serviceProto;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStructOutputReference {
    return new DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsNsRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#hits DataThunderGslbZoneStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneStatsServiceListDnsNsRecordListStatsToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsNsRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsNsRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsNsRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsNsRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsNsRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsNsRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsNsRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsNsRecordListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
    }
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsNsRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#ns_name DataThunderGslbZoneStats#ns_name}
  */
  readonly nsName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsServiceListDnsNsRecordListStats;
}

export function dataThunderGslbZoneStatsServiceListDnsNsRecordListStructToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsNsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ns_name: cdktf.stringToTerraform(struct!.nsName),
    stats: dataThunderGslbZoneStatsServiceListDnsNsRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsNsRecordListStructToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsNsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ns_name: {
      value: cdktf.stringToHclTerraform(struct!.nsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderGslbZoneStatsServiceListDnsNsRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsNsRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsNsRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsNsRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsName = this._nsName;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsNsRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsName = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsName = value.nsName;
      this._stats.internalValue = value.stats;
    }
  }

  // ns_name - computed: false, optional: false, required: true
  private _nsName?: string; 
  public get nsName() {
    return this.getStringAttribute('ns_name');
  }
  public set nsName(value: string) {
    this._nsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsNameInput() {
    return this._nsName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsServiceListDnsNsRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsServiceListDnsNsRecordListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderGslbZoneStatsServiceListDnsNsRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneStatsServiceListDnsNsRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneStatsServiceListDnsNsRecordListStructOutputReference {
    return new DataThunderGslbZoneStatsServiceListDnsNsRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsPtrRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#hits DataThunderGslbZoneStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneStatsServiceListDnsPtrRecordListStatsToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsPtrRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsPtrRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsPtrRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsPtrRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsPtrRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsPtrRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsPtrRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsPtrRecordListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
    }
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsPtrRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#ptr_name DataThunderGslbZoneStats#ptr_name}
  */
  readonly ptrName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsServiceListDnsPtrRecordListStats;
}

export function dataThunderGslbZoneStatsServiceListDnsPtrRecordListStructToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsPtrRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ptr_name: cdktf.stringToTerraform(struct!.ptrName),
    stats: dataThunderGslbZoneStatsServiceListDnsPtrRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsPtrRecordListStructToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsPtrRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ptr_name: {
      value: cdktf.stringToHclTerraform(struct!.ptrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderGslbZoneStatsServiceListDnsPtrRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsPtrRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsPtrRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsPtrRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ptrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptrName = this._ptrName;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsPtrRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ptrName = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ptrName = value.ptrName;
      this._stats.internalValue = value.stats;
    }
  }

  // ptr_name - computed: false, optional: false, required: true
  private _ptrName?: string; 
  public get ptrName() {
    return this.getStringAttribute('ptr_name');
  }
  public set ptrName(value: string) {
    this._ptrName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrNameInput() {
    return this._ptrName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsServiceListDnsPtrRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsServiceListDnsPtrRecordListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderGslbZoneStatsServiceListDnsPtrRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneStatsServiceListDnsPtrRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneStatsServiceListDnsPtrRecordListStructOutputReference {
    return new DataThunderGslbZoneStatsServiceListDnsPtrRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsSrvRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#hits DataThunderGslbZoneStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneStatsServiceListDnsSrvRecordListStatsToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsSrvRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsSrvRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsSrvRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsSrvRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsSrvRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsSrvRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsSrvRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsSrvRecordListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
    }
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsSrvRecordListStruct {
  /**
  * Specify Port (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#port DataThunderGslbZoneStats#port}
  */
  readonly port: number;
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#srv_name DataThunderGslbZoneStats#srv_name}
  */
  readonly srvName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsServiceListDnsSrvRecordListStats;
}

export function dataThunderGslbZoneStatsServiceListDnsSrvRecordListStructToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsSrvRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    srv_name: cdktf.stringToTerraform(struct!.srvName),
    stats: dataThunderGslbZoneStatsServiceListDnsSrvRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsSrvRecordListStructToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsSrvRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srv_name: {
      value: cdktf.stringToHclTerraform(struct!.srvName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderGslbZoneStatsServiceListDnsSrvRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsSrvRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsSrvRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsSrvRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._srvName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvName = this._srvName;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsSrvRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._srvName = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._srvName = value.srvName;
      this._stats.internalValue = value.stats;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // srv_name - computed: false, optional: false, required: true
  private _srvName?: string; 
  public get srvName() {
    return this.getStringAttribute('srv_name');
  }
  public set srvName(value: string) {
    this._srvName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srvNameInput() {
    return this._srvName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsServiceListDnsSrvRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsServiceListDnsSrvRecordListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderGslbZoneStatsServiceListDnsSrvRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneStatsServiceListDnsSrvRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneStatsServiceListDnsSrvRecordListStructOutputReference {
    return new DataThunderGslbZoneStatsServiceListDnsSrvRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsTxtRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#hits DataThunderGslbZoneStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneStatsServiceListDnsTxtRecordListStatsToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsTxtRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsTxtRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsTxtRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsTxtRecordListStatsOutputReference | DataThunderGslbZoneStatsServiceListDnsTxtRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsTxtRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsTxtRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsTxtRecordListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
    }
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }
}
export interface DataThunderGslbZoneStatsServiceListDnsTxtRecordListStruct {
  /**
  * Specify the Object Name for TXT Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#record_name DataThunderGslbZoneStats#record_name}
  */
  readonly recordName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsServiceListDnsTxtRecordListStats;
}

export function dataThunderGslbZoneStatsServiceListDnsTxtRecordListStructToTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsTxtRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_name: cdktf.stringToTerraform(struct!.recordName),
    stats: dataThunderGslbZoneStatsServiceListDnsTxtRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneStatsServiceListDnsTxtRecordListStructToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListDnsTxtRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_name: {
      value: cdktf.stringToHclTerraform(struct!.recordName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderGslbZoneStatsServiceListDnsTxtRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsTxtRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListDnsTxtRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneStatsServiceListDnsTxtRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordName = this._recordName;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListDnsTxtRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordName = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordName = value.recordName;
      this._stats.internalValue = value.stats;
    }
  }

  // record_name - computed: false, optional: false, required: true
  private _recordName?: string; 
  public get recordName() {
    return this.getStringAttribute('record_name');
  }
  public set recordName(value: string) {
    this._recordName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNameInput() {
    return this._recordName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsServiceListDnsTxtRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsServiceListDnsTxtRecordListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderGslbZoneStatsServiceListDnsTxtRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneStatsServiceListDnsTxtRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneStatsServiceListDnsTxtRecordListStructOutputReference {
    return new DataThunderGslbZoneStatsServiceListDnsTxtRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneStatsServiceListStats {
  /**
  * DNS replies sent by ACOS in backup mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#backup_mode_response DataThunderGslbZoneStats#backup_mode_response}
  */
  readonly backupModeResponse?: number;
  /**
  * Cached DNS replies sent by ACOS (service, if cache enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#cache_mode_response DataThunderGslbZoneStats#cache_mode_response}
  */
  readonly cacheModeResponse?: number;
  /**
  * DNS replies sent by ACOS as DNS proxy (service)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#proxy_mode_response DataThunderGslbZoneStats#proxy_mode_response}
  */
  readonly proxyModeResponse?: number;
  /**
  * DNS queries received for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#received_query DataThunderGslbZoneStats#received_query}
  */
  readonly receivedQuery?: number;
  /**
  * DNS replies sent to clients for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#sent_response DataThunderGslbZoneStats#sent_response}
  */
  readonly sentResponse?: number;
  /**
  * DNS replies sent by ACOS (service, if server enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#server_mode_response DataThunderGslbZoneStats#server_mode_response}
  */
  readonly serverModeResponse?: number;
  /**
  * DNS queries redirected by rule (originally hit a service)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#smrule_redir_from_svc_hit DataThunderGslbZoneStats#smrule_redir_from_svc_hit}
  */
  readonly smruleRedirFromSvcHit?: number;
  /**
  * DNS queries redirected by rule (originally missed service)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#smrule_redir_from_svc_miss DataThunderGslbZoneStats#smrule_redir_from_svc_miss}
  */
  readonly smruleRedirFromSvcMiss?: number;
  /**
  * DNS replies sent by ACOS on same site (if sticky enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#sticky_mode_response DataThunderGslbZoneStats#sticky_mode_response}
  */
  readonly stickyModeResponse?: number;
}

export function dataThunderGslbZoneStatsServiceListStatsToTerraform(struct?: DataThunderGslbZoneStatsServiceListStatsOutputReference | DataThunderGslbZoneStatsServiceListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_mode_response: cdktf.numberToTerraform(struct!.backupModeResponse),
    cache_mode_response: cdktf.numberToTerraform(struct!.cacheModeResponse),
    proxy_mode_response: cdktf.numberToTerraform(struct!.proxyModeResponse),
    received_query: cdktf.numberToTerraform(struct!.receivedQuery),
    sent_response: cdktf.numberToTerraform(struct!.sentResponse),
    server_mode_response: cdktf.numberToTerraform(struct!.serverModeResponse),
    smrule_redir_from_svc_hit: cdktf.numberToTerraform(struct!.smruleRedirFromSvcHit),
    smrule_redir_from_svc_miss: cdktf.numberToTerraform(struct!.smruleRedirFromSvcMiss),
    sticky_mode_response: cdktf.numberToTerraform(struct!.stickyModeResponse),
  }
}


export function dataThunderGslbZoneStatsServiceListStatsToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListStatsOutputReference | DataThunderGslbZoneStatsServiceListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_mode_response: {
      value: cdktf.numberToHclTerraform(struct!.backupModeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_mode_response: {
      value: cdktf.numberToHclTerraform(struct!.cacheModeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_mode_response: {
      value: cdktf.numberToHclTerraform(struct!.proxyModeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    received_query: {
      value: cdktf.numberToHclTerraform(struct!.receivedQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sent_response: {
      value: cdktf.numberToHclTerraform(struct!.sentResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_mode_response: {
      value: cdktf.numberToHclTerraform(struct!.serverModeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smrule_redir_from_svc_hit: {
      value: cdktf.numberToHclTerraform(struct!.smruleRedirFromSvcHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smrule_redir_from_svc_miss: {
      value: cdktf.numberToHclTerraform(struct!.smruleRedirFromSvcMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sticky_mode_response: {
      value: cdktf.numberToHclTerraform(struct!.stickyModeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsServiceListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupModeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupModeResponse = this._backupModeResponse;
    }
    if (this._cacheModeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheModeResponse = this._cacheModeResponse;
    }
    if (this._proxyModeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyModeResponse = this._proxyModeResponse;
    }
    if (this._receivedQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivedQuery = this._receivedQuery;
    }
    if (this._sentResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentResponse = this._sentResponse;
    }
    if (this._serverModeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverModeResponse = this._serverModeResponse;
    }
    if (this._smruleRedirFromSvcHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.smruleRedirFromSvcHit = this._smruleRedirFromSvcHit;
    }
    if (this._smruleRedirFromSvcMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.smruleRedirFromSvcMiss = this._smruleRedirFromSvcMiss;
    }
    if (this._stickyModeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickyModeResponse = this._stickyModeResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupModeResponse = undefined;
      this._cacheModeResponse = undefined;
      this._proxyModeResponse = undefined;
      this._receivedQuery = undefined;
      this._sentResponse = undefined;
      this._serverModeResponse = undefined;
      this._smruleRedirFromSvcHit = undefined;
      this._smruleRedirFromSvcMiss = undefined;
      this._stickyModeResponse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupModeResponse = value.backupModeResponse;
      this._cacheModeResponse = value.cacheModeResponse;
      this._proxyModeResponse = value.proxyModeResponse;
      this._receivedQuery = value.receivedQuery;
      this._sentResponse = value.sentResponse;
      this._serverModeResponse = value.serverModeResponse;
      this._smruleRedirFromSvcHit = value.smruleRedirFromSvcHit;
      this._smruleRedirFromSvcMiss = value.smruleRedirFromSvcMiss;
      this._stickyModeResponse = value.stickyModeResponse;
    }
  }

  // backup_mode_response - computed: false, optional: true, required: false
  private _backupModeResponse?: number; 
  public get backupModeResponse() {
    return this.getNumberAttribute('backup_mode_response');
  }
  public set backupModeResponse(value: number) {
    this._backupModeResponse = value;
  }
  public resetBackupModeResponse() {
    this._backupModeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupModeResponseInput() {
    return this._backupModeResponse;
  }

  // cache_mode_response - computed: false, optional: true, required: false
  private _cacheModeResponse?: number; 
  public get cacheModeResponse() {
    return this.getNumberAttribute('cache_mode_response');
  }
  public set cacheModeResponse(value: number) {
    this._cacheModeResponse = value;
  }
  public resetCacheModeResponse() {
    this._cacheModeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeResponseInput() {
    return this._cacheModeResponse;
  }

  // proxy_mode_response - computed: false, optional: true, required: false
  private _proxyModeResponse?: number; 
  public get proxyModeResponse() {
    return this.getNumberAttribute('proxy_mode_response');
  }
  public set proxyModeResponse(value: number) {
    this._proxyModeResponse = value;
  }
  public resetProxyModeResponse() {
    this._proxyModeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyModeResponseInput() {
    return this._proxyModeResponse;
  }

  // received_query - computed: false, optional: true, required: false
  private _receivedQuery?: number; 
  public get receivedQuery() {
    return this.getNumberAttribute('received_query');
  }
  public set receivedQuery(value: number) {
    this._receivedQuery = value;
  }
  public resetReceivedQuery() {
    this._receivedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivedQueryInput() {
    return this._receivedQuery;
  }

  // sent_response - computed: false, optional: true, required: false
  private _sentResponse?: number; 
  public get sentResponse() {
    return this.getNumberAttribute('sent_response');
  }
  public set sentResponse(value: number) {
    this._sentResponse = value;
  }
  public resetSentResponse() {
    this._sentResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentResponseInput() {
    return this._sentResponse;
  }

  // server_mode_response - computed: false, optional: true, required: false
  private _serverModeResponse?: number; 
  public get serverModeResponse() {
    return this.getNumberAttribute('server_mode_response');
  }
  public set serverModeResponse(value: number) {
    this._serverModeResponse = value;
  }
  public resetServerModeResponse() {
    this._serverModeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverModeResponseInput() {
    return this._serverModeResponse;
  }

  // smrule_redir_from_svc_hit - computed: false, optional: true, required: false
  private _smruleRedirFromSvcHit?: number; 
  public get smruleRedirFromSvcHit() {
    return this.getNumberAttribute('smrule_redir_from_svc_hit');
  }
  public set smruleRedirFromSvcHit(value: number) {
    this._smruleRedirFromSvcHit = value;
  }
  public resetSmruleRedirFromSvcHit() {
    this._smruleRedirFromSvcHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smruleRedirFromSvcHitInput() {
    return this._smruleRedirFromSvcHit;
  }

  // smrule_redir_from_svc_miss - computed: false, optional: true, required: false
  private _smruleRedirFromSvcMiss?: number; 
  public get smruleRedirFromSvcMiss() {
    return this.getNumberAttribute('smrule_redir_from_svc_miss');
  }
  public set smruleRedirFromSvcMiss(value: number) {
    this._smruleRedirFromSvcMiss = value;
  }
  public resetSmruleRedirFromSvcMiss() {
    this._smruleRedirFromSvcMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smruleRedirFromSvcMissInput() {
    return this._smruleRedirFromSvcMiss;
  }

  // sticky_mode_response - computed: false, optional: true, required: false
  private _stickyModeResponse?: number; 
  public get stickyModeResponse() {
    return this.getNumberAttribute('sticky_mode_response');
  }
  public set stickyModeResponse(value: number) {
    this._stickyModeResponse = value;
  }
  public resetStickyModeResponse() {
    this._stickyModeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyModeResponseInput() {
    return this._stickyModeResponse;
  }
}
export interface DataThunderGslbZoneStatsServiceListStruct {
  /**
  * Specify the service name for the zone, * for wildcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#service_name DataThunderGslbZoneStats#service_name}
  */
  readonly serviceName: string;
  /**
  * Port number of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#service_port DataThunderGslbZoneStats#service_port}
  */
  readonly servicePort: number;
  /**
  * dns_caa_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#dns_caa_record_list DataThunderGslbZoneStats#dns_caa_record_list}
  */
  readonly dnsCaaRecordList?: DataThunderGslbZoneStatsServiceListDnsCaaRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_cname_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#dns_cname_record_list DataThunderGslbZoneStats#dns_cname_record_list}
  */
  readonly dnsCnameRecordList?: DataThunderGslbZoneStatsServiceListDnsCnameRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_mx_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#dns_mx_record_list DataThunderGslbZoneStats#dns_mx_record_list}
  */
  readonly dnsMxRecordList?: DataThunderGslbZoneStatsServiceListDnsMxRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_naptr_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#dns_naptr_record_list DataThunderGslbZoneStats#dns_naptr_record_list}
  */
  readonly dnsNaptrRecordList?: DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ns_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#dns_ns_record_list DataThunderGslbZoneStats#dns_ns_record_list}
  */
  readonly dnsNsRecordList?: DataThunderGslbZoneStatsServiceListDnsNsRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ptr_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#dns_ptr_record_list DataThunderGslbZoneStats#dns_ptr_record_list}
  */
  readonly dnsPtrRecordList?: DataThunderGslbZoneStatsServiceListDnsPtrRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_srv_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#dns_srv_record_list DataThunderGslbZoneStats#dns_srv_record_list}
  */
  readonly dnsSrvRecordList?: DataThunderGslbZoneStatsServiceListDnsSrvRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_txt_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#dns_txt_record_list DataThunderGslbZoneStats#dns_txt_record_list}
  */
  readonly dnsTxtRecordList?: DataThunderGslbZoneStatsServiceListDnsTxtRecordListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#stats DataThunderGslbZoneStats#stats}
  */
  readonly stats?: DataThunderGslbZoneStatsServiceListStats;
}

export function dataThunderGslbZoneStatsServiceListStructToTerraform(struct?: DataThunderGslbZoneStatsServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_port: cdktf.numberToTerraform(struct!.servicePort),
    dns_caa_record_list: cdktf.listMapper(dataThunderGslbZoneStatsServiceListDnsCaaRecordListStructToTerraform, true)(struct!.dnsCaaRecordList),
    dns_cname_record_list: cdktf.listMapper(dataThunderGslbZoneStatsServiceListDnsCnameRecordListStructToTerraform, true)(struct!.dnsCnameRecordList),
    dns_mx_record_list: cdktf.listMapper(dataThunderGslbZoneStatsServiceListDnsMxRecordListStructToTerraform, true)(struct!.dnsMxRecordList),
    dns_naptr_record_list: cdktf.listMapper(dataThunderGslbZoneStatsServiceListDnsNaptrRecordListStructToTerraform, true)(struct!.dnsNaptrRecordList),
    dns_ns_record_list: cdktf.listMapper(dataThunderGslbZoneStatsServiceListDnsNsRecordListStructToTerraform, true)(struct!.dnsNsRecordList),
    dns_ptr_record_list: cdktf.listMapper(dataThunderGslbZoneStatsServiceListDnsPtrRecordListStructToTerraform, true)(struct!.dnsPtrRecordList),
    dns_srv_record_list: cdktf.listMapper(dataThunderGslbZoneStatsServiceListDnsSrvRecordListStructToTerraform, true)(struct!.dnsSrvRecordList),
    dns_txt_record_list: cdktf.listMapper(dataThunderGslbZoneStatsServiceListDnsTxtRecordListStructToTerraform, true)(struct!.dnsTxtRecordList),
    stats: dataThunderGslbZoneStatsServiceListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneStatsServiceListStructToHclTerraform(struct?: DataThunderGslbZoneStatsServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_port: {
      value: cdktf.numberToHclTerraform(struct!.servicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_caa_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneStatsServiceListDnsCaaRecordListStructToHclTerraform, true)(struct!.dnsCaaRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsCaaRecordListStructList",
    },
    dns_cname_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneStatsServiceListDnsCnameRecordListStructToHclTerraform, true)(struct!.dnsCnameRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsCnameRecordListStructList",
    },
    dns_mx_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneStatsServiceListDnsMxRecordListStructToHclTerraform, true)(struct!.dnsMxRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsMxRecordListStructList",
    },
    dns_naptr_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneStatsServiceListDnsNaptrRecordListStructToHclTerraform, true)(struct!.dnsNaptrRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStructList",
    },
    dns_ns_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneStatsServiceListDnsNsRecordListStructToHclTerraform, true)(struct!.dnsNsRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsNsRecordListStructList",
    },
    dns_ptr_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneStatsServiceListDnsPtrRecordListStructToHclTerraform, true)(struct!.dnsPtrRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsPtrRecordListStructList",
    },
    dns_srv_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneStatsServiceListDnsSrvRecordListStructToHclTerraform, true)(struct!.dnsSrvRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsSrvRecordListStructList",
    },
    dns_txt_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneStatsServiceListDnsTxtRecordListStructToHclTerraform, true)(struct!.dnsTxtRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListDnsTxtRecordListStructList",
    },
    stats: {
      value: dataThunderGslbZoneStatsServiceListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneStatsServiceListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsServiceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneStatsServiceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._servicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort;
    }
    if (this._dnsCaaRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCaaRecordList = this._dnsCaaRecordList?.internalValue;
    }
    if (this._dnsCnameRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCnameRecordList = this._dnsCnameRecordList?.internalValue;
    }
    if (this._dnsMxRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMxRecordList = this._dnsMxRecordList?.internalValue;
    }
    if (this._dnsNaptrRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNaptrRecordList = this._dnsNaptrRecordList?.internalValue;
    }
    if (this._dnsNsRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNsRecordList = this._dnsNsRecordList?.internalValue;
    }
    if (this._dnsPtrRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPtrRecordList = this._dnsPtrRecordList?.internalValue;
    }
    if (this._dnsSrvRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSrvRecordList = this._dnsSrvRecordList?.internalValue;
    }
    if (this._dnsTxtRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTxtRecordList = this._dnsTxtRecordList?.internalValue;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsServiceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._servicePort = undefined;
      this._dnsCaaRecordList.internalValue = undefined;
      this._dnsCnameRecordList.internalValue = undefined;
      this._dnsMxRecordList.internalValue = undefined;
      this._dnsNaptrRecordList.internalValue = undefined;
      this._dnsNsRecordList.internalValue = undefined;
      this._dnsPtrRecordList.internalValue = undefined;
      this._dnsSrvRecordList.internalValue = undefined;
      this._dnsTxtRecordList.internalValue = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._servicePort = value.servicePort;
      this._dnsCaaRecordList.internalValue = value.dnsCaaRecordList;
      this._dnsCnameRecordList.internalValue = value.dnsCnameRecordList;
      this._dnsMxRecordList.internalValue = value.dnsMxRecordList;
      this._dnsNaptrRecordList.internalValue = value.dnsNaptrRecordList;
      this._dnsNsRecordList.internalValue = value.dnsNsRecordList;
      this._dnsPtrRecordList.internalValue = value.dnsPtrRecordList;
      this._dnsSrvRecordList.internalValue = value.dnsSrvRecordList;
      this._dnsTxtRecordList.internalValue = value.dnsTxtRecordList;
      this._stats.internalValue = value.stats;
    }
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: number; 
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }
  public set servicePort(value: number) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // dns_caa_record_list - computed: false, optional: true, required: false
  private _dnsCaaRecordList = new DataThunderGslbZoneStatsServiceListDnsCaaRecordListStructList(this, "dns_caa_record_list", false);
  public get dnsCaaRecordList() {
    return this._dnsCaaRecordList;
  }
  public putDnsCaaRecordList(value: DataThunderGslbZoneStatsServiceListDnsCaaRecordListStruct[] | cdktf.IResolvable) {
    this._dnsCaaRecordList.internalValue = value;
  }
  public resetDnsCaaRecordList() {
    this._dnsCaaRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCaaRecordListInput() {
    return this._dnsCaaRecordList.internalValue;
  }

  // dns_cname_record_list - computed: false, optional: true, required: false
  private _dnsCnameRecordList = new DataThunderGslbZoneStatsServiceListDnsCnameRecordListStructList(this, "dns_cname_record_list", false);
  public get dnsCnameRecordList() {
    return this._dnsCnameRecordList;
  }
  public putDnsCnameRecordList(value: DataThunderGslbZoneStatsServiceListDnsCnameRecordListStruct[] | cdktf.IResolvable) {
    this._dnsCnameRecordList.internalValue = value;
  }
  public resetDnsCnameRecordList() {
    this._dnsCnameRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCnameRecordListInput() {
    return this._dnsCnameRecordList.internalValue;
  }

  // dns_mx_record_list - computed: false, optional: true, required: false
  private _dnsMxRecordList = new DataThunderGslbZoneStatsServiceListDnsMxRecordListStructList(this, "dns_mx_record_list", false);
  public get dnsMxRecordList() {
    return this._dnsMxRecordList;
  }
  public putDnsMxRecordList(value: DataThunderGslbZoneStatsServiceListDnsMxRecordListStruct[] | cdktf.IResolvable) {
    this._dnsMxRecordList.internalValue = value;
  }
  public resetDnsMxRecordList() {
    this._dnsMxRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMxRecordListInput() {
    return this._dnsMxRecordList.internalValue;
  }

  // dns_naptr_record_list - computed: false, optional: true, required: false
  private _dnsNaptrRecordList = new DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStructList(this, "dns_naptr_record_list", false);
  public get dnsNaptrRecordList() {
    return this._dnsNaptrRecordList;
  }
  public putDnsNaptrRecordList(value: DataThunderGslbZoneStatsServiceListDnsNaptrRecordListStruct[] | cdktf.IResolvable) {
    this._dnsNaptrRecordList.internalValue = value;
  }
  public resetDnsNaptrRecordList() {
    this._dnsNaptrRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNaptrRecordListInput() {
    return this._dnsNaptrRecordList.internalValue;
  }

  // dns_ns_record_list - computed: false, optional: true, required: false
  private _dnsNsRecordList = new DataThunderGslbZoneStatsServiceListDnsNsRecordListStructList(this, "dns_ns_record_list", false);
  public get dnsNsRecordList() {
    return this._dnsNsRecordList;
  }
  public putDnsNsRecordList(value: DataThunderGslbZoneStatsServiceListDnsNsRecordListStruct[] | cdktf.IResolvable) {
    this._dnsNsRecordList.internalValue = value;
  }
  public resetDnsNsRecordList() {
    this._dnsNsRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNsRecordListInput() {
    return this._dnsNsRecordList.internalValue;
  }

  // dns_ptr_record_list - computed: false, optional: true, required: false
  private _dnsPtrRecordList = new DataThunderGslbZoneStatsServiceListDnsPtrRecordListStructList(this, "dns_ptr_record_list", false);
  public get dnsPtrRecordList() {
    return this._dnsPtrRecordList;
  }
  public putDnsPtrRecordList(value: DataThunderGslbZoneStatsServiceListDnsPtrRecordListStruct[] | cdktf.IResolvable) {
    this._dnsPtrRecordList.internalValue = value;
  }
  public resetDnsPtrRecordList() {
    this._dnsPtrRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPtrRecordListInput() {
    return this._dnsPtrRecordList.internalValue;
  }

  // dns_srv_record_list - computed: false, optional: true, required: false
  private _dnsSrvRecordList = new DataThunderGslbZoneStatsServiceListDnsSrvRecordListStructList(this, "dns_srv_record_list", false);
  public get dnsSrvRecordList() {
    return this._dnsSrvRecordList;
  }
  public putDnsSrvRecordList(value: DataThunderGslbZoneStatsServiceListDnsSrvRecordListStruct[] | cdktf.IResolvable) {
    this._dnsSrvRecordList.internalValue = value;
  }
  public resetDnsSrvRecordList() {
    this._dnsSrvRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSrvRecordListInput() {
    return this._dnsSrvRecordList.internalValue;
  }

  // dns_txt_record_list - computed: false, optional: true, required: false
  private _dnsTxtRecordList = new DataThunderGslbZoneStatsServiceListDnsTxtRecordListStructList(this, "dns_txt_record_list", false);
  public get dnsTxtRecordList() {
    return this._dnsTxtRecordList;
  }
  public putDnsTxtRecordList(value: DataThunderGslbZoneStatsServiceListDnsTxtRecordListStruct[] | cdktf.IResolvable) {
    this._dnsTxtRecordList.internalValue = value;
  }
  public resetDnsTxtRecordList() {
    this._dnsTxtRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTxtRecordListInput() {
    return this._dnsTxtRecordList.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsServiceListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsServiceListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderGslbZoneStatsServiceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneStatsServiceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneStatsServiceListStructOutputReference {
    return new DataThunderGslbZoneStatsServiceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneStatsStats {
  /**
  * DNS replies sent by ACOS in backup mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#backup_mode_response DataThunderGslbZoneStats#backup_mode_response}
  */
  readonly backupModeResponse?: number;
  /**
  * Cached DNS replies sent by ACOS (if DNS cache enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#cache_mode_response DataThunderGslbZoneStats#cache_mode_response}
  */
  readonly cacheModeResponse?: number;
  /**
  * DNS replies sent by ACOS as DNS proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#proxy_mode_response DataThunderGslbZoneStats#proxy_mode_response}
  */
  readonly proxyModeResponse?: number;
  /**
  * DNS queries received for the zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#received_query DataThunderGslbZoneStats#received_query}
  */
  readonly receivedQuery?: number;
  /**
  * DNS replies sent to clients for the zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#sent_response DataThunderGslbZoneStats#sent_response}
  */
  readonly sentResponse?: number;
  /**
  * DNS replies sent by ACOS as DNS server (if DNS server enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#server_mode_response DataThunderGslbZoneStats#server_mode_response}
  */
  readonly serverModeResponse?: number;
  /**
  * DNS queries redirected by rule (originally hit a service)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#smrule_redir_from_svc_hit DataThunderGslbZoneStats#smrule_redir_from_svc_hit}
  */
  readonly smruleRedirFromSvcHit?: number;
  /**
  * DNS queries redirected by rule (originally missed service)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#smrule_redir_from_svc_miss DataThunderGslbZoneStats#smrule_redir_from_svc_miss}
  */
  readonly smruleRedirFromSvcMiss?: number;
  /**
  * DNS replies sent by ACOS on same site (if sticky enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#sticky_mode_response DataThunderGslbZoneStats#sticky_mode_response}
  */
  readonly stickyModeResponse?: number;
}

export function dataThunderGslbZoneStatsStatsToTerraform(struct?: DataThunderGslbZoneStatsStatsOutputReference | DataThunderGslbZoneStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_mode_response: cdktf.numberToTerraform(struct!.backupModeResponse),
    cache_mode_response: cdktf.numberToTerraform(struct!.cacheModeResponse),
    proxy_mode_response: cdktf.numberToTerraform(struct!.proxyModeResponse),
    received_query: cdktf.numberToTerraform(struct!.receivedQuery),
    sent_response: cdktf.numberToTerraform(struct!.sentResponse),
    server_mode_response: cdktf.numberToTerraform(struct!.serverModeResponse),
    smrule_redir_from_svc_hit: cdktf.numberToTerraform(struct!.smruleRedirFromSvcHit),
    smrule_redir_from_svc_miss: cdktf.numberToTerraform(struct!.smruleRedirFromSvcMiss),
    sticky_mode_response: cdktf.numberToTerraform(struct!.stickyModeResponse),
  }
}


export function dataThunderGslbZoneStatsStatsToHclTerraform(struct?: DataThunderGslbZoneStatsStatsOutputReference | DataThunderGslbZoneStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_mode_response: {
      value: cdktf.numberToHclTerraform(struct!.backupModeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_mode_response: {
      value: cdktf.numberToHclTerraform(struct!.cacheModeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_mode_response: {
      value: cdktf.numberToHclTerraform(struct!.proxyModeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    received_query: {
      value: cdktf.numberToHclTerraform(struct!.receivedQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sent_response: {
      value: cdktf.numberToHclTerraform(struct!.sentResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_mode_response: {
      value: cdktf.numberToHclTerraform(struct!.serverModeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smrule_redir_from_svc_hit: {
      value: cdktf.numberToHclTerraform(struct!.smruleRedirFromSvcHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smrule_redir_from_svc_miss: {
      value: cdktf.numberToHclTerraform(struct!.smruleRedirFromSvcMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sticky_mode_response: {
      value: cdktf.numberToHclTerraform(struct!.stickyModeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupModeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupModeResponse = this._backupModeResponse;
    }
    if (this._cacheModeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheModeResponse = this._cacheModeResponse;
    }
    if (this._proxyModeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyModeResponse = this._proxyModeResponse;
    }
    if (this._receivedQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivedQuery = this._receivedQuery;
    }
    if (this._sentResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentResponse = this._sentResponse;
    }
    if (this._serverModeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverModeResponse = this._serverModeResponse;
    }
    if (this._smruleRedirFromSvcHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.smruleRedirFromSvcHit = this._smruleRedirFromSvcHit;
    }
    if (this._smruleRedirFromSvcMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.smruleRedirFromSvcMiss = this._smruleRedirFromSvcMiss;
    }
    if (this._stickyModeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickyModeResponse = this._stickyModeResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupModeResponse = undefined;
      this._cacheModeResponse = undefined;
      this._proxyModeResponse = undefined;
      this._receivedQuery = undefined;
      this._sentResponse = undefined;
      this._serverModeResponse = undefined;
      this._smruleRedirFromSvcHit = undefined;
      this._smruleRedirFromSvcMiss = undefined;
      this._stickyModeResponse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupModeResponse = value.backupModeResponse;
      this._cacheModeResponse = value.cacheModeResponse;
      this._proxyModeResponse = value.proxyModeResponse;
      this._receivedQuery = value.receivedQuery;
      this._sentResponse = value.sentResponse;
      this._serverModeResponse = value.serverModeResponse;
      this._smruleRedirFromSvcHit = value.smruleRedirFromSvcHit;
      this._smruleRedirFromSvcMiss = value.smruleRedirFromSvcMiss;
      this._stickyModeResponse = value.stickyModeResponse;
    }
  }

  // backup_mode_response - computed: false, optional: true, required: false
  private _backupModeResponse?: number; 
  public get backupModeResponse() {
    return this.getNumberAttribute('backup_mode_response');
  }
  public set backupModeResponse(value: number) {
    this._backupModeResponse = value;
  }
  public resetBackupModeResponse() {
    this._backupModeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupModeResponseInput() {
    return this._backupModeResponse;
  }

  // cache_mode_response - computed: false, optional: true, required: false
  private _cacheModeResponse?: number; 
  public get cacheModeResponse() {
    return this.getNumberAttribute('cache_mode_response');
  }
  public set cacheModeResponse(value: number) {
    this._cacheModeResponse = value;
  }
  public resetCacheModeResponse() {
    this._cacheModeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeResponseInput() {
    return this._cacheModeResponse;
  }

  // proxy_mode_response - computed: false, optional: true, required: false
  private _proxyModeResponse?: number; 
  public get proxyModeResponse() {
    return this.getNumberAttribute('proxy_mode_response');
  }
  public set proxyModeResponse(value: number) {
    this._proxyModeResponse = value;
  }
  public resetProxyModeResponse() {
    this._proxyModeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyModeResponseInput() {
    return this._proxyModeResponse;
  }

  // received_query - computed: false, optional: true, required: false
  private _receivedQuery?: number; 
  public get receivedQuery() {
    return this.getNumberAttribute('received_query');
  }
  public set receivedQuery(value: number) {
    this._receivedQuery = value;
  }
  public resetReceivedQuery() {
    this._receivedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivedQueryInput() {
    return this._receivedQuery;
  }

  // sent_response - computed: false, optional: true, required: false
  private _sentResponse?: number; 
  public get sentResponse() {
    return this.getNumberAttribute('sent_response');
  }
  public set sentResponse(value: number) {
    this._sentResponse = value;
  }
  public resetSentResponse() {
    this._sentResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentResponseInput() {
    return this._sentResponse;
  }

  // server_mode_response - computed: false, optional: true, required: false
  private _serverModeResponse?: number; 
  public get serverModeResponse() {
    return this.getNumberAttribute('server_mode_response');
  }
  public set serverModeResponse(value: number) {
    this._serverModeResponse = value;
  }
  public resetServerModeResponse() {
    this._serverModeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverModeResponseInput() {
    return this._serverModeResponse;
  }

  // smrule_redir_from_svc_hit - computed: false, optional: true, required: false
  private _smruleRedirFromSvcHit?: number; 
  public get smruleRedirFromSvcHit() {
    return this.getNumberAttribute('smrule_redir_from_svc_hit');
  }
  public set smruleRedirFromSvcHit(value: number) {
    this._smruleRedirFromSvcHit = value;
  }
  public resetSmruleRedirFromSvcHit() {
    this._smruleRedirFromSvcHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smruleRedirFromSvcHitInput() {
    return this._smruleRedirFromSvcHit;
  }

  // smrule_redir_from_svc_miss - computed: false, optional: true, required: false
  private _smruleRedirFromSvcMiss?: number; 
  public get smruleRedirFromSvcMiss() {
    return this.getNumberAttribute('smrule_redir_from_svc_miss');
  }
  public set smruleRedirFromSvcMiss(value: number) {
    this._smruleRedirFromSvcMiss = value;
  }
  public resetSmruleRedirFromSvcMiss() {
    this._smruleRedirFromSvcMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smruleRedirFromSvcMissInput() {
    return this._smruleRedirFromSvcMiss;
  }

  // sticky_mode_response - computed: false, optional: true, required: false
  private _stickyModeResponse?: number; 
  public get stickyModeResponse() {
    return this.getNumberAttribute('sticky_mode_response');
  }
  public set stickyModeResponse(value: number) {
    this._stickyModeResponse = value;
  }
  public resetStickyModeResponse() {
    this._stickyModeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyModeResponseInput() {
    return this._stickyModeResponse;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats thunder_gslb_zone_stats}
*/
export class DataThunderGslbZoneStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbZoneStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbZoneStats to import
  * @param importFromId The id of the existing DataThunderGslbZoneStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbZoneStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_stats thunder_gslb_zone_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbZoneStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbZoneStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._dnsCaaRecordList.internalValue = config.dnsCaaRecordList;
    this._dnsMxRecordList.internalValue = config.dnsMxRecordList;
    this._dnsNsRecordList.internalValue = config.dnsNsRecordList;
    this._serviceList.internalValue = config.serviceList;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dns_caa_record_list - computed: false, optional: true, required: false
  private _dnsCaaRecordList = new DataThunderGslbZoneStatsDnsCaaRecordListStructList(this, "dns_caa_record_list", false);
  public get dnsCaaRecordList() {
    return this._dnsCaaRecordList;
  }
  public putDnsCaaRecordList(value: DataThunderGslbZoneStatsDnsCaaRecordListStruct[] | cdktf.IResolvable) {
    this._dnsCaaRecordList.internalValue = value;
  }
  public resetDnsCaaRecordList() {
    this._dnsCaaRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCaaRecordListInput() {
    return this._dnsCaaRecordList.internalValue;
  }

  // dns_mx_record_list - computed: false, optional: true, required: false
  private _dnsMxRecordList = new DataThunderGslbZoneStatsDnsMxRecordListStructList(this, "dns_mx_record_list", false);
  public get dnsMxRecordList() {
    return this._dnsMxRecordList;
  }
  public putDnsMxRecordList(value: DataThunderGslbZoneStatsDnsMxRecordListStruct[] | cdktf.IResolvable) {
    this._dnsMxRecordList.internalValue = value;
  }
  public resetDnsMxRecordList() {
    this._dnsMxRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMxRecordListInput() {
    return this._dnsMxRecordList.internalValue;
  }

  // dns_ns_record_list - computed: false, optional: true, required: false
  private _dnsNsRecordList = new DataThunderGslbZoneStatsDnsNsRecordListStructList(this, "dns_ns_record_list", false);
  public get dnsNsRecordList() {
    return this._dnsNsRecordList;
  }
  public putDnsNsRecordList(value: DataThunderGslbZoneStatsDnsNsRecordListStruct[] | cdktf.IResolvable) {
    this._dnsNsRecordList.internalValue = value;
  }
  public resetDnsNsRecordList() {
    this._dnsNsRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNsRecordListInput() {
    return this._dnsNsRecordList.internalValue;
  }

  // service_list - computed: false, optional: true, required: false
  private _serviceList = new DataThunderGslbZoneStatsServiceListStructList(this, "service_list", false);
  public get serviceList() {
    return this._serviceList;
  }
  public putServiceList(value: DataThunderGslbZoneStatsServiceListStruct[] | cdktf.IResolvable) {
    this._serviceList.internalValue = value;
  }
  public resetServiceList() {
    this._serviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceListInput() {
    return this._serviceList.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      dns_caa_record_list: cdktf.listMapper(dataThunderGslbZoneStatsDnsCaaRecordListStructToTerraform, true)(this._dnsCaaRecordList.internalValue),
      dns_mx_record_list: cdktf.listMapper(dataThunderGslbZoneStatsDnsMxRecordListStructToTerraform, true)(this._dnsMxRecordList.internalValue),
      dns_ns_record_list: cdktf.listMapper(dataThunderGslbZoneStatsDnsNsRecordListStructToTerraform, true)(this._dnsNsRecordList.internalValue),
      service_list: cdktf.listMapper(dataThunderGslbZoneStatsServiceListStructToTerraform, true)(this._serviceList.internalValue),
      stats: dataThunderGslbZoneStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_caa_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneStatsDnsCaaRecordListStructToHclTerraform, true)(this._dnsCaaRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneStatsDnsCaaRecordListStructList",
      },
      dns_mx_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneStatsDnsMxRecordListStructToHclTerraform, true)(this._dnsMxRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneStatsDnsMxRecordListStructList",
      },
      dns_ns_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneStatsDnsNsRecordListStructToHclTerraform, true)(this._dnsNsRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneStatsDnsNsRecordListStructList",
      },
      service_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneStatsServiceListStructToHclTerraform, true)(this._serviceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneStatsServiceListStructList",
      },
      stats: {
        value: dataThunderGslbZoneStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
