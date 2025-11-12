// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dlc_check_data_engine_config_pairs_validity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDlcCheckDataEngineConfigPairsValidityConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the minor version of the engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dlc_check_data_engine_config_pairs_validity#child_image_version_id DataTencentcloudDlcCheckDataEngineConfigPairsValidity#child_image_version_id}
  */
  readonly childImageVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dlc_check_data_engine_config_pairs_validity#id DataTencentcloudDlcCheckDataEngineConfigPairsValidity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the major version of the engine. If there is the ID of the minor version, only the ID of the minor version needs to be input. If not, the latest ID of the minor version under the major version will be acquired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dlc_check_data_engine_config_pairs_validity#image_version_id DataTencentcloudDlcCheckDataEngineConfigPairsValidity#image_version_id}
  */
  readonly imageVersionId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dlc_check_data_engine_config_pairs_validity#result_output_file DataTencentcloudDlcCheckDataEngineConfigPairsValidity#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * data_engine_config_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dlc_check_data_engine_config_pairs_validity#data_engine_config_pairs DataTencentcloudDlcCheckDataEngineConfigPairsValidity#data_engine_config_pairs}
  */
  readonly dataEngineConfigPairs?: DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairs[] | cdktf.IResolvable;
}
export interface DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairs {
  /**
  * Configuration item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dlc_check_data_engine_config_pairs_validity#config_item DataTencentcloudDlcCheckDataEngineConfigPairsValidity#config_item}
  */
  readonly configItem: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dlc_check_data_engine_config_pairs_validity#config_value DataTencentcloudDlcCheckDataEngineConfigPairsValidity#config_value}
  */
  readonly configValue: string;
}

export function dataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairsToTerraform(struct?: DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_item: cdktf.stringToTerraform(struct!.configItem),
    config_value: cdktf.stringToTerraform(struct!.configValue),
  }
}


export function dataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairsToHclTerraform(struct?: DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_item: {
      value: cdktf.stringToHclTerraform(struct!.configItem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_value: {
      value: cdktf.stringToHclTerraform(struct!.configValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configItem !== undefined) {
      hasAnyValues = true;
      internalValueResult.configItem = this._configItem;
    }
    if (this._configValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValue = this._configValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configItem = undefined;
      this._configValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configItem = value.configItem;
      this._configValue = value.configValue;
    }
  }

  // config_item - computed: false, optional: false, required: true
  private _configItem?: string; 
  public get configItem() {
    return this.getStringAttribute('config_item');
  }
  public set configItem(value: string) {
    this._configItem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemInput() {
    return this._configItem;
  }

  // config_value - computed: false, optional: false, required: true
  private _configValue?: string; 
  public get configValue() {
    return this.getStringAttribute('config_value');
  }
  public set configValue(value: string) {
    this._configValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configValueInput() {
    return this._configValue;
  }
}

export class DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairsList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairs[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairsOutputReference {
    return new DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dlc_check_data_engine_config_pairs_validity tencentcloud_dlc_check_data_engine_config_pairs_validity}
*/
export class DataTencentcloudDlcCheckDataEngineConfigPairsValidity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_check_data_engine_config_pairs_validity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDlcCheckDataEngineConfigPairsValidity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDlcCheckDataEngineConfigPairsValidity to import
  * @param importFromId The id of the existing DataTencentcloudDlcCheckDataEngineConfigPairsValidity that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dlc_check_data_engine_config_pairs_validity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDlcCheckDataEngineConfigPairsValidity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_check_data_engine_config_pairs_validity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dlc_check_data_engine_config_pairs_validity tencentcloud_dlc_check_data_engine_config_pairs_validity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDlcCheckDataEngineConfigPairsValidityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDlcCheckDataEngineConfigPairsValidityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_check_data_engine_config_pairs_validity',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
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
    this._imageVersionId = config.imageVersionId;
    this._resultOutputFile = config.resultOutputFile;
    this._dataEngineConfigPairs.internalValue = config.dataEngineConfigPairs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_image_version_id - computed: false, optional: true, required: false
  private _childImageVersionId?: string; 
  public get childImageVersionId() {
    return this.getStringAttribute('child_image_version_id');
  }
  public set childImageVersionId(value: string) {
    this._childImageVersionId = value;
  }
  public resetChildImageVersionId() {
    this._childImageVersionId = undefined;
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

  // image_version_id - computed: false, optional: true, required: false
  private _imageVersionId?: string; 
  public get imageVersionId() {
    return this.getStringAttribute('image_version_id');
  }
  public set imageVersionId(value: string) {
    this._imageVersionId = value;
  }
  public resetImageVersionId() {
    this._imageVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionIdInput() {
    return this._imageVersionId;
  }

  // is_available - computed: true, optional: false, required: false
  public get isAvailable() {
    return this.getBooleanAttribute('is_available');
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

  // unavailable_config - computed: true, optional: false, required: false
  public get unavailableConfig() {
    return cdktf.Fn.tolist(this.getListAttribute('unavailable_config'));
  }

  // data_engine_config_pairs - computed: false, optional: true, required: false
  private _dataEngineConfigPairs = new DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairsList(this, "data_engine_config_pairs", false);
  public get dataEngineConfigPairs() {
    return this._dataEngineConfigPairs;
  }
  public putDataEngineConfigPairs(value: DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairs[] | cdktf.IResolvable) {
    this._dataEngineConfigPairs.internalValue = value;
  }
  public resetDataEngineConfigPairs() {
    this._dataEngineConfigPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineConfigPairsInput() {
    return this._dataEngineConfigPairs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      child_image_version_id: cdktf.stringToTerraform(this._childImageVersionId),
      id: cdktf.stringToTerraform(this._id),
      image_version_id: cdktf.stringToTerraform(this._imageVersionId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      data_engine_config_pairs: cdktf.listMapper(dataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairsToTerraform, true)(this._dataEngineConfigPairs.internalValue),
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
      image_version_id: {
        value: cdktf.stringToHclTerraform(this._imageVersionId),
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
      data_engine_config_pairs: {
        value: cdktf.listMapperHcl(dataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairsToHclTerraform, true)(this._dataEngineConfigPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudDlcCheckDataEngineConfigPairsValidityDataEngineConfigPairsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
