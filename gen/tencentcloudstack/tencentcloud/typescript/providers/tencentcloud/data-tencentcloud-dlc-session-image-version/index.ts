// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_session_image_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDlcSessionImageVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data engine ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_session_image_version#data_engine_id DataTencentcloudDlcSessionImageVersion#data_engine_id}
  */
  readonly dataEngineId: string;
  /**
  * Framework type: machine learning, Python, Spark ML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_session_image_version#framework_type DataTencentcloudDlcSessionImageVersion#framework_type}
  */
  readonly frameworkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_session_image_version#id DataTencentcloudDlcSessionImageVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_session_image_version#result_output_file DataTencentcloudDlcSessionImageVersion#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudDlcSessionImageVersionEngineSessionImages {
}

export function dataTencentcloudDlcSessionImageVersionEngineSessionImagesToTerraform(struct?: DataTencentcloudDlcSessionImageVersionEngineSessionImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcSessionImageVersionEngineSessionImagesToHclTerraform(struct?: DataTencentcloudDlcSessionImageVersionEngineSessionImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcSessionImageVersionEngineSessionImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcSessionImageVersionEngineSessionImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcSessionImageVersionEngineSessionImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // spark_image_id - computed: true, optional: false, required: false
  public get sparkImageId() {
    return this.getStringAttribute('spark_image_id');
  }

  // spark_image_tag - computed: true, optional: false, required: false
  public get sparkImageTag() {
    return this.getStringAttribute('spark_image_tag');
  }

  // spark_image_type - computed: true, optional: false, required: false
  public get sparkImageType() {
    return this.getNumberAttribute('spark_image_type');
  }

  // spark_image_version - computed: true, optional: false, required: false
  public get sparkImageVersion() {
    return this.getStringAttribute('spark_image_version');
  }
}

export class DataTencentcloudDlcSessionImageVersionEngineSessionImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcSessionImageVersionEngineSessionImagesOutputReference {
    return new DataTencentcloudDlcSessionImageVersionEngineSessionImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_session_image_version tencentcloud_dlc_session_image_version}
*/
export class DataTencentcloudDlcSessionImageVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_session_image_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDlcSessionImageVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDlcSessionImageVersion to import
  * @param importFromId The id of the existing DataTencentcloudDlcSessionImageVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_session_image_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDlcSessionImageVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_session_image_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_session_image_version tencentcloud_dlc_session_image_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDlcSessionImageVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDlcSessionImageVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_session_image_version',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataEngineId = config.dataEngineId;
    this._frameworkType = config.frameworkType;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_engine_id - computed: false, optional: false, required: true
  private _dataEngineId?: string; 
  public get dataEngineId() {
    return this.getStringAttribute('data_engine_id');
  }
  public set dataEngineId(value: string) {
    this._dataEngineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineIdInput() {
    return this._dataEngineId;
  }

  // engine_session_images - computed: true, optional: false, required: false
  private _engineSessionImages = new DataTencentcloudDlcSessionImageVersionEngineSessionImagesList(this, "engine_session_images", false);
  public get engineSessionImages() {
    return this._engineSessionImages;
  }

  // framework_type - computed: false, optional: false, required: true
  private _frameworkType?: string; 
  public get frameworkType() {
    return this.getStringAttribute('framework_type');
  }
  public set frameworkType(value: string) {
    this._frameworkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkTypeInput() {
    return this._frameworkType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_engine_id: cdktf.stringToTerraform(this._dataEngineId),
      framework_type: cdktf.stringToTerraform(this._frameworkType),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_engine_id: {
        value: cdktf.stringToHclTerraform(this._dataEngineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      framework_type: {
        value: cdktf.stringToHclTerraform(this._frameworkType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
