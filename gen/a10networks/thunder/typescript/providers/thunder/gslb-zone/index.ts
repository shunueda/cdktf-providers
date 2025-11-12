// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable all services in the GSLB zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#disable GslbZone#disable}
  */
  readonly disable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#id GslbZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the name for the DNS zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#name GslbZone#name}
  */
  readonly name: string;
  /**
  * Specify the policy for this zone (Specify policy name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#policy GslbZone#policy}
  */
  readonly policy?: string;
  /**
  * Specify the zone ttl value (TTL value, unit: second, default is 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * Use DNS Server Response TTL value in GSLB Proxy mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#use_server_ttl GslbZone#use_server_ttl}
  */
  readonly useServerTtl?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#user_tag GslbZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * dns_caa_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_caa_record_list GslbZone#dns_caa_record_list}
  */
  readonly dnsCaaRecordList?: GslbZoneDnsCaaRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_mx_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_mx_record_list GslbZone#dns_mx_record_list}
  */
  readonly dnsMxRecordList?: GslbZoneDnsMxRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ns_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_ns_record_list GslbZone#dns_ns_record_list}
  */
  readonly dnsNsRecordList?: GslbZoneDnsNsRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_soa_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_soa_record GslbZone#dns_soa_record}
  */
  readonly dnsSoaRecord?: GslbZoneDnsSoaRecord;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneSamplingEnable[] | cdktf.IResolvable;
  /**
  * service_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#service_list GslbZone#service_list}
  */
  readonly serviceList?: GslbZoneServiceListStruct[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#template GslbZone#template}
  */
  readonly template?: GslbZoneTemplate;
}
export interface GslbZoneDnsCaaRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneDnsCaaRecordListSamplingEnableToTerraform(struct?: GslbZoneDnsCaaRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneDnsCaaRecordListSamplingEnableToHclTerraform(struct?: GslbZoneDnsCaaRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneDnsCaaRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneDnsCaaRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneDnsCaaRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneDnsCaaRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneDnsCaaRecordListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneDnsCaaRecordListSamplingEnableOutputReference {
    return new GslbZoneDnsCaaRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneDnsCaaRecordListStruct {
  /**
  * Issuer Critical Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#critical_flag GslbZone#critical_flag}
  */
  readonly criticalFlag: number;
  /**
  * Specify other property tags, only allowed lowercase alphanumeric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#property_tag GslbZone#property_tag}
  */
  readonly propertyTag: string;
  /**
  * Specify the Issuer Domain Name or a URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#rdata GslbZone#rdata}
  */
  readonly rdata: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneDnsCaaRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneDnsCaaRecordListStructToTerraform(struct?: GslbZoneDnsCaaRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical_flag: cdktf.numberToTerraform(struct!.criticalFlag),
    property_tag: cdktf.stringToTerraform(struct!.propertyTag),
    rdata: cdktf.stringToTerraform(struct!.rdata),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneDnsCaaRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneDnsCaaRecordListStructToHclTerraform(struct?: GslbZoneDnsCaaRecordListStruct | cdktf.IResolvable): any {
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
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneDnsCaaRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneDnsCaaRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneDnsCaaRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneDnsCaaRecordListStruct | cdktf.IResolvable | undefined {
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
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneDnsCaaRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criticalFlag = undefined;
      this._propertyTag = undefined;
      this._rdata = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
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
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneDnsCaaRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneDnsCaaRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneDnsCaaRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneDnsCaaRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneDnsCaaRecordListStructOutputReference {
    return new GslbZoneDnsCaaRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneDnsMxRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneDnsMxRecordListSamplingEnableToTerraform(struct?: GslbZoneDnsMxRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneDnsMxRecordListSamplingEnableToHclTerraform(struct?: GslbZoneDnsMxRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneDnsMxRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneDnsMxRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneDnsMxRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneDnsMxRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneDnsMxRecordListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneDnsMxRecordListSamplingEnableOutputReference {
    return new GslbZoneDnsMxRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneDnsMxRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#mx_name GslbZone#mx_name}
  */
  readonly mxName: string;
  /**
  * Specify Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#priority GslbZone#priority}
  */
  readonly priority?: number;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneDnsMxRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneDnsMxRecordListStructToTerraform(struct?: GslbZoneDnsMxRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mx_name: cdktf.stringToTerraform(struct!.mxName),
    priority: cdktf.numberToTerraform(struct!.priority),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneDnsMxRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneDnsMxRecordListStructToHclTerraform(struct?: GslbZoneDnsMxRecordListStruct | cdktf.IResolvable): any {
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneDnsMxRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneDnsMxRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneDnsMxRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneDnsMxRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxName = this._mxName;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneDnsMxRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mxName = undefined;
      this._priority = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mxName = value.mxName;
      this._priority = value.priority;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneDnsMxRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneDnsMxRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneDnsMxRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneDnsMxRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneDnsMxRecordListStructOutputReference {
    return new GslbZoneDnsMxRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneDnsNsRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneDnsNsRecordListSamplingEnableToTerraform(struct?: GslbZoneDnsNsRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneDnsNsRecordListSamplingEnableToHclTerraform(struct?: GslbZoneDnsNsRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneDnsNsRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneDnsNsRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneDnsNsRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneDnsNsRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneDnsNsRecordListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneDnsNsRecordListSamplingEnableOutputReference {
    return new GslbZoneDnsNsRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneDnsNsRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ns_name GslbZone#ns_name}
  */
  readonly nsName: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneDnsNsRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneDnsNsRecordListStructToTerraform(struct?: GslbZoneDnsNsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ns_name: cdktf.stringToTerraform(struct!.nsName),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneDnsNsRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneDnsNsRecordListStructToHclTerraform(struct?: GslbZoneDnsNsRecordListStruct | cdktf.IResolvable): any {
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
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneDnsNsRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneDnsNsRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneDnsNsRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneDnsNsRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsName = this._nsName;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneDnsNsRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsName = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsName = value.nsName;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneDnsNsRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneDnsNsRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneDnsNsRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneDnsNsRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneDnsNsRecordListStructOutputReference {
    return new GslbZoneDnsNsRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneDnsSoaRecord {
  /**
  * Specify Expire Time Interval, default is 1209600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ex_expire GslbZone#ex_expire}
  */
  readonly exExpire?: number;
  /**
  * Mailbox
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ex_mail GslbZone#ex_mail}
  */
  readonly exMail?: string;
  /**
  * Specify Refresh Time Interval, default is 3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ex_refresh GslbZone#ex_refresh}
  */
  readonly exRefresh?: number;
  /**
  * Specify Retry Time Interval, default is 900
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ex_retry GslbZone#ex_retry}
  */
  readonly exRetry?: number;
  /**
  * Specify Serial Number, default is Current Time (Time Interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ex_serial GslbZone#ex_serial}
  */
  readonly exSerial?: number;
  /**
  * Specify Negative caching TTL, default is Zone TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ex_soa_ttl GslbZone#ex_soa_ttl}
  */
  readonly exSoaTtl?: number;
  /**
  * Specify Expire Time Interval, default is 1209600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#expire GslbZone#expire}
  */
  readonly expire?: number;
  /**
  * Specify External SOA Record (DNS Server Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#external GslbZone#external}
  */
  readonly external?: string;
  /**
  * Mailbox
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#mail GslbZone#mail}
  */
  readonly mail?: string;
  /**
  * Specify Refresh Time Interval, default is 3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#refresh GslbZone#refresh}
  */
  readonly refresh?: number;
  /**
  * Specify Retry Time Interval, default is 900
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#retry GslbZone#retry}
  */
  readonly retry?: number;
  /**
  * Specify Serial Number, default is Current Time (Time Interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#serial GslbZone#serial}
  */
  readonly serial?: number;
  /**
  * DNS Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#soa_name GslbZone#soa_name}
  */
  readonly soaName?: string;
  /**
  * Specify Negative caching TTL, default is Zone TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#soa_ttl GslbZone#soa_ttl}
  */
  readonly soaTtl?: number;
}

export function gslbZoneDnsSoaRecordToTerraform(struct?: GslbZoneDnsSoaRecordOutputReference | GslbZoneDnsSoaRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ex_expire: cdktf.numberToTerraform(struct!.exExpire),
    ex_mail: cdktf.stringToTerraform(struct!.exMail),
    ex_refresh: cdktf.numberToTerraform(struct!.exRefresh),
    ex_retry: cdktf.numberToTerraform(struct!.exRetry),
    ex_serial: cdktf.numberToTerraform(struct!.exSerial),
    ex_soa_ttl: cdktf.numberToTerraform(struct!.exSoaTtl),
    expire: cdktf.numberToTerraform(struct!.expire),
    external: cdktf.stringToTerraform(struct!.external),
    mail: cdktf.stringToTerraform(struct!.mail),
    refresh: cdktf.numberToTerraform(struct!.refresh),
    retry: cdktf.numberToTerraform(struct!.retry),
    serial: cdktf.numberToTerraform(struct!.serial),
    soa_name: cdktf.stringToTerraform(struct!.soaName),
    soa_ttl: cdktf.numberToTerraform(struct!.soaTtl),
  }
}


export function gslbZoneDnsSoaRecordToHclTerraform(struct?: GslbZoneDnsSoaRecordOutputReference | GslbZoneDnsSoaRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ex_expire: {
      value: cdktf.numberToHclTerraform(struct!.exExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ex_mail: {
      value: cdktf.stringToHclTerraform(struct!.exMail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ex_refresh: {
      value: cdktf.numberToHclTerraform(struct!.exRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ex_retry: {
      value: cdktf.numberToHclTerraform(struct!.exRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ex_serial: {
      value: cdktf.numberToHclTerraform(struct!.exSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ex_soa_ttl: {
      value: cdktf.numberToHclTerraform(struct!.exSoaTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expire: {
      value: cdktf.numberToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external: {
      value: cdktf.stringToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail: {
      value: cdktf.stringToHclTerraform(struct!.mail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh: {
      value: cdktf.numberToHclTerraform(struct!.refresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serial: {
      value: cdktf.numberToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soa_name: {
      value: cdktf.stringToHclTerraform(struct!.soaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soa_ttl: {
      value: cdktf.numberToHclTerraform(struct!.soaTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneDnsSoaRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbZoneDnsSoaRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.exExpire = this._exExpire;
    }
    if (this._exMail !== undefined) {
      hasAnyValues = true;
      internalValueResult.exMail = this._exMail;
    }
    if (this._exRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.exRefresh = this._exRefresh;
    }
    if (this._exRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.exRetry = this._exRetry;
    }
    if (this._exSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.exSerial = this._exSerial;
    }
    if (this._exSoaTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.exSoaTtl = this._exSoaTtl;
    }
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._mail !== undefined) {
      hasAnyValues = true;
      internalValueResult.mail = this._mail;
    }
    if (this._refresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.refresh = this._refresh;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._soaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaName = this._soaName;
    }
    if (this._soaTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaTtl = this._soaTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneDnsSoaRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exExpire = undefined;
      this._exMail = undefined;
      this._exRefresh = undefined;
      this._exRetry = undefined;
      this._exSerial = undefined;
      this._exSoaTtl = undefined;
      this._expire = undefined;
      this._external = undefined;
      this._mail = undefined;
      this._refresh = undefined;
      this._retry = undefined;
      this._serial = undefined;
      this._soaName = undefined;
      this._soaTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exExpire = value.exExpire;
      this._exMail = value.exMail;
      this._exRefresh = value.exRefresh;
      this._exRetry = value.exRetry;
      this._exSerial = value.exSerial;
      this._exSoaTtl = value.exSoaTtl;
      this._expire = value.expire;
      this._external = value.external;
      this._mail = value.mail;
      this._refresh = value.refresh;
      this._retry = value.retry;
      this._serial = value.serial;
      this._soaName = value.soaName;
      this._soaTtl = value.soaTtl;
    }
  }

  // ex_expire - computed: false, optional: true, required: false
  private _exExpire?: number; 
  public get exExpire() {
    return this.getNumberAttribute('ex_expire');
  }
  public set exExpire(value: number) {
    this._exExpire = value;
  }
  public resetExExpire() {
    this._exExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exExpireInput() {
    return this._exExpire;
  }

  // ex_mail - computed: false, optional: true, required: false
  private _exMail?: string; 
  public get exMail() {
    return this.getStringAttribute('ex_mail');
  }
  public set exMail(value: string) {
    this._exMail = value;
  }
  public resetExMail() {
    this._exMail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exMailInput() {
    return this._exMail;
  }

  // ex_refresh - computed: false, optional: true, required: false
  private _exRefresh?: number; 
  public get exRefresh() {
    return this.getNumberAttribute('ex_refresh');
  }
  public set exRefresh(value: number) {
    this._exRefresh = value;
  }
  public resetExRefresh() {
    this._exRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exRefreshInput() {
    return this._exRefresh;
  }

  // ex_retry - computed: false, optional: true, required: false
  private _exRetry?: number; 
  public get exRetry() {
    return this.getNumberAttribute('ex_retry');
  }
  public set exRetry(value: number) {
    this._exRetry = value;
  }
  public resetExRetry() {
    this._exRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exRetryInput() {
    return this._exRetry;
  }

  // ex_serial - computed: false, optional: true, required: false
  private _exSerial?: number; 
  public get exSerial() {
    return this.getNumberAttribute('ex_serial');
  }
  public set exSerial(value: number) {
    this._exSerial = value;
  }
  public resetExSerial() {
    this._exSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exSerialInput() {
    return this._exSerial;
  }

  // ex_soa_ttl - computed: false, optional: true, required: false
  private _exSoaTtl?: number; 
  public get exSoaTtl() {
    return this.getNumberAttribute('ex_soa_ttl');
  }
  public set exSoaTtl(value: number) {
    this._exSoaTtl = value;
  }
  public resetExSoaTtl() {
    this._exSoaTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exSoaTtlInput() {
    return this._exSoaTtl;
  }

  // expire - computed: false, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // external - computed: false, optional: true, required: false
  private _external?: string; 
  public get external() {
    return this.getStringAttribute('external');
  }
  public set external(value: string) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // mail - computed: false, optional: true, required: false
  private _mail?: string; 
  public get mail() {
    return this.getStringAttribute('mail');
  }
  public set mail(value: string) {
    this._mail = value;
  }
  public resetMail() {
    this._mail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailInput() {
    return this._mail;
  }

  // refresh - computed: false, optional: true, required: false
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: number; 
  public get serial() {
    return this.getNumberAttribute('serial');
  }
  public set serial(value: number) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // soa_name - computed: false, optional: true, required: false
  private _soaName?: string; 
  public get soaName() {
    return this.getStringAttribute('soa_name');
  }
  public set soaName(value: string) {
    this._soaName = value;
  }
  public resetSoaName() {
    this._soaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaNameInput() {
    return this._soaName;
  }

  // soa_ttl - computed: false, optional: true, required: false
  private _soaTtl?: number; 
  public get soaTtl() {
    return this.getNumberAttribute('soa_ttl');
  }
  public set soaTtl(value: number) {
    this._soaTtl = value;
  }
  public resetSoaTtl() {
    this._soaTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaTtlInput() {
    return this._soaTtl;
  }
}
export interface GslbZoneSamplingEnable {
  /**
  * 'all': all; 'received-query': Total Number of DNS queries received for the zone; 'sent-response': Total Number of DNS replies sent to clients for the zone; 'proxy-mode-response': Total Number of DNS replies sent to clients by the ACOS device as a DNS proxy for the zone; 'cache-mode-response': Total Number of cached DNS replies sent to clients by the ACOS device for the zone. (This statistic applies only if the DNS cac; 'server-mode-response': Total Number of DNS replies sent to clients by the ACOS device as a DNS server for the zone. (This statistic applies only if th; 'sticky-mode-response': Total Number of DNS replies sent to clients by the ACOS device to keep the clients on the same site. (This statistic applies on; 'backup-mode-response': Total Number of DNS replies sent to clients by the ACOS device in backup mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneSamplingEnableToTerraform(struct?: GslbZoneSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneSamplingEnableToHclTerraform(struct?: GslbZoneSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneSamplingEnableOutputReference {
    return new GslbZoneSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsARecordDnsARecordIpv4ListStruct {
  /**
  * Specify admin priority of Service-IP (Specify the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#admin_ip GslbZone#admin_ip}
  */
  readonly adminIp?: number;
  /**
  * As backup when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#as_backup GslbZone#as_backup}
  */
  readonly asBackup?: number;
  /**
  * Return this Service-IP when enable ip-replace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#as_replace GslbZone#as_replace}
  */
  readonly asReplace?: number;
  /**
  * Disable this Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#disable GslbZone#disable}
  */
  readonly disable?: number;
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_a_record_ip GslbZone#dns_a_record_ip}
  */
  readonly dnsARecordIp: string;
  /**
  * Don't use this Service-IP as DNS response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#no_resp GslbZone#no_resp}
  */
  readonly noResp?: number;
  /**
  * Return this Service-IP in DNS server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#static GslbZone#static}
  */
  readonly static?: number;
  /**
  * Specify TTL for Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify weight for Service-IP (Weight value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#weight GslbZone#weight}
  */
  readonly weight?: number;
}

export function gslbZoneServiceListDnsARecordDnsARecordIpv4ListStructToTerraform(struct?: GslbZoneServiceListDnsARecordDnsARecordIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_ip: cdktf.numberToTerraform(struct!.adminIp),
    as_backup: cdktf.numberToTerraform(struct!.asBackup),
    as_replace: cdktf.numberToTerraform(struct!.asReplace),
    disable: cdktf.numberToTerraform(struct!.disable),
    dns_a_record_ip: cdktf.stringToTerraform(struct!.dnsARecordIp),
    no_resp: cdktf.numberToTerraform(struct!.noResp),
    static: cdktf.numberToTerraform(struct!.static),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gslbZoneServiceListDnsARecordDnsARecordIpv4ListStructToHclTerraform(struct?: GslbZoneServiceListDnsARecordDnsARecordIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_ip: {
      value: cdktf.numberToHclTerraform(struct!.adminIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_backup: {
      value: cdktf.numberToHclTerraform(struct!.asBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_replace: {
      value: cdktf.numberToHclTerraform(struct!.asReplace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_a_record_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsARecordIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_resp: {
      value: cdktf.numberToHclTerraform(struct!.noResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsARecordDnsARecordIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsARecordDnsARecordIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminIp = this._adminIp;
    }
    if (this._asBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.asBackup = this._asBackup;
    }
    if (this._asReplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.asReplace = this._asReplace;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._dnsARecordIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecordIp = this._dnsARecordIp;
    }
    if (this._noResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResp = this._noResp;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsARecordDnsARecordIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminIp = undefined;
      this._asBackup = undefined;
      this._asReplace = undefined;
      this._disable = undefined;
      this._dnsARecordIp = undefined;
      this._noResp = undefined;
      this._static = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminIp = value.adminIp;
      this._asBackup = value.asBackup;
      this._asReplace = value.asReplace;
      this._disable = value.disable;
      this._dnsARecordIp = value.dnsARecordIp;
      this._noResp = value.noResp;
      this._static = value.static;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._weight = value.weight;
    }
  }

  // admin_ip - computed: false, optional: true, required: false
  private _adminIp?: number; 
  public get adminIp() {
    return this.getNumberAttribute('admin_ip');
  }
  public set adminIp(value: number) {
    this._adminIp = value;
  }
  public resetAdminIp() {
    this._adminIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIpInput() {
    return this._adminIp;
  }

  // as_backup - computed: false, optional: true, required: false
  private _asBackup?: number; 
  public get asBackup() {
    return this.getNumberAttribute('as_backup');
  }
  public set asBackup(value: number) {
    this._asBackup = value;
  }
  public resetAsBackup() {
    this._asBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asBackupInput() {
    return this._asBackup;
  }

  // as_replace - computed: false, optional: true, required: false
  private _asReplace?: number; 
  public get asReplace() {
    return this.getNumberAttribute('as_replace');
  }
  public set asReplace(value: number) {
    this._asReplace = value;
  }
  public resetAsReplace() {
    this._asReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asReplaceInput() {
    return this._asReplace;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_a_record_ip - computed: false, optional: false, required: true
  private _dnsARecordIp?: string; 
  public get dnsARecordIp() {
    return this.getStringAttribute('dns_a_record_ip');
  }
  public set dnsARecordIp(value: string) {
    this._dnsARecordIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordIpInput() {
    return this._dnsARecordIp;
  }

  // no_resp - computed: false, optional: true, required: false
  private _noResp?: number; 
  public get noResp() {
    return this.getNumberAttribute('no_resp');
  }
  public set noResp(value: number) {
    this._noResp = value;
  }
  public resetNoResp() {
    this._noResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRespInput() {
    return this._noResp;
  }

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class GslbZoneServiceListDnsARecordDnsARecordIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsARecordDnsARecordIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsARecordDnsARecordIpv4ListStructOutputReference {
    return new GslbZoneServiceListDnsARecordDnsARecordIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsARecordDnsARecordIpv6ListStruct {
  /**
  * Specify admin priority of Service-IP (Specify the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#admin_ip GslbZone#admin_ip}
  */
  readonly adminIp?: number;
  /**
  * As backup when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#as_backup GslbZone#as_backup}
  */
  readonly asBackup?: number;
  /**
  * Return this Service-IP when enable ip-replace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#as_replace GslbZone#as_replace}
  */
  readonly asReplace?: number;
  /**
  * Disable this Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#disable GslbZone#disable}
  */
  readonly disable?: number;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_a_record_ipv6 GslbZone#dns_a_record_ipv6}
  */
  readonly dnsARecordIpv6: string;
  /**
  * Don't use this Service-IP as DNS response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#no_resp GslbZone#no_resp}
  */
  readonly noResp?: number;
  /**
  * Return this Service-IP in DNS server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#static GslbZone#static}
  */
  readonly static?: number;
  /**
  * Specify TTL for Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify weight for Service-IP (Weight value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#weight GslbZone#weight}
  */
  readonly weight?: number;
}

export function gslbZoneServiceListDnsARecordDnsARecordIpv6ListStructToTerraform(struct?: GslbZoneServiceListDnsARecordDnsARecordIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_ip: cdktf.numberToTerraform(struct!.adminIp),
    as_backup: cdktf.numberToTerraform(struct!.asBackup),
    as_replace: cdktf.numberToTerraform(struct!.asReplace),
    disable: cdktf.numberToTerraform(struct!.disable),
    dns_a_record_ipv6: cdktf.stringToTerraform(struct!.dnsARecordIpv6),
    no_resp: cdktf.numberToTerraform(struct!.noResp),
    static: cdktf.numberToTerraform(struct!.static),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gslbZoneServiceListDnsARecordDnsARecordIpv6ListStructToHclTerraform(struct?: GslbZoneServiceListDnsARecordDnsARecordIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_ip: {
      value: cdktf.numberToHclTerraform(struct!.adminIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_backup: {
      value: cdktf.numberToHclTerraform(struct!.asBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_replace: {
      value: cdktf.numberToHclTerraform(struct!.asReplace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_a_record_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.dnsARecordIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_resp: {
      value: cdktf.numberToHclTerraform(struct!.noResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsARecordDnsARecordIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsARecordDnsARecordIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminIp = this._adminIp;
    }
    if (this._asBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.asBackup = this._asBackup;
    }
    if (this._asReplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.asReplace = this._asReplace;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._dnsARecordIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecordIpv6 = this._dnsARecordIpv6;
    }
    if (this._noResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResp = this._noResp;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsARecordDnsARecordIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminIp = undefined;
      this._asBackup = undefined;
      this._asReplace = undefined;
      this._disable = undefined;
      this._dnsARecordIpv6 = undefined;
      this._noResp = undefined;
      this._static = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminIp = value.adminIp;
      this._asBackup = value.asBackup;
      this._asReplace = value.asReplace;
      this._disable = value.disable;
      this._dnsARecordIpv6 = value.dnsARecordIpv6;
      this._noResp = value.noResp;
      this._static = value.static;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._weight = value.weight;
    }
  }

  // admin_ip - computed: false, optional: true, required: false
  private _adminIp?: number; 
  public get adminIp() {
    return this.getNumberAttribute('admin_ip');
  }
  public set adminIp(value: number) {
    this._adminIp = value;
  }
  public resetAdminIp() {
    this._adminIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIpInput() {
    return this._adminIp;
  }

  // as_backup - computed: false, optional: true, required: false
  private _asBackup?: number; 
  public get asBackup() {
    return this.getNumberAttribute('as_backup');
  }
  public set asBackup(value: number) {
    this._asBackup = value;
  }
  public resetAsBackup() {
    this._asBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asBackupInput() {
    return this._asBackup;
  }

  // as_replace - computed: false, optional: true, required: false
  private _asReplace?: number; 
  public get asReplace() {
    return this.getNumberAttribute('as_replace');
  }
  public set asReplace(value: number) {
    this._asReplace = value;
  }
  public resetAsReplace() {
    this._asReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asReplaceInput() {
    return this._asReplace;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_a_record_ipv6 - computed: false, optional: false, required: true
  private _dnsARecordIpv6?: string; 
  public get dnsARecordIpv6() {
    return this.getStringAttribute('dns_a_record_ipv6');
  }
  public set dnsARecordIpv6(value: string) {
    this._dnsARecordIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordIpv6Input() {
    return this._dnsARecordIpv6;
  }

  // no_resp - computed: false, optional: true, required: false
  private _noResp?: number; 
  public get noResp() {
    return this.getNumberAttribute('no_resp');
  }
  public set noResp(value: number) {
    this._noResp = value;
  }
  public resetNoResp() {
    this._noResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRespInput() {
    return this._noResp;
  }

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class GslbZoneServiceListDnsARecordDnsARecordIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsARecordDnsARecordIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsARecordDnsARecordIpv6ListStructOutputReference {
    return new GslbZoneServiceListDnsARecordDnsARecordIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsARecordDnsARecordSrvListStruct {
  /**
  * Specify admin priority of Service-IP (Specify the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#admin_ip GslbZone#admin_ip}
  */
  readonly adminIp?: number;
  /**
  * As backup when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#as_backup GslbZone#as_backup}
  */
  readonly asBackup?: number;
  /**
  * Return this Service-IP when enable ip-replace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#as_replace GslbZone#as_replace}
  */
  readonly asReplace?: number;
  /**
  * Disable this Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#disable GslbZone#disable}
  */
  readonly disable?: number;
  /**
  * Don't use this Service-IP as DNS response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#no_resp GslbZone#no_resp}
  */
  readonly noResp?: number;
  /**
  * Return this Service-IP in DNS server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#static GslbZone#static}
  */
  readonly static?: number;
  /**
  * Specify name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#svrname GslbZone#svrname}
  */
  readonly svrname: string;
  /**
  * Specify TTL for Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify weight for Service-IP (Weight value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#weight GslbZone#weight}
  */
  readonly weight?: number;
}

export function gslbZoneServiceListDnsARecordDnsARecordSrvListStructToTerraform(struct?: GslbZoneServiceListDnsARecordDnsARecordSrvListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_ip: cdktf.numberToTerraform(struct!.adminIp),
    as_backup: cdktf.numberToTerraform(struct!.asBackup),
    as_replace: cdktf.numberToTerraform(struct!.asReplace),
    disable: cdktf.numberToTerraform(struct!.disable),
    no_resp: cdktf.numberToTerraform(struct!.noResp),
    static: cdktf.numberToTerraform(struct!.static),
    svrname: cdktf.stringToTerraform(struct!.svrname),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gslbZoneServiceListDnsARecordDnsARecordSrvListStructToHclTerraform(struct?: GslbZoneServiceListDnsARecordDnsARecordSrvListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_ip: {
      value: cdktf.numberToHclTerraform(struct!.adminIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_backup: {
      value: cdktf.numberToHclTerraform(struct!.asBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_replace: {
      value: cdktf.numberToHclTerraform(struct!.asReplace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_resp: {
      value: cdktf.numberToHclTerraform(struct!.noResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svrname: {
      value: cdktf.stringToHclTerraform(struct!.svrname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsARecordDnsARecordSrvListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsARecordDnsARecordSrvListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminIp = this._adminIp;
    }
    if (this._asBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.asBackup = this._asBackup;
    }
    if (this._asReplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.asReplace = this._asReplace;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._noResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResp = this._noResp;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._svrname !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrname = this._svrname;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsARecordDnsARecordSrvListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminIp = undefined;
      this._asBackup = undefined;
      this._asReplace = undefined;
      this._disable = undefined;
      this._noResp = undefined;
      this._static = undefined;
      this._svrname = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminIp = value.adminIp;
      this._asBackup = value.asBackup;
      this._asReplace = value.asReplace;
      this._disable = value.disable;
      this._noResp = value.noResp;
      this._static = value.static;
      this._svrname = value.svrname;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._weight = value.weight;
    }
  }

  // admin_ip - computed: false, optional: true, required: false
  private _adminIp?: number; 
  public get adminIp() {
    return this.getNumberAttribute('admin_ip');
  }
  public set adminIp(value: number) {
    this._adminIp = value;
  }
  public resetAdminIp() {
    this._adminIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIpInput() {
    return this._adminIp;
  }

  // as_backup - computed: false, optional: true, required: false
  private _asBackup?: number; 
  public get asBackup() {
    return this.getNumberAttribute('as_backup');
  }
  public set asBackup(value: number) {
    this._asBackup = value;
  }
  public resetAsBackup() {
    this._asBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asBackupInput() {
    return this._asBackup;
  }

  // as_replace - computed: false, optional: true, required: false
  private _asReplace?: number; 
  public get asReplace() {
    return this.getNumberAttribute('as_replace');
  }
  public set asReplace(value: number) {
    this._asReplace = value;
  }
  public resetAsReplace() {
    this._asReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asReplaceInput() {
    return this._asReplace;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // no_resp - computed: false, optional: true, required: false
  private _noResp?: number; 
  public get noResp() {
    return this.getNumberAttribute('no_resp');
  }
  public set noResp(value: number) {
    this._noResp = value;
  }
  public resetNoResp() {
    this._noResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRespInput() {
    return this._noResp;
  }

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // svrname - computed: false, optional: false, required: true
  private _svrname?: string; 
  public get svrname() {
    return this.getStringAttribute('svrname');
  }
  public set svrname(value: string) {
    this._svrname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svrnameInput() {
    return this._svrname;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class GslbZoneServiceListDnsARecordDnsARecordSrvListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsARecordDnsARecordSrvListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsARecordDnsARecordSrvListStructOutputReference {
    return new GslbZoneServiceListDnsARecordDnsARecordSrvListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsARecord {
  /**
  * dns_a_record_ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_a_record_ipv4_list GslbZone#dns_a_record_ipv4_list}
  */
  readonly dnsARecordIpv4List?: GslbZoneServiceListDnsARecordDnsARecordIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * dns_a_record_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_a_record_ipv6_list GslbZone#dns_a_record_ipv6_list}
  */
  readonly dnsARecordIpv6List?: GslbZoneServiceListDnsARecordDnsARecordIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * dns_a_record_srv_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_a_record_srv_list GslbZone#dns_a_record_srv_list}
  */
  readonly dnsARecordSrvList?: GslbZoneServiceListDnsARecordDnsARecordSrvListStruct[] | cdktf.IResolvable;
}

export function gslbZoneServiceListDnsARecordToTerraform(struct?: GslbZoneServiceListDnsARecordOutputReference | GslbZoneServiceListDnsARecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_a_record_ipv4_list: cdktf.listMapper(gslbZoneServiceListDnsARecordDnsARecordIpv4ListStructToTerraform, true)(struct!.dnsARecordIpv4List),
    dns_a_record_ipv6_list: cdktf.listMapper(gslbZoneServiceListDnsARecordDnsARecordIpv6ListStructToTerraform, true)(struct!.dnsARecordIpv6List),
    dns_a_record_srv_list: cdktf.listMapper(gslbZoneServiceListDnsARecordDnsARecordSrvListStructToTerraform, true)(struct!.dnsARecordSrvList),
  }
}


export function gslbZoneServiceListDnsARecordToHclTerraform(struct?: GslbZoneServiceListDnsARecordOutputReference | GslbZoneServiceListDnsARecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_a_record_ipv4_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsARecordDnsARecordIpv4ListStructToHclTerraform, true)(struct!.dnsARecordIpv4List),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsARecordDnsARecordIpv4ListStructList",
    },
    dns_a_record_ipv6_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsARecordDnsARecordIpv6ListStructToHclTerraform, true)(struct!.dnsARecordIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsARecordDnsARecordIpv6ListStructList",
    },
    dns_a_record_srv_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsARecordDnsARecordSrvListStructToHclTerraform, true)(struct!.dnsARecordSrvList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsARecordDnsARecordSrvListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsARecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbZoneServiceListDnsARecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsARecordIpv4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecordIpv4List = this._dnsARecordIpv4List?.internalValue;
    }
    if (this._dnsARecordIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecordIpv6List = this._dnsARecordIpv6List?.internalValue;
    }
    if (this._dnsARecordSrvList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecordSrvList = this._dnsARecordSrvList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsARecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsARecordIpv4List.internalValue = undefined;
      this._dnsARecordIpv6List.internalValue = undefined;
      this._dnsARecordSrvList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsARecordIpv4List.internalValue = value.dnsARecordIpv4List;
      this._dnsARecordIpv6List.internalValue = value.dnsARecordIpv6List;
      this._dnsARecordSrvList.internalValue = value.dnsARecordSrvList;
    }
  }

  // dns_a_record_ipv4_list - computed: false, optional: true, required: false
  private _dnsARecordIpv4List = new GslbZoneServiceListDnsARecordDnsARecordIpv4ListStructList(this, "dns_a_record_ipv4_list", false);
  public get dnsARecordIpv4List() {
    return this._dnsARecordIpv4List;
  }
  public putDnsARecordIpv4List(value: GslbZoneServiceListDnsARecordDnsARecordIpv4ListStruct[] | cdktf.IResolvable) {
    this._dnsARecordIpv4List.internalValue = value;
  }
  public resetDnsARecordIpv4List() {
    this._dnsARecordIpv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordIpv4ListInput() {
    return this._dnsARecordIpv4List.internalValue;
  }

  // dns_a_record_ipv6_list - computed: false, optional: true, required: false
  private _dnsARecordIpv6List = new GslbZoneServiceListDnsARecordDnsARecordIpv6ListStructList(this, "dns_a_record_ipv6_list", false);
  public get dnsARecordIpv6List() {
    return this._dnsARecordIpv6List;
  }
  public putDnsARecordIpv6List(value: GslbZoneServiceListDnsARecordDnsARecordIpv6ListStruct[] | cdktf.IResolvable) {
    this._dnsARecordIpv6List.internalValue = value;
  }
  public resetDnsARecordIpv6List() {
    this._dnsARecordIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordIpv6ListInput() {
    return this._dnsARecordIpv6List.internalValue;
  }

  // dns_a_record_srv_list - computed: false, optional: true, required: false
  private _dnsARecordSrvList = new GslbZoneServiceListDnsARecordDnsARecordSrvListStructList(this, "dns_a_record_srv_list", false);
  public get dnsARecordSrvList() {
    return this._dnsARecordSrvList;
  }
  public putDnsARecordSrvList(value: GslbZoneServiceListDnsARecordDnsARecordSrvListStruct[] | cdktf.IResolvable) {
    this._dnsARecordSrvList.internalValue = value;
  }
  public resetDnsARecordSrvList() {
    this._dnsARecordSrvList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordSrvListInput() {
    return this._dnsARecordSrvList.internalValue;
  }
}
export interface GslbZoneServiceListDnsCaaRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the CAA has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceListDnsCaaRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceListDnsCaaRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceListDnsCaaRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceListDnsCaaRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsCaaRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsCaaRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsCaaRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceListDnsCaaRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsCaaRecordListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsCaaRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceListDnsCaaRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsCaaRecordListStruct {
  /**
  * Issuer Critical Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#critical_flag GslbZone#critical_flag}
  */
  readonly criticalFlag: number;
  /**
  * Specify other property tags, only allowed lowercase alphanumeric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#property_tag GslbZone#property_tag}
  */
  readonly propertyTag: string;
  /**
  * Specify the Issuer Domain Name or a URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#rdata GslbZone#rdata}
  */
  readonly rdata: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceListDnsCaaRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceListDnsCaaRecordListStructToTerraform(struct?: GslbZoneServiceListDnsCaaRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical_flag: cdktf.numberToTerraform(struct!.criticalFlag),
    property_tag: cdktf.stringToTerraform(struct!.propertyTag),
    rdata: cdktf.stringToTerraform(struct!.rdata),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneServiceListDnsCaaRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceListDnsCaaRecordListStructToHclTerraform(struct?: GslbZoneServiceListDnsCaaRecordListStruct | cdktf.IResolvable): any {
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
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsCaaRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsCaaRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsCaaRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsCaaRecordListStruct | cdktf.IResolvable | undefined {
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
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsCaaRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criticalFlag = undefined;
      this._propertyTag = undefined;
      this._rdata = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
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
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceListDnsCaaRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceListDnsCaaRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceListDnsCaaRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsCaaRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsCaaRecordListStructOutputReference {
    return new GslbZoneServiceListDnsCaaRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsCnameRecordListSamplingEnable {
  /**
  * 'all': all; 'cname-hits': Number of times the CNAME has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceListDnsCnameRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceListDnsCnameRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceListDnsCnameRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceListDnsCnameRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsCnameRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsCnameRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsCnameRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceListDnsCnameRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsCnameRecordListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsCnameRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceListDnsCnameRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsCnameRecordListStruct {
  /**
  * Specify Administrative Preference, default is 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#admin_preference GslbZone#admin_preference}
  */
  readonly adminPreference?: number;
  /**
  * Specify the alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#alias_name GslbZone#alias_name}
  */
  readonly aliasName: string;
  /**
  * As backup when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#as_backup GslbZone#as_backup}
  */
  readonly asBackup?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify Weight, default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#weight GslbZone#weight}
  */
  readonly weight?: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceListDnsCnameRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceListDnsCnameRecordListStructToTerraform(struct?: GslbZoneServiceListDnsCnameRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_preference: cdktf.numberToTerraform(struct!.adminPreference),
    alias_name: cdktf.stringToTerraform(struct!.aliasName),
    as_backup: cdktf.numberToTerraform(struct!.asBackup),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
    sampling_enable: cdktf.listMapper(gslbZoneServiceListDnsCnameRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceListDnsCnameRecordListStructToHclTerraform(struct?: GslbZoneServiceListDnsCnameRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_preference: {
      value: cdktf.numberToHclTerraform(struct!.adminPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alias_name: {
      value: cdktf.stringToHclTerraform(struct!.aliasName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_backup: {
      value: cdktf.numberToHclTerraform(struct!.asBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsCnameRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsCnameRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsCnameRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsCnameRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPreference = this._adminPreference;
    }
    if (this._aliasName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasName = this._aliasName;
    }
    if (this._asBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.asBackup = this._asBackup;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsCnameRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPreference = undefined;
      this._aliasName = undefined;
      this._asBackup = undefined;
      this._uuid = undefined;
      this._weight = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPreference = value.adminPreference;
      this._aliasName = value.aliasName;
      this._asBackup = value.asBackup;
      this._uuid = value.uuid;
      this._weight = value.weight;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // admin_preference - computed: false, optional: true, required: false
  private _adminPreference?: number; 
  public get adminPreference() {
    return this.getNumberAttribute('admin_preference');
  }
  public set adminPreference(value: number) {
    this._adminPreference = value;
  }
  public resetAdminPreference() {
    this._adminPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPreferenceInput() {
    return this._adminPreference;
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

  // as_backup - computed: false, optional: true, required: false
  private _asBackup?: number; 
  public get asBackup() {
    return this.getNumberAttribute('as_backup');
  }
  public set asBackup(value: number) {
    this._asBackup = value;
  }
  public resetAsBackup() {
    this._asBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asBackupInput() {
    return this._asBackup;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceListDnsCnameRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceListDnsCnameRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceListDnsCnameRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsCnameRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsCnameRecordListStructOutputReference {
    return new GslbZoneServiceListDnsCnameRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsMxRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceListDnsMxRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceListDnsMxRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceListDnsMxRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceListDnsMxRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsMxRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsMxRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsMxRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceListDnsMxRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsMxRecordListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsMxRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceListDnsMxRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsMxRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#mx_name GslbZone#mx_name}
  */
  readonly mxName: string;
  /**
  * Specify Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#priority GslbZone#priority}
  */
  readonly priority?: number;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceListDnsMxRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceListDnsMxRecordListStructToTerraform(struct?: GslbZoneServiceListDnsMxRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mx_name: cdktf.stringToTerraform(struct!.mxName),
    priority: cdktf.numberToTerraform(struct!.priority),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneServiceListDnsMxRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceListDnsMxRecordListStructToHclTerraform(struct?: GslbZoneServiceListDnsMxRecordListStruct | cdktf.IResolvable): any {
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsMxRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsMxRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsMxRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsMxRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxName = this._mxName;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsMxRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mxName = undefined;
      this._priority = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mxName = value.mxName;
      this._priority = value.priority;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceListDnsMxRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceListDnsMxRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceListDnsMxRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsMxRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsMxRecordListStructOutputReference {
    return new GslbZoneServiceListDnsMxRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsNaptrRecordListSamplingEnable {
  /**
  * 'all': all; 'naptr-hits': Number of times the NAPTR has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceListDnsNaptrRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceListDnsNaptrRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceListDnsNaptrRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceListDnsNaptrRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsNaptrRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsNaptrRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsNaptrRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceListDnsNaptrRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsNaptrRecordListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsNaptrRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceListDnsNaptrRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsNaptrRecordListStruct {
  /**
  * Specify the flag (e.g., a, s). Default is empty flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#flag GslbZone#flag}
  */
  readonly flag: string;
  /**
  * Specify the replacement or regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#naptr_target GslbZone#naptr_target}
  */
  readonly naptrTarget: string;
  /**
  * Specify Order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#order GslbZone#order}
  */
  readonly order?: number;
  /**
  * Specify Preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#preference GslbZone#preference}
  */
  readonly preference?: number;
  /**
  * Return the regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#regexp GslbZone#regexp}
  */
  readonly regexp?: number;
  /**
  * Specify Service and Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#service_proto GslbZone#service_proto}
  */
  readonly serviceProto: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceListDnsNaptrRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceListDnsNaptrRecordListStructToTerraform(struct?: GslbZoneServiceListDnsNaptrRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flag: cdktf.stringToTerraform(struct!.flag),
    naptr_target: cdktf.stringToTerraform(struct!.naptrTarget),
    order: cdktf.numberToTerraform(struct!.order),
    preference: cdktf.numberToTerraform(struct!.preference),
    regexp: cdktf.numberToTerraform(struct!.regexp),
    service_proto: cdktf.stringToTerraform(struct!.serviceProto),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneServiceListDnsNaptrRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceListDnsNaptrRecordListStructToHclTerraform(struct?: GslbZoneServiceListDnsNaptrRecordListStruct | cdktf.IResolvable): any {
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regexp: {
      value: cdktf.numberToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_proto: {
      value: cdktf.stringToHclTerraform(struct!.serviceProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsNaptrRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsNaptrRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsNaptrRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsNaptrRecordListStruct | cdktf.IResolvable | undefined {
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
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._serviceProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProto = this._serviceProto;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsNaptrRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flag = undefined;
      this._naptrTarget = undefined;
      this._order = undefined;
      this._preference = undefined;
      this._regexp = undefined;
      this._serviceProto = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
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
      this._order = value.order;
      this._preference = value.preference;
      this._regexp = value.regexp;
      this._serviceProto = value.serviceProto;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: number; 
  public get regexp() {
    return this.getNumberAttribute('regexp');
  }
  public set regexp(value: number) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceListDnsNaptrRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceListDnsNaptrRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceListDnsNaptrRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsNaptrRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsNaptrRecordListStructOutputReference {
    return new GslbZoneServiceListDnsNaptrRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsNsRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceListDnsNsRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceListDnsNsRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceListDnsNsRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceListDnsNsRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsNsRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsNsRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsNsRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceListDnsNsRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsNsRecordListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsNsRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceListDnsNsRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsNsRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ns_name GslbZone#ns_name}
  */
  readonly nsName: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceListDnsNsRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceListDnsNsRecordListStructToTerraform(struct?: GslbZoneServiceListDnsNsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ns_name: cdktf.stringToTerraform(struct!.nsName),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneServiceListDnsNsRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceListDnsNsRecordListStructToHclTerraform(struct?: GslbZoneServiceListDnsNsRecordListStruct | cdktf.IResolvable): any {
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
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsNsRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsNsRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsNsRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsNsRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsName = this._nsName;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsNsRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsName = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsName = value.nsName;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceListDnsNsRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceListDnsNsRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceListDnsNsRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsNsRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsNsRecordListStructOutputReference {
    return new GslbZoneServiceListDnsNsRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsPtrRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceListDnsPtrRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceListDnsPtrRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceListDnsPtrRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceListDnsPtrRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsPtrRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsPtrRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsPtrRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceListDnsPtrRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsPtrRecordListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsPtrRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceListDnsPtrRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsPtrRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ptr_name GslbZone#ptr_name}
  */
  readonly ptrName: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceListDnsPtrRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceListDnsPtrRecordListStructToTerraform(struct?: GslbZoneServiceListDnsPtrRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ptr_name: cdktf.stringToTerraform(struct!.ptrName),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneServiceListDnsPtrRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceListDnsPtrRecordListStructToHclTerraform(struct?: GslbZoneServiceListDnsPtrRecordListStruct | cdktf.IResolvable): any {
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
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsPtrRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsPtrRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsPtrRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsPtrRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ptrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptrName = this._ptrName;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsPtrRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ptrName = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ptrName = value.ptrName;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceListDnsPtrRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceListDnsPtrRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceListDnsPtrRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsPtrRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsPtrRecordListStructOutputReference {
    return new GslbZoneServiceListDnsPtrRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsRecordListStruct {
  /**
  * Specify DNS Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#data GslbZone#data}
  */
  readonly data?: string;
  /**
  * Specify DNS Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#type GslbZone#type}
  */
  readonly type: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
}

export function gslbZoneServiceListDnsRecordListStructToTerraform(struct?: GslbZoneServiceListDnsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.numberToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbZoneServiceListDnsRecordListStructToHclTerraform(struct?: GslbZoneServiceListDnsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class GslbZoneServiceListDnsRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsRecordListStructOutputReference {
    return new GslbZoneServiceListDnsRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsSrvRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceListDnsSrvRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceListDnsSrvRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceListDnsSrvRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceListDnsSrvRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsSrvRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsSrvRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsSrvRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceListDnsSrvRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsSrvRecordListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsSrvRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceListDnsSrvRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsSrvRecordListStruct {
  /**
  * Specify Port (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#port GslbZone#port}
  */
  readonly port: number;
  /**
  * Specify Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#priority GslbZone#priority}
  */
  readonly priority?: number;
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#srv_name GslbZone#srv_name}
  */
  readonly srvName: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify Weight, default is 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#weight GslbZone#weight}
  */
  readonly weight?: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceListDnsSrvRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceListDnsSrvRecordListStructToTerraform(struct?: GslbZoneServiceListDnsSrvRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    srv_name: cdktf.stringToTerraform(struct!.srvName),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
    sampling_enable: cdktf.listMapper(gslbZoneServiceListDnsSrvRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceListDnsSrvRecordListStructToHclTerraform(struct?: GslbZoneServiceListDnsSrvRecordListStruct | cdktf.IResolvable): any {
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
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
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsSrvRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsSrvRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsSrvRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsSrvRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._srvName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvName = this._srvName;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsSrvRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._srvName = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._weight = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._priority = value.priority;
      this._srvName = value.srvName;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._weight = value.weight;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceListDnsSrvRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceListDnsSrvRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceListDnsSrvRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsSrvRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsSrvRecordListStructOutputReference {
    return new GslbZoneServiceListDnsSrvRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsTxtRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceListDnsTxtRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceListDnsTxtRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceListDnsTxtRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceListDnsTxtRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsTxtRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsTxtRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsTxtRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceListDnsTxtRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsTxtRecordListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsTxtRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceListDnsTxtRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListDnsTxtRecordListStruct {
  /**
  * Specify the Object Name for TXT Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#record_name GslbZone#record_name}
  */
  readonly recordName: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#ttl GslbZone#ttl}
  */
  readonly ttl?: number;
  /**
  * Specify TXT Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#txt_data GslbZone#txt_data}
  */
  readonly txtData?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceListDnsTxtRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceListDnsTxtRecordListStructToTerraform(struct?: GslbZoneServiceListDnsTxtRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_name: cdktf.stringToTerraform(struct!.recordName),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    txt_data: cdktf.stringToTerraform(struct!.txtData),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneServiceListDnsTxtRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceListDnsTxtRecordListStructToHclTerraform(struct?: GslbZoneServiceListDnsTxtRecordListStruct | cdktf.IResolvable): any {
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
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txt_data: {
      value: cdktf.stringToHclTerraform(struct!.txtData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsTxtRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsTxtRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListDnsTxtRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListDnsTxtRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordName = this._recordName;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._txtData !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtData = this._txtData;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListDnsTxtRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordName = undefined;
      this._ttl = undefined;
      this._txtData = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordName = value.recordName;
      this._ttl = value.ttl;
      this._txtData = value.txtData;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // txt_data - computed: false, optional: true, required: false
  private _txtData?: string; 
  public get txtData() {
    return this.getStringAttribute('txt_data');
  }
  public set txtData(value: string) {
    this._txtData = value;
  }
  public resetTxtData() {
    this._txtData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtDataInput() {
    return this._txtData;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceListDnsTxtRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceListDnsTxtRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceListDnsTxtRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListDnsTxtRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListDnsTxtRecordListStructOutputReference {
    return new GslbZoneServiceListDnsTxtRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListGeoLocationListAlias {
  /**
  * Send CNAME response for this geo-location (Specify a CNAME record)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#alias GslbZone#alias}
  */
  readonly alias?: string;
}

export function gslbZoneServiceListGeoLocationListAliasToTerraform(struct?: GslbZoneServiceListGeoLocationListAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
  }
}


export function gslbZoneServiceListGeoLocationListAliasToHclTerraform(struct?: GslbZoneServiceListGeoLocationListAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListGeoLocationListAliasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListGeoLocationListAlias | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListGeoLocationListAlias | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }
}

export class GslbZoneServiceListGeoLocationListAliasList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListGeoLocationListAlias[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListGeoLocationListAliasOutputReference {
    return new GslbZoneServiceListGeoLocationListAliasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListGeoLocationListStruct {
  /**
  * Action for this geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#action GslbZone#action}
  */
  readonly action?: number;
  /**
  * 'allow': Allow query from this geo-location; 'drop': Drop query from this geo-location; 'forward': Forward packet for this geo-location; 'ignore': Send empty response to this geo-location; 'reject': Send refuse response to this geo-location;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#action_type GslbZone#action_type}
  */
  readonly actionType?: string;
  /**
  * 'both': Forward both query and response; 'query': Forward query from this geo-location; 'response': Forward response to this geo-location;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#forward_type GslbZone#forward_type}
  */
  readonly forwardType?: string;
  /**
  * Specify the geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#geo_name GslbZone#geo_name}
  */
  readonly geoName: string;
  /**
  * Policy for this geo-location (Specify the policy name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#policy GslbZone#policy}
  */
  readonly policy?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#user_tag GslbZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#alias GslbZone#alias}
  */
  readonly alias?: GslbZoneServiceListGeoLocationListAlias[] | cdktf.IResolvable;
}

export function gslbZoneServiceListGeoLocationListStructToTerraform(struct?: GslbZoneServiceListGeoLocationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.numberToTerraform(struct!.action),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    forward_type: cdktf.stringToTerraform(struct!.forwardType),
    geo_name: cdktf.stringToTerraform(struct!.geoName),
    policy: cdktf.stringToTerraform(struct!.policy),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    alias: cdktf.listMapper(gslbZoneServiceListGeoLocationListAliasToTerraform, true)(struct!.alias),
  }
}


export function gslbZoneServiceListGeoLocationListStructToHclTerraform(struct?: GslbZoneServiceListGeoLocationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.numberToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_type: {
      value: cdktf.stringToHclTerraform(struct!.forwardType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_name: {
      value: cdktf.stringToHclTerraform(struct!.geoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alias: {
      value: cdktf.listMapperHcl(gslbZoneServiceListGeoLocationListAliasToHclTerraform, true)(struct!.alias),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListGeoLocationListAliasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListGeoLocationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListGeoLocationListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._forwardType !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardType = this._forwardType;
    }
    if (this._geoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoName = this._geoName;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._alias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListGeoLocationListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionType = undefined;
      this._forwardType = undefined;
      this._geoName = undefined;
      this._policy = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._alias.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionType = value.actionType;
      this._forwardType = value.forwardType;
      this._geoName = value.geoName;
      this._policy = value.policy;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._alias.internalValue = value.alias;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: number; 
  public get action() {
    return this.getNumberAttribute('action');
  }
  public set action(value: number) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // forward_type - computed: false, optional: true, required: false
  private _forwardType?: string; 
  public get forwardType() {
    return this.getStringAttribute('forward_type');
  }
  public set forwardType(value: string) {
    this._forwardType = value;
  }
  public resetForwardType() {
    this._forwardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTypeInput() {
    return this._forwardType;
  }

  // geo_name - computed: false, optional: false, required: true
  private _geoName?: string; 
  public get geoName() {
    return this.getStringAttribute('geo_name');
  }
  public set geoName(value: string) {
    this._geoName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoNameInput() {
    return this._geoName;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // alias - computed: false, optional: true, required: false
  private _alias = new GslbZoneServiceListGeoLocationListAliasList(this, "alias", false);
  public get alias() {
    return this._alias;
  }
  public putAlias(value: GslbZoneServiceListGeoLocationListAlias[] | cdktf.IResolvable) {
    this._alias.internalValue = value;
  }
  public resetAlias() {
    this._alias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias.internalValue;
  }
}

export class GslbZoneServiceListGeoLocationListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListGeoLocationListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListGeoLocationListStructOutputReference {
    return new GslbZoneServiceListGeoLocationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListHealthCheckPort {
  /**
  * Check Related Port Status (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#health_check_port GslbZone#health_check_port}
  */
  readonly healthCheckPort?: number;
}

export function gslbZoneServiceListHealthCheckPortToTerraform(struct?: GslbZoneServiceListHealthCheckPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_port: cdktf.numberToTerraform(struct!.healthCheckPort),
  }
}


export function gslbZoneServiceListHealthCheckPortToHclTerraform(struct?: GslbZoneServiceListHealthCheckPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListHealthCheckPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListHealthCheckPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPort = this._healthCheckPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListHealthCheckPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheckPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheckPort = value.healthCheckPort;
    }
  }

  // health_check_port - computed: false, optional: true, required: false
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }
}

export class GslbZoneServiceListHealthCheckPortList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListHealthCheckPort[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListHealthCheckPortOutputReference {
    return new GslbZoneServiceListHealthCheckPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListSamplingEnable {
  /**
  * 'all': all; 'received-query': Number of DNS queries received for the service; 'sent-response': Number of DNS replies sent to clients for the service; 'proxy-mode-response': Number of DNS replies sent to clients by the ACOS device as a DNS proxy for the service; 'cache-mode-response': Number of cached DNS replies sent to clients by the ACOS device for the service. (This statistic applies only if the DNS cache; 'server-mode-response': Number of DNS replies sent to clients by the ACOS device as a DNS server for the service. (This statistic applies only if the D; 'sticky-mode-response': Number of DNS replies sent to clients by the ACOS device to keep the clients on the same site. (This statistic applies only if; 'backup-mode-response': help Number of DNS replies sent to clients by the ACOS device in backup mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#counters1 GslbZone#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceListSamplingEnableToTerraform(struct?: GslbZoneServiceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceListSamplingEnableToHclTerraform(struct?: GslbZoneServiceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListSamplingEnableOutputReference {
    return new GslbZoneServiceListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceListStruct {
  /**
  * 'drop': Drop query; 'forward': Forward packet; 'ignore': Send empty response; 'reject': Send refuse response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#action GslbZone#action}
  */
  readonly action?: string;
  /**
  * Disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#disable GslbZone#disable}
  */
  readonly disable?: number;
  /**
  * 'both': Forward both query and response; 'query': Forward query; 'response': Forward response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#forward_type GslbZone#forward_type}
  */
  readonly forwardType?: string;
  /**
  * 'enable': Enable Gateway Status Check; 'disable': Disable Gateway Status Check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#health_check_gateway GslbZone#health_check_gateway}
  */
  readonly healthCheckGateway?: string;
  /**
  * Specify policy for this service (Specify policy name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#policy GslbZone#policy}
  */
  readonly policy?: string;
  /**
  * Specify the service name for the zone, * for wildcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#service_name GslbZone#service_name}
  */
  readonly serviceName: string;
  /**
  * Port number of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#service_port GslbZone#service_port}
  */
  readonly servicePort: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#user_tag GslbZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#uuid GslbZone#uuid}
  */
  readonly uuid?: string;
  /**
  * dns_a_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_a_record GslbZone#dns_a_record}
  */
  readonly dnsARecord?: GslbZoneServiceListDnsARecord;
  /**
  * dns_caa_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_caa_record_list GslbZone#dns_caa_record_list}
  */
  readonly dnsCaaRecordList?: GslbZoneServiceListDnsCaaRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_cname_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_cname_record_list GslbZone#dns_cname_record_list}
  */
  readonly dnsCnameRecordList?: GslbZoneServiceListDnsCnameRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_mx_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_mx_record_list GslbZone#dns_mx_record_list}
  */
  readonly dnsMxRecordList?: GslbZoneServiceListDnsMxRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_naptr_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_naptr_record_list GslbZone#dns_naptr_record_list}
  */
  readonly dnsNaptrRecordList?: GslbZoneServiceListDnsNaptrRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ns_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_ns_record_list GslbZone#dns_ns_record_list}
  */
  readonly dnsNsRecordList?: GslbZoneServiceListDnsNsRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ptr_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_ptr_record_list GslbZone#dns_ptr_record_list}
  */
  readonly dnsPtrRecordList?: GslbZoneServiceListDnsPtrRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_record_list GslbZone#dns_record_list}
  */
  readonly dnsRecordList?: GslbZoneServiceListDnsRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_srv_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_srv_record_list GslbZone#dns_srv_record_list}
  */
  readonly dnsSrvRecordList?: GslbZoneServiceListDnsSrvRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_txt_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dns_txt_record_list GslbZone#dns_txt_record_list}
  */
  readonly dnsTxtRecordList?: GslbZoneServiceListDnsTxtRecordListStruct[] | cdktf.IResolvable;
  /**
  * geo_location_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#geo_location_list GslbZone#geo_location_list}
  */
  readonly geoLocationList?: GslbZoneServiceListGeoLocationListStruct[] | cdktf.IResolvable;
  /**
  * health_check_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#health_check_port GslbZone#health_check_port}
  */
  readonly healthCheckPort?: GslbZoneServiceListHealthCheckPort[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#sampling_enable GslbZone#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceListStructToTerraform(struct?: GslbZoneServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    disable: cdktf.numberToTerraform(struct!.disable),
    forward_type: cdktf.stringToTerraform(struct!.forwardType),
    health_check_gateway: cdktf.stringToTerraform(struct!.healthCheckGateway),
    policy: cdktf.stringToTerraform(struct!.policy),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_port: cdktf.numberToTerraform(struct!.servicePort),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dns_a_record: gslbZoneServiceListDnsARecordToTerraform(struct!.dnsARecord),
    dns_caa_record_list: cdktf.listMapper(gslbZoneServiceListDnsCaaRecordListStructToTerraform, true)(struct!.dnsCaaRecordList),
    dns_cname_record_list: cdktf.listMapper(gslbZoneServiceListDnsCnameRecordListStructToTerraform, true)(struct!.dnsCnameRecordList),
    dns_mx_record_list: cdktf.listMapper(gslbZoneServiceListDnsMxRecordListStructToTerraform, true)(struct!.dnsMxRecordList),
    dns_naptr_record_list: cdktf.listMapper(gslbZoneServiceListDnsNaptrRecordListStructToTerraform, true)(struct!.dnsNaptrRecordList),
    dns_ns_record_list: cdktf.listMapper(gslbZoneServiceListDnsNsRecordListStructToTerraform, true)(struct!.dnsNsRecordList),
    dns_ptr_record_list: cdktf.listMapper(gslbZoneServiceListDnsPtrRecordListStructToTerraform, true)(struct!.dnsPtrRecordList),
    dns_record_list: cdktf.listMapper(gslbZoneServiceListDnsRecordListStructToTerraform, true)(struct!.dnsRecordList),
    dns_srv_record_list: cdktf.listMapper(gslbZoneServiceListDnsSrvRecordListStructToTerraform, true)(struct!.dnsSrvRecordList),
    dns_txt_record_list: cdktf.listMapper(gslbZoneServiceListDnsTxtRecordListStructToTerraform, true)(struct!.dnsTxtRecordList),
    geo_location_list: cdktf.listMapper(gslbZoneServiceListGeoLocationListStructToTerraform, true)(struct!.geoLocationList),
    health_check_port: cdktf.listMapper(gslbZoneServiceListHealthCheckPortToTerraform, true)(struct!.healthCheckPort),
    sampling_enable: cdktf.listMapper(gslbZoneServiceListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceListStructToHclTerraform(struct?: GslbZoneServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_type: {
      value: cdktf.stringToHclTerraform(struct!.forwardType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_gateway: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_a_record: {
      value: gslbZoneServiceListDnsARecordToHclTerraform(struct!.dnsARecord),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsARecordList",
    },
    dns_caa_record_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsCaaRecordListStructToHclTerraform, true)(struct!.dnsCaaRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsCaaRecordListStructList",
    },
    dns_cname_record_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsCnameRecordListStructToHclTerraform, true)(struct!.dnsCnameRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsCnameRecordListStructList",
    },
    dns_mx_record_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsMxRecordListStructToHclTerraform, true)(struct!.dnsMxRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsMxRecordListStructList",
    },
    dns_naptr_record_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsNaptrRecordListStructToHclTerraform, true)(struct!.dnsNaptrRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsNaptrRecordListStructList",
    },
    dns_ns_record_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsNsRecordListStructToHclTerraform, true)(struct!.dnsNsRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsNsRecordListStructList",
    },
    dns_ptr_record_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsPtrRecordListStructToHclTerraform, true)(struct!.dnsPtrRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsPtrRecordListStructList",
    },
    dns_record_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsRecordListStructToHclTerraform, true)(struct!.dnsRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsRecordListStructList",
    },
    dns_srv_record_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsSrvRecordListStructToHclTerraform, true)(struct!.dnsSrvRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsSrvRecordListStructList",
    },
    dns_txt_record_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListDnsTxtRecordListStructToHclTerraform, true)(struct!.dnsTxtRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListDnsTxtRecordListStructList",
    },
    geo_location_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceListGeoLocationListStructToHclTerraform, true)(struct!.geoLocationList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListGeoLocationListStructList",
    },
    health_check_port: {
      value: cdktf.listMapperHcl(gslbZoneServiceListHealthCheckPortToHclTerraform, true)(struct!.healthCheckPort),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListHealthCheckPortList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._forwardType !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardType = this._forwardType;
    }
    if (this._healthCheckGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckGateway = this._healthCheckGateway;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._servicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dnsARecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecord = this._dnsARecord?.internalValue;
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
    if (this._dnsRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecordList = this._dnsRecordList?.internalValue;
    }
    if (this._dnsSrvRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSrvRecordList = this._dnsSrvRecordList?.internalValue;
    }
    if (this._dnsTxtRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTxtRecordList = this._dnsTxtRecordList?.internalValue;
    }
    if (this._geoLocationList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationList = this._geoLocationList?.internalValue;
    }
    if (this._healthCheckPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPort = this._healthCheckPort?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._disable = undefined;
      this._forwardType = undefined;
      this._healthCheckGateway = undefined;
      this._policy = undefined;
      this._serviceName = undefined;
      this._servicePort = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._dnsARecord.internalValue = undefined;
      this._dnsCaaRecordList.internalValue = undefined;
      this._dnsCnameRecordList.internalValue = undefined;
      this._dnsMxRecordList.internalValue = undefined;
      this._dnsNaptrRecordList.internalValue = undefined;
      this._dnsNsRecordList.internalValue = undefined;
      this._dnsPtrRecordList.internalValue = undefined;
      this._dnsRecordList.internalValue = undefined;
      this._dnsSrvRecordList.internalValue = undefined;
      this._dnsTxtRecordList.internalValue = undefined;
      this._geoLocationList.internalValue = undefined;
      this._healthCheckPort.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._disable = value.disable;
      this._forwardType = value.forwardType;
      this._healthCheckGateway = value.healthCheckGateway;
      this._policy = value.policy;
      this._serviceName = value.serviceName;
      this._servicePort = value.servicePort;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._dnsARecord.internalValue = value.dnsARecord;
      this._dnsCaaRecordList.internalValue = value.dnsCaaRecordList;
      this._dnsCnameRecordList.internalValue = value.dnsCnameRecordList;
      this._dnsMxRecordList.internalValue = value.dnsMxRecordList;
      this._dnsNaptrRecordList.internalValue = value.dnsNaptrRecordList;
      this._dnsNsRecordList.internalValue = value.dnsNsRecordList;
      this._dnsPtrRecordList.internalValue = value.dnsPtrRecordList;
      this._dnsRecordList.internalValue = value.dnsRecordList;
      this._dnsSrvRecordList.internalValue = value.dnsSrvRecordList;
      this._dnsTxtRecordList.internalValue = value.dnsTxtRecordList;
      this._geoLocationList.internalValue = value.geoLocationList;
      this._healthCheckPort.internalValue = value.healthCheckPort;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // forward_type - computed: false, optional: true, required: false
  private _forwardType?: string; 
  public get forwardType() {
    return this.getStringAttribute('forward_type');
  }
  public set forwardType(value: string) {
    this._forwardType = value;
  }
  public resetForwardType() {
    this._forwardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTypeInput() {
    return this._forwardType;
  }

  // health_check_gateway - computed: false, optional: true, required: false
  private _healthCheckGateway?: string; 
  public get healthCheckGateway() {
    return this.getStringAttribute('health_check_gateway');
  }
  public set healthCheckGateway(value: string) {
    this._healthCheckGateway = value;
  }
  public resetHealthCheckGateway() {
    this._healthCheckGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGatewayInput() {
    return this._healthCheckGateway;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // dns_a_record - computed: false, optional: true, required: false
  private _dnsARecord = new GslbZoneServiceListDnsARecordOutputReference(this, "dns_a_record");
  public get dnsARecord() {
    return this._dnsARecord;
  }
  public putDnsARecord(value: GslbZoneServiceListDnsARecord) {
    this._dnsARecord.internalValue = value;
  }
  public resetDnsARecord() {
    this._dnsARecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordInput() {
    return this._dnsARecord.internalValue;
  }

  // dns_caa_record_list - computed: false, optional: true, required: false
  private _dnsCaaRecordList = new GslbZoneServiceListDnsCaaRecordListStructList(this, "dns_caa_record_list", false);
  public get dnsCaaRecordList() {
    return this._dnsCaaRecordList;
  }
  public putDnsCaaRecordList(value: GslbZoneServiceListDnsCaaRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsCnameRecordList = new GslbZoneServiceListDnsCnameRecordListStructList(this, "dns_cname_record_list", false);
  public get dnsCnameRecordList() {
    return this._dnsCnameRecordList;
  }
  public putDnsCnameRecordList(value: GslbZoneServiceListDnsCnameRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsMxRecordList = new GslbZoneServiceListDnsMxRecordListStructList(this, "dns_mx_record_list", false);
  public get dnsMxRecordList() {
    return this._dnsMxRecordList;
  }
  public putDnsMxRecordList(value: GslbZoneServiceListDnsMxRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsNaptrRecordList = new GslbZoneServiceListDnsNaptrRecordListStructList(this, "dns_naptr_record_list", false);
  public get dnsNaptrRecordList() {
    return this._dnsNaptrRecordList;
  }
  public putDnsNaptrRecordList(value: GslbZoneServiceListDnsNaptrRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsNsRecordList = new GslbZoneServiceListDnsNsRecordListStructList(this, "dns_ns_record_list", false);
  public get dnsNsRecordList() {
    return this._dnsNsRecordList;
  }
  public putDnsNsRecordList(value: GslbZoneServiceListDnsNsRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsPtrRecordList = new GslbZoneServiceListDnsPtrRecordListStructList(this, "dns_ptr_record_list", false);
  public get dnsPtrRecordList() {
    return this._dnsPtrRecordList;
  }
  public putDnsPtrRecordList(value: GslbZoneServiceListDnsPtrRecordListStruct[] | cdktf.IResolvable) {
    this._dnsPtrRecordList.internalValue = value;
  }
  public resetDnsPtrRecordList() {
    this._dnsPtrRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPtrRecordListInput() {
    return this._dnsPtrRecordList.internalValue;
  }

  // dns_record_list - computed: false, optional: true, required: false
  private _dnsRecordList = new GslbZoneServiceListDnsRecordListStructList(this, "dns_record_list", false);
  public get dnsRecordList() {
    return this._dnsRecordList;
  }
  public putDnsRecordList(value: GslbZoneServiceListDnsRecordListStruct[] | cdktf.IResolvable) {
    this._dnsRecordList.internalValue = value;
  }
  public resetDnsRecordList() {
    this._dnsRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordListInput() {
    return this._dnsRecordList.internalValue;
  }

  // dns_srv_record_list - computed: false, optional: true, required: false
  private _dnsSrvRecordList = new GslbZoneServiceListDnsSrvRecordListStructList(this, "dns_srv_record_list", false);
  public get dnsSrvRecordList() {
    return this._dnsSrvRecordList;
  }
  public putDnsSrvRecordList(value: GslbZoneServiceListDnsSrvRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsTxtRecordList = new GslbZoneServiceListDnsTxtRecordListStructList(this, "dns_txt_record_list", false);
  public get dnsTxtRecordList() {
    return this._dnsTxtRecordList;
  }
  public putDnsTxtRecordList(value: GslbZoneServiceListDnsTxtRecordListStruct[] | cdktf.IResolvable) {
    this._dnsTxtRecordList.internalValue = value;
  }
  public resetDnsTxtRecordList() {
    this._dnsTxtRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTxtRecordListInput() {
    return this._dnsTxtRecordList.internalValue;
  }

  // geo_location_list - computed: false, optional: true, required: false
  private _geoLocationList = new GslbZoneServiceListGeoLocationListStructList(this, "geo_location_list", false);
  public get geoLocationList() {
    return this._geoLocationList;
  }
  public putGeoLocationList(value: GslbZoneServiceListGeoLocationListStruct[] | cdktf.IResolvable) {
    this._geoLocationList.internalValue = value;
  }
  public resetGeoLocationList() {
    this._geoLocationList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationListInput() {
    return this._geoLocationList.internalValue;
  }

  // health_check_port - computed: false, optional: true, required: false
  private _healthCheckPort = new GslbZoneServiceListHealthCheckPortList(this, "health_check_port", false);
  public get healthCheckPort() {
    return this._healthCheckPort;
  }
  public putHealthCheckPort(value: GslbZoneServiceListHealthCheckPort[] | cdktf.IResolvable) {
    this._healthCheckPort.internalValue = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceListStructOutputReference {
    return new GslbZoneServiceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneTemplate {
  /**
  * Specify DNSSEC template (Specify template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#dnssec GslbZone#dnssec}
  */
  readonly dnssec?: string;
}

export function gslbZoneTemplateToTerraform(struct?: GslbZoneTemplateOutputReference | GslbZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dnssec: cdktf.stringToTerraform(struct!.dnssec),
  }
}


export function gslbZoneTemplateToHclTerraform(struct?: GslbZoneTemplateOutputReference | GslbZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dnssec: {
      value: cdktf.stringToHclTerraform(struct!.dnssec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnssec !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssec = this._dnssec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnssec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnssec = value.dnssec;
    }
  }

  // dnssec - computed: false, optional: true, required: false
  private _dnssec?: string; 
  public get dnssec() {
    return this.getStringAttribute('dnssec');
  }
  public set dnssec(value: string) {
    this._dnssec = value;
  }
  public resetDnssec() {
    this._dnssec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecInput() {
    return this._dnssec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone thunder_gslb_zone}
*/
export class GslbZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbZone to import
  * @param importFromId The id of the existing GslbZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone thunder_gslb_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbZoneConfig
  */
  public constructor(scope: Construct, id: string, config: GslbZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disable = config.disable;
    this._id = config.id;
    this._name = config.name;
    this._policy = config.policy;
    this._ttl = config.ttl;
    this._useServerTtl = config.useServerTtl;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dnsCaaRecordList.internalValue = config.dnsCaaRecordList;
    this._dnsMxRecordList.internalValue = config.dnsMxRecordList;
    this._dnsNsRecordList.internalValue = config.dnsNsRecordList;
    this._dnsSoaRecord.internalValue = config.dnsSoaRecord;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._serviceList.internalValue = config.serviceList;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // use_server_ttl - computed: false, optional: true, required: false
  private _useServerTtl?: number; 
  public get useServerTtl() {
    return this.getNumberAttribute('use_server_ttl');
  }
  public set useServerTtl(value: number) {
    this._useServerTtl = value;
  }
  public resetUseServerTtl() {
    this._useServerTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerTtlInput() {
    return this._useServerTtl;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // dns_caa_record_list - computed: false, optional: true, required: false
  private _dnsCaaRecordList = new GslbZoneDnsCaaRecordListStructList(this, "dns_caa_record_list", false);
  public get dnsCaaRecordList() {
    return this._dnsCaaRecordList;
  }
  public putDnsCaaRecordList(value: GslbZoneDnsCaaRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsMxRecordList = new GslbZoneDnsMxRecordListStructList(this, "dns_mx_record_list", false);
  public get dnsMxRecordList() {
    return this._dnsMxRecordList;
  }
  public putDnsMxRecordList(value: GslbZoneDnsMxRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsNsRecordList = new GslbZoneDnsNsRecordListStructList(this, "dns_ns_record_list", false);
  public get dnsNsRecordList() {
    return this._dnsNsRecordList;
  }
  public putDnsNsRecordList(value: GslbZoneDnsNsRecordListStruct[] | cdktf.IResolvable) {
    this._dnsNsRecordList.internalValue = value;
  }
  public resetDnsNsRecordList() {
    this._dnsNsRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNsRecordListInput() {
    return this._dnsNsRecordList.internalValue;
  }

  // dns_soa_record - computed: false, optional: true, required: false
  private _dnsSoaRecord = new GslbZoneDnsSoaRecordOutputReference(this, "dns_soa_record");
  public get dnsSoaRecord() {
    return this._dnsSoaRecord;
  }
  public putDnsSoaRecord(value: GslbZoneDnsSoaRecord) {
    this._dnsSoaRecord.internalValue = value;
  }
  public resetDnsSoaRecord() {
    this._dnsSoaRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSoaRecordInput() {
    return this._dnsSoaRecord.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // service_list - computed: false, optional: true, required: false
  private _serviceList = new GslbZoneServiceListStructList(this, "service_list", false);
  public get serviceList() {
    return this._serviceList;
  }
  public putServiceList(value: GslbZoneServiceListStruct[] | cdktf.IResolvable) {
    this._serviceList.internalValue = value;
  }
  public resetServiceList() {
    this._serviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceListInput() {
    return this._serviceList.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new GslbZoneTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: GslbZoneTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.numberToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.stringToTerraform(this._policy),
      ttl: cdktf.numberToTerraform(this._ttl),
      use_server_ttl: cdktf.numberToTerraform(this._useServerTtl),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dns_caa_record_list: cdktf.listMapper(gslbZoneDnsCaaRecordListStructToTerraform, true)(this._dnsCaaRecordList.internalValue),
      dns_mx_record_list: cdktf.listMapper(gslbZoneDnsMxRecordListStructToTerraform, true)(this._dnsMxRecordList.internalValue),
      dns_ns_record_list: cdktf.listMapper(gslbZoneDnsNsRecordListStructToTerraform, true)(this._dnsNsRecordList.internalValue),
      dns_soa_record: gslbZoneDnsSoaRecordToTerraform(this._dnsSoaRecord.internalValue),
      sampling_enable: cdktf.listMapper(gslbZoneSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      service_list: cdktf.listMapper(gslbZoneServiceListStructToTerraform, true)(this._serviceList.internalValue),
      template: gslbZoneTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_server_ttl: {
        value: cdktf.numberToHclTerraform(this._useServerTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_caa_record_list: {
        value: cdktf.listMapperHcl(gslbZoneDnsCaaRecordListStructToHclTerraform, true)(this._dnsCaaRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneDnsCaaRecordListStructList",
      },
      dns_mx_record_list: {
        value: cdktf.listMapperHcl(gslbZoneDnsMxRecordListStructToHclTerraform, true)(this._dnsMxRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneDnsMxRecordListStructList",
      },
      dns_ns_record_list: {
        value: cdktf.listMapperHcl(gslbZoneDnsNsRecordListStructToHclTerraform, true)(this._dnsNsRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneDnsNsRecordListStructList",
      },
      dns_soa_record: {
        value: gslbZoneDnsSoaRecordToHclTerraform(this._dnsSoaRecord.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneDnsSoaRecordList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(gslbZoneSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneSamplingEnableList",
      },
      service_list: {
        value: cdktf.listMapperHcl(gslbZoneServiceListStructToHclTerraform, true)(this._serviceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceListStructList",
      },
      template: {
        value: gslbZoneTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
