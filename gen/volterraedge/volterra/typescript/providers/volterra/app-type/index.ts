// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#annotations AppType#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#description AppType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#disable AppType#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#id AppType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#labels AppType#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#name AppType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#namespace AppType#namespace}
  */
  readonly namespace: string;
  /**
  * business_logic_markup_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#business_logic_markup_setting AppType#business_logic_markup_setting}
  */
  readonly businessLogicMarkupSetting?: AppTypeBusinessLogicMarkupSetting;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#features AppType#features}
  */
  readonly features?: AppTypeFeatures[] | cdktf.IResolvable;
}
export interface AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#purge_duration_for_inactive_discovered_apis AppType#purge_duration_for_inactive_discovered_apis}
  */
  readonly purgeDurationForInactiveDiscoveredApis?: number;
}

export function appTypeBusinessLogicMarkupSettingDiscoveredApiSettingsToTerraform(struct?: AppTypeBusinessLogicMarkupSettingDiscoveredApiSettingsOutputReference | AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_duration_for_inactive_discovered_apis: cdktf.numberToTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
  }
}


export function appTypeBusinessLogicMarkupSettingDiscoveredApiSettingsToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingDiscoveredApiSettingsOutputReference | AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_duration_for_inactive_discovered_apis: {
      value: cdktf.numberToHclTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppTypeBusinessLogicMarkupSettingDiscoveredApiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._purgeDurationForInactiveDiscoveredApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeDurationForInactiveDiscoveredApis = this._purgeDurationForInactiveDiscoveredApis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._purgeDurationForInactiveDiscoveredApis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._purgeDurationForInactiveDiscoveredApis = value.purgeDurationForInactiveDiscoveredApis;
    }
  }

  // purge_duration_for_inactive_discovered_apis - computed: false, optional: true, required: false
  private _purgeDurationForInactiveDiscoveredApis?: number; 
  public get purgeDurationForInactiveDiscoveredApis() {
    return this.getNumberAttribute('purge_duration_for_inactive_discovered_apis');
  }
  public set purgeDurationForInactiveDiscoveredApis(value: number) {
    this._purgeDurationForInactiveDiscoveredApis = value;
  }
  public resetPurgeDurationForInactiveDiscoveredApis() {
    this._purgeDurationForInactiveDiscoveredApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeDurationForInactiveDiscoveredApisInput() {
    return this._purgeDurationForInactiveDiscoveredApis;
  }
}
export interface AppTypeBusinessLogicMarkupSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#disable AppType#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#enable AppType#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * discovered_api_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#discovered_api_settings AppType#discovered_api_settings}
  */
  readonly discoveredApiSettings?: AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings;
}

export function appTypeBusinessLogicMarkupSettingToTerraform(struct?: AppTypeBusinessLogicMarkupSettingOutputReference | AppTypeBusinessLogicMarkupSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
    discovered_api_settings: appTypeBusinessLogicMarkupSettingDiscoveredApiSettingsToTerraform(struct!.discoveredApiSettings),
  }
}


export function appTypeBusinessLogicMarkupSettingToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingOutputReference | AppTypeBusinessLogicMarkupSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovered_api_settings: {
      value: appTypeBusinessLogicMarkupSettingDiscoveredApiSettingsToHclTerraform(struct!.discoveredApiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingDiscoveredApiSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppTypeBusinessLogicMarkupSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._discoveredApiSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveredApiSettings = this._discoveredApiSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppTypeBusinessLogicMarkupSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
      this._discoveredApiSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
      this._discoveredApiSettings.internalValue = value.discoveredApiSettings;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // discovered_api_settings - computed: false, optional: true, required: false
  private _discoveredApiSettings = new AppTypeBusinessLogicMarkupSettingDiscoveredApiSettingsOutputReference(this, "discovered_api_settings");
  public get discoveredApiSettings() {
    return this._discoveredApiSettings;
  }
  public putDiscoveredApiSettings(value: AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings) {
    this._discoveredApiSettings.internalValue = value;
  }
  public resetDiscoveredApiSettings() {
    this._discoveredApiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredApiSettingsInput() {
    return this._discoveredApiSettings.internalValue;
  }
}
export interface AppTypeFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#type AppType#type}
  */
  readonly type: string;
}

export function appTypeFeaturesToTerraform(struct?: AppTypeFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appTypeFeaturesToHclTerraform(struct?: AppTypeFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppTypeFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppTypeFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppTypeFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class AppTypeFeaturesList extends cdktf.ComplexList {
  public internalValue? : AppTypeFeatures[] | cdktf.IResolvable

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
  public get(index: number): AppTypeFeaturesOutputReference {
    return new AppTypeFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type volterra_app_type}
*/
export class AppType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_app_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppType to import
  * @param importFromId The id of the existing AppType that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_app_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_type volterra_app_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppTypeConfig
  */
  public constructor(scope: Construct, id: string, config: AppTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_app_type',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._businessLogicMarkupSetting.internalValue = config.businessLogicMarkupSetting;
    this._features.internalValue = config.features;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // business_logic_markup_setting - computed: false, optional: true, required: false
  private _businessLogicMarkupSetting = new AppTypeBusinessLogicMarkupSettingOutputReference(this, "business_logic_markup_setting");
  public get businessLogicMarkupSetting() {
    return this._businessLogicMarkupSetting;
  }
  public putBusinessLogicMarkupSetting(value: AppTypeBusinessLogicMarkupSetting) {
    this._businessLogicMarkupSetting.internalValue = value;
  }
  public resetBusinessLogicMarkupSetting() {
    this._businessLogicMarkupSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessLogicMarkupSettingInput() {
    return this._businessLogicMarkupSetting.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new AppTypeFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: AppTypeFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      business_logic_markup_setting: appTypeBusinessLogicMarkupSettingToTerraform(this._businessLogicMarkupSetting.internalValue),
      features: cdktf.listMapper(appTypeFeaturesToTerraform, true)(this._features.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_logic_markup_setting: {
        value: appTypeBusinessLogicMarkupSettingToHclTerraform(this._businessLogicMarkupSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppTypeBusinessLogicMarkupSettingList",
      },
      features: {
        value: cdktf.listMapperHcl(appTypeFeaturesToHclTerraform, true)(this._features.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppTypeFeaturesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
