// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcUserDataEngineConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Engine unique id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config#data_engine_id DlcUserDataEngineConfig#data_engine_id}
  */
  readonly dataEngineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config#id DlcUserDataEngineConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * data_engine_config_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config#data_engine_config_pairs DlcUserDataEngineConfig#data_engine_config_pairs}
  */
  readonly dataEngineConfigPairs?: DlcUserDataEngineConfigDataEngineConfigPairs[] | cdktf.IResolvable;
  /**
  * session_resource_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config#session_resource_template DlcUserDataEngineConfig#session_resource_template}
  */
  readonly sessionResourceTemplate?: DlcUserDataEngineConfigSessionResourceTemplate;
}
export interface DlcUserDataEngineConfigDataEngineConfigPairs {
  /**
  * Config key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config#config_item DlcUserDataEngineConfig#config_item}
  */
  readonly configItem: string;
  /**
  * Config value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config#config_value DlcUserDataEngineConfig#config_value}
  */
  readonly configValue: string;
}

export function dlcUserDataEngineConfigDataEngineConfigPairsToTerraform(struct?: DlcUserDataEngineConfigDataEngineConfigPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_item: cdktf.stringToTerraform(struct!.configItem),
    config_value: cdktf.stringToTerraform(struct!.configValue),
  }
}


