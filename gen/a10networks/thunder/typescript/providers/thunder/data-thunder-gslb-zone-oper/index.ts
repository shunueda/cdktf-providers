// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbZoneOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#id DataThunderGslbZoneOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the name for the DNS zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#name DataThunderGslbZoneOper#name}
  */
  readonly name: string;
  /**
  * dns_caa_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#dns_caa_record_list DataThunderGslbZoneOper#dns_caa_record_list}
  */
  readonly dnsCaaRecordList?: DataThunderGslbZoneOperDnsCaaRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_mx_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#dns_mx_record_list DataThunderGslbZoneOper#dns_mx_record_list}
  */
  readonly dnsMxRecordList?: DataThunderGslbZoneOperDnsMxRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ns_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#dns_ns_record_list DataThunderGslbZoneOper#dns_ns_record_list}
  */
  readonly dnsNsRecordList?: DataThunderGslbZoneOperDnsNsRecordListStruct[] | cdktf.IResolvable;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#oper DataThunderGslbZoneOper#oper}
  */
  readonly oper?: DataThunderGslbZoneOperOper;
  /**
  * service_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#service_list DataThunderGslbZoneOper#service_list}
  */
  readonly serviceList?: DataThunderGslbZoneOperServiceListStruct[] | cdktf.IResolvable;
}
export interface DataThunderGslbZoneOperDnsCaaRecordListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#last_server DataThunderGslbZoneOper#last_server}
  */
  readonly lastServer?: string;
}

export function dataThunderGslbZoneOperDnsCaaRecordListOperToTerraform(struct?: DataThunderGslbZoneOperDnsCaaRecordListOperOutputReference | DataThunderGslbZoneOperDnsCaaRecordListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_server: cdktf.stringToTerraform(struct!.lastServer),
  }
}


