// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pools
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformKubernetesNodePoolsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The person who created the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pools#created_by DataSamsungcloudplatformKubernetesNodePools#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pools#id DataSamsungcloudplatformKubernetesNodePools#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * K8s engine id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pools#kubernetes_engine_id DataSamsungcloudplatformKubernetesNodePools#kubernetes_engine_id}
  */
  readonly kubernetesEngineId: string;
  /**
  * K8s NodePool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pools#node_pool_name DataSamsungcloudplatformKubernetesNodePools#node_pool_name}
  */
  readonly nodePoolName?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pools#page DataSamsungcloudplatformKubernetesNodePools#page}
  */
  readonly page?: number;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pools#size DataSamsungcloudplatformKubernetesNodePools#size}
  */
  readonly size?: number;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pools#contents DataSamsungcloudplatformKubernetesNodePools#contents}
  */
  readonly contents?: DataSamsungcloudplatformKubernetesNodePoolsContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformKubernetesNodePoolsContents {
}

export function dataSamsungcloudplatformKubernetesNodePoolsContentsToTerraform(struct?: DataSamsungcloudplatformKubernetesNodePoolsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformKubernetesNodePoolsContentsToHclTerraform(struct?: DataSamsungcloudplatformKubernetesNodePoolsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformKubernetesNodePoolsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformKubernetesNodePoolsContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformKubernetesNodePoolsContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // auto_recovery - computed: true, optional: false, required: false
  public get autoRecovery() {
    return this.getBooleanAttribute('auto_recovery');
  }

  // auto_scale - computed: true, optional: false, required: false
  public get autoScale() {
    return this.getBooleanAttribute('auto_scale');
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
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

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // in_progress - computed: true, optional: false, required: false
  public get inProgress() {
    return this.getBooleanAttribute('in_progress');
  }

  // k8s_version - computed: true, optional: false, required: false
  public get k8SVersion() {
    return this.getStringAttribute('k8s_version');
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

  // node_pool_id - computed: true, optional: false, required: false
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // node_pool_name - computed: true, optional: false, required: false
  public get nodePoolName() {
    return this.getStringAttribute('node_pool_name');
  }

  // node_pool_state - computed: true, optional: false, required: false
  public get nodePoolState() {
    return this.getStringAttribute('node_pool_state');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // product_group_id - computed: true, optional: false, required: false
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
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

  // upgradable - computed: true, optional: false, required: false
  public get upgradable() {
    return this.getBooleanAttribute('upgradable');
  }
}

export class DataSamsungcloudplatformKubernetesNodePoolsContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformKubernetesNodePoolsContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformKubernetesNodePoolsContentsOutputReference {
    return new DataSamsungcloudplatformKubernetesNodePoolsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pools samsungcloudplatform_kubernetes_node_pools}
*/
export class DataSamsungcloudplatformKubernetesNodePools extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_kubernetes_node_pools";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformKubernetesNodePools resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformKubernetesNodePools to import
  * @param importFromId The id of the existing DataSamsungcloudplatformKubernetesNodePools that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pools#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformKubernetesNodePools to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_kubernetes_node_pools", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_node_pools samsungcloudplatform_kubernetes_node_pools} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformKubernetesNodePoolsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformKubernetesNodePoolsConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_kubernetes_node_pools',
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
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._kubernetesEngineId = config.kubernetesEngineId;
    this._nodePoolName = config.nodePoolName;
    this._page = config.page;
    this._size = config.size;
    this._contents.internalValue = config.contents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // node_pool_name - computed: false, optional: true, required: false
  private _nodePoolName?: string; 
  public get nodePoolName() {
    return this.getStringAttribute('node_pool_name');
  }
  public set nodePoolName(value: string) {
    this._nodePoolName = value;
  }
  public resetNodePoolName() {
    this._nodePoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolNameInput() {
    return this._nodePoolName;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformKubernetesNodePoolsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformKubernetesNodePoolsContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_engine_id: cdktf.stringToTerraform(this._kubernetesEngineId),
      node_pool_name: cdktf.stringToTerraform(this._nodePoolName),
      page: cdktf.numberToTerraform(this._page),
      size: cdktf.numberToTerraform(this._size),
      contents: cdktf.listMapper(dataSamsungcloudplatformKubernetesNodePoolsContentsToTerraform, true)(this._contents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      kubernetes_engine_id: {
        value: cdktf.stringToHclTerraform(this._kubernetesEngineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_pool_name: {
        value: cdktf.stringToHclTerraform(this._nodePoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformKubernetesNodePoolsContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformKubernetesNodePoolsContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
