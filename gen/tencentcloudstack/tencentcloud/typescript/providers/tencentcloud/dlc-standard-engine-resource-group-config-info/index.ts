// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcStandardEngineResourceGroupConfigInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Standard engine resource group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info#engine_resource_group_name DlcStandardEngineResourceGroupConfigInfo#engine_resource_group_name}
  */
  readonly engineResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info#id DlcStandardEngineResourceGroupConfigInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * dynamic_conf_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info#dynamic_conf_context DlcStandardEngineResourceGroupConfigInfo#dynamic_conf_context}
  */
  readonly dynamicConfContext?: DlcStandardEngineResourceGroupConfigInfoDynamicConfContext;
  /**
  * static_conf_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info#static_conf_context DlcStandardEngineResourceGroupConfigInfo#static_conf_context}
  */
  readonly staticConfContext?: DlcStandardEngineResourceGroupConfigInfoStaticConfContext;
}
export interface DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParams {
  /**
  * Configuration item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info#config_item DlcStandardEngineResourceGroupConfigInfo#config_item}
  */
  readonly configItem: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info#config_value DlcStandardEngineResourceGroupConfigInfo#config_value}
  */
  readonly configValue: string;
}

export function dlcStandardEngineResourceGroupConfigInfoDynamicConfContextParamsToTerraform(struct?: DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_item: cdktf.stringToTerraform(struct!.configItem),
    config_value: cdktf.stringToTerraform(struct!.configValue),
  }
}


