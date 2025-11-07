// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterOspfVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_vrf#device DataIosxrRouterOspfVrf#device}
  */
  readonly device?: string;
  /**
  * Name for this OSPF process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_vrf#process_name DataIosxrRouterOspfVrf#process_name}
  */
  readonly processName: string;
  /**
  * Name for this OSPF vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_vrf#vrf_name DataIosxrRouterOspfVrf#vrf_name}
  */
  readonly vrfName: string;
}
export interface DataIosxrRouterOspfVrfAreas {
}

export function dataIosxrRouterOspfVrfAreasToTerraform(struct?: DataIosxrRouterOspfVrfAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterOspfVrfAreasToHclTerraform(struct?: DataIosxrRouterOspfVrfAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterOspfVrfAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterOspfVrfAreas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterOspfVrfAreas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area_id - computed: true, optional: false, required: false
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
}

export class DataIosxrRouterOspfVrfAreasList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterOspfVrfAreasOutputReference {
    return new DataIosxrRouterOspfVrfAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterOspfVrfRedistributeBgp {
}

export function dataIosxrRouterOspfVrfRedistributeBgpToTerraform(struct?: DataIosxrRouterOspfVrfRedistributeBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterOspfVrfRedistributeBgpToHclTerraform(struct?: DataIosxrRouterOspfVrfRedistributeBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterOspfVrfRedistributeBgpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterOspfVrfRedistributeBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterOspfVrfRedistributeBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}

export class DataIosxrRouterOspfVrfRedistributeBgpList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterOspfVrfRedistributeBgpOutputReference {
    return new DataIosxrRouterOspfVrfRedistributeBgpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterOspfVrfRedistributeIsis {
}

export function dataIosxrRouterOspfVrfRedistributeIsisToTerraform(struct?: DataIosxrRouterOspfVrfRedistributeIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterOspfVrfRedistributeIsisToHclTerraform(struct?: DataIosxrRouterOspfVrfRedistributeIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterOspfVrfRedistributeIsisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterOspfVrfRedistributeIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterOspfVrfRedistributeIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // level_1 - computed: true, optional: false, required: false
  public get level1() {
    return this.getBooleanAttribute('level_1');
  }

  // level_1_2 - computed: true, optional: false, required: false
  public get level12() {
    return this.getBooleanAttribute('level_1_2');
  }

  // level_2 - computed: true, optional: false, required: false
  public get level2() {
    return this.getBooleanAttribute('level_2');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}

export class DataIosxrRouterOspfVrfRedistributeIsisList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterOspfVrfRedistributeIsisOutputReference {
    return new DataIosxrRouterOspfVrfRedistributeIsisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterOspfVrfRedistributeOspf {
}

export function dataIosxrRouterOspfVrfRedistributeOspfToTerraform(struct?: DataIosxrRouterOspfVrfRedistributeOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterOspfVrfRedistributeOspfToHclTerraform(struct?: DataIosxrRouterOspfVrfRedistributeOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterOspfVrfRedistributeOspfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterOspfVrfRedistributeOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterOspfVrfRedistributeOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // match_external - computed: true, optional: false, required: false
  public get matchExternal() {
    return this.getBooleanAttribute('match_external');
  }

  // match_internal - computed: true, optional: false, required: false
  public get matchInternal() {
    return this.getBooleanAttribute('match_internal');
  }

  // match_nssa_external - computed: true, optional: false, required: false
  public get matchNssaExternal() {
    return this.getBooleanAttribute('match_nssa_external');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}

export class DataIosxrRouterOspfVrfRedistributeOspfList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterOspfVrfRedistributeOspfOutputReference {
    return new DataIosxrRouterOspfVrfRedistributeOspfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_vrf iosxr_router_ospf_vrf}
*/
export class DataIosxrRouterOspfVrf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_ospf_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterOspfVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterOspfVrf to import
  * @param importFromId The id of the existing DataIosxrRouterOspfVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterOspfVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_ospf_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_vrf iosxr_router_ospf_vrf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterOspfVrfConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterOspfVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_ospf_vrf',
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
    this._processName = config.processName;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // areas - computed: true, optional: false, required: false
  private _areas = new DataIosxrRouterOspfVrfAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }

  // auto_cost_disable - computed: true, optional: false, required: false
  public get autoCostDisable() {
    return this.getBooleanAttribute('auto_cost_disable');
  }

  // auto_cost_reference_bandwidth - computed: true, optional: false, required: false
  public get autoCostReferenceBandwidth() {
    return this.getNumberAttribute('auto_cost_reference_bandwidth');
  }

  // bfd_fast_detect - computed: true, optional: false, required: false
  public get bfdFastDetect() {
    return this.getBooleanAttribute('bfd_fast_detect');
  }

  // bfd_minimum_interval - computed: true, optional: false, required: false
  public get bfdMinimumInterval() {
    return this.getNumberAttribute('bfd_minimum_interval');
  }

  // bfd_multiplier - computed: true, optional: false, required: false
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }

  // dead_interval - computed: true, optional: false, required: false
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }

  // default_information_originate - computed: true, optional: false, required: false
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }

  // default_information_originate_always - computed: true, optional: false, required: false
  public get defaultInformationOriginateAlways() {
    return this.getBooleanAttribute('default_information_originate_always');
  }

  // default_information_originate_metric_type - computed: true, optional: false, required: false
  public get defaultInformationOriginateMetricType() {
    return this.getNumberAttribute('default_information_originate_metric_type');
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

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mpls_ldp_sync - computed: true, optional: false, required: false
  public get mplsLdpSync() {
    return this.getBooleanAttribute('mpls_ldp_sync');
  }

  // mtu_ignore_disable - computed: true, optional: false, required: false
  public get mtuIgnoreDisable() {
    return this.getBooleanAttribute('mtu_ignore_disable');
  }

  // mtu_ignore_enable - computed: true, optional: false, required: false
  public get mtuIgnoreEnable() {
    return this.getBooleanAttribute('mtu_ignore_enable');
  }

  // passive_disable - computed: true, optional: false, required: false
  public get passiveDisable() {
    return this.getBooleanAttribute('passive_disable');
  }

  // passive_enable - computed: true, optional: false, required: false
  public get passiveEnable() {
    return this.getBooleanAttribute('passive_enable');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // process_name - computed: false, optional: false, required: true
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }

  // redistribute_bgp - computed: true, optional: false, required: false
  private _redistributeBgp = new DataIosxrRouterOspfVrfRedistributeBgpList(this, "redistribute_bgp", false);
  public get redistributeBgp() {
    return this._redistributeBgp;
  }

  // redistribute_connected - computed: true, optional: false, required: false
  public get redistributeConnected() {
    return this.getBooleanAttribute('redistribute_connected');
  }

  // redistribute_connected_metric_type - computed: true, optional: false, required: false
  public get redistributeConnectedMetricType() {
    return this.getStringAttribute('redistribute_connected_metric_type');
  }

  // redistribute_connected_tag - computed: true, optional: false, required: false
  public get redistributeConnectedTag() {
    return this.getNumberAttribute('redistribute_connected_tag');
  }

  // redistribute_isis - computed: true, optional: false, required: false
  private _redistributeIsis = new DataIosxrRouterOspfVrfRedistributeIsisList(this, "redistribute_isis", false);
  public get redistributeIsis() {
    return this._redistributeIsis;
  }

  // redistribute_ospf - computed: true, optional: false, required: false
  private _redistributeOspf = new DataIosxrRouterOspfVrfRedistributeOspfList(this, "redistribute_ospf", false);
  public get redistributeOspf() {
    return this._redistributeOspf;
  }

  // redistribute_static - computed: true, optional: false, required: false
  public get redistributeStatic() {
    return this.getBooleanAttribute('redistribute_static');
  }

  // redistribute_static_metric_type - computed: true, optional: false, required: false
  public get redistributeStaticMetricType() {
    return this.getStringAttribute('redistribute_static_metric_type');
  }

  // redistribute_static_tag - computed: true, optional: false, required: false
  public get redistributeStaticTag() {
    return this.getNumberAttribute('redistribute_static_tag');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
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
      device: cdktf.stringToTerraform(this._device),
      process_name: cdktf.stringToTerraform(this._processName),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
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
      process_name: {
        value: cdktf.stringToHclTerraform(this._processName),
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
