// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbZoneServiceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#id DataThunderGslbZoneServiceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#name DataThunderGslbZoneServiceStats#name}
  */
  readonly name: string;
  /**
  * Specify the service name for the zone, * for wildcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#service_name DataThunderGslbZoneServiceStats#service_name}
  */
  readonly serviceName: string;
  /**
  * Port number of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#service_port DataThunderGslbZoneServiceStats#service_port}
  */
  readonly servicePort: number;
  /**
  * dns_caa_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#dns_caa_record_list DataThunderGslbZoneServiceStats#dns_caa_record_list}
  */
  readonly dnsCaaRecordList?: DataThunderGslbZoneServiceStatsDnsCaaRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_cname_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#dns_cname_record_list DataThunderGslbZoneServiceStats#dns_cname_record_list}
  */
  readonly dnsCnameRecordList?: DataThunderGslbZoneServiceStatsDnsCnameRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_mx_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#dns_mx_record_list DataThunderGslbZoneServiceStats#dns_mx_record_list}
  */
  readonly dnsMxRecordList?: DataThunderGslbZoneServiceStatsDnsMxRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_naptr_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#dns_naptr_record_list DataThunderGslbZoneServiceStats#dns_naptr_record_list}
  */
  readonly dnsNaptrRecordList?: DataThunderGslbZoneServiceStatsDnsNaptrRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ns_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#dns_ns_record_list DataThunderGslbZoneServiceStats#dns_ns_record_list}
  */
  readonly dnsNsRecordList?: DataThunderGslbZoneServiceStatsDnsNsRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ptr_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#dns_ptr_record_list DataThunderGslbZoneServiceStats#dns_ptr_record_list}
  */
  readonly dnsPtrRecordList?: DataThunderGslbZoneServiceStatsDnsPtrRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_srv_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#dns_srv_record_list DataThunderGslbZoneServiceStats#dns_srv_record_list}
  */
  readonly dnsSrvRecordList?: DataThunderGslbZoneServiceStatsDnsSrvRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_txt_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#dns_txt_record_list DataThunderGslbZoneServiceStats#dns_txt_record_list}
  */
  readonly dnsTxtRecordList?: DataThunderGslbZoneServiceStatsDnsTxtRecordListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#stats DataThunderGslbZoneServiceStats#stats}
  */
  readonly stats?: DataThunderGslbZoneServiceStatsStats;
}
export interface DataThunderGslbZoneServiceStatsDnsCaaRecordListStats {
  /**
  * Number of times the CAA has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#hits DataThunderGslbZoneServiceStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneServiceStatsDnsCaaRecordListStatsToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsCaaRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsCaaRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneServiceStatsDnsCaaRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsCaaRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsCaaRecordListStats): any {
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

export class DataThunderGslbZoneServiceStatsDnsCaaRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsCaaRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsCaaRecordListStats | undefined) {
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
export interface DataThunderGslbZoneServiceStatsDnsCaaRecordListStruct {
  /**
  * Issuer Critical Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#critical_flag DataThunderGslbZoneServiceStats#critical_flag}
  */
  readonly criticalFlag: number;
  /**
  * Specify other property tags, only allowed lowercase alphanumeric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#property_tag DataThunderGslbZoneServiceStats#property_tag}
  */
  readonly propertyTag: string;
  /**
  * Specify the Issuer Domain Name or a URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#rdata DataThunderGslbZoneServiceStats#rdata}
  */
  readonly rdata: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#stats DataThunderGslbZoneServiceStats#stats}
  */
  readonly stats?: DataThunderGslbZoneServiceStatsDnsCaaRecordListStats;
}

