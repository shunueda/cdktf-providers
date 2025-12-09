// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformKubernetesNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pool#id DataSamsungcloudplatformKubernetesNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Kubernetes Engine Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pool#kubernetes_engine_id DataSamsungcloudplatformKubernetesNodePool#kubernetes_engine_id}
  */
  readonly kubernetesEngineId: string;
  /**
  * Node Pool Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pool#node_pool_id DataSamsungcloudplatformKubernetesNodePool#node_pool_id}
  */
  readonly nodePoolId: string;
}
export interface DataSamsungcloudplatformKubernetesNodePoolAdvancedSettings {
}

export function dataSamsungcloudplatformKubernetesNodePoolAdvancedSettingsToTerraform(struct?: DataSamsungcloudplatformKubernetesNodePoolAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformKubernetesNodePoolAdvancedSettingsToHclTerraform(struct?: DataSamsungcloudplatformKubernetesNodePoolAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformKubernetesNodePoolAdvancedSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformKubernetesNodePoolAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformKubernetesNodePoolAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_unsafe_sysctls - computed: true, optional: false, required: false
  public get allowedUnsafeSysctls() {
    return this.getStringAttribute('allowed_unsafe_sysctls');
  }

  // container_log_max_files - computed: true, optional: false, required: false
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }

  // container_log_max_size - computed: true, optional: false, required: false
  public get containerLogMaxSize() {
    return this.getNumberAttribute('container_log_max_size');
  }

  // image_gc_high_threshold - computed: true, optional: false, required: false
  public get imageGcHighThreshold() {
    return this.getNumberAttribute('image_gc_high_threshold');
  }

  // image_gc_low_threshold - computed: true, optional: false, required: false
  public get imageGcLowThreshold() {
    return this.getNumberAttribute('image_gc_low_threshold');
  }

  // max_pods - computed: true, optional: false, required: false
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }

  // pod_max_pids - computed: true, optional: false, required: false
  public get podMaxPids() {
    return this.getNumberAttribute('pod_max_pids');
  }
}

export class DataSamsungcloudplatformKubernetesNodePoolAdvancedSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformKubernetesNodePoolAdvancedSettingsOutputReference {
    return new DataSamsungcloudplatformKubernetesNodePoolAdvancedSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformKubernetesNodePoolLabels {
}

export function dataSamsungcloudplatformKubernetesNodePoolLabelsToTerraform(struct?: DataSamsungcloudplatformKubernetesNodePoolLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformKubernetesNodePoolLabelsToHclTerraform(struct?: DataSamsungcloudplatformKubernetesNodePoolLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformKubernetesNodePoolLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformKubernetesNodePoolLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformKubernetesNodePoolLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSamsungcloudplatformKubernetesNodePoolLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformKubernetesNodePoolLabelsOutputReference {
    return new DataSamsungcloudplatformKubernetesNodePoolLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformKubernetesNodePoolTaints {
}

export function dataSamsungcloudplatformKubernetesNodePoolTaintsToTerraform(struct?: DataSamsungcloudplatformKubernetesNodePoolTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformKubernetesNodePoolTaintsToHclTerraform(struct?: DataSamsungcloudplatformKubernetesNodePoolTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformKubernetesNodePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformKubernetesNodePoolTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformKubernetesNodePoolTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSamsungcloudplatformKubernetesNodePoolTaintsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformKubernetesNodePoolTaintsOutputReference {
    return new DataSamsungcloudplatformKubernetesNodePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pool samsungcloudplatform_kubernetes_node_pool}
*/
export class DataSamsungcloudplatformKubernetesNodePool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_kubernetes_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformKubernetesNodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformKubernetesNodePool to import
  * @param importFromId The id of the existing DataSamsungcloudplatformKubernetesNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformKubernetesNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_kubernetes_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pool samsungcloudplatform_kubernetes_node_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformKubernetesNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformKubernetesNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_kubernetes_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._kubernetesEngineId = config.kubernetesEngineId;
    this._nodePoolId = config.nodePoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_settings - computed: true, optional: false, required: false
  private _advancedSettings = new DataSamsungcloudplatformKubernetesNodePoolAdvancedSettingsList(this, "advanced_settings", true);
  public get advancedSettings() {
    return this._advancedSettings;
  }

  // auto_recovery - computed: true, optional: false, required: false
  public get autoRecovery() {
    return this.getBooleanAttribute('auto_recovery');
  }

  // auto_scale - computed: true, optional: false, required: false
  public get autoScale() {
    return this.getBooleanAttribute('auto_scale');
  }

  // contract_id - computed: true, optional: false, required: false
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // current_node_count - computed: true, optional: false, required: false
  public get currentNodeCount() {
    return this.getNumberAttribute('current_node_count');
  }

  // desired_node_count - computed: true, optional: false, required: false
  public get desiredNodeCount() {
    return this.getNumberAttribute('desired_node_count');
  }

  // encrypt_enabled - computed: true, optional: false, required: false
  public get encryptEnabled() {
    return this.getBooleanAttribute('encrypt_enabled');
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

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // k8s_version - computed: true, optional: false, required: false
  public get k8SVersion() {
    return this.getStringAttribute('k8s_version');
  }

  // kubernetes_engine_id - computed: false, optional: false, required: true
  private _kubernetesEngineId?: string; 
  public get kubernetesEngineId() {
    return this.getStringAttribute('kubernetes_engine_id');
  }
  public set kubernetesEngineId(value: string) {
    this._kubernetesEngineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesEngineIdInput() {
    return this._kubernetesEngineId;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new DataSamsungcloudplatformKubernetesNodePoolLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // max_node_count - computed: true, optional: false, required: false
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }

  // min_node_count - computed: true, optional: false, required: false
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // node_pool_id - computed: false, optional: false, required: true
  private _nodePoolId?: string; 
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }
  public set nodePoolId(value: string) {
    this._nodePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolIdInput() {
    return this._nodePoolId;
  }

  // node_pool_name - computed: true, optional: false, required: false
  public get nodePoolName() {
    return this.getStringAttribute('node_pool_name');
  }

  // node_pool_status - computed: true, optional: false, required: false
  public get nodePoolStatus() {
    return this.getStringAttribute('node_pool_status');
  }

  // product_group_id - computed: true, optional: false, required: false
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // scale_id - computed: true, optional: false, required: false
  public get scaleId() {
    return this.getStringAttribute('scale_id');
  }

  // service_level_id - computed: true, optional: false, required: false
  public get serviceLevelId() {
    return this.getStringAttribute('service_level_id');
  }

  // storage_id - computed: true, optional: false, required: false
  public get storageId() {
    return this.getStringAttribute('storage_id');
  }

  // storage_size - computed: true, optional: false, required: false
  public get storageSize() {
    return this.getStringAttribute('storage_size');
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new DataSamsungcloudplatformKubernetesNodePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }

  // upgradable - computed: true, optional: false, required: false
  public get upgradable() {
    return this.getBooleanAttribute('upgradable');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      kubernetes_engine_id: cdktf.stringToTerraform(this._kubernetesEngineId),
      node_pool_id: cdktf.stringToTerraform(this._nodePoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_engine_id: {
        value: cdktf.stringToHclTerraform(this._kubernetesEngineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_pool_id: {
        value: cdktf.stringToHclTerraform(this._nodePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
