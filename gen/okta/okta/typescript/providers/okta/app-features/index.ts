// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppFeaturesConfig extends cdktf.TerraformMetaArguments {
  /**
  * `app_id` used to specify the app ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#app_id AppFeatures#app_id}
  */
  readonly appId: string;
  /**
  * Description of the feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#description AppFeatures#description}
  */
  readonly description?: string;
  /**
  * Key name of the feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#name AppFeatures#name}
  */
  readonly name: string;
  /**
  * Setting status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#status AppFeatures#status}
  */
  readonly status?: string;
  /**
  * capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#capabilities AppFeatures#capabilities}
  */
  readonly capabilities?: AppFeaturesCapabilities;
}
export interface AppFeaturesCapabilitiesCreateLifecycleCreate {
  /**
  * Setting status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#status AppFeatures#status}
  */
  readonly status?: string;
}

export function appFeaturesCapabilitiesCreateLifecycleCreateToTerraform(struct?: AppFeaturesCapabilitiesCreateLifecycleCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function appFeaturesCapabilitiesCreateLifecycleCreateToHclTerraform(struct?: AppFeaturesCapabilitiesCreateLifecycleCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesCreateLifecycleCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesCreateLifecycleCreate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesCreateLifecycleCreate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AppFeaturesCapabilitiesCreate {
  /**
  * lifecycle_create block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#lifecycle_create AppFeatures#lifecycle_create}
  */
  readonly lifecycleCreate?: AppFeaturesCapabilitiesCreateLifecycleCreate;
}

export function appFeaturesCapabilitiesCreateToTerraform(struct?: AppFeaturesCapabilitiesCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_create: appFeaturesCapabilitiesCreateLifecycleCreateToTerraform(struct!.lifecycleCreate),
  }
}


export function appFeaturesCapabilitiesCreateToHclTerraform(struct?: AppFeaturesCapabilitiesCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_create: {
      value: appFeaturesCapabilitiesCreateLifecycleCreateToHclTerraform(struct!.lifecycleCreate),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesCreateLifecycleCreate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesCreate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleCreate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleCreate = this._lifecycleCreate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesCreate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifecycleCreate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifecycleCreate.internalValue = value.lifecycleCreate;
    }
  }

  // lifecycle_create - computed: false, optional: true, required: false
  private _lifecycleCreate = new AppFeaturesCapabilitiesCreateLifecycleCreateOutputReference(this, "lifecycle_create");
  public get lifecycleCreate() {
    return this._lifecycleCreate;
  }
  public putLifecycleCreate(value: AppFeaturesCapabilitiesCreateLifecycleCreate) {
    this._lifecycleCreate.internalValue = value;
  }
  public resetLifecycleCreate() {
    this._lifecycleCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleCreateInput() {
    return this._lifecycleCreate.internalValue;
  }
}
export interface AppFeaturesCapabilitiesImportRulesUserCreateAndMatch {
  /**
  * Allows user import upon partial matching. Partial matching occurs when the first and last names of an imported user match those of an existing Okta user, even if the username or email attributes don't match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#allow_partial_match AppFeatures#allow_partial_match}
  */
  readonly allowPartialMatch?: boolean | cdktf.IResolvable;
  /**
  * If set to true, imported new users are automatically activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#auto_activate_new_users AppFeatures#auto_activate_new_users}
  */
  readonly autoActivateNewUsers?: boolean | cdktf.IResolvable;
  /**
  * If set to true, exact-matched users are automatically confirmed on activation. If set to false, exact-matched users need to be confirmed manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#autoconfirm_exact_match AppFeatures#autoconfirm_exact_match}
  */
  readonly autoconfirmExactMatch?: boolean | cdktf.IResolvable;
  /**
  * If set to true, imported new users are automatically confirmed on activation. This doesn't apply to imported users that already exist in Okta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#autoconfirm_new_users AppFeatures#autoconfirm_new_users}
  */
  readonly autoconfirmNewUsers?: boolean | cdktf.IResolvable;
  /**
  * If set to true, partially matched users are automatically confirmed on activation. If set to false, partially matched users need to be confirmed manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#autoconfirm_partial_match AppFeatures#autoconfirm_partial_match}
  */
  readonly autoconfirmPartialMatch?: boolean | cdktf.IResolvable;
  /**
  * Determines the attribute to match users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#exact_match_criteria AppFeatures#exact_match_criteria}
  */
  readonly exactMatchCriteria?: string;
}

export function appFeaturesCapabilitiesImportRulesUserCreateAndMatchToTerraform(struct?: AppFeaturesCapabilitiesImportRulesUserCreateAndMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_partial_match: cdktf.booleanToTerraform(struct!.allowPartialMatch),
    auto_activate_new_users: cdktf.booleanToTerraform(struct!.autoActivateNewUsers),
    autoconfirm_exact_match: cdktf.booleanToTerraform(struct!.autoconfirmExactMatch),
    autoconfirm_new_users: cdktf.booleanToTerraform(struct!.autoconfirmNewUsers),
    autoconfirm_partial_match: cdktf.booleanToTerraform(struct!.autoconfirmPartialMatch),
    exact_match_criteria: cdktf.stringToTerraform(struct!.exactMatchCriteria),
  }
}


