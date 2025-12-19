// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbSiteIpServerOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#id DataThunderGslbSiteIpServerOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the real server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#ip_server_name DataThunderGslbSiteIpServerOper#ip_server_name}
  */
  readonly ipServerName: string;
  /**
  * SiteName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#site_name DataThunderGslbSiteIpServerOper#site_name}
  */
  readonly siteName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#oper DataThunderGslbSiteIpServerOper#oper}
  */
  readonly oper?: DataThunderGslbSiteIpServerOperOper;
}
export interface DataThunderGslbSiteIpServerOperOperDrsListDrsPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#service_name DataThunderGslbSiteIpServerOper#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#vport DataThunderGslbSiteIpServerOper#vport}
  */
  readonly vport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#vport_protocol DataThunderGslbSiteIpServerOper#vport_protocol}
  */
  readonly vportProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#vport_state DataThunderGslbSiteIpServerOper#vport_state}
  */
  readonly vportState?: string;
}

export function dataThunderGslbSiteIpServerOperOperDrsListDrsPortToTerraform(struct?: DataThunderGslbSiteIpServerOperOperDrsListDrsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    vport: cdktf.numberToTerraform(struct!.vport),
    vport_protocol: cdktf.stringToTerraform(struct!.vportProtocol),
    vport_state: cdktf.stringToTerraform(struct!.vportState),
  }
}


