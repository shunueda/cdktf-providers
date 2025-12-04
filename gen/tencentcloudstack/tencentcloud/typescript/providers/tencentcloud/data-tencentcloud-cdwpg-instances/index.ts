// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdwpg_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCdwpgInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdwpg_instances#id DataTencentcloudCdwpgInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdwpg_instances#result_output_file DataTencentcloudCdwpgInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Search instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdwpg_instances#search_instance_id DataTencentcloudCdwpgInstances#search_instance_id}
  */
  readonly searchInstanceId?: string;
  /**
  * Search instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdwpg_instances#search_instance_name DataTencentcloudCdwpgInstances#search_instance_name}
  */
  readonly searchInstanceName?: string;
  /**
  * Search tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdwpg_instances#search_tags DataTencentcloudCdwpgInstances#search_tags}
  */
  readonly searchTags?: string[];
}
export interface DataTencentcloudCdwpgInstancesInstancesListStruct {
}

export function dataTencentcloudCdwpgInstancesInstancesListStructToTerraform(struct?: DataTencentcloudCdwpgInstancesInstancesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdwpgInstancesInstancesListStructToHclTerraform(struct?: DataTencentcloudCdwpgInstancesInstancesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdwpgInstancesInstancesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdwpgInstancesInstancesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdwpgInstancesInstancesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_info - computed: true, optional: false, required: false
  public get accessInfo() {
    return this.getStringAttribute('access_info');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // pay_mode - computed: true, optional: false, required: false
  public get payMode() {
    return this.getStringAttribute('pay_mode');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_desc - computed: true, optional: false, required: false
  public get regionDesc() {
    return this.getStringAttribute('region_desc');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // renew_flag - computed: true, optional: false, required: false
  public get renewFlag() {
    return this.getBooleanAttribute('renew_flag');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // zone_desc - computed: true, optional: false, required: false
  public get zoneDesc() {
    return this.getStringAttribute('zone_desc');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }
}

export class DataTencentcloudCdwpgInstancesInstancesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdwpgInstancesInstancesListStructOutputReference {
    return new DataTencentcloudCdwpgInstancesInstancesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdwpg_instances tencentcloud_cdwpg_instances}
*/
export class DataTencentcloudCdwpgInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdwpg_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCdwpgInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCdwpgInstances to import
  * @param importFromId The id of the existing DataTencentcloudCdwpgInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdwpg_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCdwpgInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdwpg_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/cdwpg_instances tencentcloud_cdwpg_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCdwpgInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCdwpgInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdwpg_instances',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
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
    this._resultOutputFile = config.resultOutputFile;
    this._searchInstanceId = config.searchInstanceId;
    this._searchInstanceName = config.searchInstanceName;
    this._searchTags = config.searchTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instances_list - computed: true, optional: false, required: false
  private _instancesList = new DataTencentcloudCdwpgInstancesInstancesListStructList(this, "instances_list", false);
  public get instancesList() {
    return this._instancesList;
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

  // search_instance_id - computed: false, optional: true, required: false
  private _searchInstanceId?: string; 
  public get searchInstanceId() {
    return this.getStringAttribute('search_instance_id');
  }
  public set searchInstanceId(value: string) {
    this._searchInstanceId = value;
  }
  public resetSearchInstanceId() {
    this._searchInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInstanceIdInput() {
    return this._searchInstanceId;
  }

  // search_instance_name - computed: false, optional: true, required: false
  private _searchInstanceName?: string; 
  public get searchInstanceName() {
    return this.getStringAttribute('search_instance_name');
  }
  public set searchInstanceName(value: string) {
    this._searchInstanceName = value;
  }
  public resetSearchInstanceName() {
    this._searchInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInstanceNameInput() {
    return this._searchInstanceName;
  }

  // search_tags - computed: false, optional: true, required: false
  private _searchTags?: string[]; 
  public get searchTags() {
    return cdktf.Fn.tolist(this.getListAttribute('search_tags'));
  }
  public set searchTags(value: string[]) {
    this._searchTags = value;
  }
  public resetSearchTags() {
    this._searchTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTagsInput() {
    return this._searchTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_instance_id: cdktf.stringToTerraform(this._searchInstanceId),
      search_instance_name: cdktf.stringToTerraform(this._searchInstanceName),
      search_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._searchTags),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_instance_id: {
        value: cdktf.stringToHclTerraform(this._searchInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_instance_name: {
        value: cdktf.stringToHclTerraform(this._searchInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._searchTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
