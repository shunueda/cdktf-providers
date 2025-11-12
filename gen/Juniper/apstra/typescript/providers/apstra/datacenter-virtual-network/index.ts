// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bindings make a Virtual Network available on Leaf Switches and Access Switches. At least one binding entry is required with Apstra 4.x. With Apstra 5.x, a Virtual Network with no bindings can be created by omitting (or setting `null`) this attribute. The value is a map keyed by graph db node IDs of *either* Leaf Switches (non-redundant Leaf Switches) or Leaf Switch redundancy groups (redundant Leaf Switches). Practitioners are encouraged to consider using the [`apstra_datacenter_virtual_network_binding_constructor`](../data-sources/datacenter_virtual_network_binding_constructor) data source to populate this map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#bindings DatacenterVirtualNetwork#bindings}
  */
  readonly bindings?: { [key: string]: DatacenterVirtualNetworkBindings } | cdktf.IResolvable;
  /**
  * Blueprint ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#blueprint_id DatacenterVirtualNetwork#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Virtual Network Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#description DatacenterVirtualNetwork#description}
  */
  readonly description?: string;
  /**
  * Enables a DHCP relay agent. Note that configuring this feature without configuring any `bindings` may lead to state churn because a VN with no bindings does not retain the `dhcp_service_enabled` state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#dhcp_service_enabled DatacenterVirtualNetwork#dhcp_service_enabled}
  */
  readonly dhcpServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Export RTs for this Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#export_route_targets DatacenterVirtualNetwork#export_route_targets}
  */
  readonly exportRouteTargets?: string[];
  /**
  * Import RTs for this Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#import_route_targets DatacenterVirtualNetwork#import_route_targets}
  */
  readonly importRouteTargets?: string[];
  /**
  * Enables IPv4 within the Virtual Network. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#ipv4_connectivity_enabled DatacenterVirtualNetwork#ipv4_connectivity_enabled}
  */
  readonly ipv4ConnectivityEnabled?: boolean | cdktf.IResolvable;
  /**
  * IPv4 subnet associated with the Virtual Network. When not specified, a prefix from within the IPv4 Resource Pool assigned to the `virtual_network_svi_subnets` role will be automatically assigned by Apstra.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#ipv4_subnet DatacenterVirtualNetwork#ipv4_subnet}
  */
  readonly ipv4Subnet?: string;
  /**
  * Specifies the IPv4 virtual gateway address within the Virtual Network. The configured value must be a valid IPv4 host address configured value within range specified by `ipv4_subnet`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#ipv4_virtual_gateway DatacenterVirtualNetwork#ipv4_virtual_gateway}
  */
  readonly ipv4VirtualGateway?: string;
  /**
  * Controls and indicates whether the IPv4 gateway within the Virtual Network is enabled. Requires `ipv4_connectivity_enabled` to be `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#ipv4_virtual_gateway_enabled DatacenterVirtualNetwork#ipv4_virtual_gateway_enabled}
  */
  readonly ipv4VirtualGatewayEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables IPv6 within the Virtual Network. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#ipv6_connectivity_enabled DatacenterVirtualNetwork#ipv6_connectivity_enabled}
  */
  readonly ipv6ConnectivityEnabled?: boolean | cdktf.IResolvable;
  /**
  * IPv6 subnet associated with the Virtual Network. When not specified, a prefix from within the IPv6 Resource Pool assigned to the `virtual_network_svi_subnets_ipv6` role will be automatically assigned by Apstra.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#ipv6_subnet DatacenterVirtualNetwork#ipv6_subnet}
  */
  readonly ipv6Subnet?: string;
  /**
  * Specifies the IPv6 virtual gateway address within the Virtual Network. The configured value must be a valid IPv6 host address configured value within range specified by `ipv6_subnet`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#ipv6_virtual_gateway DatacenterVirtualNetwork#ipv6_virtual_gateway}
  */
  readonly ipv6VirtualGateway?: string;
  /**
  * Controls and indicates whether the IPv6 gateway within the Virtual Network is enabled. Requires `ipv6_connectivity_enabled` to be `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#ipv6_virtual_gateway_enabled DatacenterVirtualNetwork#ipv6_virtual_gateway_enabled}
  */
  readonly ipv6VirtualGatewayEnabled?: boolean | cdktf.IResolvable;
  /**
  * L3 MTU used by the L3 switch interfaces participating in the Virtual Network. Must be an even number between 1280 and 9216. Requires Apstra 4.2.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#l3_mtu DatacenterVirtualNetwork#l3_mtu}
  */
  readonly l3Mtu?: number;
  /**
  * Virtual Network Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#name DatacenterVirtualNetwork#name}
  */
  readonly name: string;
  /**
  * For use only with `vxlan` type Virtual networks when all `bindings` use the same VLAN ID. This option reserves the VLAN fabric-wide, even on switches to which the Virtual Network has not yet been deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#reserve_vlan DatacenterVirtualNetwork#reserve_vlan}
  */
  readonly reserveVlan?: boolean | cdktf.IResolvable;
  /**
  * Used to specify the reserved VLAN ID without specifying any *bindings*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#reserved_vlan_id DatacenterVirtualNetwork#reserved_vlan_id}
  */
  readonly reservedVlanId?: number;
  /**
  * Routing Zone ID (required when `type == vxlan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#routing_zone_id DatacenterVirtualNetwork#routing_zone_id}
  */
  readonly routingZoneId?: string;
  /**
  * Set of tags for this Virtual Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#tags DatacenterVirtualNetwork#tags}
  */
  readonly tags?: string[];
  /**
  * Virtual Network Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#type DatacenterVirtualNetwork#type}
  */
  readonly type?: string;
  /**
  * EVPN Virtual Network ID to be associated with this Virtual Network.  When omitted, Apstra chooses a VNI from the Resource Pool [allocated](../resources/datacenter_resource_pool_allocation) to role `vni_virtual_network_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#vni DatacenterVirtualNetwork#vni}
  */
  readonly vni?: number;
}
export interface DatacenterVirtualNetworkBindings {
  /**
  * The graph db node ID of the access switch `system` node (nonredundant access switch) or `redundancy_group` node (ESI LAG access switches) beneath `leaf_id` to which this VN should be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#access_ids DatacenterVirtualNetwork#access_ids}
  */
  readonly accessIds?: string[];
  /**
  * When not specified, Apstra will choose the VLAN to be used on each switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#vlan_id DatacenterVirtualNetwork#vlan_id}
  */
  readonly vlanId?: number;
}

