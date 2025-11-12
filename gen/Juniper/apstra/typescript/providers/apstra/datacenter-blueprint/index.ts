// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterBlueprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * The anti-affinity policy has three modes:
  * 	* `disabled` (default) - ports selection is based on assigned interface maps and interface names (provided or auto-assigned). Port breakouts could terminate on the same physical ports.
  * 	* `enabled_loose` - controls interface names that were not defined by the user. Does not control or override user-defined cabling. (If you haven't explicitly assigned any interface names, loose and strict are effectively the same policy.)
  * 	* `enabled_strict` - completely controls port distribution and could override user-defined assignments. When you enable the strict policy, a statement appears at the top of the cabling map (Staged/Active > Physical > Links and Staged/Active > Physical > Topology Selection) stating that the anti-affinity policy is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#anti_affinity_mode DatacenterBlueprint#anti_affinity_mode}
  */
  readonly antiAffinityMode?: string;
  /**
  * When designing high availability (HA) systems, you want parallel links between two devices to terminate on different physical ports, thus avoiding transceiver failures from impacting both links on a device. Depending on the number of interfaces on a system, manually modifying these links could be time-consuming. With the anti-affinity policy you can apply certain constraints to the cabling map to control automatic port assignments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#anti_affinity_policy DatacenterBlueprint#anti_affinity_policy}
  */
  readonly antiAffinityPolicy?: DatacenterBlueprintAntiAffinityPolicy;
  /**
  * Default L3 MTU for IP links to generic systems. A null or empty value implies AOS will not render explicit MTU value and system defaults will be used. Should be an even number between 1280 and 9216.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#default_ip_links_to_generic_mtu DatacenterBlueprint#default_ip_links_to_generic_mtu}
  */
  readonly defaultIpLinksToGenericMtu?: number;
  /**
  * Default L3 MTU for SVI interfaces. Should be an even number between 1280 and 9216.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#default_svi_l3_mtu DatacenterBlueprint#default_svi_l3_mtu}
  */
  readonly defaultSviL3Mtu?: number;
  /**
  * ESI MAC address most significant byte. Must be an even number between 0 and 254 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#esi_mac_msb DatacenterBlueprint#esi_mac_msb}
  */
  readonly esiMacMsb?: number;
  /**
  * When `true`, all EVPN VTEPs in the fabric will redistribute ARP/IPV6 ND (when possible on NOS type) as EVPN type 5 /32 routes in the routing table. Currently, this option is only certified for Juniper Junos. FRR (SONiC) does this implicitly and cannot be disabled. This setting will be ignored. On Arista and Cisco, no configuration is rendered and will result in a Blueprint warning that it is not supported by AOS. This value is disabled by default, as it generates a very large number of routes in the BGP routing table and takes large amounts of TCAM. When these /32 & /128 routes are generated, they enable direct unicast routing to host destinations on VNIs that are not stretched to the ingress VTEP, and avoid a route lookup to a subnet (eg, /24) that may be hosted on many leafs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#evpn_type_5_routes DatacenterBlueprint#evpn_type_5_routes}
  */
  readonly evpnType5Routes?: boolean | cdktf.IResolvable;
  /**
  * Addressing scheme for both superspine/spine and spine/leaf links. Must be one of: ipv4, ipv6, ipv4_ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#fabric_addressing DatacenterBlueprint#fabric_addressing}
  */
  readonly fabricAddressing?: string;
  /**
  * MTU of fabric links. Must be an even number between 1280 and 9216.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#fabric_mtu DatacenterBlueprint#fabric_mtu}
  */
  readonly fabricMtu?: number;
  /**
  * Enables support for IPv6 virtual networks and IPv6 external connectivity points. This adds resource requirements and device configurations, including IPv6 loopback addresses on leafs, spines and superspines, IPv6 addresses for MLAG SVI subnets and IPv6 addresses for leaf L3 peer links. This option cannot be disabled without re-creating the Blueprint. Applies only to EVPN blueprints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#ipv6_applications DatacenterBlueprint#ipv6_applications}
  */
  readonly ipv6Applications?: boolean | cdktf.IResolvable;
  /**
  * **Changing this value will result in a disruptive restart of the PFE.** Enables configuring the maximum number of nexthops and interface numbers reserved for use in EVPN-VXLAN overlay network on Junos leaf devices. AOS default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#junos_evpn_max_nexthop_and_interface_number DatacenterBlueprint#junos_evpn_max_nexthop_and_interface_number}
  */
  readonly junosEvpnMaxNexthopAndInterfaceNumber?: boolean | cdktf.IResolvable;
  /**
  * In releases before 4.2, Apstra used a single default switch instance as the configuration model for Junos. In Apstra 4.2, Apstra transitioned to using MAC-VRF for all new blueprints and normalized the configuration of Junos to Junos Evolved. This option allows you to transition Junos devices to the MAC-VRF configuration model for any blueprints deployed before the 4.2 release. All models use the VLAN-Aware service type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#junos_evpn_routing_instance_mode_mac_vrf DatacenterBlueprint#junos_evpn_routing_instance_mode_mac_vrf}
  */
  readonly junosEvpnRoutingInstanceModeMacVrf?: boolean | cdktf.IResolvable;
  /**
  * **Changing this value will result in a disruptive restart of the PFE on EX-series devices.** When `true,`VXLAN Overlay ECMP will be enabled on Junos EX-series devices. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#junos_ex_overlay_ecmp DatacenterBlueprint#junos_ex_overlay_ecmp}
  */
  readonly junosExOverlayEcmp?: boolean | cdktf.IResolvable;
  /**
  * **Changing this value may result in a flap of all BGP sessions as the sessions are re-negotiated.** When `true`, the bgp graceful restart feature is enabled on Junos devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#junos_graceful_restart DatacenterBlueprint#junos_graceful_restart}
  */
  readonly junosGracefulRestart?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of EVPN routes to accept on Leaf Switches. A positive integer will be rendered into the device BGP configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered into the BGP configuration (default device behavior).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#max_evpn_routes_count DatacenterBlueprint#max_evpn_routes_count}
  */
  readonly maxEvpnRoutesCount?: number;
  /**
  * Maximum number of routes to accept from external routers. A positive integer will be rendered into the device BGP configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered into the BGP configuration (default device behavior).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#max_external_routes_count DatacenterBlueprint#max_external_routes_count}
  */
  readonly maxExternalRoutesCount?: number;
  /**
  * Maximum number of underlay routes permitted between fabric nodes. A positive integer will be rendered into the device BGP configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered into the BGP configuration (default device behavior).Setting this option may be required in the event of leaking EVPN routes from a Security Zone into the default Security Zone (VRF) which may generate a large number of /32 and /128 routes. It is suggested that this value be effectively unlimited on all Blueprints to ensure BGP stability in the underlay. Unlimited is also suggested for non-EVPN Blueprints considering the impact to traffic if spine-leaf sessions go offline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#max_fabric_routes_count DatacenterBlueprint#max_fabric_routes_count}
  */
  readonly maxFabricRoutesCount?: number;
  /**
  * Maximum number of routes to accept between MLAG peers. A positive integer will be rendered into the device BGP configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered into the BGP configuration (default device behavior).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#max_mlag_routes_count DatacenterBlueprint#max_mlag_routes_count}
  */
  readonly maxMlagRoutesCount?: number;
  /**
  * Blueprint name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#name DatacenterBlueprint#name}
  */
  readonly name: string;
  /**
  * When `true`: routing zones will not be rendered on leafs where they are not required, resulting in less resource consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#optimize_routing_zone_footprint DatacenterBlueprint#optimize_routing_zone_footprint}
  */
  readonly optimizeRoutingZoneFootprint?: boolean | cdktf.IResolvable;
  /**
  * ID of Rack Based Template used to instantiate the Blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#template_id DatacenterBlueprint#template_id}
  */
  readonly templateId: string;
}
export interface DatacenterBlueprintAntiAffinityPolicy {
  /**
  * Maximum total number of links connected to the interfaces of the specific port regardless of the system they are targeted to. It controls how many links can be connected to one port in one system. Example: Several transformations of one port. In this case, it controls how many transformations can be used in links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#max_links_count_per_port DatacenterBlueprint#max_links_count_per_port}
  */
  readonly maxLinksCountPerPort?: number;
  /**
  * Maximum total number of links connected to ports/interfaces of the specified slot regardless of the systemthey are targeted to. It controls how many links can be connected to one slot of one system. Example: A line card slot in a chassis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#max_links_count_per_slot DatacenterBlueprint#max_links_count_per_slot}
  */
  readonly maxLinksCountPerSlot?: number;
  /**
  * Restricts the number of interfaces on a port used to connect to a certain system. It controls how many links can be connected from one system to one port of another system. This is the one that you will most likely use, for port breakouts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#max_links_count_per_system_per_port DatacenterBlueprint#max_links_count_per_system_per_port}
  */
  readonly maxLinksCountPerSystemPerPort?: number;
  /**
  * Restricts the number of links to a certain system connected to the ports/interfaces in a specific slot. It controls how many links can be connected to one system to one slot of another system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#max_links_count_per_system_per_slot DatacenterBlueprint#max_links_count_per_system_per_slot}
  */
  readonly maxLinksCountPerSystemPerSlot?: number;
}

