import * as cdktf from 'cdktf';
import { VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServer,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerToTerraform,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerToHclTerraform,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerOutputReference,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceInsideNetwork,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceInsideNetworkToTerraform,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceInsideNetworkToHclTerraform,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceInsideNetworkOutputReference,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceIpv6AutoConfig,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceIpv6AutoConfigToTerraform,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceIpv6AutoConfigToHclTerraform,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceIpv6AutoConfigOutputReference,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceMonitor,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceMonitorToTerraform,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceMonitorToHclTerraform,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceMonitorOutputReference,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSegmentNetwork,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSegmentNetworkToTerraform,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSegmentNetworkToHclTerraform,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSegmentNetworkOutputReference,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSrv6Network,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSrv6NetworkToTerraform,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSrv6NetworkToHclTerraform,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSrv6NetworkOutputReference,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIp,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpToTerraform,
voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpToHclTerraform,
VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpOutputReference,
VoltstackSiteCustomStorageConfigStaticRoutes,
voltstackSiteCustomStorageConfigStaticRoutesToTerraform,
voltstackSiteCustomStorageConfigStaticRoutesToHclTerraform,
VoltstackSiteCustomStorageConfigStaticRoutesOutputReference,
VoltstackSiteCustomStorageConfigStorageClassListStruct,
voltstackSiteCustomStorageConfigStorageClassListStructToTerraform,
voltstackSiteCustomStorageConfigStorageClassListStructToHclTerraform,
VoltstackSiteCustomStorageConfigStorageClassListStructOutputReference,
VoltstackSiteCustomStorageConfigStorageDeviceListStruct,
voltstackSiteCustomStorageConfigStorageDeviceListStructToTerraform,
voltstackSiteCustomStorageConfigStorageDeviceListStructToHclTerraform,
VoltstackSiteCustomStorageConfigStorageDeviceListStructOutputReference } from './structs400'
export interface VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#network_prefix_allocator VoltstackSite#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator;
}

export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    network_prefix_allocator: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
  }
}


export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_allocator: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#dns_server VoltstackSite#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIpToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIpOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIpOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#cluster_static_ip VoltstackSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIp;
  /**
  * fleet_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#fleet_static_ip VoltstackSite#fleet_static_ip}
  */
  readonly fleetStaticIp?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#node_static_ip VoltstackSite#node_static_ip}
  */
  readonly nodeStaticIp?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIp;
}

export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    fleet_static_ip: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpToTerraform(struct!.fleetStaticIp),
    node_static_ip: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpList",
    },
    fleet_static_ip: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpToHclTerraform(struct!.fleetStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpList",
    },
    node_static_ip: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._fleetStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetStaticIp = this._fleetStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._fleetStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._fleetStaticIp.internalValue = value.fleetStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // fleet_static_ip - computed: false, optional: true, required: false
  private _fleetStaticIp = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIpOutputReference(this, "fleet_static_ip");
  public get fleetStaticIp() {
    return this._fleetStaticIp;
  }
  public putFleetStaticIp(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressFleetStaticIp) {
    this._fleetStaticIp.internalValue = value;
  }
  public resetFleetStaticIp() {
    this._fleetStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetStaticIpInput() {
    return this._fleetStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#cluster VoltstackSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#device VoltstackSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#dhcp_client VoltstackSite#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#ip_fabric_network VoltstackSite#ip_fabric_network}
  */
  readonly ipFabricNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#is_primary VoltstackSite#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#monitor_disabled VoltstackSite#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#mtu VoltstackSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#no_ipv6_address VoltstackSite#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#not_primary VoltstackSite#not_primary}
  */
  readonly notPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#priority VoltstackSite#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#site_local_inside_network VoltstackSite#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#site_local_network VoltstackSite#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#storage_network VoltstackSite#storage_network}
  */
  readonly storageNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#untagged VoltstackSite#untagged}
  */
  readonly untagged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#vlan_id VoltstackSite#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#dhcp_server VoltstackSite#dhcp_server}
  */
  readonly dhcpServer?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServer;
  /**
  * inside_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#inside_network VoltstackSite#inside_network}
  */
  readonly insideNetwork?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceInsideNetwork;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#ipv6_auto_config VoltstackSite#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#monitor VoltstackSite#monitor}
  */
  readonly monitor?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceMonitor;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#segment_network VoltstackSite#segment_network}
  */
  readonly segmentNetwork?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSegmentNetwork;
  /**
  * srv6_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#srv6_network VoltstackSite#srv6_network}
  */
  readonly srv6Network?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSrv6Network;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#static_ip VoltstackSite#static_ip}
  */
  readonly staticIp?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#static_ipv6_address VoltstackSite#static_ipv6_address}
  */
  readonly staticIpv6Address?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6Address;
}

export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.booleanToTerraform(struct!.cluster),
    device: cdktf.stringToTerraform(struct!.device),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    ip_fabric_network: cdktf.booleanToTerraform(struct!.ipFabricNetwork),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    not_primary: cdktf.booleanToTerraform(struct!.notPrimary),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    storage_network: cdktf.booleanToTerraform(struct!.storageNetwork),
    untagged: cdktf.booleanToTerraform(struct!.untagged),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    dhcp_server: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerToTerraform(struct!.dhcpServer),
    inside_network: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceInsideNetworkToTerraform(struct!.insideNetwork),
    ipv6_auto_config: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceMonitorToTerraform(struct!.monitor),
    segment_network: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSegmentNetworkToTerraform(struct!.segmentNetwork),
    srv6_network: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSrv6NetworkToTerraform(struct!.srv6Network),
    static_ip: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
  }
}