export function appFeaturesCapabilitiesImportRulesUserCreateAndMatchToHclTerraform(struct?: AppFeaturesCapabilitiesImportRulesUserCreateAndMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_partial_match: {
      value: cdktf.booleanToHclTerraform(struct!.allowPartialMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_activate_new_users: {
      value: cdktf.booleanToHclTerraform(struct!.autoActivateNewUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoconfirm_exact_match: {
      value: cdktf.booleanToHclTerraform(struct!.autoconfirmExactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoconfirm_new_users: {
      value: cdktf.booleanToHclTerraform(struct!.autoconfirmNewUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoconfirm_partial_match: {
      value: cdktf.booleanToHclTerraform(struct!.autoconfirmPartialMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.exactMatchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesImportRulesUserCreateAndMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesImportRulesUserCreateAndMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPartialMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPartialMatch = this._allowPartialMatch;
    }
    if (this._autoActivateNewUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoActivateNewUsers = this._autoActivateNewUsers;
    }
    if (this._autoconfirmExactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoconfirmExactMatch = this._autoconfirmExactMatch;
    }
    if (this._autoconfirmNewUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoconfirmNewUsers = this._autoconfirmNewUsers;
    }
    if (this._autoconfirmPartialMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoconfirmPartialMatch = this._autoconfirmPartialMatch;
    }
    if (this._exactMatchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatchCriteria = this._exactMatchCriteria;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesImportRulesUserCreateAndMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPartialMatch = undefined;
      this._autoActivateNewUsers = undefined;
      this._autoconfirmExactMatch = undefined;
      this._autoconfirmNewUsers = undefined;
      this._autoconfirmPartialMatch = undefined;
      this._exactMatchCriteria = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPartialMatch = value.allowPartialMatch;
      this._autoActivateNewUsers = value.autoActivateNewUsers;
      this._autoconfirmExactMatch = value.autoconfirmExactMatch;
      this._autoconfirmNewUsers = value.autoconfirmNewUsers;
      this._autoconfirmPartialMatch = value.autoconfirmPartialMatch;
      this._exactMatchCriteria = value.exactMatchCriteria;
    }
  }

  // allow_partial_match - computed: false, optional: true, required: false
  private _allowPartialMatch?: boolean | cdktf.IResolvable; 
  public get allowPartialMatch() {
    return this.getBooleanAttribute('allow_partial_match');
  }
  public set allowPartialMatch(value: boolean | cdktf.IResolvable) {
    this._allowPartialMatch = value;
  }
  public resetAllowPartialMatch() {
    this._allowPartialMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPartialMatchInput() {
    return this._allowPartialMatch;
  }

  // auto_activate_new_users - computed: false, optional: true, required: false
  private _autoActivateNewUsers?: boolean | cdktf.IResolvable; 
  public get autoActivateNewUsers() {
    return this.getBooleanAttribute('auto_activate_new_users');
  }
  public set autoActivateNewUsers(value: boolean | cdktf.IResolvable) {
    this._autoActivateNewUsers = value;
  }
  public resetAutoActivateNewUsers() {
    this._autoActivateNewUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoActivateNewUsersInput() {
    return this._autoActivateNewUsers;
  }

  // autoconfirm_exact_match - computed: false, optional: true, required: false
  private _autoconfirmExactMatch?: boolean | cdktf.IResolvable; 
  public get autoconfirmExactMatch() {
    return this.getBooleanAttribute('autoconfirm_exact_match');
  }
  public set autoconfirmExactMatch(value: boolean | cdktf.IResolvable) {
    this._autoconfirmExactMatch = value;
  }
  public resetAutoconfirmExactMatch() {
    this._autoconfirmExactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoconfirmExactMatchInput() {
    return this._autoconfirmExactMatch;
  }

  // autoconfirm_new_users - computed: false, optional: true, required: false
  private _autoconfirmNewUsers?: boolean | cdktf.IResolvable; 
  public get autoconfirmNewUsers() {
    return this.getBooleanAttribute('autoconfirm_new_users');
  }
  public set autoconfirmNewUsers(value: boolean | cdktf.IResolvable) {
    this._autoconfirmNewUsers = value;
  }
  public resetAutoconfirmNewUsers() {
    this._autoconfirmNewUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoconfirmNewUsersInput() {
    return this._autoconfirmNewUsers;
  }

  // autoconfirm_partial_match - computed: false, optional: true, required: false
  private _autoconfirmPartialMatch?: boolean | cdktf.IResolvable; 
  public get autoconfirmPartialMatch() {
    return this.getBooleanAttribute('autoconfirm_partial_match');
  }
  public set autoconfirmPartialMatch(value: boolean | cdktf.IResolvable) {
    this._autoconfirmPartialMatch = value;
  }
  public resetAutoconfirmPartialMatch() {
    this._autoconfirmPartialMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoconfirmPartialMatchInput() {
    return this._autoconfirmPartialMatch;
  }

  // exact_match_criteria - computed: false, optional: true, required: false
  private _exactMatchCriteria?: string; 
  public get exactMatchCriteria() {
    return this.getStringAttribute('exact_match_criteria');
  }
  public set exactMatchCriteria(value: string) {
    this._exactMatchCriteria = value;
  }
  public resetExactMatchCriteria() {
    this._exactMatchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchCriteriaInput() {
    return this._exactMatchCriteria;
  }
}
export interface AppFeaturesCapabilitiesImportRules {
  /**
  * user_create_and_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#user_create_and_match AppFeatures#user_create_and_match}
  */
  readonly userCreateAndMatch?: AppFeaturesCapabilitiesImportRulesUserCreateAndMatch;
}

export function appFeaturesCapabilitiesImportRulesToTerraform(struct?: AppFeaturesCapabilitiesImportRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_create_and_match: appFeaturesCapabilitiesImportRulesUserCreateAndMatchToTerraform(struct!.userCreateAndMatch),
  }
}


export function appFeaturesCapabilitiesImportRulesToHclTerraform(struct?: AppFeaturesCapabilitiesImportRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_create_and_match: {
      value: appFeaturesCapabilitiesImportRulesUserCreateAndMatchToHclTerraform(struct!.userCreateAndMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesImportRulesUserCreateAndMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesImportRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesImportRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userCreateAndMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCreateAndMatch = this._userCreateAndMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesImportRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userCreateAndMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userCreateAndMatch.internalValue = value.userCreateAndMatch;
    }
  }

  // user_create_and_match - computed: false, optional: true, required: false
  private _userCreateAndMatch = new AppFeaturesCapabilitiesImportRulesUserCreateAndMatchOutputReference(this, "user_create_and_match");
  public get userCreateAndMatch() {
    return this._userCreateAndMatch;
  }
  public putUserCreateAndMatch(value: AppFeaturesCapabilitiesImportRulesUserCreateAndMatch) {
    this._userCreateAndMatch.internalValue = value;
  }
  public resetUserCreateAndMatch() {
    this._userCreateAndMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCreateAndMatchInput() {
    return this._userCreateAndMatch.internalValue;
  }
}
export interface AppFeaturesCapabilitiesImportSettingsScheduleFullImport {
  /**
  * The import schedule in UNIX cron format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#expression AppFeatures#expression}
  */
  readonly expression?: string;
  /**
  * The import schedule time zone in Internet Assigned Numbers Authority (IANA) time zone name format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#timezone AppFeatures#timezone}
  */
  readonly timezone?: string;
}

export function appFeaturesCapabilitiesImportSettingsScheduleFullImportToTerraform(struct?: AppFeaturesCapabilitiesImportSettingsScheduleFullImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function appFeaturesCapabilitiesImportSettingsScheduleFullImportToHclTerraform(struct?: AppFeaturesCapabilitiesImportSettingsScheduleFullImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesImportSettingsScheduleFullImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesImportSettingsScheduleFullImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesImportSettingsScheduleFullImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._timezone = value.timezone;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface AppFeaturesCapabilitiesImportSettingsScheduleIncrementalImport {
  /**
  * The import schedule in UNIX cron format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#expression AppFeatures#expression}
  */
  readonly expression?: string;
  /**
  * The import schedule time zone in Internet Assigned Numbers Authority (IANA) time zone name format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#timezone AppFeatures#timezone}
  */
  readonly timezone?: string;
}

export function appFeaturesCapabilitiesImportSettingsScheduleIncrementalImportToTerraform(struct?: AppFeaturesCapabilitiesImportSettingsScheduleIncrementalImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function appFeaturesCapabilitiesImportSettingsScheduleIncrementalImportToHclTerraform(struct?: AppFeaturesCapabilitiesImportSettingsScheduleIncrementalImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesImportSettingsScheduleIncrementalImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesImportSettingsScheduleIncrementalImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesImportSettingsScheduleIncrementalImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._timezone = value.timezone;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface AppFeaturesCapabilitiesImportSettingsSchedule {
  /**
  * Setting status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#status AppFeatures#status}
  */
  readonly status?: string;
  /**
  * full_import block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#full_import AppFeatures#full_import}
  */
  readonly fullImport?: AppFeaturesCapabilitiesImportSettingsScheduleFullImport;
  /**
  * incremental_import block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#incremental_import AppFeatures#incremental_import}
  */
  readonly incrementalImport?: AppFeaturesCapabilitiesImportSettingsScheduleIncrementalImport;
}

export function appFeaturesCapabilitiesImportSettingsScheduleToTerraform(struct?: AppFeaturesCapabilitiesImportSettingsSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    full_import: appFeaturesCapabilitiesImportSettingsScheduleFullImportToTerraform(struct!.fullImport),
    incremental_import: appFeaturesCapabilitiesImportSettingsScheduleIncrementalImportToTerraform(struct!.incrementalImport),
  }
}


export function appFeaturesCapabilitiesImportSettingsScheduleToHclTerraform(struct?: AppFeaturesCapabilitiesImportSettingsSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_import: {
      value: appFeaturesCapabilitiesImportSettingsScheduleFullImportToHclTerraform(struct!.fullImport),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesImportSettingsScheduleFullImport",
    },
    incremental_import: {
      value: appFeaturesCapabilitiesImportSettingsScheduleIncrementalImportToHclTerraform(struct!.incrementalImport),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesImportSettingsScheduleIncrementalImport",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesImportSettingsScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesImportSettingsSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._fullImport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullImport = this._fullImport?.internalValue;
    }
    if (this._incrementalImport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementalImport = this._incrementalImport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesImportSettingsSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._fullImport.internalValue = undefined;
      this._incrementalImport.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._fullImport.internalValue = value.fullImport;
      this._incrementalImport.internalValue = value.incrementalImport;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // full_import - computed: false, optional: true, required: false
  private _fullImport = new AppFeaturesCapabilitiesImportSettingsScheduleFullImportOutputReference(this, "full_import");
  public get fullImport() {
    return this._fullImport;
  }
  public putFullImport(value: AppFeaturesCapabilitiesImportSettingsScheduleFullImport) {
    this._fullImport.internalValue = value;
  }
  public resetFullImport() {
    this._fullImport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullImportInput() {
    return this._fullImport.internalValue;
  }

  // incremental_import - computed: false, optional: true, required: false
  private _incrementalImport = new AppFeaturesCapabilitiesImportSettingsScheduleIncrementalImportOutputReference(this, "incremental_import");
  public get incrementalImport() {
    return this._incrementalImport;
  }
  public putIncrementalImport(value: AppFeaturesCapabilitiesImportSettingsScheduleIncrementalImport) {
    this._incrementalImport.internalValue = value;
  }
  public resetIncrementalImport() {
    this._incrementalImport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalImportInput() {
    return this._incrementalImport.internalValue;
  }
}
export interface AppFeaturesCapabilitiesImportSettingsUsername {
  /**
  * For usernameFormat=CUSTOM, specifies the Okta Expression Language statement for a username format that imported users use to sign in to Okta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#username_expression AppFeatures#username_expression}
  */
  readonly usernameExpression?: string;
  /**
  * Determines the username format when users sign in to Okta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#username_format AppFeatures#username_format}
  */
  readonly usernameFormat?: string;
}

export function appFeaturesCapabilitiesImportSettingsUsernameToTerraform(struct?: AppFeaturesCapabilitiesImportSettingsUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username_expression: cdktf.stringToTerraform(struct!.usernameExpression),
    username_format: cdktf.stringToTerraform(struct!.usernameFormat),
  }
}


export function appFeaturesCapabilitiesImportSettingsUsernameToHclTerraform(struct?: AppFeaturesCapabilitiesImportSettingsUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username_expression: {
      value: cdktf.stringToHclTerraform(struct!.usernameExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_format: {
      value: cdktf.stringToHclTerraform(struct!.usernameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesImportSettingsUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesImportSettingsUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usernameExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameExpression = this._usernameExpression;
    }
    if (this._usernameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameFormat = this._usernameFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesImportSettingsUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._usernameExpression = undefined;
      this._usernameFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._usernameExpression = value.usernameExpression;
      this._usernameFormat = value.usernameFormat;
    }
  }

  // username_expression - computed: false, optional: true, required: false
  private _usernameExpression?: string; 
  public get usernameExpression() {
    return this.getStringAttribute('username_expression');
  }
  public set usernameExpression(value: string) {
    this._usernameExpression = value;
  }
  public resetUsernameExpression() {
    this._usernameExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameExpressionInput() {
    return this._usernameExpression;
  }

  // username_format - computed: false, optional: true, required: false
  private _usernameFormat?: string; 
  public get usernameFormat() {
    return this.getStringAttribute('username_format');
  }
  public set usernameFormat(value: string) {
    this._usernameFormat = value;
  }
  public resetUsernameFormat() {
    this._usernameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFormatInput() {
    return this._usernameFormat;
  }
}
export interface AppFeaturesCapabilitiesImportSettings {
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#schedule AppFeatures#schedule}
  */
  readonly schedule?: AppFeaturesCapabilitiesImportSettingsSchedule;
  /**
  * username block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#username AppFeatures#username}
  */
  readonly username?: AppFeaturesCapabilitiesImportSettingsUsername;
}

export function appFeaturesCapabilitiesImportSettingsToTerraform(struct?: AppFeaturesCapabilitiesImportSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: appFeaturesCapabilitiesImportSettingsScheduleToTerraform(struct!.schedule),
    username: appFeaturesCapabilitiesImportSettingsUsernameToTerraform(struct!.username),
  }
}


export function appFeaturesCapabilitiesImportSettingsToHclTerraform(struct?: AppFeaturesCapabilitiesImportSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: appFeaturesCapabilitiesImportSettingsScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesImportSettingsSchedule",
    },
    username: {
      value: appFeaturesCapabilitiesImportSettingsUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesImportSettingsUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesImportSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesImportSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesImportSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schedule.internalValue = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schedule.internalValue = value.schedule;
      this._username.internalValue = value.username;
    }
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new AppFeaturesCapabilitiesImportSettingsScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AppFeaturesCapabilitiesImportSettingsSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username = new AppFeaturesCapabilitiesImportSettingsUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: AppFeaturesCapabilitiesImportSettingsUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface AppFeaturesCapabilitiesUpdateLifecycleDeactivate {
  /**
  * Setting status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#status AppFeatures#status}
  */
  readonly status?: string;
}

export function appFeaturesCapabilitiesUpdateLifecycleDeactivateToTerraform(struct?: AppFeaturesCapabilitiesUpdateLifecycleDeactivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function appFeaturesCapabilitiesUpdateLifecycleDeactivateToHclTerraform(struct?: AppFeaturesCapabilitiesUpdateLifecycleDeactivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesUpdateLifecycleDeactivateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesUpdateLifecycleDeactivate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesUpdateLifecycleDeactivate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AppFeaturesCapabilitiesUpdatePassword {
  /**
  * Determines whether a change in a user's password also updates the user's password in the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#change AppFeatures#change}
  */
  readonly change?: string;
  /**
  * Determines whether the generated password is the user's Okta password or a randomly generated password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#seed AppFeatures#seed}
  */
  readonly seed?: string;
  /**
  * Setting status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#status AppFeatures#status}
  */
  readonly status?: string;
}

export function appFeaturesCapabilitiesUpdatePasswordToTerraform(struct?: AppFeaturesCapabilitiesUpdatePassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change: cdktf.stringToTerraform(struct!.change),
    seed: cdktf.stringToTerraform(struct!.seed),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function appFeaturesCapabilitiesUpdatePasswordToHclTerraform(struct?: AppFeaturesCapabilitiesUpdatePassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change: {
      value: cdktf.stringToHclTerraform(struct!.change),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seed: {
      value: cdktf.stringToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesUpdatePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesUpdatePassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._change !== undefined) {
      hasAnyValues = true;
      internalValueResult.change = this._change;
    }
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesUpdatePassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._change = undefined;
      this._seed = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._change = value.change;
      this._seed = value.seed;
      this._status = value.status;
    }
  }

  // change - computed: false, optional: true, required: false
  private _change?: string; 
  public get change() {
    return this.getStringAttribute('change');
  }
  public set change(value: string) {
    this._change = value;
  }
  public resetChange() {
    this._change = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeInput() {
    return this._change;
  }

  // seed - computed: false, optional: true, required: false
  private _seed?: string; 
  public get seed() {
    return this.getStringAttribute('seed');
  }
  public set seed(value: string) {
    this._seed = value;
  }
  public resetSeed() {
    this._seed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AppFeaturesCapabilitiesUpdateProfile {
  /**
  * Setting status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#status AppFeatures#status}
  */
  readonly status?: string;
}

export function appFeaturesCapabilitiesUpdateProfileToTerraform(struct?: AppFeaturesCapabilitiesUpdateProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function appFeaturesCapabilitiesUpdateProfileToHclTerraform(struct?: AppFeaturesCapabilitiesUpdateProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesUpdateProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesUpdateProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesUpdateProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AppFeaturesCapabilitiesUpdate {
  /**
  * lifecycle_deactivate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#lifecycle_deactivate AppFeatures#lifecycle_deactivate}
  */
  readonly lifecycleDeactivate?: AppFeaturesCapabilitiesUpdateLifecycleDeactivate;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#password AppFeatures#password}
  */
  readonly password?: AppFeaturesCapabilitiesUpdatePassword;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#profile AppFeatures#profile}
  */
  readonly profile?: AppFeaturesCapabilitiesUpdateProfile;
}

export function appFeaturesCapabilitiesUpdateToTerraform(struct?: AppFeaturesCapabilitiesUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_deactivate: appFeaturesCapabilitiesUpdateLifecycleDeactivateToTerraform(struct!.lifecycleDeactivate),
    password: appFeaturesCapabilitiesUpdatePasswordToTerraform(struct!.password),
    profile: appFeaturesCapabilitiesUpdateProfileToTerraform(struct!.profile),
  }
}


export function appFeaturesCapabilitiesUpdateToHclTerraform(struct?: AppFeaturesCapabilitiesUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_deactivate: {
      value: appFeaturesCapabilitiesUpdateLifecycleDeactivateToHclTerraform(struct!.lifecycleDeactivate),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesUpdateLifecycleDeactivate",
    },
    password: {
      value: appFeaturesCapabilitiesUpdatePasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesUpdatePassword",
    },
    profile: {
      value: appFeaturesCapabilitiesUpdateProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesUpdateProfile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilitiesUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleDeactivate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleDeactivate = this._lifecycleDeactivate?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilitiesUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifecycleDeactivate.internalValue = undefined;
      this._password.internalValue = undefined;
      this._profile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifecycleDeactivate.internalValue = value.lifecycleDeactivate;
      this._password.internalValue = value.password;
      this._profile.internalValue = value.profile;
    }
  }

  // lifecycle_deactivate - computed: false, optional: true, required: false
  private _lifecycleDeactivate = new AppFeaturesCapabilitiesUpdateLifecycleDeactivateOutputReference(this, "lifecycle_deactivate");
  public get lifecycleDeactivate() {
    return this._lifecycleDeactivate;
  }
  public putLifecycleDeactivate(value: AppFeaturesCapabilitiesUpdateLifecycleDeactivate) {
    this._lifecycleDeactivate.internalValue = value;
  }
  public resetLifecycleDeactivate() {
    this._lifecycleDeactivate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleDeactivateInput() {
    return this._lifecycleDeactivate.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new AppFeaturesCapabilitiesUpdatePasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: AppFeaturesCapabilitiesUpdatePassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new AppFeaturesCapabilitiesUpdateProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: AppFeaturesCapabilitiesUpdateProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }
}
export interface AppFeaturesCapabilities {
  /**
  * create block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#create AppFeatures#create}
  */
  readonly create?: AppFeaturesCapabilitiesCreate;
  /**
  * import_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#import_rules AppFeatures#import_rules}
  */
  readonly importRules?: AppFeaturesCapabilitiesImportRules;
  /**
  * import_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#import_settings AppFeatures#import_settings}
  */
  readonly importSettings?: AppFeaturesCapabilitiesImportSettings;
  /**
  * update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#update AppFeatures#update}
  */
  readonly update?: AppFeaturesCapabilitiesUpdate;
}

export function appFeaturesCapabilitiesToTerraform(struct?: AppFeaturesCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: appFeaturesCapabilitiesCreateToTerraform(struct!.create),
    import_rules: appFeaturesCapabilitiesImportRulesToTerraform(struct!.importRules),
    import_settings: appFeaturesCapabilitiesImportSettingsToTerraform(struct!.importSettings),
    update: appFeaturesCapabilitiesUpdateToTerraform(struct!.update),
  }
}


export function appFeaturesCapabilitiesToHclTerraform(struct?: AppFeaturesCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: appFeaturesCapabilitiesCreateToHclTerraform(struct!.create),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesCreate",
    },
    import_rules: {
      value: appFeaturesCapabilitiesImportRulesToHclTerraform(struct!.importRules),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesImportRules",
    },
    import_settings: {
      value: appFeaturesCapabilitiesImportSettingsToHclTerraform(struct!.importSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesImportSettings",
    },
    update: {
      value: appFeaturesCapabilitiesUpdateToHclTerraform(struct!.update),
      isBlock: true,
      type: "struct",
      storageClassType: "AppFeaturesCapabilitiesUpdate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFeaturesCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppFeaturesCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create?.internalValue;
    }
    if (this._importRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importRules = this._importRules?.internalValue;
    }
    if (this._importSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importSettings = this._importSettings?.internalValue;
    }
    if (this._update?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFeaturesCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create.internalValue = undefined;
      this._importRules.internalValue = undefined;
      this._importSettings.internalValue = undefined;
      this._update.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create.internalValue = value.create;
      this._importRules.internalValue = value.importRules;
      this._importSettings.internalValue = value.importSettings;
      this._update.internalValue = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create = new AppFeaturesCapabilitiesCreateOutputReference(this, "create");
  public get create() {
    return this._create;
  }
  public putCreate(value: AppFeaturesCapabilitiesCreate) {
    this._create.internalValue = value;
  }
  public resetCreate() {
    this._create.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create.internalValue;
  }

  // import_rules - computed: false, optional: true, required: false
  private _importRules = new AppFeaturesCapabilitiesImportRulesOutputReference(this, "import_rules");
  public get importRules() {
    return this._importRules;
  }
  public putImportRules(value: AppFeaturesCapabilitiesImportRules) {
    this._importRules.internalValue = value;
  }
  public resetImportRules() {
    this._importRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRulesInput() {
    return this._importRules.internalValue;
  }

  // import_settings - computed: false, optional: true, required: false
  private _importSettings = new AppFeaturesCapabilitiesImportSettingsOutputReference(this, "import_settings");
  public get importSettings() {
    return this._importSettings;
  }
  public putImportSettings(value: AppFeaturesCapabilitiesImportSettings) {
    this._importSettings.internalValue = value;
  }
  public resetImportSettings() {
    this._importSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importSettingsInput() {
    return this._importSettings.internalValue;
  }

  // update - computed: false, optional: true, required: false
  private _update = new AppFeaturesCapabilitiesUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
  }
  public putUpdate(value: AppFeaturesCapabilitiesUpdate) {
    this._update.internalValue = value;
  }
  public resetUpdate() {
    this._update.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features okta_app_features}
*/
export class AppFeatures extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_features";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppFeatures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppFeatures to import
  * @param importFromId The id of the existing AppFeatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppFeatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_app_features", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_features okta_app_features} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppFeaturesConfig
  */
  public constructor(scope: Construct, id: string, config: AppFeaturesConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_features',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._description = config.description;
    this._name = config.name;
    this._status = config.status;
    this._capabilities.internalValue = config.capabilities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new AppFeaturesCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: AppFeaturesCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      capabilities: appFeaturesCapabilitiesToTerraform(this._capabilities.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capabilities: {
        value: appFeaturesCapabilitiesToHclTerraform(this._capabilities.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppFeaturesCapabilities",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
