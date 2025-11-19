// https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaRequestSettingResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the resource in Okta ID format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_resource#id DataOktaRequestSettingResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * request_on_behalf_of_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_resource#request_on_behalf_of_settings DataOktaRequestSettingResource#request_on_behalf_of_settings}
  */
  readonly requestOnBehalfOfSettings?: DataOktaRequestSettingResourceRequestOnBehalfOfSettings;
  /**
  * valid_access_duration_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_resource#valid_access_duration_settings DataOktaRequestSettingResource#valid_access_duration_settings}
  */
  readonly validAccessDurationSettings?: DataOktaRequestSettingResourceValidAccessDurationSettings;
  /**
  * valid_access_scope_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_resource#valid_access_scope_settings DataOktaRequestSettingResource#valid_access_scope_settings}
  */
  readonly validAccessScopeSettings?: DataOktaRequestSettingResourceValidAccessScopeSettings[] | cdktf.IResolvable;
  /**
  * valid_requester_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_resource#valid_requester_settings DataOktaRequestSettingResource#valid_requester_settings}
  */
  readonly validRequesterSettings?: DataOktaRequestSettingResourceValidRequesterSettings[] | cdktf.IResolvable;
}
export interface DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyFor {
}

export function dataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyForToTerraform(struct?: DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyForToHclTerraform(struct?: DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyForOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyFor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyFor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyForList extends cdktf.ComplexList {
  public internalValue? : DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyFor[] | cdktf.IResolvable

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
  public get(index: number): DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyForOutputReference {
    return new DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyForOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaRequestSettingResourceRequestOnBehalfOfSettings {
  /**
  * only_for block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_resource#only_for DataOktaRequestSettingResource#only_for}
  */
  readonly onlyFor?: DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyFor[] | cdktf.IResolvable;
}

export function dataOktaRequestSettingResourceRequestOnBehalfOfSettingsToTerraform(struct?: DataOktaRequestSettingResourceRequestOnBehalfOfSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_for: cdktf.listMapper(dataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyForToTerraform, true)(struct!.onlyFor),
  }
}


export function dataOktaRequestSettingResourceRequestOnBehalfOfSettingsToHclTerraform(struct?: DataOktaRequestSettingResourceRequestOnBehalfOfSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    only_for: {
      value: cdktf.listMapperHcl(dataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyForToHclTerraform, true)(struct!.onlyFor),
      isBlock: true,
      type: "set",
      storageClassType: "DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyForList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaRequestSettingResourceRequestOnBehalfOfSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onlyFor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyFor = this._onlyFor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestSettingResourceRequestOnBehalfOfSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onlyFor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onlyFor.internalValue = value.onlyFor;
    }
  }

  // allowed - computed: true, optional: false, required: false
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }

  // only_for - computed: false, optional: true, required: false
  private _onlyFor = new DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyForList(this, "only_for", true);
  public get onlyFor() {
    return this._onlyFor;
  }
  public putOnlyFor(value: DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOnlyFor[] | cdktf.IResolvable) {
    this._onlyFor.internalValue = value;
  }
  public resetOnlyFor() {
    this._onlyFor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyForInput() {
    return this._onlyFor.internalValue;
  }
}
export interface DataOktaRequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings {
}

export function dataOktaRequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettingsToTerraform(struct?: DataOktaRequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaRequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettingsToHclTerraform(struct?: DataOktaRequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaRequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaRequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataOktaRequestSettingResourceRiskSettingsDefaultSetting {
}

export function dataOktaRequestSettingResourceRiskSettingsDefaultSettingToTerraform(struct?: DataOktaRequestSettingResourceRiskSettingsDefaultSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaRequestSettingResourceRiskSettingsDefaultSettingToHclTerraform(struct?: DataOktaRequestSettingResourceRiskSettingsDefaultSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaRequestSettingResourceRiskSettingsDefaultSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaRequestSettingResourceRiskSettingsDefaultSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestSettingResourceRiskSettingsDefaultSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // approval_sequence_id - computed: true, optional: false, required: false
  public get approvalSequenceId() {
    return this.getStringAttribute('approval_sequence_id');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getListAttribute('error');
  }

  // request_submission_type - computed: true, optional: false, required: false
  public get requestSubmissionType() {
    return this.getStringAttribute('request_submission_type');
  }

  // access_duration_settings - computed: false, optional: false, required: false
  private _accessDurationSettings = new DataOktaRequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettingsOutputReference(this, "access_duration_settings");
  public get accessDurationSettings() {
    return this._accessDurationSettings;
  }
}
export interface DataOktaRequestSettingResourceRiskSettings {
}

export function dataOktaRequestSettingResourceRiskSettingsToTerraform(struct?: DataOktaRequestSettingResourceRiskSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaRequestSettingResourceRiskSettingsToHclTerraform(struct?: DataOktaRequestSettingResourceRiskSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaRequestSettingResourceRiskSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaRequestSettingResourceRiskSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestSettingResourceRiskSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // default_setting - computed: false, optional: false, required: false
  private _defaultSetting = new DataOktaRequestSettingResourceRiskSettingsDefaultSettingOutputReference(this, "default_setting");
  public get defaultSetting() {
    return this._defaultSetting;
  }
}
export interface DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypes {
}

export function dataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypesToTerraform(struct?: DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypesToHclTerraform(struct?: DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypesList extends cdktf.ComplexList {
  public internalValue? : DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypes[] | cdktf.IResolvable

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
  public get(index: number): DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypesOutputReference {
    return new DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaRequestSettingResourceValidAccessDurationSettings {
  /**
  * supported_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_resource#supported_types DataOktaRequestSettingResource#supported_types}
  */
  readonly supportedTypes?: DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypes[] | cdktf.IResolvable;
}

export function dataOktaRequestSettingResourceValidAccessDurationSettingsToTerraform(struct?: DataOktaRequestSettingResourceValidAccessDurationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    supported_types: cdktf.listMapper(dataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypesToTerraform, true)(struct!.supportedTypes),
  }
}


export function dataOktaRequestSettingResourceValidAccessDurationSettingsToHclTerraform(struct?: DataOktaRequestSettingResourceValidAccessDurationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    supported_types: {
      value: cdktf.listMapperHcl(dataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypesToHclTerraform, true)(struct!.supportedTypes),
      isBlock: true,
      type: "set",
      storageClassType: "DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaRequestSettingResourceValidAccessDurationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaRequestSettingResourceValidAccessDurationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._supportedTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedTypes = this._supportedTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestSettingResourceValidAccessDurationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._supportedTypes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._supportedTypes.internalValue = value.supportedTypes;
    }
  }

  // maximum_days - computed: true, optional: false, required: false
  public get maximumDays() {
    return this.getNumberAttribute('maximum_days');
  }

  // maximum_hours - computed: true, optional: false, required: false
  public get maximumHours() {
    return this.getNumberAttribute('maximum_hours');
  }

  // maximum_weeks - computed: true, optional: false, required: false
  public get maximumWeeks() {
    return this.getNumberAttribute('maximum_weeks');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // supported_types - computed: false, optional: true, required: false
  private _supportedTypes = new DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypesList(this, "supported_types", true);
  public get supportedTypes() {
    return this._supportedTypes;
  }
  public putSupportedTypes(value: DataOktaRequestSettingResourceValidAccessDurationSettingsSupportedTypes[] | cdktf.IResolvable) {
    this._supportedTypes.internalValue = value;
  }
  public resetSupportedTypes() {
    this._supportedTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedTypesInput() {
    return this._supportedTypes.internalValue;
  }
}
export interface DataOktaRequestSettingResourceValidAccessScopeSettings {
}

export function dataOktaRequestSettingResourceValidAccessScopeSettingsToTerraform(struct?: DataOktaRequestSettingResourceValidAccessScopeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaRequestSettingResourceValidAccessScopeSettingsToHclTerraform(struct?: DataOktaRequestSettingResourceValidAccessScopeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaRequestSettingResourceValidAccessScopeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaRequestSettingResourceValidAccessScopeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestSettingResourceValidAccessScopeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOktaRequestSettingResourceValidAccessScopeSettingsList extends cdktf.ComplexList {
  public internalValue? : DataOktaRequestSettingResourceValidAccessScopeSettings[] | cdktf.IResolvable

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
  public get(index: number): DataOktaRequestSettingResourceValidAccessScopeSettingsOutputReference {
    return new DataOktaRequestSettingResourceValidAccessScopeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaRequestSettingResourceValidRequesterSettings {
}

export function dataOktaRequestSettingResourceValidRequesterSettingsToTerraform(struct?: DataOktaRequestSettingResourceValidRequesterSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaRequestSettingResourceValidRequesterSettingsToHclTerraform(struct?: DataOktaRequestSettingResourceValidRequesterSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaRequestSettingResourceValidRequesterSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaRequestSettingResourceValidRequesterSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestSettingResourceValidRequesterSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOktaRequestSettingResourceValidRequesterSettingsList extends cdktf.ComplexList {
  public internalValue? : DataOktaRequestSettingResourceValidRequesterSettings[] | cdktf.IResolvable

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
  public get(index: number): DataOktaRequestSettingResourceValidRequesterSettingsOutputReference {
    return new DataOktaRequestSettingResourceValidRequesterSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_resource okta_request_setting_resource}
*/
export class DataOktaRequestSettingResource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_request_setting_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaRequestSettingResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaRequestSettingResource to import
  * @param importFromId The id of the existing DataOktaRequestSettingResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaRequestSettingResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_request_setting_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_resource okta_request_setting_resource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaRequestSettingResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaRequestSettingResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_request_setting_resource',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.0',
        providerVersionConstraint: '6.5.0'
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
    this._requestOnBehalfOfSettings.internalValue = config.requestOnBehalfOfSettings;
    this._validAccessDurationSettings.internalValue = config.validAccessDurationSettings;
    this._validAccessScopeSettings.internalValue = config.validAccessScopeSettings;
    this._validRequesterSettings.internalValue = config.validRequesterSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // request_on_behalf_of_settings - computed: false, optional: true, required: false
  private _requestOnBehalfOfSettings = new DataOktaRequestSettingResourceRequestOnBehalfOfSettingsOutputReference(this, "request_on_behalf_of_settings");
  public get requestOnBehalfOfSettings() {
    return this._requestOnBehalfOfSettings;
  }
  public putRequestOnBehalfOfSettings(value: DataOktaRequestSettingResourceRequestOnBehalfOfSettings) {
    this._requestOnBehalfOfSettings.internalValue = value;
  }
  public resetRequestOnBehalfOfSettings() {
    this._requestOnBehalfOfSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestOnBehalfOfSettingsInput() {
    return this._requestOnBehalfOfSettings.internalValue;
  }

  // risk_settings - computed: false, optional: false, required: false
  private _riskSettings = new DataOktaRequestSettingResourceRiskSettingsOutputReference(this, "risk_settings");
  public get riskSettings() {
    return this._riskSettings;
  }

  // valid_access_duration_settings - computed: false, optional: true, required: false
  private _validAccessDurationSettings = new DataOktaRequestSettingResourceValidAccessDurationSettingsOutputReference(this, "valid_access_duration_settings");
  public get validAccessDurationSettings() {
    return this._validAccessDurationSettings;
  }
  public putValidAccessDurationSettings(value: DataOktaRequestSettingResourceValidAccessDurationSettings) {
    this._validAccessDurationSettings.internalValue = value;
  }
  public resetValidAccessDurationSettings() {
    this._validAccessDurationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validAccessDurationSettingsInput() {
    return this._validAccessDurationSettings.internalValue;
  }

  // valid_access_scope_settings - computed: false, optional: true, required: false
  private _validAccessScopeSettings = new DataOktaRequestSettingResourceValidAccessScopeSettingsList(this, "valid_access_scope_settings", true);
  public get validAccessScopeSettings() {
    return this._validAccessScopeSettings;
  }
  public putValidAccessScopeSettings(value: DataOktaRequestSettingResourceValidAccessScopeSettings[] | cdktf.IResolvable) {
    this._validAccessScopeSettings.internalValue = value;
  }
  public resetValidAccessScopeSettings() {
    this._validAccessScopeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validAccessScopeSettingsInput() {
    return this._validAccessScopeSettings.internalValue;
  }

  // valid_requester_settings - computed: false, optional: true, required: false
  private _validRequesterSettings = new DataOktaRequestSettingResourceValidRequesterSettingsList(this, "valid_requester_settings", true);
  public get validRequesterSettings() {
    return this._validRequesterSettings;
  }
  public putValidRequesterSettings(value: DataOktaRequestSettingResourceValidRequesterSettings[] | cdktf.IResolvable) {
    this._validRequesterSettings.internalValue = value;
  }
  public resetValidRequesterSettings() {
    this._validRequesterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validRequesterSettingsInput() {
    return this._validRequesterSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      request_on_behalf_of_settings: dataOktaRequestSettingResourceRequestOnBehalfOfSettingsToTerraform(this._requestOnBehalfOfSettings.internalValue),
      valid_access_duration_settings: dataOktaRequestSettingResourceValidAccessDurationSettingsToTerraform(this._validAccessDurationSettings.internalValue),
      valid_access_scope_settings: cdktf.listMapper(dataOktaRequestSettingResourceValidAccessScopeSettingsToTerraform, true)(this._validAccessScopeSettings.internalValue),
      valid_requester_settings: cdktf.listMapper(dataOktaRequestSettingResourceValidRequesterSettingsToTerraform, true)(this._validRequesterSettings.internalValue),
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
      request_on_behalf_of_settings: {
        value: dataOktaRequestSettingResourceRequestOnBehalfOfSettingsToHclTerraform(this._requestOnBehalfOfSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOktaRequestSettingResourceRequestOnBehalfOfSettings",
      },
      valid_access_duration_settings: {
        value: dataOktaRequestSettingResourceValidAccessDurationSettingsToHclTerraform(this._validAccessDurationSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOktaRequestSettingResourceValidAccessDurationSettings",
      },
      valid_access_scope_settings: {
        value: cdktf.listMapperHcl(dataOktaRequestSettingResourceValidAccessScopeSettingsToHclTerraform, true)(this._validAccessScopeSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOktaRequestSettingResourceValidAccessScopeSettingsList",
      },
      valid_requester_settings: {
        value: cdktf.listMapperHcl(dataOktaRequestSettingResourceValidRequesterSettingsToHclTerraform, true)(this._validRequesterSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOktaRequestSettingResourceValidRequesterSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
