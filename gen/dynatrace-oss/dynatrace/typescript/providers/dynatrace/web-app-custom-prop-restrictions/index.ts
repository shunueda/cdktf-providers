// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppCustomPropRestrictionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#application_id WebAppCustomPropRestrictions#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#id WebAppCustomPropRestrictions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * custom_event_properties_allow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#custom_event_properties_allow_list WebAppCustomPropRestrictions#custom_event_properties_allow_list}
  */
  readonly customEventPropertiesAllowList?: WebAppCustomPropRestrictionsCustomEventPropertiesAllowListStruct;
  /**
  * custom_session_properties_allow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#custom_session_properties_allow_list WebAppCustomPropRestrictions#custom_session_properties_allow_list}
  */
  readonly customSessionPropertiesAllowList?: WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListStruct;
}
export interface WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllow {
  /**
  * Field name validation should be case-insensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#case_insensitive_naming_enabled WebAppCustomPropRestrictions#case_insensitive_naming_enabled}
  */
  readonly caseInsensitiveNamingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `BOOLEAN`, `NUMBER`, `STRING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#field_data_type WebAppCustomPropRestrictions#field_data_type}
  */
  readonly fieldDataType: string;
  /**
  * Field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#field_name WebAppCustomPropRestrictions#field_name}
  */
  readonly fieldName: string;
}

export function webAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllowToTerraform(struct?: WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_insensitive_naming_enabled: cdktf.booleanToTerraform(struct!.caseInsensitiveNamingEnabled),
    field_data_type: cdktf.stringToTerraform(struct!.fieldDataType),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
  }
}


export function webAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllowToHclTerraform(struct?: WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_insensitive_naming_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.caseInsensitiveNamingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_data_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseInsensitiveNamingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitiveNamingEnabled = this._caseInsensitiveNamingEnabled;
    }
    if (this._fieldDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDataType = this._fieldDataType;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseInsensitiveNamingEnabled = undefined;
      this._fieldDataType = undefined;
      this._fieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseInsensitiveNamingEnabled = value.caseInsensitiveNamingEnabled;
      this._fieldDataType = value.fieldDataType;
      this._fieldName = value.fieldName;
    }
  }

  // case_insensitive_naming_enabled - computed: false, optional: true, required: false
  private _caseInsensitiveNamingEnabled?: boolean | cdktf.IResolvable; 
  public get caseInsensitiveNamingEnabled() {
    return this.getBooleanAttribute('case_insensitive_naming_enabled');
  }
  public set caseInsensitiveNamingEnabled(value: boolean | cdktf.IResolvable) {
    this._caseInsensitiveNamingEnabled = value;
  }
  public resetCaseInsensitiveNamingEnabled() {
    this._caseInsensitiveNamingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveNamingEnabledInput() {
    return this._caseInsensitiveNamingEnabled;
  }

  // field_data_type - computed: false, optional: false, required: true
  private _fieldDataType?: string; 
  public get fieldDataType() {
    return this.getStringAttribute('field_data_type');
  }
  public set fieldDataType(value: string) {
    this._fieldDataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDataTypeInput() {
    return this._fieldDataType;
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }
}

export class WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllowList extends cdktf.ComplexList {
  public internalValue? : WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllow[] | cdktf.IResolvable

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
  public get(index: number): WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllowOutputReference {
    return new WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebAppCustomPropRestrictionsCustomEventPropertiesAllowListStruct {
  /**
  * custom_session_properties_allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#custom_session_properties_allow WebAppCustomPropRestrictions#custom_session_properties_allow}
  */
  readonly customSessionPropertiesAllow: WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllow[] | cdktf.IResolvable;
}

export function webAppCustomPropRestrictionsCustomEventPropertiesAllowListStructToTerraform(struct?: WebAppCustomPropRestrictionsCustomEventPropertiesAllowListStructOutputReference | WebAppCustomPropRestrictionsCustomEventPropertiesAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_session_properties_allow: cdktf.listMapper(webAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllowToTerraform, true)(struct!.customSessionPropertiesAllow),
  }
}


export function webAppCustomPropRestrictionsCustomEventPropertiesAllowListStructToHclTerraform(struct?: WebAppCustomPropRestrictionsCustomEventPropertiesAllowListStructOutputReference | WebAppCustomPropRestrictionsCustomEventPropertiesAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_session_properties_allow: {
      value: cdktf.listMapperHcl(webAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllowToHclTerraform, true)(struct!.customSessionPropertiesAllow),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppCustomPropRestrictionsCustomEventPropertiesAllowListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppCustomPropRestrictionsCustomEventPropertiesAllowListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSessionPropertiesAllow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionPropertiesAllow = this._customSessionPropertiesAllow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppCustomPropRestrictionsCustomEventPropertiesAllowListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSessionPropertiesAllow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSessionPropertiesAllow.internalValue = value.customSessionPropertiesAllow;
    }
  }

  // custom_session_properties_allow - computed: false, optional: false, required: true
  private _customSessionPropertiesAllow = new WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllowList(this, "custom_session_properties_allow", false);
  public get customSessionPropertiesAllow() {
    return this._customSessionPropertiesAllow;
  }
  public putCustomSessionPropertiesAllow(value: WebAppCustomPropRestrictionsCustomEventPropertiesAllowListCustomSessionPropertiesAllow[] | cdktf.IResolvable) {
    this._customSessionPropertiesAllow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionPropertiesAllowInput() {
    return this._customSessionPropertiesAllow.internalValue;
  }
}
export interface WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllow {
  /**
  * Field name validation should be case-insensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#case_insensitive_naming_enabled WebAppCustomPropRestrictions#case_insensitive_naming_enabled}
  */
  readonly caseInsensitiveNamingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `BOOLEAN`, `NUMBER`, `STRING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#field_data_type WebAppCustomPropRestrictions#field_data_type}
  */
  readonly fieldDataType: string;
  /**
  * Field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#field_name WebAppCustomPropRestrictions#field_name}
  */
  readonly fieldName: string;
}