export function dataThunderGslbZoneServiceStatsDnsCaaRecordListStructToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsCaaRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical_flag: cdktf.numberToTerraform(struct!.criticalFlag),
    property_tag: cdktf.stringToTerraform(struct!.propertyTag),
    rdata: cdktf.stringToTerraform(struct!.rdata),
    stats: dataThunderGslbZoneServiceStatsDnsCaaRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneServiceStatsDnsCaaRecordListStructToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsCaaRecordListStruct | cdktf.IResolvable): any {
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
      value: dataThunderGslbZoneServiceStatsDnsCaaRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceStatsDnsCaaRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceStatsDnsCaaRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsCaaRecordListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsCaaRecordListStruct | cdktf.IResolvable | undefined) {
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
  private _stats = new DataThunderGslbZoneServiceStatsDnsCaaRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneServiceStatsDnsCaaRecordListStats) {
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

export class DataThunderGslbZoneServiceStatsDnsCaaRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceStatsDnsCaaRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceStatsDnsCaaRecordListStructOutputReference {
    return new DataThunderGslbZoneServiceStatsDnsCaaRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceStatsDnsCnameRecordListStats {
  /**
  * Number of times the CNAME has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#cname_hits DataThunderGslbZoneServiceStats#cname_hits}
  */
  readonly cnameHits?: number;
}

export function dataThunderGslbZoneServiceStatsDnsCnameRecordListStatsToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsCnameRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsCnameRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cname_hits: cdktf.numberToTerraform(struct!.cnameHits),
  }
}


export function dataThunderGslbZoneServiceStatsDnsCnameRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsCnameRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsCnameRecordListStats): any {
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

export class DataThunderGslbZoneServiceStatsDnsCnameRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsCnameRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cnameHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameHits = this._cnameHits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsCnameRecordListStats | undefined) {
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
export interface DataThunderGslbZoneServiceStatsDnsCnameRecordListStruct {
  /**
  * Specify the alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#alias_name DataThunderGslbZoneServiceStats#alias_name}
  */
  readonly aliasName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#stats DataThunderGslbZoneServiceStats#stats}
  */
  readonly stats?: DataThunderGslbZoneServiceStatsDnsCnameRecordListStats;
}

export function dataThunderGslbZoneServiceStatsDnsCnameRecordListStructToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsCnameRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_name: cdktf.stringToTerraform(struct!.aliasName),
    stats: dataThunderGslbZoneServiceStatsDnsCnameRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneServiceStatsDnsCnameRecordListStructToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsCnameRecordListStruct | cdktf.IResolvable): any {
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
      value: dataThunderGslbZoneServiceStatsDnsCnameRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceStatsDnsCnameRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceStatsDnsCnameRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsCnameRecordListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsCnameRecordListStruct | cdktf.IResolvable | undefined) {
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
  private _stats = new DataThunderGslbZoneServiceStatsDnsCnameRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneServiceStatsDnsCnameRecordListStats) {
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

export class DataThunderGslbZoneServiceStatsDnsCnameRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceStatsDnsCnameRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceStatsDnsCnameRecordListStructOutputReference {
    return new DataThunderGslbZoneServiceStatsDnsCnameRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceStatsDnsMxRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#hits DataThunderGslbZoneServiceStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneServiceStatsDnsMxRecordListStatsToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsMxRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsMxRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneServiceStatsDnsMxRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsMxRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsMxRecordListStats): any {
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

export class DataThunderGslbZoneServiceStatsDnsMxRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsMxRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsMxRecordListStats | undefined) {
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
export interface DataThunderGslbZoneServiceStatsDnsMxRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#mx_name DataThunderGslbZoneServiceStats#mx_name}
  */
  readonly mxName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#stats DataThunderGslbZoneServiceStats#stats}
  */
  readonly stats?: DataThunderGslbZoneServiceStatsDnsMxRecordListStats;
}

export function dataThunderGslbZoneServiceStatsDnsMxRecordListStructToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsMxRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mx_name: cdktf.stringToTerraform(struct!.mxName),
    stats: dataThunderGslbZoneServiceStatsDnsMxRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneServiceStatsDnsMxRecordListStructToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsMxRecordListStruct | cdktf.IResolvable): any {
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
      value: dataThunderGslbZoneServiceStatsDnsMxRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceStatsDnsMxRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceStatsDnsMxRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsMxRecordListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsMxRecordListStruct | cdktf.IResolvable | undefined) {
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
  private _stats = new DataThunderGslbZoneServiceStatsDnsMxRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneServiceStatsDnsMxRecordListStats) {
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

export class DataThunderGslbZoneServiceStatsDnsMxRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceStatsDnsMxRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceStatsDnsMxRecordListStructOutputReference {
    return new DataThunderGslbZoneServiceStatsDnsMxRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceStatsDnsNaptrRecordListStats {
  /**
  * Number of times the NAPTR has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#naptr_hits DataThunderGslbZoneServiceStats#naptr_hits}
  */
  readonly naptrHits?: number;
}

export function dataThunderGslbZoneServiceStatsDnsNaptrRecordListStatsToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsNaptrRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsNaptrRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    naptr_hits: cdktf.numberToTerraform(struct!.naptrHits),
  }
}


