// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbSiteSlbDevVipServerVipServerNameOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * DeviceName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#device_name DataThunderGslbSiteSlbDevVipServerVipServerNameOper#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#id DataThunderGslbSiteSlbDevVipServerVipServerNameOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SiteName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#site_name DataThunderGslbSiteSlbDevVipServerVipServerNameOper#site_name}
  */
  readonly siteName: string;
  /**
  * Specify a VIP name for the SLB device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#vip_name DataThunderGslbSiteSlbDevVipServerVipServerNameOper#vip_name}
  */
  readonly vipName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#oper DataThunderGslbSiteSlbDevVipServerVipServerNameOper#oper}
  */
  readonly oper?: DataThunderGslbSiteSlbDevVipServerVipServerNameOperOper;
}
export interface DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#dev_vip_port_dev_curr_conn DataThunderGslbSiteSlbDevVipServerVipServerNameOper#dev_vip_port_dev_curr_conn}
  */
  readonly devVipPortDevCurrConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#dev_vip_port_num DataThunderGslbSiteSlbDevVipServerVipServerNameOper#dev_vip_port_num}
  */
  readonly devVipPortNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#dev_vip_port_protocol DataThunderGslbSiteSlbDevVipServerVipServerNameOper#dev_vip_port_protocol}
  */
  readonly devVipPortProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#dev_vip_port_service_name DataThunderGslbSiteSlbDevVipServerVipServerNameOper#dev_vip_port_service_name}
  */
  readonly devVipPortServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#dev_vip_port_state DataThunderGslbSiteSlbDevVipServerVipServerNameOper#dev_vip_port_state}
  */
  readonly devVipPortState?: string;
}

export function dataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStructToTerraform(struct?: DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_port_dev_curr_conn: cdktf.numberToTerraform(struct!.devVipPortDevCurrConn),
    dev_vip_port_num: cdktf.numberToTerraform(struct!.devVipPortNum),
    dev_vip_port_protocol: cdktf.stringToTerraform(struct!.devVipPortProtocol),
    dev_vip_port_service_name: cdktf.stringToTerraform(struct!.devVipPortServiceName),
    dev_vip_port_state: cdktf.stringToTerraform(struct!.devVipPortState),
  }
}


