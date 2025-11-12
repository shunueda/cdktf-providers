// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspfAreaInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enter the OSPF area configuration submode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#area_id RouterOspfAreaInterface#area_id}
  */
  readonly areaId: string;
  /**
  * Interface cost
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#cost RouterOspfAreaInterface#cost}
  */
  readonly cost?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#delete_mode RouterOspfAreaInterface#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#device RouterOspfAreaInterface#device}
  */
  readonly device?: string;
  /**
  * Enable TI LFA computation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#fast_reroute_per_prefix_ti_lfa RouterOspfAreaInterface#fast_reroute_per_prefix_ti_lfa}
  */
  readonly fastReroutePerPrefixTiLfa?: boolean | cdktf.IResolvable;
  /**
  * Set preference order among tiebreakers
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#fast_reroute_per_prefix_tiebreaker_node_protecting RouterOspfAreaInterface#fast_reroute_per_prefix_tiebreaker_node_protecting}
  */
  readonly fastReroutePerPrefixTiebreakerNodeProtecting?: number;
  /**
  * Set preference order among tiebreakers
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#fast_reroute_per_prefix_tiebreaker_srlg_disjoint RouterOspfAreaInterface#fast_reroute_per_prefix_tiebreaker_srlg_disjoint}
  */
  readonly fastReroutePerPrefixTiebreakerSrlgDisjoint?: number;
  /**
  * Enable routing on an interface 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#interface_name RouterOspfAreaInterface#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Specify OSPF broadcast multi-access network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#network_broadcast RouterOspfAreaInterface#network_broadcast}
  */
  readonly networkBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Specify OSPF NBMA network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#network_non_broadcast RouterOspfAreaInterface#network_non_broadcast}
  */
  readonly networkNonBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Specify OSPF point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#network_point_to_multipoint RouterOspfAreaInterface#network_point_to_multipoint}
  */
  readonly networkPointToMultipoint?: boolean | cdktf.IResolvable;
  /**
  * Specify OSPF point-to-point network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#network_point_to_point RouterOspfAreaInterface#network_point_to_point}
  */
  readonly networkPointToPoint?: boolean | cdktf.IResolvable;
  /**
  * Disable passive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#passive_disable RouterOspfAreaInterface#passive_disable}
  */
  readonly passiveDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable passive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#passive_enable RouterOspfAreaInterface#passive_enable}
  */
  readonly passiveEnable?: boolean | cdktf.IResolvable;
  /**
  * Algorithm Specific Prefix SID Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#prefix_sid_algorithms RouterOspfAreaInterface#prefix_sid_algorithms}
  */
  readonly prefixSidAlgorithms?: RouterOspfAreaInterfacePrefixSidAlgorithms[] | cdktf.IResolvable;
  /**
  * SID Index
  *   - Range: `0`-`1048575`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#prefix_sid_strict_spf_index RouterOspfAreaInterface#prefix_sid_strict_spf_index}
  */
  readonly prefixSidStrictSpfIndex?: number;
  /**
  * Router priority
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#priority RouterOspfAreaInterface#priority}
  */
  readonly priority?: number;
  /**
  * Name for this OSPF process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#process_name RouterOspfAreaInterface#process_name}
  */
  readonly processName: string;
}
export interface RouterOspfAreaInterfacePrefixSidAlgorithms {
  /**
  * Force penultimate hop to send explicit-null label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#absolute_explicit_null RouterOspfAreaInterface#absolute_explicit_null}
  */
  readonly absoluteExplicitNull?: boolean | cdktf.IResolvable;
  /**
  * Not a node SID (e.g. for anycast SID use)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#absolute_n_flag_clear RouterOspfAreaInterface#absolute_n_flag_clear}
  */
  readonly absoluteNFlagClear?: boolean | cdktf.IResolvable;
  /**
  * SID value
  *   - Range: `16000`-`1048575`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#absolute_sid_label RouterOspfAreaInterface#absolute_sid_label}
  */
  readonly absoluteSidLabel?: number;
  /**
  * Algorithm Specific Prefix SID Configuration
  *   - Range: `128`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#algorithm_number RouterOspfAreaInterface#algorithm_number}
  */
  readonly algorithmNumber: number;
  /**
  * Force penultimate hop to send explicit-null label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#index_explicit_null RouterOspfAreaInterface#index_explicit_null}
  */
  readonly indexExplicitNull?: boolean | cdktf.IResolvable;
  /**
  * Not a node SID (e.g. for anycast SID use)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#index_n_flag_clear RouterOspfAreaInterface#index_n_flag_clear}
  */
  readonly indexNFlagClear?: boolean | cdktf.IResolvable;
  /**
  * SID Index
  *   - Range: `0`-`1048575`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#index_sid_index RouterOspfAreaInterface#index_sid_index}
  */
  readonly indexSidIndex?: number;
}