export function dlcStandardEngineResourceGroupConfigInfoDynamicConfContextParamsToHclTerraform(struct?: DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParams | cdktf.IResolvable): any {
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

export class DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParams | cdktf.IResolvable | undefined) {
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

export class DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParamsList extends cdktf.ComplexList {
  public internalValue? : DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParams[] | cdktf.IResolvable

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
  public get(index: number): DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParamsOutputReference {
    return new DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlcStandardEngineResourceGroupConfigInfoDynamicConfContext {
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info#params DlcStandardEngineResourceGroupConfigInfo#params}
  */
  readonly params?: DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParams[] | cdktf.IResolvable;
}

export function dlcStandardEngineResourceGroupConfigInfoDynamicConfContextToTerraform(struct?: DlcStandardEngineResourceGroupConfigInfoDynamicConfContextOutputReference | DlcStandardEngineResourceGroupConfigInfoDynamicConfContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: cdktf.listMapper(dlcStandardEngineResourceGroupConfigInfoDynamicConfContextParamsToTerraform, true)(struct!.params),
  }
}


export function dlcStandardEngineResourceGroupConfigInfoDynamicConfContextToHclTerraform(struct?: DlcStandardEngineResourceGroupConfigInfoDynamicConfContextOutputReference | DlcStandardEngineResourceGroupConfigInfoDynamicConfContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    params: {
      value: cdktf.listMapperHcl(dlcStandardEngineResourceGroupConfigInfoDynamicConfContextParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "set",
      storageClassType: "DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcStandardEngineResourceGroupConfigInfoDynamicConfContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcStandardEngineResourceGroupConfigInfoDynamicConfContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcStandardEngineResourceGroupConfigInfoDynamicConfContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._params.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._params.internalValue = value.params;
    }
  }

  // params - computed: false, optional: true, required: false
  private _params = new DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParamsList(this, "params", true);
  public get params() {
    return this._params;
  }
  public putParams(value: DlcStandardEngineResourceGroupConfigInfoDynamicConfContextParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}
export interface DlcStandardEngineResourceGroupConfigInfoStaticConfContextParams {
  /**
  * Configuration item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info#config_item DlcStandardEngineResourceGroupConfigInfo#config_item}
  */
  readonly configItem: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info#config_value DlcStandardEngineResourceGroupConfigInfo#config_value}
  */
  readonly configValue: string;
}

export function dlcStandardEngineResourceGroupConfigInfoStaticConfContextParamsToTerraform(struct?: DlcStandardEngineResourceGroupConfigInfoStaticConfContextParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_item: cdktf.stringToTerraform(struct!.configItem),
    config_value: cdktf.stringToTerraform(struct!.configValue),
  }
}


export function dlcStandardEngineResourceGroupConfigInfoStaticConfContextParamsToHclTerraform(struct?: DlcStandardEngineResourceGroupConfigInfoStaticConfContextParams | cdktf.IResolvable): any {
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

export class DlcStandardEngineResourceGroupConfigInfoStaticConfContextParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlcStandardEngineResourceGroupConfigInfoStaticConfContextParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DlcStandardEngineResourceGroupConfigInfoStaticConfContextParams | cdktf.IResolvable | undefined) {
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

export class DlcStandardEngineResourceGroupConfigInfoStaticConfContextParamsList extends cdktf.ComplexList {
  public internalValue? : DlcStandardEngineResourceGroupConfigInfoStaticConfContextParams[] | cdktf.IResolvable

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
  public get(index: number): DlcStandardEngineResourceGroupConfigInfoStaticConfContextParamsOutputReference {
    return new DlcStandardEngineResourceGroupConfigInfoStaticConfContextParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlcStandardEngineResourceGroupConfigInfoStaticConfContext {
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info#params DlcStandardEngineResourceGroupConfigInfo#params}
  */
  readonly params?: DlcStandardEngineResourceGroupConfigInfoStaticConfContextParams[] | cdktf.IResolvable;
}

export function dlcStandardEngineResourceGroupConfigInfoStaticConfContextToTerraform(struct?: DlcStandardEngineResourceGroupConfigInfoStaticConfContextOutputReference | DlcStandardEngineResourceGroupConfigInfoStaticConfContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: cdktf.listMapper(dlcStandardEngineResourceGroupConfigInfoStaticConfContextParamsToTerraform, true)(struct!.params),
  }
}


export function dlcStandardEngineResourceGroupConfigInfoStaticConfContextToHclTerraform(struct?: DlcStandardEngineResourceGroupConfigInfoStaticConfContextOutputReference | DlcStandardEngineResourceGroupConfigInfoStaticConfContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    params: {
      value: cdktf.listMapperHcl(dlcStandardEngineResourceGroupConfigInfoStaticConfContextParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "set",
      storageClassType: "DlcStandardEngineResourceGroupConfigInfoStaticConfContextParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcStandardEngineResourceGroupConfigInfoStaticConfContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcStandardEngineResourceGroupConfigInfoStaticConfContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcStandardEngineResourceGroupConfigInfoStaticConfContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._params.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._params.internalValue = value.params;
    }
  }

  // params - computed: false, optional: true, required: false
  private _params = new DlcStandardEngineResourceGroupConfigInfoStaticConfContextParamsList(this, "params", true);
  public get params() {
    return this._params;
  }
  public putParams(value: DlcStandardEngineResourceGroupConfigInfoStaticConfContextParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info tencentcloud_dlc_standard_engine_resource_group_config_info}
*/
export class DlcStandardEngineResourceGroupConfigInfo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_standard_engine_resource_group_config_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcStandardEngineResourceGroupConfigInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcStandardEngineResourceGroupConfigInfo to import
  * @param importFromId The id of the existing DlcStandardEngineResourceGroupConfigInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcStandardEngineResourceGroupConfigInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_standard_engine_resource_group_config_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dlc_standard_engine_resource_group_config_info tencentcloud_dlc_standard_engine_resource_group_config_info} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcStandardEngineResourceGroupConfigInfoConfig
  */
  public constructor(scope: Construct, id: string, config: DlcStandardEngineResourceGroupConfigInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_standard_engine_resource_group_config_info',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._engineResourceGroupName = config.engineResourceGroupName;
    this._id = config.id;
    this._dynamicConfContext.internalValue = config.dynamicConfContext;
    this._staticConfContext.internalValue = config.staticConfContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // engine_resource_group_name - computed: false, optional: false, required: true
  private _engineResourceGroupName?: string; 
  public get engineResourceGroupName() {
    return this.getStringAttribute('engine_resource_group_name');
  }
  public set engineResourceGroupName(value: string) {
    this._engineResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineResourceGroupNameInput() {
    return this._engineResourceGroupName;
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

  // dynamic_conf_context - computed: false, optional: true, required: false
  private _dynamicConfContext = new DlcStandardEngineResourceGroupConfigInfoDynamicConfContextOutputReference(this, "dynamic_conf_context");
  public get dynamicConfContext() {
    return this._dynamicConfContext;
  }
  public putDynamicConfContext(value: DlcStandardEngineResourceGroupConfigInfoDynamicConfContext) {
    this._dynamicConfContext.internalValue = value;
  }
  public resetDynamicConfContext() {
    this._dynamicConfContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicConfContextInput() {
    return this._dynamicConfContext.internalValue;
  }

  // static_conf_context - computed: false, optional: true, required: false
  private _staticConfContext = new DlcStandardEngineResourceGroupConfigInfoStaticConfContextOutputReference(this, "static_conf_context");
  public get staticConfContext() {
    return this._staticConfContext;
  }
  public putStaticConfContext(value: DlcStandardEngineResourceGroupConfigInfoStaticConfContext) {
    this._staticConfContext.internalValue = value;
  }
  public resetStaticConfContext() {
    this._staticConfContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticConfContextInput() {
    return this._staticConfContext.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine_resource_group_name: cdktf.stringToTerraform(this._engineResourceGroupName),
      id: cdktf.stringToTerraform(this._id),
      dynamic_conf_context: dlcStandardEngineResourceGroupConfigInfoDynamicConfContextToTerraform(this._dynamicConfContext.internalValue),
      static_conf_context: dlcStandardEngineResourceGroupConfigInfoStaticConfContextToTerraform(this._staticConfContext.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      engine_resource_group_name: {
        value: cdktf.stringToHclTerraform(this._engineResourceGroupName),
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
      dynamic_conf_context: {
        value: dlcStandardEngineResourceGroupConfigInfoDynamicConfContextToHclTerraform(this._dynamicConfContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcStandardEngineResourceGroupConfigInfoDynamicConfContextList",
      },
      static_conf_context: {
        value: dlcStandardEngineResourceGroupConfigInfoStaticConfContextToHclTerraform(this._staticConfContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcStandardEngineResourceGroupConfigInfoStaticConfContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
