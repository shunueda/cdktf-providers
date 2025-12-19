// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbZoneServiceOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#id DataThunderGslbZoneServiceOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the service name for the zone, * for wildcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#service_name DataThunderGslbZoneServiceOper#service_name}
  */
  readonly serviceName: string;
  /**
  * Port number of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#service_port DataThunderGslbZoneServiceOper#service_port}
  */
  readonly servicePort: number;
  /**
  * Zone_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#zone_name DataThunderGslbZoneServiceOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * dns_mx_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#dns_mx_record_list DataThunderGslbZoneServiceOper#dns_mx_record_list}
  */
  readonly dnsMxRecordList?: DataThunderGslbZoneServiceOperDnsMxRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ns_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#dns_ns_record_list DataThunderGslbZoneServiceOper#dns_ns_record_list}
  */
  readonly dnsNsRecordList?: DataThunderGslbZoneServiceOperDnsNsRecordListStruct[] | cdktf.IResolvable;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#oper DataThunderGslbZoneServiceOper#oper}
  */
  readonly oper?: DataThunderGslbZoneServiceOperOper;
}
export interface DataThunderGslbZoneServiceOperDnsMxRecordListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#hits DataThunderGslbZoneServiceOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#last_server DataThunderGslbZoneServiceOper#last_server}
  */
  readonly lastServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#priority DataThunderGslbZoneServiceOper#priority}
  */
  readonly priority?: number;
}

