// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesNodegroupUpgradeV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1#cluster_id KubernetesNodegroupUpgradeV1#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1#id KubernetesNodegroupUpgradeV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1#nodegroup_id KubernetesNodegroupUpgradeV1#nodegroup_id}
  */
  readonly nodegroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1#num_buffer_nodes KubernetesNodegroupUpgradeV1#num_buffer_nodes}
  */
  readonly numBufferNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1#num_max_unavailable_nodes KubernetesNodegroupUpgradeV1#num_max_unavailable_nodes}
  */
  readonly numMaxUnavailableNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1#region KubernetesNodegroupUpgradeV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1#version KubernetesNodegroupUpgradeV1#version}
  */
  readonly version: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1#timeouts KubernetesNodegroupUpgradeV1#timeouts}
  */
  readonly timeouts?: KubernetesNodegroupUpgradeV1Timeouts;
}
export interface KubernetesNodegroupUpgradeV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1#create KubernetesNodegroupUpgradeV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1#delete KubernetesNodegroupUpgradeV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1#update KubernetesNodegroupUpgradeV1#update}
  */
  readonly update?: string;
}

export function kubernetesNodegroupUpgradeV1TimeoutsToTerraform(struct?: KubernetesNodegroupUpgradeV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kubernetesNodegroupUpgradeV1TimeoutsToHclTerraform(struct?: KubernetesNodegroupUpgradeV1Timeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodegroupUpgradeV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesNodegroupUpgradeV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodegroupUpgradeV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1 nhncloud_kubernetes_nodegroup_upgrade_v1}
*/
export class KubernetesNodegroupUpgradeV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_kubernetes_nodegroup_upgrade_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesNodegroupUpgradeV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesNodegroupUpgradeV1 to import
  * @param importFromId The id of the existing KubernetesNodegroupUpgradeV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesNodegroupUpgradeV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_kubernetes_nodegroup_upgrade_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_nodegroup_upgrade_v1 nhncloud_kubernetes_nodegroup_upgrade_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesNodegroupUpgradeV1Config
  */
  public constructor(scope: Construct, id: string, config: KubernetesNodegroupUpgradeV1Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_kubernetes_nodegroup_upgrade_v1',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
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
    this._id = config.id;
    this._nodegroupId = config.nodegroupId;
    this._numBufferNodes = config.numBufferNodes;
    this._numMaxUnavailableNodes = config.numMaxUnavailableNodes;
    this._region = config.region;
    this._version = config.version;
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

  // nodegroup_id - computed: false, optional: false, required: true
  private _nodegroupId?: string; 
  public get nodegroupId() {
    return this.getStringAttribute('nodegroup_id');
  }
  public set nodegroupId(value: string) {
    this._nodegroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodegroupIdInput() {
    return this._nodegroupId;
  }

  // num_buffer_nodes - computed: false, optional: true, required: false
  private _numBufferNodes?: number; 
  public get numBufferNodes() {
    return this.getNumberAttribute('num_buffer_nodes');
  }
  public set numBufferNodes(value: number) {
    this._numBufferNodes = value;
  }
  public resetNumBufferNodes() {
    this._numBufferNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numBufferNodesInput() {
    return this._numBufferNodes;
  }

  // num_max_unavailable_nodes - computed: false, optional: true, required: false
  private _numMaxUnavailableNodes?: number; 
  public get numMaxUnavailableNodes() {
    return this.getNumberAttribute('num_max_unavailable_nodes');
  }
  public set numMaxUnavailableNodes(value: number) {
    this._numMaxUnavailableNodes = value;
  }
  public resetNumMaxUnavailableNodes() {
    this._numMaxUnavailableNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numMaxUnavailableNodesInput() {
    return this._numMaxUnavailableNodes;
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesNodegroupUpgradeV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesNodegroupUpgradeV1Timeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      nodegroup_id: cdktf.stringToTerraform(this._nodegroupId),
      num_buffer_nodes: cdktf.numberToTerraform(this._numBufferNodes),
      num_max_unavailable_nodes: cdktf.numberToTerraform(this._numMaxUnavailableNodes),
      region: cdktf.stringToTerraform(this._region),
      version: cdktf.stringToTerraform(this._version),
      timeouts: kubernetesNodegroupUpgradeV1TimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodegroup_id: {
        value: cdktf.stringToHclTerraform(this._nodegroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_buffer_nodes: {
        value: cdktf.numberToHclTerraform(this._numBufferNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_max_unavailable_nodes: {
        value: cdktf.numberToHclTerraform(this._numMaxUnavailableNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: kubernetesNodegroupUpgradeV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesNodegroupUpgradeV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
