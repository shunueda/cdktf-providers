// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GacSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines the device platform and the associated settings. Currently, only settings objects with value type of integer, boolean, strings and list of strings is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#app_settings GacSettings#app_settings}
  */
  readonly appSettings: GacSettingsAppSettings;
  /**
  * Description of the settings record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#description GacSettings#description}
  */
  readonly description: string;
  /**
  * Name of the settings record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
  /**
  * Citrix workspace application store url for which settings are to be configured. The value is case sensitive and requires the protocol ("https" or "http") and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#service_url GacSettings#service_url}
  */
  readonly serviceUrl: string;
  /**
  * Defines whether to use the test channel for settings or not. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#test_channel GacSettings#test_channel}
  */
  readonly testChannel?: boolean | cdktf.IResolvable;
  /**
  * Defines whether to use the settings for app configuration or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#use_for_app_config GacSettings#use_for_app_config}
  */
  readonly useForAppConfig?: boolean | cdktf.IResolvable;
}
export interface GacSettingsAppSettingsAndroidSettings {
  /**
  * Name of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
  /**
  * List value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_list GacSettings#value_list}
  */
  readonly valueList?: string[];
  /**
  * String value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_string GacSettings#value_string}
  */
  readonly valueString?: string;
}

export function gacSettingsAppSettingsAndroidSettingsToTerraform(struct?: GacSettingsAppSettingsAndroidSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueList),
    value_string: cdktf.stringToTerraform(struct!.valueString),
  }
}