export function dataThunderGslbZoneServiceStatsDnsNaptrRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsNaptrRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsNaptrRecordListStats): any {
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

export class DataThunderGslbZoneServiceStatsDnsNaptrRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsNaptrRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naptrHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.naptrHits = this._naptrHits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsNaptrRecordListStats | undefined) {
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
export interface DataThunderGslbZoneServiceStatsDnsNaptrRecordListStruct {
  /**
  * Specify the flag (e.g., a, s). Default is empty flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#flag DataThunderGslbZoneServiceStats#flag}
  */
  readonly flag: string;
  /**
  * Specify the replacement or regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#naptr_target DataThunderGslbZoneServiceStats#naptr_target}
  */
  readonly naptrTarget: string;
  /**
  * Specify Service and Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#service_proto DataThunderGslbZoneServiceStats#service_proto}
  */
  readonly serviceProto: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#stats DataThunderGslbZoneServiceStats#stats}
  */
  readonly stats?: DataThunderGslbZoneServiceStatsDnsNaptrRecordListStats;
}

export function dataThunderGslbZoneServiceStatsDnsNaptrRecordListStructToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsNaptrRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flag: cdktf.stringToTerraform(struct!.flag),
    naptr_target: cdktf.stringToTerraform(struct!.naptrTarget),
    service_proto: cdktf.stringToTerraform(struct!.serviceProto),
    stats: dataThunderGslbZoneServiceStatsDnsNaptrRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneServiceStatsDnsNaptrRecordListStructToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsNaptrRecordListStruct | cdktf.IResolvable): any {
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
      value: dataThunderGslbZoneServiceStatsDnsNaptrRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceStatsDnsNaptrRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceStatsDnsNaptrRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsNaptrRecordListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsNaptrRecordListStruct | cdktf.IResolvable | undefined) {
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
  private _stats = new DataThunderGslbZoneServiceStatsDnsNaptrRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneServiceStatsDnsNaptrRecordListStats) {
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

export class DataThunderGslbZoneServiceStatsDnsNaptrRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceStatsDnsNaptrRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceStatsDnsNaptrRecordListStructOutputReference {
    return new DataThunderGslbZoneServiceStatsDnsNaptrRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceStatsDnsNsRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#hits DataThunderGslbZoneServiceStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneServiceStatsDnsNsRecordListStatsToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsNsRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsNsRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneServiceStatsDnsNsRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsNsRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsNsRecordListStats): any {
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

export class DataThunderGslbZoneServiceStatsDnsNsRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsNsRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsNsRecordListStats | undefined) {
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
export interface DataThunderGslbZoneServiceStatsDnsNsRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#ns_name DataThunderGslbZoneServiceStats#ns_name}
  */
  readonly nsName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#stats DataThunderGslbZoneServiceStats#stats}
  */
  readonly stats?: DataThunderGslbZoneServiceStatsDnsNsRecordListStats;
}

export function dataThunderGslbZoneServiceStatsDnsNsRecordListStructToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsNsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ns_name: cdktf.stringToTerraform(struct!.nsName),
    stats: dataThunderGslbZoneServiceStatsDnsNsRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneServiceStatsDnsNsRecordListStructToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsNsRecordListStruct | cdktf.IResolvable): any {
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
      value: dataThunderGslbZoneServiceStatsDnsNsRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceStatsDnsNsRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceStatsDnsNsRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsNsRecordListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsNsRecordListStruct | cdktf.IResolvable | undefined) {
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
  private _stats = new DataThunderGslbZoneServiceStatsDnsNsRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneServiceStatsDnsNsRecordListStats) {
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

export class DataThunderGslbZoneServiceStatsDnsNsRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceStatsDnsNsRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceStatsDnsNsRecordListStructOutputReference {
    return new DataThunderGslbZoneServiceStatsDnsNsRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceStatsDnsPtrRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#hits DataThunderGslbZoneServiceStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneServiceStatsDnsPtrRecordListStatsToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsPtrRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsPtrRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneServiceStatsDnsPtrRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsPtrRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsPtrRecordListStats): any {
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

export class DataThunderGslbZoneServiceStatsDnsPtrRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsPtrRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsPtrRecordListStats | undefined) {
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
export interface DataThunderGslbZoneServiceStatsDnsPtrRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#ptr_name DataThunderGslbZoneServiceStats#ptr_name}
  */
  readonly ptrName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#stats DataThunderGslbZoneServiceStats#stats}
  */
  readonly stats?: DataThunderGslbZoneServiceStatsDnsPtrRecordListStats;
}

export function dataThunderGslbZoneServiceStatsDnsPtrRecordListStructToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsPtrRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ptr_name: cdktf.stringToTerraform(struct!.ptrName),
    stats: dataThunderGslbZoneServiceStatsDnsPtrRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneServiceStatsDnsPtrRecordListStructToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsPtrRecordListStruct | cdktf.IResolvable): any {
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
      value: dataThunderGslbZoneServiceStatsDnsPtrRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceStatsDnsPtrRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceStatsDnsPtrRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsPtrRecordListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsPtrRecordListStruct | cdktf.IResolvable | undefined) {
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
  private _stats = new DataThunderGslbZoneServiceStatsDnsPtrRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneServiceStatsDnsPtrRecordListStats) {
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

export class DataThunderGslbZoneServiceStatsDnsPtrRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceStatsDnsPtrRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceStatsDnsPtrRecordListStructOutputReference {
    return new DataThunderGslbZoneServiceStatsDnsPtrRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceStatsDnsSrvRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#hits DataThunderGslbZoneServiceStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneServiceStatsDnsSrvRecordListStatsToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsSrvRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsSrvRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneServiceStatsDnsSrvRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsSrvRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsSrvRecordListStats): any {
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

export class DataThunderGslbZoneServiceStatsDnsSrvRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsSrvRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsSrvRecordListStats | undefined) {
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
export interface DataThunderGslbZoneServiceStatsDnsSrvRecordListStruct {
  /**
  * Specify Port (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#port DataThunderGslbZoneServiceStats#port}
  */
  readonly port: number;
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#srv_name DataThunderGslbZoneServiceStats#srv_name}
  */
  readonly srvName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#stats DataThunderGslbZoneServiceStats#stats}
  */
  readonly stats?: DataThunderGslbZoneServiceStatsDnsSrvRecordListStats;
}

export function dataThunderGslbZoneServiceStatsDnsSrvRecordListStructToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsSrvRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    srv_name: cdktf.stringToTerraform(struct!.srvName),
    stats: dataThunderGslbZoneServiceStatsDnsSrvRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneServiceStatsDnsSrvRecordListStructToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsSrvRecordListStruct | cdktf.IResolvable): any {
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
      value: dataThunderGslbZoneServiceStatsDnsSrvRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceStatsDnsSrvRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceStatsDnsSrvRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsSrvRecordListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsSrvRecordListStruct | cdktf.IResolvable | undefined) {
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
  private _stats = new DataThunderGslbZoneServiceStatsDnsSrvRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneServiceStatsDnsSrvRecordListStats) {
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

export class DataThunderGslbZoneServiceStatsDnsSrvRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceStatsDnsSrvRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceStatsDnsSrvRecordListStructOutputReference {
    return new DataThunderGslbZoneServiceStatsDnsSrvRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceStatsDnsTxtRecordListStats {
  /**
  * Number of times the record has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#hits DataThunderGslbZoneServiceStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneServiceStatsDnsTxtRecordListStatsToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsTxtRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsTxtRecordListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneServiceStatsDnsTxtRecordListStatsToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsTxtRecordListStatsOutputReference | DataThunderGslbZoneServiceStatsDnsTxtRecordListStats): any {
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

export class DataThunderGslbZoneServiceStatsDnsTxtRecordListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsTxtRecordListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsTxtRecordListStats | undefined) {
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
export interface DataThunderGslbZoneServiceStatsDnsTxtRecordListStruct {
  /**
  * Specify the Object Name for TXT Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#record_name DataThunderGslbZoneServiceStats#record_name}
  */
  readonly recordName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#stats DataThunderGslbZoneServiceStats#stats}
  */
  readonly stats?: DataThunderGslbZoneServiceStatsDnsTxtRecordListStats;
}

export function dataThunderGslbZoneServiceStatsDnsTxtRecordListStructToTerraform(struct?: DataThunderGslbZoneServiceStatsDnsTxtRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_name: cdktf.stringToTerraform(struct!.recordName),
    stats: dataThunderGslbZoneServiceStatsDnsTxtRecordListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderGslbZoneServiceStatsDnsTxtRecordListStructToHclTerraform(struct?: DataThunderGslbZoneServiceStatsDnsTxtRecordListStruct | cdktf.IResolvable): any {
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
      value: dataThunderGslbZoneServiceStatsDnsTxtRecordListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceStatsDnsTxtRecordListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceStatsDnsTxtRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceStatsDnsTxtRecordListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceStatsDnsTxtRecordListStruct | cdktf.IResolvable | undefined) {
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
  private _stats = new DataThunderGslbZoneServiceStatsDnsTxtRecordListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneServiceStatsDnsTxtRecordListStats) {
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

export class DataThunderGslbZoneServiceStatsDnsTxtRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceStatsDnsTxtRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceStatsDnsTxtRecordListStructOutputReference {
    return new DataThunderGslbZoneServiceStatsDnsTxtRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceStatsStats {
  /**
  * help Number of DNS replies sent to clients by the ACOS device in backup mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#backup_mode_response DataThunderGslbZoneServiceStats#backup_mode_response}
  */
  readonly backupModeResponse?: number;
  /**
  * Number of cached DNS replies sent to clients by the ACOS device for the service. (This statistic applies only if the DNS cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#cache_mode_response DataThunderGslbZoneServiceStats#cache_mode_response}
  */
  readonly cacheModeResponse?: number;
  /**
  * Number of DNS replies sent to clients by the ACOS device as a DNS proxy for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#proxy_mode_response DataThunderGslbZoneServiceStats#proxy_mode_response}
  */
  readonly proxyModeResponse?: number;
  /**
  * Number of DNS queries received for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#received_query DataThunderGslbZoneServiceStats#received_query}
  */
  readonly receivedQuery?: number;
  /**
  * Number of DNS replies sent to clients for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#sent_response DataThunderGslbZoneServiceStats#sent_response}
  */
  readonly sentResponse?: number;
  /**
  * Number of DNS replies sent to clients by the ACOS device as a DNS server for the service. (This statistic applies only if the D
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#server_mode_response DataThunderGslbZoneServiceStats#server_mode_response}
  */
  readonly serverModeResponse?: number;
  /**
  * Number of DNS replies sent to clients by the ACOS device to keep the clients on the same site. (This statistic applies only if
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#sticky_mode_response DataThunderGslbZoneServiceStats#sticky_mode_response}
  */
  readonly stickyModeResponse?: number;
}

export function dataThunderGslbZoneServiceStatsStatsToTerraform(struct?: DataThunderGslbZoneServiceStatsStatsOutputReference | DataThunderGslbZoneServiceStatsStats): any {
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
    sticky_mode_response: cdktf.numberToTerraform(struct!.stickyModeResponse),
  }
}


export function dataThunderGslbZoneServiceStatsStatsToHclTerraform(struct?: DataThunderGslbZoneServiceStatsStatsOutputReference | DataThunderGslbZoneServiceStatsStats): any {
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

export class DataThunderGslbZoneServiceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceStatsStats | undefined {
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
    if (this._stickyModeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickyModeResponse = this._stickyModeResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupModeResponse = undefined;
      this._cacheModeResponse = undefined;
      this._proxyModeResponse = undefined;
      this._receivedQuery = undefined;
      this._sentResponse = undefined;
      this._serverModeResponse = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats thunder_gslb_zone_service_stats}
*/
export class DataThunderGslbZoneServiceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_service_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbZoneServiceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbZoneServiceStats to import
  * @param importFromId The id of the existing DataThunderGslbZoneServiceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbZoneServiceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_service_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_stats thunder_gslb_zone_service_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbZoneServiceStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbZoneServiceStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_service_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._serviceName = config.serviceName;
    this._servicePort = config.servicePort;
    this._dnsCaaRecordList.internalValue = config.dnsCaaRecordList;
    this._dnsCnameRecordList.internalValue = config.dnsCnameRecordList;
    this._dnsMxRecordList.internalValue = config.dnsMxRecordList;
    this._dnsNaptrRecordList.internalValue = config.dnsNaptrRecordList;
    this._dnsNsRecordList.internalValue = config.dnsNsRecordList;
    this._dnsPtrRecordList.internalValue = config.dnsPtrRecordList;
    this._dnsSrvRecordList.internalValue = config.dnsSrvRecordList;
    this._dnsTxtRecordList.internalValue = config.dnsTxtRecordList;
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
  private _dnsCaaRecordList = new DataThunderGslbZoneServiceStatsDnsCaaRecordListStructList(this, "dns_caa_record_list", false);
  public get dnsCaaRecordList() {
    return this._dnsCaaRecordList;
  }
  public putDnsCaaRecordList(value: DataThunderGslbZoneServiceStatsDnsCaaRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsCnameRecordList = new DataThunderGslbZoneServiceStatsDnsCnameRecordListStructList(this, "dns_cname_record_list", false);
  public get dnsCnameRecordList() {
    return this._dnsCnameRecordList;
  }
  public putDnsCnameRecordList(value: DataThunderGslbZoneServiceStatsDnsCnameRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsMxRecordList = new DataThunderGslbZoneServiceStatsDnsMxRecordListStructList(this, "dns_mx_record_list", false);
  public get dnsMxRecordList() {
    return this._dnsMxRecordList;
  }
  public putDnsMxRecordList(value: DataThunderGslbZoneServiceStatsDnsMxRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsNaptrRecordList = new DataThunderGslbZoneServiceStatsDnsNaptrRecordListStructList(this, "dns_naptr_record_list", false);
  public get dnsNaptrRecordList() {
    return this._dnsNaptrRecordList;
  }
  public putDnsNaptrRecordList(value: DataThunderGslbZoneServiceStatsDnsNaptrRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsNsRecordList = new DataThunderGslbZoneServiceStatsDnsNsRecordListStructList(this, "dns_ns_record_list", false);
  public get dnsNsRecordList() {
    return this._dnsNsRecordList;
  }
  public putDnsNsRecordList(value: DataThunderGslbZoneServiceStatsDnsNsRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsPtrRecordList = new DataThunderGslbZoneServiceStatsDnsPtrRecordListStructList(this, "dns_ptr_record_list", false);
  public get dnsPtrRecordList() {
    return this._dnsPtrRecordList;
  }
  public putDnsPtrRecordList(value: DataThunderGslbZoneServiceStatsDnsPtrRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsSrvRecordList = new DataThunderGslbZoneServiceStatsDnsSrvRecordListStructList(this, "dns_srv_record_list", false);
  public get dnsSrvRecordList() {
    return this._dnsSrvRecordList;
  }
  public putDnsSrvRecordList(value: DataThunderGslbZoneServiceStatsDnsSrvRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsTxtRecordList = new DataThunderGslbZoneServiceStatsDnsTxtRecordListStructList(this, "dns_txt_record_list", false);
  public get dnsTxtRecordList() {
    return this._dnsTxtRecordList;
  }
  public putDnsTxtRecordList(value: DataThunderGslbZoneServiceStatsDnsTxtRecordListStruct[] | cdktf.IResolvable) {
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
  private _stats = new DataThunderGslbZoneServiceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneServiceStatsStats) {
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
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_port: cdktf.numberToTerraform(this._servicePort),
      dns_caa_record_list: cdktf.listMapper(dataThunderGslbZoneServiceStatsDnsCaaRecordListStructToTerraform, true)(this._dnsCaaRecordList.internalValue),
      dns_cname_record_list: cdktf.listMapper(dataThunderGslbZoneServiceStatsDnsCnameRecordListStructToTerraform, true)(this._dnsCnameRecordList.internalValue),
      dns_mx_record_list: cdktf.listMapper(dataThunderGslbZoneServiceStatsDnsMxRecordListStructToTerraform, true)(this._dnsMxRecordList.internalValue),
      dns_naptr_record_list: cdktf.listMapper(dataThunderGslbZoneServiceStatsDnsNaptrRecordListStructToTerraform, true)(this._dnsNaptrRecordList.internalValue),
      dns_ns_record_list: cdktf.listMapper(dataThunderGslbZoneServiceStatsDnsNsRecordListStructToTerraform, true)(this._dnsNsRecordList.internalValue),
      dns_ptr_record_list: cdktf.listMapper(dataThunderGslbZoneServiceStatsDnsPtrRecordListStructToTerraform, true)(this._dnsPtrRecordList.internalValue),
      dns_srv_record_list: cdktf.listMapper(dataThunderGslbZoneServiceStatsDnsSrvRecordListStructToTerraform, true)(this._dnsSrvRecordList.internalValue),
      dns_txt_record_list: cdktf.listMapper(dataThunderGslbZoneServiceStatsDnsTxtRecordListStructToTerraform, true)(this._dnsTxtRecordList.internalValue),
      stats: dataThunderGslbZoneServiceStatsStatsToTerraform(this._stats.internalValue),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_port: {
        value: cdktf.numberToHclTerraform(this._servicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_caa_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneServiceStatsDnsCaaRecordListStructToHclTerraform, true)(this._dnsCaaRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceStatsDnsCaaRecordListStructList",
      },
      dns_cname_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneServiceStatsDnsCnameRecordListStructToHclTerraform, true)(this._dnsCnameRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceStatsDnsCnameRecordListStructList",
      },
      dns_mx_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneServiceStatsDnsMxRecordListStructToHclTerraform, true)(this._dnsMxRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceStatsDnsMxRecordListStructList",
      },
      dns_naptr_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneServiceStatsDnsNaptrRecordListStructToHclTerraform, true)(this._dnsNaptrRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceStatsDnsNaptrRecordListStructList",
      },
      dns_ns_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneServiceStatsDnsNsRecordListStructToHclTerraform, true)(this._dnsNsRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceStatsDnsNsRecordListStructList",
      },
      dns_ptr_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneServiceStatsDnsPtrRecordListStructToHclTerraform, true)(this._dnsPtrRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceStatsDnsPtrRecordListStructList",
      },
      dns_srv_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneServiceStatsDnsSrvRecordListStructToHclTerraform, true)(this._dnsSrvRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceStatsDnsSrvRecordListStructList",
      },
      dns_txt_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneServiceStatsDnsTxtRecordListStructToHclTerraform, true)(this._dnsTxtRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceStatsDnsTxtRecordListStructList",
      },
      stats: {
        value: dataThunderGslbZoneServiceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
