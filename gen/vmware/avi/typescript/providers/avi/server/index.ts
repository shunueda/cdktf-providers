// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#autoscaling_group_name Server#autoscaling_group_name}
  */
  readonly autoscalingGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#availability_zone Server#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#description Server#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#enabled Server#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#external_orchestration_id Server#external_orchestration_id}
  */
  readonly externalOrchestrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#external_uuid Server#external_uuid}
  */
  readonly externalUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#health_monitor_refs Server#health_monitor_refs}
  */
  readonly healthMonitorRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#hostname Server#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#ip Server#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#mac_address Server#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#nw_ref Server#nw_ref}
  */
  readonly nwRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#pool_ref Server#pool_ref}
  */
  readonly poolRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#port Server#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#preference_order Server#preference_order}
  */
  readonly preferenceOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#prst_hdr_val Server#prst_hdr_val}
  */
  readonly prstHdrVal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#ratio Server#ratio}
  */
  readonly ratio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#resolve_server_by_dns Server#resolve_server_by_dns}
  */
  readonly resolveServerByDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#rewrite_host_header Server#rewrite_host_header}
  */
  readonly rewriteHostHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#server_node Server#server_node}
  */
  readonly serverNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#static Server#static}
  */
  readonly static?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#type Server#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#verify_network Server#verify_network}
  */
  readonly verifyNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#vm_ref Server#vm_ref}
  */
  readonly vmRef?: string;
  /**
  * discovered_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#discovered_networks Server#discovered_networks}
  */
  readonly discoveredNetworks?: ServerDiscoveredNetworks[] | cdktf.IResolvable;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#location Server#location}
  */
  readonly location?: ServerLocation[] | cdktf.IResolvable;
  /**
  * srv_rdata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#srv_rdata Server#srv_rdata}
  */
  readonly srvRdata?: ServerSrvRdata[] | cdktf.IResolvable;
}
export interface ServerDiscoveredNetworksSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#addr Server#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#type Server#type}
  */
  readonly type: string;
}

