// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cam_secret_last_used_time
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCamSecretLastUsedTimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cam_secret_last_used_time#id DataTencentcloudCamSecretLastUsedTime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cam_secret_last_used_time#result_output_file DataTencentcloudCamSecretLastUsedTime#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Query the key ID list. Supports up to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cam_secret_last_used_time#secret_id_list DataTencentcloudCamSecretLastUsedTime#secret_id_list}
  */
  readonly secretIdList: string[];
}
export interface DataTencentcloudCamSecretLastUsedTimeSecretIdLastUsedRows {
}

export function dataTencentcloudCamSecretLastUsedTimeSecretIdLastUsedRowsToTerraform(struct?: DataTencentcloudCamSecretLastUsedTimeSecretIdLastUsedRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCamSecretLastUsedTimeSecretIdLastUsedRowsToHclTerraform(struct?: DataTencentcloudCamSecretLastUsedTimeSecretIdLastUsedRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCamSecretLastUsedTimeSecretIdLastUsedRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCamSecretLastUsedTimeSecretIdLastUsedRows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCamSecretLastUsedTimeSecretIdLastUsedRows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_secret_used_date - computed: true, optional: false, required: false
  public get lastSecretUsedDate() {
    return this.getNumberAttribute('last_secret_used_date');
  }

  // last_used_date - computed: true, optional: false, required: false
  public get lastUsedDate() {
    return this.getStringAttribute('last_used_date');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
}

export class DataTencentcloudCamSecretLastUsedTimeSecretIdLastUsedRowsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCamSecretLastUsedTimeSecretIdLastUsedRowsOutputReference {
    return new DataTencentcloudCamSecretLastUsedTimeSecretIdLastUsedRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cam_secret_last_used_time tencentcloud_cam_secret_last_used_time}
*/
export class DataTencentcloudCamSecretLastUsedTime extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cam_secret_last_used_time";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCamSecretLastUsedTime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCamSecretLastUsedTime to import
  * @param importFromId The id of the existing DataTencentcloudCamSecretLastUsedTime that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cam_secret_last_used_time#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCamSecretLastUsedTime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cam_secret_last_used_time", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cam_secret_last_used_time tencentcloud_cam_secret_last_used_time} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCamSecretLastUsedTimeConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCamSecretLastUsedTimeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cam_secret_last_used_time',
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
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._secretIdList = config.secretIdList;
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

  // secret_id_last_used_rows - computed: true, optional: false, required: false
  private _secretIdLastUsedRows = new DataTencentcloudCamSecretLastUsedTimeSecretIdLastUsedRowsList(this, "secret_id_last_used_rows", false);
  public get secretIdLastUsedRows() {
    return this._secretIdLastUsedRows;
  }

  // secret_id_list - computed: false, optional: false, required: true
  private _secretIdList?: string[]; 
  public get secretIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('secret_id_list'));
  }
  public set secretIdList(value: string[]) {
    this._secretIdList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdListInput() {
    return this._secretIdList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      secret_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secretIdList),
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
      secret_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secretIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
