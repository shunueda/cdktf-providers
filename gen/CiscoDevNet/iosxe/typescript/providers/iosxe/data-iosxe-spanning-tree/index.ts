// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/spanning_tree
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeSpanningTreeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/spanning_tree#device DataIosxeSpanningTree#device}
  */
  readonly device?: string;
}
export interface DataIosxeSpanningTreeMstInstances {
}

export function dataIosxeSpanningTreeMstInstancesToTerraform(struct?: DataIosxeSpanningTreeMstInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSpanningTreeMstInstancesToHclTerraform(struct?: DataIosxeSpanningTreeMstInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSpanningTreeMstInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSpanningTreeMstInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSpanningTreeMstInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // vlan_ids - computed: true, optional: false, required: false
  public get vlanIds() {
    return this.getNumberListAttribute('vlan_ids');
  }
}

export class DataIosxeSpanningTreeMstInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSpanningTreeMstInstancesOutputReference {
    return new DataIosxeSpanningTreeMstInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSpanningTreeVlans {
}

export function dataIosxeSpanningTreeVlansToTerraform(struct?: DataIosxeSpanningTreeVlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSpanningTreeVlansToHclTerraform(struct?: DataIosxeSpanningTreeVlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSpanningTreeVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSpanningTreeVlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSpanningTreeVlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataIosxeSpanningTreeVlansList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSpanningTreeVlansOutputReference {
    return new DataIosxeSpanningTreeVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/spanning_tree iosxe_spanning_tree}
*/
export class DataIosxeSpanningTree extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_spanning_tree";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeSpanningTree resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeSpanningTree to import
  * @param importFromId The id of the existing DataIosxeSpanningTree that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/spanning_tree#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeSpanningTree to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_spanning_tree", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/spanning_tree iosxe_spanning_tree} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeSpanningTreeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeSpanningTreeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_spanning_tree',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
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

  // extend_system_id - computed: true, optional: false, required: false
  public get extendSystemId() {
    return this.getBooleanAttribute('extend_system_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging - computed: true, optional: false, required: false
  public get logging() {
    return this.getBooleanAttribute('logging');
  }

  // loopguard_default - computed: true, optional: false, required: false
  public get loopguardDefault() {
    return this.getBooleanAttribute('loopguard_default');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // mst_instances - computed: true, optional: false, required: false
  private _mstInstances = new DataIosxeSpanningTreeMstInstancesList(this, "mst_instances", false);
  public get mstInstances() {
    return this._mstInstances;
  }

  // portfast_bpduguard_default - computed: true, optional: false, required: false
  public get portfastBpduguardDefault() {
    return this.getBooleanAttribute('portfast_bpduguard_default');
  }

  // portfast_default - computed: true, optional: false, required: false
  public get portfastDefault() {
    return this.getBooleanAttribute('portfast_default');
  }

  // vlans - computed: true, optional: false, required: false
  private _vlans = new DataIosxeSpanningTreeVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
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
