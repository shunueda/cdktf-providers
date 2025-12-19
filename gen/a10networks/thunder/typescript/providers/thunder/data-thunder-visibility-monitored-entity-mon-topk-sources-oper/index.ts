// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityMonitoredEntityMonTopkSourcesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper#id DataThunderVisibilityMonitoredEntityMonTopkSourcesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper#oper DataThunderVisibilityMonitoredEntityMonTopkSourcesOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOper;
}
export interface DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper#ip_addr DataThunderVisibilityMonitoredEntityMonTopkSourcesOper#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper#metric_value DataThunderVisibilityMonitoredEntityMonTopkSourcesOper#metric_value}
  */
  readonly metricValue?: string;
}

export function dataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
  }
}


export function dataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_value: {
      value: cdktf.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr = undefined;
      this._metricValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr = value.ipAddr;
      this._metricValue = value.metricValue;
    }
  }

  // ip_addr - computed: false, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // metric_value - computed: false, optional: true, required: false
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  public resetMetricValue() {
    this._metricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }
}

export class DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper#metric_name DataThunderVisibilityMonitoredEntityMonTopkSourcesOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper#topk_list DataThunderVisibilityMonitoredEntityMonTopkSourcesOper#topk_list}
  */
  readonly topkList?: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStructToTerraform, true)(struct!.topkList),
  }
}


export function dataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topk_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStructToHclTerraform, true)(struct!.topkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._topkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkList = this._topkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._topkList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._topkList.internalValue = value.topkList;
    }
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // topk_list - computed: false, optional: true, required: false
  private _topkList = new DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStructList(this, "topk_list", false);
  public get topkList() {
    return this._topkList;
  }
  public putTopkList(value: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListTopkListStruct[] | cdktf.IResolvable) {
    this._topkList.internalValue = value;
  }
  public resetTopkList() {
    this._topkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkListInput() {
    return this._topkList.internalValue;
  }
}

export class DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper#ipv4_addr DataThunderVisibilityMonitoredEntityMonTopkSourcesOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper#ipv6_addr DataThunderVisibilityMonitoredEntityMonTopkSourcesOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper#l4_port DataThunderVisibilityMonitoredEntityMonTopkSourcesOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper#l4_proto DataThunderVisibilityMonitoredEntityMonTopkSourcesOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * metric_topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper#metric_topk_list DataThunderVisibilityMonitoredEntityMonTopkSourcesOper#metric_topk_list}
  */
  readonly metricTopkList?: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperToTerraform(struct?: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperOutputReference | DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    l4_port: cdktf.numberToTerraform(struct!.l4Port),
    l4_proto: cdktf.stringToTerraform(struct!.l4Proto),
    metric_topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStructToTerraform, true)(struct!.metricTopkList),
  }
}


export function dataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperOutputReference | DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_port: {
      value: cdktf.numberToHclTerraform(struct!.l4Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_proto: {
      value: cdktf.stringToHclTerraform(struct!.l4Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_topk_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStructToHclTerraform, true)(struct!.metricTopkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._l4Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Port = this._l4Port;
    }
    if (this._l4Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Proto = this._l4Proto;
    }
    if (this._metricTopkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTopkList = this._metricTopkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._l4Port = undefined;
      this._l4Proto = undefined;
      this._metricTopkList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._l4Port = value.l4Port;
      this._l4Proto = value.l4Proto;
      this._metricTopkList.internalValue = value.metricTopkList;
    }
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // l4_port - computed: false, optional: true, required: false
  private _l4Port?: number; 
  public get l4Port() {
    return this.getNumberAttribute('l4_port');
  }
  public set l4Port(value: number) {
    this._l4Port = value;
  }
  public resetL4Port() {
    this._l4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4PortInput() {
    return this._l4Port;
  }

  // l4_proto - computed: false, optional: true, required: false
  private _l4Proto?: string; 
  public get l4Proto() {
    return this.getStringAttribute('l4_proto');
  }
  public set l4Proto(value: string) {
    this._l4Proto = value;
  }
  public resetL4Proto() {
    this._l4Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProtoInput() {
    return this._l4Proto;
  }

  // metric_topk_list - computed: false, optional: true, required: false
  private _metricTopkList = new DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStructList(this, "metric_topk_list", false);
  public get metricTopkList() {
    return this._metricTopkList;
  }
  public putMetricTopkList(value: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperMetricTopkListStruct[] | cdktf.IResolvable) {
    this._metricTopkList.internalValue = value;
  }
  public resetMetricTopkList() {
    this._metricTopkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTopkListInput() {
    return this._metricTopkList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper thunder_visibility_monitored_entity_mon_topk_sources_oper}
*/
export class DataThunderVisibilityMonitoredEntityMonTopkSourcesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_monitored_entity_mon_topk_sources_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityMonitoredEntityMonTopkSourcesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityMonitoredEntityMonTopkSourcesOper to import
  * @param importFromId The id of the existing DataThunderVisibilityMonitoredEntityMonTopkSourcesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityMonitoredEntityMonTopkSourcesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_monitored_entity_mon_topk_sources_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_mon_topk_sources_oper thunder_visibility_monitored_entity_mon_topk_sources_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityMonitoredEntityMonTopkSourcesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_monitored_entity_mon_topk_sources_oper',
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOper) {
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
      oper: dataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitoredEntityMonTopkSourcesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
