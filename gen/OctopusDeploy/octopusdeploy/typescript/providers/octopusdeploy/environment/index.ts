// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#allow_dynamic_infrastructure Environment#allow_dynamic_infrastructure}
  */
  readonly allowDynamicInfrastructure?: boolean | cdktf.IResolvable;
  /**
  * The description of this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#description Environment#description}
  */
  readonly description?: string;
  /**
  * A list of environment tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#environment_tags Environment#environment_tags}
  */
  readonly environmentTags?: string[];
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * The unique slug of this environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#slug Environment#slug}
  */
  readonly slug?: string;
  /**
  * The order number to sort an environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#sort_order Environment#sort_order}
  */
  readonly sortOrder?: number;
  /**
  * The space ID associated with this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#space_id Environment#space_id}
  */
  readonly spaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#use_guided_failure Environment#use_guided_failure}
  */
  readonly useGuidedFailure?: boolean | cdktf.IResolvable;
  /**
  * jira_extension_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#jira_extension_settings Environment#jira_extension_settings}
  */
  readonly jiraExtensionSettings?: EnvironmentJiraExtensionSettings[] | cdktf.IResolvable;
  /**
  * jira_service_management_extension_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#jira_service_management_extension_settings Environment#jira_service_management_extension_settings}
  */
  readonly jiraServiceManagementExtensionSettings?: EnvironmentJiraServiceManagementExtensionSettings[] | cdktf.IResolvable;
  /**
  * servicenow_extension_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#servicenow_extension_settings Environment#servicenow_extension_settings}
  */
  readonly servicenowExtensionSettings?: EnvironmentServicenowExtensionSettings[] | cdktf.IResolvable;
}
export interface EnvironmentJiraExtensionSettings {
  /**
  * The Jira environment type of this Octopus deployment environment. Valid values are `"development"`, `"production"`, `"staging"`, `"testing"`, `"unmapped"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#environment_type Environment#environment_type}
  */
  readonly environmentType?: string;
}

export function environmentJiraExtensionSettingsToTerraform(struct?: EnvironmentJiraExtensionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_type: cdktf.stringToTerraform(struct!.environmentType),
  }
}


