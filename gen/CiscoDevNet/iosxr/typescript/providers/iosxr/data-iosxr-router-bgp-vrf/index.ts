// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterBgpVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * bgp as-number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_vrf#as_number DataIosxrRouterBgpVrf#as_number}
  */
  readonly asNumber: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_vrf#device DataIosxrRouterBgpVrf#device}
  */
  readonly device?: string;
  /**
  * VRF name - maximum length 32 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_vrf#vrf_name DataIosxrRouterBgpVrf#vrf_name}
  */
  readonly vrfName: string;
}
export interface DataIosxrRouterBgpVrfNeighbors {
}

export function dataIosxrRouterBgpVrfNeighborsToTerraform(struct?: DataIosxrRouterBgpVrfNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterBgpVrfNeighborsToHclTerraform(struct?: DataIosxrRouterBgpVrfNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterBgpVrfNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterBgpVrfNeighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterBgpVrfNeighbors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // advertisement_interval_milliseconds - computed: true, optional: false, required: false
  public get advertisementIntervalMilliseconds() {
    return this.getNumberAttribute('advertisement_interval_milliseconds');
  }

  // advertisement_interval_seconds - computed: true, optional: false, required: false
  public get advertisementIntervalSeconds() {
    return this.getNumberAttribute('advertisement_interval_seconds');
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

  // ebgp_multihop_maximum_hop_count - computed: true, optional: false, required: false
  public get ebgpMultihopMaximumHopCount() {
    return this.getNumberAttribute('ebgp_multihop_maximum_hop_count');
  }

  // ignore_connected_check - computed: true, optional: false, required: false
  public get ignoreConnectedCheck() {
    return this.getBooleanAttribute('ignore_connected_check');
  }

  // local_as - computed: true, optional: false, required: false
  public get localAs() {
    return this.getStringAttribute('local_as');
  }

  // local_as_inheritance_disable - computed: true, optional: false, required: false
  public get localAsInheritanceDisable() {
    return this.getBooleanAttribute('local_as_inheritance_disable');
  }

  // local_as_no_prepend - computed: true, optional: false, required: false
  public get localAsNoPrepend() {
    return this.getBooleanAttribute('local_as_no_prepend');
  }

  // local_as_no_prepend_replace_as - computed: true, optional: false, required: false
  public get localAsNoPrependReplaceAs() {
    return this.getBooleanAttribute('local_as_no_prepend_replace_as');
  }

  // local_as_no_prepend_replace_as_dual_as - computed: true, optional: false, required: false
  public get localAsNoPrependReplaceAsDualAs() {
    return this.getBooleanAttribute('local_as_no_prepend_replace_as_dual_as');
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

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
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

  // ttl_security - computed: true, optional: false, required: false
  public get ttlSecurity() {
    return this.getBooleanAttribute('ttl_security');
  }

  // update_source - computed: true, optional: false, required: false
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }

  // use_neighbor_group - computed: true, optional: false, required: false
  public get useNeighborGroup() {
    return this.getStringAttribute('use_neighbor_group');
  }
}

export class DataIosxrRouterBgpVrfNeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterBgpVrfNeighborsOutputReference {
    return new DataIosxrRouterBgpVrfNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_vrf iosxr_router_bgp_vrf}
*/
export class DataIosxrRouterBgpVrf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_bgp_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterBgpVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterBgpVrf to import
  * @param importFromId The id of the existing DataIosxrRouterBgpVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterBgpVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_bgp_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_vrf iosxr_router_bgp_vrf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterBgpVrfConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterBgpVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_bgp_vrf',
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
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // bfd_minimum_interval - computed: true, optional: false, required: false
  public get bfdMinimumInterval() {
    return this.getNumberAttribute('bfd_minimum_interval');
  }

  // bfd_multiplier - computed: true, optional: false, required: false
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }

  // bgp_router_id - computed: true, optional: false, required: false
  public get bgpRouterId() {
    return this.getStringAttribute('bgp_router_id');
  }

  // default_information_originate - computed: true, optional: false, required: false
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }

  // default_metric - computed: true, optional: false, required: false
  public get defaultMetric() {
    return this.getNumberAttribute('default_metric');
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

  // neighbors - computed: true, optional: false, required: false
  private _neighbors = new DataIosxrRouterBgpVrfNeighborsList(this, "neighbors", false);
  public get neighbors() {
    return this._neighbors;
  }

  // rd_auto - computed: true, optional: false, required: false
  public get rdAuto() {
    return this.getBooleanAttribute('rd_auto');
  }

  // rd_four_byte_as_index - computed: true, optional: false, required: false
  public get rdFourByteAsIndex() {
    return this.getNumberAttribute('rd_four_byte_as_index');
  }

  // rd_four_byte_as_number - computed: true, optional: false, required: false
  public get rdFourByteAsNumber() {
    return this.getStringAttribute('rd_four_byte_as_number');
  }

  // rd_ipv4_address_address - computed: true, optional: false, required: false
  public get rdIpv4AddressAddress() {
    return this.getStringAttribute('rd_ipv4_address_address');
  }

  // rd_ipv4_address_index - computed: true, optional: false, required: false
  public get rdIpv4AddressIndex() {
    return this.getNumberAttribute('rd_ipv4_address_index');
  }

  // rd_two_byte_as_index - computed: true, optional: false, required: false
  public get rdTwoByteAsIndex() {
    return this.getNumberAttribute('rd_two_byte_as_index');
  }

  // rd_two_byte_as_number - computed: true, optional: false, required: false
  public get rdTwoByteAsNumber() {
    return this.getStringAttribute('rd_two_byte_as_number');
  }

  // timers_bgp_holdtime - computed: true, optional: false, required: false
  public get timersBgpHoldtime() {
    return this.getNumberAttribute('timers_bgp_holdtime');
  }

  // timers_bgp_holdtime_minimum_acceptable_holdtime - computed: true, optional: false, required: false
  public get timersBgpHoldtimeMinimumAcceptableHoldtime() {
    return this.getNumberAttribute('timers_bgp_holdtime_minimum_acceptable_holdtime');
  }

  // timers_bgp_keepalive_interval - computed: true, optional: false, required: false
  public get timersBgpKeepaliveInterval() {
    return this.getNumberAttribute('timers_bgp_keepalive_interval');
  }

  // timers_bgp_keepalive_zero - computed: true, optional: false, required: false
  public get timersBgpKeepaliveZero() {
    return this.getBooleanAttribute('timers_bgp_keepalive_zero');
  }

  // timers_bgp_keepalive_zero_holdtime_zero - computed: true, optional: false, required: false
  public get timersBgpKeepaliveZeroHoldtimeZero() {
    return this.getBooleanAttribute('timers_bgp_keepalive_zero_holdtime_zero');
  }

  // timers_bgp_keepalive_zero_minimum_acceptable_holdtime - computed: true, optional: false, required: false
  public get timersBgpKeepaliveZeroMinimumAcceptableHoldtime() {
    return this.getNumberAttribute('timers_bgp_keepalive_zero_minimum_acceptable_holdtime');
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_number: cdktf.stringToTerraform(this._asNumber),
      device: cdktf.stringToTerraform(this._device),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
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
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