export function routerOspfAreaInterfacePrefixSidAlgorithmsToTerraform(struct?: RouterOspfAreaInterfacePrefixSidAlgorithms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_explicit_null: cdktf.booleanToTerraform(struct!.absoluteExplicitNull),
    absolute_n_flag_clear: cdktf.booleanToTerraform(struct!.absoluteNFlagClear),
    absolute_sid_label: cdktf.numberToTerraform(struct!.absoluteSidLabel),
    algorithm_number: cdktf.numberToTerraform(struct!.algorithmNumber),
    index_explicit_null: cdktf.booleanToTerraform(struct!.indexExplicitNull),
    index_n_flag_clear: cdktf.booleanToTerraform(struct!.indexNFlagClear),
    index_sid_index: cdktf.numberToTerraform(struct!.indexSidIndex),
  }
}


export function routerOspfAreaInterfacePrefixSidAlgorithmsToHclTerraform(struct?: RouterOspfAreaInterfacePrefixSidAlgorithms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_explicit_null: {
      value: cdktf.booleanToHclTerraform(struct!.absoluteExplicitNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    absolute_n_flag_clear: {
      value: cdktf.booleanToHclTerraform(struct!.absoluteNFlagClear),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    absolute_sid_label: {
      value: cdktf.numberToHclTerraform(struct!.absoluteSidLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    algorithm_number: {
      value: cdktf.numberToHclTerraform(struct!.algorithmNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    index_explicit_null: {
      value: cdktf.booleanToHclTerraform(struct!.indexExplicitNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    index_n_flag_clear: {
      value: cdktf.booleanToHclTerraform(struct!.indexNFlagClear),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    index_sid_index: {
      value: cdktf.numberToHclTerraform(struct!.indexSidIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaInterfacePrefixSidAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RouterOspfAreaInterfacePrefixSidAlgorithms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteExplicitNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteExplicitNull = this._absoluteExplicitNull;
    }
    if (this._absoluteNFlagClear !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteNFlagClear = this._absoluteNFlagClear;
    }
    if (this._absoluteSidLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteSidLabel = this._absoluteSidLabel;
    }
    if (this._algorithmNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmNumber = this._algorithmNumber;
    }
    if (this._indexExplicitNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexExplicitNull = this._indexExplicitNull;
    }
    if (this._indexNFlagClear !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexNFlagClear = this._indexNFlagClear;
    }
    if (this._indexSidIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexSidIndex = this._indexSidIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfAreaInterfacePrefixSidAlgorithms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteExplicitNull = undefined;
      this._absoluteNFlagClear = undefined;
      this._absoluteSidLabel = undefined;
      this._algorithmNumber = undefined;
      this._indexExplicitNull = undefined;
      this._indexNFlagClear = undefined;
      this._indexSidIndex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteExplicitNull = value.absoluteExplicitNull;
      this._absoluteNFlagClear = value.absoluteNFlagClear;
      this._absoluteSidLabel = value.absoluteSidLabel;
      this._algorithmNumber = value.algorithmNumber;
      this._indexExplicitNull = value.indexExplicitNull;
      this._indexNFlagClear = value.indexNFlagClear;
      this._indexSidIndex = value.indexSidIndex;
    }
  }

  // absolute_explicit_null - computed: false, optional: true, required: false
  private _absoluteExplicitNull?: boolean | cdktf.IResolvable; 
  public get absoluteExplicitNull() {
    return this.getBooleanAttribute('absolute_explicit_null');
  }
  public set absoluteExplicitNull(value: boolean | cdktf.IResolvable) {
    this._absoluteExplicitNull = value;
  }
  public resetAbsoluteExplicitNull() {
    this._absoluteExplicitNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteExplicitNullInput() {
    return this._absoluteExplicitNull;
  }

  // absolute_n_flag_clear - computed: false, optional: true, required: false
  private _absoluteNFlagClear?: boolean | cdktf.IResolvable; 
  public get absoluteNFlagClear() {
    return this.getBooleanAttribute('absolute_n_flag_clear');
  }
  public set absoluteNFlagClear(value: boolean | cdktf.IResolvable) {
    this._absoluteNFlagClear = value;
  }
  public resetAbsoluteNFlagClear() {
    this._absoluteNFlagClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteNFlagClearInput() {
    return this._absoluteNFlagClear;
  }

  // absolute_sid_label - computed: false, optional: true, required: false
  private _absoluteSidLabel?: number; 
  public get absoluteSidLabel() {
    return this.getNumberAttribute('absolute_sid_label');
  }
  public set absoluteSidLabel(value: number) {
    this._absoluteSidLabel = value;
  }
  public resetAbsoluteSidLabel() {
    this._absoluteSidLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteSidLabelInput() {
    return this._absoluteSidLabel;
  }

  // algorithm_number - computed: false, optional: false, required: true
  private _algorithmNumber?: number; 
  public get algorithmNumber() {
    return this.getNumberAttribute('algorithm_number');
  }
  public set algorithmNumber(value: number) {
    this._algorithmNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNumberInput() {
    return this._algorithmNumber;
  }

  // index_explicit_null - computed: false, optional: true, required: false
  private _indexExplicitNull?: boolean | cdktf.IResolvable; 
  public get indexExplicitNull() {
    return this.getBooleanAttribute('index_explicit_null');
  }
  public set indexExplicitNull(value: boolean | cdktf.IResolvable) {
    this._indexExplicitNull = value;
  }
  public resetIndexExplicitNull() {
    this._indexExplicitNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexExplicitNullInput() {
    return this._indexExplicitNull;
  }

  // index_n_flag_clear - computed: false, optional: true, required: false
  private _indexNFlagClear?: boolean | cdktf.IResolvable; 
  public get indexNFlagClear() {
    return this.getBooleanAttribute('index_n_flag_clear');
  }
  public set indexNFlagClear(value: boolean | cdktf.IResolvable) {
    this._indexNFlagClear = value;
  }
  public resetIndexNFlagClear() {
    this._indexNFlagClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNFlagClearInput() {
    return this._indexNFlagClear;
  }

  // index_sid_index - computed: false, optional: true, required: false
  private _indexSidIndex?: number; 
  public get indexSidIndex() {
    return this.getNumberAttribute('index_sid_index');
  }
  public set indexSidIndex(value: number) {
    this._indexSidIndex = value;
  }
  public resetIndexSidIndex() {
    this._indexSidIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexSidIndexInput() {
    return this._indexSidIndex;
  }
}

export class RouterOspfAreaInterfacePrefixSidAlgorithmsList extends cdktf.ComplexList {
  public internalValue? : RouterOspfAreaInterfacePrefixSidAlgorithms[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaInterfacePrefixSidAlgorithmsOutputReference {
    return new RouterOspfAreaInterfacePrefixSidAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface iosxr_router_ospf_area_interface}
*/
export class RouterOspfAreaInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_ospf_area_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspfAreaInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspfAreaInterface to import
  * @param importFromId The id of the existing RouterOspfAreaInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspfAreaInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_ospf_area_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_area_interface iosxr_router_ospf_area_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspfAreaInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: RouterOspfAreaInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_ospf_area_interface',
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
    this._areaId = config.areaId;
    this._cost = config.cost;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._fastReroutePerPrefixTiLfa = config.fastReroutePerPrefixTiLfa;
    this._fastReroutePerPrefixTiebreakerNodeProtecting = config.fastReroutePerPrefixTiebreakerNodeProtecting;
    this._fastReroutePerPrefixTiebreakerSrlgDisjoint = config.fastReroutePerPrefixTiebreakerSrlgDisjoint;
    this._interfaceName = config.interfaceName;
    this._networkBroadcast = config.networkBroadcast;
    this._networkNonBroadcast = config.networkNonBroadcast;
    this._networkPointToMultipoint = config.networkPointToMultipoint;
    this._networkPointToPoint = config.networkPointToPoint;
    this._passiveDisable = config.passiveDisable;
    this._passiveEnable = config.passiveEnable;
    this._prefixSidAlgorithms.internalValue = config.prefixSidAlgorithms;
    this._prefixSidStrictSpfIndex = config.prefixSidStrictSpfIndex;
    this._priority = config.priority;
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

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // fast_reroute_per_prefix_ti_lfa - computed: false, optional: true, required: false
  private _fastReroutePerPrefixTiLfa?: boolean | cdktf.IResolvable; 
  public get fastReroutePerPrefixTiLfa() {
    return this.getBooleanAttribute('fast_reroute_per_prefix_ti_lfa');
  }
  public set fastReroutePerPrefixTiLfa(value: boolean | cdktf.IResolvable) {
    this._fastReroutePerPrefixTiLfa = value;
  }
  public resetFastReroutePerPrefixTiLfa() {
    this._fastReroutePerPrefixTiLfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixTiLfaInput() {
    return this._fastReroutePerPrefixTiLfa;
  }

  // fast_reroute_per_prefix_tiebreaker_node_protecting - computed: false, optional: true, required: false
  private _fastReroutePerPrefixTiebreakerNodeProtecting?: number; 
  public get fastReroutePerPrefixTiebreakerNodeProtecting() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_node_protecting');
  }
  public set fastReroutePerPrefixTiebreakerNodeProtecting(value: number) {
    this._fastReroutePerPrefixTiebreakerNodeProtecting = value;
  }
  public resetFastReroutePerPrefixTiebreakerNodeProtecting() {
    this._fastReroutePerPrefixTiebreakerNodeProtecting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixTiebreakerNodeProtectingInput() {
    return this._fastReroutePerPrefixTiebreakerNodeProtecting;
  }

  // fast_reroute_per_prefix_tiebreaker_srlg_disjoint - computed: false, optional: true, required: false
  private _fastReroutePerPrefixTiebreakerSrlgDisjoint?: number; 
  public get fastReroutePerPrefixTiebreakerSrlgDisjoint() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_srlg_disjoint');
  }
  public set fastReroutePerPrefixTiebreakerSrlgDisjoint(value: number) {
    this._fastReroutePerPrefixTiebreakerSrlgDisjoint = value;
  }
  public resetFastReroutePerPrefixTiebreakerSrlgDisjoint() {
    this._fastReroutePerPrefixTiebreakerSrlgDisjoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixTiebreakerSrlgDisjointInput() {
    return this._fastReroutePerPrefixTiebreakerSrlgDisjoint;
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

  // network_broadcast - computed: false, optional: true, required: false
  private _networkBroadcast?: boolean | cdktf.IResolvable; 
  public get networkBroadcast() {
    return this.getBooleanAttribute('network_broadcast');
  }
  public set networkBroadcast(value: boolean | cdktf.IResolvable) {
    this._networkBroadcast = value;
  }
  public resetNetworkBroadcast() {
    this._networkBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkBroadcastInput() {
    return this._networkBroadcast;
  }

  // network_non_broadcast - computed: false, optional: true, required: false
  private _networkNonBroadcast?: boolean | cdktf.IResolvable; 
  public get networkNonBroadcast() {
    return this.getBooleanAttribute('network_non_broadcast');
  }
  public set networkNonBroadcast(value: boolean | cdktf.IResolvable) {
    this._networkNonBroadcast = value;
  }
  public resetNetworkNonBroadcast() {
    this._networkNonBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNonBroadcastInput() {
    return this._networkNonBroadcast;
  }

  // network_point_to_multipoint - computed: false, optional: true, required: false
  private _networkPointToMultipoint?: boolean | cdktf.IResolvable; 
  public get networkPointToMultipoint() {
    return this.getBooleanAttribute('network_point_to_multipoint');
  }
  public set networkPointToMultipoint(value: boolean | cdktf.IResolvable) {
    this._networkPointToMultipoint = value;
  }
  public resetNetworkPointToMultipoint() {
    this._networkPointToMultipoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPointToMultipointInput() {
    return this._networkPointToMultipoint;
  }

  // network_point_to_point - computed: false, optional: true, required: false
  private _networkPointToPoint?: boolean | cdktf.IResolvable; 
  public get networkPointToPoint() {
    return this.getBooleanAttribute('network_point_to_point');
  }
  public set networkPointToPoint(value: boolean | cdktf.IResolvable) {
    this._networkPointToPoint = value;
  }
  public resetNetworkPointToPoint() {
    this._networkPointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPointToPointInput() {
    return this._networkPointToPoint;
  }

  // passive_disable - computed: false, optional: true, required: false
  private _passiveDisable?: boolean | cdktf.IResolvable; 
  public get passiveDisable() {
    return this.getBooleanAttribute('passive_disable');
  }
  public set passiveDisable(value: boolean | cdktf.IResolvable) {
    this._passiveDisable = value;
  }
  public resetPassiveDisable() {
    this._passiveDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveDisableInput() {
    return this._passiveDisable;
  }

  // passive_enable - computed: false, optional: true, required: false
  private _passiveEnable?: boolean | cdktf.IResolvable; 
  public get passiveEnable() {
    return this.getBooleanAttribute('passive_enable');
  }
  public set passiveEnable(value: boolean | cdktf.IResolvable) {
    this._passiveEnable = value;
  }
  public resetPassiveEnable() {
    this._passiveEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveEnableInput() {
    return this._passiveEnable;
  }

  // prefix_sid_algorithms - computed: false, optional: true, required: false
  private _prefixSidAlgorithms = new RouterOspfAreaInterfacePrefixSidAlgorithmsList(this, "prefix_sid_algorithms", false);
  public get prefixSidAlgorithms() {
    return this._prefixSidAlgorithms;
  }
  public putPrefixSidAlgorithms(value: RouterOspfAreaInterfacePrefixSidAlgorithms[] | cdktf.IResolvable) {
    this._prefixSidAlgorithms.internalValue = value;
  }
  public resetPrefixSidAlgorithms() {
    this._prefixSidAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSidAlgorithmsInput() {
    return this._prefixSidAlgorithms.internalValue;
  }

  // prefix_sid_strict_spf_index - computed: false, optional: true, required: false
  private _prefixSidStrictSpfIndex?: number; 
  public get prefixSidStrictSpfIndex() {
    return this.getNumberAttribute('prefix_sid_strict_spf_index');
  }
  public set prefixSidStrictSpfIndex(value: number) {
    this._prefixSidStrictSpfIndex = value;
  }
  public resetPrefixSidStrictSpfIndex() {
    this._prefixSidStrictSpfIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSidStrictSpfIndexInput() {
    return this._prefixSidStrictSpfIndex;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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
      cost: cdktf.numberToTerraform(this._cost),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      fast_reroute_per_prefix_ti_lfa: cdktf.booleanToTerraform(this._fastReroutePerPrefixTiLfa),
      fast_reroute_per_prefix_tiebreaker_node_protecting: cdktf.numberToTerraform(this._fastReroutePerPrefixTiebreakerNodeProtecting),
      fast_reroute_per_prefix_tiebreaker_srlg_disjoint: cdktf.numberToTerraform(this._fastReroutePerPrefixTiebreakerSrlgDisjoint),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      network_broadcast: cdktf.booleanToTerraform(this._networkBroadcast),
      network_non_broadcast: cdktf.booleanToTerraform(this._networkNonBroadcast),
      network_point_to_multipoint: cdktf.booleanToTerraform(this._networkPointToMultipoint),
      network_point_to_point: cdktf.booleanToTerraform(this._networkPointToPoint),
      passive_disable: cdktf.booleanToTerraform(this._passiveDisable),
      passive_enable: cdktf.booleanToTerraform(this._passiveEnable),
      prefix_sid_algorithms: cdktf.listMapper(routerOspfAreaInterfacePrefixSidAlgorithmsToTerraform, false)(this._prefixSidAlgorithms.internalValue),
      prefix_sid_strict_spf_index: cdktf.numberToTerraform(this._prefixSidStrictSpfIndex),
      priority: cdktf.numberToTerraform(this._priority),
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
      cost: {
        value: cdktf.numberToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      fast_reroute_per_prefix_ti_lfa: {
        value: cdktf.booleanToHclTerraform(this._fastReroutePerPrefixTiLfa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fast_reroute_per_prefix_tiebreaker_node_protecting: {
        value: cdktf.numberToHclTerraform(this._fastReroutePerPrefixTiebreakerNodeProtecting),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_reroute_per_prefix_tiebreaker_srlg_disjoint: {
        value: cdktf.numberToHclTerraform(this._fastReroutePerPrefixTiebreakerSrlgDisjoint),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_broadcast: {
        value: cdktf.booleanToHclTerraform(this._networkBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_non_broadcast: {
        value: cdktf.booleanToHclTerraform(this._networkNonBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_point_to_multipoint: {
        value: cdktf.booleanToHclTerraform(this._networkPointToMultipoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_point_to_point: {
        value: cdktf.booleanToHclTerraform(this._networkPointToPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passive_disable: {
        value: cdktf.booleanToHclTerraform(this._passiveDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passive_enable: {
        value: cdktf.booleanToHclTerraform(this._passiveEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prefix_sid_algorithms: {
        value: cdktf.listMapperHcl(routerOspfAreaInterfacePrefixSidAlgorithmsToHclTerraform, false)(this._prefixSidAlgorithms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfAreaInterfacePrefixSidAlgorithmsList",
      },
      prefix_sid_strict_spf_index: {
        value: cdktf.numberToHclTerraform(this._prefixSidStrictSpfIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