export function gacSettingsAppSettingsAndroidSettingsToHclTerraform(struct?: GacSettingsAppSettingsAndroidSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value_string: {
      value: cdktf.stringToHclTerraform(struct!.valueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsAndroidSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsAndroidSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueList !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueList = this._valueList;
    }
    if (this._valueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueString = this._valueString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsAndroidSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueList = undefined;
      this._valueString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueList = value.valueList;
      this._valueString = value.valueString;
    }
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

  // value_list - computed: false, optional: true, required: false
  private _valueList?: string[]; 
  public get valueList() {
    return this.getListAttribute('value_list');
  }
  public set valueList(value: string[]) {
    this._valueList = value;
  }
  public resetValueList() {
    this._valueList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListInput() {
    return this._valueList;
  }

  // value_string - computed: false, optional: true, required: false
  private _valueString?: string; 
  public get valueString() {
    return this.getStringAttribute('value_string');
  }
  public set valueString(value: string) {
    this._valueString = value;
  }
  public resetValueString() {
    this._valueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStringInput() {
    return this._valueString;
  }
}

export class GacSettingsAppSettingsAndroidSettingsList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsAndroidSettings[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsAndroidSettingsOutputReference {
    return new GacSettingsAppSettingsAndroidSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsAndroid {
  /**
  * Defines the category of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#category GacSettings#category}
  */
  readonly category: string;
  /**
  * A set of name value pairs for the settings. Please refer to the following [table](https://developer-docs.citrix.com/en-us/server-integration/global-app-configuration-service/getting-started#supported-settings-and-their-values-per-platform) for the supported settings name and their values per platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#settings GacSettings#settings}
  */
  readonly settings: GacSettingsAppSettingsAndroidSettings[] | cdktf.IResolvable;
  /**
  * Defines if users can modify or change the value of as obtained settings from the Global App Citrix Workspace configuration service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#user_override GacSettings#user_override}
  */
  readonly userOverride: boolean | cdktf.IResolvable;
}

export function gacSettingsAppSettingsAndroidToTerraform(struct?: GacSettingsAppSettingsAndroid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    settings: cdktf.listMapper(gacSettingsAppSettingsAndroidSettingsToTerraform, false)(struct!.settings),
    user_override: cdktf.booleanToTerraform(struct!.userOverride),
  }
}


export function gacSettingsAppSettingsAndroidToHclTerraform(struct?: GacSettingsAppSettingsAndroid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsAndroidSettingsToHclTerraform, false)(struct!.settings),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsAndroidSettingsList",
    },
    user_override: {
      value: cdktf.booleanToHclTerraform(struct!.userOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsAndroidOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsAndroid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._userOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.userOverride = this._userOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsAndroid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._settings.internalValue = undefined;
      this._userOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._settings.internalValue = value.settings;
      this._userOverride = value.userOverride;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new GacSettingsAppSettingsAndroidSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: GacSettingsAppSettingsAndroidSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // user_override - computed: false, optional: false, required: true
  private _userOverride?: boolean | cdktf.IResolvable; 
  public get userOverride() {
    return this.getBooleanAttribute('user_override');
  }
  public set userOverride(value: boolean | cdktf.IResolvable) {
    this._userOverride = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userOverrideInput() {
    return this._userOverride;
  }
}

export class GacSettingsAppSettingsAndroidList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsAndroid[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsAndroidOutputReference {
    return new GacSettingsAppSettingsAndroidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsChromeosSettings {
  /**
  * Name of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
  /**
  * List value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_list GacSettings#value_list}
  */
  readonly valueList?: string[];
  /**
  * String value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_string GacSettings#value_string}
  */
  readonly valueString?: string;
}

export function gacSettingsAppSettingsChromeosSettingsToTerraform(struct?: GacSettingsAppSettingsChromeosSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueList),
    value_string: cdktf.stringToTerraform(struct!.valueString),
  }
}


export function gacSettingsAppSettingsChromeosSettingsToHclTerraform(struct?: GacSettingsAppSettingsChromeosSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value_string: {
      value: cdktf.stringToHclTerraform(struct!.valueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsChromeosSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsChromeosSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueList !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueList = this._valueList;
    }
    if (this._valueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueString = this._valueString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsChromeosSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueList = undefined;
      this._valueString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueList = value.valueList;
      this._valueString = value.valueString;
    }
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

  // value_list - computed: false, optional: true, required: false
  private _valueList?: string[]; 
  public get valueList() {
    return this.getListAttribute('value_list');
  }
  public set valueList(value: string[]) {
    this._valueList = value;
  }
  public resetValueList() {
    this._valueList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListInput() {
    return this._valueList;
  }

  // value_string - computed: false, optional: true, required: false
  private _valueString?: string; 
  public get valueString() {
    return this.getStringAttribute('value_string');
  }
  public set valueString(value: string) {
    this._valueString = value;
  }
  public resetValueString() {
    this._valueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStringInput() {
    return this._valueString;
  }
}

export class GacSettingsAppSettingsChromeosSettingsList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsChromeosSettings[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsChromeosSettingsOutputReference {
    return new GacSettingsAppSettingsChromeosSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsChromeos {
  /**
  * Defines the category of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#category GacSettings#category}
  */
  readonly category: string;
  /**
  * A set of name value pairs for the settings. Please refer to the following [table](https://developer-docs.citrix.com/en-us/server-integration/global-app-configuration-service/getting-started#supported-settings-and-their-values-per-platform) for the supported settings name and their values per platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#settings GacSettings#settings}
  */
  readonly settings: GacSettingsAppSettingsChromeosSettings[] | cdktf.IResolvable;
  /**
  * Defines if users can modify or change the value of as obtained settings from the Global App Citrix Workspace configuration service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#user_override GacSettings#user_override}
  */
  readonly userOverride: boolean | cdktf.IResolvable;
}

export function gacSettingsAppSettingsChromeosToTerraform(struct?: GacSettingsAppSettingsChromeos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    settings: cdktf.listMapper(gacSettingsAppSettingsChromeosSettingsToTerraform, false)(struct!.settings),
    user_override: cdktf.booleanToTerraform(struct!.userOverride),
  }
}


export function gacSettingsAppSettingsChromeosToHclTerraform(struct?: GacSettingsAppSettingsChromeos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsChromeosSettingsToHclTerraform, false)(struct!.settings),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsChromeosSettingsList",
    },
    user_override: {
      value: cdktf.booleanToHclTerraform(struct!.userOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsChromeosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsChromeos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._userOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.userOverride = this._userOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsChromeos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._settings.internalValue = undefined;
      this._userOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._settings.internalValue = value.settings;
      this._userOverride = value.userOverride;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new GacSettingsAppSettingsChromeosSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: GacSettingsAppSettingsChromeosSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // user_override - computed: false, optional: false, required: true
  private _userOverride?: boolean | cdktf.IResolvable; 
  public get userOverride() {
    return this.getBooleanAttribute('user_override');
  }
  public set userOverride(value: boolean | cdktf.IResolvable) {
    this._userOverride = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userOverrideInput() {
    return this._userOverride;
  }
}

export class GacSettingsAppSettingsChromeosList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsChromeos[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsChromeosOutputReference {
    return new GacSettingsAppSettingsChromeosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsHtml5Settings {
  /**
  * Name of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
  /**
  * List value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_list GacSettings#value_list}
  */
  readonly valueList?: string[];
  /**
  * String value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_string GacSettings#value_string}
  */
  readonly valueString?: string;
}

export function gacSettingsAppSettingsHtml5SettingsToTerraform(struct?: GacSettingsAppSettingsHtml5Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueList),
    value_string: cdktf.stringToTerraform(struct!.valueString),
  }
}


export function gacSettingsAppSettingsHtml5SettingsToHclTerraform(struct?: GacSettingsAppSettingsHtml5Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value_string: {
      value: cdktf.stringToHclTerraform(struct!.valueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsHtml5SettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsHtml5Settings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueList !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueList = this._valueList;
    }
    if (this._valueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueString = this._valueString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsHtml5Settings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueList = undefined;
      this._valueString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueList = value.valueList;
      this._valueString = value.valueString;
    }
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

  // value_list - computed: false, optional: true, required: false
  private _valueList?: string[]; 
  public get valueList() {
    return this.getListAttribute('value_list');
  }
  public set valueList(value: string[]) {
    this._valueList = value;
  }
  public resetValueList() {
    this._valueList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListInput() {
    return this._valueList;
  }

  // value_string - computed: false, optional: true, required: false
  private _valueString?: string; 
  public get valueString() {
    return this.getStringAttribute('value_string');
  }
  public set valueString(value: string) {
    this._valueString = value;
  }
  public resetValueString() {
    this._valueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStringInput() {
    return this._valueString;
  }
}

export class GacSettingsAppSettingsHtml5SettingsList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsHtml5Settings[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsHtml5SettingsOutputReference {
    return new GacSettingsAppSettingsHtml5SettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsHtml5 {
  /**
  * Defines the category of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#category GacSettings#category}
  */
  readonly category: string;
  /**
  * A set of name value pairs for the settings. Please refer to the following [table](https://developer-docs.citrix.com/en-us/server-integration/global-app-configuration-service/getting-started#supported-settings-and-their-values-per-platform) for the supported settings name and their values per platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#settings GacSettings#settings}
  */
  readonly settings: GacSettingsAppSettingsHtml5Settings[] | cdktf.IResolvable;
  /**
  * Defines if users can modify or change the value of as obtained settings from the Global App Citrix Workspace configuration service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#user_override GacSettings#user_override}
  */
  readonly userOverride: boolean | cdktf.IResolvable;
}

export function gacSettingsAppSettingsHtml5ToTerraform(struct?: GacSettingsAppSettingsHtml5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    settings: cdktf.listMapper(gacSettingsAppSettingsHtml5SettingsToTerraform, false)(struct!.settings),
    user_override: cdktf.booleanToTerraform(struct!.userOverride),
  }
}


export function gacSettingsAppSettingsHtml5ToHclTerraform(struct?: GacSettingsAppSettingsHtml5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsHtml5SettingsToHclTerraform, false)(struct!.settings),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsHtml5SettingsList",
    },
    user_override: {
      value: cdktf.booleanToHclTerraform(struct!.userOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsHtml5OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsHtml5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._userOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.userOverride = this._userOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsHtml5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._settings.internalValue = undefined;
      this._userOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._settings.internalValue = value.settings;
      this._userOverride = value.userOverride;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new GacSettingsAppSettingsHtml5SettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: GacSettingsAppSettingsHtml5Settings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // user_override - computed: false, optional: false, required: true
  private _userOverride?: boolean | cdktf.IResolvable; 
  public get userOverride() {
    return this.getBooleanAttribute('user_override');
  }
  public set userOverride(value: boolean | cdktf.IResolvable) {
    this._userOverride = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userOverrideInput() {
    return this._userOverride;
  }
}

export class GacSettingsAppSettingsHtml5List extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsHtml5[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsHtml5OutputReference {
    return new GacSettingsAppSettingsHtml5OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsIosSettings {
  /**
  * Name of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
  /**
  * String value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_string GacSettings#value_string}
  */
  readonly valueString: string;
}

export function gacSettingsAppSettingsIosSettingsToTerraform(struct?: GacSettingsAppSettingsIosSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_string: cdktf.stringToTerraform(struct!.valueString),
  }
}


export function gacSettingsAppSettingsIosSettingsToHclTerraform(struct?: GacSettingsAppSettingsIosSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_string: {
      value: cdktf.stringToHclTerraform(struct!.valueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsIosSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsIosSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueString = this._valueString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsIosSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueString = value.valueString;
    }
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

  // value_string - computed: false, optional: false, required: true
  private _valueString?: string; 
  public get valueString() {
    return this.getStringAttribute('value_string');
  }
  public set valueString(value: string) {
    this._valueString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStringInput() {
    return this._valueString;
  }
}

export class GacSettingsAppSettingsIosSettingsList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsIosSettings[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsIosSettingsOutputReference {
    return new GacSettingsAppSettingsIosSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsIos {
  /**
  * Defines the category of the setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#category GacSettings#category}
  */
  readonly category: string;
  /**
  * A set of name value pairs for the settings. Please refer to the following [table](https://developer-docs.citrix.com/en-us/server-integration/global-app-configuration-service/getting-started#supported-settings-and-their-values-per-platform) for the supported settings name and their values per platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#settings GacSettings#settings}
  */
  readonly settings: GacSettingsAppSettingsIosSettings[] | cdktf.IResolvable;
  /**
  * Defines if users can modify or change the value of as obtained settings from the Global App Citrix Workspace configuration service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#user_override GacSettings#user_override}
  */
  readonly userOverride: boolean | cdktf.IResolvable;
}

export function gacSettingsAppSettingsIosToTerraform(struct?: GacSettingsAppSettingsIos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    settings: cdktf.listMapper(gacSettingsAppSettingsIosSettingsToTerraform, false)(struct!.settings),
    user_override: cdktf.booleanToTerraform(struct!.userOverride),
  }
}


export function gacSettingsAppSettingsIosToHclTerraform(struct?: GacSettingsAppSettingsIos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsIosSettingsToHclTerraform, false)(struct!.settings),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsIosSettingsList",
    },
    user_override: {
      value: cdktf.booleanToHclTerraform(struct!.userOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsIosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsIos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._userOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.userOverride = this._userOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsIos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._settings.internalValue = undefined;
      this._userOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._settings.internalValue = value.settings;
      this._userOverride = value.userOverride;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new GacSettingsAppSettingsIosSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: GacSettingsAppSettingsIosSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // user_override - computed: false, optional: false, required: true
  private _userOverride?: boolean | cdktf.IResolvable; 
  public get userOverride() {
    return this.getBooleanAttribute('user_override');
  }
  public set userOverride(value: boolean | cdktf.IResolvable) {
    this._userOverride = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userOverrideInput() {
    return this._userOverride;
  }
}

export class GacSettingsAppSettingsIosList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsIos[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsIosOutputReference {
    return new GacSettingsAppSettingsIosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOrigins {
  /**
  * List of origins urls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#allowed_origins GacSettings#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Auto launch protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#protocol GacSettings#protocol}
  */
  readonly protocol: string;
}

export function gacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOriginsToTerraform(struct?: GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function gacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOriginsToHclTerraform(struct?: GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedOrigins = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedOrigins = value.allowedOrigins;
      this._protocol = value.protocol;
    }
  }

  // allowed_origins - computed: true, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOriginsList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOrigins[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOriginsOutputReference {
    return new GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStruct {
  /**
  * Id of the allowed extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#id GacSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Install link for the allowed extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#install_link GacSettings#install_link}
  */
  readonly installLink: string;
  /**
  * Name of the allowed extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
}

export function gacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStructToTerraform(struct?: GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    install_link: cdktf.stringToTerraform(struct!.installLink),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function gacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStructToHclTerraform(struct?: GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    install_link: {
      value: cdktf.stringToHclTerraform(struct!.installLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._installLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.installLink = this._installLink;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._installLink = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._installLink = value.installLink;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // install_link - computed: false, optional: false, required: true
  private _installLink?: string; 
  public get installLink() {
    return this.getStringAttribute('install_link');
  }
  public set installLink(value: string) {
    this._installLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installLinkInput() {
    return this._installLink;
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
}

export class GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStructList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStructOutputReference {
    return new GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsLinuxSettingsManagedBookmarks {
  /**
  * Name for the bookmark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
  /**
  * URL for the bookmark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#url GacSettings#url}
  */
  readonly url: string;
}

export function gacSettingsAppSettingsLinuxSettingsManagedBookmarksToTerraform(struct?: GacSettingsAppSettingsLinuxSettingsManagedBookmarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function gacSettingsAppSettingsLinuxSettingsManagedBookmarksToHclTerraform(struct?: GacSettingsAppSettingsLinuxSettingsManagedBookmarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsLinuxSettingsManagedBookmarksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsLinuxSettingsManagedBookmarks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsLinuxSettingsManagedBookmarks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._url = value.url;
    }
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class GacSettingsAppSettingsLinuxSettingsManagedBookmarksList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsLinuxSettingsManagedBookmarks[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsLinuxSettingsManagedBookmarksOutputReference {
    return new GacSettingsAppSettingsLinuxSettingsManagedBookmarksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsLinuxSettings {
  /**
  * A set of protocols that can launch an external application from the listed origins without prompting the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#auto_launch_protocols_from_origins GacSettings#auto_launch_protocols_from_origins}
  */
  readonly autoLaunchProtocolsFromOrigins?: GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOrigins[] | cdktf.IResolvable;
  /**
  * An allowed list of extensions that users can add to the Citrix Enterprise Browser. This list uses the Chrome Web Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#extension_install_allow_list GacSettings#extension_install_allow_list}
  */
  readonly extensionInstallAllowList?: GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStruct[] | cdktf.IResolvable;
  /**
  * A set of bookmarks to push to the Citrix Enterprise Browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#managed_bookmarks GacSettings#managed_bookmarks}
  */
  readonly managedBookmarks?: GacSettingsAppSettingsLinuxSettingsManagedBookmarks[] | cdktf.IResolvable;
  /**
  * Name of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
  /**
  * List value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_list GacSettings#value_list}
  */
  readonly valueList?: string[];
  /**
  * String value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_string GacSettings#value_string}
  */
  readonly valueString?: string;
}

export function gacSettingsAppSettingsLinuxSettingsToTerraform(struct?: GacSettingsAppSettingsLinuxSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_launch_protocols_from_origins: cdktf.listMapper(gacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOriginsToTerraform, false)(struct!.autoLaunchProtocolsFromOrigins),
    extension_install_allow_list: cdktf.listMapper(gacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStructToTerraform, false)(struct!.extensionInstallAllowList),
    managed_bookmarks: cdktf.listMapper(gacSettingsAppSettingsLinuxSettingsManagedBookmarksToTerraform, false)(struct!.managedBookmarks),
    name: cdktf.stringToTerraform(struct!.name),
    value_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueList),
    value_string: cdktf.stringToTerraform(struct!.valueString),
  }
}


export function gacSettingsAppSettingsLinuxSettingsToHclTerraform(struct?: GacSettingsAppSettingsLinuxSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_launch_protocols_from_origins: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOriginsToHclTerraform, false)(struct!.autoLaunchProtocolsFromOrigins),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOriginsList",
    },
    extension_install_allow_list: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStructToHclTerraform, false)(struct!.extensionInstallAllowList),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStructList",
    },
    managed_bookmarks: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsLinuxSettingsManagedBookmarksToHclTerraform, false)(struct!.managedBookmarks),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsLinuxSettingsManagedBookmarksList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value_string: {
      value: cdktf.stringToHclTerraform(struct!.valueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsLinuxSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsLinuxSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoLaunchProtocolsFromOrigins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLaunchProtocolsFromOrigins = this._autoLaunchProtocolsFromOrigins?.internalValue;
    }
    if (this._extensionInstallAllowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionInstallAllowList = this._extensionInstallAllowList?.internalValue;
    }
    if (this._managedBookmarks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedBookmarks = this._managedBookmarks?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueList !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueList = this._valueList;
    }
    if (this._valueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueString = this._valueString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsLinuxSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoLaunchProtocolsFromOrigins.internalValue = undefined;
      this._extensionInstallAllowList.internalValue = undefined;
      this._managedBookmarks.internalValue = undefined;
      this._name = undefined;
      this._valueList = undefined;
      this._valueString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoLaunchProtocolsFromOrigins.internalValue = value.autoLaunchProtocolsFromOrigins;
      this._extensionInstallAllowList.internalValue = value.extensionInstallAllowList;
      this._managedBookmarks.internalValue = value.managedBookmarks;
      this._name = value.name;
      this._valueList = value.valueList;
      this._valueString = value.valueString;
    }
  }

  // auto_launch_protocols_from_origins - computed: false, optional: true, required: false
  private _autoLaunchProtocolsFromOrigins = new GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOriginsList(this, "auto_launch_protocols_from_origins", true);
  public get autoLaunchProtocolsFromOrigins() {
    return this._autoLaunchProtocolsFromOrigins;
  }
  public putAutoLaunchProtocolsFromOrigins(value: GacSettingsAppSettingsLinuxSettingsAutoLaunchProtocolsFromOrigins[] | cdktf.IResolvable) {
    this._autoLaunchProtocolsFromOrigins.internalValue = value;
  }
  public resetAutoLaunchProtocolsFromOrigins() {
    this._autoLaunchProtocolsFromOrigins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLaunchProtocolsFromOriginsInput() {
    return this._autoLaunchProtocolsFromOrigins.internalValue;
  }

  // extension_install_allow_list - computed: false, optional: true, required: false
  private _extensionInstallAllowList = new GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStructList(this, "extension_install_allow_list", true);
  public get extensionInstallAllowList() {
    return this._extensionInstallAllowList;
  }
  public putExtensionInstallAllowList(value: GacSettingsAppSettingsLinuxSettingsExtensionInstallAllowListStruct[] | cdktf.IResolvable) {
    this._extensionInstallAllowList.internalValue = value;
  }
  public resetExtensionInstallAllowList() {
    this._extensionInstallAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInstallAllowListInput() {
    return this._extensionInstallAllowList.internalValue;
  }

  // managed_bookmarks - computed: false, optional: true, required: false
  private _managedBookmarks = new GacSettingsAppSettingsLinuxSettingsManagedBookmarksList(this, "managed_bookmarks", true);
  public get managedBookmarks() {
    return this._managedBookmarks;
  }
  public putManagedBookmarks(value: GacSettingsAppSettingsLinuxSettingsManagedBookmarks[] | cdktf.IResolvable) {
    this._managedBookmarks.internalValue = value;
  }
  public resetManagedBookmarks() {
    this._managedBookmarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedBookmarksInput() {
    return this._managedBookmarks.internalValue;
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

  // value_list - computed: false, optional: true, required: false
  private _valueList?: string[]; 
  public get valueList() {
    return this.getListAttribute('value_list');
  }
  public set valueList(value: string[]) {
    this._valueList = value;
  }
  public resetValueList() {
    this._valueList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListInput() {
    return this._valueList;
  }

  // value_string - computed: false, optional: true, required: false
  private _valueString?: string; 
  public get valueString() {
    return this.getStringAttribute('value_string');
  }
  public set valueString(value: string) {
    this._valueString = value;
  }
  public resetValueString() {
    this._valueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStringInput() {
    return this._valueString;
  }
}

export class GacSettingsAppSettingsLinuxSettingsList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsLinuxSettings[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsLinuxSettingsOutputReference {
    return new GacSettingsAppSettingsLinuxSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsLinux {
  /**
  * Defines the category of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#category GacSettings#category}
  */
  readonly category: string;
  /**
  * A set of name value pairs for the settings. Please refer to the following [table](https://developer-docs.citrix.com/en-us/server-integration/global-app-configuration-service/getting-started#supported-settings-and-their-values-per-platform) for the supported settings name and their values per platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#settings GacSettings#settings}
  */
  readonly settings: GacSettingsAppSettingsLinuxSettings[] | cdktf.IResolvable;
  /**
  * Defines if users can modify or change the value of as obtained settings from the Global App Citrix Workspace configuration service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#user_override GacSettings#user_override}
  */
  readonly userOverride: boolean | cdktf.IResolvable;
}

export function gacSettingsAppSettingsLinuxToTerraform(struct?: GacSettingsAppSettingsLinux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    settings: cdktf.listMapper(gacSettingsAppSettingsLinuxSettingsToTerraform, false)(struct!.settings),
    user_override: cdktf.booleanToTerraform(struct!.userOverride),
  }
}


export function gacSettingsAppSettingsLinuxToHclTerraform(struct?: GacSettingsAppSettingsLinux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsLinuxSettingsToHclTerraform, false)(struct!.settings),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsLinuxSettingsList",
    },
    user_override: {
      value: cdktf.booleanToHclTerraform(struct!.userOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsLinuxOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsLinux | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._userOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.userOverride = this._userOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsLinux | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._settings.internalValue = undefined;
      this._userOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._settings.internalValue = value.settings;
      this._userOverride = value.userOverride;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new GacSettingsAppSettingsLinuxSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: GacSettingsAppSettingsLinuxSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // user_override - computed: false, optional: false, required: true
  private _userOverride?: boolean | cdktf.IResolvable; 
  public get userOverride() {
    return this.getBooleanAttribute('user_override');
  }
  public set userOverride(value: boolean | cdktf.IResolvable) {
    this._userOverride = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userOverrideInput() {
    return this._userOverride;
  }
}

export class GacSettingsAppSettingsLinuxList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsLinux[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsLinuxOutputReference {
    return new GacSettingsAppSettingsLinuxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOrigins {
  /**
  * List of origins urls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#allowed_origins GacSettings#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Auto launch protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#protocol GacSettings#protocol}
  */
  readonly protocol: string;
}

export function gacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOriginsToTerraform(struct?: GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function gacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOriginsToHclTerraform(struct?: GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedOrigins = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedOrigins = value.allowedOrigins;
      this._protocol = value.protocol;
    }
  }

  // allowed_origins - computed: true, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOriginsList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOrigins[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOriginsOutputReference {
    return new GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsMacosSettingsEnterpriseBrowserSso {
  /**
  * List of IdP domains for which SSO is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#citrix_enterprise_browser_sso_domains GacSettings#citrix_enterprise_browser_sso_domains}
  */
  readonly citrixEnterpriseBrowserSsoDomains: string[];
  /**
  * Enables Single Sign-on (SSO) for all the web and SaaS apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#citrix_enterprise_browser_sso_enabled GacSettings#citrix_enterprise_browser_sso_enabled}
  */
  readonly citrixEnterpriseBrowserSsoEnabled: boolean | cdktf.IResolvable;
}

export function gacSettingsAppSettingsMacosSettingsEnterpriseBrowserSsoToTerraform(struct?: GacSettingsAppSettingsMacosSettingsEnterpriseBrowserSso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    citrix_enterprise_browser_sso_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.citrixEnterpriseBrowserSsoDomains),
    citrix_enterprise_browser_sso_enabled: cdktf.booleanToTerraform(struct!.citrixEnterpriseBrowserSsoEnabled),
  }
}


export function gacSettingsAppSettingsMacosSettingsEnterpriseBrowserSsoToHclTerraform(struct?: GacSettingsAppSettingsMacosSettingsEnterpriseBrowserSso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    citrix_enterprise_browser_sso_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.citrixEnterpriseBrowserSsoDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    citrix_enterprise_browser_sso_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.citrixEnterpriseBrowserSsoEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsMacosSettingsEnterpriseBrowserSsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GacSettingsAppSettingsMacosSettingsEnterpriseBrowserSso | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._citrixEnterpriseBrowserSsoDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.citrixEnterpriseBrowserSsoDomains = this._citrixEnterpriseBrowserSsoDomains;
    }
    if (this._citrixEnterpriseBrowserSsoEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.citrixEnterpriseBrowserSsoEnabled = this._citrixEnterpriseBrowserSsoEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsMacosSettingsEnterpriseBrowserSso | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._citrixEnterpriseBrowserSsoDomains = undefined;
      this._citrixEnterpriseBrowserSsoEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._citrixEnterpriseBrowserSsoDomains = value.citrixEnterpriseBrowserSsoDomains;
      this._citrixEnterpriseBrowserSsoEnabled = value.citrixEnterpriseBrowserSsoEnabled;
    }
  }

  // citrix_enterprise_browser_sso_domains - computed: false, optional: false, required: true
  private _citrixEnterpriseBrowserSsoDomains?: string[]; 
  public get citrixEnterpriseBrowserSsoDomains() {
    return this.getListAttribute('citrix_enterprise_browser_sso_domains');
  }
  public set citrixEnterpriseBrowserSsoDomains(value: string[]) {
    this._citrixEnterpriseBrowserSsoDomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get citrixEnterpriseBrowserSsoDomainsInput() {
    return this._citrixEnterpriseBrowserSsoDomains;
  }

  // citrix_enterprise_browser_sso_enabled - computed: false, optional: false, required: true
  private _citrixEnterpriseBrowserSsoEnabled?: boolean | cdktf.IResolvable; 
  public get citrixEnterpriseBrowserSsoEnabled() {
    return this.getBooleanAttribute('citrix_enterprise_browser_sso_enabled');
  }
  public set citrixEnterpriseBrowserSsoEnabled(value: boolean | cdktf.IResolvable) {
    this._citrixEnterpriseBrowserSsoEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get citrixEnterpriseBrowserSsoEnabledInput() {
    return this._citrixEnterpriseBrowserSsoEnabled;
  }
}
export interface GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStruct {
  /**
  * Id of the allowed extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#id GacSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Install link for the allowed extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#install_link GacSettings#install_link}
  */
  readonly installLink: string;
  /**
  * Name of the allowed extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
}

export function gacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStructToTerraform(struct?: GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    install_link: cdktf.stringToTerraform(struct!.installLink),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function gacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStructToHclTerraform(struct?: GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    install_link: {
      value: cdktf.stringToHclTerraform(struct!.installLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._installLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.installLink = this._installLink;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._installLink = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._installLink = value.installLink;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // install_link - computed: false, optional: false, required: true
  private _installLink?: string; 
  public get installLink() {
    return this.getStringAttribute('install_link');
  }
  public set installLink(value: string) {
    this._installLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installLinkInput() {
    return this._installLink;
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
}

export class GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStructList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStructOutputReference {
    return new GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsMacosSettingsManagedBookmarks {
  /**
  * Name for the bookmark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
  /**
  * URL for the bookmark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#url GacSettings#url}
  */
  readonly url: string;
}

export function gacSettingsAppSettingsMacosSettingsManagedBookmarksToTerraform(struct?: GacSettingsAppSettingsMacosSettingsManagedBookmarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function gacSettingsAppSettingsMacosSettingsManagedBookmarksToHclTerraform(struct?: GacSettingsAppSettingsMacosSettingsManagedBookmarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsMacosSettingsManagedBookmarksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsMacosSettingsManagedBookmarks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsMacosSettingsManagedBookmarks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._url = value.url;
    }
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class GacSettingsAppSettingsMacosSettingsManagedBookmarksList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsMacosSettingsManagedBookmarks[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsMacosSettingsManagedBookmarksOutputReference {
    return new GacSettingsAppSettingsMacosSettingsManagedBookmarksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsMacosSettings {
  /**
  * Specify a list of protocols that can launch an external application from the listed origins without prompting the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#auto_launch_protocols_from_origins GacSettings#auto_launch_protocols_from_origins}
  */
  readonly autoLaunchProtocolsFromOrigins?: GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOrigins[] | cdktf.IResolvable;
  /**
  * Enables Single Sign-on (SSO) for all the web and SaaS apps for the selected Operating System for the IdP domains added as long as the same IdP is used to sign in to the Citrix Workspace app and the relevant web or SaaS app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#enterprise_browser_sso GacSettings#enterprise_browser_sso}
  */
  readonly enterpriseBrowserSso?: GacSettingsAppSettingsMacosSettingsEnterpriseBrowserSso;
  /**
  * Array of objects of type ExtensionInstallAllowlist. For example: {id:"extension_id1",name:"extension_name1",install link:"chrome store url for the extension"}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#extension_install_allow_list GacSettings#extension_install_allow_list}
  */
  readonly extensionInstallAllowList?: GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStruct[] | cdktf.IResolvable;
  /**
  * Array of objects of type ManagedBookmarks. For example: {name:"bookmark_name1",url:"bookmark_url1"}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#managed_bookmarks GacSettings#managed_bookmarks}
  */
  readonly managedBookmarks?: GacSettingsAppSettingsMacosSettingsManagedBookmarks[] | cdktf.IResolvable;
  /**
  * Name of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
  /**
  * List value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_list GacSettings#value_list}
  */
  readonly valueList?: string[];
  /**
  * String value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_string GacSettings#value_string}
  */
  readonly valueString?: string;
}

export function gacSettingsAppSettingsMacosSettingsToTerraform(struct?: GacSettingsAppSettingsMacosSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_launch_protocols_from_origins: cdktf.listMapper(gacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOriginsToTerraform, false)(struct!.autoLaunchProtocolsFromOrigins),
    enterprise_browser_sso: gacSettingsAppSettingsMacosSettingsEnterpriseBrowserSsoToTerraform(struct!.enterpriseBrowserSso),
    extension_install_allow_list: cdktf.listMapper(gacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStructToTerraform, false)(struct!.extensionInstallAllowList),
    managed_bookmarks: cdktf.listMapper(gacSettingsAppSettingsMacosSettingsManagedBookmarksToTerraform, false)(struct!.managedBookmarks),
    name: cdktf.stringToTerraform(struct!.name),
    value_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueList),
    value_string: cdktf.stringToTerraform(struct!.valueString),
  }
}


export function gacSettingsAppSettingsMacosSettingsToHclTerraform(struct?: GacSettingsAppSettingsMacosSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_launch_protocols_from_origins: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOriginsToHclTerraform, false)(struct!.autoLaunchProtocolsFromOrigins),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOriginsList",
    },
    enterprise_browser_sso: {
      value: gacSettingsAppSettingsMacosSettingsEnterpriseBrowserSsoToHclTerraform(struct!.enterpriseBrowserSso),
      isBlock: true,
      type: "struct",
      storageClassType: "GacSettingsAppSettingsMacosSettingsEnterpriseBrowserSso",
    },
    extension_install_allow_list: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStructToHclTerraform, false)(struct!.extensionInstallAllowList),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStructList",
    },
    managed_bookmarks: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsMacosSettingsManagedBookmarksToHclTerraform, false)(struct!.managedBookmarks),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsMacosSettingsManagedBookmarksList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value_string: {
      value: cdktf.stringToHclTerraform(struct!.valueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsMacosSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsMacosSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoLaunchProtocolsFromOrigins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLaunchProtocolsFromOrigins = this._autoLaunchProtocolsFromOrigins?.internalValue;
    }
    if (this._enterpriseBrowserSso?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseBrowserSso = this._enterpriseBrowserSso?.internalValue;
    }
    if (this._extensionInstallAllowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionInstallAllowList = this._extensionInstallAllowList?.internalValue;
    }
    if (this._managedBookmarks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedBookmarks = this._managedBookmarks?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueList !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueList = this._valueList;
    }
    if (this._valueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueString = this._valueString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsMacosSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoLaunchProtocolsFromOrigins.internalValue = undefined;
      this._enterpriseBrowserSso.internalValue = undefined;
      this._extensionInstallAllowList.internalValue = undefined;
      this._managedBookmarks.internalValue = undefined;
      this._name = undefined;
      this._valueList = undefined;
      this._valueString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoLaunchProtocolsFromOrigins.internalValue = value.autoLaunchProtocolsFromOrigins;
      this._enterpriseBrowserSso.internalValue = value.enterpriseBrowserSso;
      this._extensionInstallAllowList.internalValue = value.extensionInstallAllowList;
      this._managedBookmarks.internalValue = value.managedBookmarks;
      this._name = value.name;
      this._valueList = value.valueList;
      this._valueString = value.valueString;
    }
  }

  // auto_launch_protocols_from_origins - computed: false, optional: true, required: false
  private _autoLaunchProtocolsFromOrigins = new GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOriginsList(this, "auto_launch_protocols_from_origins", true);
  public get autoLaunchProtocolsFromOrigins() {
    return this._autoLaunchProtocolsFromOrigins;
  }
  public putAutoLaunchProtocolsFromOrigins(value: GacSettingsAppSettingsMacosSettingsAutoLaunchProtocolsFromOrigins[] | cdktf.IResolvable) {
    this._autoLaunchProtocolsFromOrigins.internalValue = value;
  }
  public resetAutoLaunchProtocolsFromOrigins() {
    this._autoLaunchProtocolsFromOrigins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLaunchProtocolsFromOriginsInput() {
    return this._autoLaunchProtocolsFromOrigins.internalValue;
  }

  // enterprise_browser_sso - computed: false, optional: true, required: false
  private _enterpriseBrowserSso = new GacSettingsAppSettingsMacosSettingsEnterpriseBrowserSsoOutputReference(this, "enterprise_browser_sso");
  public get enterpriseBrowserSso() {
    return this._enterpriseBrowserSso;
  }
  public putEnterpriseBrowserSso(value: GacSettingsAppSettingsMacosSettingsEnterpriseBrowserSso) {
    this._enterpriseBrowserSso.internalValue = value;
  }
  public resetEnterpriseBrowserSso() {
    this._enterpriseBrowserSso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseBrowserSsoInput() {
    return this._enterpriseBrowserSso.internalValue;
  }

  // extension_install_allow_list - computed: false, optional: true, required: false
  private _extensionInstallAllowList = new GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStructList(this, "extension_install_allow_list", true);
  public get extensionInstallAllowList() {
    return this._extensionInstallAllowList;
  }
  public putExtensionInstallAllowList(value: GacSettingsAppSettingsMacosSettingsExtensionInstallAllowListStruct[] | cdktf.IResolvable) {
    this._extensionInstallAllowList.internalValue = value;
  }
  public resetExtensionInstallAllowList() {
    this._extensionInstallAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInstallAllowListInput() {
    return this._extensionInstallAllowList.internalValue;
  }

  // managed_bookmarks - computed: false, optional: true, required: false
  private _managedBookmarks = new GacSettingsAppSettingsMacosSettingsManagedBookmarksList(this, "managed_bookmarks", true);
  public get managedBookmarks() {
    return this._managedBookmarks;
  }
  public putManagedBookmarks(value: GacSettingsAppSettingsMacosSettingsManagedBookmarks[] | cdktf.IResolvable) {
    this._managedBookmarks.internalValue = value;
  }
  public resetManagedBookmarks() {
    this._managedBookmarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedBookmarksInput() {
    return this._managedBookmarks.internalValue;
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

  // value_list - computed: false, optional: true, required: false
  private _valueList?: string[]; 
  public get valueList() {
    return this.getListAttribute('value_list');
  }
  public set valueList(value: string[]) {
    this._valueList = value;
  }
  public resetValueList() {
    this._valueList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListInput() {
    return this._valueList;
  }

  // value_string - computed: false, optional: true, required: false
  private _valueString?: string; 
  public get valueString() {
    return this.getStringAttribute('value_string');
  }
  public set valueString(value: string) {
    this._valueString = value;
  }
  public resetValueString() {
    this._valueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStringInput() {
    return this._valueString;
  }
}

export class GacSettingsAppSettingsMacosSettingsList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsMacosSettings[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsMacosSettingsOutputReference {
    return new GacSettingsAppSettingsMacosSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsMacos {
  /**
  * Defines the category of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#category GacSettings#category}
  */
  readonly category: string;
  /**
  * A set of name value pairs for the settings. Please refer to the following [table](https://developer-docs.citrix.com/en-us/server-integration/global-app-configuration-service/getting-started#supported-settings-and-their-values-per-platform) for the supported settings name and their values per platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#settings GacSettings#settings}
  */
  readonly settings: GacSettingsAppSettingsMacosSettings[] | cdktf.IResolvable;
  /**
  * Defines if users can modify or change the value of as obtained settings from the Global App Citrix Workspace configuration service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#user_override GacSettings#user_override}
  */
  readonly userOverride: boolean | cdktf.IResolvable;
}

export function gacSettingsAppSettingsMacosToTerraform(struct?: GacSettingsAppSettingsMacos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    settings: cdktf.listMapper(gacSettingsAppSettingsMacosSettingsToTerraform, false)(struct!.settings),
    user_override: cdktf.booleanToTerraform(struct!.userOverride),
  }
}


export function gacSettingsAppSettingsMacosToHclTerraform(struct?: GacSettingsAppSettingsMacos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsMacosSettingsToHclTerraform, false)(struct!.settings),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsMacosSettingsList",
    },
    user_override: {
      value: cdktf.booleanToHclTerraform(struct!.userOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsMacosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsMacos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._userOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.userOverride = this._userOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsMacos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._settings.internalValue = undefined;
      this._userOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._settings.internalValue = value.settings;
      this._userOverride = value.userOverride;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new GacSettingsAppSettingsMacosSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: GacSettingsAppSettingsMacosSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // user_override - computed: false, optional: false, required: true
  private _userOverride?: boolean | cdktf.IResolvable; 
  public get userOverride() {
    return this.getBooleanAttribute('user_override');
  }
  public set userOverride(value: boolean | cdktf.IResolvable) {
    this._userOverride = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userOverrideInput() {
    return this._userOverride;
  }
}

export class GacSettingsAppSettingsMacosList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsMacos[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsMacosOutputReference {
    return new GacSettingsAppSettingsMacosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOrigins {
  /**
  * List of origins urls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#allowed_origins GacSettings#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Auto launch protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#protocol GacSettings#protocol}
  */
  readonly protocol: string;
}

export function gacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOriginsToTerraform(struct?: GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function gacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOriginsToHclTerraform(struct?: GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedOrigins = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedOrigins = value.allowedOrigins;
      this._protocol = value.protocol;
    }
  }

  // allowed_origins - computed: true, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOriginsList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOrigins[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOriginsOutputReference {
    return new GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSso {
  /**
  * List of IdP domains for which SSO is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#citrix_enterprise_browser_sso_domains GacSettings#citrix_enterprise_browser_sso_domains}
  */
  readonly citrixEnterpriseBrowserSsoDomains: string[];
  /**
  * Enables Single Sign-on (SSO) for all the web and SaaS apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#citrix_enterprise_browser_sso_enabled GacSettings#citrix_enterprise_browser_sso_enabled}
  */
  readonly citrixEnterpriseBrowserSsoEnabled: boolean | cdktf.IResolvable;
}

export function gacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSsoToTerraform(struct?: GacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    citrix_enterprise_browser_sso_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.citrixEnterpriseBrowserSsoDomains),
    citrix_enterprise_browser_sso_enabled: cdktf.booleanToTerraform(struct!.citrixEnterpriseBrowserSsoEnabled),
  }
}


export function gacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSsoToHclTerraform(struct?: GacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    citrix_enterprise_browser_sso_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.citrixEnterpriseBrowserSsoDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    citrix_enterprise_browser_sso_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.citrixEnterpriseBrowserSsoEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSso | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._citrixEnterpriseBrowserSsoDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.citrixEnterpriseBrowserSsoDomains = this._citrixEnterpriseBrowserSsoDomains;
    }
    if (this._citrixEnterpriseBrowserSsoEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.citrixEnterpriseBrowserSsoEnabled = this._citrixEnterpriseBrowserSsoEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSso | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._citrixEnterpriseBrowserSsoDomains = undefined;
      this._citrixEnterpriseBrowserSsoEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._citrixEnterpriseBrowserSsoDomains = value.citrixEnterpriseBrowserSsoDomains;
      this._citrixEnterpriseBrowserSsoEnabled = value.citrixEnterpriseBrowserSsoEnabled;
    }
  }

  // citrix_enterprise_browser_sso_domains - computed: false, optional: false, required: true
  private _citrixEnterpriseBrowserSsoDomains?: string[]; 
  public get citrixEnterpriseBrowserSsoDomains() {
    return this.getListAttribute('citrix_enterprise_browser_sso_domains');
  }
  public set citrixEnterpriseBrowserSsoDomains(value: string[]) {
    this._citrixEnterpriseBrowserSsoDomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get citrixEnterpriseBrowserSsoDomainsInput() {
    return this._citrixEnterpriseBrowserSsoDomains;
  }

  // citrix_enterprise_browser_sso_enabled - computed: false, optional: false, required: true
  private _citrixEnterpriseBrowserSsoEnabled?: boolean | cdktf.IResolvable; 
  public get citrixEnterpriseBrowserSsoEnabled() {
    return this.getBooleanAttribute('citrix_enterprise_browser_sso_enabled');
  }
  public set citrixEnterpriseBrowserSsoEnabled(value: boolean | cdktf.IResolvable) {
    this._citrixEnterpriseBrowserSsoEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get citrixEnterpriseBrowserSsoEnabledInput() {
    return this._citrixEnterpriseBrowserSsoEnabled;
  }
}
export interface GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStruct {
  /**
  * Id of the allowed extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#id GacSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Install link for the allowed extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#install_link GacSettings#install_link}
  */
  readonly installLink: string;
  /**
  * Name of the allowed extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
}

export function gacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStructToTerraform(struct?: GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    install_link: cdktf.stringToTerraform(struct!.installLink),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function gacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStructToHclTerraform(struct?: GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    install_link: {
      value: cdktf.stringToHclTerraform(struct!.installLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._installLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.installLink = this._installLink;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._installLink = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._installLink = value.installLink;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // install_link - computed: false, optional: false, required: true
  private _installLink?: string; 
  public get installLink() {
    return this.getStringAttribute('install_link');
  }
  public set installLink(value: string) {
    this._installLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installLinkInput() {
    return this._installLink;
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
}

export class GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStructList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStructOutputReference {
    return new GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStruct {
  /**
  * Arguments for Local App Discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#arguments GacSettings#arguments}
  */
  readonly arguments: string;
  /**
  * Name for Local App Discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
  /**
  * Path for Local App Discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#path GacSettings#path}
  */
  readonly path: string;
}

export function gacSettingsAppSettingsWindowsSettingsLocalAppAllowListStructToTerraform(struct?: GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.stringToTerraform(struct!.arguments),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function gacSettingsAppSettingsWindowsSettingsLocalAppAllowListStructToHclTerraform(struct?: GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.stringToHclTerraform(struct!.arguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._name = value.name;
      this._path = value.path;
    }
  }

  // arguments - computed: false, optional: false, required: true
  private _arguments?: string; 
  public get arguments() {
    return this.getStringAttribute('arguments');
  }
  public set arguments(value: string) {
    this._arguments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStructList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStructOutputReference {
    return new GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsWindowsSettingsManagedBookmarks {
  /**
  * Name for the bookmark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
  /**
  * URL for the bookmark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#url GacSettings#url}
  */
  readonly url: string;
}

export function gacSettingsAppSettingsWindowsSettingsManagedBookmarksToTerraform(struct?: GacSettingsAppSettingsWindowsSettingsManagedBookmarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function gacSettingsAppSettingsWindowsSettingsManagedBookmarksToHclTerraform(struct?: GacSettingsAppSettingsWindowsSettingsManagedBookmarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsWindowsSettingsManagedBookmarksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsWindowsSettingsManagedBookmarks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsWindowsSettingsManagedBookmarks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._url = value.url;
    }
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class GacSettingsAppSettingsWindowsSettingsManagedBookmarksList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsWindowsSettingsManagedBookmarks[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsWindowsSettingsManagedBookmarksOutputReference {
    return new GacSettingsAppSettingsWindowsSettingsManagedBookmarksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsWindowsSettings {
  /**
  * A set of protocols that can launch an external application from the listed origins without prompting the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#auto_launch_protocols_from_origins GacSettings#auto_launch_protocols_from_origins}
  */
  readonly autoLaunchProtocolsFromOrigins?: GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOrigins[] | cdktf.IResolvable;
  /**
  * Enables Single Sign-on (SSO) for all the web and SaaS apps for the selected Operating System for the IdP domains added as long as the same IdP is used to sign in to the Citrix Workspace app and the relevant web or SaaS app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#enterprise_browser_sso GacSettings#enterprise_browser_sso}
  */
  readonly enterpriseBrowserSso?: GacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSso;
  /**
  * An allowed list of extensions that users can add to the Citrix Enterprise Browser. This list uses the Chrome Web Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#extension_install_allow_list GacSettings#extension_install_allow_list}
  */
  readonly extensionInstallAllowList?: GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStruct[] | cdktf.IResolvable;
  /**
  * Set of App Object to allow list for Local App Discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#local_app_allow_list GacSettings#local_app_allow_list}
  */
  readonly localAppAllowList?: GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStruct[] | cdktf.IResolvable;
  /**
  * A set of bookmarks to push to the Citrix Enterprise Browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#managed_bookmarks GacSettings#managed_bookmarks}
  */
  readonly managedBookmarks?: GacSettingsAppSettingsWindowsSettingsManagedBookmarks[] | cdktf.IResolvable;
  /**
  * Name of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#name GacSettings#name}
  */
  readonly name: string;
  /**
  * List value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_list GacSettings#value_list}
  */
  readonly valueList?: string[];
  /**
  * String value (if any) associated with the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#value_string GacSettings#value_string}
  */
  readonly valueString?: string;
}

export function gacSettingsAppSettingsWindowsSettingsToTerraform(struct?: GacSettingsAppSettingsWindowsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_launch_protocols_from_origins: cdktf.listMapper(gacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOriginsToTerraform, false)(struct!.autoLaunchProtocolsFromOrigins),
    enterprise_browser_sso: gacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSsoToTerraform(struct!.enterpriseBrowserSso),
    extension_install_allow_list: cdktf.listMapper(gacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStructToTerraform, false)(struct!.extensionInstallAllowList),
    local_app_allow_list: cdktf.listMapper(gacSettingsAppSettingsWindowsSettingsLocalAppAllowListStructToTerraform, false)(struct!.localAppAllowList),
    managed_bookmarks: cdktf.listMapper(gacSettingsAppSettingsWindowsSettingsManagedBookmarksToTerraform, false)(struct!.managedBookmarks),
    name: cdktf.stringToTerraform(struct!.name),
    value_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueList),
    value_string: cdktf.stringToTerraform(struct!.valueString),
  }
}


export function gacSettingsAppSettingsWindowsSettingsToHclTerraform(struct?: GacSettingsAppSettingsWindowsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_launch_protocols_from_origins: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOriginsToHclTerraform, false)(struct!.autoLaunchProtocolsFromOrigins),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOriginsList",
    },
    enterprise_browser_sso: {
      value: gacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSsoToHclTerraform(struct!.enterpriseBrowserSso),
      isBlock: true,
      type: "struct",
      storageClassType: "GacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSso",
    },
    extension_install_allow_list: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStructToHclTerraform, false)(struct!.extensionInstallAllowList),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStructList",
    },
    local_app_allow_list: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsWindowsSettingsLocalAppAllowListStructToHclTerraform, false)(struct!.localAppAllowList),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStructList",
    },
    managed_bookmarks: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsWindowsSettingsManagedBookmarksToHclTerraform, false)(struct!.managedBookmarks),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsWindowsSettingsManagedBookmarksList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value_string: {
      value: cdktf.stringToHclTerraform(struct!.valueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsWindowsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsWindowsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoLaunchProtocolsFromOrigins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLaunchProtocolsFromOrigins = this._autoLaunchProtocolsFromOrigins?.internalValue;
    }
    if (this._enterpriseBrowserSso?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseBrowserSso = this._enterpriseBrowserSso?.internalValue;
    }
    if (this._extensionInstallAllowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionInstallAllowList = this._extensionInstallAllowList?.internalValue;
    }
    if (this._localAppAllowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAppAllowList = this._localAppAllowList?.internalValue;
    }
    if (this._managedBookmarks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedBookmarks = this._managedBookmarks?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueList !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueList = this._valueList;
    }
    if (this._valueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueString = this._valueString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsWindowsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoLaunchProtocolsFromOrigins.internalValue = undefined;
      this._enterpriseBrowserSso.internalValue = undefined;
      this._extensionInstallAllowList.internalValue = undefined;
      this._localAppAllowList.internalValue = undefined;
      this._managedBookmarks.internalValue = undefined;
      this._name = undefined;
      this._valueList = undefined;
      this._valueString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoLaunchProtocolsFromOrigins.internalValue = value.autoLaunchProtocolsFromOrigins;
      this._enterpriseBrowserSso.internalValue = value.enterpriseBrowserSso;
      this._extensionInstallAllowList.internalValue = value.extensionInstallAllowList;
      this._localAppAllowList.internalValue = value.localAppAllowList;
      this._managedBookmarks.internalValue = value.managedBookmarks;
      this._name = value.name;
      this._valueList = value.valueList;
      this._valueString = value.valueString;
    }
  }

  // auto_launch_protocols_from_origins - computed: false, optional: true, required: false
  private _autoLaunchProtocolsFromOrigins = new GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOriginsList(this, "auto_launch_protocols_from_origins", true);
  public get autoLaunchProtocolsFromOrigins() {
    return this._autoLaunchProtocolsFromOrigins;
  }
  public putAutoLaunchProtocolsFromOrigins(value: GacSettingsAppSettingsWindowsSettingsAutoLaunchProtocolsFromOrigins[] | cdktf.IResolvable) {
    this._autoLaunchProtocolsFromOrigins.internalValue = value;
  }
  public resetAutoLaunchProtocolsFromOrigins() {
    this._autoLaunchProtocolsFromOrigins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLaunchProtocolsFromOriginsInput() {
    return this._autoLaunchProtocolsFromOrigins.internalValue;
  }

  // enterprise_browser_sso - computed: false, optional: true, required: false
  private _enterpriseBrowserSso = new GacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSsoOutputReference(this, "enterprise_browser_sso");
  public get enterpriseBrowserSso() {
    return this._enterpriseBrowserSso;
  }
  public putEnterpriseBrowserSso(value: GacSettingsAppSettingsWindowsSettingsEnterpriseBrowserSso) {
    this._enterpriseBrowserSso.internalValue = value;
  }
  public resetEnterpriseBrowserSso() {
    this._enterpriseBrowserSso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseBrowserSsoInput() {
    return this._enterpriseBrowserSso.internalValue;
  }

  // extension_install_allow_list - computed: false, optional: true, required: false
  private _extensionInstallAllowList = new GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStructList(this, "extension_install_allow_list", true);
  public get extensionInstallAllowList() {
    return this._extensionInstallAllowList;
  }
  public putExtensionInstallAllowList(value: GacSettingsAppSettingsWindowsSettingsExtensionInstallAllowListStruct[] | cdktf.IResolvable) {
    this._extensionInstallAllowList.internalValue = value;
  }
  public resetExtensionInstallAllowList() {
    this._extensionInstallAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInstallAllowListInput() {
    return this._extensionInstallAllowList.internalValue;
  }

  // local_app_allow_list - computed: false, optional: true, required: false
  private _localAppAllowList = new GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStructList(this, "local_app_allow_list", true);
  public get localAppAllowList() {
    return this._localAppAllowList;
  }
  public putLocalAppAllowList(value: GacSettingsAppSettingsWindowsSettingsLocalAppAllowListStruct[] | cdktf.IResolvable) {
    this._localAppAllowList.internalValue = value;
  }
  public resetLocalAppAllowList() {
    this._localAppAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAppAllowListInput() {
    return this._localAppAllowList.internalValue;
  }

  // managed_bookmarks - computed: false, optional: true, required: false
  private _managedBookmarks = new GacSettingsAppSettingsWindowsSettingsManagedBookmarksList(this, "managed_bookmarks", true);
  public get managedBookmarks() {
    return this._managedBookmarks;
  }
  public putManagedBookmarks(value: GacSettingsAppSettingsWindowsSettingsManagedBookmarks[] | cdktf.IResolvable) {
    this._managedBookmarks.internalValue = value;
  }
  public resetManagedBookmarks() {
    this._managedBookmarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedBookmarksInput() {
    return this._managedBookmarks.internalValue;
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

  // value_list - computed: false, optional: true, required: false
  private _valueList?: string[]; 
  public get valueList() {
    return this.getListAttribute('value_list');
  }
  public set valueList(value: string[]) {
    this._valueList = value;
  }
  public resetValueList() {
    this._valueList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListInput() {
    return this._valueList;
  }

  // value_string - computed: false, optional: true, required: false
  private _valueString?: string; 
  public get valueString() {
    return this.getStringAttribute('value_string');
  }
  public set valueString(value: string) {
    this._valueString = value;
  }
  public resetValueString() {
    this._valueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStringInput() {
    return this._valueString;
  }
}

export class GacSettingsAppSettingsWindowsSettingsList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsWindowsSettings[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsWindowsSettingsOutputReference {
    return new GacSettingsAppSettingsWindowsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettingsWindows {
  /**
  * Defines the category of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#category GacSettings#category}
  */
  readonly category: string;
  /**
  * A set of name value pairs for the settings. Please refer to [table](https://developer-docs.citrix.com/en-us/server-integration/global-app-configuration-service/getting-started#supported-settings-and-their-values-per-platform) for the supported settings name and their values per platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#settings GacSettings#settings}
  */
  readonly settings: GacSettingsAppSettingsWindowsSettings[] | cdktf.IResolvable;
  /**
  * Defines if users can modify or change the value of as obtained settings from the Global App Citrix Workspace configuration service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#user_override GacSettings#user_override}
  */
  readonly userOverride: boolean | cdktf.IResolvable;
}

export function gacSettingsAppSettingsWindowsToTerraform(struct?: GacSettingsAppSettingsWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    settings: cdktf.listMapper(gacSettingsAppSettingsWindowsSettingsToTerraform, false)(struct!.settings),
    user_override: cdktf.booleanToTerraform(struct!.userOverride),
  }
}


export function gacSettingsAppSettingsWindowsToHclTerraform(struct?: GacSettingsAppSettingsWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsWindowsSettingsToHclTerraform, false)(struct!.settings),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsWindowsSettingsList",
    },
    user_override: {
      value: cdktf.booleanToHclTerraform(struct!.userOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GacSettingsAppSettingsWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._userOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.userOverride = this._userOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettingsWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._settings.internalValue = undefined;
      this._userOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._settings.internalValue = value.settings;
      this._userOverride = value.userOverride;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new GacSettingsAppSettingsWindowsSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: GacSettingsAppSettingsWindowsSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // user_override - computed: false, optional: false, required: true
  private _userOverride?: boolean | cdktf.IResolvable; 
  public get userOverride() {
    return this.getBooleanAttribute('user_override');
  }
  public set userOverride(value: boolean | cdktf.IResolvable) {
    this._userOverride = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userOverrideInput() {
    return this._userOverride;
  }
}

export class GacSettingsAppSettingsWindowsList extends cdktf.ComplexList {
  public internalValue? : GacSettingsAppSettingsWindows[] | cdktf.IResolvable

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
  public get(index: number): GacSettingsAppSettingsWindowsOutputReference {
    return new GacSettingsAppSettingsWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GacSettingsAppSettings {
  /**
  * Settings to be applied for users using android platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#android GacSettings#android}
  */
  readonly android?: GacSettingsAppSettingsAndroid[] | cdktf.IResolvable;
  /**
  * Settings to be applied for users using chrome os platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#chromeos GacSettings#chromeos}
  */
  readonly chromeos?: GacSettingsAppSettingsChromeos[] | cdktf.IResolvable;
  /**
  * Settings to be applied for users using html5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#html5 GacSettings#html5}
  */
  readonly html5?: GacSettingsAppSettingsHtml5[] | cdktf.IResolvable;
  /**
  * Settings to be applied for users using ios platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#ios GacSettings#ios}
  */
  readonly ios?: GacSettingsAppSettingsIos[] | cdktf.IResolvable;
  /**
  * Settings to be applied for users using linux platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#linux GacSettings#linux}
  */
  readonly linux?: GacSettingsAppSettingsLinux[] | cdktf.IResolvable;
  /**
  * Settings to be applied for users using mac os platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#macos GacSettings#macos}
  */
  readonly macos?: GacSettingsAppSettingsMacos[] | cdktf.IResolvable;
  /**
  * Settings to be applied for users using windows platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#windows GacSettings#windows}
  */
  readonly windows?: GacSettingsAppSettingsWindows[] | cdktf.IResolvable;
}

export function gacSettingsAppSettingsToTerraform(struct?: GacSettingsAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    android: cdktf.listMapper(gacSettingsAppSettingsAndroidToTerraform, false)(struct!.android),
    chromeos: cdktf.listMapper(gacSettingsAppSettingsChromeosToTerraform, false)(struct!.chromeos),
    html5: cdktf.listMapper(gacSettingsAppSettingsHtml5ToTerraform, false)(struct!.html5),
    ios: cdktf.listMapper(gacSettingsAppSettingsIosToTerraform, false)(struct!.ios),
    linux: cdktf.listMapper(gacSettingsAppSettingsLinuxToTerraform, false)(struct!.linux),
    macos: cdktf.listMapper(gacSettingsAppSettingsMacosToTerraform, false)(struct!.macos),
    windows: cdktf.listMapper(gacSettingsAppSettingsWindowsToTerraform, false)(struct!.windows),
  }
}


export function gacSettingsAppSettingsToHclTerraform(struct?: GacSettingsAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    android: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsAndroidToHclTerraform, false)(struct!.android),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsAndroidList",
    },
    chromeos: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsChromeosToHclTerraform, false)(struct!.chromeos),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsChromeosList",
    },
    html5: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsHtml5ToHclTerraform, false)(struct!.html5),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsHtml5List",
    },
    ios: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsIosToHclTerraform, false)(struct!.ios),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsIosList",
    },
    linux: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsLinuxToHclTerraform, false)(struct!.linux),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsLinuxList",
    },
    macos: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsMacosToHclTerraform, false)(struct!.macos),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsMacosList",
    },
    windows: {
      value: cdktf.listMapperHcl(gacSettingsAppSettingsWindowsToHclTerraform, false)(struct!.windows),
      isBlock: true,
      type: "set",
      storageClassType: "GacSettingsAppSettingsWindowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GacSettingsAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GacSettingsAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._android?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.android = this._android?.internalValue;
    }
    if (this._chromeos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chromeos = this._chromeos?.internalValue;
    }
    if (this._html5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.html5 = this._html5?.internalValue;
    }
    if (this._ios?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ios = this._ios?.internalValue;
    }
    if (this._linux?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linux = this._linux?.internalValue;
    }
    if (this._macos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.macos = this._macos?.internalValue;
    }
    if (this._windows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windows = this._windows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GacSettingsAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._android.internalValue = undefined;
      this._chromeos.internalValue = undefined;
      this._html5.internalValue = undefined;
      this._ios.internalValue = undefined;
      this._linux.internalValue = undefined;
      this._macos.internalValue = undefined;
      this._windows.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._android.internalValue = value.android;
      this._chromeos.internalValue = value.chromeos;
      this._html5.internalValue = value.html5;
      this._ios.internalValue = value.ios;
      this._linux.internalValue = value.linux;
      this._macos.internalValue = value.macos;
      this._windows.internalValue = value.windows;
    }
  }

  // android - computed: false, optional: true, required: false
  private _android = new GacSettingsAppSettingsAndroidList(this, "android", true);
  public get android() {
    return this._android;
  }
  public putAndroid(value: GacSettingsAppSettingsAndroid[] | cdktf.IResolvable) {
    this._android.internalValue = value;
  }
  public resetAndroid() {
    this._android.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get androidInput() {
    return this._android.internalValue;
  }

  // chromeos - computed: false, optional: true, required: false
  private _chromeos = new GacSettingsAppSettingsChromeosList(this, "chromeos", true);
  public get chromeos() {
    return this._chromeos;
  }
  public putChromeos(value: GacSettingsAppSettingsChromeos[] | cdktf.IResolvable) {
    this._chromeos.internalValue = value;
  }
  public resetChromeos() {
    this._chromeos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chromeosInput() {
    return this._chromeos.internalValue;
  }

  // html5 - computed: false, optional: true, required: false
  private _html5 = new GacSettingsAppSettingsHtml5List(this, "html5", true);
  public get html5() {
    return this._html5;
  }
  public putHtml5(value: GacSettingsAppSettingsHtml5[] | cdktf.IResolvable) {
    this._html5.internalValue = value;
  }
  public resetHtml5() {
    this._html5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get html5Input() {
    return this._html5.internalValue;
  }

  // ios - computed: false, optional: true, required: false
  private _ios = new GacSettingsAppSettingsIosList(this, "ios", true);
  public get ios() {
    return this._ios;
  }
  public putIos(value: GacSettingsAppSettingsIos[] | cdktf.IResolvable) {
    this._ios.internalValue = value;
  }
  public resetIos() {
    this._ios.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosInput() {
    return this._ios.internalValue;
  }

  // linux - computed: false, optional: true, required: false
  private _linux = new GacSettingsAppSettingsLinuxList(this, "linux", true);
  public get linux() {
    return this._linux;
  }
  public putLinux(value: GacSettingsAppSettingsLinux[] | cdktf.IResolvable) {
    this._linux.internalValue = value;
  }
  public resetLinux() {
    this._linux.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxInput() {
    return this._linux.internalValue;
  }

  // macos - computed: false, optional: true, required: false
  private _macos = new GacSettingsAppSettingsMacosList(this, "macos", true);
  public get macos() {
    return this._macos;
  }
  public putMacos(value: GacSettingsAppSettingsMacos[] | cdktf.IResolvable) {
    this._macos.internalValue = value;
  }
  public resetMacos() {
    this._macos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosInput() {
    return this._macos.internalValue;
  }

  // windows - computed: false, optional: true, required: false
  private _windows = new GacSettingsAppSettingsWindowsList(this, "windows", true);
  public get windows() {
    return this._windows;
  }
  public putWindows(value: GacSettingsAppSettingsWindows[] | cdktf.IResolvable) {
    this._windows.internalValue = value;
  }
  public resetWindows() {
    this._windows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings citrix_gac_settings}
*/
export class GacSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_gac_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GacSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GacSettings to import
  * @param importFromId The id of the existing GacSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GacSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_gac_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_settings citrix_gac_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GacSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: GacSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_gac_settings',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appSettings.internalValue = config.appSettings;
    this._description = config.description;
    this._name = config.name;
    this._serviceUrl = config.serviceUrl;
    this._testChannel = config.testChannel;
    this._useForAppConfig = config.useForAppConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_settings - computed: false, optional: false, required: true
  private _appSettings = new GacSettingsAppSettingsOutputReference(this, "app_settings");
  public get appSettings() {
    return this._appSettings;
  }
  public putAppSettings(value: GacSettingsAppSettings) {
    this._appSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appSettingsInput() {
    return this._appSettings.internalValue;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // service_url - computed: false, optional: false, required: true
  private _serviceUrl?: string; 
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }
  public set serviceUrl(value: string) {
    this._serviceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUrlInput() {
    return this._serviceUrl;
  }

  // test_channel - computed: true, optional: true, required: false
  private _testChannel?: boolean | cdktf.IResolvable; 
  public get testChannel() {
    return this.getBooleanAttribute('test_channel');
  }
  public set testChannel(value: boolean | cdktf.IResolvable) {
    this._testChannel = value;
  }
  public resetTestChannel() {
    this._testChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testChannelInput() {
    return this._testChannel;
  }

  // use_for_app_config - computed: true, optional: true, required: false
  private _useForAppConfig?: boolean | cdktf.IResolvable; 
  public get useForAppConfig() {
    return this.getBooleanAttribute('use_for_app_config');
  }
  public set useForAppConfig(value: boolean | cdktf.IResolvable) {
    this._useForAppConfig = value;
  }
  public resetUseForAppConfig() {
    this._useForAppConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForAppConfigInput() {
    return this._useForAppConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_settings: gacSettingsAppSettingsToTerraform(this._appSettings.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      service_url: cdktf.stringToTerraform(this._serviceUrl),
      test_channel: cdktf.booleanToTerraform(this._testChannel),
      use_for_app_config: cdktf.booleanToTerraform(this._useForAppConfig),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_settings: {
        value: gacSettingsAppSettingsToHclTerraform(this._appSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GacSettingsAppSettings",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_url: {
        value: cdktf.stringToHclTerraform(this._serviceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_channel: {
        value: cdktf.booleanToHclTerraform(this._testChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_for_app_config: {
        value: cdktf.booleanToHclTerraform(this._useForAppConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
