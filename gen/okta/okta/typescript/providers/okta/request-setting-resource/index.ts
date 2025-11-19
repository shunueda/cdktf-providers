// https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RequestSettingResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the resource in Okta ID format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#id RequestSettingResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * request_on_behalf_of_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#request_on_behalf_of_settings RequestSettingResource#request_on_behalf_of_settings}
  */
  readonly requestOnBehalfOfSettings?: RequestSettingResourceRequestOnBehalfOfSettings;
  /**
  * risk_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#risk_settings RequestSettingResource#risk_settings}
  */
  readonly riskSettings?: RequestSettingResourceRiskSettings;
}
export interface RequestSettingResourceRequestOnBehalfOfSettingsOnlyFor {
  /**
  * Which requesters the resource requester can request on behalf of. If onlyFor is not specified then any requester may request a resource on the behalf of any other user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#type RequestSettingResource#type}
  */
  readonly type?: string;
}

export function requestSettingResourceRequestOnBehalfOfSettingsOnlyForToTerraform(struct?: RequestSettingResourceRequestOnBehalfOfSettingsOnlyFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function requestSettingResourceRequestOnBehalfOfSettingsOnlyForToHclTerraform(struct?: RequestSettingResourceRequestOnBehalfOfSettingsOnlyFor | cdktf.IResolvable): any {
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

export class RequestSettingResourceRequestOnBehalfOfSettingsOnlyForOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RequestSettingResourceRequestOnBehalfOfSettingsOnlyFor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RequestSettingResourceRequestOnBehalfOfSettingsOnlyFor | cdktf.IResolvable | undefined) {
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class RequestSettingResourceRequestOnBehalfOfSettingsOnlyForList extends cdktf.ComplexList {
  public internalValue? : RequestSettingResourceRequestOnBehalfOfSettingsOnlyFor[] | cdktf.IResolvable

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
  public get(index: number): RequestSettingResourceRequestOnBehalfOfSettingsOnlyForOutputReference {
    return new RequestSettingResourceRequestOnBehalfOfSettingsOnlyForOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RequestSettingResourceRequestOnBehalfOfSettings {
  /**
  * Indicates that users who can request this resource could also request for another requester of the same resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#allowed RequestSettingResource#allowed}
  */
  readonly allowed?: boolean | cdktf.IResolvable;
  /**
  * only_for block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#only_for RequestSettingResource#only_for}
  */
  readonly onlyFor?: RequestSettingResourceRequestOnBehalfOfSettingsOnlyFor[] | cdktf.IResolvable;
}

export function requestSettingResourceRequestOnBehalfOfSettingsToTerraform(struct?: RequestSettingResourceRequestOnBehalfOfSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
    only_for: cdktf.listMapper(requestSettingResourceRequestOnBehalfOfSettingsOnlyForToTerraform, true)(struct!.onlyFor),
  }
}


export function requestSettingResourceRequestOnBehalfOfSettingsToHclTerraform(struct?: RequestSettingResourceRequestOnBehalfOfSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_for: {
      value: cdktf.listMapperHcl(requestSettingResourceRequestOnBehalfOfSettingsOnlyForToHclTerraform, true)(struct!.onlyFor),
      isBlock: true,
      type: "set",
      storageClassType: "RequestSettingResourceRequestOnBehalfOfSettingsOnlyForList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestSettingResourceRequestOnBehalfOfSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RequestSettingResourceRequestOnBehalfOfSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._onlyFor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyFor = this._onlyFor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestSettingResourceRequestOnBehalfOfSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._onlyFor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._onlyFor.internalValue = value.onlyFor;
    }
  }

  // allowed - computed: true, optional: true, required: false
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // only_for - computed: false, optional: true, required: false
  private _onlyFor = new RequestSettingResourceRequestOnBehalfOfSettingsOnlyForList(this, "only_for", true);
  public get onlyFor() {
    return this._onlyFor;
  }
  public putOnlyFor(value: RequestSettingResourceRequestOnBehalfOfSettingsOnlyFor[] | cdktf.IResolvable) {
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
export interface RequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#duration RequestSettingResource#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#type RequestSettingResource#type}
  */
  readonly type?: string;
}

export function requestSettingResourceRiskSettingsDefaultSettingAccessDurationSettingsToTerraform(struct?: RequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function requestSettingResourceRiskSettingsDefaultSettingAccessDurationSettingsToHclTerraform(struct?: RequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class RequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._type = value.type;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface RequestSettingResourceRiskSettingsDefaultSetting {
  /**
  * The ID of the approval sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#approval_sequence_id RequestSettingResource#approval_sequence_id}
  */
  readonly approvalSequenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#request_submission_type RequestSettingResource#request_submission_type}
  */
  readonly requestSubmissionType?: string;
  /**
  * access_duration_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#access_duration_settings RequestSettingResource#access_duration_settings}
  */
  readonly accessDurationSettings?: RequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings;
}

export function requestSettingResourceRiskSettingsDefaultSettingToTerraform(struct?: RequestSettingResourceRiskSettingsDefaultSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approval_sequence_id: cdktf.stringToTerraform(struct!.approvalSequenceId),
    request_submission_type: cdktf.stringToTerraform(struct!.requestSubmissionType),
    access_duration_settings: requestSettingResourceRiskSettingsDefaultSettingAccessDurationSettingsToTerraform(struct!.accessDurationSettings),
  }
}


export function requestSettingResourceRiskSettingsDefaultSettingToHclTerraform(struct?: RequestSettingResourceRiskSettingsDefaultSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approval_sequence_id: {
      value: cdktf.stringToHclTerraform(struct!.approvalSequenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_submission_type: {
      value: cdktf.stringToHclTerraform(struct!.requestSubmissionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_duration_settings: {
      value: requestSettingResourceRiskSettingsDefaultSettingAccessDurationSettingsToHclTerraform(struct!.accessDurationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "RequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestSettingResourceRiskSettingsDefaultSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RequestSettingResourceRiskSettingsDefaultSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalSequenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalSequenceId = this._approvalSequenceId;
    }
    if (this._requestSubmissionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSubmissionType = this._requestSubmissionType;
    }
    if (this._accessDurationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessDurationSettings = this._accessDurationSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestSettingResourceRiskSettingsDefaultSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvalSequenceId = undefined;
      this._requestSubmissionType = undefined;
      this._accessDurationSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvalSequenceId = value.approvalSequenceId;
      this._requestSubmissionType = value.requestSubmissionType;
      this._accessDurationSettings.internalValue = value.accessDurationSettings;
    }
  }

  // approval_sequence_id - computed: false, optional: true, required: false
  private _approvalSequenceId?: string; 
  public get approvalSequenceId() {
    return this.getStringAttribute('approval_sequence_id');
  }
  public set approvalSequenceId(value: string) {
    this._approvalSequenceId = value;
  }
  public resetApprovalSequenceId() {
    this._approvalSequenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalSequenceIdInput() {
    return this._approvalSequenceId;
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getListAttribute('error');
  }

  // request_submission_type - computed: true, optional: true, required: false
  private _requestSubmissionType?: string; 
  public get requestSubmissionType() {
    return this.getStringAttribute('request_submission_type');
  }
  public set requestSubmissionType(value: string) {
    this._requestSubmissionType = value;
  }
  public resetRequestSubmissionType() {
    this._requestSubmissionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSubmissionTypeInput() {
    return this._requestSubmissionType;
  }

  // access_duration_settings - computed: false, optional: true, required: false
  private _accessDurationSettings = new RequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettingsOutputReference(this, "access_duration_settings");
  public get accessDurationSettings() {
    return this._accessDurationSettings;
  }
  public putAccessDurationSettings(value: RequestSettingResourceRiskSettingsDefaultSettingAccessDurationSettings) {
    this._accessDurationSettings.internalValue = value;
  }
  public resetAccessDurationSettings() {
    this._accessDurationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDurationSettingsInput() {
    return this._accessDurationSettings.internalValue;
  }
}
export interface RequestSettingResourceRiskSettings {
  /**
  * default_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#default_setting RequestSettingResource#default_setting}
  */
  readonly defaultSetting?: RequestSettingResourceRiskSettingsDefaultSetting;
}

export function requestSettingResourceRiskSettingsToTerraform(struct?: RequestSettingResourceRiskSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_setting: requestSettingResourceRiskSettingsDefaultSettingToTerraform(struct!.defaultSetting),
  }
}


export function requestSettingResourceRiskSettingsToHclTerraform(struct?: RequestSettingResourceRiskSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_setting: {
      value: requestSettingResourceRiskSettingsDefaultSettingToHclTerraform(struct!.defaultSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "RequestSettingResourceRiskSettingsDefaultSetting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestSettingResourceRiskSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RequestSettingResourceRiskSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSetting = this._defaultSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestSettingResourceRiskSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultSetting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultSetting.internalValue = value.defaultSetting;
    }
  }

  // default_setting - computed: false, optional: true, required: false
  private _defaultSetting = new RequestSettingResourceRiskSettingsDefaultSettingOutputReference(this, "default_setting");
  public get defaultSetting() {
    return this._defaultSetting;
  }
  public putDefaultSetting(value: RequestSettingResourceRiskSettingsDefaultSetting) {
    this._defaultSetting.internalValue = value;
  }
  public resetDefaultSetting() {
    this._defaultSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingInput() {
    return this._defaultSetting.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource okta_request_setting_resource}
*/
export class RequestSettingResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_request_setting_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RequestSettingResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RequestSettingResource to import
  * @param importFromId The id of the existing RequestSettingResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RequestSettingResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_request_setting_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/request_setting_resource okta_request_setting_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RequestSettingResourceConfig
  */
  public constructor(scope: Construct, id: string, config: RequestSettingResourceConfig) {
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
    this._riskSettings.internalValue = config.riskSettings;
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
  private _requestOnBehalfOfSettings = new RequestSettingResourceRequestOnBehalfOfSettingsOutputReference(this, "request_on_behalf_of_settings");
  public get requestOnBehalfOfSettings() {
    return this._requestOnBehalfOfSettings;
  }
  public putRequestOnBehalfOfSettings(value: RequestSettingResourceRequestOnBehalfOfSettings) {
    this._requestOnBehalfOfSettings.internalValue = value;
  }
  public resetRequestOnBehalfOfSettings() {
    this._requestOnBehalfOfSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestOnBehalfOfSettingsInput() {
    return this._requestOnBehalfOfSettings.internalValue;
  }

  // risk_settings - computed: false, optional: true, required: false
  private _riskSettings = new RequestSettingResourceRiskSettingsOutputReference(this, "risk_settings");
  public get riskSettings() {
    return this._riskSettings;
  }
  public putRiskSettings(value: RequestSettingResourceRiskSettings) {
    this._riskSettings.internalValue = value;
  }
  public resetRiskSettings() {
    this._riskSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskSettingsInput() {
    return this._riskSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      request_on_behalf_of_settings: requestSettingResourceRequestOnBehalfOfSettingsToTerraform(this._requestOnBehalfOfSettings.internalValue),
      risk_settings: requestSettingResourceRiskSettingsToTerraform(this._riskSettings.internalValue),
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
        value: requestSettingResourceRequestOnBehalfOfSettingsToHclTerraform(this._requestOnBehalfOfSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RequestSettingResourceRequestOnBehalfOfSettings",
      },
      risk_settings: {
        value: requestSettingResourceRiskSettingsToHclTerraform(this._riskSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RequestSettingResourceRiskSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
