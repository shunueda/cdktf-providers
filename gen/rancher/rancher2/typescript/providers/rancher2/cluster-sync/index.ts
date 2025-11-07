// https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterSyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster id to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync#cluster_id ClusterSync#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync#id ClusterSync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster node pool ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync#node_pool_ids ClusterSync#node_pool_ids}
  */
  readonly nodePoolIds?: string[];
  /**
  * Wait until active status is confirmed a number of times (wait interval of 5s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync#state_confirm ClusterSync#state_confirm}
  */
  readonly stateConfirm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync#synced ClusterSync#synced}
  */
  readonly synced?: boolean | cdktf.IResolvable;
  /**
  * Wait until all catalogs are downloaded and active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync#wait_catalogs ClusterSync#wait_catalogs}
  */
  readonly waitCatalogs?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync#timeouts ClusterSync#timeouts}
  */
  readonly timeouts?: ClusterSyncTimeouts;
}
export interface ClusterSyncNodes {
}

export function clusterSyncNodesToTerraform(struct?: ClusterSyncNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterSyncNodesToHclTerraform(struct?: ClusterSyncNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterSyncNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSyncNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSyncNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // capacity - computed: true, optional: false, required: false
  private _capacity = new cdktf.StringMap(this, "capacity");
  public get capacity() {
    return this._capacity;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // external_ip_address - computed: true, optional: false, required: false
  public get externalIpAddress() {
    return this.getStringAttribute('external_ip_address');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_pool_id - computed: true, optional: false, required: false
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // node_template_id - computed: true, optional: false, required: false
  public get nodeTemplateId() {
    return this.getStringAttribute('node_template_id');
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }

  // requested_hostname - computed: true, optional: false, required: false
  public get requestedHostname() {
    return this.getStringAttribute('requested_hostname');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // ssh_user - computed: true, optional: false, required: false
  public get sshUser() {
    return this.getStringAttribute('ssh_user');
  }

  // system_info - computed: true, optional: false, required: false
  private _systemInfo = new cdktf.StringMap(this, "system_info");
  public get systemInfo() {
    return this._systemInfo;
  }
}

export class ClusterSyncNodesList extends cdktf.ComplexList {

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
  public get(index: number): ClusterSyncNodesOutputReference {
    return new ClusterSyncNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSyncTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync#create ClusterSync#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync#delete ClusterSync#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync#update ClusterSync#update}
  */
  readonly update?: string;
}

export function clusterSyncTimeoutsToTerraform(struct?: ClusterSyncTimeouts | cdktf.IResolvable): any {
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


export function clusterSyncTimeoutsToHclTerraform(struct?: ClusterSyncTimeouts | cdktf.IResolvable): any {
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

export class ClusterSyncTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterSyncTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSyncTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync rancher2_cluster_sync}
*/
export class ClusterSync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_cluster_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterSync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterSync to import
  * @param importFromId The id of the existing ClusterSync that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterSync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_cluster_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cluster_sync rancher2_cluster_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterSyncConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterSyncConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_cluster_sync',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '8.3.1'
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
    this._nodePoolIds = config.nodePoolIds;
    this._stateConfirm = config.stateConfirm;
    this._synced = config.synced;
    this._waitCatalogs = config.waitCatalogs;
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

  // default_project_id - computed: true, optional: false, required: false
  public get defaultProjectId() {
    return this.getStringAttribute('default_project_id');
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

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // node_pool_ids - computed: false, optional: true, required: false
  private _nodePoolIds?: string[]; 
  public get nodePoolIds() {
    return this.getListAttribute('node_pool_ids');
  }
  public set nodePoolIds(value: string[]) {
    this._nodePoolIds = value;
  }
  public resetNodePoolIds() {
    this._nodePoolIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolIdsInput() {
    return this._nodePoolIds;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new ClusterSyncNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // state_confirm - computed: false, optional: true, required: false
  private _stateConfirm?: number; 
  public get stateConfirm() {
    return this.getNumberAttribute('state_confirm');
  }
  public set stateConfirm(value: number) {
    this._stateConfirm = value;
  }
  public resetStateConfirm() {
    this._stateConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateConfirmInput() {
    return this._stateConfirm;
  }

  // synced - computed: false, optional: true, required: false
  private _synced?: boolean | cdktf.IResolvable; 
  public get synced() {
    return this.getBooleanAttribute('synced');
  }
  public set synced(value: boolean | cdktf.IResolvable) {
    this._synced = value;
  }
  public resetSynced() {
    this._synced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncedInput() {
    return this._synced;
  }

  // system_project_id - computed: true, optional: false, required: false
  public get systemProjectId() {
    return this.getStringAttribute('system_project_id');
  }

  // wait_catalogs - computed: false, optional: true, required: false
  private _waitCatalogs?: boolean | cdktf.IResolvable; 
  public get waitCatalogs() {
    return this.getBooleanAttribute('wait_catalogs');
  }
  public set waitCatalogs(value: boolean | cdktf.IResolvable) {
    this._waitCatalogs = value;
  }
  public resetWaitCatalogs() {
    this._waitCatalogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitCatalogsInput() {
    return this._waitCatalogs;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterSyncTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterSyncTimeouts) {
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
      node_pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodePoolIds),
      state_confirm: cdktf.numberToTerraform(this._stateConfirm),
      synced: cdktf.booleanToTerraform(this._synced),
      wait_catalogs: cdktf.booleanToTerraform(this._waitCatalogs),
      timeouts: clusterSyncTimeoutsToTerraform(this._timeouts.internalValue),
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
      node_pool_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodePoolIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      state_confirm: {
        value: cdktf.numberToHclTerraform(this._stateConfirm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      synced: {
        value: cdktf.booleanToHclTerraform(this._synced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_catalogs: {
        value: cdktf.booleanToHclTerraform(this._waitCatalogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: clusterSyncTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterSyncTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