export function dataThunderGslbZoneServiceOperDnsMxRecordListOperToTerraform(struct?: DataThunderGslbZoneServiceOperDnsMxRecordListOperOutputReference | DataThunderGslbZoneServiceOperDnsMxRecordListOper): any {
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


export function dataThunderGslbZoneServiceOperDnsMxRecordListOperToHclTerraform(struct?: DataThunderGslbZoneServiceOperDnsMxRecordListOperOutputReference | DataThunderGslbZoneServiceOperDnsMxRecordListOper): any {
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

export class DataThunderGslbZoneServiceOperDnsMxRecordListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceOperDnsMxRecordListOper | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceOperDnsMxRecordListOper | undefined) {
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
export interface DataThunderGslbZoneServiceOperDnsMxRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#mx_name DataThunderGslbZoneServiceOper#mx_name}
  */
  readonly mxName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#oper DataThunderGslbZoneServiceOper#oper}
  */
  readonly oper?: DataThunderGslbZoneServiceOperDnsMxRecordListOper;
}

export function dataThunderGslbZoneServiceOperDnsMxRecordListStructToTerraform(struct?: DataThunderGslbZoneServiceOperDnsMxRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mx_name: cdktf.stringToTerraform(struct!.mxName),
    oper: dataThunderGslbZoneServiceOperDnsMxRecordListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbZoneServiceOperDnsMxRecordListStructToHclTerraform(struct?: DataThunderGslbZoneServiceOperDnsMxRecordListStruct | cdktf.IResolvable): any {
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
      value: dataThunderGslbZoneServiceOperDnsMxRecordListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceOperDnsMxRecordListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceOperDnsMxRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceOperDnsMxRecordListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceOperDnsMxRecordListStruct | cdktf.IResolvable | undefined) {
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
  private _oper = new DataThunderGslbZoneServiceOperDnsMxRecordListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneServiceOperDnsMxRecordListOper) {
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

export class DataThunderGslbZoneServiceOperDnsMxRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceOperDnsMxRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceOperDnsMxRecordListStructOutputReference {
    return new DataThunderGslbZoneServiceOperDnsMxRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceOperDnsNsRecordListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#hits DataThunderGslbZoneServiceOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#last_server DataThunderGslbZoneServiceOper#last_server}
  */
  readonly lastServer?: string;
}

export function dataThunderGslbZoneServiceOperDnsNsRecordListOperToTerraform(struct?: DataThunderGslbZoneServiceOperDnsNsRecordListOperOutputReference | DataThunderGslbZoneServiceOperDnsNsRecordListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
    last_server: cdktf.stringToTerraform(struct!.lastServer),
  }
}


export function dataThunderGslbZoneServiceOperDnsNsRecordListOperToHclTerraform(struct?: DataThunderGslbZoneServiceOperDnsNsRecordListOperOutputReference | DataThunderGslbZoneServiceOperDnsNsRecordListOper): any {
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

export class DataThunderGslbZoneServiceOperDnsNsRecordListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceOperDnsNsRecordListOper | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceOperDnsNsRecordListOper | undefined) {
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
export interface DataThunderGslbZoneServiceOperDnsNsRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#ns_name DataThunderGslbZoneServiceOper#ns_name}
  */
  readonly nsName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#oper DataThunderGslbZoneServiceOper#oper}
  */
  readonly oper?: DataThunderGslbZoneServiceOperDnsNsRecordListOper;
}

export function dataThunderGslbZoneServiceOperDnsNsRecordListStructToTerraform(struct?: DataThunderGslbZoneServiceOperDnsNsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ns_name: cdktf.stringToTerraform(struct!.nsName),
    oper: dataThunderGslbZoneServiceOperDnsNsRecordListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbZoneServiceOperDnsNsRecordListStructToHclTerraform(struct?: DataThunderGslbZoneServiceOperDnsNsRecordListStruct | cdktf.IResolvable): any {
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
      value: dataThunderGslbZoneServiceOperDnsNsRecordListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceOperDnsNsRecordListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceOperDnsNsRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceOperDnsNsRecordListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceOperDnsNsRecordListStruct | cdktf.IResolvable | undefined) {
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
  private _oper = new DataThunderGslbZoneServiceOperDnsNsRecordListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneServiceOperDnsNsRecordListOper) {
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

export class DataThunderGslbZoneServiceOperDnsNsRecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceOperDnsNsRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceOperDnsNsRecordListStructOutputReference {
    return new DataThunderGslbZoneServiceOperDnsNsRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceOperOperCacheListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#additional_records DataThunderGslbZoneServiceOper#additional_records}
  */
  readonly additionalRecords?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#alias DataThunderGslbZoneServiceOper#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#answer_records DataThunderGslbZoneServiceOper#answer_records}
  */
  readonly answerRecords?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#authority_records DataThunderGslbZoneServiceOper#authority_records}
  */
  readonly authorityRecords?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#cache_dns_flag DataThunderGslbZoneServiceOper#cache_dns_flag}
  */
  readonly cacheDnsFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#cache_length DataThunderGslbZoneServiceOper#cache_length}
  */
  readonly cacheLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#cache_ttl DataThunderGslbZoneServiceOper#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#question_records DataThunderGslbZoneServiceOper#question_records}
  */
  readonly questionRecords?: number;
}

export function dataThunderGslbZoneServiceOperOperCacheListStructToTerraform(struct?: DataThunderGslbZoneServiceOperOperCacheListStruct | cdktf.IResolvable): any {
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


export function dataThunderGslbZoneServiceOperOperCacheListStructToHclTerraform(struct?: DataThunderGslbZoneServiceOperOperCacheListStruct | cdktf.IResolvable): any {
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

export class DataThunderGslbZoneServiceOperOperCacheListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceOperOperCacheListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceOperOperCacheListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderGslbZoneServiceOperOperCacheListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceOperOperCacheListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceOperOperCacheListStructOutputReference {
    return new DataThunderGslbZoneServiceOperOperCacheListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceOperOperDnsARecordListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#ip DataThunderGslbZoneServiceOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#rec_ttl DataThunderGslbZoneServiceOper#rec_ttl}
  */
  readonly recTtl?: number;
}

export function dataThunderGslbZoneServiceOperOperDnsARecordListStructToTerraform(struct?: DataThunderGslbZoneServiceOperOperDnsARecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    rec_ttl: cdktf.numberToTerraform(struct!.recTtl),
  }
}


export function dataThunderGslbZoneServiceOperOperDnsARecordListStructToHclTerraform(struct?: DataThunderGslbZoneServiceOperOperDnsARecordListStruct | cdktf.IResolvable): any {
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

export class DataThunderGslbZoneServiceOperOperDnsARecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceOperOperDnsARecordListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceOperOperDnsARecordListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderGslbZoneServiceOperOperDnsARecordListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceOperOperDnsARecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceOperOperDnsARecordListStructOutputReference {
    return new DataThunderGslbZoneServiceOperOperDnsARecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceOperOperSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#aging DataThunderGslbZoneServiceOper#aging}
  */
  readonly aging?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#best DataThunderGslbZoneServiceOper#best}
  */
  readonly best?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#client DataThunderGslbZoneServiceOper#client}
  */
  readonly client?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#hits DataThunderGslbZoneServiceOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#last_second_hits DataThunderGslbZoneServiceOper#last_second_hits}
  */
  readonly lastSecondHits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#mode DataThunderGslbZoneServiceOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#ttl DataThunderGslbZoneServiceOper#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#update DataThunderGslbZoneServiceOper#update}
  */
  readonly update?: number;
}

export function dataThunderGslbZoneServiceOperOperSessionListStructToTerraform(struct?: DataThunderGslbZoneServiceOperOperSessionListStruct | cdktf.IResolvable): any {
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


export function dataThunderGslbZoneServiceOperOperSessionListStructToHclTerraform(struct?: DataThunderGslbZoneServiceOperOperSessionListStruct | cdktf.IResolvable): any {
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

export class DataThunderGslbZoneServiceOperOperSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbZoneServiceOperOperSessionListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceOperOperSessionListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderGslbZoneServiceOperOperSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbZoneServiceOperOperSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbZoneServiceOperOperSessionListStructOutputReference {
    return new DataThunderGslbZoneServiceOperOperSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbZoneServiceOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#matched DataThunderGslbZoneServiceOper#matched}
  */
  readonly matched?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#state DataThunderGslbZoneServiceOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#total_sessions DataThunderGslbZoneServiceOper#total_sessions}
  */
  readonly totalSessions?: number;
  /**
  * cache_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#cache_list DataThunderGslbZoneServiceOper#cache_list}
  */
  readonly cacheList?: DataThunderGslbZoneServiceOperOperCacheListStruct[] | cdktf.IResolvable;
  /**
  * dns_a_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#dns_a_record_list DataThunderGslbZoneServiceOper#dns_a_record_list}
  */
  readonly dnsARecordList?: DataThunderGslbZoneServiceOperOperDnsARecordListStruct[] | cdktf.IResolvable;
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#session_list DataThunderGslbZoneServiceOper#session_list}
  */
  readonly sessionList?: DataThunderGslbZoneServiceOperOperSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbZoneServiceOperOperToTerraform(struct?: DataThunderGslbZoneServiceOperOperOutputReference | DataThunderGslbZoneServiceOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matched: cdktf.numberToTerraform(struct!.matched),
    state: cdktf.stringToTerraform(struct!.state),
    total_sessions: cdktf.numberToTerraform(struct!.totalSessions),
    cache_list: cdktf.listMapper(dataThunderGslbZoneServiceOperOperCacheListStructToTerraform, true)(struct!.cacheList),
    dns_a_record_list: cdktf.listMapper(dataThunderGslbZoneServiceOperOperDnsARecordListStructToTerraform, true)(struct!.dnsARecordList),
    session_list: cdktf.listMapper(dataThunderGslbZoneServiceOperOperSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderGslbZoneServiceOperOperToHclTerraform(struct?: DataThunderGslbZoneServiceOperOperOutputReference | DataThunderGslbZoneServiceOperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderGslbZoneServiceOperOperCacheListStructToHclTerraform, true)(struct!.cacheList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceOperOperCacheListStructList",
    },
    dns_a_record_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneServiceOperOperDnsARecordListStructToHclTerraform, true)(struct!.dnsARecordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceOperOperDnsARecordListStructList",
    },
    session_list: {
      value: cdktf.listMapperHcl(dataThunderGslbZoneServiceOperOperSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbZoneServiceOperOperSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceOperOper | undefined {
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

  public set internalValue(value: DataThunderGslbZoneServiceOperOper | undefined) {
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
  private _cacheList = new DataThunderGslbZoneServiceOperOperCacheListStructList(this, "cache_list", false);
  public get cacheList() {
    return this._cacheList;
  }
  public putCacheList(value: DataThunderGslbZoneServiceOperOperCacheListStruct[] | cdktf.IResolvable) {
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
  private _dnsARecordList = new DataThunderGslbZoneServiceOperOperDnsARecordListStructList(this, "dns_a_record_list", false);
  public get dnsARecordList() {
    return this._dnsARecordList;
  }
  public putDnsARecordList(value: DataThunderGslbZoneServiceOperOperDnsARecordListStruct[] | cdktf.IResolvable) {
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
  private _sessionList = new DataThunderGslbZoneServiceOperOperSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderGslbZoneServiceOperOperSessionListStruct[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper thunder_gslb_zone_service_oper}
*/
export class DataThunderGslbZoneServiceOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_service_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbZoneServiceOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbZoneServiceOper to import
  * @param importFromId The id of the existing DataThunderGslbZoneServiceOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbZoneServiceOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_service_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_oper thunder_gslb_zone_service_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbZoneServiceOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbZoneServiceOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_service_oper',
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
    this._serviceName = config.serviceName;
    this._servicePort = config.servicePort;
    this._zoneName = config.zoneName;
    this._dnsMxRecordList.internalValue = config.dnsMxRecordList;
    this._dnsNsRecordList.internalValue = config.dnsNsRecordList;
    this._oper.internalValue = config.oper;
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

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // dns_mx_record_list - computed: false, optional: true, required: false
  private _dnsMxRecordList = new DataThunderGslbZoneServiceOperDnsMxRecordListStructList(this, "dns_mx_record_list", false);
  public get dnsMxRecordList() {
    return this._dnsMxRecordList;
  }
  public putDnsMxRecordList(value: DataThunderGslbZoneServiceOperDnsMxRecordListStruct[] | cdktf.IResolvable) {
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
  private _dnsNsRecordList = new DataThunderGslbZoneServiceOperDnsNsRecordListStructList(this, "dns_ns_record_list", false);
  public get dnsNsRecordList() {
    return this._dnsNsRecordList;
  }
  public putDnsNsRecordList(value: DataThunderGslbZoneServiceOperDnsNsRecordListStruct[] | cdktf.IResolvable) {
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
  private _oper = new DataThunderGslbZoneServiceOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneServiceOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_port: cdktf.numberToTerraform(this._servicePort),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      dns_mx_record_list: cdktf.listMapper(dataThunderGslbZoneServiceOperDnsMxRecordListStructToTerraform, true)(this._dnsMxRecordList.internalValue),
      dns_ns_record_list: cdktf.listMapper(dataThunderGslbZoneServiceOperDnsNsRecordListStructToTerraform, true)(this._dnsNsRecordList.internalValue),
      oper: dataThunderGslbZoneServiceOperOperToTerraform(this._oper.internalValue),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_mx_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneServiceOperDnsMxRecordListStructToHclTerraform, true)(this._dnsMxRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceOperDnsMxRecordListStructList",
      },
      dns_ns_record_list: {
        value: cdktf.listMapperHcl(dataThunderGslbZoneServiceOperDnsNsRecordListStructToHclTerraform, true)(this._dnsNsRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceOperDnsNsRecordListStructList",
      },
      oper: {
        value: dataThunderGslbZoneServiceOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
