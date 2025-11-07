// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnipsecFecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#dynamic_sort_subtable VpnipsecFec#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#get_all_tables VpnipsecFec#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#id VpnipsecFec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#name VpnipsecFec#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#vdomparam VpnipsecFec#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#mappings VpnipsecFec#mappings}
  */
  readonly mappings?: VpnipsecFecMappings[] | cdktf.IResolvable;
}
export interface VpnipsecFecMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#bandwidth_bi_threshold VpnipsecFec#bandwidth_bi_threshold}
  */
  readonly bandwidthBiThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#bandwidth_down_threshold VpnipsecFec#bandwidth_down_threshold}
  */
  readonly bandwidthDownThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#bandwidth_up_threshold VpnipsecFec#bandwidth_up_threshold}
  */
  readonly bandwidthUpThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#base VpnipsecFec#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#latency_threshold VpnipsecFec#latency_threshold}
  */
  readonly latencyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#packet_loss_threshold VpnipsecFec#packet_loss_threshold}
  */
  readonly packetLossThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#redundant VpnipsecFec#redundant}
  */
  readonly redundant?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#seqno VpnipsecFec#seqno}
  */
  readonly seqno?: number;
}

export function vpnipsecFecMappingsToTerraform(struct?: VpnipsecFecMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_bi_threshold: cdktf.numberToTerraform(struct!.bandwidthBiThreshold),
    bandwidth_down_threshold: cdktf.numberToTerraform(struct!.bandwidthDownThreshold),
    bandwidth_up_threshold: cdktf.numberToTerraform(struct!.bandwidthUpThreshold),
    base: cdktf.numberToTerraform(struct!.base),
    latency_threshold: cdktf.numberToTerraform(struct!.latencyThreshold),
    packet_loss_threshold: cdktf.numberToTerraform(struct!.packetLossThreshold),
    redundant: cdktf.numberToTerraform(struct!.redundant),
    seqno: cdktf.numberToTerraform(struct!.seqno),
  }
}


