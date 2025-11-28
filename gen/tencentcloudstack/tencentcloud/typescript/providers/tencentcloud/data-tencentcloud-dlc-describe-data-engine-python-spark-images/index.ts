// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_describe_data_engine_python_spark_images
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDlcDescribeDataEnginePythonSparkImagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the minor version of the cluster image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_describe_data_engine_python_spark_images#child_image_version_id DataTencentcloudDlcDescribeDataEnginePythonSparkImages#child_image_version_id}
  */
  readonly childImageVersionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_describe_data_engine_python_spark_images#id DataTencentcloudDlcDescribeDataEnginePythonSparkImages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_describe_data_engine_python_spark_images#result_output_file DataTencentcloudDlcDescribeDataEnginePythonSparkImages#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudDlcDescribeDataEnginePythonSparkImagesPythonSparkImages {
}

export function dataTencentcloudDlcDescribeDataEnginePythonSparkImagesPythonSparkImagesToTerraform(struct?: DataTencentcloudDlcDescribeDataEnginePythonSparkImagesPythonSparkImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeDataEnginePythonSparkImagesPythonSparkImagesToHclTerraform(struct?: DataTencentcloudDlcDescribeDataEnginePythonSparkImagesPythonSparkImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeDataEnginePythonSparkImagesPythonSparkImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeDataEnginePythonSparkImagesPythonSparkImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeDataEnginePythonSparkImagesPythonSparkImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // child_image_version_id - computed: true, optional: false, required: false
  public get childImageVersionId() {
    return this.getStringAttribute('child_image_version_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // spark_image_id - computed: true, optional: false, required: false
  public get sparkImageId() {
    return this.getStringAttribute('spark_image_id');
  }

  // spark_image_version - computed: true, optional: false, required: false
  public get sparkImageVersion() {
    return this.getStringAttribute('spark_image_version');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTencentcloudDlcDescribeDataEnginePythonSparkImagesPythonSparkImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeDataEnginePythonSparkImagesPythonSparkImagesOutputReference {
    return new DataTencentcloudDlcDescribeDataEnginePythonSparkImagesPythonSparkImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_describe_data_engine_python_spark_images tencentcloud_dlc_describe_data_engine_python_spark_images}
*/
export class DataTencentcloudDlcDescribeDataEnginePythonSparkImages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_describe_data_engine_python_spark_images";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDlcDescribeDataEnginePythonSparkImages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDlcDescribeDataEnginePythonSparkImages to import
  * @param importFromId The id of the existing DataTencentcloudDlcDescribeDataEnginePythonSparkImages that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_describe_data_engine_python_spark_images#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDlcDescribeDataEnginePythonSparkImages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_describe_data_engine_python_spark_images", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/dlc_describe_data_engine_python_spark_images tencentcloud_dlc_describe_data_engine_python_spark_images} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDlcDescribeDataEnginePythonSparkImagesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDlcDescribeDataEnginePythonSparkImagesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_describe_data_engine_python_spark_images',
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
    this._childImageVersionId = config.childImageVersionId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_image_version_id - computed: false, optional: false, required: true
  private _childImageVersionId?: string; 
  public get childImageVersionId() {
    return this.getStringAttribute('child_image_version_id');
  }
  public set childImageVersionId(value: string) {
    this._childImageVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childImageVersionIdInput() {
    return this._childImageVersionId;
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

  // python_spark_images - computed: true, optional: false, required: false
  private _pythonSparkImages = new DataTencentcloudDlcDescribeDataEnginePythonSparkImagesPythonSparkImagesList(this, "python_spark_images", false);
  public get pythonSparkImages() {
    return this._pythonSparkImages;
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
      child_image_version_id: cdktf.stringToTerraform(this._childImageVersionId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      child_image_version_id: {
        value: cdktf.stringToHclTerraform(this._childImageVersionId),
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