export function datacenterVirtualNetworkBindingsToTerraform(struct?: DatacenterVirtualNetworkBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessIds),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function datacenterVirtualNetworkBindingsToHclTerraform(struct?: DatacenterVirtualNetworkBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterVirtualNetworkBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterVirtualNetworkBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessIds = this._accessIds;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterVirtualNetworkBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessIds = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessIds = value.accessIds;
      this._vlanId = value.vlanId;
    }
  }

  // access_ids - computed: true, optional: true, required: false
  private _accessIds?: string[]; 
  public get accessIds() {
    return cdktf.Fn.tolist(this.getListAttribute('access_ids'));
  }
  public set accessIds(value: string[]) {
    this._accessIds = value;
  }
  public resetAccessIds() {
    this._accessIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdsInput() {
    return this._accessIds;
  }

  // vlan_id - computed: true, optional: true, required: false
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
}

export class DatacenterVirtualNetworkBindingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterVirtualNetworkBindings } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterVirtualNetworkBindingsOutputReference {
    return new DatacenterVirtualNetworkBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network apstra_datacenter_virtual_network}
*/
export class DatacenterVirtualNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterVirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterVirtualNetwork to import
  * @param importFromId The id of the existing DatacenterVirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterVirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_virtual_network apstra_datacenter_virtual_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterVirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterVirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bindings.internalValue = config.bindings;
    this._blueprintId = config.blueprintId;
    this._description = config.description;
    this._dhcpServiceEnabled = config.dhcpServiceEnabled;
    this._exportRouteTargets = config.exportRouteTargets;
    this._importRouteTargets = config.importRouteTargets;
    this._ipv4ConnectivityEnabled = config.ipv4ConnectivityEnabled;
    this._ipv4Subnet = config.ipv4Subnet;
    this._ipv4VirtualGateway = config.ipv4VirtualGateway;
    this._ipv4VirtualGatewayEnabled = config.ipv4VirtualGatewayEnabled;
    this._ipv6ConnectivityEnabled = config.ipv6ConnectivityEnabled;
    this._ipv6Subnet = config.ipv6Subnet;
    this._ipv6VirtualGateway = config.ipv6VirtualGateway;
    this._ipv6VirtualGatewayEnabled = config.ipv6VirtualGatewayEnabled;
    this._l3Mtu = config.l3Mtu;
    this._name = config.name;
    this._reserveVlan = config.reserveVlan;
    this._reservedVlanId = config.reservedVlanId;
    this._routingZoneId = config.routingZoneId;
    this._tags = config.tags;
    this._type = config.type;
    this._vni = config.vni;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DatacenterVirtualNetworkBindingsMap(this, "bindings");
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: { [key: string]: DatacenterVirtualNetworkBindings } | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
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

  // dhcp_service_enabled - computed: true, optional: true, required: false
  private _dhcpServiceEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpServiceEnabled() {
    return this.getBooleanAttribute('dhcp_service_enabled');
  }
  public set dhcpServiceEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpServiceEnabled = value;
  }
  public resetDhcpServiceEnabled() {
    this._dhcpServiceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServiceEnabledInput() {
    return this._dhcpServiceEnabled;
  }

  // export_route_targets - computed: false, optional: true, required: false
  private _exportRouteTargets?: string[]; 
  public get exportRouteTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('export_route_targets'));
  }
  public set exportRouteTargets(value: string[]) {
    this._exportRouteTargets = value;
  }
  public resetExportRouteTargets() {
    this._exportRouteTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRouteTargetsInput() {
    return this._exportRouteTargets;
  }

  // had_prior_vni_config - computed: true, optional: false, required: false
  public get hadPriorVniConfig() {
    return this.getBooleanAttribute('had_prior_vni_config');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_route_targets - computed: false, optional: true, required: false
  private _importRouteTargets?: string[]; 
  public get importRouteTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('import_route_targets'));
  }
  public set importRouteTargets(value: string[]) {
    this._importRouteTargets = value;
  }
  public resetImportRouteTargets() {
    this._importRouteTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRouteTargetsInput() {
    return this._importRouteTargets;
  }

  // ipv4_connectivity_enabled - computed: true, optional: true, required: false
  private _ipv4ConnectivityEnabled?: boolean | cdktf.IResolvable; 
  public get ipv4ConnectivityEnabled() {
    return this.getBooleanAttribute('ipv4_connectivity_enabled');
  }
  public set ipv4ConnectivityEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv4ConnectivityEnabled = value;
  }
  public resetIpv4ConnectivityEnabled() {
    this._ipv4ConnectivityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ConnectivityEnabledInput() {
    return this._ipv4ConnectivityEnabled;
  }

  // ipv4_subnet - computed: true, optional: true, required: false
  private _ipv4Subnet?: string; 
  public get ipv4Subnet() {
    return this.getStringAttribute('ipv4_subnet');
  }
  public set ipv4Subnet(value: string) {
    this._ipv4Subnet = value;
  }
  public resetIpv4Subnet() {
    this._ipv4Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetInput() {
    return this._ipv4Subnet;
  }

  // ipv4_virtual_gateway - computed: true, optional: true, required: false
  private _ipv4VirtualGateway?: string; 
  public get ipv4VirtualGateway() {
    return this.getStringAttribute('ipv4_virtual_gateway');
  }
  public set ipv4VirtualGateway(value: string) {
    this._ipv4VirtualGateway = value;
  }
  public resetIpv4VirtualGateway() {
    this._ipv4VirtualGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VirtualGatewayInput() {
    return this._ipv4VirtualGateway;
  }

  // ipv4_virtual_gateway_enabled - computed: true, optional: true, required: false
  private _ipv4VirtualGatewayEnabled?: boolean | cdktf.IResolvable; 
  public get ipv4VirtualGatewayEnabled() {
    return this.getBooleanAttribute('ipv4_virtual_gateway_enabled');
  }
  public set ipv4VirtualGatewayEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv4VirtualGatewayEnabled = value;
  }
  public resetIpv4VirtualGatewayEnabled() {
    this._ipv4VirtualGatewayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VirtualGatewayEnabledInput() {
    return this._ipv4VirtualGatewayEnabled;
  }

  // ipv6_connectivity_enabled - computed: true, optional: true, required: false
  private _ipv6ConnectivityEnabled?: boolean | cdktf.IResolvable; 
  public get ipv6ConnectivityEnabled() {
    return this.getBooleanAttribute('ipv6_connectivity_enabled');
  }
  public set ipv6ConnectivityEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv6ConnectivityEnabled = value;
  }
  public resetIpv6ConnectivityEnabled() {
    this._ipv6ConnectivityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ConnectivityEnabledInput() {
    return this._ipv6ConnectivityEnabled;
  }

  // ipv6_subnet - computed: true, optional: true, required: false
  private _ipv6Subnet?: string; 
  public get ipv6Subnet() {
    return this.getStringAttribute('ipv6_subnet');
  }
  public set ipv6Subnet(value: string) {
    this._ipv6Subnet = value;
  }
  public resetIpv6Subnet() {
    this._ipv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetInput() {
    return this._ipv6Subnet;
  }

  // ipv6_virtual_gateway - computed: true, optional: true, required: false
  private _ipv6VirtualGateway?: string; 
  public get ipv6VirtualGateway() {
    return this.getStringAttribute('ipv6_virtual_gateway');
  }
  public set ipv6VirtualGateway(value: string) {
    this._ipv6VirtualGateway = value;
  }
  public resetIpv6VirtualGateway() {
    this._ipv6VirtualGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VirtualGatewayInput() {
    return this._ipv6VirtualGateway;
  }

  // ipv6_virtual_gateway_enabled - computed: true, optional: true, required: false
  private _ipv6VirtualGatewayEnabled?: boolean | cdktf.IResolvable; 
  public get ipv6VirtualGatewayEnabled() {
    return this.getBooleanAttribute('ipv6_virtual_gateway_enabled');
  }
  public set ipv6VirtualGatewayEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv6VirtualGatewayEnabled = value;
  }
  public resetIpv6VirtualGatewayEnabled() {
    this._ipv6VirtualGatewayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VirtualGatewayEnabledInput() {
    return this._ipv6VirtualGatewayEnabled;
  }

  // l3_mtu - computed: true, optional: true, required: false
  private _l3Mtu?: number; 
  public get l3Mtu() {
    return this.getNumberAttribute('l3_mtu');
  }
  public set l3Mtu(value: number) {
    this._l3Mtu = value;
  }
  public resetL3Mtu() {
    this._l3Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3MtuInput() {
    return this._l3Mtu;
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

  // reserve_vlan - computed: true, optional: true, required: false
  private _reserveVlan?: boolean | cdktf.IResolvable; 
  public get reserveVlan() {
    return this.getBooleanAttribute('reserve_vlan');
  }
  public set reserveVlan(value: boolean | cdktf.IResolvable) {
    this._reserveVlan = value;
  }
  public resetReserveVlan() {
    this._reserveVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveVlanInput() {
    return this._reserveVlan;
  }

  // reserved_vlan_id - computed: true, optional: true, required: false
  private _reservedVlanId?: number; 
  public get reservedVlanId() {
    return this.getNumberAttribute('reserved_vlan_id');
  }
  public set reservedVlanId(value: number) {
    this._reservedVlanId = value;
  }
  public resetReservedVlanId() {
    this._reservedVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedVlanIdInput() {
    return this._reservedVlanId;
  }

  // routing_zone_id - computed: true, optional: true, required: false
  private _routingZoneId?: string; 
  public get routingZoneId() {
    return this.getStringAttribute('routing_zone_id');
  }
  public set routingZoneId(value: string) {
    this._routingZoneId = value;
  }
  public resetRoutingZoneId() {
    this._routingZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZoneIdInput() {
    return this._routingZoneId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: true, required: false
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

  // vni - computed: true, optional: true, required: false
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bindings: cdktf.hashMapper(datacenterVirtualNetworkBindingsToTerraform)(this._bindings.internalValue),
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      description: cdktf.stringToTerraform(this._description),
      dhcp_service_enabled: cdktf.booleanToTerraform(this._dhcpServiceEnabled),
      export_route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exportRouteTargets),
      import_route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importRouteTargets),
      ipv4_connectivity_enabled: cdktf.booleanToTerraform(this._ipv4ConnectivityEnabled),
      ipv4_subnet: cdktf.stringToTerraform(this._ipv4Subnet),
      ipv4_virtual_gateway: cdktf.stringToTerraform(this._ipv4VirtualGateway),
      ipv4_virtual_gateway_enabled: cdktf.booleanToTerraform(this._ipv4VirtualGatewayEnabled),
      ipv6_connectivity_enabled: cdktf.booleanToTerraform(this._ipv6ConnectivityEnabled),
      ipv6_subnet: cdktf.stringToTerraform(this._ipv6Subnet),
      ipv6_virtual_gateway: cdktf.stringToTerraform(this._ipv6VirtualGateway),
      ipv6_virtual_gateway_enabled: cdktf.booleanToTerraform(this._ipv6VirtualGatewayEnabled),
      l3_mtu: cdktf.numberToTerraform(this._l3Mtu),
      name: cdktf.stringToTerraform(this._name),
      reserve_vlan: cdktf.booleanToTerraform(this._reserveVlan),
      reserved_vlan_id: cdktf.numberToTerraform(this._reservedVlanId),
      routing_zone_id: cdktf.stringToTerraform(this._routingZoneId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      vni: cdktf.numberToTerraform(this._vni),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bindings: {
        value: cdktf.hashMapperHcl(datacenterVirtualNetworkBindingsToHclTerraform)(this._bindings.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DatacenterVirtualNetworkBindingsMap",
      },
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
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
      dhcp_service_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpServiceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_route_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exportRouteTargets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      import_route_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importRouteTargets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv4_connectivity_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv4ConnectivityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_subnet: {
        value: cdktf.stringToHclTerraform(this._ipv4Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_virtual_gateway: {
        value: cdktf.stringToHclTerraform(this._ipv4VirtualGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_virtual_gateway_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv4VirtualGatewayEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_connectivity_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv6ConnectivityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_subnet: {
        value: cdktf.stringToHclTerraform(this._ipv6Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_virtual_gateway: {
        value: cdktf.stringToHclTerraform(this._ipv6VirtualGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_virtual_gateway_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv6VirtualGatewayEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l3_mtu: {
        value: cdktf.numberToHclTerraform(this._l3Mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserve_vlan: {
        value: cdktf.booleanToHclTerraform(this._reserveVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reserved_vlan_id: {
        value: cdktf.numberToHclTerraform(this._reservedVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_zone_id: {
        value: cdktf.stringToHclTerraform(this._routingZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vni: {
        value: cdktf.numberToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