export function serverDiscoveredNetworksSubnetIpAddrToTerraform(struct?: ServerDiscoveredNetworksSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serverDiscoveredNetworksSubnetIpAddrToHclTerraform(struct?: ServerDiscoveredNetworksSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class ServerDiscoveredNetworksSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerDiscoveredNetworksSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerDiscoveredNetworksSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ServerDiscoveredNetworksSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : ServerDiscoveredNetworksSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): ServerDiscoveredNetworksSubnetIpAddrOutputReference {
    return new ServerDiscoveredNetworksSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerDiscoveredNetworksSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#mask Server#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#ip_addr Server#ip_addr}
  */
  readonly ipAddr: ServerDiscoveredNetworksSubnetIpAddr[] | cdktf.IResolvable;
}

export function serverDiscoveredNetworksSubnetToTerraform(struct?: ServerDiscoveredNetworksSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(serverDiscoveredNetworksSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function serverDiscoveredNetworksSubnetToHclTerraform(struct?: ServerDiscoveredNetworksSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(serverDiscoveredNetworksSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "ServerDiscoveredNetworksSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerDiscoveredNetworksSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerDiscoveredNetworksSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerDiscoveredNetworksSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new ServerDiscoveredNetworksSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: ServerDiscoveredNetworksSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class ServerDiscoveredNetworksSubnetList extends cdktf.ComplexList {
  public internalValue? : ServerDiscoveredNetworksSubnet[] | cdktf.IResolvable

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
  public get(index: number): ServerDiscoveredNetworksSubnetOutputReference {
    return new ServerDiscoveredNetworksSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerDiscoveredNetworksSubnet6IpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#addr Server#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#type Server#type}
  */
  readonly type: string;
}

export function serverDiscoveredNetworksSubnet6IpAddrToTerraform(struct?: ServerDiscoveredNetworksSubnet6IpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serverDiscoveredNetworksSubnet6IpAddrToHclTerraform(struct?: ServerDiscoveredNetworksSubnet6IpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class ServerDiscoveredNetworksSubnet6IpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerDiscoveredNetworksSubnet6IpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerDiscoveredNetworksSubnet6IpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ServerDiscoveredNetworksSubnet6IpAddrList extends cdktf.ComplexList {
  public internalValue? : ServerDiscoveredNetworksSubnet6IpAddr[] | cdktf.IResolvable

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
  public get(index: number): ServerDiscoveredNetworksSubnet6IpAddrOutputReference {
    return new ServerDiscoveredNetworksSubnet6IpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerDiscoveredNetworksSubnet6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#mask Server#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#ip_addr Server#ip_addr}
  */
  readonly ipAddr: ServerDiscoveredNetworksSubnet6IpAddr[] | cdktf.IResolvable;
}

export function serverDiscoveredNetworksSubnet6ToTerraform(struct?: ServerDiscoveredNetworksSubnet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(serverDiscoveredNetworksSubnet6IpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function serverDiscoveredNetworksSubnet6ToHclTerraform(struct?: ServerDiscoveredNetworksSubnet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(serverDiscoveredNetworksSubnet6IpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "ServerDiscoveredNetworksSubnet6IpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerDiscoveredNetworksSubnet6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerDiscoveredNetworksSubnet6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerDiscoveredNetworksSubnet6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new ServerDiscoveredNetworksSubnet6IpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: ServerDiscoveredNetworksSubnet6IpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class ServerDiscoveredNetworksSubnet6List extends cdktf.ComplexList {
  public internalValue? : ServerDiscoveredNetworksSubnet6[] | cdktf.IResolvable

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
  public get(index: number): ServerDiscoveredNetworksSubnet6OutputReference {
    return new ServerDiscoveredNetworksSubnet6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerDiscoveredNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#network_ref Server#network_ref}
  */
  readonly networkRef: string;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#subnet Server#subnet}
  */
  readonly subnet?: ServerDiscoveredNetworksSubnet[] | cdktf.IResolvable;
  /**
  * subnet6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#subnet6 Server#subnet6}
  */
  readonly subnet6?: ServerDiscoveredNetworksSubnet6[] | cdktf.IResolvable;
}

export function serverDiscoveredNetworksToTerraform(struct?: ServerDiscoveredNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_ref: cdktf.stringToTerraform(struct!.networkRef),
    subnet: cdktf.listMapper(serverDiscoveredNetworksSubnetToTerraform, true)(struct!.subnet),
    subnet6: cdktf.listMapper(serverDiscoveredNetworksSubnet6ToTerraform, true)(struct!.subnet6),
  }
}


export function serverDiscoveredNetworksToHclTerraform(struct?: ServerDiscoveredNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_ref: {
      value: cdktf.stringToHclTerraform(struct!.networkRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.listMapperHcl(serverDiscoveredNetworksSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "ServerDiscoveredNetworksSubnetList",
    },
    subnet6: {
      value: cdktf.listMapperHcl(serverDiscoveredNetworksSubnet6ToHclTerraform, true)(struct!.subnet6),
      isBlock: true,
      type: "list",
      storageClassType: "ServerDiscoveredNetworksSubnet6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerDiscoveredNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerDiscoveredNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkRef = this._networkRef;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._subnet6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet6 = this._subnet6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerDiscoveredNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkRef = undefined;
      this._subnet.internalValue = undefined;
      this._subnet6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkRef = value.networkRef;
      this._subnet.internalValue = value.subnet;
      this._subnet6.internalValue = value.subnet6;
    }
  }

  // network_ref - computed: false, optional: false, required: true
  private _networkRef?: string; 
  public get networkRef() {
    return this.getStringAttribute('network_ref');
  }
  public set networkRef(value: string) {
    this._networkRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRefInput() {
    return this._networkRef;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new ServerDiscoveredNetworksSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: ServerDiscoveredNetworksSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet6 - computed: false, optional: true, required: false
  private _subnet6 = new ServerDiscoveredNetworksSubnet6List(this, "subnet6", false);
  public get subnet6() {
    return this._subnet6;
  }
  public putSubnet6(value: ServerDiscoveredNetworksSubnet6[] | cdktf.IResolvable) {
    this._subnet6.internalValue = value;
  }
  public resetSubnet6() {
    this._subnet6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet6Input() {
    return this._subnet6.internalValue;
  }
}

export class ServerDiscoveredNetworksList extends cdktf.ComplexList {
  public internalValue? : ServerDiscoveredNetworks[] | cdktf.IResolvable

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
  public get(index: number): ServerDiscoveredNetworksOutputReference {
    return new ServerDiscoveredNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#latitude Server#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#longitude Server#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#name Server#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#tag Server#tag}
  */
  readonly tag?: string;
}

export function serverLocationToTerraform(struct?: ServerLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
    name: cdktf.stringToTerraform(struct!.name),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function serverLocationToHclTerraform(struct?: ServerLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktf.stringToHclTerraform(struct!.longitude),
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
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._name = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._name = value.name;
      this._tag = value.tag;
    }
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // name - computed: true, optional: true, required: false
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

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class ServerLocationList extends cdktf.ComplexList {
  public internalValue? : ServerLocation[] | cdktf.IResolvable

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
  public get(index: number): ServerLocationOutputReference {
    return new ServerLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerSrvRdata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#port Server#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#priority Server#priority}
  */
  readonly priority: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#weight Server#weight}
  */
  readonly weight: string;
}

export function serverSrvRdataToTerraform(struct?: ServerSrvRdata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    priority: cdktf.stringToTerraform(struct!.priority),
    weight: cdktf.stringToTerraform(struct!.weight),
  }
}


export function serverSrvRdataToHclTerraform(struct?: ServerSrvRdata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.stringToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSrvRdataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerSrvRdata | cdktf.IResolvable | undefined {
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
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSrvRdata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._weight = undefined;
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
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ServerSrvRdataList extends cdktf.ComplexList {
  public internalValue? : ServerSrvRdata[] | cdktf.IResolvable

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
  public get(index: number): ServerSrvRdataOutputReference {
    return new ServerSrvRdataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server avi_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/server avi_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_server',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoscalingGroupName = config.autoscalingGroupName;
    this._availabilityZone = config.availabilityZone;
    this._description = config.description;
    this._enabled = config.enabled;
    this._externalOrchestrationId = config.externalOrchestrationId;
    this._externalUuid = config.externalUuid;
    this._healthMonitorRefs = config.healthMonitorRefs;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ip = config.ip;
    this._macAddress = config.macAddress;
    this._nwRef = config.nwRef;
    this._poolRef = config.poolRef;
    this._port = config.port;
    this._preferenceOrder = config.preferenceOrder;
    this._prstHdrVal = config.prstHdrVal;
    this._ratio = config.ratio;
    this._resolveServerByDns = config.resolveServerByDns;
    this._rewriteHostHeader = config.rewriteHostHeader;
    this._serverNode = config.serverNode;
    this._static = config.static;
    this._type = config.type;
    this._verifyNetwork = config.verifyNetwork;
    this._vmRef = config.vmRef;
    this._discoveredNetworks.internalValue = config.discoveredNetworks;
    this._location.internalValue = config.location;
    this._srvRdata.internalValue = config.srvRdata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling_group_name - computed: true, optional: true, required: false
  private _autoscalingGroupName?: string; 
  public get autoscalingGroupName() {
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  public resetAutoscalingGroupName() {
    this._autoscalingGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // external_orchestration_id - computed: true, optional: true, required: false
  private _externalOrchestrationId?: string; 
  public get externalOrchestrationId() {
    return this.getStringAttribute('external_orchestration_id');
  }
  public set externalOrchestrationId(value: string) {
    this._externalOrchestrationId = value;
  }
  public resetExternalOrchestrationId() {
    this._externalOrchestrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOrchestrationIdInput() {
    return this._externalOrchestrationId;
  }

  // external_uuid - computed: true, optional: true, required: false
  private _externalUuid?: string; 
  public get externalUuid() {
    return this.getStringAttribute('external_uuid');
  }
  public set externalUuid(value: string) {
    this._externalUuid = value;
  }
  public resetExternalUuid() {
    this._externalUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUuidInput() {
    return this._externalUuid;
  }

  // health_monitor_refs - computed: false, optional: true, required: false
  private _healthMonitorRefs?: string[]; 
  public get healthMonitorRefs() {
    return this.getListAttribute('health_monitor_refs');
  }
  public set healthMonitorRefs(value: string[]) {
    this._healthMonitorRefs = value;
  }
  public resetHealthMonitorRefs() {
    this._healthMonitorRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorRefsInput() {
    return this._healthMonitorRefs;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // nw_ref - computed: true, optional: true, required: false
  private _nwRef?: string; 
  public get nwRef() {
    return this.getStringAttribute('nw_ref');
  }
  public set nwRef(value: string) {
    this._nwRef = value;
  }
  public resetNwRef() {
    this._nwRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwRefInput() {
    return this._nwRef;
  }

  // pool_ref - computed: false, optional: false, required: true
  private _poolRef?: string; 
  public get poolRef() {
    return this.getStringAttribute('pool_ref');
  }
  public set poolRef(value: string) {
    this._poolRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolRefInput() {
    return this._poolRef;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // preference_order - computed: true, optional: true, required: false
  private _preferenceOrder?: string; 
  public get preferenceOrder() {
    return this.getStringAttribute('preference_order');
  }
  public set preferenceOrder(value: string) {
    this._preferenceOrder = value;
  }
  public resetPreferenceOrder() {
    this._preferenceOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceOrderInput() {
    return this._preferenceOrder;
  }

  // prst_hdr_val - computed: true, optional: true, required: false
  private _prstHdrVal?: string; 
  public get prstHdrVal() {
    return this.getStringAttribute('prst_hdr_val');
  }
  public set prstHdrVal(value: string) {
    this._prstHdrVal = value;
  }
  public resetPrstHdrVal() {
    this._prstHdrVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prstHdrValInput() {
    return this._prstHdrVal;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: string; 
  public get ratio() {
    return this.getStringAttribute('ratio');
  }
  public set ratio(value: string) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }

  // resolve_server_by_dns - computed: false, optional: true, required: false
  private _resolveServerByDns?: string; 
  public get resolveServerByDns() {
    return this.getStringAttribute('resolve_server_by_dns');
  }
  public set resolveServerByDns(value: string) {
    this._resolveServerByDns = value;
  }
  public resetResolveServerByDns() {
    this._resolveServerByDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveServerByDnsInput() {
    return this._resolveServerByDns;
  }

  // rewrite_host_header - computed: false, optional: true, required: false
  private _rewriteHostHeader?: string; 
  public get rewriteHostHeader() {
    return this.getStringAttribute('rewrite_host_header');
  }
  public set rewriteHostHeader(value: string) {
    this._rewriteHostHeader = value;
  }
  public resetRewriteHostHeader() {
    this._rewriteHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteHostHeaderInput() {
    return this._rewriteHostHeader;
  }

  // server_node - computed: true, optional: true, required: false
  private _serverNode?: string; 
  public get serverNode() {
    return this.getStringAttribute('server_node');
  }
  public set serverNode(value: string) {
    this._serverNode = value;
  }
  public resetServerNode() {
    this._serverNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNodeInput() {
    return this._serverNode;
  }

  // static - computed: false, optional: true, required: false
  private _static?: string; 
  public get static() {
    return this.getStringAttribute('static');
  }
  public set static(value: string) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
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

  // verify_network - computed: false, optional: true, required: false
  private _verifyNetwork?: string; 
  public get verifyNetwork() {
    return this.getStringAttribute('verify_network');
  }
  public set verifyNetwork(value: string) {
    this._verifyNetwork = value;
  }
  public resetVerifyNetwork() {
    this._verifyNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyNetworkInput() {
    return this._verifyNetwork;
  }

  // vm_ref - computed: true, optional: true, required: false
  private _vmRef?: string; 
  public get vmRef() {
    return this.getStringAttribute('vm_ref');
  }
  public set vmRef(value: string) {
    this._vmRef = value;
  }
  public resetVmRef() {
    this._vmRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmRefInput() {
    return this._vmRef;
  }

  // discovered_networks - computed: false, optional: true, required: false
  private _discoveredNetworks = new ServerDiscoveredNetworksList(this, "discovered_networks", false);
  public get discoveredNetworks() {
    return this._discoveredNetworks;
  }
  public putDiscoveredNetworks(value: ServerDiscoveredNetworks[] | cdktf.IResolvable) {
    this._discoveredNetworks.internalValue = value;
  }
  public resetDiscoveredNetworks() {
    this._discoveredNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredNetworksInput() {
    return this._discoveredNetworks.internalValue;
  }

  // location - computed: false, optional: true, required: false
  private _location = new ServerLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
  public putLocation(value: ServerLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // srv_rdata - computed: false, optional: true, required: false
  private _srvRdata = new ServerSrvRdataList(this, "srv_rdata", true);
  public get srvRdata() {
    return this._srvRdata;
  }
  public putSrvRdata(value: ServerSrvRdata[] | cdktf.IResolvable) {
    this._srvRdata.internalValue = value;
  }
  public resetSrvRdata() {
    this._srvRdata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvRdataInput() {
    return this._srvRdata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.stringToTerraform(this._enabled),
      external_orchestration_id: cdktf.stringToTerraform(this._externalOrchestrationId),
      external_uuid: cdktf.stringToTerraform(this._externalUuid),
      health_monitor_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthMonitorRefs),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      nw_ref: cdktf.stringToTerraform(this._nwRef),
      pool_ref: cdktf.stringToTerraform(this._poolRef),
      port: cdktf.stringToTerraform(this._port),
      preference_order: cdktf.stringToTerraform(this._preferenceOrder),
      prst_hdr_val: cdktf.stringToTerraform(this._prstHdrVal),
      ratio: cdktf.stringToTerraform(this._ratio),
      resolve_server_by_dns: cdktf.stringToTerraform(this._resolveServerByDns),
      rewrite_host_header: cdktf.stringToTerraform(this._rewriteHostHeader),
      server_node: cdktf.stringToTerraform(this._serverNode),
      static: cdktf.stringToTerraform(this._static),
      type: cdktf.stringToTerraform(this._type),
      verify_network: cdktf.stringToTerraform(this._verifyNetwork),
      vm_ref: cdktf.stringToTerraform(this._vmRef),
      discovered_networks: cdktf.listMapper(serverDiscoveredNetworksToTerraform, true)(this._discoveredNetworks.internalValue),
      location: cdktf.listMapper(serverLocationToTerraform, true)(this._location.internalValue),
      srv_rdata: cdktf.listMapper(serverSrvRdataToTerraform, true)(this._srvRdata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoscaling_group_name: {
        value: cdktf.stringToHclTerraform(this._autoscalingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_orchestration_id: {
        value: cdktf.stringToHclTerraform(this._externalOrchestrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_uuid: {
        value: cdktf.stringToHclTerraform(this._externalUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_monitor_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthMonitorRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nw_ref: {
        value: cdktf.stringToHclTerraform(this._nwRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_ref: {
        value: cdktf.stringToHclTerraform(this._poolRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preference_order: {
        value: cdktf.stringToHclTerraform(this._preferenceOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prst_hdr_val: {
        value: cdktf.stringToHclTerraform(this._prstHdrVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ratio: {
        value: cdktf.stringToHclTerraform(this._ratio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_server_by_dns: {
        value: cdktf.stringToHclTerraform(this._resolveServerByDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_host_header: {
        value: cdktf.stringToHclTerraform(this._rewriteHostHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_node: {
        value: cdktf.stringToHclTerraform(this._serverNode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static: {
        value: cdktf.stringToHclTerraform(this._static),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_network: {
        value: cdktf.stringToHclTerraform(this._verifyNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_ref: {
        value: cdktf.stringToHclTerraform(this._vmRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovered_networks: {
        value: cdktf.listMapperHcl(serverDiscoveredNetworksToHclTerraform, true)(this._discoveredNetworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerDiscoveredNetworksList",
      },
      location: {
        value: cdktf.listMapperHcl(serverLocationToHclTerraform, true)(this._location.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerLocationList",
      },
      srv_rdata: {
        value: cdktf.listMapperHcl(serverSrvRdataToHclTerraform, true)(this._srvRdata.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerSrvRdataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