export function dlcUserDataEngineConfigDataEngineConfigPairsToHclTerraform(struct?: DlcUserDataEngineConfigDataEngineConfigPairs | cdktf.IResolvable): any {
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

export class DlcUserDataEngineConfigDataEngineConfigPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlcUserDataEngineConfigDataEngineConfigPairs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DlcUserDataEngineConfigDataEngineConfigPairs | cdktf.IResolvable | undefined) {
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

export class DlcUserDataEngineConfigDataEngineConfigPairsList extends cdktf.ComplexList {
  public internalValue? : DlcUserDataEngineConfigDataEngineConfigPairs[] | cdktf.IResolvable

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
  public get(index: number): DlcUserDataEngineConfigDataEngineConfigPairsOutputReference {
    return new DlcUserDataEngineConfigDataEngineConfigPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlcUserDataEngineConfigSessionResourceTemplate {
  /**
  * Engine driver size specification only supports: small/medium/large/xlarge/m.small/m.medium/m.large/m.xlarge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config#driver_size DlcUserDataEngineConfig#driver_size}
  */
  readonly driverSize?: string;
  /**
  * Specify the executor max number (in a dynamic configuration scenario), the minimum value is 1, and the maximum value is less than the cluster specification (when ExecutorMaxNumbers is less than ExecutorNums, the value is set to ExecutorNums).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config#executor_max_numbers DlcUserDataEngineConfig#executor_max_numbers}
  */
  readonly executorMaxNumbers?: number;
  /**
  * Specify the number of executors. The minimum value is 1 and the maximum value is less than the cluster specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config#executor_nums DlcUserDataEngineConfig#executor_nums}
  */
  readonly executorNums?: number;
  /**
  * Engine executor size specification only supports: small/medium/large/xlarge/m.small/m.medium/m.large/m.xlarge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config#executor_size DlcUserDataEngineConfig#executor_size}
  */
  readonly executorSize?: string;
}

export function dlcUserDataEngineConfigSessionResourceTemplateToTerraform(struct?: DlcUserDataEngineConfigSessionResourceTemplateOutputReference | DlcUserDataEngineConfigSessionResourceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_size: cdktf.stringToTerraform(struct!.driverSize),
    executor_max_numbers: cdktf.numberToTerraform(struct!.executorMaxNumbers),
    executor_nums: cdktf.numberToTerraform(struct!.executorNums),
    executor_size: cdktf.stringToTerraform(struct!.executorSize),
  }
}


export function dlcUserDataEngineConfigSessionResourceTemplateToHclTerraform(struct?: DlcUserDataEngineConfigSessionResourceTemplateOutputReference | DlcUserDataEngineConfigSessionResourceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver_size: {
      value: cdktf.stringToHclTerraform(struct!.driverSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executor_max_numbers: {
      value: cdktf.numberToHclTerraform(struct!.executorMaxNumbers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    executor_nums: {
      value: cdktf.numberToHclTerraform(struct!.executorNums),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    executor_size: {
      value: cdktf.stringToHclTerraform(struct!.executorSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcUserDataEngineConfigSessionResourceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcUserDataEngineConfigSessionResourceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverSize = this._driverSize;
    }
    if (this._executorMaxNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorMaxNumbers = this._executorMaxNumbers;
    }
    if (this._executorNums !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorNums = this._executorNums;
    }
    if (this._executorSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorSize = this._executorSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcUserDataEngineConfigSessionResourceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverSize = undefined;
      this._executorMaxNumbers = undefined;
      this._executorNums = undefined;
      this._executorSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverSize = value.driverSize;
      this._executorMaxNumbers = value.executorMaxNumbers;
      this._executorNums = value.executorNums;
      this._executorSize = value.executorSize;
    }
  }

  // driver_size - computed: false, optional: true, required: false
  private _driverSize?: string; 
  public get driverSize() {
    return this.getStringAttribute('driver_size');
  }
  public set driverSize(value: string) {
    this._driverSize = value;
  }
  public resetDriverSize() {
    this._driverSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverSizeInput() {
    return this._driverSize;
  }

  // executor_max_numbers - computed: false, optional: true, required: false
  private _executorMaxNumbers?: number; 
  public get executorMaxNumbers() {
    return this.getNumberAttribute('executor_max_numbers');
  }
  public set executorMaxNumbers(value: number) {
    this._executorMaxNumbers = value;
  }
  public resetExecutorMaxNumbers() {
    this._executorMaxNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorMaxNumbersInput() {
    return this._executorMaxNumbers;
  }

  // executor_nums - computed: false, optional: true, required: false
  private _executorNums?: number; 
  public get executorNums() {
    return this.getNumberAttribute('executor_nums');
  }
  public set executorNums(value: number) {
    this._executorNums = value;
  }
  public resetExecutorNums() {
    this._executorNums = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorNumsInput() {
    return this._executorNums;
  }

  // executor_size - computed: false, optional: true, required: false
  private _executorSize?: string; 
  public get executorSize() {
    return this.getStringAttribute('executor_size');
  }
  public set executorSize(value: string) {
    this._executorSize = value;
  }
  public resetExecutorSize() {
    this._executorSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorSizeInput() {
    return this._executorSize;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config tencentcloud_dlc_user_data_engine_config}
*/
export class DlcUserDataEngineConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_user_data_engine_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcUserDataEngineConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcUserDataEngineConfig to import
  * @param importFromId The id of the existing DlcUserDataEngineConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcUserDataEngineConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_user_data_engine_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_user_data_engine_config tencentcloud_dlc_user_data_engine_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcUserDataEngineConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DlcUserDataEngineConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_user_data_engine_config',
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
    this._dataEngineId = config.dataEngineId;
    this._id = config.id;
    this._dataEngineConfigPairs.internalValue = config.dataEngineConfigPairs;
    this._sessionResourceTemplate.internalValue = config.sessionResourceTemplate;
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

  // data_engine_config_pairs - computed: false, optional: true, required: false
  private _dataEngineConfigPairs = new DlcUserDataEngineConfigDataEngineConfigPairsList(this, "data_engine_config_pairs", false);
  public get dataEngineConfigPairs() {
    return this._dataEngineConfigPairs;
  }
  public putDataEngineConfigPairs(value: DlcUserDataEngineConfigDataEngineConfigPairs[] | cdktf.IResolvable) {
    this._dataEngineConfigPairs.internalValue = value;
  }
  public resetDataEngineConfigPairs() {
    this._dataEngineConfigPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineConfigPairsInput() {
    return this._dataEngineConfigPairs.internalValue;
  }

  // session_resource_template - computed: false, optional: true, required: false
  private _sessionResourceTemplate = new DlcUserDataEngineConfigSessionResourceTemplateOutputReference(this, "session_resource_template");
  public get sessionResourceTemplate() {
    return this._sessionResourceTemplate;
  }
  public putSessionResourceTemplate(value: DlcUserDataEngineConfigSessionResourceTemplate) {
    this._sessionResourceTemplate.internalValue = value;
  }
  public resetSessionResourceTemplate() {
    this._sessionResourceTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionResourceTemplateInput() {
    return this._sessionResourceTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_engine_id: cdktf.stringToTerraform(this._dataEngineId),
      id: cdktf.stringToTerraform(this._id),
      data_engine_config_pairs: cdktf.listMapper(dlcUserDataEngineConfigDataEngineConfigPairsToTerraform, true)(this._dataEngineConfigPairs.internalValue),
      session_resource_template: dlcUserDataEngineConfigSessionResourceTemplateToTerraform(this._sessionResourceTemplate.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_engine_config_pairs: {
        value: cdktf.listMapperHcl(dlcUserDataEngineConfigDataEngineConfigPairsToHclTerraform, true)(this._dataEngineConfigPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcUserDataEngineConfigDataEngineConfigPairsList",
      },
      session_resource_template: {
        value: dlcUserDataEngineConfigSessionResourceTemplateToHclTerraform(this._sessionResourceTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcUserDataEngineConfigSessionResourceTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
