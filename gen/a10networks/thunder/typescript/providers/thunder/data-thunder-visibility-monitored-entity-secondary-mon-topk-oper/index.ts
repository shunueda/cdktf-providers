// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#id DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#oper DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOper;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#sources DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#sources}
  */
  readonly sources?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSources;
}
export interface DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#ip_addr DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#metric_value DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#metric_value}
  */
  readonly metricValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#port DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#protocol DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#protocol}
  */
  readonly protocol?: string;
}

export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined {
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
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr = undefined;
      this._metricValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
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
      this._port = value.port;
      this._protocol = value.protocol;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#metric_name DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#topk_list DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#topk_list}
  */
  readonly topkList?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStructToTerraform, true)(struct!.topkList),
  }
}


export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStructToHclTerraform, true)(struct!.topkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStruct | cdktf.IResolvable | undefined) {
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
  private _topkList = new DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStructList(this, "topk_list", false);
  public get topkList() {
    return this._topkList;
  }
  public putTopkList(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListTopkListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#ipv4_addr DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#ipv6_addr DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#l4_port DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#l4_proto DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * metric_topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#metric_topk_list DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#metric_topk_list}
  */
  readonly metricTopkList?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperToTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperOutputReference | DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    l4_port: cdktf.numberToTerraform(struct!.l4Port),
    l4_proto: cdktf.stringToTerraform(struct!.l4Proto),
    metric_topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStructToTerraform, true)(struct!.metricTopkList),
  }
}


export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperOutputReference | DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStructToHclTerraform, true)(struct!.metricTopkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOper | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOper | undefined) {
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
  private _metricTopkList = new DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStructList(this, "metric_topk_list", false);
  public get metricTopkList() {
    return this._metricTopkList;
  }
  public putMetricTopkList(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperMetricTopkListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#ip_addr DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#metric_value DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#metric_value}
  */
  readonly metricValue?: string;
}

export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
  }
}


export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
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

export class DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#metric_name DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#topk_list DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#topk_list}
  */
  readonly topkList?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStructToTerraform, true)(struct!.topkList),
  }
}


export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStructToHclTerraform, true)(struct!.topkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStruct | cdktf.IResolvable | undefined) {
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
  private _topkList = new DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStructList(this, "topk_list", false);
  public get topkList() {
    return this._topkList;
  }
  public putTopkList(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListTopkListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#ipv4_addr DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#ipv6_addr DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#l4_port DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#l4_proto DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * metric_topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#metric_topk_list DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#metric_topk_list}
  */
  readonly metricTopkList?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperToTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperOutputReference | DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    l4_port: cdktf.numberToTerraform(struct!.l4Port),
    l4_proto: cdktf.stringToTerraform(struct!.l4Proto),
    metric_topk_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStructToTerraform, true)(struct!.metricTopkList),
  }
}


export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperOutputReference | DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOper): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStructToHclTerraform, true)(struct!.metricTopkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOper | undefined {
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

  public set internalValue(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOper | undefined) {
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
  private _metricTopkList = new DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStructList(this, "metric_topk_list", false);
  public get metricTopkList() {
    return this._metricTopkList;
  }
  public putMetricTopkList(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperMetricTopkListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSources {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#oper DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOper;
}

export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesToTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOutputReference | DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperToTerraform(struct!.oper),
  }
}


export function dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesToHclTerraform(struct?: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOutputReference | DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOper) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper thunder_visibility_monitored_entity_secondary_mon_topk_oper}
*/
export class DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_monitored_entity_secondary_mon_topk_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper to import
  * @param importFromId The id of the existing DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityMonitoredEntitySecondaryMonTopkOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_monitored_entity_secondary_mon_topk_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_secondary_mon_topk_oper thunder_visibility_monitored_entity_secondary_mon_topk_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_monitored_entity_secondary_mon_topk_oper',
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
    this._sources.internalValue = config.sources;
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
  private _oper = new DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesOutputReference(this, "sources");
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSources) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperToTerraform(this._oper.internalValue),
      sources: dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesToTerraform(this._sources.internalValue),
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
        value: dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperOperList",
      },
      sources: {
        value: dataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesToHclTerraform(this._sources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitoredEntitySecondaryMonTopkOperSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