export function vpnipsecFecMappingsToHclTerraform(struct?: VpnipsecFecMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_bi_threshold: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthBiThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_down_threshold: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthDownThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_up_threshold: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthUpThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    base: {
      value: cdktf.numberToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_threshold: {
      value: cdktf.numberToHclTerraform(struct!.latencyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_loss_threshold: {
      value: cdktf.numberToHclTerraform(struct!.packetLossThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redundant: {
      value: cdktf.numberToHclTerraform(struct!.redundant),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seqno: {
      value: cdktf.numberToHclTerraform(struct!.seqno),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnipsecFecMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnipsecFecMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthBiThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthBiThreshold = this._bandwidthBiThreshold;
    }
    if (this._bandwidthDownThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthDownThreshold = this._bandwidthDownThreshold;
    }
    if (this._bandwidthUpThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthUpThreshold = this._bandwidthUpThreshold;
    }
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._latencyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyThreshold = this._latencyThreshold;
    }
    if (this._packetLossThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLossThreshold = this._packetLossThreshold;
    }
    if (this._redundant !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundant = this._redundant;
    }
    if (this._seqno !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqno = this._seqno;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnipsecFecMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthBiThreshold = undefined;
      this._bandwidthDownThreshold = undefined;
      this._bandwidthUpThreshold = undefined;
      this._base = undefined;
      this._latencyThreshold = undefined;
      this._packetLossThreshold = undefined;
      this._redundant = undefined;
      this._seqno = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthBiThreshold = value.bandwidthBiThreshold;
      this._bandwidthDownThreshold = value.bandwidthDownThreshold;
      this._bandwidthUpThreshold = value.bandwidthUpThreshold;
      this._base = value.base;
      this._latencyThreshold = value.latencyThreshold;
      this._packetLossThreshold = value.packetLossThreshold;
      this._redundant = value.redundant;
      this._seqno = value.seqno;
    }
  }

  // bandwidth_bi_threshold - computed: false, optional: true, required: false
  private _bandwidthBiThreshold?: number; 
  public get bandwidthBiThreshold() {
    return this.getNumberAttribute('bandwidth_bi_threshold');
  }
  public set bandwidthBiThreshold(value: number) {
    this._bandwidthBiThreshold = value;
  }
  public resetBandwidthBiThreshold() {
    this._bandwidthBiThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthBiThresholdInput() {
    return this._bandwidthBiThreshold;
  }

  // bandwidth_down_threshold - computed: false, optional: true, required: false
  private _bandwidthDownThreshold?: number; 
  public get bandwidthDownThreshold() {
    return this.getNumberAttribute('bandwidth_down_threshold');
  }
  public set bandwidthDownThreshold(value: number) {
    this._bandwidthDownThreshold = value;
  }
  public resetBandwidthDownThreshold() {
    this._bandwidthDownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthDownThresholdInput() {
    return this._bandwidthDownThreshold;
  }

  // bandwidth_up_threshold - computed: false, optional: true, required: false
  private _bandwidthUpThreshold?: number; 
  public get bandwidthUpThreshold() {
    return this.getNumberAttribute('bandwidth_up_threshold');
  }
  public set bandwidthUpThreshold(value: number) {
    this._bandwidthUpThreshold = value;
  }
  public resetBandwidthUpThreshold() {
    this._bandwidthUpThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthUpThresholdInput() {
    return this._bandwidthUpThreshold;
  }

  // base - computed: false, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // latency_threshold - computed: false, optional: true, required: false
  private _latencyThreshold?: number; 
  public get latencyThreshold() {
    return this.getNumberAttribute('latency_threshold');
  }
  public set latencyThreshold(value: number) {
    this._latencyThreshold = value;
  }
  public resetLatencyThreshold() {
    this._latencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdInput() {
    return this._latencyThreshold;
  }

  // packet_loss_threshold - computed: false, optional: true, required: false
  private _packetLossThreshold?: number; 
  public get packetLossThreshold() {
    return this.getNumberAttribute('packet_loss_threshold');
  }
  public set packetLossThreshold(value: number) {
    this._packetLossThreshold = value;
  }
  public resetPacketLossThreshold() {
    this._packetLossThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLossThresholdInput() {
    return this._packetLossThreshold;
  }

  // redundant - computed: false, optional: true, required: false
  private _redundant?: number; 
  public get redundant() {
    return this.getNumberAttribute('redundant');
  }
  public set redundant(value: number) {
    this._redundant = value;
  }
  public resetRedundant() {
    this._redundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantInput() {
    return this._redundant;
  }

  // seqno - computed: false, optional: true, required: false
  private _seqno?: number; 
  public get seqno() {
    return this.getNumberAttribute('seqno');
  }
  public set seqno(value: number) {
    this._seqno = value;
  }
  public resetSeqno() {
    this._seqno = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqnoInput() {
    return this._seqno;
  }
}

export class VpnipsecFecMappingsList extends cdktf.ComplexList {
  public internalValue? : VpnipsecFecMappings[] | cdktf.IResolvable

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
  public get(index: number): VpnipsecFecMappingsOutputReference {
    return new VpnipsecFecMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec fortios_vpnipsec_fec}
*/
export class VpnipsecFec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_vpnipsec_fec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnipsecFec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnipsecFec to import
  * @param importFromId The id of the existing VpnipsecFec that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnipsecFec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_vpnipsec_fec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnipsec_fec fortios_vpnipsec_fec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnipsecFecConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnipsecFecConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_vpnipsec_fec',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._mappings.internalValue = config.mappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // vdomparam - computed: true, optional: true, required: false
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

  // mappings - computed: false, optional: true, required: false
  private _mappings = new VpnipsecFecMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: VpnipsecFecMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      mappings: cdktf.listMapper(vpnipsecFecMappingsToTerraform, true)(this._mappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappings: {
        value: cdktf.listMapperHcl(vpnipsecFecMappingsToHclTerraform, true)(this._mappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnipsecFecMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
