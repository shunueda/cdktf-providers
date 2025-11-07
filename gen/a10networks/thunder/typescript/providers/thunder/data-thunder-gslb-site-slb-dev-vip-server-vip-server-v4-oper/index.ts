// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbSiteSlbDevVipServerVipServerV4OperConfig extends cdktf.TerraformMetaArguments {
  /**
  * DeviceName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#device_name DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#id DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#ipv4 DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#ipv4}
  */
  readonly ipv4: string;
  /**
  * SiteName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#site_name DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#site_name}
  */
  readonly siteName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#oper DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#oper}
  */
  readonly oper?: DataThunderGslbSiteSlbDevVipServerVipServerV4OperOper;
}
export interface DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#dev_vip_port_num DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#dev_vip_port_num}
  */
  readonly devVipPortNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#dev_vip_port_state DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#dev_vip_port_state}
  */
  readonly devVipPortState?: string;
}

export function dataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStructToTerraform(struct?: DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_port_num: cdktf.numberToTerraform(struct!.devVipPortNum),
    dev_vip_port_state: cdktf.stringToTerraform(struct!.devVipPortState),
  }
}


export function dataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStructToHclTerraform(struct?: DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_vip_port_num: {
      value: cdktf.numberToHclTerraform(struct!.devVipPortNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devVipPortNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortNum = this._devVipPortNum;
    }
    if (this._devVipPortState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortState = this._devVipPortState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devVipPortNum = undefined;
      this._devVipPortState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devVipPortNum = value.devVipPortNum;
      this._devVipPortState = value.devVipPortState;
    }
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

export class DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStructOutputReference {
    return new DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteSlbDevVipServerVipServerV4OperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#dev_vip_addr DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#dev_vip_addr}
  */
  readonly devVipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#dev_vip_state DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#dev_vip_state}
  */
  readonly devVipState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#disabled DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#disabled}
  */
  readonly disabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#dynamic DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#gslb_protocol DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#gslb_protocol}
  */
  readonly gslbProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#hits DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#local_protocol DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#local_protocol}
  */
  readonly localProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#manually_health_check DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#manually_health_check}
  */
  readonly manuallyHealthCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#node_name DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#port_count DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#port_count}
  */
  readonly portCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#recent DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#recent}
  */
  readonly recent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#service_ip DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#service_ip}
  */
  readonly serviceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#use_gslb_state DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#use_gslb_state}
  */
  readonly useGslbState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#virtual_server DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#virtual_server}
  */
  readonly virtualServer?: number;
  /**
  * dev_vip_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#dev_vip_port_list DataThunderGslbSiteSlbDevVipServerVipServerV4Oper#dev_vip_port_list}
  */
  readonly devVipPortList?: DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteSlbDevVipServerVipServerV4OperOperToTerraform(struct?: DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperOutputReference | DataThunderGslbSiteSlbDevVipServerVipServerV4OperOper): any {
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
    use_gslb_state: cdktf.numberToTerraform(struct!.useGslbState),
    virtual_server: cdktf.numberToTerraform(struct!.virtualServer),
    dev_vip_port_list: cdktf.listMapper(dataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStructToTerraform, true)(struct!.devVipPortList),
  }
}


export function dataThunderGslbSiteSlbDevVipServerVipServerV4OperOperToHclTerraform(struct?: DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperOutputReference | DataThunderGslbSiteSlbDevVipServerVipServerV4OperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStructToHclTerraform, true)(struct!.devVipPortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteSlbDevVipServerVipServerV4OperOper | undefined {
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

  public set internalValue(value: DataThunderGslbSiteSlbDevVipServerVipServerV4OperOper | undefined) {
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
  private _devVipPortList = new DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStructList(this, "dev_vip_port_list", false);
  public get devVipPortList() {
    return this._devVipPortList;
  }
  public putDevVipPortList(value: DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperDevVipPortListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper thunder_gslb_site_slb_dev_vip_server_vip_server_v4_oper}
*/
export class DataThunderGslbSiteSlbDevVipServerVipServerV4Oper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_site_slb_dev_vip_server_vip_server_v4_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbSiteSlbDevVipServerVipServerV4Oper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbSiteSlbDevVipServerVipServerV4Oper to import
  * @param importFromId The id of the existing DataThunderGslbSiteSlbDevVipServerVipServerV4Oper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbSiteSlbDevVipServerVipServerV4Oper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_site_slb_dev_vip_server_vip_server_v4_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v4_oper thunder_gslb_site_slb_dev_vip_server_vip_server_v4_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbSiteSlbDevVipServerVipServerV4OperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbSiteSlbDevVipServerVipServerV4OperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_site_slb_dev_vip_server_vip_server_v4_oper',
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
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._ipv4 = config.ipv4;
    this._siteName = config.siteName;
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

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteSlbDevVipServerVipServerV4OperOper) {
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
      ipv4: cdktf.stringToTerraform(this._ipv4),
      site_name: cdktf.stringToTerraform(this._siteName),
      oper: dataThunderGslbSiteSlbDevVipServerVipServerV4OperOperToTerraform(this._oper.internalValue),
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
      ipv4: {
        value: cdktf.stringToHclTerraform(this._ipv4),
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
      oper: {
        value: dataThunderGslbSiteSlbDevVipServerVipServerV4OperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbSiteSlbDevVipServerVipServerV4OperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