export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.booleanToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_client: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_fabric_network: {
      value: cdktf.booleanToHclTerraform(struct!.ipFabricNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.monitorDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ipv6_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_primary: {
      value: cdktf.booleanToHclTerraform(struct!.notPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_network: {
      value: cdktf.booleanToHclTerraform(struct!.storageNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    untagged: {
      value: cdktf.booleanToHclTerraform(struct!.untagged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp_server: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerToHclTerraform(struct!.dhcpServer),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerList",
    },
    inside_network: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceInsideNetworkToHclTerraform(struct!.insideNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceInsideNetworkList",
    },
    ipv6_auto_config: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceIpv6AutoConfigList",
    },
    monitor: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceMonitorList",
    },
    segment_network: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSegmentNetworkList",
    },
    srv6_network: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSrv6NetworkToHclTerraform(struct!.srv6Network),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSrv6NetworkList",
    },
    static_ip: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpList",
    },
    static_ipv6_address: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._dhcpClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient;
    }
    if (this._ipFabricNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFabricNetwork = this._ipFabricNetwork;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._monitorDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisabled = this._monitorDisabled;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._noIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6Address = this._noIpv6Address;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._notPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPrimary = this._notPrimary;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._storageNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageNetwork = this._storageNetwork;
    }
    if (this._untagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.untagged = this._untagged;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._dhcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServer = this._dhcpServer?.internalValue;
    }
    if (this._insideNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNetwork = this._insideNetwork?.internalValue;
    }
    if (this._ipv6AutoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AutoConfig = this._ipv6AutoConfig?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    if (this._srv6Network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv6Network = this._srv6Network?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpv6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6Address = this._staticIpv6Address?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._device = undefined;
      this._dhcpClient = undefined;
      this._ipFabricNetwork = undefined;
      this._isPrimary = undefined;
      this._monitorDisabled = undefined;
      this._mtu = undefined;
      this._noIpv6Address = undefined;
      this._node = undefined;
      this._notPrimary = undefined;
      this._priority = undefined;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._storageNetwork = undefined;
      this._untagged = undefined;
      this._vlanId = undefined;
      this._dhcpServer.internalValue = undefined;
      this._insideNetwork.internalValue = undefined;
      this._ipv6AutoConfig.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._segmentNetwork.internalValue = undefined;
      this._srv6Network.internalValue = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpv6Address.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._device = value.device;
      this._dhcpClient = value.dhcpClient;
      this._ipFabricNetwork = value.ipFabricNetwork;
      this._isPrimary = value.isPrimary;
      this._monitorDisabled = value.monitorDisabled;
      this._mtu = value.mtu;
      this._noIpv6Address = value.noIpv6Address;
      this._node = value.nodeAttribute;
      this._notPrimary = value.notPrimary;
      this._priority = value.priority;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._storageNetwork = value.storageNetwork;
      this._untagged = value.untagged;
      this._vlanId = value.vlanId;
      this._dhcpServer.internalValue = value.dhcpServer;
      this._insideNetwork.internalValue = value.insideNetwork;
      this._ipv6AutoConfig.internalValue = value.ipv6AutoConfig;
      this._monitor.internalValue = value.monitor;
      this._segmentNetwork.internalValue = value.segmentNetwork;
      this._srv6Network.internalValue = value.srv6Network;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpv6Address.internalValue = value.staticIpv6Address;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: boolean | cdktf.IResolvable; 
  public get cluster() {
    return this.getBooleanAttribute('cluster');
  }
  public set cluster(value: boolean | cdktf.IResolvable) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient?: boolean | cdktf.IResolvable; 
  public get dhcpClient() {
    return this.getBooleanAttribute('dhcp_client');
  }
  public set dhcpClient(value: boolean | cdktf.IResolvable) {
    this._dhcpClient = value;
  }
  public resetDhcpClient() {
    this._dhcpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient;
  }

  // ip_fabric_network - computed: false, optional: true, required: false
  private _ipFabricNetwork?: boolean | cdktf.IResolvable; 
  public get ipFabricNetwork() {
    return this.getBooleanAttribute('ip_fabric_network');
  }
  public set ipFabricNetwork(value: boolean | cdktf.IResolvable) {
    this._ipFabricNetwork = value;
  }
  public resetIpFabricNetwork() {
    this._ipFabricNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFabricNetworkInput() {
    return this._ipFabricNetwork;
  }

  // is_primary - computed: false, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // monitor_disabled - computed: false, optional: true, required: false
  private _monitorDisabled?: boolean | cdktf.IResolvable; 
  public get monitorDisabled() {
    return this.getBooleanAttribute('monitor_disabled');
  }
  public set monitorDisabled(value: boolean | cdktf.IResolvable) {
    this._monitorDisabled = value;
  }
  public resetMonitorDisabled() {
    this._monitorDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisabledInput() {
    return this._monitorDisabled;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // no_ipv6_address - computed: false, optional: true, required: false
  private _noIpv6Address?: boolean | cdktf.IResolvable; 
  public get noIpv6Address() {
    return this.getBooleanAttribute('no_ipv6_address');
  }
  public set noIpv6Address(value: boolean | cdktf.IResolvable) {
    this._noIpv6Address = value;
  }
  public resetNoIpv6Address() {
    this._noIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6AddressInput() {
    return this._noIpv6Address;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // not_primary - computed: false, optional: true, required: false
  private _notPrimary?: boolean | cdktf.IResolvable; 
  public get notPrimary() {
    return this.getBooleanAttribute('not_primary');
  }
  public set notPrimary(value: boolean | cdktf.IResolvable) {
    this._notPrimary = value;
  }
  public resetNotPrimary() {
    this._notPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPrimaryInput() {
    return this._notPrimary;
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

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // storage_network - computed: false, optional: true, required: false
  private _storageNetwork?: boolean | cdktf.IResolvable; 
  public get storageNetwork() {
    return this.getBooleanAttribute('storage_network');
  }
  public set storageNetwork(value: boolean | cdktf.IResolvable) {
    this._storageNetwork = value;
  }
  public resetStorageNetwork() {
    this._storageNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNetworkInput() {
    return this._storageNetwork;
  }

  // untagged - computed: false, optional: true, required: false
  private _untagged?: boolean | cdktf.IResolvable; 
  public get untagged() {
    return this.getBooleanAttribute('untagged');
  }
  public set untagged(value: boolean | cdktf.IResolvable) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServer) {
    this._dhcpServer.internalValue = value;
  }
  public resetDhcpServer() {
    this._dhcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer.internalValue;
  }

  // inside_network - computed: false, optional: true, required: false
  private _insideNetwork = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceInsideNetworkOutputReference(this, "inside_network");
  public get insideNetwork() {
    return this._insideNetwork;
  }
  public putInsideNetwork(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceInsideNetwork) {
    this._insideNetwork.internalValue = value;
  }
  public resetInsideNetwork() {
    this._insideNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNetworkInput() {
    return this._insideNetwork.internalValue;
  }

  // ipv6_auto_config - computed: false, optional: true, required: false
  private _ipv6AutoConfig = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceIpv6AutoConfig) {
    this._ipv6AutoConfig.internalValue = value;
  }
  public resetIpv6AutoConfig() {
    this._ipv6AutoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoConfigInput() {
    return this._ipv6AutoConfig.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }

  // srv6_network - computed: false, optional: true, required: false
  private _srv6Network = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSrv6NetworkOutputReference(this, "srv6_network");
  public get srv6Network() {
    return this._srv6Network;
  }
  public putSrv6Network(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceSrv6Network) {
    this._srv6Network.internalValue = value;
  }
  public resetSrv6Network() {
    this._srv6Network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6NetworkInput() {
    return this._srv6Network.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // static_ipv6_address - computed: false, optional: true, required: false
  private _staticIpv6Address = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceStaticIpv6Address) {
    this._staticIpv6Address.internalValue = value;
  }
  public resetStaticIpv6Address() {
    this._staticIpv6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6AddressInput() {
    return this._staticIpv6Address.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#description VoltstackSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#labels VoltstackSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * storage_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#storage_interface VoltstackSite#storage_interface}
  */
  readonly storageInterface: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterface;
}

export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    storage_interface: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceToTerraform(struct!.storageInterface),
  }
}


export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    storage_interface: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceToHclTerraform(struct!.storageInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._storageInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageInterface = this._storageInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._labels = undefined;
      this._storageInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._labels = value.labels;
      this._storageInterface.internalValue = value.storageInterface;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // storage_interface - computed: false, optional: false, required: true
  private _storageInterface = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceOutputReference(this, "storage_interface");
  public get storageInterface() {
    return this._storageInterface;
  }
  public putStorageInterface(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterface) {
    this._storageInterface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInterfaceInput() {
    return this._storageInterface.internalValue;
  }
}

export class VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfaces[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesOutputReference {
    return new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomStorageConfigStorageInterfaceListStruct {
  /**
  * storage_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#storage_interfaces VoltstackSite#storage_interfaces}
  */
  readonly storageInterfaces: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfaces[] | cdktf.IResolvable;
}

export function voltstackSiteCustomStorageConfigStorageInterfaceListStructToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStructOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_interfaces: cdktf.listMapper(voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesToTerraform, true)(struct!.storageInterfaces),
  }
}


export function voltstackSiteCustomStorageConfigStorageInterfaceListStructToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStructOutputReference | VoltstackSiteCustomStorageConfigStorageInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_interfaces: {
      value: cdktf.listMapperHcl(voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesToHclTerraform, true)(struct!.storageInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageInterfaceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageInterfaceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageInterfaces = this._storageInterfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageInterfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageInterfaces.internalValue = value.storageInterfaces;
    }
  }

  // storage_interfaces - computed: false, optional: false, required: true
  private _storageInterfaces = new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesList(this, "storage_interfaces", false);
  public get storageInterfaces() {
    return this._storageInterfaces;
  }
  public putStorageInterfaces(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfaces[] | cdktf.IResolvable) {
    this._storageInterfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInterfacesInput() {
    return this._storageInterfaces.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#default_storage_class VoltstackSite#default_storage_class}
  */
  readonly defaultStorageClass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#no_static_routes VoltstackSite#no_static_routes}
  */
  readonly noStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#no_storage_device VoltstackSite#no_storage_device}
  */
  readonly noStorageDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#no_storage_interfaces VoltstackSite#no_storage_interfaces}
  */
  readonly noStorageInterfaces?: boolean | cdktf.IResolvable;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#static_routes VoltstackSite#static_routes}
  */
  readonly staticRoutes?: VoltstackSiteCustomStorageConfigStaticRoutes;
  /**
  * storage_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#storage_class_list VoltstackSite#storage_class_list}
  */
  readonly storageClassList?: VoltstackSiteCustomStorageConfigStorageClassListStruct;
  /**
  * storage_device_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#storage_device_list VoltstackSite#storage_device_list}
  */
  readonly storageDeviceList?: VoltstackSiteCustomStorageConfigStorageDeviceListStruct;
  /**
  * storage_interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#storage_interface_list VoltstackSite#storage_interface_list}
  */
  readonly storageInterfaceList?: VoltstackSiteCustomStorageConfigStorageInterfaceListStruct;
}

export function voltstackSiteCustomStorageConfigToTerraform(struct?: VoltstackSiteCustomStorageConfigOutputReference | VoltstackSiteCustomStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_storage_class: cdktf.booleanToTerraform(struct!.defaultStorageClass),
    no_static_routes: cdktf.booleanToTerraform(struct!.noStaticRoutes),
    no_storage_device: cdktf.booleanToTerraform(struct!.noStorageDevice),
    no_storage_interfaces: cdktf.booleanToTerraform(struct!.noStorageInterfaces),
    static_routes: voltstackSiteCustomStorageConfigStaticRoutesToTerraform(struct!.staticRoutes),
    storage_class_list: voltstackSiteCustomStorageConfigStorageClassListStructToTerraform(struct!.storageClassList),
    storage_device_list: voltstackSiteCustomStorageConfigStorageDeviceListStructToTerraform(struct!.storageDeviceList),
    storage_interface_list: voltstackSiteCustomStorageConfigStorageInterfaceListStructToTerraform(struct!.storageInterfaceList),
  }
}


export function voltstackSiteCustomStorageConfigToHclTerraform(struct?: VoltstackSiteCustomStorageConfigOutputReference | VoltstackSiteCustomStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_storage_class: {
      value: cdktf.booleanToHclTerraform(struct!.defaultStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_storage_device: {
      value: cdktf.booleanToHclTerraform(struct!.noStorageDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_storage_interfaces: {
      value: cdktf.booleanToHclTerraform(struct!.noStorageInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_routes: {
      value: voltstackSiteCustomStorageConfigStaticRoutesToHclTerraform(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStaticRoutesList",
    },
    storage_class_list: {
      value: voltstackSiteCustomStorageConfigStorageClassListStructToHclTerraform(struct!.storageClassList),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageClassListStructList",
    },
    storage_device_list: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStructToHclTerraform(struct!.storageDeviceList),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStructList",
    },
    storage_interface_list: {
      value: voltstackSiteCustomStorageConfigStorageInterfaceListStructToHclTerraform(struct!.storageInterfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStorageClass = this._defaultStorageClass;
    }
    if (this._noStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStaticRoutes = this._noStaticRoutes;
    }
    if (this._noStorageDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStorageDevice = this._noStorageDevice;
    }
    if (this._noStorageInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStorageInterfaces = this._noStorageInterfaces;
    }
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    if (this._storageClassList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassList = this._storageClassList?.internalValue;
    }
    if (this._storageDeviceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDeviceList = this._storageDeviceList?.internalValue;
    }
    if (this._storageInterfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageInterfaceList = this._storageInterfaceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultStorageClass = undefined;
      this._noStaticRoutes = undefined;
      this._noStorageDevice = undefined;
      this._noStorageInterfaces = undefined;
      this._staticRoutes.internalValue = undefined;
      this._storageClassList.internalValue = undefined;
      this._storageDeviceList.internalValue = undefined;
      this._storageInterfaceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultStorageClass = value.defaultStorageClass;
      this._noStaticRoutes = value.noStaticRoutes;
      this._noStorageDevice = value.noStorageDevice;
      this._noStorageInterfaces = value.noStorageInterfaces;
      this._staticRoutes.internalValue = value.staticRoutes;
      this._storageClassList.internalValue = value.storageClassList;
      this._storageDeviceList.internalValue = value.storageDeviceList;
      this._storageInterfaceList.internalValue = value.storageInterfaceList;
    }
  }

  // default_storage_class - computed: false, optional: true, required: false
  private _defaultStorageClass?: boolean | cdktf.IResolvable; 
  public get defaultStorageClass() {
    return this.getBooleanAttribute('default_storage_class');
  }
  public set defaultStorageClass(value: boolean | cdktf.IResolvable) {
    this._defaultStorageClass = value;
  }
  public resetDefaultStorageClass() {
    this._defaultStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageClassInput() {
    return this._defaultStorageClass;
  }

  // no_static_routes - computed: false, optional: true, required: false
  private _noStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noStaticRoutes() {
    return this.getBooleanAttribute('no_static_routes');
  }
  public set noStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noStaticRoutes = value;
  }
  public resetNoStaticRoutes() {
    this._noStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStaticRoutesInput() {
    return this._noStaticRoutes;
  }

  // no_storage_device - computed: false, optional: true, required: false
  private _noStorageDevice?: boolean | cdktf.IResolvable; 
  public get noStorageDevice() {
    return this.getBooleanAttribute('no_storage_device');
  }
  public set noStorageDevice(value: boolean | cdktf.IResolvable) {
    this._noStorageDevice = value;
  }
  public resetNoStorageDevice() {
    this._noStorageDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStorageDeviceInput() {
    return this._noStorageDevice;
  }

  // no_storage_interfaces - computed: false, optional: true, required: false
  private _noStorageInterfaces?: boolean | cdktf.IResolvable; 
  public get noStorageInterfaces() {
    return this.getBooleanAttribute('no_storage_interfaces');
  }
  public set noStorageInterfaces(value: boolean | cdktf.IResolvable) {
    this._noStorageInterfaces = value;
  }
  public resetNoStorageInterfaces() {
    this._noStorageInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStorageInterfacesInput() {
    return this._noStorageInterfaces;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new VoltstackSiteCustomStorageConfigStaticRoutesOutputReference(this, "static_routes");
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VoltstackSiteCustomStorageConfigStaticRoutes) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // storage_class_list - computed: false, optional: true, required: false
  private _storageClassList = new VoltstackSiteCustomStorageConfigStorageClassListStructOutputReference(this, "storage_class_list");
  public get storageClassList() {
    return this._storageClassList;
  }
  public putStorageClassList(value: VoltstackSiteCustomStorageConfigStorageClassListStruct) {
    this._storageClassList.internalValue = value;
  }
  public resetStorageClassList() {
    this._storageClassList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassListInput() {
    return this._storageClassList.internalValue;
  }

  // storage_device_list - computed: false, optional: true, required: false
  private _storageDeviceList = new VoltstackSiteCustomStorageConfigStorageDeviceListStructOutputReference(this, "storage_device_list");
  public get storageDeviceList() {
    return this._storageDeviceList;
  }
  public putStorageDeviceList(value: VoltstackSiteCustomStorageConfigStorageDeviceListStruct) {
    this._storageDeviceList.internalValue = value;
  }
  public resetStorageDeviceList() {
    this._storageDeviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDeviceListInput() {
    return this._storageDeviceList.internalValue;
  }

  // storage_interface_list - computed: false, optional: true, required: false
  private _storageInterfaceList = new VoltstackSiteCustomStorageConfigStorageInterfaceListStructOutputReference(this, "storage_interface_list");
  public get storageInterfaceList() {
    return this._storageInterfaceList;
  }
  public putStorageInterfaceList(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStruct) {
    this._storageInterfaceList.internalValue = value;
  }
  public resetStorageInterfaceList() {
    this._storageInterfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInterfaceListInput() {
    return this._storageInterfaceList.internalValue;
  }
}
export interface VoltstackSiteEnableVgpu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#feature_type VoltstackSite#feature_type}
  */
  readonly featureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#server_address VoltstackSite#server_address}
  */
  readonly serverAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#server_port VoltstackSite#server_port}
  */
  readonly serverPort?: number;
}

export function voltstackSiteEnableVgpuToTerraform(struct?: VoltstackSiteEnableVgpuOutputReference | VoltstackSiteEnableVgpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_type: cdktf.stringToTerraform(struct!.featureType),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    server_port: cdktf.numberToTerraform(struct!.serverPort),
  }
}


export function voltstackSiteEnableVgpuToHclTerraform(struct?: VoltstackSiteEnableVgpuOutputReference | VoltstackSiteEnableVgpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_type: {
      value: cdktf.stringToHclTerraform(struct!.featureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_port: {
      value: cdktf.numberToHclTerraform(struct!.serverPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteEnableVgpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteEnableVgpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureType = this._featureType;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._serverPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPort = this._serverPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteEnableVgpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._featureType = undefined;
      this._serverAddress = undefined;
      this._serverPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._featureType = value.featureType;
      this._serverAddress = value.serverAddress;
      this._serverPort = value.serverPort;
    }
  }

  // feature_type - computed: false, optional: false, required: true
  private _featureType?: string; 
  public get featureType() {
    return this.getStringAttribute('feature_type');
  }
  public set featureType(value: string) {
    this._featureType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureTypeInput() {
    return this._featureType;
  }

  // server_address - computed: false, optional: true, required: false
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  public resetServerAddress() {
    this._serverAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // server_port - computed: false, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }
}
export interface VoltstackSiteEnableVm {
}

export function voltstackSiteEnableVmToTerraform(struct?: VoltstackSiteEnableVmOutputReference | VoltstackSiteEnableVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function voltstackSiteEnableVmToHclTerraform(struct?: VoltstackSiteEnableVmOutputReference | VoltstackSiteEnableVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VoltstackSiteEnableVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteEnableVm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteEnableVm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VoltstackSiteK8SCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteK8SClusterToTerraform(struct?: VoltstackSiteK8SClusterOutputReference | VoltstackSiteK8SCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteK8SClusterToHclTerraform(struct?: VoltstackSiteK8SClusterOutputReference | VoltstackSiteK8SCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteK8SClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteK8SCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteK8SCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VoltstackSiteKubernetesUpgradeDrainEnableUpgradeDrain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#disable_vega_upgrade_mode VoltstackSite#disable_vega_upgrade_mode}
  */
  readonly disableVegaUpgradeMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#drain_max_unavailable_node_count VoltstackSite#drain_max_unavailable_node_count}
  */
  readonly drainMaxUnavailableNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#drain_max_unavailable_node_percentage VoltstackSite#drain_max_unavailable_node_percentage}
  */
  readonly drainMaxUnavailableNodePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#drain_node_timeout VoltstackSite#drain_node_timeout}
  */
  readonly drainNodeTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#enable_vega_upgrade_mode VoltstackSite#enable_vega_upgrade_mode}
  */
  readonly enableVegaUpgradeMode?: boolean | cdktf.IResolvable;
}

export function voltstackSiteKubernetesUpgradeDrainEnableUpgradeDrainToTerraform(struct?: VoltstackSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference | VoltstackSiteKubernetesUpgradeDrainEnableUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_vega_upgrade_mode: cdktf.booleanToTerraform(struct!.disableVegaUpgradeMode),
    drain_max_unavailable_node_count: cdktf.numberToTerraform(struct!.drainMaxUnavailableNodeCount),
    drain_max_unavailable_node_percentage: cdktf.numberToTerraform(struct!.drainMaxUnavailableNodePercentage),
    drain_node_timeout: cdktf.numberToTerraform(struct!.drainNodeTimeout),
    enable_vega_upgrade_mode: cdktf.booleanToTerraform(struct!.enableVegaUpgradeMode),
  }
}


export function voltstackSiteKubernetesUpgradeDrainEnableUpgradeDrainToHclTerraform(struct?: VoltstackSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference | VoltstackSiteKubernetesUpgradeDrainEnableUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_vega_upgrade_mode: {
      value: cdktf.booleanToHclTerraform(struct!.disableVegaUpgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drain_max_unavailable_node_count: {
      value: cdktf.numberToHclTerraform(struct!.drainMaxUnavailableNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drain_max_unavailable_node_percentage: {
      value: cdktf.numberToHclTerraform(struct!.drainMaxUnavailableNodePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drain_node_timeout: {
      value: cdktf.numberToHclTerraform(struct!.drainNodeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_vega_upgrade_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableVegaUpgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteKubernetesUpgradeDrainEnableUpgradeDrain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVegaUpgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVegaUpgradeMode = this._disableVegaUpgradeMode;
    }
    if (this._drainMaxUnavailableNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainMaxUnavailableNodeCount = this._drainMaxUnavailableNodeCount;
    }
    if (this._drainMaxUnavailableNodePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainMaxUnavailableNodePercentage = this._drainMaxUnavailableNodePercentage;
    }
    if (this._drainNodeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainNodeTimeout = this._drainNodeTimeout;
    }
    if (this._enableVegaUpgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVegaUpgradeMode = this._enableVegaUpgradeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteKubernetesUpgradeDrainEnableUpgradeDrain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableVegaUpgradeMode = undefined;
      this._drainMaxUnavailableNodeCount = undefined;
      this._drainMaxUnavailableNodePercentage = undefined;
      this._drainNodeTimeout = undefined;
      this._enableVegaUpgradeMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableVegaUpgradeMode = value.disableVegaUpgradeMode;
      this._drainMaxUnavailableNodeCount = value.drainMaxUnavailableNodeCount;
      this._drainMaxUnavailableNodePercentage = value.drainMaxUnavailableNodePercentage;
      this._drainNodeTimeout = value.drainNodeTimeout;
      this._enableVegaUpgradeMode = value.enableVegaUpgradeMode;
    }
  }

  // disable_vega_upgrade_mode - computed: false, optional: true, required: false
  private _disableVegaUpgradeMode?: boolean | cdktf.IResolvable; 
  public get disableVegaUpgradeMode() {
    return this.getBooleanAttribute('disable_vega_upgrade_mode');
  }
  public set disableVegaUpgradeMode(value: boolean | cdktf.IResolvable) {
    this._disableVegaUpgradeMode = value;
  }
  public resetDisableVegaUpgradeMode() {
    this._disableVegaUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVegaUpgradeModeInput() {
    return this._disableVegaUpgradeMode;
  }

  // drain_max_unavailable_node_count - computed: false, optional: true, required: false
  private _drainMaxUnavailableNodeCount?: number; 
  public get drainMaxUnavailableNodeCount() {
    return this.getNumberAttribute('drain_max_unavailable_node_count');
  }
  public set drainMaxUnavailableNodeCount(value: number) {
    this._drainMaxUnavailableNodeCount = value;
  }
  public resetDrainMaxUnavailableNodeCount() {
    this._drainMaxUnavailableNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainMaxUnavailableNodeCountInput() {
    return this._drainMaxUnavailableNodeCount;
  }

  // drain_max_unavailable_node_percentage - computed: false, optional: true, required: false
  private _drainMaxUnavailableNodePercentage?: number; 
  public get drainMaxUnavailableNodePercentage() {
    return this.getNumberAttribute('drain_max_unavailable_node_percentage');
  }
  public set drainMaxUnavailableNodePercentage(value: number) {
    this._drainMaxUnavailableNodePercentage = value;
  }
  public resetDrainMaxUnavailableNodePercentage() {
    this._drainMaxUnavailableNodePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainMaxUnavailableNodePercentageInput() {
    return this._drainMaxUnavailableNodePercentage;
  }

  // drain_node_timeout - computed: false, optional: false, required: true
  private _drainNodeTimeout?: number; 
  public get drainNodeTimeout() {
    return this.getNumberAttribute('drain_node_timeout');
  }
  public set drainNodeTimeout(value: number) {
    this._drainNodeTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drainNodeTimeoutInput() {
    return this._drainNodeTimeout;
  }

  // enable_vega_upgrade_mode - computed: false, optional: true, required: false
  private _enableVegaUpgradeMode?: boolean | cdktf.IResolvable; 
  public get enableVegaUpgradeMode() {
    return this.getBooleanAttribute('enable_vega_upgrade_mode');
  }
  public set enableVegaUpgradeMode(value: boolean | cdktf.IResolvable) {
    this._enableVegaUpgradeMode = value;
  }
  public resetEnableVegaUpgradeMode() {
    this._enableVegaUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVegaUpgradeModeInput() {
    return this._enableVegaUpgradeMode;
  }
}
export interface VoltstackSiteKubernetesUpgradeDrain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#disable_upgrade_drain VoltstackSite#disable_upgrade_drain}
  */
  readonly disableUpgradeDrain?: boolean | cdktf.IResolvable;
  /**
  * enable_upgrade_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#enable_upgrade_drain VoltstackSite#enable_upgrade_drain}
  */
  readonly enableUpgradeDrain?: VoltstackSiteKubernetesUpgradeDrainEnableUpgradeDrain;
}

export function voltstackSiteKubernetesUpgradeDrainToTerraform(struct?: VoltstackSiteKubernetesUpgradeDrainOutputReference | VoltstackSiteKubernetesUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_upgrade_drain: cdktf.booleanToTerraform(struct!.disableUpgradeDrain),
    enable_upgrade_drain: voltstackSiteKubernetesUpgradeDrainEnableUpgradeDrainToTerraform(struct!.enableUpgradeDrain),
  }
}


export function voltstackSiteKubernetesUpgradeDrainToHclTerraform(struct?: VoltstackSiteKubernetesUpgradeDrainOutputReference | VoltstackSiteKubernetesUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_upgrade_drain: {
      value: cdktf.booleanToHclTerraform(struct!.disableUpgradeDrain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_upgrade_drain: {
      value: voltstackSiteKubernetesUpgradeDrainEnableUpgradeDrainToHclTerraform(struct!.enableUpgradeDrain),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteKubernetesUpgradeDrainEnableUpgradeDrainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteKubernetesUpgradeDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteKubernetesUpgradeDrain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableUpgradeDrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUpgradeDrain = this._disableUpgradeDrain;
    }
    if (this._enableUpgradeDrain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUpgradeDrain = this._enableUpgradeDrain?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteKubernetesUpgradeDrain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableUpgradeDrain = undefined;
      this._enableUpgradeDrain.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableUpgradeDrain = value.disableUpgradeDrain;
      this._enableUpgradeDrain.internalValue = value.enableUpgradeDrain;
    }
  }

  // disable_upgrade_drain - computed: false, optional: true, required: false
  private _disableUpgradeDrain?: boolean | cdktf.IResolvable; 
  public get disableUpgradeDrain() {
    return this.getBooleanAttribute('disable_upgrade_drain');
  }
  public set disableUpgradeDrain(value: boolean | cdktf.IResolvable) {
    this._disableUpgradeDrain = value;
  }
  public resetDisableUpgradeDrain() {
    this._disableUpgradeDrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUpgradeDrainInput() {
    return this._disableUpgradeDrain;
  }

  // enable_upgrade_drain - computed: false, optional: true, required: false
  private _enableUpgradeDrain = new VoltstackSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference(this, "enable_upgrade_drain");
  public get enableUpgradeDrain() {
    return this._enableUpgradeDrain;
  }
  public putEnableUpgradeDrain(value: VoltstackSiteKubernetesUpgradeDrainEnableUpgradeDrain) {
    this._enableUpgradeDrain.internalValue = value;
  }
  public resetEnableUpgradeDrain() {
    this._enableUpgradeDrain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUpgradeDrainInput() {
    return this._enableUpgradeDrain.internalValue;
  }
}
export interface VoltstackSiteLocalControlPlaneBgpConfigPeers {
}

export function voltstackSiteLocalControlPlaneBgpConfigPeersToTerraform(struct?: VoltstackSiteLocalControlPlaneBgpConfigPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function voltstackSiteLocalControlPlaneBgpConfigPeersToHclTerraform(struct?: VoltstackSiteLocalControlPlaneBgpConfigPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VoltstackSiteLocalControlPlaneBgpConfigPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteLocalControlPlaneBgpConfigPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteLocalControlPlaneBgpConfigPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class VoltstackSiteLocalControlPlaneBgpConfigPeersList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteLocalControlPlaneBgpConfigPeers[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteLocalControlPlaneBgpConfigPeersOutputReference {
    return new VoltstackSiteLocalControlPlaneBgpConfigPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteLocalControlPlaneBgpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#asn VoltstackSite#asn}
  */
  readonly asn: number;
  /**
  * peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#peers VoltstackSite#peers}
  */
  readonly peers?: VoltstackSiteLocalControlPlaneBgpConfigPeers[] | cdktf.IResolvable;
}

export function voltstackSiteLocalControlPlaneBgpConfigToTerraform(struct?: VoltstackSiteLocalControlPlaneBgpConfigOutputReference | VoltstackSiteLocalControlPlaneBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    peers: cdktf.listMapper(voltstackSiteLocalControlPlaneBgpConfigPeersToTerraform, true)(struct!.peers),
  }
}


export function voltstackSiteLocalControlPlaneBgpConfigToHclTerraform(struct?: VoltstackSiteLocalControlPlaneBgpConfigOutputReference | VoltstackSiteLocalControlPlaneBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peers: {
      value: cdktf.listMapperHcl(voltstackSiteLocalControlPlaneBgpConfigPeersToHclTerraform, true)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteLocalControlPlaneBgpConfigPeersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteLocalControlPlaneBgpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteLocalControlPlaneBgpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteLocalControlPlaneBgpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._peers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._peers.internalValue = value.peers;
    }
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // peers - computed: false, optional: true, required: false
  private _peers = new VoltstackSiteLocalControlPlaneBgpConfigPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: VoltstackSiteLocalControlPlaneBgpConfigPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }
}
export interface VoltstackSiteLocalControlPlane {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#inside_vn VoltstackSite#inside_vn}
  */
  readonly insideVn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#outside_vn VoltstackSite#outside_vn}
  */
  readonly outsideVn?: boolean | cdktf.IResolvable;
  /**
  * bgp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#bgp_config VoltstackSite#bgp_config}
  */
  readonly bgpConfig?: VoltstackSiteLocalControlPlaneBgpConfig;
}

export function voltstackSiteLocalControlPlaneToTerraform(struct?: VoltstackSiteLocalControlPlaneOutputReference | VoltstackSiteLocalControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_vn: cdktf.booleanToTerraform(struct!.insideVn),
    outside_vn: cdktf.booleanToTerraform(struct!.outsideVn),
    bgp_config: voltstackSiteLocalControlPlaneBgpConfigToTerraform(struct!.bgpConfig),
  }
}


export function voltstackSiteLocalControlPlaneToHclTerraform(struct?: VoltstackSiteLocalControlPlaneOutputReference | VoltstackSiteLocalControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_vn: {
      value: cdktf.booleanToHclTerraform(struct!.insideVn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_vn: {
      value: cdktf.booleanToHclTerraform(struct!.outsideVn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bgp_config: {
      value: voltstackSiteLocalControlPlaneBgpConfigToHclTerraform(struct!.bgpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteLocalControlPlaneBgpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteLocalControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteLocalControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideVn !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideVn = this._insideVn;
    }
    if (this._outsideVn !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideVn = this._outsideVn;
    }
    if (this._bgpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpConfig = this._bgpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteLocalControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideVn = undefined;
      this._outsideVn = undefined;
      this._bgpConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideVn = value.insideVn;
      this._outsideVn = value.outsideVn;
      this._bgpConfig.internalValue = value.bgpConfig;
    }
  }

  // inside_vn - computed: false, optional: true, required: false
  private _insideVn?: boolean | cdktf.IResolvable; 
  public get insideVn() {
    return this.getBooleanAttribute('inside_vn');
  }
  public set insideVn(value: boolean | cdktf.IResolvable) {
    this._insideVn = value;
  }
  public resetInsideVn() {
    this._insideVn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideVnInput() {
    return this._insideVn;
  }

  // outside_vn - computed: false, optional: true, required: false
  private _outsideVn?: boolean | cdktf.IResolvable; 
  public get outsideVn() {
    return this.getBooleanAttribute('outside_vn');
  }
  public set outsideVn(value: boolean | cdktf.IResolvable) {
    this._outsideVn = value;
  }
  public resetOutsideVn() {
    this._outsideVn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideVnInput() {
    return this._outsideVn;
  }

  // bgp_config - computed: false, optional: true, required: false
  private _bgpConfig = new VoltstackSiteLocalControlPlaneBgpConfigOutputReference(this, "bgp_config");
  public get bgpConfig() {
    return this._bgpConfig;
  }
  public putBgpConfig(value: VoltstackSiteLocalControlPlaneBgpConfig) {
    this._bgpConfig.internalValue = value;
  }
  public resetBgpConfig() {
    this._bgpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpConfigInput() {
    return this._bgpConfig.internalValue;
  }
}
export interface VoltstackSiteLogReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteLogReceiverToTerraform(struct?: VoltstackSiteLogReceiverOutputReference | VoltstackSiteLogReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteLogReceiverToHclTerraform(struct?: VoltstackSiteLogReceiverOutputReference | VoltstackSiteLogReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteLogReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteLogReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteLogReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VoltstackSiteMasterNodeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#public_ip VoltstackSite#public_ip}
  */
  readonly publicIp?: string;
}

export function voltstackSiteMasterNodeConfigurationToTerraform(struct?: VoltstackSiteMasterNodeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
  }
}


export function voltstackSiteMasterNodeConfigurationToHclTerraform(struct?: VoltstackSiteMasterNodeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteMasterNodeConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteMasterNodeConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteMasterNodeConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._publicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._publicIp = value.publicIp;
    }
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

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }
}

export class VoltstackSiteMasterNodeConfigurationList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteMasterNodeConfiguration[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteMasterNodeConfigurationOutputReference {
    return new VoltstackSiteMasterNodeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteOfflineSurvivabilityMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#enable_offline_survivability_mode VoltstackSite#enable_offline_survivability_mode}
  */
  readonly enableOfflineSurvivabilityMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#no_offline_survivability_mode VoltstackSite#no_offline_survivability_mode}
  */
  readonly noOfflineSurvivabilityMode?: boolean | cdktf.IResolvable;
}

export function voltstackSiteOfflineSurvivabilityModeToTerraform(struct?: VoltstackSiteOfflineSurvivabilityModeOutputReference | VoltstackSiteOfflineSurvivabilityMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_offline_survivability_mode: cdktf.booleanToTerraform(struct!.enableOfflineSurvivabilityMode),
    no_offline_survivability_mode: cdktf.booleanToTerraform(struct!.noOfflineSurvivabilityMode),
  }
}


export function voltstackSiteOfflineSurvivabilityModeToHclTerraform(struct?: VoltstackSiteOfflineSurvivabilityModeOutputReference | VoltstackSiteOfflineSurvivabilityMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_offline_survivability_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableOfflineSurvivabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_offline_survivability_mode: {
      value: cdktf.booleanToHclTerraform(struct!.noOfflineSurvivabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteOfflineSurvivabilityModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteOfflineSurvivabilityMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableOfflineSurvivabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOfflineSurvivabilityMode = this._enableOfflineSurvivabilityMode;
    }
    if (this._noOfflineSurvivabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOfflineSurvivabilityMode = this._noOfflineSurvivabilityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteOfflineSurvivabilityMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableOfflineSurvivabilityMode = undefined;
      this._noOfflineSurvivabilityMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableOfflineSurvivabilityMode = value.enableOfflineSurvivabilityMode;
      this._noOfflineSurvivabilityMode = value.noOfflineSurvivabilityMode;
    }
  }

  // enable_offline_survivability_mode - computed: false, optional: true, required: false
  private _enableOfflineSurvivabilityMode?: boolean | cdktf.IResolvable; 
  public get enableOfflineSurvivabilityMode() {
    return this.getBooleanAttribute('enable_offline_survivability_mode');
  }
  public set enableOfflineSurvivabilityMode(value: boolean | cdktf.IResolvable) {
    this._enableOfflineSurvivabilityMode = value;
  }
  public resetEnableOfflineSurvivabilityMode() {
    this._enableOfflineSurvivabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOfflineSurvivabilityModeInput() {
    return this._enableOfflineSurvivabilityMode;
  }

  // no_offline_survivability_mode - computed: false, optional: true, required: false
  private _noOfflineSurvivabilityMode?: boolean | cdktf.IResolvable; 
  public get noOfflineSurvivabilityMode() {
    return this.getBooleanAttribute('no_offline_survivability_mode');
  }
  public set noOfflineSurvivabilityMode(value: boolean | cdktf.IResolvable) {
    this._noOfflineSurvivabilityMode = value;
  }
  public resetNoOfflineSurvivabilityMode() {
    this._noOfflineSurvivabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOfflineSurvivabilityModeInput() {
    return this._noOfflineSurvivabilityMode;
  }
}
export interface VoltstackSiteOs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#default_os_version VoltstackSite#default_os_version}
  */
  readonly defaultOsVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#operating_system_version VoltstackSite#operating_system_version}
  */
  readonly operatingSystemVersion?: string;
}

export function voltstackSiteOsToTerraform(struct?: VoltstackSiteOsOutputReference | VoltstackSiteOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_os_version: cdktf.booleanToTerraform(struct!.defaultOsVersion),
    operating_system_version: cdktf.stringToTerraform(struct!.operatingSystemVersion),
  }
}


export function voltstackSiteOsToHclTerraform(struct?: VoltstackSiteOsOutputReference | VoltstackSiteOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_os_version: {
      value: cdktf.booleanToHclTerraform(struct!.defaultOsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operating_system_version: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystemVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultOsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOsVersion = this._defaultOsVersion;
    }
    if (this._operatingSystemVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystemVersion = this._operatingSystemVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteOs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultOsVersion = undefined;
      this._operatingSystemVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultOsVersion = value.defaultOsVersion;
      this._operatingSystemVersion = value.operatingSystemVersion;
    }
  }

  // default_os_version - computed: false, optional: true, required: false
  private _defaultOsVersion?: boolean | cdktf.IResolvable; 
  public get defaultOsVersion() {
    return this.getBooleanAttribute('default_os_version');
  }
  public set defaultOsVersion(value: boolean | cdktf.IResolvable) {
    this._defaultOsVersion = value;
  }
  public resetDefaultOsVersion() {
    this._defaultOsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOsVersionInput() {
    return this._defaultOsVersion;
  }

  // operating_system_version - computed: false, optional: true, required: false
  private _operatingSystemVersion?: string; 
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
  public set operatingSystemVersion(value: string) {
    this._operatingSystemVersion = value;
  }
  public resetOperatingSystemVersion() {
    this._operatingSystemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemVersionInput() {
    return this._operatingSystemVersion;
  }
}
export interface VoltstackSiteSriovInterfacesSriovInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#interface_name VoltstackSite#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#number_of_vfio_vfs VoltstackSite#number_of_vfio_vfs}
  */
  readonly numberOfVfioVfs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#number_of_vfs VoltstackSite#number_of_vfs}
  */
  readonly numberOfVfs: number;
}

export function voltstackSiteSriovInterfacesSriovInterfaceToTerraform(struct?: VoltstackSiteSriovInterfacesSriovInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    number_of_vfio_vfs: cdktf.numberToTerraform(struct!.numberOfVfioVfs),
    number_of_vfs: cdktf.numberToTerraform(struct!.numberOfVfs),
  }
}


export function voltstackSiteSriovInterfacesSriovInterfaceToHclTerraform(struct?: VoltstackSiteSriovInterfacesSriovInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_vfio_vfs: {
      value: cdktf.numberToHclTerraform(struct!.numberOfVfioVfs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_vfs: {
      value: cdktf.numberToHclTerraform(struct!.numberOfVfs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteSriovInterfacesSriovInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteSriovInterfacesSriovInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._numberOfVfioVfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfVfioVfs = this._numberOfVfioVfs;
    }
    if (this._numberOfVfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfVfs = this._numberOfVfs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteSriovInterfacesSriovInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._numberOfVfioVfs = undefined;
      this._numberOfVfs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._numberOfVfioVfs = value.numberOfVfioVfs;
      this._numberOfVfs = value.numberOfVfs;
    }
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // number_of_vfio_vfs - computed: false, optional: true, required: false
  private _numberOfVfioVfs?: number; 
  public get numberOfVfioVfs() {
    return this.getNumberAttribute('number_of_vfio_vfs');
  }
  public set numberOfVfioVfs(value: number) {
    this._numberOfVfioVfs = value;
  }
  public resetNumberOfVfioVfs() {
    this._numberOfVfioVfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfVfioVfsInput() {
    return this._numberOfVfioVfs;
  }

  // number_of_vfs - computed: false, optional: false, required: true
  private _numberOfVfs?: number; 
  public get numberOfVfs() {
    return this.getNumberAttribute('number_of_vfs');
  }
  public set numberOfVfs(value: number) {
    this._numberOfVfs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfVfsInput() {
    return this._numberOfVfs;
  }
}

export class VoltstackSiteSriovInterfacesSriovInterfaceList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteSriovInterfacesSriovInterface[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteSriovInterfacesSriovInterfaceOutputReference {
    return new VoltstackSiteSriovInterfacesSriovInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteSriovInterfaces {
  /**
  * sriov_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#sriov_interface VoltstackSite#sriov_interface}
  */
  readonly sriovInterface?: VoltstackSiteSriovInterfacesSriovInterface[] | cdktf.IResolvable;
}

export function voltstackSiteSriovInterfacesToTerraform(struct?: VoltstackSiteSriovInterfacesOutputReference | VoltstackSiteSriovInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sriov_interface: cdktf.listMapper(voltstackSiteSriovInterfacesSriovInterfaceToTerraform, true)(struct!.sriovInterface),
  }
}


export function voltstackSiteSriovInterfacesToHclTerraform(struct?: VoltstackSiteSriovInterfacesOutputReference | VoltstackSiteSriovInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sriov_interface: {
      value: cdktf.listMapperHcl(voltstackSiteSriovInterfacesSriovInterfaceToHclTerraform, true)(struct!.sriovInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteSriovInterfacesSriovInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteSriovInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteSriovInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sriovInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sriovInterface = this._sriovInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteSriovInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sriovInterface.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sriovInterface.internalValue = value.sriovInterface;
    }
  }

  // sriov_interface - computed: false, optional: true, required: false
  private _sriovInterface = new VoltstackSiteSriovInterfacesSriovInterfaceList(this, "sriov_interface", false);
  public get sriovInterface() {
    return this._sriovInterface;
  }
  public putSriovInterface(value: VoltstackSiteSriovInterfacesSriovInterface[] | cdktf.IResolvable) {
    this._sriovInterface.internalValue = value;
  }
  public resetSriovInterface() {
    this._sriovInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sriovInterfaceInput() {
    return this._sriovInterface.internalValue;
  }
}
export interface VoltstackSiteSw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#default_sw_version VoltstackSite#default_sw_version}
  */
  readonly defaultSwVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#volterra_software_version VoltstackSite#volterra_software_version}
  */
  readonly volterraSoftwareVersion?: string;
}

export function voltstackSiteSwToTerraform(struct?: VoltstackSiteSwOutputReference | VoltstackSiteSw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_sw_version: cdktf.booleanToTerraform(struct!.defaultSwVersion),
    volterra_software_version: cdktf.stringToTerraform(struct!.volterraSoftwareVersion),
  }
}


export function voltstackSiteSwToHclTerraform(struct?: VoltstackSiteSwOutputReference | VoltstackSiteSw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_sw_version: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSwVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_software_version: {
      value: cdktf.stringToHclTerraform(struct!.volterraSoftwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteSwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteSw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSwVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSwVersion = this._defaultSwVersion;
    }
    if (this._volterraSoftwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraSoftwareVersion = this._volterraSoftwareVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteSw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSwVersion = undefined;
      this._volterraSoftwareVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSwVersion = value.defaultSwVersion;
      this._volterraSoftwareVersion = value.volterraSoftwareVersion;
    }
  }

  // default_sw_version - computed: false, optional: true, required: false
  private _defaultSwVersion?: boolean | cdktf.IResolvable; 
  public get defaultSwVersion() {
    return this.getBooleanAttribute('default_sw_version');
  }
  public set defaultSwVersion(value: boolean | cdktf.IResolvable) {
    this._defaultSwVersion = value;
  }
  public resetDefaultSwVersion() {
    this._defaultSwVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSwVersionInput() {
    return this._defaultSwVersion;
  }

  // volterra_software_version - computed: false, optional: true, required: false
  private _volterraSoftwareVersion?: string; 
  public get volterraSoftwareVersion() {
    return this.getStringAttribute('volterra_software_version');
  }
  public set volterraSoftwareVersion(value: string) {
    this._volterraSoftwareVersion = value;
  }
  public resetVolterraSoftwareVersion() {
    this._volterraSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSoftwareVersionInput() {
    return this._volterraSoftwareVersion;
  }
}
export interface VoltstackSiteUsbPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteUsbPolicyToTerraform(struct?: VoltstackSiteUsbPolicyOutputReference | VoltstackSiteUsbPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteUsbPolicyToHclTerraform(struct?: VoltstackSiteUsbPolicyOutputReference | VoltstackSiteUsbPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteUsbPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteUsbPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteUsbPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
