// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/cce_nodes_remove
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CceNodesRemoveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/cce_nodes_remove#cluster_id CceNodesRemove#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/cce_nodes_remove#enable_force_new CceNodesRemove#enable_force_new}
  */
  readonly enableForceNew?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/cce_nodes_remove#id CceNodesRemove#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/cce_nodes_remove#region CceNodesRemove#region}
  */
  readonly region?: string;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/cce_nodes_remove#nodes CceNodesRemove#nodes}
  */
  readonly nodes: CceNodesRemoveNodes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/cce_nodes_remove#timeouts CceNodesRemove#timeouts}
  */
  readonly timeouts?: CceNodesRemoveTimeouts;
}
export interface CceNodesRemoveNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/cce_nodes_remove#uid CceNodesRemove#uid}
  */
  readonly uid: string;
}

export function cceNodesRemoveNodesToTerraform(struct?: CceNodesRemoveNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function cceNodesRemoveNodesToHclTerraform(struct?: CceNodesRemoveNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CceNodesRemoveNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CceNodesRemoveNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodesRemoveNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uid = value.uid;
    }
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class CceNodesRemoveNodesList extends cdktf.ComplexList {
  public internalValue? : CceNodesRemoveNodes[] | cdktf.IResolvable

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
  public get(index: number): CceNodesRemoveNodesOutputReference {
    return new CceNodesRemoveNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceNodesRemoveTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/cce_nodes_remove#create CceNodesRemove#create}
  */
  readonly create?: string;
}

export function cceNodesRemoveTimeoutsToTerraform(struct?: CceNodesRemoveTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function cceNodesRemoveTimeoutsToHclTerraform(struct?: CceNodesRemoveTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CceNodesRemoveTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CceNodesRemoveTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodesRemoveTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/cce_nodes_remove sbercloud_cce_nodes_remove}
*/
export class CceNodesRemove extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_cce_nodes_remove";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CceNodesRemove resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CceNodesRemove to import
  * @param importFromId The id of the existing CceNodesRemove that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/cce_nodes_remove#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CceNodesRemove to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_cce_nodes_remove", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/cce_nodes_remove sbercloud_cce_nodes_remove} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CceNodesRemoveConfig
  */
  public constructor(scope: Construct, id: string, config: CceNodesRemoveConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_cce_nodes_remove',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._enableForceNew = config.enableForceNew;
    this._id = config.id;
    this._region = config.region;
    this._nodes.internalValue = config.nodes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // enable_force_new - computed: false, optional: true, required: false
  private _enableForceNew?: string; 
  public get enableForceNew() {
    return this.getStringAttribute('enable_force_new');
  }
  public set enableForceNew(value: string) {
    this._enableForceNew = value;
  }
  public resetEnableForceNew() {
    this._enableForceNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForceNewInput() {
    return this._enableForceNew;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new CceNodesRemoveNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: CceNodesRemoveNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CceNodesRemoveTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CceNodesRemoveTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      enable_force_new: cdktf.stringToTerraform(this._enableForceNew),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      nodes: cdktf.listMapper(cceNodesRemoveNodesToTerraform, true)(this._nodes.internalValue),
      timeouts: cceNodesRemoveTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_force_new: {
        value: cdktf.stringToHclTerraform(this._enableForceNew),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodes: {
        value: cdktf.listMapperHcl(cceNodesRemoveNodesToHclTerraform, true)(this._nodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CceNodesRemoveNodesList",
      },
      timeouts: {
        value: cceNodesRemoveTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CceNodesRemoveTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
