// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformKubernetesEnginesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The person who created the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines#created_by DataSamsungcloudplatformKubernetesEngines#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines#id DataSamsungcloudplatformKubernetesEngines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * K8s cluster version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines#k8s_version DataSamsungcloudplatformKubernetesEngines#k8s_version}
  */
  readonly k8SVersion?: string;
  /**
  * K8s engine name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines#kubernetes_engine_name DataSamsungcloudplatformKubernetesEngines#kubernetes_engine_name}
  */
  readonly kubernetesEngineName?: string;
  /**
  * K8s engine status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines#kubernetes_engine_status DataSamsungcloudplatformKubernetesEngines#kubernetes_engine_status}
  */
  readonly kubernetesEngineStatus?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines#page DataSamsungcloudplatformKubernetesEngines#page}
  */
  readonly page?: number;
  /**
  * Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines#region DataSamsungcloudplatformKubernetesEngines#region}
  */
  readonly region?: string;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines#size DataSamsungcloudplatformKubernetesEngines#size}
  */
  readonly size?: number;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines#contents DataSamsungcloudplatformKubernetesEngines#contents}
  */
  readonly contents?: DataSamsungcloudplatformKubernetesEnginesContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformKubernetesEnginesContents {
}

export function dataSamsungcloudplatformKubernetesEnginesContentsToTerraform(struct?: DataSamsungcloudplatformKubernetesEnginesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformKubernetesEnginesContentsToHclTerraform(struct?: DataSamsungcloudplatformKubernetesEnginesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformKubernetesEnginesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformKubernetesEnginesContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformKubernetesEnginesContents | cdktf.IResolvable | undefined) {
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

  // cifs_volume_id - computed: true, optional: false, required: false
  public get cifsVolumeId() {
    return this.getStringAttribute('cifs_volume_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // k8s_version - computed: true, optional: false, required: false
  public get k8SVersion() {
    return this.getStringAttribute('k8s_version');
  }

  // kubernetes_engine_id - computed: true, optional: false, required: false
  public get kubernetesEngineId() {
    return this.getStringAttribute('kubernetes_engine_id');
  }

  // kubernetes_engine_name - computed: true, optional: false, required: false
  public get kubernetesEngineName() {
    return this.getStringAttribute('kubernetes_engine_name');
  }

  // kubernetes_engine_status - computed: true, optional: false, required: false
  public get kubernetesEngineStatus() {
    return this.getStringAttribute('kubernetes_engine_status');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataSamsungcloudplatformKubernetesEnginesContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformKubernetesEnginesContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformKubernetesEnginesContentsOutputReference {
    return new DataSamsungcloudplatformKubernetesEnginesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines samsungcloudplatform_kubernetes_engines}
*/
export class DataSamsungcloudplatformKubernetesEngines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_kubernetes_engines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformKubernetesEngines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformKubernetesEngines to import
  * @param importFromId The id of the existing DataSamsungcloudplatformKubernetesEngines that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformKubernetesEngines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_kubernetes_engines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engines samsungcloudplatform_kubernetes_engines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformKubernetesEnginesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformKubernetesEnginesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_kubernetes_engines',
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
    this._k8SVersion = config.k8SVersion;
    this._kubernetesEngineName = config.kubernetesEngineName;
    this._kubernetesEngineStatus = config.kubernetesEngineStatus;
    this._page = config.page;
    this._region = config.region;
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

  // k8s_version - computed: false, optional: true, required: false
  private _k8SVersion?: string; 
  public get k8SVersion() {
    return this.getStringAttribute('k8s_version');
  }
  public set k8SVersion(value: string) {
    this._k8SVersion = value;
  }
  public resetK8SVersion() {
    this._k8SVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SVersionInput() {
    return this._k8SVersion;
  }

  // kubernetes_engine_name - computed: false, optional: true, required: false
  private _kubernetesEngineName?: string; 
  public get kubernetesEngineName() {
    return this.getStringAttribute('kubernetes_engine_name');
  }
  public set kubernetesEngineName(value: string) {
    this._kubernetesEngineName = value;
  }
  public resetKubernetesEngineName() {
    this._kubernetesEngineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesEngineNameInput() {
    return this._kubernetesEngineName;
  }

  // kubernetes_engine_status - computed: false, optional: true, required: false
  private _kubernetesEngineStatus?: string; 
  public get kubernetesEngineStatus() {
    return this.getStringAttribute('kubernetes_engine_status');
  }
  public set kubernetesEngineStatus(value: string) {
    this._kubernetesEngineStatus = value;
  }
  public resetKubernetesEngineStatus() {
    this._kubernetesEngineStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesEngineStatusInput() {
    return this._kubernetesEngineStatus;
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

  // region - computed: false, optional: true, required: false
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
  private _contents = new DataSamsungcloudplatformKubernetesEnginesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformKubernetesEnginesContents[] | cdktf.IResolvable) {
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
      k8s_version: cdktf.stringToTerraform(this._k8SVersion),
      kubernetes_engine_name: cdktf.stringToTerraform(this._kubernetesEngineName),
      kubernetes_engine_status: cdktf.stringToTerraform(this._kubernetesEngineStatus),
      page: cdktf.numberToTerraform(this._page),
      region: cdktf.stringToTerraform(this._region),
      size: cdktf.numberToTerraform(this._size),
      contents: cdktf.listMapper(dataSamsungcloudplatformKubernetesEnginesContentsToTerraform, true)(this._contents.internalValue),
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
      k8s_version: {
        value: cdktf.stringToHclTerraform(this._k8SVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_engine_name: {
        value: cdktf.stringToHclTerraform(this._kubernetesEngineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_engine_status: {
        value: cdktf.stringToHclTerraform(this._kubernetesEngineStatus),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformKubernetesEnginesContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformKubernetesEnginesContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
