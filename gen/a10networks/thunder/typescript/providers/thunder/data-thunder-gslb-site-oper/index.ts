// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbSiteOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#id DataThunderGslbSiteOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify GSLB site name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#site_name DataThunderGslbSiteOper#site_name}
  */
  readonly siteName: string;
  /**
  * ip_server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#ip_server_list DataThunderGslbSiteOper#ip_server_list}
  */
  readonly ipServerList?: DataThunderGslbSiteOperIpServerListStruct[] | cdktf.IResolvable;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#oper DataThunderGslbSiteOper#oper}
  */
  readonly oper?: DataThunderGslbSiteOperOper;
  /**
  * slb_dev_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#slb_dev_list DataThunderGslbSiteOper#slb_dev_list}
  */
  readonly slbDevList?: DataThunderGslbSiteOperSlbDevListStruct[] | cdktf.IResolvable;
}
export interface DataThunderGslbSiteOperIpServerListOperIpServerPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#vport DataThunderGslbSiteOper#vport}
  */
  readonly vport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#vport_state DataThunderGslbSiteOper#vport_state}
  */
  readonly vportState?: string;
}

export function dataThunderGslbSiteOperIpServerListOperIpServerPortToTerraform(struct?: DataThunderGslbSiteOperIpServerListOperIpServerPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vport: cdktf.numberToTerraform(struct!.vport),
    vport_state: cdktf.stringToTerraform(struct!.vportState),
  }
}