export function datacenterBlueprintAntiAffinityPolicyToTerraform(struct?: DatacenterBlueprintAntiAffinityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_links_count_per_port: cdktf.numberToTerraform(struct!.maxLinksCountPerPort),
    max_links_count_per_slot: cdktf.numberToTerraform(struct!.maxLinksCountPerSlot),
    max_links_count_per_system_per_port: cdktf.numberToTerraform(struct!.maxLinksCountPerSystemPerPort),
    max_links_count_per_system_per_slot: cdktf.numberToTerraform(struct!.maxLinksCountPerSystemPerSlot),
  }
}


export function datacenterBlueprintAntiAffinityPolicyToHclTerraform(struct?: DatacenterBlueprintAntiAffinityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_links_count_per_port: {
      value: cdktf.numberToHclTerraform(struct!.maxLinksCountPerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_links_count_per_slot: {
      value: cdktf.numberToHclTerraform(struct!.maxLinksCountPerSlot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_links_count_per_system_per_port: {
      value: cdktf.numberToHclTerraform(struct!.maxLinksCountPerSystemPerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_links_count_per_system_per_slot: {
      value: cdktf.numberToHclTerraform(struct!.maxLinksCountPerSystemPerSlot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterBlueprintAntiAffinityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatacenterBlueprintAntiAffinityPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLinksCountPerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLinksCountPerPort = this._maxLinksCountPerPort;
    }
    if (this._maxLinksCountPerSlot !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLinksCountPerSlot = this._maxLinksCountPerSlot;
    }
    if (this._maxLinksCountPerSystemPerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLinksCountPerSystemPerPort = this._maxLinksCountPerSystemPerPort;
    }
    if (this._maxLinksCountPerSystemPerSlot !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLinksCountPerSystemPerSlot = this._maxLinksCountPerSystemPerSlot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterBlueprintAntiAffinityPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxLinksCountPerPort = undefined;
      this._maxLinksCountPerSlot = undefined;
      this._maxLinksCountPerSystemPerPort = undefined;
      this._maxLinksCountPerSystemPerSlot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxLinksCountPerPort = value.maxLinksCountPerPort;
      this._maxLinksCountPerSlot = value.maxLinksCountPerSlot;
      this._maxLinksCountPerSystemPerPort = value.maxLinksCountPerSystemPerPort;
      this._maxLinksCountPerSystemPerSlot = value.maxLinksCountPerSystemPerSlot;
    }
  }

  // max_links_count_per_port - computed: true, optional: true, required: false
  private _maxLinksCountPerPort?: number; 
  public get maxLinksCountPerPort() {
    return this.getNumberAttribute('max_links_count_per_port');
  }
  public set maxLinksCountPerPort(value: number) {
    this._maxLinksCountPerPort = value;
  }
  public resetMaxLinksCountPerPort() {
    this._maxLinksCountPerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinksCountPerPortInput() {
    return this._maxLinksCountPerPort;
  }

  // max_links_count_per_slot - computed: true, optional: true, required: false
  private _maxLinksCountPerSlot?: number; 
  public get maxLinksCountPerSlot() {
    return this.getNumberAttribute('max_links_count_per_slot');
  }
  public set maxLinksCountPerSlot(value: number) {
    this._maxLinksCountPerSlot = value;
  }
  public resetMaxLinksCountPerSlot() {
    this._maxLinksCountPerSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinksCountPerSlotInput() {
    return this._maxLinksCountPerSlot;
  }

  // max_links_count_per_system_per_port - computed: true, optional: true, required: false
  private _maxLinksCountPerSystemPerPort?: number; 
  public get maxLinksCountPerSystemPerPort() {
    return this.getNumberAttribute('max_links_count_per_system_per_port');
  }
  public set maxLinksCountPerSystemPerPort(value: number) {
    this._maxLinksCountPerSystemPerPort = value;
  }
  public resetMaxLinksCountPerSystemPerPort() {
    this._maxLinksCountPerSystemPerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinksCountPerSystemPerPortInput() {
    return this._maxLinksCountPerSystemPerPort;
  }

  // max_links_count_per_system_per_slot - computed: true, optional: true, required: false
  private _maxLinksCountPerSystemPerSlot?: number; 
  public get maxLinksCountPerSystemPerSlot() {
    return this.getNumberAttribute('max_links_count_per_system_per_slot');
  }
  public set maxLinksCountPerSystemPerSlot(value: number) {
    this._maxLinksCountPerSystemPerSlot = value;
  }
  public resetMaxLinksCountPerSystemPerSlot() {
    this._maxLinksCountPerSystemPerSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinksCountPerSystemPerSlotInput() {
    return this._maxLinksCountPerSystemPerSlot;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint apstra_datacenter_blueprint}
*/
export class DatacenterBlueprint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_blueprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterBlueprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterBlueprint to import
  * @param importFromId The id of the existing DatacenterBlueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterBlueprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_blueprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_blueprint apstra_datacenter_blueprint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterBlueprintConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterBlueprintConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_blueprint',
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
    this._antiAffinityMode = config.antiAffinityMode;
    this._antiAffinityPolicy.internalValue = config.antiAffinityPolicy;
    this._defaultIpLinksToGenericMtu = config.defaultIpLinksToGenericMtu;
    this._defaultSviL3Mtu = config.defaultSviL3Mtu;
    this._esiMacMsb = config.esiMacMsb;
    this._evpnType5Routes = config.evpnType5Routes;
    this._fabricAddressing = config.fabricAddressing;
    this._fabricMtu = config.fabricMtu;
    this._ipv6Applications = config.ipv6Applications;
    this._junosEvpnMaxNexthopAndInterfaceNumber = config.junosEvpnMaxNexthopAndInterfaceNumber;
    this._junosEvpnRoutingInstanceModeMacVrf = config.junosEvpnRoutingInstanceModeMacVrf;
    this._junosExOverlayEcmp = config.junosExOverlayEcmp;
    this._junosGracefulRestart = config.junosGracefulRestart;
    this._maxEvpnRoutesCount = config.maxEvpnRoutesCount;
    this._maxExternalRoutesCount = config.maxExternalRoutesCount;
    this._maxFabricRoutesCount = config.maxFabricRoutesCount;
    this._maxMlagRoutesCount = config.maxMlagRoutesCount;
    this._name = config.name;
    this._optimizeRoutingZoneFootprint = config.optimizeRoutingZoneFootprint;
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_switch_count - computed: true, optional: false, required: false
  public get accessSwitchCount() {
    return this.getNumberAttribute('access_switch_count');
  }

  // anti_affinity_mode - computed: true, optional: true, required: false
  private _antiAffinityMode?: string; 
  public get antiAffinityMode() {
    return this.getStringAttribute('anti_affinity_mode');
  }
  public set antiAffinityMode(value: string) {
    this._antiAffinityMode = value;
  }
  public resetAntiAffinityMode() {
    this._antiAffinityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityModeInput() {
    return this._antiAffinityMode;
  }

  // anti_affinity_policy - computed: true, optional: true, required: false
  private _antiAffinityPolicy = new DatacenterBlueprintAntiAffinityPolicyOutputReference(this, "anti_affinity_policy");
  public get antiAffinityPolicy() {
    return this._antiAffinityPolicy;
  }
  public putAntiAffinityPolicy(value: DatacenterBlueprintAntiAffinityPolicy) {
    this._antiAffinityPolicy.internalValue = value;
  }
  public resetAntiAffinityPolicy() {
    this._antiAffinityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityPolicyInput() {
    return this._antiAffinityPolicy.internalValue;
  }

  // build_errors_count - computed: true, optional: false, required: false
  public get buildErrorsCount() {
    return this.getNumberAttribute('build_errors_count');
  }

  // build_warnings_count - computed: true, optional: false, required: false
  public get buildWarningsCount() {
    return this.getNumberAttribute('build_warnings_count');
  }

  // default_ip_links_to_generic_mtu - computed: true, optional: true, required: false
  private _defaultIpLinksToGenericMtu?: number; 
  public get defaultIpLinksToGenericMtu() {
    return this.getNumberAttribute('default_ip_links_to_generic_mtu');
  }
  public set defaultIpLinksToGenericMtu(value: number) {
    this._defaultIpLinksToGenericMtu = value;
  }
  public resetDefaultIpLinksToGenericMtu() {
    this._defaultIpLinksToGenericMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIpLinksToGenericMtuInput() {
    return this._defaultIpLinksToGenericMtu;
  }

  // default_svi_l3_mtu - computed: true, optional: true, required: false
  private _defaultSviL3Mtu?: number; 
  public get defaultSviL3Mtu() {
    return this.getNumberAttribute('default_svi_l3_mtu');
  }
  public set defaultSviL3Mtu(value: number) {
    this._defaultSviL3Mtu = value;
  }
  public resetDefaultSviL3Mtu() {
    this._defaultSviL3Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSviL3MtuInput() {
    return this._defaultSviL3Mtu;
  }

  // esi_mac_msb - computed: true, optional: true, required: false
  private _esiMacMsb?: number; 
  public get esiMacMsb() {
    return this.getNumberAttribute('esi_mac_msb');
  }
  public set esiMacMsb(value: number) {
    this._esiMacMsb = value;
  }
  public resetEsiMacMsb() {
    this._esiMacMsb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esiMacMsbInput() {
    return this._esiMacMsb;
  }

  // evpn_type_5_routes - computed: true, optional: true, required: false
  private _evpnType5Routes?: boolean | cdktf.IResolvable; 
  public get evpnType5Routes() {
    return this.getBooleanAttribute('evpn_type_5_routes');
  }
  public set evpnType5Routes(value: boolean | cdktf.IResolvable) {
    this._evpnType5Routes = value;
  }
  public resetEvpnType5Routes() {
    this._evpnType5Routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnType5RoutesInput() {
    return this._evpnType5Routes;
  }

  // external_router_count - computed: true, optional: false, required: false
  public get externalRouterCount() {
    return this.getNumberAttribute('external_router_count');
  }

  // fabric_addressing - computed: false, optional: true, required: false
  private _fabricAddressing?: string; 
  public get fabricAddressing() {
    return this.getStringAttribute('fabric_addressing');
  }
  public set fabricAddressing(value: string) {
    this._fabricAddressing = value;
  }
  public resetFabricAddressing() {
    this._fabricAddressing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricAddressingInput() {
    return this._fabricAddressing;
  }

  // fabric_mtu - computed: true, optional: true, required: false
  private _fabricMtu?: number; 
  public get fabricMtu() {
    return this.getNumberAttribute('fabric_mtu');
  }
  public set fabricMtu(value: number) {
    this._fabricMtu = value;
  }
  public resetFabricMtu() {
    this._fabricMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricMtuInput() {
    return this._fabricMtu;
  }

  // generic_system_count - computed: true, optional: false, required: false
  public get genericSystemCount() {
    return this.getNumberAttribute('generic_system_count');
  }

  // has_uncommitted_changes - computed: true, optional: false, required: false
  public get hasUncommittedChanges() {
    return this.getBooleanAttribute('has_uncommitted_changes');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_applications - computed: true, optional: true, required: false
  private _ipv6Applications?: boolean | cdktf.IResolvable; 
  public get ipv6Applications() {
    return this.getBooleanAttribute('ipv6_applications');
  }
  public set ipv6Applications(value: boolean | cdktf.IResolvable) {
    this._ipv6Applications = value;
  }
  public resetIpv6Applications() {
    this._ipv6Applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ApplicationsInput() {
    return this._ipv6Applications;
  }

  // junos_evpn_max_nexthop_and_interface_number - computed: true, optional: true, required: false
  private _junosEvpnMaxNexthopAndInterfaceNumber?: boolean | cdktf.IResolvable; 
  public get junosEvpnMaxNexthopAndInterfaceNumber() {
    return this.getBooleanAttribute('junos_evpn_max_nexthop_and_interface_number');
  }
  public set junosEvpnMaxNexthopAndInterfaceNumber(value: boolean | cdktf.IResolvable) {
    this._junosEvpnMaxNexthopAndInterfaceNumber = value;
  }
  public resetJunosEvpnMaxNexthopAndInterfaceNumber() {
    this._junosEvpnMaxNexthopAndInterfaceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junosEvpnMaxNexthopAndInterfaceNumberInput() {
    return this._junosEvpnMaxNexthopAndInterfaceNumber;
  }

  // junos_evpn_routing_instance_mode_mac_vrf - computed: true, optional: true, required: false
  private _junosEvpnRoutingInstanceModeMacVrf?: boolean | cdktf.IResolvable; 
  public get junosEvpnRoutingInstanceModeMacVrf() {
    return this.getBooleanAttribute('junos_evpn_routing_instance_mode_mac_vrf');
  }
  public set junosEvpnRoutingInstanceModeMacVrf(value: boolean | cdktf.IResolvable) {
    this._junosEvpnRoutingInstanceModeMacVrf = value;
  }
  public resetJunosEvpnRoutingInstanceModeMacVrf() {
    this._junosEvpnRoutingInstanceModeMacVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junosEvpnRoutingInstanceModeMacVrfInput() {
    return this._junosEvpnRoutingInstanceModeMacVrf;
  }

  // junos_ex_overlay_ecmp - computed: true, optional: true, required: false
  private _junosExOverlayEcmp?: boolean | cdktf.IResolvable; 
  public get junosExOverlayEcmp() {
    return this.getBooleanAttribute('junos_ex_overlay_ecmp');
  }
  public set junosExOverlayEcmp(value: boolean | cdktf.IResolvable) {
    this._junosExOverlayEcmp = value;
  }
  public resetJunosExOverlayEcmp() {
    this._junosExOverlayEcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junosExOverlayEcmpInput() {
    return this._junosExOverlayEcmp;
  }

  // junos_graceful_restart - computed: true, optional: true, required: false
  private _junosGracefulRestart?: boolean | cdktf.IResolvable; 
  public get junosGracefulRestart() {
    return this.getBooleanAttribute('junos_graceful_restart');
  }
  public set junosGracefulRestart(value: boolean | cdktf.IResolvable) {
    this._junosGracefulRestart = value;
  }
  public resetJunosGracefulRestart() {
    this._junosGracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junosGracefulRestartInput() {
    return this._junosGracefulRestart;
  }

  // leaf_switch_count - computed: true, optional: false, required: false
  public get leafSwitchCount() {
    return this.getNumberAttribute('leaf_switch_count');
  }

  // max_evpn_routes_count - computed: true, optional: true, required: false
  private _maxEvpnRoutesCount?: number; 
  public get maxEvpnRoutesCount() {
    return this.getNumberAttribute('max_evpn_routes_count');
  }
  public set maxEvpnRoutesCount(value: number) {
    this._maxEvpnRoutesCount = value;
  }
  public resetMaxEvpnRoutesCount() {
    this._maxEvpnRoutesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEvpnRoutesCountInput() {
    return this._maxEvpnRoutesCount;
  }

  // max_external_routes_count - computed: true, optional: true, required: false
  private _maxExternalRoutesCount?: number; 
  public get maxExternalRoutesCount() {
    return this.getNumberAttribute('max_external_routes_count');
  }
  public set maxExternalRoutesCount(value: number) {
    this._maxExternalRoutesCount = value;
  }
  public resetMaxExternalRoutesCount() {
    this._maxExternalRoutesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExternalRoutesCountInput() {
    return this._maxExternalRoutesCount;
  }

  // max_fabric_routes_count - computed: true, optional: true, required: false
  private _maxFabricRoutesCount?: number; 
  public get maxFabricRoutesCount() {
    return this.getNumberAttribute('max_fabric_routes_count');
  }
  public set maxFabricRoutesCount(value: number) {
    this._maxFabricRoutesCount = value;
  }
  public resetMaxFabricRoutesCount() {
    this._maxFabricRoutesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFabricRoutesCountInput() {
    return this._maxFabricRoutesCount;
  }

  // max_mlag_routes_count - computed: true, optional: true, required: false
  private _maxMlagRoutesCount?: number; 
  public get maxMlagRoutesCount() {
    return this.getNumberAttribute('max_mlag_routes_count');
  }
  public set maxMlagRoutesCount(value: number) {
    this._maxMlagRoutesCount = value;
  }
  public resetMaxMlagRoutesCount() {
    this._maxMlagRoutesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMlagRoutesCountInput() {
    return this._maxMlagRoutesCount;
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

  // optimize_routing_zone_footprint - computed: true, optional: true, required: false
  private _optimizeRoutingZoneFootprint?: boolean | cdktf.IResolvable; 
  public get optimizeRoutingZoneFootprint() {
    return this.getBooleanAttribute('optimize_routing_zone_footprint');
  }
  public set optimizeRoutingZoneFootprint(value: boolean | cdktf.IResolvable) {
    this._optimizeRoutingZoneFootprint = value;
  }
  public resetOptimizeRoutingZoneFootprint() {
    this._optimizeRoutingZoneFootprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizeRoutingZoneFootprintInput() {
    return this._optimizeRoutingZoneFootprint;
  }

  // spine_switch_count - computed: true, optional: false, required: false
  public get spineSwitchCount() {
    return this.getNumberAttribute('spine_switch_count');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // superspine_switch_count - computed: true, optional: false, required: false
  public get superspineSwitchCount() {
    return this.getNumberAttribute('superspine_switch_count');
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_affinity_mode: cdktf.stringToTerraform(this._antiAffinityMode),
      anti_affinity_policy: datacenterBlueprintAntiAffinityPolicyToTerraform(this._antiAffinityPolicy.internalValue),
      default_ip_links_to_generic_mtu: cdktf.numberToTerraform(this._defaultIpLinksToGenericMtu),
      default_svi_l3_mtu: cdktf.numberToTerraform(this._defaultSviL3Mtu),
      esi_mac_msb: cdktf.numberToTerraform(this._esiMacMsb),
      evpn_type_5_routes: cdktf.booleanToTerraform(this._evpnType5Routes),
      fabric_addressing: cdktf.stringToTerraform(this._fabricAddressing),
      fabric_mtu: cdktf.numberToTerraform(this._fabricMtu),
      ipv6_applications: cdktf.booleanToTerraform(this._ipv6Applications),
      junos_evpn_max_nexthop_and_interface_number: cdktf.booleanToTerraform(this._junosEvpnMaxNexthopAndInterfaceNumber),
      junos_evpn_routing_instance_mode_mac_vrf: cdktf.booleanToTerraform(this._junosEvpnRoutingInstanceModeMacVrf),
      junos_ex_overlay_ecmp: cdktf.booleanToTerraform(this._junosExOverlayEcmp),
      junos_graceful_restart: cdktf.booleanToTerraform(this._junosGracefulRestart),
      max_evpn_routes_count: cdktf.numberToTerraform(this._maxEvpnRoutesCount),
      max_external_routes_count: cdktf.numberToTerraform(this._maxExternalRoutesCount),
      max_fabric_routes_count: cdktf.numberToTerraform(this._maxFabricRoutesCount),
      max_mlag_routes_count: cdktf.numberToTerraform(this._maxMlagRoutesCount),
      name: cdktf.stringToTerraform(this._name),
      optimize_routing_zone_footprint: cdktf.booleanToTerraform(this._optimizeRoutingZoneFootprint),
      template_id: cdktf.stringToTerraform(this._templateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_affinity_mode: {
        value: cdktf.stringToHclTerraform(this._antiAffinityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anti_affinity_policy: {
        value: datacenterBlueprintAntiAffinityPolicyToHclTerraform(this._antiAffinityPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatacenterBlueprintAntiAffinityPolicy",
      },
      default_ip_links_to_generic_mtu: {
        value: cdktf.numberToHclTerraform(this._defaultIpLinksToGenericMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_svi_l3_mtu: {
        value: cdktf.numberToHclTerraform(this._defaultSviL3Mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      esi_mac_msb: {
        value: cdktf.numberToHclTerraform(this._esiMacMsb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      evpn_type_5_routes: {
        value: cdktf.booleanToHclTerraform(this._evpnType5Routes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fabric_addressing: {
        value: cdktf.stringToHclTerraform(this._fabricAddressing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_mtu: {
        value: cdktf.numberToHclTerraform(this._fabricMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_applications: {
        value: cdktf.booleanToHclTerraform(this._ipv6Applications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      junos_evpn_max_nexthop_and_interface_number: {
        value: cdktf.booleanToHclTerraform(this._junosEvpnMaxNexthopAndInterfaceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      junos_evpn_routing_instance_mode_mac_vrf: {
        value: cdktf.booleanToHclTerraform(this._junosEvpnRoutingInstanceModeMacVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      junos_ex_overlay_ecmp: {
        value: cdktf.booleanToHclTerraform(this._junosExOverlayEcmp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      junos_graceful_restart: {
        value: cdktf.booleanToHclTerraform(this._junosGracefulRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_evpn_routes_count: {
        value: cdktf.numberToHclTerraform(this._maxEvpnRoutesCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_external_routes_count: {
        value: cdktf.numberToHclTerraform(this._maxExternalRoutesCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_fabric_routes_count: {
        value: cdktf.numberToHclTerraform(this._maxFabricRoutesCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_mlag_routes_count: {
        value: cdktf.numberToHclTerraform(this._maxMlagRoutesCount),
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
      optimize_routing_zone_footprint: {
        value: cdktf.booleanToHclTerraform(this._optimizeRoutingZoneFootprint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