export function dataThunderGslbZoneOperDnsCaaRecordListOperToHclTerraform(struct?: DataThunderGslbZoneOperDnsCaaRecordListOperOutputReference | DataThunderGslbZoneOperDnsCaaRecordListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_server: {
      value: cdktf.stringToHclTerraform(struct!.lastServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperDnsCaaRecordListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneOperDnsCaaRecordListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastServer = this._lastServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperDnsCaaRecordListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lastServer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lastServer = value.lastServer;
    }
  }

  // last_server - computed: false, optional: true, required: false
  private _lastServer?: string; 
  public get lastServer() {
    return this.getStringAttribute('last_server');
  }
  public set lastServer(value: string) {
    this._lastServer = value;
  }
  public resetLastServer() {
    this._lastServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastServerInput() {
    return this._lastServer;
  }
}
export interface DataThunderGslbZoneOperDnsCaaRecordListStruct {
  /**
  * Issuer Critical Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#critical_flag DataThunderGslbZoneOper#critical_flag}
  */
  readonly criticalFlag: number;
  /**
  * Specify other property tags, only allowed lowercase alphanumeric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#property_tag DataThunderGslbZoneOper#property_tag}
  */
  readonly propertyTag: string;
  /**
  * Specify the Issuer Domain Name or a URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#rdata DataThunderGslbZoneOper#rdata}
  */
  readonly rdata: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#oper DataThunderGslbZoneOper#oper}
  */
  readonly oper?: DataThunderGslbZoneOperDnsCaaRecordListOper;
}

export function dataThunderGslbZoneOperDnsCaaRecordListStructToTerraform(struct?: DataThunderGslbZoneOperDnsCaaRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical_flag: cdktf.numberToTerraform(struct!.criticalFlag),
    property_tag: cdktf.stringToTerraform(struct!.propertyTag),
    rdata: cdktf.stringToTerraform(struct!.rdata),
    oper: dataThunderGslbZoneOperDnsCaaRecordListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbZoneOperDnsCaaRecordListStructToHclTerraform(struct?: DataThunderGslbZoneOperDnsCaaRecordListStruct | cdktf.IResolvable): any {
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
    oper: {
      value: dataThunderGslbZoneOperDnsCaaRecordListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneOperDnsCaaRecordListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperDnsCaaRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneOperDnsCaaRecordListStruct | cdktf.IResolvable | undefined {
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
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperDnsCaaRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criticalFlag = undefined;
      this._propertyTag = undefined;
      this._rdata = undefined;
      this._oper.internalValue = undefined;
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
      this._oper.internalValue = value.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbZoneOperDnsCaaRecordListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneOperDnsCaaRecordListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

export class DataThunderGslbZoneOperDnsCaaRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneOperDnsCaaRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneOperDnsCaaRecordListStructOutputReference {
    return new DataThunderGslbZoneOperDnsCaaRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneOperDnsMxRecordListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#hits DataThunderGslbZoneOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#last_server DataThunderGslbZoneOper#last_server}
  */
  readonly lastServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#priority DataThunderGslbZoneOper#priority}
  */
  readonly priority?: number;
}

export function dataThunderGslbZoneOperDnsMxRecordListOperToTerraform(struct?: DataThunderGslbZoneOperDnsMxRecordListOperOutputReference | DataThunderGslbZoneOperDnsMxRecordListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
    last_server: cdktf.stringToTerraform(struct!.lastServer),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataThunderGslbZoneOperDnsMxRecordListOperToHclTerraform(struct?: DataThunderGslbZoneOperDnsMxRecordListOperOutputReference | DataThunderGslbZoneOperDnsMxRecordListOper): any {
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
    last_server: {
      value: cdktf.stringToHclTerraform(struct!.lastServer),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperDnsMxRecordListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneOperDnsMxRecordListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._lastServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastServer = this._lastServer;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperDnsMxRecordListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
      this._lastServer = undefined;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
      this._lastServer = value.lastServer;
      this._priority = value.priority;
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

  // last_server - computed: false, optional: true, required: false
  private _lastServer?: string; 
  public get lastServer() {
    return this.getStringAttribute('last_server');
  }
  public set lastServer(value: string) {
    this._lastServer = value;
  }
  public resetLastServer() {
    this._lastServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastServerInput() {
    return this._lastServer;
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
}
export interface DataThunderGslbZoneOperDnsMxRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#mx_name DataThunderGslbZoneOper#mx_name}
  */
  readonly mxName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#oper DataThunderGslbZoneOper#oper}
  */
  readonly oper?: DataThunderGslbZoneOperDnsMxRecordListOper;
}

export function dataThunderGslbZoneOperDnsMxRecordListStructToTerraform(struct?: DataThunderGslbZoneOperDnsMxRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mx_name: cdktf.stringToTerraform(struct!.mxName),
    oper: dataThunderGslbZoneOperDnsMxRecordListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbZoneOperDnsMxRecordListStructToHclTerraform(struct?: DataThunderGslbZoneOperDnsMxRecordListStruct | cdktf.IResolvable): any {
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
    oper: {
      value: dataThunderGslbZoneOperDnsMxRecordListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneOperDnsMxRecordListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperDnsMxRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneOperDnsMxRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxName = this._mxName;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperDnsMxRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mxName = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mxName = value.mxName;
      this._oper.internalValue = value.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbZoneOperDnsMxRecordListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneOperDnsMxRecordListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

export class DataThunderGslbZoneOperDnsMxRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneOperDnsMxRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneOperDnsMxRecordListStructOutputReference {
    return new DataThunderGslbZoneOperDnsMxRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneOperDnsNsRecordListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#hits DataThunderGslbZoneOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#last_server DataThunderGslbZoneOper#last_server}
  */
  readonly lastServer?: string;
}

export function dataThunderGslbZoneOperDnsNsRecordListOperToTerraform(struct?: DataThunderGslbZoneOperDnsNsRecordListOperOutputReference | DataThunderGslbZoneOperDnsNsRecordListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
    last_server: cdktf.stringToTerraform(struct!.lastServer),
  }
}


export function dataThunderGslbZoneOperDnsNsRecordListOperToHclTerraform(struct?: DataThunderGslbZoneOperDnsNsRecordListOperOutputReference | DataThunderGslbZoneOperDnsNsRecordListOper): any {
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
    last_server: {
      value: cdktf.stringToHclTerraform(struct!.lastServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperDnsNsRecordListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneOperDnsNsRecordListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._lastServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastServer = this._lastServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperDnsNsRecordListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
      this._lastServer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
      this._lastServer = value.lastServer;
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

  // last_server - computed: false, optional: true, required: false
  private _lastServer?: string; 
  public get lastServer() {
    return this.getStringAttribute('last_server');
  }
  public set lastServer(value: string) {
    this._lastServer = value;
  }
  public resetLastServer() {
    this._lastServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastServerInput() {
    return this._lastServer;
  }
}
export interface DataThunderGslbZoneOperDnsNsRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#ns_name DataThunderGslbZoneOper#ns_name}
  */
  readonly nsName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#oper DataThunderGslbZoneOper#oper}
  */
  readonly oper?: DataThunderGslbZoneOperDnsNsRecordListOper;
}

export function dataThunderGslbZoneOperDnsNsRecordListStructToTerraform(struct?: DataThunderGslbZoneOperDnsNsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ns_name: cdktf.stringToTerraform(struct!.nsName),
    oper: dataThunderGslbZoneOperDnsNsRecordListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbZoneOperDnsNsRecordListStructToHclTerraform(struct?: DataThunderGslbZoneOperDnsNsRecordListStruct | cdktf.IResolvable): any {
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
    oper: {
      value: dataThunderGslbZoneOperDnsNsRecordListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneOperDnsNsRecordListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperDnsNsRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneOperDnsNsRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsName = this._nsName;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperDnsNsRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsName = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsName = value.nsName;
      this._oper.internalValue = value.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbZoneOperDnsNsRecordListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneOperDnsNsRecordListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

export class DataThunderGslbZoneOperDnsNsRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneOperDnsNsRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneOperDnsNsRecordListStructOutputReference {
    return new DataThunderGslbZoneOperDnsNsRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneOperOperDnsSoaRecordListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#expire DataThunderGslbZoneOper#expire}
  */
  readonly expire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#mx_name DataThunderGslbZoneOper#mx_name}
  */
  readonly mxName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#name DataThunderGslbZoneOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#refresh DataThunderGslbZoneOper#refresh}
  */
  readonly refresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#retry DataThunderGslbZoneOper#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#serial DataThunderGslbZoneOper#serial}
  */
  readonly serial?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#ttl DataThunderGslbZoneOper#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#type DataThunderGslbZoneOper#type}
  */
  readonly type?: string;
}

export function dataThunderGslbZoneOperOperDnsSoaRecordListStructToTerraform(struct?: DataThunderGslbZoneOperOperDnsSoaRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire: cdktf.numberToTerraform(struct!.expire),
    mx_name: cdktf.stringToTerraform(struct!.mxName),
    name: cdktf.stringToTerraform(struct!.name),
    refresh: cdktf.numberToTerraform(struct!.refresh),
    retry: cdktf.numberToTerraform(struct!.retry),
    serial: cdktf.numberToTerraform(struct!.serial),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderGslbZoneOperOperDnsSoaRecordListStructToHclTerraform(struct?: DataThunderGslbZoneOperOperDnsSoaRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expire: {
      value: cdktf.numberToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mx_name: {
      value: cdktf.stringToHclTerraform(struct!.mxName),
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
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperOperDnsSoaRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneOperOperDnsSoaRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._mxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxName = this._mxName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperOperDnsSoaRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expire = undefined;
      this._mxName = undefined;
      this._name = undefined;
      this._refresh = undefined;
      this._retry = undefined;
      this._serial = undefined;
      this._ttl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expire = value.expire;
      this._mxName = value.mxName;
      this._name = value.name;
      this._refresh = value.refresh;
      this._retry = value.retry;
      this._serial = value.serial;
      this._ttl = value.ttl;
      this._type = value.type;
    }
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

  // mx_name - computed: false, optional: true, required: false
  private _mxName?: string; 
  public get mxName() {
    return this.getStringAttribute('mx_name');
  }
  public set mxName(value: string) {
    this._mxName = value;
  }
  public resetMxName() {
    this._mxName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxNameInput() {
    return this._mxName;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataThunderGslbZoneOperOperDnsSoaRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneOperOperDnsSoaRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneOperOperDnsSoaRecordListStructOutputReference {
    return new DataThunderGslbZoneOperOperDnsSoaRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#state DataThunderGslbZoneOper#state}
  */
  readonly state?: string;
  /**
  * dns_soa_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#dns_soa_record_list DataThunderGslbZoneOper#dns_soa_record_list}
  */
  readonly dnsSoaRecordList?: DataThunderGslbZoneOperOperDnsSoaRecordListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbZoneOperOperToTerraform(struct?: DataThunderGslbZoneOperOperOutputReference | DataThunderGslbZoneOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
    dns_soa_record_list: cdktf.listMapper(dataThunderGslbZoneOperOperDnsSoaRecordListStructToTerraform, true)(struct!.dnsSoaRecordList),
  }
}


export function dataThunderGslbZoneOperOperToHclTerraform(struct?: DataThunderGslbZoneOperOperOutputReference | DataThunderGslbZoneOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_soa_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneOperOperDnsSoaRecordListStructToHclTerraform, true)(struct!.dnsSoaRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneOperOperDnsSoaRecordListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._dnsSoaRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSoaRecordList = this._dnsSoaRecordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
      this._dnsSoaRecordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
      this._dnsSoaRecordList.internalValue = value.dnsSoaRecordList;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // dns_soa_record_list - computed: false, optional: true, required: false
  private _dnsSoaRecordList = new DataThunderGslbZoneOperOperDnsSoaRecordListStructList(this, "dns_soa_record_list", false);
  public get dnsSoaRecordList() {
    return this._dnsSoaRecordList;
  }
  public putDnsSoaRecordList(value: DataThunderGslbZoneOperOperDnsSoaRecordListStruct[] | cdktf.IResolvable) {
    this._dnsSoaRecordList.internalValue = value;
  }
  public resetDnsSoaRecordList() {
    this._dnsSoaRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSoaRecordListInput() {
    return this._dnsSoaRecordList.internalValue;
  }
}
export interface DataThunderGslbZoneOperServiceListDnsMxRecordListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#hits DataThunderGslbZoneOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#last_server DataThunderGslbZoneOper#last_server}
  */
  readonly lastServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#priority DataThunderGslbZoneOper#priority}
  */
  readonly priority?: number;
}

export function dataThunderGslbZoneOperServiceListDnsMxRecordListOperToTerraform(struct?: DataThunderGslbZoneOperServiceListDnsMxRecordListOperOutputReference | DataThunderGslbZoneOperServiceListDnsMxRecordListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
    last_server: cdktf.stringToTerraform(struct!.lastServer),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataThunderGslbZoneOperServiceListDnsMxRecordListOperToHclTerraform(struct?: DataThunderGslbZoneOperServiceListDnsMxRecordListOperOutputReference | DataThunderGslbZoneOperServiceListDnsMxRecordListOper): any {
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
    last_server: {
      value: cdktf.stringToHclTerraform(struct!.lastServer),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperServiceListDnsMxRecordListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneOperServiceListDnsMxRecordListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._lastServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastServer = this._lastServer;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperServiceListDnsMxRecordListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
      this._lastServer = undefined;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
      this._lastServer = value.lastServer;
      this._priority = value.priority;
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

  // last_server - computed: false, optional: true, required: false
  private _lastServer?: string; 
  public get lastServer() {
    return this.getStringAttribute('last_server');
  }
  public set lastServer(value: string) {
    this._lastServer = value;
  }
  public resetLastServer() {
    this._lastServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastServerInput() {
    return this._lastServer;
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
}
export interface DataThunderGslbZoneOperServiceListDnsMxRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#mx_name DataThunderGslbZoneOper#mx_name}
  */
  readonly mxName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#oper DataThunderGslbZoneOper#oper}
  */
  readonly oper?: DataThunderGslbZoneOperServiceListDnsMxRecordListOper;
}

export function dataThunderGslbZoneOperServiceListDnsMxRecordListStructToTerraform(struct?: DataThunderGslbZoneOperServiceListDnsMxRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mx_name: cdktf.stringToTerraform(struct!.mxName),
    oper: dataThunderGslbZoneOperServiceListDnsMxRecordListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbZoneOperServiceListDnsMxRecordListStructToHclTerraform(struct?: DataThunderGslbZoneOperServiceListDnsMxRecordListStruct | cdktf.IResolvable): any {
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
    oper: {
      value: dataThunderGslbZoneOperServiceListDnsMxRecordListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneOperServiceListDnsMxRecordListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperServiceListDnsMxRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneOperServiceListDnsMxRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxName = this._mxName;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperServiceListDnsMxRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mxName = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mxName = value.mxName;
      this._oper.internalValue = value.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbZoneOperServiceListDnsMxRecordListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneOperServiceListDnsMxRecordListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

export class DataThunderGslbZoneOperServiceListDnsMxRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneOperServiceListDnsMxRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneOperServiceListDnsMxRecordListStructOutputReference {
    return new DataThunderGslbZoneOperServiceListDnsMxRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneOperServiceListDnsNsRecordListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#hits DataThunderGslbZoneOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#last_server DataThunderGslbZoneOper#last_server}
  */
  readonly lastServer?: string;
}

export function dataThunderGslbZoneOperServiceListDnsNsRecordListOperToTerraform(struct?: DataThunderGslbZoneOperServiceListDnsNsRecordListOperOutputReference | DataThunderGslbZoneOperServiceListDnsNsRecordListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
    last_server: cdktf.stringToTerraform(struct!.lastServer),
  }
}


export function dataThunderGslbZoneOperServiceListDnsNsRecordListOperToHclTerraform(struct?: DataThunderGslbZoneOperServiceListDnsNsRecordListOperOutputReference | DataThunderGslbZoneOperServiceListDnsNsRecordListOper): any {
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
    last_server: {
      value: cdktf.stringToHclTerraform(struct!.lastServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperServiceListDnsNsRecordListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneOperServiceListDnsNsRecordListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._lastServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastServer = this._lastServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperServiceListDnsNsRecordListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
      this._lastServer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
      this._lastServer = value.lastServer;
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

  // last_server - computed: false, optional: true, required: false
  private _lastServer?: string; 
  public get lastServer() {
    return this.getStringAttribute('last_server');
  }
  public set lastServer(value: string) {
    this._lastServer = value;
  }
  public resetLastServer() {
    this._lastServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastServerInput() {
    return this._lastServer;
  }
}
export interface DataThunderGslbZoneOperServiceListDnsNsRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#ns_name DataThunderGslbZoneOper#ns_name}
  */
  readonly nsName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#oper DataThunderGslbZoneOper#oper}
  */
  readonly oper?: DataThunderGslbZoneOperServiceListDnsNsRecordListOper;
}

export function dataThunderGslbZoneOperServiceListDnsNsRecordListStructToTerraform(struct?: DataThunderGslbZoneOperServiceListDnsNsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ns_name: cdktf.stringToTerraform(struct!.nsName),
    oper: dataThunderGslbZoneOperServiceListDnsNsRecordListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbZoneOperServiceListDnsNsRecordListStructToHclTerraform(struct?: DataThunderGslbZoneOperServiceListDnsNsRecordListStruct | cdktf.IResolvable): any {
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
    oper: {
      value: dataThunderGslbZoneOperServiceListDnsNsRecordListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneOperServiceListDnsNsRecordListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperServiceListDnsNsRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneOperServiceListDnsNsRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsName = this._nsName;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperServiceListDnsNsRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsName = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsName = value.nsName;
      this._oper.internalValue = value.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbZoneOperServiceListDnsNsRecordListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneOperServiceListDnsNsRecordListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

export class DataThunderGslbZoneOperServiceListDnsNsRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneOperServiceListDnsNsRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneOperServiceListDnsNsRecordListStructOutputReference {
    return new DataThunderGslbZoneOperServiceListDnsNsRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneOperServiceListOperCacheListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#additional_records DataThunderGslbZoneOper#additional_records}
  */
  readonly additionalRecords?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#alias DataThunderGslbZoneOper#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#answer_records DataThunderGslbZoneOper#answer_records}
  */
  readonly answerRecords?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#authority_records DataThunderGslbZoneOper#authority_records}
  */
  readonly authorityRecords?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#cache_dns_flag DataThunderGslbZoneOper#cache_dns_flag}
  */
  readonly cacheDnsFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#cache_length DataThunderGslbZoneOper#cache_length}
  */
  readonly cacheLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#cache_ttl DataThunderGslbZoneOper#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#question_records DataThunderGslbZoneOper#question_records}
  */
  readonly questionRecords?: number;
}

export function dataThunderGslbZoneOperServiceListOperCacheListStructToTerraform(struct?: DataThunderGslbZoneOperServiceListOperCacheListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_records: cdktf.numberToTerraform(struct!.additionalRecords),
    alias: cdktf.stringToTerraform(struct!.alias),
    answer_records: cdktf.numberToTerraform(struct!.answerRecords),
    authority_records: cdktf.numberToTerraform(struct!.authorityRecords),
    cache_dns_flag: cdktf.stringToTerraform(struct!.cacheDnsFlag),
    cache_length: cdktf.numberToTerraform(struct!.cacheLength),
    cache_ttl: cdktf.numberToTerraform(struct!.cacheTtl),
    question_records: cdktf.numberToTerraform(struct!.questionRecords),
  }
}


export function dataThunderGslbZoneOperServiceListOperCacheListStructToHclTerraform(struct?: DataThunderGslbZoneOperServiceListOperCacheListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_records: {
      value: cdktf.numberToHclTerraform(struct!.additionalRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    answer_records: {
      value: cdktf.numberToHclTerraform(struct!.answerRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authority_records: {
      value: cdktf.numberToHclTerraform(struct!.authorityRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_dns_flag: {
      value: cdktf.stringToHclTerraform(struct!.cacheDnsFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_length: {
      value: cdktf.numberToHclTerraform(struct!.cacheLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    question_records: {
      value: cdktf.numberToHclTerraform(struct!.questionRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperServiceListOperCacheListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneOperServiceListOperCacheListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecords = this._additionalRecords;
    }
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._answerRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerRecords = this._answerRecords;
    }
    if (this._authorityRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorityRecords = this._authorityRecords;
    }
    if (this._cacheDnsFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDnsFlag = this._cacheDnsFlag;
    }
    if (this._cacheLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheLength = this._cacheLength;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._questionRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.questionRecords = this._questionRecords;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperServiceListOperCacheListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalRecords = undefined;
      this._alias = undefined;
      this._answerRecords = undefined;
      this._authorityRecords = undefined;
      this._cacheDnsFlag = undefined;
      this._cacheLength = undefined;
      this._cacheTtl = undefined;
      this._questionRecords = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalRecords = value.additionalRecords;
      this._alias = value.alias;
      this._answerRecords = value.answerRecords;
      this._authorityRecords = value.authorityRecords;
      this._cacheDnsFlag = value.cacheDnsFlag;
      this._cacheLength = value.cacheLength;
      this._cacheTtl = value.cacheTtl;
      this._questionRecords = value.questionRecords;
    }
  }

  // additional_records - computed: false, optional: true, required: false
  private _additionalRecords?: number; 
  public get additionalRecords() {
    return this.getNumberAttribute('additional_records');
  }
  public set additionalRecords(value: number) {
    this._additionalRecords = value;
  }
  public resetAdditionalRecords() {
    this._additionalRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecordsInput() {
    return this._additionalRecords;
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

  // answer_records - computed: false, optional: true, required: false
  private _answerRecords?: number; 
  public get answerRecords() {
    return this.getNumberAttribute('answer_records');
  }
  public set answerRecords(value: number) {
    this._answerRecords = value;
  }
  public resetAnswerRecords() {
    this._answerRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerRecordsInput() {
    return this._answerRecords;
  }

  // authority_records - computed: false, optional: true, required: false
  private _authorityRecords?: number; 
  public get authorityRecords() {
    return this.getNumberAttribute('authority_records');
  }
  public set authorityRecords(value: number) {
    this._authorityRecords = value;
  }
  public resetAuthorityRecords() {
    this._authorityRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityRecordsInput() {
    return this._authorityRecords;
  }

  // cache_dns_flag - computed: false, optional: true, required: false
  private _cacheDnsFlag?: string; 
  public get cacheDnsFlag() {
    return this.getStringAttribute('cache_dns_flag');
  }
  public set cacheDnsFlag(value: string) {
    this._cacheDnsFlag = value;
  }
  public resetCacheDnsFlag() {
    this._cacheDnsFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDnsFlagInput() {
    return this._cacheDnsFlag;
  }

  // cache_length - computed: false, optional: true, required: false
  private _cacheLength?: number; 
  public get cacheLength() {
    return this.getNumberAttribute('cache_length');
  }
  public set cacheLength(value: number) {
    this._cacheLength = value;
  }
  public resetCacheLength() {
    this._cacheLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheLengthInput() {
    return this._cacheLength;
  }

  // cache_ttl - computed: false, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // question_records - computed: false, optional: true, required: false
  private _questionRecords?: number; 
  public get questionRecords() {
    return this.getNumberAttribute('question_records');
  }
  public set questionRecords(value: number) {
    this._questionRecords = value;
  }
  public resetQuestionRecords() {
    this._questionRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionRecordsInput() {
    return this._questionRecords;
  }
}

export class DataThunderGslbZoneOperServiceListOperCacheListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneOperServiceListOperCacheListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneOperServiceListOperCacheListStructOutputReference {
    return new DataThunderGslbZoneOperServiceListOperCacheListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneOperServiceListOperDnsARecordListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#ip DataThunderGslbZoneOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#rec_ttl DataThunderGslbZoneOper#rec_ttl}
  */
  readonly recTtl?: number;
}

export function dataThunderGslbZoneOperServiceListOperDnsARecordListStructToTerraform(struct?: DataThunderGslbZoneOperServiceListOperDnsARecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    rec_ttl: cdktf.numberToTerraform(struct!.recTtl),
  }
}


export function dataThunderGslbZoneOperServiceListOperDnsARecordListStructToHclTerraform(struct?: DataThunderGslbZoneOperServiceListOperDnsARecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rec_ttl: {
      value: cdktf.numberToHclTerraform(struct!.recTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperServiceListOperDnsARecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneOperServiceListOperDnsARecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._recTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.recTtl = this._recTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperServiceListOperDnsARecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._recTtl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._recTtl = value.recTtl;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // rec_ttl - computed: false, optional: true, required: false
  private _recTtl?: number; 
  public get recTtl() {
    return this.getNumberAttribute('rec_ttl');
  }
  public set recTtl(value: number) {
    this._recTtl = value;
  }
  public resetRecTtl() {
    this._recTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recTtlInput() {
    return this._recTtl;
  }
}

export class DataThunderGslbZoneOperServiceListOperDnsARecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneOperServiceListOperDnsARecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneOperServiceListOperDnsARecordListStructOutputReference {
    return new DataThunderGslbZoneOperServiceListOperDnsARecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneOperServiceListOperSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#aging DataThunderGslbZoneOper#aging}
  */
  readonly aging?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#best DataThunderGslbZoneOper#best}
  */
  readonly best?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#client DataThunderGslbZoneOper#client}
  */
  readonly client?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#hits DataThunderGslbZoneOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#last_second_hits DataThunderGslbZoneOper#last_second_hits}
  */
  readonly lastSecondHits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#mode DataThunderGslbZoneOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#ttl DataThunderGslbZoneOper#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#update DataThunderGslbZoneOper#update}
  */
  readonly update?: number;
}

export function dataThunderGslbZoneOperServiceListOperSessionListStructToTerraform(struct?: DataThunderGslbZoneOperServiceListOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aging: cdktf.numberToTerraform(struct!.aging),
    best: cdktf.stringToTerraform(struct!.best),
    client: cdktf.stringToTerraform(struct!.client),
    hits: cdktf.numberToTerraform(struct!.hits),
    last_second_hits: cdktf.numberToTerraform(struct!.lastSecondHits),
    mode: cdktf.stringToTerraform(struct!.mode),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    update: cdktf.numberToTerraform(struct!.update),
  }
}


export function dataThunderGslbZoneOperServiceListOperSessionListStructToHclTerraform(struct?: DataThunderGslbZoneOperServiceListOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aging: {
      value: cdktf.numberToHclTerraform(struct!.aging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    best: {
      value: cdktf.stringToHclTerraform(struct!.best),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client: {
      value: cdktf.stringToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_second_hits: {
      value: cdktf.numberToHclTerraform(struct!.lastSecondHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.numberToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperServiceListOperSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneOperServiceListOperSessionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aging !== undefined) {
      hasAnyValues = true;
      internalValueResult.aging = this._aging;
    }
    if (this._best !== undefined) {
      hasAnyValues = true;
      internalValueResult.best = this._best;
    }
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._lastSecondHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSecondHits = this._lastSecondHits;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperServiceListOperSessionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aging = undefined;
      this._best = undefined;
      this._client = undefined;
      this._hits = undefined;
      this._lastSecondHits = undefined;
      this._mode = undefined;
      this._ttl = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aging = value.aging;
      this._best = value.best;
      this._client = value.client;
      this._hits = value.hits;
      this._lastSecondHits = value.lastSecondHits;
      this._mode = value.mode;
      this._ttl = value.ttl;
      this._update = value.update;
    }
  }

  // aging - computed: false, optional: true, required: false
  private _aging?: number; 
  public get aging() {
    return this.getNumberAttribute('aging');
  }
  public set aging(value: number) {
    this._aging = value;
  }
  public resetAging() {
    this._aging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingInput() {
    return this._aging;
  }

  // best - computed: false, optional: true, required: false
  private _best?: string; 
  public get best() {
    return this.getStringAttribute('best');
  }
  public set best(value: string) {
    this._best = value;
  }
  public resetBest() {
    this._best = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestInput() {
    return this._best;
  }

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
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

  // last_second_hits - computed: false, optional: true, required: false
  private _lastSecondHits?: number; 
  public get lastSecondHits() {
    return this.getNumberAttribute('last_second_hits');
  }
  public set lastSecondHits(value: number) {
    this._lastSecondHits = value;
  }
  public resetLastSecondHits() {
    this._lastSecondHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSecondHitsInput() {
    return this._lastSecondHits;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // update - computed: false, optional: true, required: false
  private _update?: number; 
  public get update() {
    return this.getNumberAttribute('update');
  }
  public set update(value: number) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

export class DataThunderGslbZoneOperServiceListOperSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneOperServiceListOperSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneOperServiceListOperSessionListStructOutputReference {
    return new DataThunderGslbZoneOperServiceListOperSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneOperServiceListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#matched DataThunderGslbZoneOper#matched}
  */
  readonly matched?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#state DataThunderGslbZoneOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#total_sessions DataThunderGslbZoneOper#total_sessions}
  */
  readonly totalSessions?: number;
  /**
  * cache_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#cache_list DataThunderGslbZoneOper#cache_list}
  */
  readonly cacheList?: DataThunderGslbZoneOperServiceListOperCacheListStruct[] | cdktf.IResolvable;
  /**
  * dns_a_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#dns_a_record_list DataThunderGslbZoneOper#dns_a_record_list}
  */
  readonly dnsARecordList?: DataThunderGslbZoneOperServiceListOperDnsARecordListStruct[] | cdktf.IResolvable;
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#session_list DataThunderGslbZoneOper#session_list}
  */
  readonly sessionList?: DataThunderGslbZoneOperServiceListOperSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbZoneOperServiceListOperToTerraform(struct?: DataThunderGslbZoneOperServiceListOperOutputReference | DataThunderGslbZoneOperServiceListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matched: cdktf.numberToTerraform(struct!.matched),
    state: cdktf.stringToTerraform(struct!.state),
    total_sessions: cdktf.numberToTerraform(struct!.totalSessions),
    cache_list: cdktf.listMapper(dataThunderGslbZoneOperServiceListOperCacheListStructToTerraform, true)(struct!.cacheList),
    dns_a_record_list: cdktf.listMapper(dataThunderGslbZoneOperServiceListOperDnsARecordListStructToTerraform, true)(struct!.dnsARecordList),
    session_list: cdktf.listMapper(dataThunderGslbZoneOperServiceListOperSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderGslbZoneOperServiceListOperToHclTerraform(struct?: DataThunderGslbZoneOperServiceListOperOutputReference | DataThunderGslbZoneOperServiceListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matched: {
      value: cdktf.numberToHclTerraform(struct!.matched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_sessions: {
      value: cdktf.numberToHclTerraform(struct!.totalSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneOperServiceListOperCacheListStructToHclTerraform, true)(struct!.cacheList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneOperServiceListOperCacheListStructList",
    },
    dns_a_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneOperServiceListOperDnsARecordListStructToHclTerraform, true)(struct!.dnsARecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneOperServiceListOperDnsARecordListStructList",
    },
    session_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneOperServiceListOperSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneOperServiceListOperSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperServiceListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneOperServiceListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matched !== undefined) {
      hasAnyValues = true;
      internalValueResult.matched = this._matched;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._totalSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSessions = this._totalSessions;
    }
    if (this._cacheList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheList = this._cacheList?.internalValue;
    }
    if (this._dnsARecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecordList = this._dnsARecordList?.internalValue;
    }
    if (this._sessionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionList = this._sessionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperServiceListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matched = undefined;
      this._state = undefined;
      this._totalSessions = undefined;
      this._cacheList.internalValue = undefined;
      this._dnsARecordList.internalValue = undefined;
      this._sessionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matched = value.matched;
      this._state = value.state;
      this._totalSessions = value.totalSessions;
      this._cacheList.internalValue = value.cacheList;
      this._dnsARecordList.internalValue = value.dnsARecordList;
      this._sessionList.internalValue = value.sessionList;
    }
  }

  // matched - computed: false, optional: true, required: false
  private _matched?: number; 
  public get matched() {
    return this.getNumberAttribute('matched');
  }
  public set matched(value: number) {
    this._matched = value;
  }
  public resetMatched() {
    this._matched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchedInput() {
    return this._matched;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // total_sessions - computed: false, optional: true, required: false
  private _totalSessions?: number; 
  public get totalSessions() {
    return this.getNumberAttribute('total_sessions');
  }
  public set totalSessions(value: number) {
    this._totalSessions = value;
  }
  public resetTotalSessions() {
    this._totalSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSessionsInput() {
    return this._totalSessions;
  }

  // cache_list - computed: false, optional: true, required: false
  private _cacheList = new DataThunderGslbZoneOperServiceListOperCacheListStructList(this, "cache_list", false);
  public get cacheList() {
    return this._cacheList;
  }
  public putCacheList(value: DataThunderGslbZoneOperServiceListOperCacheListStruct[] | cdktf.IResolvable) {
    this._cacheList.internalValue = value;
  }
  public resetCacheList() {
    this._cacheList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheListInput() {
    return this._cacheList.internalValue;
  }

  // dns_a_record_list - computed: false, optional: true, required: false
  private _dnsARecordList = new DataThunderGslbZoneOperServiceListOperDnsARecordListStructList(this, "dns_a_record_list", false);
  public get dnsARecordList() {
    return this._dnsARecordList;
  }
  public putDnsARecordList(value: DataThunderGslbZoneOperServiceListOperDnsARecordListStruct[] | cdktf.IResolvable) {
    this._dnsARecordList.internalValue = value;
  }
  public resetDnsARecordList() {
    this._dnsARecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordListInput() {
    return this._dnsARecordList.internalValue;
  }

  // session_list - computed: false, optional: true, required: false
  private _sessionList = new DataThunderGslbZoneOperServiceListOperSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderGslbZoneOperServiceListOperSessionListStruct[] | cdktf.IResolvable) {
    this._sessionList.internalValue = value;
  }
  public resetSessionList() {
    this._sessionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionListInput() {
    return this._sessionList.internalValue;
  }
}
export interface DataThunderGslbZoneOperServiceListStruct {
  /**
  * Specify the service name for the zone, * for wildcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#service_name DataThunderGslbZoneOper#service_name}
  */
  readonly serviceName: string;
  /**
  * Port number of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#service_port DataThunderGslbZoneOper#service_port}
  */
  readonly servicePort: number;
  /**
  * dns_mx_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#dns_mx_record_list DataThunderGslbZoneOper#dns_mx_record_list}
  */
  readonly dnsMxRecordList?: DataThunderGslbZoneOperServiceListDnsMxRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ns_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#dns_ns_record_list DataThunderGslbZoneOper#dns_ns_record_list}
  */
  readonly dnsNsRecordList?: DataThunderGslbZoneOperServiceListDnsNsRecordListStruct[] | cdktf.IResolvable;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#oper DataThunderGslbZoneOper#oper}
  */
  readonly oper?: DataThunderGslbZoneOperServiceListOper;
}

export function dataThunderGslbZoneOperServiceListStructToTerraform(struct?: DataThunderGslbZoneOperServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_port: cdktf.numberToTerraform(struct!.servicePort),
    dns_mx_record_list: cdktf.listMapper(dataThunderGslbZoneOperServiceListDnsMxRecordListStructToTerraform, true)(struct!.dnsMxRecordList),
    dns_ns_record_list: cdktf.listMapper(dataThunderGslbZoneOperServiceListDnsNsRecordListStructToTerraform, true)(struct!.dnsNsRecordList),
    oper: dataThunderGslbZoneOperServiceListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbZoneOperServiceListStructToHclTerraform(struct?: DataThunderGslbZoneOperServiceListStruct | cdktf.IResolvable): any {
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
    dns_mx_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneOperServiceListDnsMxRecordListStructToHclTerraform, true)(struct!.dnsMxRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneOperServiceListDnsMxRecordListStructList",
    },
    dns_ns_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneOperServiceListDnsNsRecordListStructToHclTerraform, true)(struct!.dnsNsRecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneOperServiceListDnsNsRecordListStructList",
    },
    oper: {
      value: dataThunderGslbZoneOperServiceListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneOperServiceListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneOperServiceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneOperServiceListStruct | cdktf.IResolvable | undefined {
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
    if (this._dnsMxRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMxRecordList = this._dnsMxRecordList?.internalValue;
    }
    if (this._dnsNsRecordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNsRecordList = this._dnsNsRecordList?.internalValue;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneOperServiceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._servicePort = undefined;
      this._dnsMxRecordList.internalValue = undefined;
      this._dnsNsRecordList.internalValue = undefined;
      this._oper.internalValue = undefined;
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
      this._dnsMxRecordList.internalValue = value.dnsMxRecordList;
      this._dnsNsRecordList.internalValue = value.dnsNsRecordList;
      this._oper.internalValue = value.oper;
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

  // dns_mx_record_list - computed: false, optional: true, required: false
  private _dnsMxRecordList = new DataThunderGslbZoneOperServiceListDnsMxRecordListStructList(this, "dns_mx_record_list", false);
  public get dnsMxRecordList() {
    return this._dnsMxRecordList;
  }
  public putDnsMxRecordList(value: DataThunderGslbZoneOperServiceListDnsMxRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsNsRecordList = new DataThunderGslbZoneOperServiceListDnsNsRecordListStructList(this, "dns_ns_record_list", false);
  public get dnsNsRecordList() {
    return this._dnsNsRecordList;
  }
  public putDnsNsRecordList(value: DataThunderGslbZoneOperServiceListDnsNsRecordListStruct[] | cdktf.IResolvable) {
    this._dnsNsRecordList.internalValue = value;
  }
  public resetDnsNsRecordList() {
    this._dnsNsRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNsRecordListInput() {
    return this._dnsNsRecordList.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbZoneOperServiceListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneOperServiceListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

export class DataThunderGslbZoneOperServiceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneOperServiceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneOperServiceListStructOutputReference {
    return new DataThunderGslbZoneOperServiceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper thunder_gslb_zone_oper}
*/
export class DataThunderGslbZoneOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbZoneOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbZoneOper to import
  * @param importFromId The id of the existing DataThunderGslbZoneOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbZoneOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_oper thunder_gslb_zone_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbZoneOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbZoneOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_oper',
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
    this._dnsCaaRecordList.internalValue = config.dnsCaaRecordList;
    this._dnsMxRecordList.internalValue = config.dnsMxRecordList;
    this._dnsNsRecordList.internalValue = config.dnsNsRecordList;
    this._oper.internalValue = config.oper;
    this._serviceList.internalValue = config.serviceList;
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
  private _dnsCaaRecordList = new DataThunderGslbZoneOperDnsCaaRecordListStructList(this, "dns_caa_record_list", false);
  public get dnsCaaRecordList() {
    return this._dnsCaaRecordList;
  }
  public putDnsCaaRecordList(value: DataThunderGslbZoneOperDnsCaaRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsMxRecordList = new DataThunderGslbZoneOperDnsMxRecordListStructList(this, "dns_mx_record_list", false);
  public get dnsMxRecordList() {
    return this._dnsMxRecordList;
  }
  public putDnsMxRecordList(value: DataThunderGslbZoneOperDnsMxRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsNsRecordList = new DataThunderGslbZoneOperDnsNsRecordListStructList(this, "dns_ns_record_list", false);
  public get dnsNsRecordList() {
    return this._dnsNsRecordList;
  }
  public putDnsNsRecordList(value: DataThunderGslbZoneOperDnsNsRecordListStruct[] | cdktf.IResolvable) {
    this._dnsNsRecordList.internalValue = value;
  }
  public resetDnsNsRecordList() {
    this._dnsNsRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNsRecordListInput() {
    return this._dnsNsRecordList.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbZoneOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // service_list - computed: false, optional: true, required: false
  private _serviceList = new DataThunderGslbZoneOperServiceListStructList(this, "service_list", false);
  public get serviceList() {
    return this._serviceList;
  }
  public putServiceList(value: DataThunderGslbZoneOperServiceListStruct[] | cdktf.IResolvable) {
    this._serviceList.internalValue = value;
  }
  public resetServiceList() {
    this._serviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceListInput() {
    return this._serviceList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      dns_caa_record_list: cdktf.listMapper(dataThunderGslbZoneOperDnsCaaRecordListStructToTerraform, true)(this._dnsCaaRecordList.internalValue),
      dns_mx_record_list: cdktf.listMapper(dataThunderGslbZoneOperDnsMxRecordListStructToTerraform, true)(this._dnsMxRecordList.internalValue),
      dns_ns_record_list: cdktf.listMapper(dataThunderGslbZoneOperDnsNsRecordListStructToTerraform, true)(this._dnsNsRecordList.internalValue),
      oper: dataThunderGslbZoneOperOperToTerraform(this._oper.internalValue),
      service_list: cdktf.listMapper(dataThunderGslbZoneOperServiceListStructToTerraform, true)(this._serviceList.internalValue),
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
        value: cdktf.listMapperHcl(dataThunderGslbZoneOperDnsCaaRecordListStructToHclTerraform, true)(this._dnsCaaRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneOperDnsCaaRecordListStructList",
      },
      dns_mx_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneOperDnsMxRecordListStructToHclTerraform, true)(this._dnsMxRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneOperDnsMxRecordListStructList",
      },
      dns_ns_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneOperDnsNsRecordListStructToHclTerraform, true)(this._dnsNsRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneOperDnsNsRecordListStructList",
      },
      oper: {
        value: dataThunderGslbZoneOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneOperOperList",
      },
      service_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneOperServiceListStructToHclTerraform, true)(this._serviceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneOperServiceListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
