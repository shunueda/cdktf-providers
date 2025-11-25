// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/kubernetes_cluster_common_names
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudKubernetesClusterCommonNamesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/kubernetes_cluster_common_names#cluster_id DataTencentcloudKubernetesClusterCommonNames#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/kubernetes_cluster_common_names#id DataTencentcloudKubernetesClusterCommonNames#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/kubernetes_cluster_common_names#result_output_file DataTencentcloudKubernetesClusterCommonNames#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * List of Role ID. Up to 50 sub-accounts can be passed in at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/kubernetes_cluster_common_names#role_ids DataTencentcloudKubernetesClusterCommonNames#role_ids}
  */
  readonly roleIds?: string[];
  /**
  * List of sub-account. Up to 50 sub-accounts can be passed in at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/kubernetes_cluster_common_names#subaccount_uins DataTencentcloudKubernetesClusterCommonNames#subaccount_uins}
  */
  readonly subaccountUins?: string[];
}
export interface DataTencentcloudKubernetesClusterCommonNamesListStruct {
}

export function dataTencentcloudKubernetesClusterCommonNamesListStructToTerraform(struct?: DataTencentcloudKubernetesClusterCommonNamesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterCommonNamesListStructToHclTerraform(struct?: DataTencentcloudKubernetesClusterCommonNamesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterCommonNamesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterCommonNamesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterCommonNamesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // common_names - computed: true, optional: false, required: false
  public get commonNames() {
    return this.getStringAttribute('common_names');
  }

  // subaccount_uin - computed: true, optional: false, required: false
  public get subaccountUin() {
    return this.getStringAttribute('subaccount_uin');
  }
}

export class DataTencentcloudKubernetesClusterCommonNamesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterCommonNamesListStructOutputReference {
    return new DataTencentcloudKubernetesClusterCommonNamesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/kubernetes_cluster_common_names tencentcloud_kubernetes_cluster_common_names}
*/
export class DataTencentcloudKubernetesClusterCommonNames extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_cluster_common_names";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudKubernetesClusterCommonNames resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudKubernetesClusterCommonNames to import
  * @param importFromId The id of the existing DataTencentcloudKubernetesClusterCommonNames that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/kubernetes_cluster_common_names#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudKubernetesClusterCommonNames to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_cluster_common_names", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/kubernetes_cluster_common_names tencentcloud_kubernetes_cluster_common_names} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudKubernetesClusterCommonNamesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudKubernetesClusterCommonNamesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_cluster_common_names',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._resultOutputFile = config.resultOutputFile;
    this._roleIds = config.roleIds;
    this._subaccountUins = config.subaccountUins;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
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

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudKubernetesClusterCommonNamesListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // role_ids - computed: false, optional: true, required: false
  private _roleIds?: string[]; 
  public get roleIds() {
    return this.getListAttribute('role_ids');
  }
  public set roleIds(value: string[]) {
    this._roleIds = value;
  }
  public resetRoleIds() {
    this._roleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdsInput() {
    return this._roleIds;
  }

  // subaccount_uins - computed: false, optional: true, required: false
  private _subaccountUins?: string[]; 
  public get subaccountUins() {
    return this.getListAttribute('subaccount_uins');
  }
  public set subaccountUins(value: string[]) {
    this._subaccountUins = value;
  }
  public resetSubaccountUins() {
    this._subaccountUins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subaccountUinsInput() {
    return this._subaccountUins;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      role_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleIds),
      subaccount_uins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subaccountUins),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subaccount_uins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subaccountUins),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