export function environmentJiraExtensionSettingsToHclTerraform(struct?: EnvironmentJiraExtensionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_type: {
      value: cdktf.stringToHclTerraform(struct!.environmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentJiraExtensionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentJiraExtensionSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentType = this._environmentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentJiraExtensionSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentType = value.environmentType;
    }
  }

  // environment_type - computed: false, optional: true, required: false
  private _environmentType?: string; 
  public get environmentType() {
    return this.getStringAttribute('environment_type');
  }
  public set environmentType(value: string) {
    this._environmentType = value;
  }
  public resetEnvironmentType() {
    this._environmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentTypeInput() {
    return this._environmentType;
  }
}

export class EnvironmentJiraExtensionSettingsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentJiraExtensionSettings[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentJiraExtensionSettingsOutputReference {
    return new EnvironmentJiraExtensionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentJiraServiceManagementExtensionSettings {
  /**
  * Specifies whether or not this extension is enabled for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#is_enabled Environment#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function environmentJiraServiceManagementExtensionSettingsToTerraform(struct?: EnvironmentJiraServiceManagementExtensionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function environmentJiraServiceManagementExtensionSettingsToHclTerraform(struct?: EnvironmentJiraServiceManagementExtensionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentJiraServiceManagementExtensionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentJiraServiceManagementExtensionSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentJiraServiceManagementExtensionSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}

export class EnvironmentJiraServiceManagementExtensionSettingsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentJiraServiceManagementExtensionSettings[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentJiraServiceManagementExtensionSettingsOutputReference {
    return new EnvironmentJiraServiceManagementExtensionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentServicenowExtensionSettings {
  /**
  * Specifies whether or not this extension is enabled for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#is_enabled Environment#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function environmentServicenowExtensionSettingsToTerraform(struct?: EnvironmentServicenowExtensionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function environmentServicenowExtensionSettingsToHclTerraform(struct?: EnvironmentServicenowExtensionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentServicenowExtensionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentServicenowExtensionSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentServicenowExtensionSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}

export class EnvironmentServicenowExtensionSettingsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentServicenowExtensionSettings[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentServicenowExtensionSettingsOutputReference {
    return new EnvironmentServicenowExtensionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment octopusdeploy_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/environment octopusdeploy_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_environment',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDynamicInfrastructure = config.allowDynamicInfrastructure;
    this._description = config.description;
    this._environmentTags = config.environmentTags;
    this._name = config.name;
    this._slug = config.slug;
    this._sortOrder = config.sortOrder;
    this._spaceId = config.spaceId;
    this._useGuidedFailure = config.useGuidedFailure;
    this._jiraExtensionSettings.internalValue = config.jiraExtensionSettings;
    this._jiraServiceManagementExtensionSettings.internalValue = config.jiraServiceManagementExtensionSettings;
    this._servicenowExtensionSettings.internalValue = config.servicenowExtensionSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_dynamic_infrastructure - computed: true, optional: true, required: false
  private _allowDynamicInfrastructure?: boolean | cdktf.IResolvable; 
  public get allowDynamicInfrastructure() {
    return this.getBooleanAttribute('allow_dynamic_infrastructure');
  }
  public set allowDynamicInfrastructure(value: boolean | cdktf.IResolvable) {
    this._allowDynamicInfrastructure = value;
  }
  public resetAllowDynamicInfrastructure() {
    this._allowDynamicInfrastructure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDynamicInfrastructureInput() {
    return this._allowDynamicInfrastructure;
  }

  // description - computed: true, optional: true, required: false
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

  // environment_tags - computed: true, optional: true, required: false
  private _environmentTags?: string[]; 
  public get environmentTags() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_tags'));
  }
  public set environmentTags(value: string[]) {
    this._environmentTags = value;
  }
  public resetEnvironmentTags() {
    this._environmentTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentTagsInput() {
    return this._environmentTags;
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

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // sort_order - computed: true, optional: true, required: false
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // use_guided_failure - computed: true, optional: true, required: false
  private _useGuidedFailure?: boolean | cdktf.IResolvable; 
  public get useGuidedFailure() {
    return this.getBooleanAttribute('use_guided_failure');
  }
  public set useGuidedFailure(value: boolean | cdktf.IResolvable) {
    this._useGuidedFailure = value;
  }
  public resetUseGuidedFailure() {
    this._useGuidedFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGuidedFailureInput() {
    return this._useGuidedFailure;
  }

  // jira_extension_settings - computed: false, optional: true, required: false
  private _jiraExtensionSettings = new EnvironmentJiraExtensionSettingsList(this, "jira_extension_settings", false);
  public get jiraExtensionSettings() {
    return this._jiraExtensionSettings;
  }
  public putJiraExtensionSettings(value: EnvironmentJiraExtensionSettings[] | cdktf.IResolvable) {
    this._jiraExtensionSettings.internalValue = value;
  }
  public resetJiraExtensionSettings() {
    this._jiraExtensionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraExtensionSettingsInput() {
    return this._jiraExtensionSettings.internalValue;
  }

  // jira_service_management_extension_settings - computed: false, optional: true, required: false
  private _jiraServiceManagementExtensionSettings = new EnvironmentJiraServiceManagementExtensionSettingsList(this, "jira_service_management_extension_settings", false);
  public get jiraServiceManagementExtensionSettings() {
    return this._jiraServiceManagementExtensionSettings;
  }
  public putJiraServiceManagementExtensionSettings(value: EnvironmentJiraServiceManagementExtensionSettings[] | cdktf.IResolvable) {
    this._jiraServiceManagementExtensionSettings.internalValue = value;
  }
  public resetJiraServiceManagementExtensionSettings() {
    this._jiraServiceManagementExtensionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraServiceManagementExtensionSettingsInput() {
    return this._jiraServiceManagementExtensionSettings.internalValue;
  }

  // servicenow_extension_settings - computed: false, optional: true, required: false
  private _servicenowExtensionSettings = new EnvironmentServicenowExtensionSettingsList(this, "servicenow_extension_settings", false);
  public get servicenowExtensionSettings() {
    return this._servicenowExtensionSettings;
  }
  public putServicenowExtensionSettings(value: EnvironmentServicenowExtensionSettings[] | cdktf.IResolvable) {
    this._servicenowExtensionSettings.internalValue = value;
  }
  public resetServicenowExtensionSettings() {
    this._servicenowExtensionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowExtensionSettingsInput() {
    return this._servicenowExtensionSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_dynamic_infrastructure: cdktf.booleanToTerraform(this._allowDynamicInfrastructure),
      description: cdktf.stringToTerraform(this._description),
      environment_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentTags),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
      sort_order: cdktf.numberToTerraform(this._sortOrder),
      space_id: cdktf.stringToTerraform(this._spaceId),
      use_guided_failure: cdktf.booleanToTerraform(this._useGuidedFailure),
      jira_extension_settings: cdktf.listMapper(environmentJiraExtensionSettingsToTerraform, true)(this._jiraExtensionSettings.internalValue),
      jira_service_management_extension_settings: cdktf.listMapper(environmentJiraServiceManagementExtensionSettingsToTerraform, true)(this._jiraServiceManagementExtensionSettings.internalValue),
      servicenow_extension_settings: cdktf.listMapper(environmentServicenowExtensionSettingsToTerraform, true)(this._servicenowExtensionSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_dynamic_infrastructure: {
        value: cdktf.booleanToHclTerraform(this._allowDynamicInfrastructure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.numberToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_guided_failure: {
        value: cdktf.booleanToHclTerraform(this._useGuidedFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jira_extension_settings: {
        value: cdktf.listMapperHcl(environmentJiraExtensionSettingsToHclTerraform, true)(this._jiraExtensionSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentJiraExtensionSettingsList",
      },
      jira_service_management_extension_settings: {
        value: cdktf.listMapperHcl(environmentJiraServiceManagementExtensionSettingsToHclTerraform, true)(this._jiraServiceManagementExtensionSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentJiraServiceManagementExtensionSettingsList",
      },
      servicenow_extension_settings: {
        value: cdktf.listMapperHcl(environmentServicenowExtensionSettingsToHclTerraform, true)(this._servicenowExtensionSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentServicenowExtensionSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