export function webAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllowToTerraform(struct?: WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_insensitive_naming_enabled: cdktf.booleanToTerraform(struct!.caseInsensitiveNamingEnabled),
    field_data_type: cdktf.stringToTerraform(struct!.fieldDataType),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
  }
}


export function webAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllowToHclTerraform(struct?: WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_insensitive_naming_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.caseInsensitiveNamingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_data_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseInsensitiveNamingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitiveNamingEnabled = this._caseInsensitiveNamingEnabled;
    }
    if (this._fieldDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDataType = this._fieldDataType;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseInsensitiveNamingEnabled = undefined;
      this._fieldDataType = undefined;
      this._fieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseInsensitiveNamingEnabled = value.caseInsensitiveNamingEnabled;
      this._fieldDataType = value.fieldDataType;
      this._fieldName = value.fieldName;
    }
  }

  // case_insensitive_naming_enabled - computed: false, optional: true, required: false
  private _caseInsensitiveNamingEnabled?: boolean | cdktf.IResolvable; 
  public get caseInsensitiveNamingEnabled() {
    return this.getBooleanAttribute('case_insensitive_naming_enabled');
  }
  public set caseInsensitiveNamingEnabled(value: boolean | cdktf.IResolvable) {
    this._caseInsensitiveNamingEnabled = value;
  }
  public resetCaseInsensitiveNamingEnabled() {
    this._caseInsensitiveNamingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveNamingEnabledInput() {
    return this._caseInsensitiveNamingEnabled;
  }

  // field_data_type - computed: false, optional: false, required: true
  private _fieldDataType?: string; 
  public get fieldDataType() {
    return this.getStringAttribute('field_data_type');
  }
  public set fieldDataType(value: string) {
    this._fieldDataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDataTypeInput() {
    return this._fieldDataType;
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }
}

export class WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllowList extends cdktf.ComplexList {
  public internalValue? : WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllow[] | cdktf.IResolvable

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
  public get(index: number): WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllowOutputReference {
    return new WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListStruct {
  /**
  * custom_session_properties_allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#custom_session_properties_allow WebAppCustomPropRestrictions#custom_session_properties_allow}
  */
  readonly customSessionPropertiesAllow: WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllow[] | cdktf.IResolvable;
}

export function webAppCustomPropRestrictionsCustomSessionPropertiesAllowListStructToTerraform(struct?: WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListStructOutputReference | WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_session_properties_allow: cdktf.listMapper(webAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllowToTerraform, true)(struct!.customSessionPropertiesAllow),
  }
}


export function webAppCustomPropRestrictionsCustomSessionPropertiesAllowListStructToHclTerraform(struct?: WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListStructOutputReference | WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_session_properties_allow: {
      value: cdktf.listMapperHcl(webAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllowToHclTerraform, true)(struct!.customSessionPropertiesAllow),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSessionPropertiesAllow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionPropertiesAllow = this._customSessionPropertiesAllow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSessionPropertiesAllow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSessionPropertiesAllow.internalValue = value.customSessionPropertiesAllow;
    }
  }

  // custom_session_properties_allow - computed: false, optional: false, required: true
  private _customSessionPropertiesAllow = new WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllowList(this, "custom_session_properties_allow", false);
  public get customSessionPropertiesAllow() {
    return this._customSessionPropertiesAllow;
  }
  public putCustomSessionPropertiesAllow(value: WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListCustomSessionPropertiesAllow[] | cdktf.IResolvable) {
    this._customSessionPropertiesAllow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionPropertiesAllowInput() {
    return this._customSessionPropertiesAllow.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions dynatrace_web_app_custom_prop_restrictions}
*/
export class WebAppCustomPropRestrictions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_custom_prop_restrictions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppCustomPropRestrictions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppCustomPropRestrictions to import
  * @param importFromId The id of the existing WebAppCustomPropRestrictions that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppCustomPropRestrictions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_custom_prop_restrictions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_prop_restrictions dynatrace_web_app_custom_prop_restrictions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppCustomPropRestrictionsConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppCustomPropRestrictionsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_custom_prop_restrictions',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._id = config.id;
    this._customEventPropertiesAllowList.internalValue = config.customEventPropertiesAllowList;
    this._customSessionPropertiesAllowList.internalValue = config.customSessionPropertiesAllowList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // custom_event_properties_allow_list - computed: false, optional: true, required: false
  private _customEventPropertiesAllowList = new WebAppCustomPropRestrictionsCustomEventPropertiesAllowListStructOutputReference(this, "custom_event_properties_allow_list");
  public get customEventPropertiesAllowList() {
    return this._customEventPropertiesAllowList;
  }
  public putCustomEventPropertiesAllowList(value: WebAppCustomPropRestrictionsCustomEventPropertiesAllowListStruct) {
    this._customEventPropertiesAllowList.internalValue = value;
  }
  public resetCustomEventPropertiesAllowList() {
    this._customEventPropertiesAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEventPropertiesAllowListInput() {
    return this._customEventPropertiesAllowList.internalValue;
  }

  // custom_session_properties_allow_list - computed: false, optional: true, required: false
  private _customSessionPropertiesAllowList = new WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListStructOutputReference(this, "custom_session_properties_allow_list");
  public get customSessionPropertiesAllowList() {
    return this._customSessionPropertiesAllowList;
  }
  public putCustomSessionPropertiesAllowList(value: WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListStruct) {
    this._customSessionPropertiesAllowList.internalValue = value;
  }
  public resetCustomSessionPropertiesAllowList() {
    this._customSessionPropertiesAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionPropertiesAllowListInput() {
    return this._customSessionPropertiesAllowList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      id: cdktf.stringToTerraform(this._id),
      custom_event_properties_allow_list: webAppCustomPropRestrictionsCustomEventPropertiesAllowListStructToTerraform(this._customEventPropertiesAllowList.internalValue),
      custom_session_properties_allow_list: webAppCustomPropRestrictionsCustomSessionPropertiesAllowListStructToTerraform(this._customSessionPropertiesAllowList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
      custom_event_properties_allow_list: {
        value: webAppCustomPropRestrictionsCustomEventPropertiesAllowListStructToHclTerraform(this._customEventPropertiesAllowList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppCustomPropRestrictionsCustomEventPropertiesAllowListStructList",
      },
      custom_session_properties_allow_list: {
        value: webAppCustomPropRestrictionsCustomSessionPropertiesAllowListStructToHclTerraform(this._customSessionPropertiesAllowList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppCustomPropRestrictionsCustomSessionPropertiesAllowListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