export function dataThunderGslbSiteOperIpServerListOperIpServerPortToHclTerraform(struct?: DataThunderGslbSiteOperIpServerListOperIpServerPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vport: {
      value: cdktf.numberToHclTerraform(struct!.vport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vport_state: {
      value: cdktf.stringToHclTerraform(struct!.vportState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperIpServerListOperIpServerPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteOperIpServerListOperIpServerPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vport = this._vport;
    }
    if (this._vportState !== undefined) {
      hasAnyValues = true;
      internalValueResult.vportState = this._vportState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperIpServerListOperIpServerPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vport = undefined;
      this._vportState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vport = value.vport;
      this._vportState = value.vportState;
    }
  }

  // vport - computed: false, optional: true, required: false
  private _vport?: number; 
  public get vport() {
    return this.getNumberAttribute('vport');
  }
  public set vport(value: number) {
    this._vport = value;
  }
  public resetVport() {
    this._vport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportInput() {
    return this._vport;
  }

  // vport_state - computed: false, optional: true, required: false
  private _vportState?: string; 
  public get vportState() {
    return this.getStringAttribute('vport_state');
  }
  public set vportState(value: string) {
    this._vportState = value;
  }
  public resetVportState() {
    this._vportState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportStateInput() {
    return this._vportState;
  }
}

export class DataThunderGslbSiteOperIpServerListOperIpServerPortList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteOperIpServerListOperIpServerPort[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteOperIpServerListOperIpServerPortOutputReference {
    return new DataThunderGslbSiteOperIpServerListOperIpServerPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteOperIpServerListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#disabled DataThunderGslbSiteOper#disabled}
  */
  readonly disabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dynamic DataThunderGslbSiteOper#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#gslb_protocol DataThunderGslbSiteOper#gslb_protocol}
  */
  readonly gslbProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#ip_address DataThunderGslbSiteOper#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#ip_server DataThunderGslbSiteOper#ip_server}
  */
  readonly ipServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#local_protocol DataThunderGslbSiteOper#local_protocol}
  */
  readonly localProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#manually_health_check DataThunderGslbSiteOper#manually_health_check}
  */
  readonly manuallyHealthCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#port_count DataThunderGslbSiteOper#port_count}
  */
  readonly portCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#service_ip DataThunderGslbSiteOper#service_ip}
  */
  readonly serviceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#state DataThunderGslbSiteOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#use_gslb_state DataThunderGslbSiteOper#use_gslb_state}
  */
  readonly useGslbState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#virtual_server DataThunderGslbSiteOper#virtual_server}
  */
  readonly virtualServer?: number;
  /**
  * ip_server_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#ip_server_port DataThunderGslbSiteOper#ip_server_port}
  */
  readonly ipServerPort?: DataThunderGslbSiteOperIpServerListOperIpServerPort[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteOperIpServerListOperToTerraform(struct?: DataThunderGslbSiteOperIpServerListOperOutputReference | DataThunderGslbSiteOperIpServerListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.numberToTerraform(struct!.disabled),
    dynamic: cdktf.numberToTerraform(struct!.dynamic),
    gslb_protocol: cdktf.numberToTerraform(struct!.gslbProtocol),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_server: cdktf.stringToTerraform(struct!.ipServer),
    local_protocol: cdktf.numberToTerraform(struct!.localProtocol),
    manually_health_check: cdktf.numberToTerraform(struct!.manuallyHealthCheck),
    port_count: cdktf.numberToTerraform(struct!.portCount),
    service_ip: cdktf.stringToTerraform(struct!.serviceIp),
    state: cdktf.stringToTerraform(struct!.state),
    use_gslb_state: cdktf.numberToTerraform(struct!.useGslbState),
    virtual_server: cdktf.numberToTerraform(struct!.virtualServer),
    ip_server_port: cdktf.listMapper(dataThunderGslbSiteOperIpServerListOperIpServerPortToTerraform, true)(struct!.ipServerPort),
  }
}


export function dataThunderGslbSiteOperIpServerListOperToHclTerraform(struct?: DataThunderGslbSiteOperIpServerListOperOutputReference | DataThunderGslbSiteOperIpServerListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_server: {
      value: cdktf.stringToHclTerraform(struct!.ipServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    port_count: {
      value: cdktf.numberToHclTerraform(struct!.portCount),
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
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
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
    ip_server_port: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteOperIpServerListOperIpServerPortToHclTerraform, true)(struct!.ipServerPort),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperIpServerListOperIpServerPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperIpServerListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteOperIpServerListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipServer = this._ipServer;
    }
    if (this._localProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.localProtocol = this._localProtocol;
    }
    if (this._manuallyHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.manuallyHealthCheck = this._manuallyHealthCheck;
    }
    if (this._portCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCount = this._portCount;
    }
    if (this._serviceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIp = this._serviceIp;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._useGslbState !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGslbState = this._useGslbState;
    }
    if (this._virtualServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServer = this._virtualServer;
    }
    if (this._ipServerPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipServerPort = this._ipServerPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperIpServerListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._dynamic = undefined;
      this._gslbProtocol = undefined;
      this._ipAddress = undefined;
      this._ipServer = undefined;
      this._localProtocol = undefined;
      this._manuallyHealthCheck = undefined;
      this._portCount = undefined;
      this._serviceIp = undefined;
      this._state = undefined;
      this._useGslbState = undefined;
      this._virtualServer = undefined;
      this._ipServerPort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._dynamic = value.dynamic;
      this._gslbProtocol = value.gslbProtocol;
      this._ipAddress = value.ipAddress;
      this._ipServer = value.ipServer;
      this._localProtocol = value.localProtocol;
      this._manuallyHealthCheck = value.manuallyHealthCheck;
      this._portCount = value.portCount;
      this._serviceIp = value.serviceIp;
      this._state = value.state;
      this._useGslbState = value.useGslbState;
      this._virtualServer = value.virtualServer;
      this._ipServerPort.internalValue = value.ipServerPort;
    }
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_server - computed: false, optional: true, required: false
  private _ipServer?: string; 
  public get ipServer() {
    return this.getStringAttribute('ip_server');
  }
  public set ipServer(value: string) {
    this._ipServer = value;
  }
  public resetIpServer() {
    this._ipServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipServerInput() {
    return this._ipServer;
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

  // ip_server_port - computed: false, optional: true, required: false
  private _ipServerPort = new DataThunderGslbSiteOperIpServerListOperIpServerPortList(this, "ip_server_port", false);
  public get ipServerPort() {
    return this._ipServerPort;
  }
  public putIpServerPort(value: DataThunderGslbSiteOperIpServerListOperIpServerPort[] | cdktf.IResolvable) {
    this._ipServerPort.internalValue = value;
  }
  public resetIpServerPort() {
    this._ipServerPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipServerPortInput() {
    return this._ipServerPort.internalValue;
  }
}
export interface DataThunderGslbSiteOperIpServerListStruct {
  /**
  * Specify the real server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#ip_server_name DataThunderGslbSiteOper#ip_server_name}
  */
  readonly ipServerName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#oper DataThunderGslbSiteOper#oper}
  */
  readonly oper?: DataThunderGslbSiteOperIpServerListOper;
}

export function dataThunderGslbSiteOperIpServerListStructToTerraform(struct?: DataThunderGslbSiteOperIpServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_server_name: cdktf.stringToTerraform(struct!.ipServerName),
    oper: dataThunderGslbSiteOperIpServerListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbSiteOperIpServerListStructToHclTerraform(struct?: DataThunderGslbSiteOperIpServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_server_name: {
      value: cdktf.stringToHclTerraform(struct!.ipServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper: {
      value: dataThunderGslbSiteOperIpServerListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperIpServerListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperIpServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteOperIpServerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipServerName = this._ipServerName;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperIpServerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipServerName = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipServerName = value.ipServerName;
      this._oper.internalValue = value.oper;
    }
  }

  // ip_server_name - computed: false, optional: false, required: true
  private _ipServerName?: string; 
  public get ipServerName() {
    return this.getStringAttribute('ip_server_name');
  }
  public set ipServerName(value: string) {
    this._ipServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipServerNameInput() {
    return this._ipServerName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteOperIpServerListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteOperIpServerListOper) {
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

export class DataThunderGslbSiteOperIpServerListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteOperIpServerListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteOperIpServerListStructOutputReference {
    return new DataThunderGslbSiteOperIpServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteOperOperClientLdnsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#age DataThunderGslbSiteOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#client_ip DataThunderGslbSiteOper#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample1 DataThunderGslbSiteOper#rdt_sample1}
  */
  readonly rdtSample1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample2 DataThunderGslbSiteOper#rdt_sample2}
  */
  readonly rdtSample2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample3 DataThunderGslbSiteOper#rdt_sample3}
  */
  readonly rdtSample3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample4 DataThunderGslbSiteOper#rdt_sample4}
  */
  readonly rdtSample4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample5 DataThunderGslbSiteOper#rdt_sample5}
  */
  readonly rdtSample5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample6 DataThunderGslbSiteOper#rdt_sample6}
  */
  readonly rdtSample6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample7 DataThunderGslbSiteOper#rdt_sample7}
  */
  readonly rdtSample7?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample8 DataThunderGslbSiteOper#rdt_sample8}
  */
  readonly rdtSample8?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#type DataThunderGslbSiteOper#type}
  */
  readonly type?: string;
}

export function dataThunderGslbSiteOperOperClientLdnsListStructToTerraform(struct?: DataThunderGslbSiteOperOperClientLdnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    rdt_sample1: cdktf.numberToTerraform(struct!.rdtSample1),
    rdt_sample2: cdktf.numberToTerraform(struct!.rdtSample2),
    rdt_sample3: cdktf.numberToTerraform(struct!.rdtSample3),
    rdt_sample4: cdktf.numberToTerraform(struct!.rdtSample4),
    rdt_sample5: cdktf.numberToTerraform(struct!.rdtSample5),
    rdt_sample6: cdktf.numberToTerraform(struct!.rdtSample6),
    rdt_sample7: cdktf.numberToTerraform(struct!.rdtSample7),
    rdt_sample8: cdktf.numberToTerraform(struct!.rdtSample8),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderGslbSiteOperOperClientLdnsListStructToHclTerraform(struct?: DataThunderGslbSiteOperOperClientLdnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdt_sample1: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample2: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample3: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample4: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample5: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample6: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample7: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample7),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample8: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample8),
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

export class DataThunderGslbSiteOperOperClientLdnsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteOperOperClientLdnsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._rdtSample1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample1 = this._rdtSample1;
    }
    if (this._rdtSample2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample2 = this._rdtSample2;
    }
    if (this._rdtSample3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample3 = this._rdtSample3;
    }
    if (this._rdtSample4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample4 = this._rdtSample4;
    }
    if (this._rdtSample5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample5 = this._rdtSample5;
    }
    if (this._rdtSample6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample6 = this._rdtSample6;
    }
    if (this._rdtSample7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample7 = this._rdtSample7;
    }
    if (this._rdtSample8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample8 = this._rdtSample8;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperOperClientLdnsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._clientIp = undefined;
      this._rdtSample1 = undefined;
      this._rdtSample2 = undefined;
      this._rdtSample3 = undefined;
      this._rdtSample4 = undefined;
      this._rdtSample5 = undefined;
      this._rdtSample6 = undefined;
      this._rdtSample7 = undefined;
      this._rdtSample8 = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._clientIp = value.clientIp;
      this._rdtSample1 = value.rdtSample1;
      this._rdtSample2 = value.rdtSample2;
      this._rdtSample3 = value.rdtSample3;
      this._rdtSample4 = value.rdtSample4;
      this._rdtSample5 = value.rdtSample5;
      this._rdtSample6 = value.rdtSample6;
      this._rdtSample7 = value.rdtSample7;
      this._rdtSample8 = value.rdtSample8;
      this._type = value.type;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // rdt_sample1 - computed: false, optional: true, required: false
  private _rdtSample1?: number; 
  public get rdtSample1() {
    return this.getNumberAttribute('rdt_sample1');
  }
  public set rdtSample1(value: number) {
    this._rdtSample1 = value;
  }
  public resetRdtSample1() {
    this._rdtSample1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample1Input() {
    return this._rdtSample1;
  }

  // rdt_sample2 - computed: false, optional: true, required: false
  private _rdtSample2?: number; 
  public get rdtSample2() {
    return this.getNumberAttribute('rdt_sample2');
  }
  public set rdtSample2(value: number) {
    this._rdtSample2 = value;
  }
  public resetRdtSample2() {
    this._rdtSample2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample2Input() {
    return this._rdtSample2;
  }

  // rdt_sample3 - computed: false, optional: true, required: false
  private _rdtSample3?: number; 
  public get rdtSample3() {
    return this.getNumberAttribute('rdt_sample3');
  }
  public set rdtSample3(value: number) {
    this._rdtSample3 = value;
  }
  public resetRdtSample3() {
    this._rdtSample3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample3Input() {
    return this._rdtSample3;
  }

  // rdt_sample4 - computed: false, optional: true, required: false
  private _rdtSample4?: number; 
  public get rdtSample4() {
    return this.getNumberAttribute('rdt_sample4');
  }
  public set rdtSample4(value: number) {
    this._rdtSample4 = value;
  }
  public resetRdtSample4() {
    this._rdtSample4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample4Input() {
    return this._rdtSample4;
  }

  // rdt_sample5 - computed: false, optional: true, required: false
  private _rdtSample5?: number; 
  public get rdtSample5() {
    return this.getNumberAttribute('rdt_sample5');
  }
  public set rdtSample5(value: number) {
    this._rdtSample5 = value;
  }
  public resetRdtSample5() {
    this._rdtSample5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample5Input() {
    return this._rdtSample5;
  }

  // rdt_sample6 - computed: false, optional: true, required: false
  private _rdtSample6?: number; 
  public get rdtSample6() {
    return this.getNumberAttribute('rdt_sample6');
  }
  public set rdtSample6(value: number) {
    this._rdtSample6 = value;
  }
  public resetRdtSample6() {
    this._rdtSample6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample6Input() {
    return this._rdtSample6;
  }

  // rdt_sample7 - computed: false, optional: true, required: false
  private _rdtSample7?: number; 
  public get rdtSample7() {
    return this.getNumberAttribute('rdt_sample7');
  }
  public set rdtSample7(value: number) {
    this._rdtSample7 = value;
  }
  public resetRdtSample7() {
    this._rdtSample7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample7Input() {
    return this._rdtSample7;
  }

  // rdt_sample8 - computed: false, optional: true, required: false
  private _rdtSample8?: number; 
  public get rdtSample8() {
    return this.getNumberAttribute('rdt_sample8');
  }
  public set rdtSample8(value: number) {
    this._rdtSample8 = value;
  }
  public resetRdtSample8() {
    this._rdtSample8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample8Input() {
    return this._rdtSample8;
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

export class DataThunderGslbSiteOperOperClientLdnsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteOperOperClientLdnsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteOperOperClientLdnsListStructOutputReference {
    return new DataThunderGslbSiteOperOperClientLdnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteOperOperTypeLast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#last DataThunderGslbSiteOper#last}
  */
  readonly last?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#type DataThunderGslbSiteOper#type}
  */
  readonly type?: string;
}

export function dataThunderGslbSiteOperOperTypeLastToTerraform(struct?: DataThunderGslbSiteOperOperTypeLast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last: cdktf.stringToTerraform(struct!.last),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderGslbSiteOperOperTypeLastToHclTerraform(struct?: DataThunderGslbSiteOperOperTypeLast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last: {
      value: cdktf.stringToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataThunderGslbSiteOperOperTypeLastOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteOperOperTypeLast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperOperTypeLast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._last = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._last = value.last;
      this._type = value.type;
    }
  }

  // last - computed: false, optional: true, required: false
  private _last?: string; 
  public get last() {
    return this.getStringAttribute('last');
  }
  public set last(value: string) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
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

export class DataThunderGslbSiteOperOperTypeLastList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteOperOperTypeLast[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteOperOperTypeLastOutputReference {
    return new DataThunderGslbSiteOperOperTypeLastOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#gslb_site DataThunderGslbSiteOper#gslb_site}
  */
  readonly gslbSite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#state DataThunderGslbSiteOper#state}
  */
  readonly state?: string;
  /**
  * client_ldns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#client_ldns_list DataThunderGslbSiteOper#client_ldns_list}
  */
  readonly clientLdnsList?: DataThunderGslbSiteOperOperClientLdnsListStruct[] | cdktf.IResolvable;
  /**
  * type_last block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#type_last DataThunderGslbSiteOper#type_last}
  */
  readonly typeLast?: DataThunderGslbSiteOperOperTypeLast[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteOperOperToTerraform(struct?: DataThunderGslbSiteOperOperOutputReference | DataThunderGslbSiteOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_site: cdktf.stringToTerraform(struct!.gslbSite),
    state: cdktf.stringToTerraform(struct!.state),
    client_ldns_list: cdktf.listMapper(dataThunderGslbSiteOperOperClientLdnsListStructToTerraform, true)(struct!.clientLdnsList),
    type_last: cdktf.listMapper(dataThunderGslbSiteOperOperTypeLastToTerraform, true)(struct!.typeLast),
  }
}


export function dataThunderGslbSiteOperOperToHclTerraform(struct?: DataThunderGslbSiteOperOperOutputReference | DataThunderGslbSiteOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_site: {
      value: cdktf.stringToHclTerraform(struct!.gslbSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ldns_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteOperOperClientLdnsListStructToHclTerraform, true)(struct!.clientLdnsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperOperClientLdnsListStructList",
    },
    type_last: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteOperOperTypeLastToHclTerraform, true)(struct!.typeLast),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperOperTypeLastList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSite = this._gslbSite;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._clientLdnsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientLdnsList = this._clientLdnsList?.internalValue;
    }
    if (this._typeLast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeLast = this._typeLast?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbSite = undefined;
      this._state = undefined;
      this._clientLdnsList.internalValue = undefined;
      this._typeLast.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbSite = value.gslbSite;
      this._state = value.state;
      this._clientLdnsList.internalValue = value.clientLdnsList;
      this._typeLast.internalValue = value.typeLast;
    }
  }

  // gslb_site - computed: false, optional: true, required: false
  private _gslbSite?: string; 
  public get gslbSite() {
    return this.getStringAttribute('gslb_site');
  }
  public set gslbSite(value: string) {
    this._gslbSite = value;
  }
  public resetGslbSite() {
    this._gslbSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteInput() {
    return this._gslbSite;
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

  // client_ldns_list - computed: false, optional: true, required: false
  private _clientLdnsList = new DataThunderGslbSiteOperOperClientLdnsListStructList(this, "client_ldns_list", false);
  public get clientLdnsList() {
    return this._clientLdnsList;
  }
  public putClientLdnsList(value: DataThunderGslbSiteOperOperClientLdnsListStruct[] | cdktf.IResolvable) {
    this._clientLdnsList.internalValue = value;
  }
  public resetClientLdnsList() {
    this._clientLdnsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLdnsListInput() {
    return this._clientLdnsList.internalValue;
  }

  // type_last - computed: false, optional: true, required: false
  private _typeLast = new DataThunderGslbSiteOperOperTypeLastList(this, "type_last", false);
  public get typeLast() {
    return this._typeLast;
  }
  public putTypeLast(value: DataThunderGslbSiteOperOperTypeLast[] | cdktf.IResolvable) {
    this._typeLast.internalValue = value;
  }
  public resetTypeLast() {
    this._typeLast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeLastInput() {
    return this._typeLast.internalValue;
  }
}
export interface DataThunderGslbSiteOperSlbDevListOperClientLdnsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#age DataThunderGslbSiteOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#client_ip DataThunderGslbSiteOper#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample1 DataThunderGslbSiteOper#rdt_sample1}
  */
  readonly rdtSample1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample2 DataThunderGslbSiteOper#rdt_sample2}
  */
  readonly rdtSample2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample3 DataThunderGslbSiteOper#rdt_sample3}
  */
  readonly rdtSample3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample4 DataThunderGslbSiteOper#rdt_sample4}
  */
  readonly rdtSample4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample5 DataThunderGslbSiteOper#rdt_sample5}
  */
  readonly rdtSample5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample6 DataThunderGslbSiteOper#rdt_sample6}
  */
  readonly rdtSample6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample7 DataThunderGslbSiteOper#rdt_sample7}
  */
  readonly rdtSample7?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#rdt_sample8 DataThunderGslbSiteOper#rdt_sample8}
  */
  readonly rdtSample8?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#type DataThunderGslbSiteOper#type}
  */
  readonly type?: string;
}

export function dataThunderGslbSiteOperSlbDevListOperClientLdnsListStructToTerraform(struct?: DataThunderGslbSiteOperSlbDevListOperClientLdnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    rdt_sample1: cdktf.numberToTerraform(struct!.rdtSample1),
    rdt_sample2: cdktf.numberToTerraform(struct!.rdtSample2),
    rdt_sample3: cdktf.numberToTerraform(struct!.rdtSample3),
    rdt_sample4: cdktf.numberToTerraform(struct!.rdtSample4),
    rdt_sample5: cdktf.numberToTerraform(struct!.rdtSample5),
    rdt_sample6: cdktf.numberToTerraform(struct!.rdtSample6),
    rdt_sample7: cdktf.numberToTerraform(struct!.rdtSample7),
    rdt_sample8: cdktf.numberToTerraform(struct!.rdtSample8),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderGslbSiteOperSlbDevListOperClientLdnsListStructToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListOperClientLdnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdt_sample1: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample2: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample3: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample4: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample5: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample6: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample7: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample7),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample8: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample8),
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

export class DataThunderGslbSiteOperSlbDevListOperClientLdnsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteOperSlbDevListOperClientLdnsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._rdtSample1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample1 = this._rdtSample1;
    }
    if (this._rdtSample2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample2 = this._rdtSample2;
    }
    if (this._rdtSample3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample3 = this._rdtSample3;
    }
    if (this._rdtSample4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample4 = this._rdtSample4;
    }
    if (this._rdtSample5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample5 = this._rdtSample5;
    }
    if (this._rdtSample6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample6 = this._rdtSample6;
    }
    if (this._rdtSample7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample7 = this._rdtSample7;
    }
    if (this._rdtSample8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample8 = this._rdtSample8;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListOperClientLdnsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._clientIp = undefined;
      this._rdtSample1 = undefined;
      this._rdtSample2 = undefined;
      this._rdtSample3 = undefined;
      this._rdtSample4 = undefined;
      this._rdtSample5 = undefined;
      this._rdtSample6 = undefined;
      this._rdtSample7 = undefined;
      this._rdtSample8 = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._clientIp = value.clientIp;
      this._rdtSample1 = value.rdtSample1;
      this._rdtSample2 = value.rdtSample2;
      this._rdtSample3 = value.rdtSample3;
      this._rdtSample4 = value.rdtSample4;
      this._rdtSample5 = value.rdtSample5;
      this._rdtSample6 = value.rdtSample6;
      this._rdtSample7 = value.rdtSample7;
      this._rdtSample8 = value.rdtSample8;
      this._type = value.type;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // rdt_sample1 - computed: false, optional: true, required: false
  private _rdtSample1?: number; 
  public get rdtSample1() {
    return this.getNumberAttribute('rdt_sample1');
  }
  public set rdtSample1(value: number) {
    this._rdtSample1 = value;
  }
  public resetRdtSample1() {
    this._rdtSample1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample1Input() {
    return this._rdtSample1;
  }

  // rdt_sample2 - computed: false, optional: true, required: false
  private _rdtSample2?: number; 
  public get rdtSample2() {
    return this.getNumberAttribute('rdt_sample2');
  }
  public set rdtSample2(value: number) {
    this._rdtSample2 = value;
  }
  public resetRdtSample2() {
    this._rdtSample2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample2Input() {
    return this._rdtSample2;
  }

  // rdt_sample3 - computed: false, optional: true, required: false
  private _rdtSample3?: number; 
  public get rdtSample3() {
    return this.getNumberAttribute('rdt_sample3');
  }
  public set rdtSample3(value: number) {
    this._rdtSample3 = value;
  }
  public resetRdtSample3() {
    this._rdtSample3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample3Input() {
    return this._rdtSample3;
  }

  // rdt_sample4 - computed: false, optional: true, required: false
  private _rdtSample4?: number; 
  public get rdtSample4() {
    return this.getNumberAttribute('rdt_sample4');
  }
  public set rdtSample4(value: number) {
    this._rdtSample4 = value;
  }
  public resetRdtSample4() {
    this._rdtSample4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample4Input() {
    return this._rdtSample4;
  }

  // rdt_sample5 - computed: false, optional: true, required: false
  private _rdtSample5?: number; 
  public get rdtSample5() {
    return this.getNumberAttribute('rdt_sample5');
  }
  public set rdtSample5(value: number) {
    this._rdtSample5 = value;
  }
  public resetRdtSample5() {
    this._rdtSample5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample5Input() {
    return this._rdtSample5;
  }

  // rdt_sample6 - computed: false, optional: true, required: false
  private _rdtSample6?: number; 
  public get rdtSample6() {
    return this.getNumberAttribute('rdt_sample6');
  }
  public set rdtSample6(value: number) {
    this._rdtSample6 = value;
  }
  public resetRdtSample6() {
    this._rdtSample6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample6Input() {
    return this._rdtSample6;
  }

  // rdt_sample7 - computed: false, optional: true, required: false
  private _rdtSample7?: number; 
  public get rdtSample7() {
    return this.getNumberAttribute('rdt_sample7');
  }
  public set rdtSample7(value: number) {
    this._rdtSample7 = value;
  }
  public resetRdtSample7() {
    this._rdtSample7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample7Input() {
    return this._rdtSample7;
  }

  // rdt_sample8 - computed: false, optional: true, required: false
  private _rdtSample8?: number; 
  public get rdtSample8() {
    return this.getNumberAttribute('rdt_sample8');
  }
  public set rdtSample8(value: number) {
    this._rdtSample8 = value;
  }
  public resetRdtSample8() {
    this._rdtSample8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample8Input() {
    return this._rdtSample8;
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

export class DataThunderGslbSiteOperSlbDevListOperClientLdnsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteOperSlbDevListOperClientLdnsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteOperSlbDevListOperClientLdnsListStructOutputReference {
    return new DataThunderGslbSiteOperSlbDevListOperClientLdnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteOperSlbDevListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_admin_preference DataThunderGslbSiteOper#dev_admin_preference}
  */
  readonly devAdminPreference?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_attr DataThunderGslbSiteOper#dev_attr}
  */
  readonly devAttr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_gw_state DataThunderGslbSiteOper#dev_gw_state}
  */
  readonly devGwState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_ip DataThunderGslbSiteOper#dev_ip}
  */
  readonly devIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_ip_cnt DataThunderGslbSiteOper#dev_ip_cnt}
  */
  readonly devIpCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_name DataThunderGslbSiteOper#dev_name}
  */
  readonly devName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_session_num DataThunderGslbSiteOper#dev_session_num}
  */
  readonly devSessionNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_session_util DataThunderGslbSiteOper#dev_session_util}
  */
  readonly devSessionUtil?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_state DataThunderGslbSiteOper#dev_state}
  */
  readonly devState?: string;
  /**
  * client_ldns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#client_ldns_list DataThunderGslbSiteOper#client_ldns_list}
  */
  readonly clientLdnsList?: DataThunderGslbSiteOperSlbDevListOperClientLdnsListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteOperSlbDevListOperToTerraform(struct?: DataThunderGslbSiteOperSlbDevListOperOutputReference | DataThunderGslbSiteOperSlbDevListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_admin_preference: cdktf.numberToTerraform(struct!.devAdminPreference),
    dev_attr: cdktf.stringToTerraform(struct!.devAttr),
    dev_gw_state: cdktf.stringToTerraform(struct!.devGwState),
    dev_ip: cdktf.stringToTerraform(struct!.devIp),
    dev_ip_cnt: cdktf.numberToTerraform(struct!.devIpCnt),
    dev_name: cdktf.stringToTerraform(struct!.devName),
    dev_session_num: cdktf.numberToTerraform(struct!.devSessionNum),
    dev_session_util: cdktf.numberToTerraform(struct!.devSessionUtil),
    dev_state: cdktf.stringToTerraform(struct!.devState),
    client_ldns_list: cdktf.listMapper(dataThunderGslbSiteOperSlbDevListOperClientLdnsListStructToTerraform, true)(struct!.clientLdnsList),
  }
}


export function dataThunderGslbSiteOperSlbDevListOperToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListOperOutputReference | DataThunderGslbSiteOperSlbDevListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_admin_preference: {
      value: cdktf.numberToHclTerraform(struct!.devAdminPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_attr: {
      value: cdktf.stringToHclTerraform(struct!.devAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_gw_state: {
      value: cdktf.stringToHclTerraform(struct!.devGwState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_ip: {
      value: cdktf.stringToHclTerraform(struct!.devIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_ip_cnt: {
      value: cdktf.numberToHclTerraform(struct!.devIpCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_name: {
      value: cdktf.stringToHclTerraform(struct!.devName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_session_num: {
      value: cdktf.numberToHclTerraform(struct!.devSessionNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_session_util: {
      value: cdktf.numberToHclTerraform(struct!.devSessionUtil),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_state: {
      value: cdktf.stringToHclTerraform(struct!.devState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ldns_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteOperSlbDevListOperClientLdnsListStructToHclTerraform, true)(struct!.clientLdnsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListOperClientLdnsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperSlbDevListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteOperSlbDevListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devAdminPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.devAdminPreference = this._devAdminPreference;
    }
    if (this._devAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.devAttr = this._devAttr;
    }
    if (this._devGwState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devGwState = this._devGwState;
    }
    if (this._devIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.devIp = this._devIp;
    }
    if (this._devIpCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.devIpCnt = this._devIpCnt;
    }
    if (this._devName !== undefined) {
      hasAnyValues = true;
      internalValueResult.devName = this._devName;
    }
    if (this._devSessionNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.devSessionNum = this._devSessionNum;
    }
    if (this._devSessionUtil !== undefined) {
      hasAnyValues = true;
      internalValueResult.devSessionUtil = this._devSessionUtil;
    }
    if (this._devState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devState = this._devState;
    }
    if (this._clientLdnsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientLdnsList = this._clientLdnsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._devAdminPreference = undefined;
      this._devAttr = undefined;
      this._devGwState = undefined;
      this._devIp = undefined;
      this._devIpCnt = undefined;
      this._devName = undefined;
      this._devSessionNum = undefined;
      this._devSessionUtil = undefined;
      this._devState = undefined;
      this._clientLdnsList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._devAdminPreference = value.devAdminPreference;
      this._devAttr = value.devAttr;
      this._devGwState = value.devGwState;
      this._devIp = value.devIp;
      this._devIpCnt = value.devIpCnt;
      this._devName = value.devName;
      this._devSessionNum = value.devSessionNum;
      this._devSessionUtil = value.devSessionUtil;
      this._devState = value.devState;
      this._clientLdnsList.internalValue = value.clientLdnsList;
    }
  }

  // dev_admin_preference - computed: false, optional: true, required: false
  private _devAdminPreference?: number; 
  public get devAdminPreference() {
    return this.getNumberAttribute('dev_admin_preference');
  }
  public set devAdminPreference(value: number) {
    this._devAdminPreference = value;
  }
  public resetDevAdminPreference() {
    this._devAdminPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devAdminPreferenceInput() {
    return this._devAdminPreference;
  }

  // dev_attr - computed: false, optional: true, required: false
  private _devAttr?: string; 
  public get devAttr() {
    return this.getStringAttribute('dev_attr');
  }
  public set devAttr(value: string) {
    this._devAttr = value;
  }
  public resetDevAttr() {
    this._devAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devAttrInput() {
    return this._devAttr;
  }

  // dev_gw_state - computed: false, optional: true, required: false
  private _devGwState?: string; 
  public get devGwState() {
    return this.getStringAttribute('dev_gw_state');
  }
  public set devGwState(value: string) {
    this._devGwState = value;
  }
  public resetDevGwState() {
    this._devGwState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devGwStateInput() {
    return this._devGwState;
  }

  // dev_ip - computed: false, optional: true, required: false
  private _devIp?: string; 
  public get devIp() {
    return this.getStringAttribute('dev_ip');
  }
  public set devIp(value: string) {
    this._devIp = value;
  }
  public resetDevIp() {
    this._devIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devIpInput() {
    return this._devIp;
  }

  // dev_ip_cnt - computed: false, optional: true, required: false
  private _devIpCnt?: number; 
  public get devIpCnt() {
    return this.getNumberAttribute('dev_ip_cnt');
  }
  public set devIpCnt(value: number) {
    this._devIpCnt = value;
  }
  public resetDevIpCnt() {
    this._devIpCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devIpCntInput() {
    return this._devIpCnt;
  }

  // dev_name - computed: false, optional: true, required: false
  private _devName?: string; 
  public get devName() {
    return this.getStringAttribute('dev_name');
  }
  public set devName(value: string) {
    this._devName = value;
  }
  public resetDevName() {
    this._devName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devNameInput() {
    return this._devName;
  }

  // dev_session_num - computed: false, optional: true, required: false
  private _devSessionNum?: number; 
  public get devSessionNum() {
    return this.getNumberAttribute('dev_session_num');
  }
  public set devSessionNum(value: number) {
    this._devSessionNum = value;
  }
  public resetDevSessionNum() {
    this._devSessionNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devSessionNumInput() {
    return this._devSessionNum;
  }

  // dev_session_util - computed: false, optional: true, required: false
  private _devSessionUtil?: number; 
  public get devSessionUtil() {
    return this.getNumberAttribute('dev_session_util');
  }
  public set devSessionUtil(value: number) {
    this._devSessionUtil = value;
  }
  public resetDevSessionUtil() {
    this._devSessionUtil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devSessionUtilInput() {
    return this._devSessionUtil;
  }

  // dev_state - computed: false, optional: true, required: false
  private _devState?: string; 
  public get devState() {
    return this.getStringAttribute('dev_state');
  }
  public set devState(value: string) {
    this._devState = value;
  }
  public resetDevState() {
    this._devState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devStateInput() {
    return this._devState;
  }

  // client_ldns_list - computed: false, optional: true, required: false
  private _clientLdnsList = new DataThunderGslbSiteOperSlbDevListOperClientLdnsListStructList(this, "client_ldns_list", false);
  public get clientLdnsList() {
    return this._clientLdnsList;
  }
  public putClientLdnsList(value: DataThunderGslbSiteOperSlbDevListOperClientLdnsListStruct[] | cdktf.IResolvable) {
    this._clientLdnsList.internalValue = value;
  }
  public resetClientLdnsList() {
    this._clientLdnsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLdnsListInput() {
    return this._clientLdnsList.internalValue;
  }
}
export interface DataThunderGslbSiteOperSlbDevListVipServerOper {
}

export function dataThunderGslbSiteOperSlbDevListVipServerOperToTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerOperOutputReference | DataThunderGslbSiteOperSlbDevListVipServerOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataThunderGslbSiteOperSlbDevListVipServerOperToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerOperOutputReference | DataThunderGslbSiteOperSlbDevListVipServerOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataThunderGslbSiteOperSlbDevListVipServerOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteOperSlbDevListVipServerOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListVipServerOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_port_num DataThunderGslbSiteOper#dev_vip_port_num}
  */
  readonly devVipPortNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_port_state DataThunderGslbSiteOper#dev_vip_port_state}
  */
  readonly devVipPortState?: string;
}

export function dataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStructToTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_port_num: cdktf.numberToTerraform(struct!.devVipPortNum),
    dev_vip_port_state: cdktf.stringToTerraform(struct!.devVipPortState),
  }
}


export function dataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStructToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStruct | cdktf.IResolvable): any {
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

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStructOutputReference {
    return new DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_addr DataThunderGslbSiteOper#dev_vip_addr}
  */
  readonly devVipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_state DataThunderGslbSiteOper#dev_vip_state}
  */
  readonly devVipState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#disabled DataThunderGslbSiteOper#disabled}
  */
  readonly disabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dynamic DataThunderGslbSiteOper#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#gslb_protocol DataThunderGslbSiteOper#gslb_protocol}
  */
  readonly gslbProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#hits DataThunderGslbSiteOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#local_protocol DataThunderGslbSiteOper#local_protocol}
  */
  readonly localProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#manually_health_check DataThunderGslbSiteOper#manually_health_check}
  */
  readonly manuallyHealthCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#node_name DataThunderGslbSiteOper#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#port_count DataThunderGslbSiteOper#port_count}
  */
  readonly portCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#recent DataThunderGslbSiteOper#recent}
  */
  readonly recent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#service_ip DataThunderGslbSiteOper#service_ip}
  */
  readonly serviceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#use_gslb_state DataThunderGslbSiteOper#use_gslb_state}
  */
  readonly useGslbState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#virtual_server DataThunderGslbSiteOper#virtual_server}
  */
  readonly virtualServer?: number;
  /**
  * dev_vip_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_port_list DataThunderGslbSiteOper#dev_vip_port_list}
  */
  readonly devVipPortList?: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperToTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperOutputReference | DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOper): any {
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
    dev_vip_port_list: cdktf.listMapper(dataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStructToTerraform, true)(struct!.devVipPortList),
  }
}


export function dataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperOutputReference | DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOper): any {
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
      value: cdktf.listMapperHcl(dataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStructToHclTerraform, true)(struct!.devVipPortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOper | undefined {
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

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOper | undefined) {
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
  private _devVipPortList = new DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStructList(this, "dev_vip_port_list", false);
  public get devVipPortList() {
    return this._devVipPortList;
  }
  public putDevVipPortList(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperDevVipPortListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStruct {
  /**
  * Specify a VIP name for the SLB device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#vip_name DataThunderGslbSiteOper#vip_name}
  */
  readonly vipName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#oper DataThunderGslbSiteOper#oper}
  */
  readonly oper?: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOper;
}

export function dataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStructToTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_name: cdktf.stringToTerraform(struct!.vipName),
    oper: dataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStructToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_name: {
      value: cdktf.stringToHclTerraform(struct!.vipName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper: {
      value: dataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipName = this._vipName;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vipName = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vipName = value.vipName;
      this._oper.internalValue = value.oper;
    }
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
  private _oper = new DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListOper) {
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

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStructOutputReference {
    return new DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_port_num DataThunderGslbSiteOper#dev_vip_port_num}
  */
  readonly devVipPortNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_port_state DataThunderGslbSiteOper#dev_vip_port_state}
  */
  readonly devVipPortState?: string;
}

export function dataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStructToTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_port_num: cdktf.numberToTerraform(struct!.devVipPortNum),
    dev_vip_port_state: cdktf.stringToTerraform(struct!.devVipPortState),
  }
}


export function dataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStructToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStruct | cdktf.IResolvable): any {
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

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStructOutputReference {
    return new DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_addr DataThunderGslbSiteOper#dev_vip_addr}
  */
  readonly devVipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_state DataThunderGslbSiteOper#dev_vip_state}
  */
  readonly devVipState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#disabled DataThunderGslbSiteOper#disabled}
  */
  readonly disabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dynamic DataThunderGslbSiteOper#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#gslb_protocol DataThunderGslbSiteOper#gslb_protocol}
  */
  readonly gslbProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#hits DataThunderGslbSiteOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#local_protocol DataThunderGslbSiteOper#local_protocol}
  */
  readonly localProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#manually_health_check DataThunderGslbSiteOper#manually_health_check}
  */
  readonly manuallyHealthCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#node_name DataThunderGslbSiteOper#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#port_count DataThunderGslbSiteOper#port_count}
  */
  readonly portCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#recent DataThunderGslbSiteOper#recent}
  */
  readonly recent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#service_ip DataThunderGslbSiteOper#service_ip}
  */
  readonly serviceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#use_gslb_state DataThunderGslbSiteOper#use_gslb_state}
  */
  readonly useGslbState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#virtual_server DataThunderGslbSiteOper#virtual_server}
  */
  readonly virtualServer?: number;
  /**
  * dev_vip_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_port_list DataThunderGslbSiteOper#dev_vip_port_list}
  */
  readonly devVipPortList?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperToTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperOutputReference | DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOper): any {
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
    dev_vip_port_list: cdktf.listMapper(dataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStructToTerraform, true)(struct!.devVipPortList),
  }
}


export function dataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperOutputReference | DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOper): any {
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
      value: cdktf.listMapperHcl(dataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStructToHclTerraform, true)(struct!.devVipPortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOper | undefined {
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

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOper | undefined) {
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
  private _devVipPortList = new DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStructList(this, "dev_vip_port_list", false);
  public get devVipPortList() {
    return this._devVipPortList;
  }
  public putDevVipPortList(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperDevVipPortListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStruct {
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#ipv4 DataThunderGslbSiteOper#ipv4}
  */
  readonly ipv4: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#oper DataThunderGslbSiteOper#oper}
  */
  readonly oper?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOper;
}

export function dataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStructToTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    oper: dataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStructToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper: {
      value: dataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._oper.internalValue = value.oper;
    }
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListOper) {
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

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStructOutputReference {
    return new DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_port_num DataThunderGslbSiteOper#dev_vip_port_num}
  */
  readonly devVipPortNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_port_state DataThunderGslbSiteOper#dev_vip_port_state}
  */
  readonly devVipPortState?: string;
}

export function dataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStructToTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_port_num: cdktf.numberToTerraform(struct!.devVipPortNum),
    dev_vip_port_state: cdktf.stringToTerraform(struct!.devVipPortState),
  }
}


export function dataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStructToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStruct | cdktf.IResolvable): any {
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

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStructOutputReference {
    return new DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_addr DataThunderGslbSiteOper#dev_vip_addr}
  */
  readonly devVipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_state DataThunderGslbSiteOper#dev_vip_state}
  */
  readonly devVipState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#disabled DataThunderGslbSiteOper#disabled}
  */
  readonly disabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dynamic DataThunderGslbSiteOper#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#gslb_protocol DataThunderGslbSiteOper#gslb_protocol}
  */
  readonly gslbProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#hits DataThunderGslbSiteOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#local_protocol DataThunderGslbSiteOper#local_protocol}
  */
  readonly localProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#manually_health_check DataThunderGslbSiteOper#manually_health_check}
  */
  readonly manuallyHealthCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#node_name DataThunderGslbSiteOper#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#port_count DataThunderGslbSiteOper#port_count}
  */
  readonly portCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#recent DataThunderGslbSiteOper#recent}
  */
  readonly recent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#service_ip DataThunderGslbSiteOper#service_ip}
  */
  readonly serviceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#use_gslb_state DataThunderGslbSiteOper#use_gslb_state}
  */
  readonly useGslbState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#virtual_server DataThunderGslbSiteOper#virtual_server}
  */
  readonly virtualServer?: number;
  /**
  * dev_vip_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#dev_vip_port_list DataThunderGslbSiteOper#dev_vip_port_list}
  */
  readonly devVipPortList?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperToTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperOutputReference | DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOper): any {
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
    dev_vip_port_list: cdktf.listMapper(dataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStructToTerraform, true)(struct!.devVipPortList),
  }
}


export function dataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperOutputReference | DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOper): any {
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
      value: cdktf.listMapperHcl(dataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStructToHclTerraform, true)(struct!.devVipPortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOper | undefined {
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

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOper | undefined) {
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
  private _devVipPortList = new DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStructList(this, "dev_vip_port_list", false);
  public get devVipPortList() {
    return this._devVipPortList;
  }
  public putDevVipPortList(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperDevVipPortListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStruct {
  /**
  * Specify IP address (IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#ipv6 DataThunderGslbSiteOper#ipv6}
  */
  readonly ipv6: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#oper DataThunderGslbSiteOper#oper}
  */
  readonly oper?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOper;
}

export function dataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStructToTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    oper: dataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStructToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper: {
      value: dataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6 = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6 = value.ipv6;
      this._oper.internalValue = value.oper;
    }
  }

  // ipv6 - computed: false, optional: false, required: true
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListOper) {
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

export class DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStructOutputReference {
    return new DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteOperSlbDevListVipServer {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#oper DataThunderGslbSiteOper#oper}
  */
  readonly oper?: DataThunderGslbSiteOperSlbDevListVipServerOper;
  /**
  * vip_server_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#vip_server_name_list DataThunderGslbSiteOper#vip_server_name_list}
  */
  readonly vipServerNameList?: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStruct[] | cdktf.IResolvable;
  /**
  * vip_server_v4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#vip_server_v4_list DataThunderGslbSiteOper#vip_server_v4_list}
  */
  readonly vipServerV4List?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStruct[] | cdktf.IResolvable;
  /**
  * vip_server_v6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#vip_server_v6_list DataThunderGslbSiteOper#vip_server_v6_list}
  */
  readonly vipServerV6List?: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteOperSlbDevListVipServerToTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerOutputReference | DataThunderGslbSiteOperSlbDevListVipServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderGslbSiteOperSlbDevListVipServerOperToTerraform(struct!.oper),
    vip_server_name_list: cdktf.listMapper(dataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStructToTerraform, true)(struct!.vipServerNameList),
    vip_server_v4_list: cdktf.listMapper(dataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStructToTerraform, true)(struct!.vipServerV4List),
    vip_server_v6_list: cdktf.listMapper(dataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStructToTerraform, true)(struct!.vipServerV6List),
  }
}


export function dataThunderGslbSiteOperSlbDevListVipServerToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListVipServerOutputReference | DataThunderGslbSiteOperSlbDevListVipServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderGslbSiteOperSlbDevListVipServerOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListVipServerOperList",
    },
    vip_server_name_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStructToHclTerraform, true)(struct!.vipServerNameList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStructList",
    },
    vip_server_v4_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStructToHclTerraform, true)(struct!.vipServerV4List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStructList",
    },
    vip_server_v6_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStructToHclTerraform, true)(struct!.vipServerV6List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperSlbDevListVipServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteOperSlbDevListVipServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    if (this._vipServerNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServerNameList = this._vipServerNameList?.internalValue;
    }
    if (this._vipServerV4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServerV4List = this._vipServerV4List?.internalValue;
    }
    if (this._vipServerV6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServerV6List = this._vipServerV6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListVipServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
      this._vipServerNameList.internalValue = undefined;
      this._vipServerV4List.internalValue = undefined;
      this._vipServerV6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
      this._vipServerNameList.internalValue = value.vipServerNameList;
      this._vipServerV4List.internalValue = value.vipServerV4List;
      this._vipServerV6List.internalValue = value.vipServerV6List;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteOperSlbDevListVipServerOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteOperSlbDevListVipServerOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // vip_server_name_list - computed: false, optional: true, required: false
  private _vipServerNameList = new DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStructList(this, "vip_server_name_list", false);
  public get vipServerNameList() {
    return this._vipServerNameList;
  }
  public putVipServerNameList(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerNameListStruct[] | cdktf.IResolvable) {
    this._vipServerNameList.internalValue = value;
  }
  public resetVipServerNameList() {
    this._vipServerNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerNameListInput() {
    return this._vipServerNameList.internalValue;
  }

  // vip_server_v4_list - computed: false, optional: true, required: false
  private _vipServerV4List = new DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStructList(this, "vip_server_v4_list", false);
  public get vipServerV4List() {
    return this._vipServerV4List;
  }
  public putVipServerV4List(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerV4ListStruct[] | cdktf.IResolvable) {
    this._vipServerV4List.internalValue = value;
  }
  public resetVipServerV4List() {
    this._vipServerV4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerV4ListInput() {
    return this._vipServerV4List.internalValue;
  }

  // vip_server_v6_list - computed: false, optional: true, required: false
  private _vipServerV6List = new DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStructList(this, "vip_server_v6_list", false);
  public get vipServerV6List() {
    return this._vipServerV6List;
  }
  public putVipServerV6List(value: DataThunderGslbSiteOperSlbDevListVipServerVipServerV6ListStruct[] | cdktf.IResolvable) {
    this._vipServerV6List.internalValue = value;
  }
  public resetVipServerV6List() {
    this._vipServerV6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerV6ListInput() {
    return this._vipServerV6List.internalValue;
  }
}
export interface DataThunderGslbSiteOperSlbDevListStruct {
  /**
  * Specify SLB device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#device_name DataThunderGslbSiteOper#device_name}
  */
  readonly deviceName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#oper DataThunderGslbSiteOper#oper}
  */
  readonly oper?: DataThunderGslbSiteOperSlbDevListOper;
  /**
  * vip_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#vip_server DataThunderGslbSiteOper#vip_server}
  */
  readonly vipServer?: DataThunderGslbSiteOperSlbDevListVipServer;
}

export function dataThunderGslbSiteOperSlbDevListStructToTerraform(struct?: DataThunderGslbSiteOperSlbDevListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    oper: dataThunderGslbSiteOperSlbDevListOperToTerraform(struct!.oper),
    vip_server: dataThunderGslbSiteOperSlbDevListVipServerToTerraform(struct!.vipServer),
  }
}


export function dataThunderGslbSiteOperSlbDevListStructToHclTerraform(struct?: DataThunderGslbSiteOperSlbDevListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper: {
      value: dataThunderGslbSiteOperSlbDevListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListOperList",
    },
    vip_server: {
      value: dataThunderGslbSiteOperSlbDevListVipServerToHclTerraform(struct!.vipServer),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteOperSlbDevListVipServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteOperSlbDevListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteOperSlbDevListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    if (this._vipServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServer = this._vipServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteOperSlbDevListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._oper.internalValue = undefined;
      this._vipServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._oper.internalValue = value.oper;
      this._vipServer.internalValue = value.vipServer;
    }
  }

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteOperSlbDevListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteOperSlbDevListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // vip_server - computed: false, optional: true, required: false
  private _vipServer = new DataThunderGslbSiteOperSlbDevListVipServerOutputReference(this, "vip_server");
  public get vipServer() {
    return this._vipServer;
  }
  public putVipServer(value: DataThunderGslbSiteOperSlbDevListVipServer) {
    this._vipServer.internalValue = value;
  }
  public resetVipServer() {
    this._vipServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerInput() {
    return this._vipServer.internalValue;
  }
}

export class DataThunderGslbSiteOperSlbDevListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteOperSlbDevListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteOperSlbDevListStructOutputReference {
    return new DataThunderGslbSiteOperSlbDevListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper thunder_gslb_site_oper}
*/
export class DataThunderGslbSiteOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_site_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbSiteOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbSiteOper to import
  * @param importFromId The id of the existing DataThunderGslbSiteOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbSiteOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_site_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_oper thunder_gslb_site_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbSiteOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbSiteOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_site_oper',
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
    this._id = config.id;
    this._siteName = config.siteName;
    this._ipServerList.internalValue = config.ipServerList;
    this._oper.internalValue = config.oper;
    this._slbDevList.internalValue = config.slbDevList;
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

  // ip_server_list - computed: false, optional: true, required: false
  private _ipServerList = new DataThunderGslbSiteOperIpServerListStructList(this, "ip_server_list", false);
  public get ipServerList() {
    return this._ipServerList;
  }
  public putIpServerList(value: DataThunderGslbSiteOperIpServerListStruct[] | cdktf.IResolvable) {
    this._ipServerList.internalValue = value;
  }
  public resetIpServerList() {
    this._ipServerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipServerListInput() {
    return this._ipServerList.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // slb_dev_list - computed: false, optional: true, required: false
  private _slbDevList = new DataThunderGslbSiteOperSlbDevListStructList(this, "slb_dev_list", false);
  public get slbDevList() {
    return this._slbDevList;
  }
  public putSlbDevList(value: DataThunderGslbSiteOperSlbDevListStruct[] | cdktf.IResolvable) {
    this._slbDevList.internalValue = value;
  }
  public resetSlbDevList() {
    this._slbDevList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDevListInput() {
    return this._slbDevList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      site_name: cdktf.stringToTerraform(this._siteName),
      ip_server_list: cdktf.listMapper(dataThunderGslbSiteOperIpServerListStructToTerraform, true)(this._ipServerList.internalValue),
      oper: dataThunderGslbSiteOperOperToTerraform(this._oper.internalValue),
      slb_dev_list: cdktf.listMapper(dataThunderGslbSiteOperSlbDevListStructToTerraform, true)(this._slbDevList.internalValue),
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
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_server_list: {
        value: cdktf.listMapperHcl(dataThunderGslbSiteOperIpServerListStructToHclTerraform, true)(this._ipServerList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbSiteOperIpServerListStructList",
      },
      oper: {
        value: dataThunderGslbSiteOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbSiteOperOperList",
      },
      slb_dev_list: {
        value: cdktf.listMapperHcl(dataThunderGslbSiteOperSlbDevListStructToHclTerraform, true)(this._slbDevList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbSiteOperSlbDevListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