export function dataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStructToHclTerraform(struct?: DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_vip_port_dev_curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.devVipPortDevCurrConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_port_num: {
      value: cdktf.numberToHclTerraform(struct!.devVipPortNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_port_protocol: {
      value: cdktf.stringToHclTerraform(struct!.devVipPortProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_vip_port_service_name: {
      value: cdktf.stringToHclTerraform(struct!.devVipPortServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_vip_port_state: {
      value: cdktf.stringToHclTerraform(struct!.devVipPortState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devVipPortDevCurrConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortDevCurrConn = this._devVipPortDevCurrConn;
    }
    if (this._devVipPortNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortNum = this._devVipPortNum;
    }
    if (this._devVipPortProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortProtocol = this._devVipPortProtocol;
    }
    if (this._devVipPortServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortServiceName = this._devVipPortServiceName;
    }
    if (this._devVipPortState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortState = this._devVipPortState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devVipPortDevCurrConn = undefined;
      this._devVipPortNum = undefined;
      this._devVipPortProtocol = undefined;
      this._devVipPortServiceName = undefined;
      this._devVipPortState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devVipPortDevCurrConn = value.devVipPortDevCurrConn;
      this._devVipPortNum = value.devVipPortNum;
      this._devVipPortProtocol = value.devVipPortProtocol;
      this._devVipPortServiceName = value.devVipPortServiceName;
      this._devVipPortState = value.devVipPortState;
    }
  }

  // dev_vip_port_dev_curr_conn - computed: false, optional: true, required: false
  private _devVipPortDevCurrConn?: number; 
  public get devVipPortDevCurrConn() {
    return this.getNumberAttribute('dev_vip_port_dev_curr_conn');
  }
  public set devVipPortDevCurrConn(value: number) {
    this._devVipPortDevCurrConn = value;
  }
  public resetDevVipPortDevCurrConn() {
    this._devVipPortDevCurrConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortDevCurrConnInput() {
    return this._devVipPortDevCurrConn;
  }

  // dev_vip_port_num - computed: false, optional: true, required: false
  private _devVipPortNum?: number; 
  public get devVipPortNum() {
    return this.getNumberAttribute('dev_vip_port_num');
  }
  public set devVipPortNum(value: number) {
    this._devVipPortNum = value;
  }
  public resetDevVipPortNum() {
    this._devVipPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortNumInput() {
    return this._devVipPortNum;
  }

  // dev_vip_port_protocol - computed: false, optional: true, required: false
  private _devVipPortProtocol?: string; 
  public get devVipPortProtocol() {
    return this.getStringAttribute('dev_vip_port_protocol');
  }
  public set devVipPortProtocol(value: string) {
    this._devVipPortProtocol = value;
  }
  public resetDevVipPortProtocol() {
    this._devVipPortProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortProtocolInput() {
    return this._devVipPortProtocol;
  }

  // dev_vip_port_service_name - computed: false, optional: true, required: false
  private _devVipPortServiceName?: string; 
  public get devVipPortServiceName() {
    return this.getStringAttribute('dev_vip_port_service_name');
  }
  public set devVipPortServiceName(value: string) {
    this._devVipPortServiceName = value;
  }
  public resetDevVipPortServiceName() {
    this._devVipPortServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortServiceNameInput() {
    return this._devVipPortServiceName;
  }

  // dev_vip_port_state - computed: false, optional: true, required: false
  private _devVipPortState?: string; 
  public get devVipPortState() {
    return this.getStringAttribute('dev_vip_port_state');
  }
  public set devVipPortState(value: string) {
    this._devVipPortState = value;
  }
  public resetDevVipPortState() {
    this._devVipPortState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortStateInput() {
    return this._devVipPortState;
  }
}

export class DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStructOutputReference {
    return new DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteSlbDevVipServerVipServerNameOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#dev_vip_addr DataThunderGslbSiteSlbDevVipServerVipServerNameOper#dev_vip_addr}
  */
  readonly devVipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#dev_vip_state DataThunderGslbSiteSlbDevVipServerVipServerNameOper#dev_vip_state}
  */
  readonly devVipState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#disabled DataThunderGslbSiteSlbDevVipServerVipServerNameOper#disabled}
  */
  readonly disabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#dynamic DataThunderGslbSiteSlbDevVipServerVipServerNameOper#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#gslb_protocol DataThunderGslbSiteSlbDevVipServerVipServerNameOper#gslb_protocol}
  */
  readonly gslbProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#hits DataThunderGslbSiteSlbDevVipServerVipServerNameOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#local_protocol DataThunderGslbSiteSlbDevVipServerVipServerNameOper#local_protocol}
  */
  readonly localProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#manually_health_check DataThunderGslbSiteSlbDevVipServerVipServerNameOper#manually_health_check}
  */
  readonly manuallyHealthCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#node_name DataThunderGslbSiteSlbDevVipServerVipServerNameOper#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#port_count DataThunderGslbSiteSlbDevVipServerVipServerNameOper#port_count}
  */
  readonly portCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#recent DataThunderGslbSiteSlbDevVipServerVipServerNameOper#recent}
  */
  readonly recent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#service_ip DataThunderGslbSiteSlbDevVipServerVipServerNameOper#service_ip}
  */
  readonly serviceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#shared DataThunderGslbSiteSlbDevVipServerVipServerNameOper#shared}
  */
  readonly shared?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#use_gslb_state DataThunderGslbSiteSlbDevVipServerVipServerNameOper#use_gslb_state}
  */
  readonly useGslbState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#virtual_server DataThunderGslbSiteSlbDevVipServerVipServerNameOper#virtual_server}
  */
  readonly virtualServer?: number;
  /**
  * dev_vip_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#dev_vip_port_list DataThunderGslbSiteSlbDevVipServerVipServerNameOper#dev_vip_port_list}
  */
  readonly devVipPortList?: DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteSlbDevVipServerVipServerNameOperOperToTerraform(struct?: DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperOutputReference | DataThunderGslbSiteSlbDevVipServerVipServerNameOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_addr: cdktf.stringToTerraform(struct!.devVipAddr),
    dev_vip_state: cdktf.stringToTerraform(struct!.devVipState),
    disabled: cdktf.numberToTerraform(struct!.disabled),
    dynamic: cdktf.numberToTerraform(struct!.dynamic),
    gslb_protocol: cdktf.numberToTerraform(struct!.gslbProtocol),
    hits: cdktf.numberToTerraform(struct!.hits),
    local_protocol: cdktf.numberToTerraform(struct!.localProtocol),
    manually_health_check: cdktf.numberToTerraform(struct!.manuallyHealthCheck),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    port_count: cdktf.numberToTerraform(struct!.portCount),
    recent: cdktf.numberToTerraform(struct!.recent),
    service_ip: cdktf.stringToTerraform(struct!.serviceIp),
    shared: cdktf.numberToTerraform(struct!.shared),
    use_gslb_state: cdktf.numberToTerraform(struct!.useGslbState),
    virtual_server: cdktf.numberToTerraform(struct!.virtualServer),
    dev_vip_port_list: cdktf.listMapper(dataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStructToTerraform, true)(struct!.devVipPortList),
  }
}


export function dataThunderGslbSiteSlbDevVipServerVipServerNameOperOperToHclTerraform(struct?: DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperOutputReference | DataThunderGslbSiteSlbDevVipServerVipServerNameOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_vip_addr: {
      value: cdktf.stringToHclTerraform(struct!.devVipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_vip_state: {
      value: cdktf.stringToHclTerraform(struct!.devVipState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.numberToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic: {
      value: cdktf.numberToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_protocol: {
      value: cdktf.numberToHclTerraform(struct!.gslbProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_protocol: {
      value: cdktf.numberToHclTerraform(struct!.localProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    manually_health_check: {
      value: cdktf.numberToHclTerraform(struct!.manuallyHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_count: {
      value: cdktf.numberToHclTerraform(struct!.portCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recent: {
      value: cdktf.numberToHclTerraform(struct!.recent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_ip: {
      value: cdktf.stringToHclTerraform(struct!.serviceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_gslb_state: {
      value: cdktf.numberToHclTerraform(struct!.useGslbState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server: {
      value: cdktf.numberToHclTerraform(struct!.virtualServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_port_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStructToHclTerraform, true)(struct!.devVipPortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteSlbDevVipServerVipServerNameOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devVipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipAddr = this._devVipAddr;
    }
    if (this._devVipState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipState = this._devVipState;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._gslbProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbProtocol = this._gslbProtocol;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._localProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.localProtocol = this._localProtocol;
    }
    if (this._manuallyHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.manuallyHealthCheck = this._manuallyHealthCheck;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._portCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCount = this._portCount;
    }
    if (this._recent !== undefined) {
      hasAnyValues = true;
      internalValueResult.recent = this._recent;
    }
    if (this._serviceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIp = this._serviceIp;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._useGslbState !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGslbState = this._useGslbState;
    }
    if (this._virtualServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServer = this._virtualServer;
    }
    if (this._devVipPortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortList = this._devVipPortList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevVipServerVipServerNameOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._devVipAddr = undefined;
      this._devVipState = undefined;
      this._disabled = undefined;
      this._dynamic = undefined;
      this._gslbProtocol = undefined;
      this._hits = undefined;
      this._localProtocol = undefined;
      this._manuallyHealthCheck = undefined;
      this._nodeName = undefined;
      this._portCount = undefined;
      this._recent = undefined;
      this._serviceIp = undefined;
      this._shared = undefined;
      this._useGslbState = undefined;
      this._virtualServer = undefined;
      this._devVipPortList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._devVipAddr = value.devVipAddr;
      this._devVipState = value.devVipState;
      this._disabled = value.disabled;
      this._dynamic = value.dynamic;
      this._gslbProtocol = value.gslbProtocol;
      this._hits = value.hits;
      this._localProtocol = value.localProtocol;
      this._manuallyHealthCheck = value.manuallyHealthCheck;
      this._nodeName = value.nodeName;
      this._portCount = value.portCount;
      this._recent = value.recent;
      this._serviceIp = value.serviceIp;
      this._shared = value.shared;
      this._useGslbState = value.useGslbState;
      this._virtualServer = value.virtualServer;
      this._devVipPortList.internalValue = value.devVipPortList;
    }
  }

  // dev_vip_addr - computed: false, optional: true, required: false
  private _devVipAddr?: string; 
  public get devVipAddr() {
    return this.getStringAttribute('dev_vip_addr');
  }
  public set devVipAddr(value: string) {
    this._devVipAddr = value;
  }
  public resetDevVipAddr() {
    this._devVipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipAddrInput() {
    return this._devVipAddr;
  }

  // dev_vip_state - computed: false, optional: true, required: false
  private _devVipState?: string; 
  public get devVipState() {
    return this.getStringAttribute('dev_vip_state');
  }
  public set devVipState(value: string) {
    this._devVipState = value;
  }
  public resetDevVipState() {
    this._devVipState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipStateInput() {
    return this._devVipState;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: number; 
  public get disabled() {
    return this.getNumberAttribute('disabled');
  }
  public set disabled(value: number) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic?: number; 
  public get dynamic() {
    return this.getNumberAttribute('dynamic');
  }
  public set dynamic(value: number) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // gslb_protocol - computed: false, optional: true, required: false
  private _gslbProtocol?: number; 
  public get gslbProtocol() {
    return this.getNumberAttribute('gslb_protocol');
  }
  public set gslbProtocol(value: number) {
    this._gslbProtocol = value;
  }
  public resetGslbProtocol() {
    this._gslbProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbProtocolInput() {
    return this._gslbProtocol;
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

  // local_protocol - computed: false, optional: true, required: false
  private _localProtocol?: number; 
  public get localProtocol() {
    return this.getNumberAttribute('local_protocol');
  }
  public set localProtocol(value: number) {
    this._localProtocol = value;
  }
  public resetLocalProtocol() {
    this._localProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localProtocolInput() {
    return this._localProtocol;
  }

  // manually_health_check - computed: false, optional: true, required: false
  private _manuallyHealthCheck?: number; 
  public get manuallyHealthCheck() {
    return this.getNumberAttribute('manually_health_check');
  }
  public set manuallyHealthCheck(value: number) {
    this._manuallyHealthCheck = value;
  }
  public resetManuallyHealthCheck() {
    this._manuallyHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manuallyHealthCheckInput() {
    return this._manuallyHealthCheck;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // port_count - computed: false, optional: true, required: false
  private _portCount?: number; 
  public get portCount() {
    return this.getNumberAttribute('port_count');
  }
  public set portCount(value: number) {
    this._portCount = value;
  }
  public resetPortCount() {
    this._portCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountInput() {
    return this._portCount;
  }

  // recent - computed: false, optional: true, required: false
  private _recent?: number; 
  public get recent() {
    return this.getNumberAttribute('recent');
  }
  public set recent(value: number) {
    this._recent = value;
  }
  public resetRecent() {
    this._recent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentInput() {
    return this._recent;
  }

  // service_ip - computed: false, optional: true, required: false
  private _serviceIp?: string; 
  public get serviceIp() {
    return this.getStringAttribute('service_ip');
  }
  public set serviceIp(value: string) {
    this._serviceIp = value;
  }
  public resetServiceIp() {
    this._serviceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpInput() {
    return this._serviceIp;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // use_gslb_state - computed: false, optional: true, required: false
  private _useGslbState?: number; 
  public get useGslbState() {
    return this.getNumberAttribute('use_gslb_state');
  }
  public set useGslbState(value: number) {
    this._useGslbState = value;
  }
  public resetUseGslbState() {
    this._useGslbState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGslbStateInput() {
    return this._useGslbState;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer?: number; 
  public get virtualServer() {
    return this.getNumberAttribute('virtual_server');
  }
  public set virtualServer(value: number) {
    this._virtualServer = value;
  }
  public resetVirtualServer() {
    this._virtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer;
  }

  // dev_vip_port_list - computed: false, optional: true, required: false
  private _devVipPortList = new DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStructList(this, "dev_vip_port_list", false);
  public get devVipPortList() {
    return this._devVipPortList;
  }
  public putDevVipPortList(value: DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperDevVipPortListStruct[] | cdktf.IResolvable) {
    this._devVipPortList.internalValue = value;
  }
  public resetDevVipPortList() {
    this._devVipPortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortListInput() {
    return this._devVipPortList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper thunder_gslb_site_slb_dev_vip_server_vip_server_name_oper}
*/
export class DataThunderGslbSiteSlbDevVipServerVipServerNameOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_site_slb_dev_vip_server_vip_server_name_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbSiteSlbDevVipServerVipServerNameOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbSiteSlbDevVipServerVipServerNameOper to import
  * @param importFromId The id of the existing DataThunderGslbSiteSlbDevVipServerVipServerNameOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbSiteSlbDevVipServerVipServerNameOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_site_slb_dev_vip_server_vip_server_name_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_oper thunder_gslb_site_slb_dev_vip_server_vip_server_name_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbSiteSlbDevVipServerVipServerNameOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbSiteSlbDevVipServerVipServerNameOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_site_slb_dev_vip_server_vip_server_name_oper',
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
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._siteName = config.siteName;
    this._vipName = config.vipName;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // site_name - computed: false, optional: false, required: true
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // vip_name - computed: false, optional: false, required: true
  private _vipName?: string; 
  public get vipName() {
    return this.getStringAttribute('vip_name');
  }
  public set vipName(value: string) {
    this._vipName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipNameInput() {
    return this._vipName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteSlbDevVipServerVipServerNameOperOper) {
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
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      site_name: cdktf.stringToTerraform(this._siteName),
      vip_name: cdktf.stringToTerraform(this._vipName),
      oper: dataThunderGslbSiteSlbDevVipServerVipServerNameOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_name: {
        value: cdktf.stringToHclTerraform(this._vipName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderGslbSiteSlbDevVipServerVipServerNameOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbSiteSlbDevVipServerVipServerNameOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
