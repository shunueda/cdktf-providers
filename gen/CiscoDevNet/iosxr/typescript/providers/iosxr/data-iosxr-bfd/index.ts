// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/bfd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrBfdConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/bfd#device DataIosxrBfd#device}
  */
  readonly device?: string;
}
export interface DataIosxrBfdInterfaces {
}

export function dataIosxrBfdInterfacesToTerraform(struct?: DataIosxrBfdInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrBfdInterfacesToHclTerraform(struct?: DataIosxrBfdInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrBfdInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrBfdInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrBfdInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable - computed: true, optional: false, required: false
  public get disable() {
    return this.getBooleanAttribute('disable');
  }

  // echo_disable - computed: true, optional: false, required: false
  public get echoDisable() {
    return this.getStringAttribute('echo_disable');
  }

  // echo_ipv4_source - computed: true, optional: false, required: false
  public get echoIpv4Source() {
    return this.getStringAttribute('echo_ipv4_source');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // ipv6_checksum_disable - computed: true, optional: false, required: false
  public get ipv6ChecksumDisable() {
    return this.getBooleanAttribute('ipv6_checksum_disable');
  }

  // local_address - computed: true, optional: false, required: false
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }

  // multiplier - computed: true, optional: false, required: false
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }

  // rx_interval - computed: true, optional: false, required: false
  public get rxInterval() {
    return this.getNumberAttribute('rx_interval');
  }

  // tx_interval - computed: true, optional: false, required: false
  public get txInterval() {
    return this.getNumberAttribute('tx_interval');
  }
}

export class DataIosxrBfdInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrBfdInterfacesOutputReference {
    return new DataIosxrBfdInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrBfdMultipathLocations {
}

export function dataIosxrBfdMultipathLocationsToTerraform(struct?: DataIosxrBfdMultipathLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrBfdMultipathLocationsToHclTerraform(struct?: DataIosxrBfdMultipathLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrBfdMultipathLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrBfdMultipathLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrBfdMultipathLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
}

export class DataIosxrBfdMultipathLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrBfdMultipathLocationsOutputReference {
    return new DataIosxrBfdMultipathLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/bfd iosxr_bfd}
*/
export class DataIosxrBfd extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_bfd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrBfd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrBfd to import
  * @param importFromId The id of the existing DataIosxrBfd that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/bfd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrBfd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_bfd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/bfd iosxr_bfd} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrBfdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxrBfdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_bfd',
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
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_coexistence_bob_blb - computed: true, optional: false, required: false
  public get bundleCoexistenceBobBlb() {
    return this.getStringAttribute('bundle_coexistence_bob_blb');
  }

  // dampening_bundle_member_initial_wait - computed: true, optional: false, required: false
  public get dampeningBundleMemberInitialWait() {
    return this.getNumberAttribute('dampening_bundle_member_initial_wait');
  }

  // dampening_bundle_member_l3_only_mode - computed: true, optional: false, required: false
  public get dampeningBundleMemberL3OnlyMode() {
    return this.getBooleanAttribute('dampening_bundle_member_l3_only_mode');
  }

  // dampening_bundle_member_maximum_wait - computed: true, optional: false, required: false
  public get dampeningBundleMemberMaximumWait() {
    return this.getNumberAttribute('dampening_bundle_member_maximum_wait');
  }

  // dampening_bundle_member_secondary_wait - computed: true, optional: false, required: false
  public get dampeningBundleMemberSecondaryWait() {
    return this.getNumberAttribute('dampening_bundle_member_secondary_wait');
  }

  // dampening_disable - computed: true, optional: false, required: false
  public get dampeningDisable() {
    return this.getBooleanAttribute('dampening_disable');
  }

  // dampening_extensions_down_monitoring - computed: true, optional: false, required: false
  public get dampeningExtensionsDownMonitoring() {
    return this.getBooleanAttribute('dampening_extensions_down_monitoring');
  }

  // dampening_initial_wait - computed: true, optional: false, required: false
  public get dampeningInitialWait() {
    return this.getNumberAttribute('dampening_initial_wait');
  }

  // dampening_maximum_wait - computed: true, optional: false, required: false
  public get dampeningMaximumWait() {
    return this.getNumberAttribute('dampening_maximum_wait');
  }

  // dampening_secondary_wait - computed: true, optional: false, required: false
  public get dampeningSecondaryWait() {
    return this.getNumberAttribute('dampening_secondary_wait');
  }

  // dampening_threshold - computed: true, optional: false, required: false
  public get dampeningThreshold() {
    return this.getNumberAttribute('dampening_threshold');
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

  // echo_disable - computed: true, optional: false, required: false
  public get echoDisable() {
    return this.getBooleanAttribute('echo_disable');
  }

  // echo_ipv4_bundle_per_member_minimum_interval - computed: true, optional: false, required: false
  public get echoIpv4BundlePerMemberMinimumInterval() {
    return this.getNumberAttribute('echo_ipv4_bundle_per_member_minimum_interval');
  }

  // echo_ipv4_source - computed: true, optional: false, required: false
  public get echoIpv4Source() {
    return this.getStringAttribute('echo_ipv4_source');
  }

  // echo_latency_detect - computed: true, optional: false, required: false
  public get echoLatencyDetect() {
    return this.getBooleanAttribute('echo_latency_detect');
  }

  // echo_latency_detect_count - computed: true, optional: false, required: false
  public get echoLatencyDetectCount() {
    return this.getNumberAttribute('echo_latency_detect_count');
  }

  // echo_latency_detect_percentage - computed: true, optional: false, required: false
  public get echoLatencyDetectPercentage() {
    return this.getNumberAttribute('echo_latency_detect_percentage');
  }

  // echo_startup_validate_force - computed: true, optional: false, required: false
  public get echoStartupValidateForce() {
    return this.getBooleanAttribute('echo_startup_validate_force');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataIosxrBfdInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // ipv6_checksum_disable - computed: true, optional: false, required: false
  public get ipv6ChecksumDisable() {
    return this.getBooleanAttribute('ipv6_checksum_disable');
  }

  // multihop_ttl_drop_threshold - computed: true, optional: false, required: false
  public get multihopTtlDropThreshold() {
    return this.getNumberAttribute('multihop_ttl_drop_threshold');
  }

  // multipath_locations - computed: true, optional: false, required: false
  private _multipathLocations = new DataIosxrBfdMultipathLocationsList(this, "multipath_locations", false);
  public get multipathLocations() {
    return this._multipathLocations;
  }

  // trap_singlehop_pre_mapped - computed: true, optional: false, required: false
  public get trapSinglehopPreMapped() {
    return this.getBooleanAttribute('trap_singlehop_pre_mapped');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
