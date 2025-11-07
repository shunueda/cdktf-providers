// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_blueprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterBlueprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Blueprint. Required when `name` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_blueprint#id DataApstraDatacenterBlueprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of routes to accept between MLAG peers. A positive integer value indicates the route limit being rendered into to the device BGP configuration as a maximum limit. A zero indicates that a `0` is being rendered into the same line of configuration, resulting in platform-specific behavior: Eitehr *unlimited routes* are permitted, or *no routes* are permitted, depending on the NOS in use. When `null`, Apstra is rendering no maximum value into the configuration, so NOS default is being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_blueprint#max_mlag_routes_count DataApstraDatacenterBlueprint#max_mlag_routes_count}
  */
  readonly maxMlagRoutesCount?: number;
  /**
  * Name of the Blueprint. Required when `id` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_blueprint#name DataApstraDatacenterBlueprint#name}
  */
  readonly name?: string;
}
export interface DataApstraDatacenterBlueprintAntiAffinityPolicy {
}

export function dataApstraDatacenterBlueprintAntiAffinityPolicyToTerraform(struct?: DataApstraDatacenterBlueprintAntiAffinityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraDatacenterBlueprintAntiAffinityPolicyToHclTerraform(struct?: DataApstraDatacenterBlueprintAntiAffinityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraDatacenterBlueprintAntiAffinityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraDatacenterBlueprintAntiAffinityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterBlueprintAntiAffinityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_links_count_per_port - computed: true, optional: false, required: false
  public get maxLinksCountPerPort() {
    return this.getNumberAttribute('max_links_count_per_port');
  }

  // max_links_count_per_slot - computed: true, optional: false, required: false
  public get maxLinksCountPerSlot() {
    return this.getNumberAttribute('max_links_count_per_slot');
  }

  // max_links_count_per_system_per_port - computed: true, optional: false, required: false
  public get maxLinksCountPerSystemPerPort() {
    return this.getNumberAttribute('max_links_count_per_system_per_port');
  }

  // max_links_count_per_system_per_slot - computed: true, optional: false, required: false
  public get maxLinksCountPerSystemPerSlot() {
    return this.getNumberAttribute('max_links_count_per_system_per_slot');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_blueprint apstra_datacenter_blueprint}
*/
export class DataApstraDatacenterBlueprint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_blueprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterBlueprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterBlueprint to import
  * @param importFromId The id of the existing DataApstraDatacenterBlueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_blueprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterBlueprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_blueprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_blueprint apstra_datacenter_blueprint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterBlueprintConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterBlueprintConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_blueprint',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
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
    this._maxMlagRoutesCount = config.maxMlagRoutesCount;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_switch_count - computed: true, optional: false, required: false
  public get accessSwitchCount() {
    return this.getNumberAttribute('access_switch_count');
  }

  // anti_affinity_mode - computed: true, optional: false, required: false
  public get antiAffinityMode() {
    return this.getStringAttribute('anti_affinity_mode');
  }

  // anti_affinity_policy - computed: true, optional: false, required: false
  private _antiAffinityPolicy = new DataApstraDatacenterBlueprintAntiAffinityPolicyOutputReference(this, "anti_affinity_policy");
  public get antiAffinityPolicy() {
    return this._antiAffinityPolicy;
  }

  // build_errors_count - computed: true, optional: false, required: false
  public get buildErrorsCount() {
    return this.getNumberAttribute('build_errors_count');
  }

  // build_warnings_count - computed: true, optional: false, required: false
  public get buildWarningsCount() {
    return this.getNumberAttribute('build_warnings_count');
  }

  // default_ip_links_to_generic_mtu - computed: true, optional: false, required: false
  public get defaultIpLinksToGenericMtu() {
    return this.getNumberAttribute('default_ip_links_to_generic_mtu');
  }

  // default_svi_l3_mtu - computed: true, optional: false, required: false
  public get defaultSviL3Mtu() {
    return this.getNumberAttribute('default_svi_l3_mtu');
  }

  // esi_mac_msb - computed: true, optional: false, required: false
  public get esiMacMsb() {
    return this.getNumberAttribute('esi_mac_msb');
  }

  // evpn_type_5_routes - computed: true, optional: false, required: false
  public get evpnType5Routes() {
    return this.getBooleanAttribute('evpn_type_5_routes');
  }

  // external_router_count - computed: true, optional: false, required: false
  public get externalRouterCount() {
    return this.getNumberAttribute('external_router_count');
  }

  // fabric_addressing - computed: true, optional: false, required: false
  public get fabricAddressing() {
    return this.getStringAttribute('fabric_addressing');
  }

  // fabric_mtu - computed: true, optional: false, required: false
  public get fabricMtu() {
    return this.getNumberAttribute('fabric_mtu');
  }

  // generic_system_count - computed: true, optional: false, required: false
  public get genericSystemCount() {
    return this.getNumberAttribute('generic_system_count');
  }

  // has_uncommitted_changes - computed: true, optional: false, required: false
  public get hasUncommittedChanges() {
    return this.getBooleanAttribute('has_uncommitted_changes');
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

  // ipv6_applications - computed: true, optional: false, required: false
  public get ipv6Applications() {
    return this.getBooleanAttribute('ipv6_applications');
  }

  // junos_evpn_max_nexthop_and_interface_number - computed: true, optional: false, required: false
  public get junosEvpnMaxNexthopAndInterfaceNumber() {
    return this.getBooleanAttribute('junos_evpn_max_nexthop_and_interface_number');
  }

  // junos_evpn_routing_instance_mode_mac_vrf - computed: true, optional: false, required: false
  public get junosEvpnRoutingInstanceModeMacVrf() {
    return this.getBooleanAttribute('junos_evpn_routing_instance_mode_mac_vrf');
  }

  // junos_ex_overlay_ecmp - computed: true, optional: false, required: false
  public get junosExOverlayEcmp() {
    return this.getBooleanAttribute('junos_ex_overlay_ecmp');
  }

  // junos_graceful_restart - computed: true, optional: false, required: false
  public get junosGracefulRestart() {
    return this.getBooleanAttribute('junos_graceful_restart');
  }

  // leaf_switch_count - computed: true, optional: false, required: false
  public get leafSwitchCount() {
    return this.getNumberAttribute('leaf_switch_count');
  }

  // max_evpn_routes_count - computed: true, optional: false, required: false
  public get maxEvpnRoutesCount() {
    return this.getNumberAttribute('max_evpn_routes_count');
  }

  // max_external_routes_count - computed: true, optional: false, required: false
  public get maxExternalRoutesCount() {
    return this.getNumberAttribute('max_external_routes_count');
  }

  // max_fabric_routes_count - computed: true, optional: false, required: false
  public get maxFabricRoutesCount() {
    return this.getNumberAttribute('max_fabric_routes_count');
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

  // optimize_routing_zone_footprint - computed: true, optional: false, required: false
  public get optimizeRoutingZoneFootprint() {
    return this.getBooleanAttribute('optimize_routing_zone_footprint');
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

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
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
      id: cdktf.stringToTerraform(this._id),
      max_mlag_routes_count: cdktf.numberToTerraform(this._maxMlagRoutesCount),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