export function dataThunderGslbSiteIpServerOperOperDrsListDrsPortToHclTerraform(struct?: DataThunderGslbSiteIpServerOperOperDrsListDrsPort | cdktf.IResolvable): any {
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
    vport: {
      value: cdktf.numberToHclTerraform(struct!.vport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vport_protocol: {
      value: cdktf.stringToHclTerraform(struct!.vportProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataThunderGslbSiteIpServerOperOperDrsListDrsPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteIpServerOperOperDrsListDrsPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._vport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vport = this._vport;
    }
    if (this._vportProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.vportProtocol = this._vportProtocol;
    }
    if (this._vportState !== undefined) {
      hasAnyValues = true;
      internalValueResult.vportState = this._vportState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteIpServerOperOperDrsListDrsPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._vport = undefined;
      this._vportProtocol = undefined;
      this._vportState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._vport = value.vport;
      this._vportProtocol = value.vportProtocol;
      this._vportState = value.vportState;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
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

  // vport_protocol - computed: false, optional: true, required: false
  private _vportProtocol?: string; 
  public get vportProtocol() {
    return this.getStringAttribute('vport_protocol');
  }
  public set vportProtocol(value: string) {
    this._vportProtocol = value;
  }
  public resetVportProtocol() {
    this._vportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportProtocolInput() {
    return this._vportProtocol;
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

export class DataThunderGslbSiteIpServerOperOperDrsListDrsPortList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteIpServerOperOperDrsListDrsPort[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteIpServerOperOperDrsListDrsPortOutputReference {
    return new DataThunderGslbSiteIpServerOperOperDrsListDrsPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteIpServerOperOperDrsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_disabled DataThunderGslbSiteIpServerOper#drs_disabled}
  */
  readonly drsDisabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_dynamic DataThunderGslbSiteIpServerOper#drs_dynamic}
  */
  readonly drsDynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_fqdn_name DataThunderGslbSiteIpServerOper#drs_fqdn_name}
  */
  readonly drsFqdnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_gslb_protocol DataThunderGslbSiteIpServerOper#drs_gslb_protocol}
  */
  readonly drsGslbProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_hits DataThunderGslbSiteIpServerOper#drs_hits}
  */
  readonly drsHits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_ip_address DataThunderGslbSiteIpServerOper#drs_ip_address}
  */
  readonly drsIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_local_protocol DataThunderGslbSiteIpServerOper#drs_local_protocol}
  */
  readonly drsLocalProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_manually_health_check DataThunderGslbSiteIpServerOper#drs_manually_health_check}
  */
  readonly drsManuallyHealthCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_name DataThunderGslbSiteIpServerOper#drs_name}
  */
  readonly drsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_port_count DataThunderGslbSiteIpServerOper#drs_port_count}
  */
  readonly drsPortCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_recent DataThunderGslbSiteIpServerOper#drs_recent}
  */
  readonly drsRecent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_service_ip DataThunderGslbSiteIpServerOper#drs_service_ip}
  */
  readonly drsServiceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_state DataThunderGslbSiteIpServerOper#drs_state}
  */
  readonly drsState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_use_gslb_state DataThunderGslbSiteIpServerOper#drs_use_gslb_state}
  */
  readonly drsUseGslbState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_virtual_server DataThunderGslbSiteIpServerOper#drs_virtual_server}
  */
  readonly drsVirtualServer?: number;
  /**
  * drs_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_port DataThunderGslbSiteIpServerOper#drs_port}
  */
  readonly drsPort?: DataThunderGslbSiteIpServerOperOperDrsListDrsPort[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteIpServerOperOperDrsListStructToTerraform(struct?: DataThunderGslbSiteIpServerOperOperDrsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drs_disabled: cdktf.numberToTerraform(struct!.drsDisabled),
    drs_dynamic: cdktf.numberToTerraform(struct!.drsDynamic),
    drs_fqdn_name: cdktf.stringToTerraform(struct!.drsFqdnName),
    drs_gslb_protocol: cdktf.numberToTerraform(struct!.drsGslbProtocol),
    drs_hits: cdktf.numberToTerraform(struct!.drsHits),
    drs_ip_address: cdktf.stringToTerraform(struct!.drsIpAddress),
    drs_local_protocol: cdktf.numberToTerraform(struct!.drsLocalProtocol),
    drs_manually_health_check: cdktf.numberToTerraform(struct!.drsManuallyHealthCheck),
    drs_name: cdktf.stringToTerraform(struct!.drsName),
    drs_port_count: cdktf.numberToTerraform(struct!.drsPortCount),
    drs_recent: cdktf.numberToTerraform(struct!.drsRecent),
    drs_service_ip: cdktf.stringToTerraform(struct!.drsServiceIp),
    drs_state: cdktf.stringToTerraform(struct!.drsState),
    drs_use_gslb_state: cdktf.numberToTerraform(struct!.drsUseGslbState),
    drs_virtual_server: cdktf.numberToTerraform(struct!.drsVirtualServer),
    drs_port: cdktf.listMapper(dataThunderGslbSiteIpServerOperOperDrsListDrsPortToTerraform, true)(struct!.drsPort),
  }
}


export function dataThunderGslbSiteIpServerOperOperDrsListStructToHclTerraform(struct?: DataThunderGslbSiteIpServerOperOperDrsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drs_disabled: {
      value: cdktf.numberToHclTerraform(struct!.drsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_dynamic: {
      value: cdktf.numberToHclTerraform(struct!.drsDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_fqdn_name: {
      value: cdktf.stringToHclTerraform(struct!.drsFqdnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_gslb_protocol: {
      value: cdktf.numberToHclTerraform(struct!.drsGslbProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_hits: {
      value: cdktf.numberToHclTerraform(struct!.drsHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.drsIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_local_protocol: {
      value: cdktf.numberToHclTerraform(struct!.drsLocalProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_manually_health_check: {
      value: cdktf.numberToHclTerraform(struct!.drsManuallyHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_name: {
      value: cdktf.stringToHclTerraform(struct!.drsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_port_count: {
      value: cdktf.numberToHclTerraform(struct!.drsPortCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_recent: {
      value: cdktf.numberToHclTerraform(struct!.drsRecent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_service_ip: {
      value: cdktf.stringToHclTerraform(struct!.drsServiceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_state: {
      value: cdktf.stringToHclTerraform(struct!.drsState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_use_gslb_state: {
      value: cdktf.numberToHclTerraform(struct!.drsUseGslbState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_virtual_server: {
      value: cdktf.numberToHclTerraform(struct!.drsVirtualServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_port: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteIpServerOperOperDrsListDrsPortToHclTerraform, true)(struct!.drsPort),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteIpServerOperOperDrsListDrsPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteIpServerOperOperDrsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteIpServerOperOperDrsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsDisabled = this._drsDisabled;
    }
    if (this._drsDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsDynamic = this._drsDynamic;
    }
    if (this._drsFqdnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsFqdnName = this._drsFqdnName;
    }
    if (this._drsGslbProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsGslbProtocol = this._drsGslbProtocol;
    }
    if (this._drsHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsHits = this._drsHits;
    }
    if (this._drsIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsIpAddress = this._drsIpAddress;
    }
    if (this._drsLocalProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsLocalProtocol = this._drsLocalProtocol;
    }
    if (this._drsManuallyHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsManuallyHealthCheck = this._drsManuallyHealthCheck;
    }
    if (this._drsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsName = this._drsName;
    }
    if (this._drsPortCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsPortCount = this._drsPortCount;
    }
    if (this._drsRecent !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsRecent = this._drsRecent;
    }
    if (this._drsServiceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsServiceIp = this._drsServiceIp;
    }
    if (this._drsState !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsState = this._drsState;
    }
    if (this._drsUseGslbState !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsUseGslbState = this._drsUseGslbState;
    }
    if (this._drsVirtualServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsVirtualServer = this._drsVirtualServer;
    }
    if (this._drsPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsPort = this._drsPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteIpServerOperOperDrsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drsDisabled = undefined;
      this._drsDynamic = undefined;
      this._drsFqdnName = undefined;
      this._drsGslbProtocol = undefined;
      this._drsHits = undefined;
      this._drsIpAddress = undefined;
      this._drsLocalProtocol = undefined;
      this._drsManuallyHealthCheck = undefined;
      this._drsName = undefined;
      this._drsPortCount = undefined;
      this._drsRecent = undefined;
      this._drsServiceIp = undefined;
      this._drsState = undefined;
      this._drsUseGslbState = undefined;
      this._drsVirtualServer = undefined;
      this._drsPort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drsDisabled = value.drsDisabled;
      this._drsDynamic = value.drsDynamic;
      this._drsFqdnName = value.drsFqdnName;
      this._drsGslbProtocol = value.drsGslbProtocol;
      this._drsHits = value.drsHits;
      this._drsIpAddress = value.drsIpAddress;
      this._drsLocalProtocol = value.drsLocalProtocol;
      this._drsManuallyHealthCheck = value.drsManuallyHealthCheck;
      this._drsName = value.drsName;
      this._drsPortCount = value.drsPortCount;
      this._drsRecent = value.drsRecent;
      this._drsServiceIp = value.drsServiceIp;
      this._drsState = value.drsState;
      this._drsUseGslbState = value.drsUseGslbState;
      this._drsVirtualServer = value.drsVirtualServer;
      this._drsPort.internalValue = value.drsPort;
    }
  }

  // drs_disabled - computed: false, optional: true, required: false
  private _drsDisabled?: number; 
  public get drsDisabled() {
    return this.getNumberAttribute('drs_disabled');
  }
  public set drsDisabled(value: number) {
    this._drsDisabled = value;
  }
  public resetDrsDisabled() {
    this._drsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsDisabledInput() {
    return this._drsDisabled;
  }

  // drs_dynamic - computed: false, optional: true, required: false
  private _drsDynamic?: number; 
  public get drsDynamic() {
    return this.getNumberAttribute('drs_dynamic');
  }
  public set drsDynamic(value: number) {
    this._drsDynamic = value;
  }
  public resetDrsDynamic() {
    this._drsDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsDynamicInput() {
    return this._drsDynamic;
  }

  // drs_fqdn_name - computed: false, optional: true, required: false
  private _drsFqdnName?: string; 
  public get drsFqdnName() {
    return this.getStringAttribute('drs_fqdn_name');
  }
  public set drsFqdnName(value: string) {
    this._drsFqdnName = value;
  }
  public resetDrsFqdnName() {
    this._drsFqdnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsFqdnNameInput() {
    return this._drsFqdnName;
  }

  // drs_gslb_protocol - computed: false, optional: true, required: false
  private _drsGslbProtocol?: number; 
  public get drsGslbProtocol() {
    return this.getNumberAttribute('drs_gslb_protocol');
  }
  public set drsGslbProtocol(value: number) {
    this._drsGslbProtocol = value;
  }
  public resetDrsGslbProtocol() {
    this._drsGslbProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsGslbProtocolInput() {
    return this._drsGslbProtocol;
  }

  // drs_hits - computed: false, optional: true, required: false
  private _drsHits?: number; 
  public get drsHits() {
    return this.getNumberAttribute('drs_hits');
  }
  public set drsHits(value: number) {
    this._drsHits = value;
  }
  public resetDrsHits() {
    this._drsHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsHitsInput() {
    return this._drsHits;
  }

  // drs_ip_address - computed: false, optional: true, required: false
  private _drsIpAddress?: string; 
  public get drsIpAddress() {
    return this.getStringAttribute('drs_ip_address');
  }
  public set drsIpAddress(value: string) {
    this._drsIpAddress = value;
  }
  public resetDrsIpAddress() {
    this._drsIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsIpAddressInput() {
    return this._drsIpAddress;
  }

  // drs_local_protocol - computed: false, optional: true, required: false
  private _drsLocalProtocol?: number; 
  public get drsLocalProtocol() {
    return this.getNumberAttribute('drs_local_protocol');
  }
  public set drsLocalProtocol(value: number) {
    this._drsLocalProtocol = value;
  }
  public resetDrsLocalProtocol() {
    this._drsLocalProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsLocalProtocolInput() {
    return this._drsLocalProtocol;
  }

  // drs_manually_health_check - computed: false, optional: true, required: false
  private _drsManuallyHealthCheck?: number; 
  public get drsManuallyHealthCheck() {
    return this.getNumberAttribute('drs_manually_health_check');
  }
  public set drsManuallyHealthCheck(value: number) {
    this._drsManuallyHealthCheck = value;
  }
  public resetDrsManuallyHealthCheck() {
    this._drsManuallyHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsManuallyHealthCheckInput() {
    return this._drsManuallyHealthCheck;
  }

  // drs_name - computed: false, optional: true, required: false
  private _drsName?: string; 
  public get drsName() {
    return this.getStringAttribute('drs_name');
  }
  public set drsName(value: string) {
    this._drsName = value;
  }
  public resetDrsName() {
    this._drsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsNameInput() {
    return this._drsName;
  }

  // drs_port_count - computed: false, optional: true, required: false
  private _drsPortCount?: number; 
  public get drsPortCount() {
    return this.getNumberAttribute('drs_port_count');
  }
  public set drsPortCount(value: number) {
    this._drsPortCount = value;
  }
  public resetDrsPortCount() {
    this._drsPortCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsPortCountInput() {
    return this._drsPortCount;
  }

  // drs_recent - computed: false, optional: true, required: false
  private _drsRecent?: number; 
  public get drsRecent() {
    return this.getNumberAttribute('drs_recent');
  }
  public set drsRecent(value: number) {
    this._drsRecent = value;
  }
  public resetDrsRecent() {
    this._drsRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsRecentInput() {
    return this._drsRecent;
  }

  // drs_service_ip - computed: false, optional: true, required: false
  private _drsServiceIp?: string; 
  public get drsServiceIp() {
    return this.getStringAttribute('drs_service_ip');
  }
  public set drsServiceIp(value: string) {
    this._drsServiceIp = value;
  }
  public resetDrsServiceIp() {
    this._drsServiceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsServiceIpInput() {
    return this._drsServiceIp;
  }

  // drs_state - computed: false, optional: true, required: false
  private _drsState?: string; 
  public get drsState() {
    return this.getStringAttribute('drs_state');
  }
  public set drsState(value: string) {
    this._drsState = value;
  }
  public resetDrsState() {
    this._drsState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsStateInput() {
    return this._drsState;
  }

  // drs_use_gslb_state - computed: false, optional: true, required: false
  private _drsUseGslbState?: number; 
  public get drsUseGslbState() {
    return this.getNumberAttribute('drs_use_gslb_state');
  }
  public set drsUseGslbState(value: number) {
    this._drsUseGslbState = value;
  }
  public resetDrsUseGslbState() {
    this._drsUseGslbState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsUseGslbStateInput() {
    return this._drsUseGslbState;
  }

  // drs_virtual_server - computed: false, optional: true, required: false
  private _drsVirtualServer?: number; 
  public get drsVirtualServer() {
    return this.getNumberAttribute('drs_virtual_server');
  }
  public set drsVirtualServer(value: number) {
    this._drsVirtualServer = value;
  }
  public resetDrsVirtualServer() {
    this._drsVirtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsVirtualServerInput() {
    return this._drsVirtualServer;
  }

  // drs_port - computed: false, optional: true, required: false
  private _drsPort = new DataThunderGslbSiteIpServerOperOperDrsListDrsPortList(this, "drs_port", false);
  public get drsPort() {
    return this._drsPort;
  }
  public putDrsPort(value: DataThunderGslbSiteIpServerOperOperDrsListDrsPort[] | cdktf.IResolvable) {
    this._drsPort.internalValue = value;
  }
  public resetDrsPort() {
    this._drsPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsPortInput() {
    return this._drsPort.internalValue;
  }
}

export class DataThunderGslbSiteIpServerOperOperDrsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteIpServerOperOperDrsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteIpServerOperOperDrsListStructOutputReference {
    return new DataThunderGslbSiteIpServerOperOperDrsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteIpServerOperOperIpServerPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#service_name DataThunderGslbSiteIpServerOper#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#vport DataThunderGslbSiteIpServerOper#vport}
  */
  readonly vport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#vport_protocol DataThunderGslbSiteIpServerOper#vport_protocol}
  */
  readonly vportProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#vport_state DataThunderGslbSiteIpServerOper#vport_state}
  */
  readonly vportState?: string;
}

export function dataThunderGslbSiteIpServerOperOperIpServerPortToTerraform(struct?: DataThunderGslbSiteIpServerOperOperIpServerPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    vport: cdktf.numberToTerraform(struct!.vport),
    vport_protocol: cdktf.stringToTerraform(struct!.vportProtocol),
    vport_state: cdktf.stringToTerraform(struct!.vportState),
  }
}


export function dataThunderGslbSiteIpServerOperOperIpServerPortToHclTerraform(struct?: DataThunderGslbSiteIpServerOperOperIpServerPort | cdktf.IResolvable): any {
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
    vport: {
      value: cdktf.numberToHclTerraform(struct!.vport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vport_protocol: {
      value: cdktf.stringToHclTerraform(struct!.vportProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataThunderGslbSiteIpServerOperOperIpServerPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteIpServerOperOperIpServerPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._vport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vport = this._vport;
    }
    if (this._vportProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.vportProtocol = this._vportProtocol;
    }
    if (this._vportState !== undefined) {
      hasAnyValues = true;
      internalValueResult.vportState = this._vportState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteIpServerOperOperIpServerPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._vport = undefined;
      this._vportProtocol = undefined;
      this._vportState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._vport = value.vport;
      this._vportProtocol = value.vportProtocol;
      this._vportState = value.vportState;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
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

  // vport_protocol - computed: false, optional: true, required: false
  private _vportProtocol?: string; 
  public get vportProtocol() {
    return this.getStringAttribute('vport_protocol');
  }
  public set vportProtocol(value: string) {
    this._vportProtocol = value;
  }
  public resetVportProtocol() {
    this._vportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportProtocolInput() {
    return this._vportProtocol;
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

export class DataThunderGslbSiteIpServerOperOperIpServerPortList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteIpServerOperOperIpServerPort[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteIpServerOperOperIpServerPortOutputReference {
    return new DataThunderGslbSiteIpServerOperOperIpServerPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteIpServerOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#desc DataThunderGslbSiteIpServerOper#desc}
  */
  readonly desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#disabled DataThunderGslbSiteIpServerOper#disabled}
  */
  readonly disabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#dynamic DataThunderGslbSiteIpServerOper#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#gslb_protocol DataThunderGslbSiteIpServerOper#gslb_protocol}
  */
  readonly gslbProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#hits DataThunderGslbSiteIpServerOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#ip_address DataThunderGslbSiteIpServerOper#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#ip_server DataThunderGslbSiteIpServerOper#ip_server}
  */
  readonly ipServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#local_protocol DataThunderGslbSiteIpServerOper#local_protocol}
  */
  readonly localProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#manually_health_check DataThunderGslbSiteIpServerOper#manually_health_check}
  */
  readonly manuallyHealthCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#port_count DataThunderGslbSiteIpServerOper#port_count}
  */
  readonly portCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#recent DataThunderGslbSiteIpServerOper#recent}
  */
  readonly recent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#service_ip DataThunderGslbSiteIpServerOper#service_ip}
  */
  readonly serviceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#state DataThunderGslbSiteIpServerOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#use_gslb_state DataThunderGslbSiteIpServerOper#use_gslb_state}
  */
  readonly useGslbState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#virtual_server DataThunderGslbSiteIpServerOper#virtual_server}
  */
  readonly virtualServer?: number;
  /**
  * drs_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#drs_list DataThunderGslbSiteIpServerOper#drs_list}
  */
  readonly drsList?: DataThunderGslbSiteIpServerOperOperDrsListStruct[] | cdktf.IResolvable;
  /**
  * ip_server_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#ip_server_port DataThunderGslbSiteIpServerOper#ip_server_port}
  */
  readonly ipServerPort?: DataThunderGslbSiteIpServerOperOperIpServerPort[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteIpServerOperOperToTerraform(struct?: DataThunderGslbSiteIpServerOperOperOutputReference | DataThunderGslbSiteIpServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desc: cdktf.stringToTerraform(struct!.desc),
    disabled: cdktf.numberToTerraform(struct!.disabled),
    dynamic: cdktf.numberToTerraform(struct!.dynamic),
    gslb_protocol: cdktf.numberToTerraform(struct!.gslbProtocol),
    hits: cdktf.numberToTerraform(struct!.hits),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_server: cdktf.stringToTerraform(struct!.ipServer),
    local_protocol: cdktf.numberToTerraform(struct!.localProtocol),
    manually_health_check: cdktf.numberToTerraform(struct!.manuallyHealthCheck),
    port_count: cdktf.numberToTerraform(struct!.portCount),
    recent: cdktf.numberToTerraform(struct!.recent),
    service_ip: cdktf.stringToTerraform(struct!.serviceIp),
    state: cdktf.stringToTerraform(struct!.state),
    use_gslb_state: cdktf.numberToTerraform(struct!.useGslbState),
    virtual_server: cdktf.numberToTerraform(struct!.virtualServer),
    drs_list: cdktf.listMapper(dataThunderGslbSiteIpServerOperOperDrsListStructToTerraform, true)(struct!.drsList),
    ip_server_port: cdktf.listMapper(dataThunderGslbSiteIpServerOperOperIpServerPortToTerraform, true)(struct!.ipServerPort),
  }
}


export function dataThunderGslbSiteIpServerOperOperToHclTerraform(struct?: DataThunderGslbSiteIpServerOperOperOutputReference | DataThunderGslbSiteIpServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desc: {
      value: cdktf.stringToHclTerraform(struct!.desc),
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
    drs_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteIpServerOperOperDrsListStructToHclTerraform, true)(struct!.drsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteIpServerOperOperDrsListStructList",
    },
    ip_server_port: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteIpServerOperOperIpServerPortToHclTerraform, true)(struct!.ipServerPort),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteIpServerOperOperIpServerPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteIpServerOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteIpServerOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc;
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
    if (this._recent !== undefined) {
      hasAnyValues = true;
      internalValueResult.recent = this._recent;
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
    if (this._drsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsList = this._drsList?.internalValue;
    }
    if (this._ipServerPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipServerPort = this._ipServerPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteIpServerOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desc = undefined;
      this._disabled = undefined;
      this._dynamic = undefined;
      this._gslbProtocol = undefined;
      this._hits = undefined;
      this._ipAddress = undefined;
      this._ipServer = undefined;
      this._localProtocol = undefined;
      this._manuallyHealthCheck = undefined;
      this._portCount = undefined;
      this._recent = undefined;
      this._serviceIp = undefined;
      this._state = undefined;
      this._useGslbState = undefined;
      this._virtualServer = undefined;
      this._drsList.internalValue = undefined;
      this._ipServerPort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desc = value.desc;
      this._disabled = value.disabled;
      this._dynamic = value.dynamic;
      this._gslbProtocol = value.gslbProtocol;
      this._hits = value.hits;
      this._ipAddress = value.ipAddress;
      this._ipServer = value.ipServer;
      this._localProtocol = value.localProtocol;
      this._manuallyHealthCheck = value.manuallyHealthCheck;
      this._portCount = value.portCount;
      this._recent = value.recent;
      this._serviceIp = value.serviceIp;
      this._state = value.state;
      this._useGslbState = value.useGslbState;
      this._virtualServer = value.virtualServer;
      this._drsList.internalValue = value.drsList;
      this._ipServerPort.internalValue = value.ipServerPort;
    }
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
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

  // drs_list - computed: false, optional: true, required: false
  private _drsList = new DataThunderGslbSiteIpServerOperOperDrsListStructList(this, "drs_list", false);
  public get drsList() {
    return this._drsList;
  }
  public putDrsList(value: DataThunderGslbSiteIpServerOperOperDrsListStruct[] | cdktf.IResolvable) {
    this._drsList.internalValue = value;
  }
  public resetDrsList() {
    this._drsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsListInput() {
    return this._drsList.internalValue;
  }

  // ip_server_port - computed: false, optional: true, required: false
  private _ipServerPort = new DataThunderGslbSiteIpServerOperOperIpServerPortList(this, "ip_server_port", false);
  public get ipServerPort() {
    return this._ipServerPort;
  }
  public putIpServerPort(value: DataThunderGslbSiteIpServerOperOperIpServerPort[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper thunder_gslb_site_ip_server_oper}
*/
export class DataThunderGslbSiteIpServerOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_site_ip_server_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbSiteIpServerOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbSiteIpServerOper to import
  * @param importFromId The id of the existing DataThunderGslbSiteIpServerOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbSiteIpServerOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_site_ip_server_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_ip_server_oper thunder_gslb_site_ip_server_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbSiteIpServerOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbSiteIpServerOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_site_ip_server_oper',
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
    this._ipServerName = config.ipServerName;
    this._siteName = config.siteName;
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
  private _oper = new DataThunderGslbSiteIpServerOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteIpServerOperOper) {
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
      ip_server_name: cdktf.stringToTerraform(this._ipServerName),
      site_name: cdktf.stringToTerraform(this._siteName),
      oper: dataThunderGslbSiteIpServerOperOperToTerraform(this._oper.internalValue),
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
      ip_server_name: {
        value: cdktf.stringToHclTerraform(this._ipServerName),
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
        value: dataThunderGslbSiteIpServerOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbSiteIpServerOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
