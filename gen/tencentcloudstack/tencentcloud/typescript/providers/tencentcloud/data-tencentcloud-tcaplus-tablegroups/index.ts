// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tcaplus_tablegroups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTcaplusTablegroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the TcaplusDB cluster to be query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tcaplus_tablegroups#cluster_id DataTencentcloudTcaplusTablegroups#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tcaplus_tablegroups#id DataTencentcloudTcaplusTablegroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * File for saving results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tcaplus_tablegroups#result_output_file DataTencentcloudTcaplusTablegroups#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Id of the table group to be query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tcaplus_tablegroups#tablegroup_id DataTencentcloudTcaplusTablegroups#tablegroup_id}
  */
  readonly tablegroupId?: string;
  /**
  * Name of the table group to be query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tcaplus_tablegroups#tablegroup_name DataTencentcloudTcaplusTablegroups#tablegroup_name}
  */
  readonly tablegroupName?: string;
}
export interface DataTencentcloudTcaplusTablegroupsListStruct {
}

export function dataTencentcloudTcaplusTablegroupsListStructToTerraform(struct?: DataTencentcloudTcaplusTablegroupsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcaplusTablegroupsListStructToHclTerraform(struct?: DataTencentcloudTcaplusTablegroupsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcaplusTablegroupsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcaplusTablegroupsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcaplusTablegroupsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // table_count - computed: true, optional: false, required: false
  public get tableCount() {
    return this.getNumberAttribute('table_count');
  }

  // tablegroup_id - computed: true, optional: false, required: false
  public get tablegroupId() {
    return this.getStringAttribute('tablegroup_id');
  }

  // tablegroup_name - computed: true, optional: false, required: false
  public get tablegroupName() {
    return this.getStringAttribute('tablegroup_name');
  }

  // total_size - computed: true, optional: false, required: false
  public get totalSize() {
    return this.getNumberAttribute('total_size');
  }
}

export class DataTencentcloudTcaplusTablegroupsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcaplusTablegroupsListStructOutputReference {
    return new DataTencentcloudTcaplusTablegroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tcaplus_tablegroups tencentcloud_tcaplus_tablegroups}
*/
export class DataTencentcloudTcaplusTablegroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcaplus_tablegroups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTcaplusTablegroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTcaplusTablegroups to import
  * @param importFromId The id of the existing DataTencentcloudTcaplusTablegroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tcaplus_tablegroups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTcaplusTablegroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcaplus_tablegroups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tcaplus_tablegroups tencentcloud_tcaplus_tablegroups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTcaplusTablegroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTcaplusTablegroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcaplus_tablegroups',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._tablegroupId = config.tablegroupId;
    this._tablegroupName = config.tablegroupName;
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

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudTcaplusTablegroupsListStructList(this, "list", false);
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

  // tablegroup_id - computed: false, optional: true, required: false
  private _tablegroupId?: string; 
  public get tablegroupId() {
    return this.getStringAttribute('tablegroup_id');
  }
  public set tablegroupId(value: string) {
    this._tablegroupId = value;
  }
  public resetTablegroupId() {
    this._tablegroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablegroupIdInput() {
    return this._tablegroupId;
  }

  // tablegroup_name - computed: false, optional: true, required: false
  private _tablegroupName?: string; 
  public get tablegroupName() {
    return this.getStringAttribute('tablegroup_name');
  }
  public set tablegroupName(value: string) {
    this._tablegroupName = value;
  }
  public resetTablegroupName() {
    this._tablegroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablegroupNameInput() {
    return this._tablegroupName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      tablegroup_id: cdktf.stringToTerraform(this._tablegroupId),
      tablegroup_name: cdktf.stringToTerraform(this._tablegroupName),
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
      tablegroup_id: {
        value: cdktf.stringToHclTerraform(this._tablegroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tablegroup_name: {
        value: cdktf.stringToHclTerraform(this._tablegroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
