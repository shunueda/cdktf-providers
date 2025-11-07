// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterBgpNeighborGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * bgp as-number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_group#as_number DataIosxrRouterBgpNeighborGroup#as_number}
  */
  readonly asNumber: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_group#device DataIosxrRouterBgpNeighborGroup#device}
  */
  readonly device?: string;
  /**
  * Neighbor-group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_group#name DataIosxrRouterBgpNeighborGroup#name}
  */
  readonly name: string;
}
export interface DataIosxrRouterBgpNeighborGroupAddressFamilies {
}

export function dataIosxrRouterBgpNeighborGroupAddressFamiliesToTerraform(struct?: DataIosxrRouterBgpNeighborGroupAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterBgpNeighborGroupAddressFamiliesToHclTerraform(struct?: DataIosxrRouterBgpNeighborGroupAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterBgpNeighborGroupAddressFamiliesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxrRouterBgpNeighborGroupAddressFamilies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterBgpNeighborGroupAddressFamilies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // af_name - computed: true, optional: false, required: false
  public get afName() {
    return this.getStringAttribute('af_name');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }

  // next_hop_self_inheritance_disable - computed: true, optional: false, required: false
  public get nextHopSelfInheritanceDisable() {
    return this.getBooleanAttribute('next_hop_self_inheritance_disable');
  }

  // route_policy_in - computed: true, optional: false, required: false
  public get routePolicyIn() {
    return this.getStringAttribute('route_policy_in');
  }

  // route_policy_out - computed: true, optional: false, required: false
  public get routePolicyOut() {
    return this.getStringAttribute('route_policy_out');
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }

  // route_reflector_client_inheritance_disable - computed: true, optional: false, required: false
  public get routeReflectorClientInheritanceDisable() {
    return this.getBooleanAttribute('route_reflector_client_inheritance_disable');
  }

  // soft_reconfiguration_inbound_always - computed: true, optional: false, required: false
  public get softReconfigurationInboundAlways() {
    return this.getBooleanAttribute('soft_reconfiguration_inbound_always');
  }

  // use_af_group - computed: true, optional: false, required: false
  public get useAfGroup() {
    return this.getStringAttribute('use_af_group');
  }
}

export class DataIosxrRouterBgpNeighborGroupAddressFamiliesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterBgpNeighborGroupAddressFamiliesOutputReference {
    return new DataIosxrRouterBgpNeighborGroupAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_group iosxr_router_bgp_neighbor_group}
*/
export class DataIosxrRouterBgpNeighborGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_bgp_neighbor_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterBgpNeighborGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterBgpNeighborGroup to import
  * @param importFromId The id of the existing DataIosxrRouterBgpNeighborGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterBgpNeighborGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_bgp_neighbor_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_group iosxr_router_bgp_neighbor_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterBgpNeighborGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterBgpNeighborGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_bgp_neighbor_group',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asNumber = config.asNumber;
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_families - computed: true, optional: false, required: false
  private _addressFamilies = new DataIosxrRouterBgpNeighborGroupAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }

  // advertisement_interval_milliseconds - computed: true, optional: false, required: false
  public get advertisementIntervalMilliseconds() {
    return this.getNumberAttribute('advertisement_interval_milliseconds');
  }

  // advertisement_interval_seconds - computed: true, optional: false, required: false
  public get advertisementIntervalSeconds() {
    return this.getNumberAttribute('advertisement_interval_seconds');
  }

  // ao_inheritance_disable - computed: true, optional: false, required: false
  public get aoInheritanceDisable() {
    return this.getBooleanAttribute('ao_inheritance_disable');
  }

  // ao_key_chain_accept_mismatch - computed: true, optional: false, required: false
  public get aoKeyChainAcceptMismatch() {
    return this.getBooleanAttribute('ao_key_chain_accept_mismatch');
  }

  // ao_key_chain_include_tcp_options - computed: true, optional: false, required: false
  public get aoKeyChainIncludeTcpOptions() {
    return this.getStringAttribute('ao_key_chain_include_tcp_options');
  }

  // ao_key_chain_name - computed: true, optional: false, required: false
  public get aoKeyChainName() {
    return this.getStringAttribute('ao_key_chain_name');
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: string; 
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
  public set asNumber(value: string) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // bfd_fast_detect - computed: true, optional: false, required: false
  public get bfdFastDetect() {
    return this.getBooleanAttribute('bfd_fast_detect');
  }

  // bfd_fast_detect_disable - computed: true, optional: false, required: false
  public get bfdFastDetectDisable() {
    return this.getBooleanAttribute('bfd_fast_detect_disable');
  }

  // bfd_fast_detect_strict_mode - computed: true, optional: false, required: false
  public get bfdFastDetectStrictMode() {
    return this.getBooleanAttribute('bfd_fast_detect_strict_mode');
  }

  // bfd_minimum_interval - computed: true, optional: false, required: false
  public get bfdMinimumInterval() {
    return this.getNumberAttribute('bfd_minimum_interval');
  }

  // bfd_multiplier - computed: true, optional: false, required: false
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_as - computed: true, optional: false, required: false
  public get localAs() {
    return this.getStringAttribute('local_as');
  }

  // local_as_dual_as - computed: true, optional: false, required: false
  public get localAsDualAs() {
    return this.getBooleanAttribute('local_as_dual_as');
  }

  // local_as_inheritance_disable - computed: true, optional: false, required: false
  public get localAsInheritanceDisable() {
    return this.getBooleanAttribute('local_as_inheritance_disable');
  }

  // local_as_no_prepend - computed: true, optional: false, required: false
  public get localAsNoPrepend() {
    return this.getBooleanAttribute('local_as_no_prepend');
  }

  // local_as_replace_as - computed: true, optional: false, required: false
  public get localAsReplaceAs() {
    return this.getBooleanAttribute('local_as_replace_as');
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_inheritance_disable - computed: true, optional: false, required: false
  public get passwordInheritanceDisable() {
    return this.getBooleanAttribute('password_inheritance_disable');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }

  // timers_holdtime - computed: true, optional: false, required: false
  public get timersHoldtime() {
    return this.getNumberAttribute('timers_holdtime');
  }

  // timers_holdtime_minimum_acceptable_holdtime - computed: true, optional: false, required: false
  public get timersHoldtimeMinimumAcceptableHoldtime() {
    return this.getNumberAttribute('timers_holdtime_minimum_acceptable_holdtime');
  }

  // timers_keepalive_interval - computed: true, optional: false, required: false
  public get timersKeepaliveInterval() {
    return this.getNumberAttribute('timers_keepalive_interval');
  }

  // timers_keepalive_zero - computed: true, optional: false, required: false
  public get timersKeepaliveZero() {
    return this.getBooleanAttribute('timers_keepalive_zero');
  }

  // timers_keepalive_zero_holdtime_zero - computed: true, optional: false, required: false
  public get timersKeepaliveZeroHoldtimeZero() {
    return this.getBooleanAttribute('timers_keepalive_zero_holdtime_zero');
  }

  // timers_keepalive_zero_minimum_acceptable_holdtime - computed: true, optional: false, required: false
  public get timersKeepaliveZeroMinimumAcceptableHoldtime() {
    return this.getNumberAttribute('timers_keepalive_zero_minimum_acceptable_holdtime');
  }

  // update_source - computed: true, optional: false, required: false
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_number: cdktf.stringToTerraform(this._asNumber),
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_number: {
        value: cdktf.stringToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
