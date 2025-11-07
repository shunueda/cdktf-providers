// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_area_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterOspfAreaInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enter the OSPF area configuration submode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_area_interface#area_id DataIosxrRouterOspfAreaInterface#area_id}
  */
  readonly areaId: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_area_interface#device DataIosxrRouterOspfAreaInterface#device}
  */
  readonly device?: string;
  /**
  * Enable routing on an interface 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_area_interface#interface_name DataIosxrRouterOspfAreaInterface#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Name for this OSPF process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_area_interface#process_name DataIosxrRouterOspfAreaInterface#process_name}
  */
  readonly processName: string;
}
export interface DataIosxrRouterOspfAreaInterfacePrefixSidAlgorithms {
}

export function dataIosxrRouterOspfAreaInterfacePrefixSidAlgorithmsToTerraform(struct?: DataIosxrRouterOspfAreaInterfacePrefixSidAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterOspfAreaInterfacePrefixSidAlgorithmsToHclTerraform(struct?: DataIosxrRouterOspfAreaInterfacePrefixSidAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterOspfAreaInterfacePrefixSidAlgorithmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterOspfAreaInterfacePrefixSidAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterOspfAreaInterfacePrefixSidAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute_explicit_null - computed: true, optional: false, required: false
  public get absoluteExplicitNull() {
    return this.getBooleanAttribute('absolute_explicit_null');
  }

  // absolute_n_flag_clear - computed: true, optional: false, required: false
  public get absoluteNFlagClear() {
    return this.getBooleanAttribute('absolute_n_flag_clear');
  }

  // absolute_sid_label - computed: true, optional: false, required: false
  public get absoluteSidLabel() {
    return this.getNumberAttribute('absolute_sid_label');
  }

  // algorithm_number - computed: true, optional: false, required: false
  public get algorithmNumber() {
    return this.getNumberAttribute('algorithm_number');
  }

  // index_explicit_null - computed: true, optional: false, required: false
  public get indexExplicitNull() {
    return this.getBooleanAttribute('index_explicit_null');
  }

  // index_n_flag_clear - computed: true, optional: false, required: false
  public get indexNFlagClear() {
    return this.getBooleanAttribute('index_n_flag_clear');
  }

  // index_sid_index - computed: true, optional: false, required: false
  public get indexSidIndex() {
    return this.getNumberAttribute('index_sid_index');
  }
}

export class DataIosxrRouterOspfAreaInterfacePrefixSidAlgorithmsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterOspfAreaInterfacePrefixSidAlgorithmsOutputReference {
    return new DataIosxrRouterOspfAreaInterfacePrefixSidAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_area_interface iosxr_router_ospf_area_interface}
*/
export class DataIosxrRouterOspfAreaInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_ospf_area_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterOspfAreaInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterOspfAreaInterface to import
  * @param importFromId The id of the existing DataIosxrRouterOspfAreaInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_area_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterOspfAreaInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_ospf_area_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_ospf_area_interface iosxr_router_ospf_area_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterOspfAreaInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterOspfAreaInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_ospf_area_interface',
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
    this._areaId = config.areaId;
    this._device = config.device;
    this._interfaceName = config.interfaceName;
    this._processName = config.processName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area_id - computed: false, optional: false, required: true
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
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

  // fast_reroute_per_prefix_ti_lfa - computed: true, optional: false, required: false
  public get fastReroutePerPrefixTiLfa() {
    return this.getBooleanAttribute('fast_reroute_per_prefix_ti_lfa');
  }

  // fast_reroute_per_prefix_tiebreaker_node_protecting - computed: true, optional: false, required: false
  public get fastReroutePerPrefixTiebreakerNodeProtecting() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_node_protecting');
  }

  // fast_reroute_per_prefix_tiebreaker_srlg_disjoint - computed: true, optional: false, required: false
  public get fastReroutePerPrefixTiebreakerSrlgDisjoint() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_srlg_disjoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_broadcast - computed: true, optional: false, required: false
  public get networkBroadcast() {
    return this.getBooleanAttribute('network_broadcast');
  }

  // network_non_broadcast - computed: true, optional: false, required: false
  public get networkNonBroadcast() {
    return this.getBooleanAttribute('network_non_broadcast');
  }

  // network_point_to_multipoint - computed: true, optional: false, required: false
  public get networkPointToMultipoint() {
    return this.getBooleanAttribute('network_point_to_multipoint');
  }

  // network_point_to_point - computed: true, optional: false, required: false
  public get networkPointToPoint() {
    return this.getBooleanAttribute('network_point_to_point');
  }

  // passive_disable - computed: true, optional: false, required: false
  public get passiveDisable() {
    return this.getBooleanAttribute('passive_disable');
  }

  // passive_enable - computed: true, optional: false, required: false
  public get passiveEnable() {
    return this.getBooleanAttribute('passive_enable');
  }

  // prefix_sid_algorithms - computed: true, optional: false, required: false
  private _prefixSidAlgorithms = new DataIosxrRouterOspfAreaInterfacePrefixSidAlgorithmsList(this, "prefix_sid_algorithms", false);
  public get prefixSidAlgorithms() {
    return this._prefixSidAlgorithms;
  }

  // prefix_sid_strict_spf_index - computed: true, optional: false, required: false
  public get prefixSidStrictSpfIndex() {
    return this.getNumberAttribute('prefix_sid_strict_spf_index');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_id: cdktf.stringToTerraform(this._areaId),
      device: cdktf.stringToTerraform(this._device),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      process_name: cdktf.stringToTerraform(this._processName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_id: {
        value: cdktf.stringToHclTerraform(this._areaId),
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
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
