// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * bgp as-number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp#as_number DataIosxrRouterBgp#as_number}
  */
  readonly asNumber: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp#device DataIosxrRouterBgp#device}
  */
  readonly device?: string;
}
export interface DataIosxrRouterBgpNeighbors {
}

export function dataIosxrRouterBgpNeighborsToTerraform(struct?: DataIosxrRouterBgpNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterBgpNeighborsToHclTerraform(struct?: DataIosxrRouterBgpNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterBgpNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterBgpNeighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterBgpNeighbors | undefined) {
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

export class DataIosxrRouterBgpNeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterBgpNeighborsOutputReference {
    return new DataIosxrRouterBgpNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp iosxr_router_bgp}
*/
export class DataIosxrRouterBgp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterBgp to import
  * @param importFromId The id of the existing DataIosxrRouterBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp iosxr_router_bgp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterBgpConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterBgpConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_bgp',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
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

  // bgp_bestpath_aigp_ignore - computed: true, optional: false, required: false
  public get bgpBestpathAigpIgnore() {
    return this.getBooleanAttribute('bgp_bestpath_aigp_ignore');
  }

  // bgp_bestpath_as_path_ignore - computed: true, optional: false, required: false
  public get bgpBestpathAsPathIgnore() {
    return this.getBooleanAttribute('bgp_bestpath_as_path_ignore');
  }

  // bgp_bestpath_as_path_multipath_relax - computed: true, optional: false, required: false
  public get bgpBestpathAsPathMultipathRelax() {
    return this.getBooleanAttribute('bgp_bestpath_as_path_multipath_relax');
  }

  // bgp_bestpath_compare_routerid - computed: true, optional: false, required: false
  public get bgpBestpathCompareRouterid() {
    return this.getBooleanAttribute('bgp_bestpath_compare_routerid');
  }

  // bgp_bestpath_cost_community_ignore - computed: true, optional: false, required: false
  public get bgpBestpathCostCommunityIgnore() {
    return this.getBooleanAttribute('bgp_bestpath_cost_community_ignore');
  }

  // bgp_bestpath_igp_metric_ignore - computed: true, optional: false, required: false
  public get bgpBestpathIgpMetricIgnore() {
    return this.getBooleanAttribute('bgp_bestpath_igp_metric_ignore');
  }

  // bgp_bestpath_igp_metric_sr_policy - computed: true, optional: false, required: false
  public get bgpBestpathIgpMetricSrPolicy() {
    return this.getBooleanAttribute('bgp_bestpath_igp_metric_sr_policy');
  }

  // bgp_bestpath_med_always - computed: true, optional: false, required: false
  public get bgpBestpathMedAlways() {
    return this.getBooleanAttribute('bgp_bestpath_med_always');
  }

  // bgp_bestpath_med_missing_as_worst - computed: true, optional: false, required: false
  public get bgpBestpathMedMissingAsWorst() {
    return this.getBooleanAttribute('bgp_bestpath_med_missing_as_worst');
  }

  // bgp_bestpath_origin_as_allow_invalid - computed: true, optional: false, required: false
  public get bgpBestpathOriginAsAllowInvalid() {
    return this.getBooleanAttribute('bgp_bestpath_origin_as_allow_invalid');
  }

  // bgp_bestpath_origin_as_use_validity - computed: true, optional: false, required: false
  public get bgpBestpathOriginAsUseValidity() {
    return this.getBooleanAttribute('bgp_bestpath_origin_as_use_validity');
  }

  // bgp_bestpath_sr_policy_force - computed: true, optional: false, required: false
  public get bgpBestpathSrPolicyForce() {
    return this.getBooleanAttribute('bgp_bestpath_sr_policy_force');
  }

  // bgp_bestpath_sr_policy_prefer - computed: true, optional: false, required: false
  public get bgpBestpathSrPolicyPrefer() {
    return this.getBooleanAttribute('bgp_bestpath_sr_policy_prefer');
  }

  // bgp_graceful_restart_graceful_reset - computed: true, optional: false, required: false
  public get bgpGracefulRestartGracefulReset() {
    return this.getBooleanAttribute('bgp_graceful_restart_graceful_reset');
  }

  // bgp_log_neighbor_changes_detail - computed: true, optional: false, required: false
  public get bgpLogNeighborChangesDetail() {
    return this.getBooleanAttribute('bgp_log_neighbor_changes_detail');
  }

  // bgp_redistribute_internal - computed: true, optional: false, required: false
  public get bgpRedistributeInternal() {
    return this.getBooleanAttribute('bgp_redistribute_internal');
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

  // ibgp_policy_out_enforce_modifications - computed: true, optional: false, required: false
  public get ibgpPolicyOutEnforceModifications() {
    return this.getBooleanAttribute('ibgp_policy_out_enforce_modifications');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // neighbors - computed: true, optional: false, required: false
  private _neighbors = new DataIosxrRouterBgpNeighborsList(this, "neighbors", false);
  public get neighbors() {
    return this._neighbors;
  }

  // nexthop_validation_color_extcomm_disable - computed: true, optional: false, required: false
  public get nexthopValidationColorExtcommDisable() {
    return this.getBooleanAttribute('nexthop_validation_color_extcomm_disable');
  }

  // nexthop_validation_color_extcomm_sr_policy - computed: true, optional: false, required: false
  public get nexthopValidationColorExtcommSrPolicy() {
    return this.getBooleanAttribute('nexthop_validation_color_extcomm_sr_policy');
  }

  // nsr - computed: true, optional: false, required: false
  public get nsr() {
    return this.getBooleanAttribute('nsr');
  }

  // nsr_disable - computed: true, optional: false, required: false
  public get nsrDisable() {
    return this.getBooleanAttribute('nsr_disable');
  }

  // segment_routing_srv6_locator - computed: true, optional: false, required: false
  public get segmentRoutingSrv6Locator() {
    return this.getStringAttribute('segment_routing_srv6_locator');
  }

  // segment_routing_srv6_usid_allocation_wide_local_id_block - computed: true, optional: false, required: false
  public get segmentRoutingSrv6UsidAllocationWideLocalIdBlock() {
    return this.getBooleanAttribute('segment_routing_srv6_usid_allocation_wide_local_id_block');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_number: cdktf.stringToTerraform(this._asNumber),
      device: cdktf.stringToTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
