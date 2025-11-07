// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/routerbgp_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosRouterbgpNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/routerbgp_neighbor#id DataFortiosRouterbgpNeighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/routerbgp_neighbor#ip DataFortiosRouterbgpNeighbor#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/routerbgp_neighbor#vdomparam DataFortiosRouterbgpNeighbor#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosRouterbgpNeighborConditionalAdvertise {
}

export function dataFortiosRouterbgpNeighborConditionalAdvertiseToTerraform(struct?: DataFortiosRouterbgpNeighborConditionalAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterbgpNeighborConditionalAdvertiseToHclTerraform(struct?: DataFortiosRouterbgpNeighborConditionalAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterbgpNeighborConditionalAdvertiseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterbgpNeighborConditionalAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterbgpNeighborConditionalAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_routemap - computed: true, optional: false, required: false
  public get advertiseRoutemap() {
    return this.getStringAttribute('advertise_routemap');
  }

  // condition_routemap - computed: true, optional: false, required: false
  public get conditionRoutemap() {
    return this.getStringAttribute('condition_routemap');
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
}

export class DataFortiosRouterbgpNeighborConditionalAdvertiseList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterbgpNeighborConditionalAdvertiseOutputReference {
    return new DataFortiosRouterbgpNeighborConditionalAdvertiseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterbgpNeighborConditionalAdvertise6 {
}

export function dataFortiosRouterbgpNeighborConditionalAdvertise6ToTerraform(struct?: DataFortiosRouterbgpNeighborConditionalAdvertise6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterbgpNeighborConditionalAdvertise6ToHclTerraform(struct?: DataFortiosRouterbgpNeighborConditionalAdvertise6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterbgpNeighborConditionalAdvertise6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterbgpNeighborConditionalAdvertise6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterbgpNeighborConditionalAdvertise6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_routemap - computed: true, optional: false, required: false
  public get advertiseRoutemap() {
    return this.getStringAttribute('advertise_routemap');
  }

  // condition_routemap - computed: true, optional: false, required: false
  public get conditionRoutemap() {
    return this.getStringAttribute('condition_routemap');
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
}

export class DataFortiosRouterbgpNeighborConditionalAdvertise6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterbgpNeighborConditionalAdvertise6OutputReference {
    return new DataFortiosRouterbgpNeighborConditionalAdvertise6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/routerbgp_neighbor fortios_routerbgp_neighbor}
*/
export class DataFortiosRouterbgpNeighbor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_routerbgp_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosRouterbgpNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosRouterbgpNeighbor to import
  * @param importFromId The id of the existing DataFortiosRouterbgpNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/routerbgp_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosRouterbgpNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_routerbgp_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/routerbgp_neighbor fortios_routerbgp_neighbor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosRouterbgpNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosRouterbgpNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_routerbgp_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._ip = config.ip;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: true, optional: false, required: false
  public get activate() {
    return this.getStringAttribute('activate');
  }

  // activate6 - computed: true, optional: false, required: false
  public get activate6() {
    return this.getStringAttribute('activate6');
  }

  // activate_evpn - computed: true, optional: false, required: false
  public get activateEvpn() {
    return this.getStringAttribute('activate_evpn');
  }

  // activate_vpnv4 - computed: true, optional: false, required: false
  public get activateVpnv4() {
    return this.getStringAttribute('activate_vpnv4');
  }

  // activate_vpnv6 - computed: true, optional: false, required: false
  public get activateVpnv6() {
    return this.getStringAttribute('activate_vpnv6');
  }

  // additional_path - computed: true, optional: false, required: false
  public get additionalPath() {
    return this.getStringAttribute('additional_path');
  }

  // additional_path6 - computed: true, optional: false, required: false
  public get additionalPath6() {
    return this.getStringAttribute('additional_path6');
  }

  // additional_path_vpnv4 - computed: true, optional: false, required: false
  public get additionalPathVpnv4() {
    return this.getStringAttribute('additional_path_vpnv4');
  }

  // additional_path_vpnv6 - computed: true, optional: false, required: false
  public get additionalPathVpnv6() {
    return this.getStringAttribute('additional_path_vpnv6');
  }

  // adv_additional_path - computed: true, optional: false, required: false
  public get advAdditionalPath() {
    return this.getNumberAttribute('adv_additional_path');
  }

  // adv_additional_path6 - computed: true, optional: false, required: false
  public get advAdditionalPath6() {
    return this.getNumberAttribute('adv_additional_path6');
  }

  // adv_additional_path_vpnv4 - computed: true, optional: false, required: false
  public get advAdditionalPathVpnv4() {
    return this.getNumberAttribute('adv_additional_path_vpnv4');
  }

  // adv_additional_path_vpnv6 - computed: true, optional: false, required: false
  public get advAdditionalPathVpnv6() {
    return this.getNumberAttribute('adv_additional_path_vpnv6');
  }

  // advertisement_interval - computed: true, optional: false, required: false
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }

  // allowas_in - computed: true, optional: false, required: false
  public get allowasIn() {
    return this.getNumberAttribute('allowas_in');
  }

  // allowas_in6 - computed: true, optional: false, required: false
  public get allowasIn6() {
    return this.getNumberAttribute('allowas_in6');
  }

  // allowas_in_enable - computed: true, optional: false, required: false
  public get allowasInEnable() {
    return this.getStringAttribute('allowas_in_enable');
  }

  // allowas_in_enable6 - computed: true, optional: false, required: false
  public get allowasInEnable6() {
    return this.getStringAttribute('allowas_in_enable6');
  }

  // allowas_in_enable_evpn - computed: true, optional: false, required: false
  public get allowasInEnableEvpn() {
    return this.getStringAttribute('allowas_in_enable_evpn');
  }

  // allowas_in_enable_vpnv4 - computed: true, optional: false, required: false
  public get allowasInEnableVpnv4() {
    return this.getStringAttribute('allowas_in_enable_vpnv4');
  }

  // allowas_in_enable_vpnv6 - computed: true, optional: false, required: false
  public get allowasInEnableVpnv6() {
    return this.getStringAttribute('allowas_in_enable_vpnv6');
  }

  // allowas_in_evpn - computed: true, optional: false, required: false
  public get allowasInEvpn() {
    return this.getNumberAttribute('allowas_in_evpn');
  }

  // allowas_in_vpnv4 - computed: true, optional: false, required: false
  public get allowasInVpnv4() {
    return this.getNumberAttribute('allowas_in_vpnv4');
  }

  // allowas_in_vpnv6 - computed: true, optional: false, required: false
  public get allowasInVpnv6() {
    return this.getNumberAttribute('allowas_in_vpnv6');
  }

  // as_override - computed: true, optional: false, required: false
  public get asOverride() {
    return this.getStringAttribute('as_override');
  }

  // as_override6 - computed: true, optional: false, required: false
  public get asOverride6() {
    return this.getStringAttribute('as_override6');
  }

  // attribute_unchanged - computed: true, optional: false, required: false
  public get attributeUnchanged() {
    return this.getStringAttribute('attribute_unchanged');
  }

  // attribute_unchanged6 - computed: true, optional: false, required: false
  public get attributeUnchanged6() {
    return this.getStringAttribute('attribute_unchanged6');
  }

  // attribute_unchanged_vpnv4 - computed: true, optional: false, required: false
  public get attributeUnchangedVpnv4() {
    return this.getStringAttribute('attribute_unchanged_vpnv4');
  }

  // attribute_unchanged_vpnv6 - computed: true, optional: false, required: false
  public get attributeUnchangedVpnv6() {
    return this.getStringAttribute('attribute_unchanged_vpnv6');
  }

  // auth_options - computed: true, optional: false, required: false
  public get authOptions() {
    return this.getStringAttribute('auth_options');
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // capability_default_originate - computed: true, optional: false, required: false
  public get capabilityDefaultOriginate() {
    return this.getStringAttribute('capability_default_originate');
  }

  // capability_default_originate6 - computed: true, optional: false, required: false
  public get capabilityDefaultOriginate6() {
    return this.getStringAttribute('capability_default_originate6');
  }

  // capability_dynamic - computed: true, optional: false, required: false
  public get capabilityDynamic() {
    return this.getStringAttribute('capability_dynamic');
  }

  // capability_graceful_restart - computed: true, optional: false, required: false
  public get capabilityGracefulRestart() {
    return this.getStringAttribute('capability_graceful_restart');
  }

  // capability_graceful_restart6 - computed: true, optional: false, required: false
  public get capabilityGracefulRestart6() {
    return this.getStringAttribute('capability_graceful_restart6');
  }

  // capability_graceful_restart_evpn - computed: true, optional: false, required: false
  public get capabilityGracefulRestartEvpn() {
    return this.getStringAttribute('capability_graceful_restart_evpn');
  }

  // capability_graceful_restart_vpnv4 - computed: true, optional: false, required: false
  public get capabilityGracefulRestartVpnv4() {
    return this.getStringAttribute('capability_graceful_restart_vpnv4');
  }

  // capability_graceful_restart_vpnv6 - computed: true, optional: false, required: false
  public get capabilityGracefulRestartVpnv6() {
    return this.getStringAttribute('capability_graceful_restart_vpnv6');
  }

  // capability_orf - computed: true, optional: false, required: false
  public get capabilityOrf() {
    return this.getStringAttribute('capability_orf');
  }

  // capability_orf6 - computed: true, optional: false, required: false
  public get capabilityOrf6() {
    return this.getStringAttribute('capability_orf6');
  }

  // capability_route_refresh - computed: true, optional: false, required: false
  public get capabilityRouteRefresh() {
    return this.getStringAttribute('capability_route_refresh');
  }

  // conditional_advertise - computed: true, optional: false, required: false
  private _conditionalAdvertise = new DataFortiosRouterbgpNeighborConditionalAdvertiseList(this, "conditional_advertise", false);
  public get conditionalAdvertise() {
    return this._conditionalAdvertise;
  }

  // conditional_advertise6 - computed: true, optional: false, required: false
  private _conditionalAdvertise6 = new DataFortiosRouterbgpNeighborConditionalAdvertise6List(this, "conditional_advertise6", false);
  public get conditionalAdvertise6() {
    return this._conditionalAdvertise6;
  }

  // connect_timer - computed: true, optional: false, required: false
  public get connectTimer() {
    return this.getNumberAttribute('connect_timer');
  }

  // default_originate_routemap - computed: true, optional: false, required: false
  public get defaultOriginateRoutemap() {
    return this.getStringAttribute('default_originate_routemap');
  }

  // default_originate_routemap6 - computed: true, optional: false, required: false
  public get defaultOriginateRoutemap6() {
    return this.getStringAttribute('default_originate_routemap6');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distribute_list_in - computed: true, optional: false, required: false
  public get distributeListIn() {
    return this.getStringAttribute('distribute_list_in');
  }

  // distribute_list_in6 - computed: true, optional: false, required: false
  public get distributeListIn6() {
    return this.getStringAttribute('distribute_list_in6');
  }

  // distribute_list_in_vpnv4 - computed: true, optional: false, required: false
  public get distributeListInVpnv4() {
    return this.getStringAttribute('distribute_list_in_vpnv4');
  }

  // distribute_list_in_vpnv6 - computed: true, optional: false, required: false
  public get distributeListInVpnv6() {
    return this.getStringAttribute('distribute_list_in_vpnv6');
  }

  // distribute_list_out - computed: true, optional: false, required: false
  public get distributeListOut() {
    return this.getStringAttribute('distribute_list_out');
  }

  // distribute_list_out6 - computed: true, optional: false, required: false
  public get distributeListOut6() {
    return this.getStringAttribute('distribute_list_out6');
  }

  // distribute_list_out_vpnv4 - computed: true, optional: false, required: false
  public get distributeListOutVpnv4() {
    return this.getStringAttribute('distribute_list_out_vpnv4');
  }

  // distribute_list_out_vpnv6 - computed: true, optional: false, required: false
  public get distributeListOutVpnv6() {
    return this.getStringAttribute('distribute_list_out_vpnv6');
  }

  // dont_capability_negotiate - computed: true, optional: false, required: false
  public get dontCapabilityNegotiate() {
    return this.getStringAttribute('dont_capability_negotiate');
  }

  // ebgp_enforce_multihop - computed: true, optional: false, required: false
  public get ebgpEnforceMultihop() {
    return this.getStringAttribute('ebgp_enforce_multihop');
  }

  // ebgp_multihop_ttl - computed: true, optional: false, required: false
  public get ebgpMultihopTtl() {
    return this.getNumberAttribute('ebgp_multihop_ttl');
  }

  // filter_list_in - computed: true, optional: false, required: false
  public get filterListIn() {
    return this.getStringAttribute('filter_list_in');
  }

  // filter_list_in6 - computed: true, optional: false, required: false
  public get filterListIn6() {
    return this.getStringAttribute('filter_list_in6');
  }

  // filter_list_in_vpnv4 - computed: true, optional: false, required: false
  public get filterListInVpnv4() {
    return this.getStringAttribute('filter_list_in_vpnv4');
  }

  // filter_list_in_vpnv6 - computed: true, optional: false, required: false
  public get filterListInVpnv6() {
    return this.getStringAttribute('filter_list_in_vpnv6');
  }

  // filter_list_out - computed: true, optional: false, required: false
  public get filterListOut() {
    return this.getStringAttribute('filter_list_out');
  }

  // filter_list_out6 - computed: true, optional: false, required: false
  public get filterListOut6() {
    return this.getStringAttribute('filter_list_out6');
  }

  // filter_list_out_vpnv4 - computed: true, optional: false, required: false
  public get filterListOutVpnv4() {
    return this.getStringAttribute('filter_list_out_vpnv4');
  }

  // filter_list_out_vpnv6 - computed: true, optional: false, required: false
  public get filterListOutVpnv6() {
    return this.getStringAttribute('filter_list_out_vpnv6');
  }

  // holdtime_timer - computed: true, optional: false, required: false
  public get holdtimeTimer() {
    return this.getNumberAttribute('holdtime_timer');
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

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
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

  // keep_alive_timer - computed: true, optional: false, required: false
  public get keepAliveTimer() {
    return this.getNumberAttribute('keep_alive_timer');
  }

  // link_down_failover - computed: true, optional: false, required: false
  public get linkDownFailover() {
    return this.getStringAttribute('link_down_failover');
  }

  // local_as - computed: true, optional: false, required: false
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }

  // local_as_no_prepend - computed: true, optional: false, required: false
  public get localAsNoPrepend() {
    return this.getStringAttribute('local_as_no_prepend');
  }

  // local_as_replace_as - computed: true, optional: false, required: false
  public get localAsReplaceAs() {
    return this.getStringAttribute('local_as_replace_as');
  }

  // maximum_prefix - computed: true, optional: false, required: false
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }

  // maximum_prefix6 - computed: true, optional: false, required: false
  public get maximumPrefix6() {
    return this.getNumberAttribute('maximum_prefix6');
  }

  // maximum_prefix_evpn - computed: true, optional: false, required: false
  public get maximumPrefixEvpn() {
    return this.getNumberAttribute('maximum_prefix_evpn');
  }

  // maximum_prefix_threshold - computed: true, optional: false, required: false
  public get maximumPrefixThreshold() {
    return this.getNumberAttribute('maximum_prefix_threshold');
  }

  // maximum_prefix_threshold6 - computed: true, optional: false, required: false
  public get maximumPrefixThreshold6() {
    return this.getNumberAttribute('maximum_prefix_threshold6');
  }

  // maximum_prefix_threshold_evpn - computed: true, optional: false, required: false
  public get maximumPrefixThresholdEvpn() {
    return this.getNumberAttribute('maximum_prefix_threshold_evpn');
  }

  // maximum_prefix_threshold_vpnv4 - computed: true, optional: false, required: false
  public get maximumPrefixThresholdVpnv4() {
    return this.getNumberAttribute('maximum_prefix_threshold_vpnv4');
  }

  // maximum_prefix_threshold_vpnv6 - computed: true, optional: false, required: false
  public get maximumPrefixThresholdVpnv6() {
    return this.getNumberAttribute('maximum_prefix_threshold_vpnv6');
  }

  // maximum_prefix_vpnv4 - computed: true, optional: false, required: false
  public get maximumPrefixVpnv4() {
    return this.getNumberAttribute('maximum_prefix_vpnv4');
  }

  // maximum_prefix_vpnv6 - computed: true, optional: false, required: false
  public get maximumPrefixVpnv6() {
    return this.getNumberAttribute('maximum_prefix_vpnv6');
  }

  // maximum_prefix_warning_only - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly() {
    return this.getStringAttribute('maximum_prefix_warning_only');
  }

  // maximum_prefix_warning_only6 - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly6() {
    return this.getStringAttribute('maximum_prefix_warning_only6');
  }

  // maximum_prefix_warning_only_evpn - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnlyEvpn() {
    return this.getStringAttribute('maximum_prefix_warning_only_evpn');
  }

  // maximum_prefix_warning_only_vpnv4 - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnlyVpnv4() {
    return this.getStringAttribute('maximum_prefix_warning_only_vpnv4');
  }

  // maximum_prefix_warning_only_vpnv6 - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnlyVpnv6() {
    return this.getStringAttribute('maximum_prefix_warning_only_vpnv6');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getStringAttribute('next_hop_self');
  }

  // next_hop_self6 - computed: true, optional: false, required: false
  public get nextHopSelf6() {
    return this.getStringAttribute('next_hop_self6');
  }

  // next_hop_self_rr - computed: true, optional: false, required: false
  public get nextHopSelfRr() {
    return this.getStringAttribute('next_hop_self_rr');
  }

  // next_hop_self_rr6 - computed: true, optional: false, required: false
  public get nextHopSelfRr6() {
    return this.getStringAttribute('next_hop_self_rr6');
  }

  // next_hop_self_vpnv4 - computed: true, optional: false, required: false
  public get nextHopSelfVpnv4() {
    return this.getStringAttribute('next_hop_self_vpnv4');
  }

  // next_hop_self_vpnv6 - computed: true, optional: false, required: false
  public get nextHopSelfVpnv6() {
    return this.getStringAttribute('next_hop_self_vpnv6');
  }

  // override_capability - computed: true, optional: false, required: false
  public get overrideCapability() {
    return this.getStringAttribute('override_capability');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getStringAttribute('passive');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // prefix_list_in - computed: true, optional: false, required: false
  public get prefixListIn() {
    return this.getStringAttribute('prefix_list_in');
  }

  // prefix_list_in6 - computed: true, optional: false, required: false
  public get prefixListIn6() {
    return this.getStringAttribute('prefix_list_in6');
  }

  // prefix_list_in_vpnv4 - computed: true, optional: false, required: false
  public get prefixListInVpnv4() {
    return this.getStringAttribute('prefix_list_in_vpnv4');
  }

  // prefix_list_in_vpnv6 - computed: true, optional: false, required: false
  public get prefixListInVpnv6() {
    return this.getStringAttribute('prefix_list_in_vpnv6');
  }

  // prefix_list_out - computed: true, optional: false, required: false
  public get prefixListOut() {
    return this.getStringAttribute('prefix_list_out');
  }

  // prefix_list_out6 - computed: true, optional: false, required: false
  public get prefixListOut6() {
    return this.getStringAttribute('prefix_list_out6');
  }

  // prefix_list_out_vpnv4 - computed: true, optional: false, required: false
  public get prefixListOutVpnv4() {
    return this.getStringAttribute('prefix_list_out_vpnv4');
  }

  // prefix_list_out_vpnv6 - computed: true, optional: false, required: false
  public get prefixListOutVpnv6() {
    return this.getStringAttribute('prefix_list_out_vpnv6');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }

  // remove_private_as - computed: true, optional: false, required: false
  public get removePrivateAs() {
    return this.getStringAttribute('remove_private_as');
  }

  // remove_private_as6 - computed: true, optional: false, required: false
  public get removePrivateAs6() {
    return this.getStringAttribute('remove_private_as6');
  }

  // remove_private_as_evpn - computed: true, optional: false, required: false
  public get removePrivateAsEvpn() {
    return this.getStringAttribute('remove_private_as_evpn');
  }

  // remove_private_as_vpnv4 - computed: true, optional: false, required: false
  public get removePrivateAsVpnv4() {
    return this.getStringAttribute('remove_private_as_vpnv4');
  }

  // remove_private_as_vpnv6 - computed: true, optional: false, required: false
  public get removePrivateAsVpnv6() {
    return this.getStringAttribute('remove_private_as_vpnv6');
  }

  // restart_time - computed: true, optional: false, required: false
  public get restartTime() {
    return this.getNumberAttribute('restart_time');
  }

  // retain_stale_time - computed: true, optional: false, required: false
  public get retainStaleTime() {
    return this.getNumberAttribute('retain_stale_time');
  }

  // route_map_in - computed: true, optional: false, required: false
  public get routeMapIn() {
    return this.getStringAttribute('route_map_in');
  }

  // route_map_in6 - computed: true, optional: false, required: false
  public get routeMapIn6() {
    return this.getStringAttribute('route_map_in6');
  }

  // route_map_in_evpn - computed: true, optional: false, required: false
  public get routeMapInEvpn() {
    return this.getStringAttribute('route_map_in_evpn');
  }

  // route_map_in_vpnv4 - computed: true, optional: false, required: false
  public get routeMapInVpnv4() {
    return this.getStringAttribute('route_map_in_vpnv4');
  }

  // route_map_in_vpnv6 - computed: true, optional: false, required: false
  public get routeMapInVpnv6() {
    return this.getStringAttribute('route_map_in_vpnv6');
  }

  // route_map_out - computed: true, optional: false, required: false
  public get routeMapOut() {
    return this.getStringAttribute('route_map_out');
  }

  // route_map_out6 - computed: true, optional: false, required: false
  public get routeMapOut6() {
    return this.getStringAttribute('route_map_out6');
  }

  // route_map_out6_preferable - computed: true, optional: false, required: false
  public get routeMapOut6Preferable() {
    return this.getStringAttribute('route_map_out6_preferable');
  }

  // route_map_out_evpn - computed: true, optional: false, required: false
  public get routeMapOutEvpn() {
    return this.getStringAttribute('route_map_out_evpn');
  }

  // route_map_out_preferable - computed: true, optional: false, required: false
  public get routeMapOutPreferable() {
    return this.getStringAttribute('route_map_out_preferable');
  }

  // route_map_out_vpnv4 - computed: true, optional: false, required: false
  public get routeMapOutVpnv4() {
    return this.getStringAttribute('route_map_out_vpnv4');
  }

  // route_map_out_vpnv4_preferable - computed: true, optional: false, required: false
  public get routeMapOutVpnv4Preferable() {
    return this.getStringAttribute('route_map_out_vpnv4_preferable');
  }

  // route_map_out_vpnv6 - computed: true, optional: false, required: false
  public get routeMapOutVpnv6() {
    return this.getStringAttribute('route_map_out_vpnv6');
  }

  // route_map_out_vpnv6_preferable - computed: true, optional: false, required: false
  public get routeMapOutVpnv6Preferable() {
    return this.getStringAttribute('route_map_out_vpnv6_preferable');
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getStringAttribute('route_reflector_client');
  }

  // route_reflector_client6 - computed: true, optional: false, required: false
  public get routeReflectorClient6() {
    return this.getStringAttribute('route_reflector_client6');
  }

  // route_reflector_client_evpn - computed: true, optional: false, required: false
  public get routeReflectorClientEvpn() {
    return this.getStringAttribute('route_reflector_client_evpn');
  }

  // route_reflector_client_vpnv4 - computed: true, optional: false, required: false
  public get routeReflectorClientVpnv4() {
    return this.getStringAttribute('route_reflector_client_vpnv4');
  }

  // route_reflector_client_vpnv6 - computed: true, optional: false, required: false
  public get routeReflectorClientVpnv6() {
    return this.getStringAttribute('route_reflector_client_vpnv6');
  }

  // route_server_client - computed: true, optional: false, required: false
  public get routeServerClient() {
    return this.getStringAttribute('route_server_client');
  }

  // route_server_client6 - computed: true, optional: false, required: false
  public get routeServerClient6() {
    return this.getStringAttribute('route_server_client6');
  }

  // route_server_client_evpn - computed: true, optional: false, required: false
  public get routeServerClientEvpn() {
    return this.getStringAttribute('route_server_client_evpn');
  }

  // route_server_client_vpnv4 - computed: true, optional: false, required: false
  public get routeServerClientVpnv4() {
    return this.getStringAttribute('route_server_client_vpnv4');
  }

  // route_server_client_vpnv6 - computed: true, optional: false, required: false
  public get routeServerClientVpnv6() {
    return this.getStringAttribute('route_server_client_vpnv6');
  }

  // rr_attr_allow_change - computed: true, optional: false, required: false
  public get rrAttrAllowChange() {
    return this.getStringAttribute('rr_attr_allow_change');
  }

  // rr_attr_allow_change6 - computed: true, optional: false, required: false
  public get rrAttrAllowChange6() {
    return this.getStringAttribute('rr_attr_allow_change6');
  }

  // rr_attr_allow_change_evpn - computed: true, optional: false, required: false
  public get rrAttrAllowChangeEvpn() {
    return this.getStringAttribute('rr_attr_allow_change_evpn');
  }

  // rr_attr_allow_change_vpnv4 - computed: true, optional: false, required: false
  public get rrAttrAllowChangeVpnv4() {
    return this.getStringAttribute('rr_attr_allow_change_vpnv4');
  }

  // rr_attr_allow_change_vpnv6 - computed: true, optional: false, required: false
  public get rrAttrAllowChangeVpnv6() {
    return this.getStringAttribute('rr_attr_allow_change_vpnv6');
  }

  // send_community - computed: true, optional: false, required: false
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }

  // send_community6 - computed: true, optional: false, required: false
  public get sendCommunity6() {
    return this.getStringAttribute('send_community6');
  }

  // send_community_evpn - computed: true, optional: false, required: false
  public get sendCommunityEvpn() {
    return this.getStringAttribute('send_community_evpn');
  }

  // send_community_vpnv4 - computed: true, optional: false, required: false
  public get sendCommunityVpnv4() {
    return this.getStringAttribute('send_community_vpnv4');
  }

  // send_community_vpnv6 - computed: true, optional: false, required: false
  public get sendCommunityVpnv6() {
    return this.getStringAttribute('send_community_vpnv6');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getStringAttribute('shutdown');
  }

  // soft_reconfiguration - computed: true, optional: false, required: false
  public get softReconfiguration() {
    return this.getStringAttribute('soft_reconfiguration');
  }

  // soft_reconfiguration6 - computed: true, optional: false, required: false
  public get softReconfiguration6() {
    return this.getStringAttribute('soft_reconfiguration6');
  }

  // soft_reconfiguration_evpn - computed: true, optional: false, required: false
  public get softReconfigurationEvpn() {
    return this.getStringAttribute('soft_reconfiguration_evpn');
  }

  // soft_reconfiguration_vpnv4 - computed: true, optional: false, required: false
  public get softReconfigurationVpnv4() {
    return this.getStringAttribute('soft_reconfiguration_vpnv4');
  }

  // soft_reconfiguration_vpnv6 - computed: true, optional: false, required: false
  public get softReconfigurationVpnv6() {
    return this.getStringAttribute('soft_reconfiguration_vpnv6');
  }

  // stale_route - computed: true, optional: false, required: false
  public get staleRoute() {
    return this.getStringAttribute('stale_route');
  }

  // strict_capability_match - computed: true, optional: false, required: false
  public get strictCapabilityMatch() {
    return this.getStringAttribute('strict_capability_match');
  }

  // unsuppress_map - computed: true, optional: false, required: false
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }

  // unsuppress_map6 - computed: true, optional: false, required: false
  public get unsuppressMap6() {
    return this.getStringAttribute('unsuppress_map6');
  }

  // update_source - computed: true, optional: false, required: false
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
