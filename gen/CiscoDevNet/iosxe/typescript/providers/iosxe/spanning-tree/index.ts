// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpanningTreeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree#device SpanningTree#device}
  */
  readonly device?: string;
  /**
  * Extend system-id into priority portion of the bridge id (PVST & Rapid PVST only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree#extend_system_id SpanningTree#extend_system_id}
  */
  readonly extendSystemId?: boolean | cdktf.IResolvable;
  /**
  * Enable loopguard by default on all ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree#loopguard_default SpanningTree#loopguard_default}
  */
  readonly loopguardDefault?: boolean | cdktf.IResolvable;
  /**
  * Spanning tree operating mode
  *   - Choices: `mst`, `pvst`, `rapid-pvst`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree#mode SpanningTree#mode}
  */
  readonly mode?: string;
  /**
  * Map vlans to an MST instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree#mst_instances SpanningTree#mst_instances}
  */
  readonly mstInstances?: SpanningTreeMstInstances[] | cdktf.IResolvable;
  /**
  * Enable bpdu guard by default on all portfast edge ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree#portfast_bpduguard_default SpanningTree#portfast_bpduguard_default}
  */
  readonly portfastBpduguardDefault?: boolean | cdktf.IResolvable;
  /**
  * Enable portfast by default on all access ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree#portfast_default SpanningTree#portfast_default}
  */
  readonly portfastDefault?: boolean | cdktf.IResolvable;
}
export interface SpanningTreeMstInstances {
  /**
  * 
  *   - Range: `0`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree#id SpanningTree#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Range of vlans to add to the instance mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree#vlan_ids SpanningTree#vlan_ids}
  */
  readonly vlanIds?: number[];
}

export function spanningTreeMstInstancesToTerraform(struct?: SpanningTreeMstInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    vlan_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vlanIds),
  }
}


export function spanningTreeMstInstancesToHclTerraform(struct?: SpanningTreeMstInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vlanIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpanningTreeMstInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpanningTreeMstInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._vlanIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanIds = this._vlanIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpanningTreeMstInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._vlanIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._vlanIds = value.vlanIds;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // vlan_ids - computed: false, optional: true, required: false
  private _vlanIds?: number[]; 
  public get vlanIds() {
    return this.getNumberListAttribute('vlan_ids');
  }
  public set vlanIds(value: number[]) {
    this._vlanIds = value;
  }
  public resetVlanIds() {
    this._vlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }
}

export class SpanningTreeMstInstancesList extends cdktf.ComplexList {
  public internalValue? : SpanningTreeMstInstances[] | cdktf.IResolvable

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
  public get(index: number): SpanningTreeMstInstancesOutputReference {
    return new SpanningTreeMstInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree iosxe_spanning_tree}
*/
export class SpanningTree extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_spanning_tree";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpanningTree resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpanningTree to import
  * @param importFromId The id of the existing SpanningTree that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpanningTree to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_spanning_tree", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/spanning_tree iosxe_spanning_tree} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpanningTreeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SpanningTreeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_spanning_tree',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
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
    this._extendSystemId = config.extendSystemId;
    this._loopguardDefault = config.loopguardDefault;
    this._mode = config.mode;
    this._mstInstances.internalValue = config.mstInstances;
    this._portfastBpduguardDefault = config.portfastBpduguardDefault;
    this._portfastDefault = config.portfastDefault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // extend_system_id - computed: false, optional: true, required: false
  private _extendSystemId?: boolean | cdktf.IResolvable; 
  public get extendSystemId() {
    return this.getBooleanAttribute('extend_system_id');
  }
  public set extendSystemId(value: boolean | cdktf.IResolvable) {
    this._extendSystemId = value;
  }
  public resetExtendSystemId() {
    this._extendSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendSystemIdInput() {
    return this._extendSystemId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // loopguard_default - computed: false, optional: true, required: false
  private _loopguardDefault?: boolean | cdktf.IResolvable; 
  public get loopguardDefault() {
    return this.getBooleanAttribute('loopguard_default');
  }
  public set loopguardDefault(value: boolean | cdktf.IResolvable) {
    this._loopguardDefault = value;
  }
  public resetLoopguardDefault() {
    this._loopguardDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopguardDefaultInput() {
    return this._loopguardDefault;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mst_instances - computed: false, optional: true, required: false
  private _mstInstances = new SpanningTreeMstInstancesList(this, "mst_instances", false);
  public get mstInstances() {
    return this._mstInstances;
  }
  public putMstInstances(value: SpanningTreeMstInstances[] | cdktf.IResolvable) {
    this._mstInstances.internalValue = value;
  }
  public resetMstInstances() {
    this._mstInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mstInstancesInput() {
    return this._mstInstances.internalValue;
  }

  // portfast_bpduguard_default - computed: false, optional: true, required: false
  private _portfastBpduguardDefault?: boolean | cdktf.IResolvable; 
  public get portfastBpduguardDefault() {
    return this.getBooleanAttribute('portfast_bpduguard_default');
  }
  public set portfastBpduguardDefault(value: boolean | cdktf.IResolvable) {
    this._portfastBpduguardDefault = value;
  }
  public resetPortfastBpduguardDefault() {
    this._portfastBpduguardDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portfastBpduguardDefaultInput() {
    return this._portfastBpduguardDefault;
  }

  // portfast_default - computed: false, optional: true, required: false
  private _portfastDefault?: boolean | cdktf.IResolvable; 
  public get portfastDefault() {
    return this.getBooleanAttribute('portfast_default');
  }
  public set portfastDefault(value: boolean | cdktf.IResolvable) {
    this._portfastDefault = value;
  }
  public resetPortfastDefault() {
    this._portfastDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portfastDefaultInput() {
    return this._portfastDefault;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      extend_system_id: cdktf.booleanToTerraform(this._extendSystemId),
      loopguard_default: cdktf.booleanToTerraform(this._loopguardDefault),
      mode: cdktf.stringToTerraform(this._mode),
      mst_instances: cdktf.listMapper(spanningTreeMstInstancesToTerraform, false)(this._mstInstances.internalValue),
      portfast_bpduguard_default: cdktf.booleanToTerraform(this._portfastBpduguardDefault),
      portfast_default: cdktf.booleanToTerraform(this._portfastDefault),
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
      extend_system_id: {
        value: cdktf.booleanToHclTerraform(this._extendSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      loopguard_default: {
        value: cdktf.booleanToHclTerraform(this._loopguardDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mst_instances: {
        value: cdktf.listMapperHcl(spanningTreeMstInstancesToHclTerraform, false)(this._mstInstances.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpanningTreeMstInstancesList",
      },
      portfast_bpduguard_default: {
        value: cdktf.booleanToHclTerraform(this._portfastBpduguardDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      portfast_default: {
        value: cdktf.booleanToHclTerraform(this._portfastDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
