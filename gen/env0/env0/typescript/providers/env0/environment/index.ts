// https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * should deployments require manual approvals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#approve_plan_automatically Environment#approve_plan_automatically}
  */
  readonly approvePlanAutomatically?: boolean | cdktf.IResolvable;
  /**
  * redeploy on file filter pattern.
  * When used 'auto_deploy_on_path_changes_only' must be configured to true and 'deploy_on_push' or 'run_plan_on_pull_requests' must be configured to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#auto_deploy_by_custom_glob Environment#auto_deploy_by_custom_glob}
  */
  readonly autoDeployByCustomGlob?: string;
  /**
  * redeploy only on path changes only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#auto_deploy_on_path_changes_only Environment#auto_deploy_on_path_changes_only}
  */
  readonly autoDeployOnPathChangesOnly?: boolean | cdktf.IResolvable;
  /**
  * should run terraform deploy on push events.
  * If true must specify one of the following - 'github_installation_id' if using GitHub, 'gitlab_project_id' and 'token_id' if using GitLab, or 'bitbucket_client_key' if using BitBucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#deploy_on_push Environment#deploy_on_push}
  */
  readonly deployOnPush?: boolean | cdktf.IResolvable;
  /**
  * cron expression for scheduled drift detection of the environment (cannot be used with resource_drift_detection resource)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#drift_detection_cron Environment#drift_detection_cron}
  */
  readonly driftDetectionCron?: string;
  /**
  * Destroy safeguard. Must be enabled before delete/destroy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#force_destroy Environment#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * the environment's id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#id Environment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If 'true', it marks the environment as inactive. It can be re-activated by setting it to 'false' or removing this field. Note: it's not allowed to create an inactive environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_inactive Environment#is_inactive}
  */
  readonly isInactive?: boolean | cdktf.IResolvable;
  /**
  * enables remote apply when set to true (defaults to false). Can only be enabled when is_remote_backend and approve_plan_automatically are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_remote_apply_enabled Environment#is_remote_apply_enabled}
  */
  readonly isRemoteApplyEnabled?: boolean | cdktf.IResolvable;
  /**
  * should use remote backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_remote_backend Environment#is_remote_backend}
  */
  readonly isRemoteBackend?: boolean | cdktf.IResolvable;
  /**
  * kubernetes (or helm) namespace to be used. If modified deletes current environment and creates a new one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#k8s_namespace Environment#k8s_namespace}
  */
  readonly k8SNamespace?: string;
  /**
  * the environment's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * the deployment log output. Returns a json string. It can be either a map of key-value, or an array of (in case of Terragrunt run-all) of moduleName and a map of key-value. Note: if the deployment is still in progress returns 'null'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#output Environment#output}
  */
  readonly output?: string;
  /**
  * use this flag to prevent auto deploy on environment creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#prevent_auto_deploy Environment#prevent_auto_deploy}
  */
  readonly preventAutoDeploy?: boolean | cdktf.IResolvable;
  /**
  * project id of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#project_id Environment#project_id}
  */
  readonly projectId: string;
  /**
  * by default when removing an environment, it gets destroyed. Setting this value to 'mark_as_archived' will force the environment to be archived instead of tying to destroy it ('Mark as inactive' in the UI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#removal_strategy Environment#removal_strategy}
  */
  readonly removalStrategy?: string;
  /**
  * the revision the environment is to be run against. Please note that changing this attribute will require environment redeploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#revision Environment#revision}
  */
  readonly revision?: string;
  /**
  * should run terraform plan on pull requests creations.
  * If true must specify one of the following - 'github_installation_id' if using GitHub, 'gitlab_project_id' and 'token_id' if using GitLab, or 'bitbucket_client_key' if using BitBucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#run_plan_on_pull_requests Environment#run_plan_on_pull_requests}
  */
  readonly runPlanOnPullRequests?: boolean | cdktf.IResolvable;
  /**
  * the template id the environment is to be created from.
  * Important note: the template must first be assigned to the same project as the environment (project_id). Use 'env0_template_project_assignment' to assign the template to the project. In addition, be sure to leverage 'depends_on' if applicable. Please note that changing this attribute will require environment redeploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#template_id Environment#template_id}
  */
  readonly templateId?: string;
  /**
  * The working directory path to be used by a Terragrunt template. If left empty '/' is used. Note: modifying this field destroys the current environment and creates a new one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#terragrunt_working_directory Environment#terragrunt_working_directory}
  */
  readonly terragruntWorkingDirectory?: string;
  /**
  * the date the environment should be destroyed at (iso format). omitting this attribute will result in infinite ttl.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#ttl Environment#ttl}
  */
  readonly ttl?: string;
  /**
  * a list of IDs of variable sets to assign to this environment. Note: must not be used with 'env0_variable_set_assignment'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#variable_sets Environment#variable_sets}
  */
  readonly variableSets?: string[];
  /**
  * set an alias for this environment in favor of running VCS commands using PR comments against it. Additional details: https://docs.env0.com/docs/plan-and-apply-from-pr-comments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#vcs_commands_alias Environment#vcs_commands_alias}
  */
  readonly vcsCommandsAlias?: string;
  /**
  * set to 'true' to enable running VCS PR plan/apply commands using PR comments. This can be set to 'true' (enabled) without setting alias in 'vcs_commands_alias'. Additional details: https://docs.env0.com/docs/plan-and-apply-from-pr-comments#configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#vcs_pr_comments_enabled Environment#vcs_pr_comments_enabled}
  */
  readonly vcsPrCommentsEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Important note: this option is experimental, please report any issues found). During destroy, waits for the environment status to be 'INACTIVE'. Times out after 30 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#wait_for_destroy Environment#wait_for_destroy}
  */
  readonly waitForDestroy?: boolean | cdktf.IResolvable;
  /**
  * the terraform workspace name of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#workspace Environment#workspace}
  */
  readonly workspace?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#configuration Environment#configuration}
  */
  readonly configuration?: EnvironmentConfiguration[] | cdktf.IResolvable;
  /**
  * sub_environment_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#sub_environment_configuration Environment#sub_environment_configuration}
  */
  readonly subEnvironmentConfiguration?: EnvironmentSubEnvironmentConfiguration[] | cdktf.IResolvable;
  /**
  * without_template_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#without_template_settings Environment#without_template_settings}
  */
  readonly withoutTemplateSettings?: EnvironmentWithoutTemplateSettings;
}
export interface EnvironmentConfiguration {
  /**
  * description for the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#description Environment#description}
  */
  readonly description?: string;
  /**
  * is the variable read only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_read_only Environment#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * is the variable required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_required Environment#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * should the variable value be hidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_sensitive Environment#is_sensitive}
  */
  readonly isSensitive?: boolean | cdktf.IResolvable;
  /**
  * variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * the value of this variable must match provided regular expression (enforced only in env0 UI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#regex Environment#regex}
  */
  readonly regex?: string;
  /**
  * a list of possible variable values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#schema_enum Environment#schema_enum}
  */
  readonly schemaEnum?: string[];
  /**
  * the variable format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#schema_format Environment#schema_format}
  */
  readonly schemaFormat?: string;
  /**
  * the type the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#schema_type Environment#schema_type}
  */
  readonly schemaType?: string;
  /**
  * variable type (allowed values are: terraform, environment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#type Environment#type}
  */
  readonly type?: string;
  /**
  * variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#value Environment#value}
  */
  readonly value: string;
}

export function environmentConfigurationToTerraform(struct?: EnvironmentConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    is_read_only: cdktf.booleanToTerraform(struct!.isReadOnly),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    is_sensitive: cdktf.booleanToTerraform(struct!.isSensitive),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
    schema_enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.schemaEnum),
    schema_format: cdktf.stringToTerraform(struct!.schemaFormat),
    schema_type: cdktf.stringToTerraform(struct!.schemaType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function environmentConfigurationToHclTerraform(struct?: EnvironmentConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.isReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.isSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.schemaEnum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schema_format: {
      value: cdktf.stringToHclTerraform(struct!.schemaFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_type: {
      value: cdktf.stringToHclTerraform(struct!.schemaType),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReadOnly = this._isReadOnly;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._isSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSensitive = this._isSensitive;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._schemaEnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaEnum = this._schemaEnum;
    }
    if (this._schemaFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaFormat = this._schemaFormat;
    }
    if (this._schemaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaType = this._schemaType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._isReadOnly = undefined;
      this._isRequired = undefined;
      this._isSensitive = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._schemaEnum = undefined;
      this._schemaFormat = undefined;
      this._schemaType = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._isReadOnly = value.isReadOnly;
      this._isRequired = value.isRequired;
      this._isSensitive = value.isSensitive;
      this._name = value.name;
      this._regex = value.regex;
      this._schemaEnum = value.schemaEnum;
      this._schemaFormat = value.schemaFormat;
      this._schemaType = value.schemaType;
      this._type = value.type;
      this._value = value.value;
    }
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

  // is_read_only - computed: false, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // is_required - computed: false, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: boolean | cdktf.IResolvable; 
  public get isSensitive() {
    return this.getBooleanAttribute('is_sensitive');
  }
  public set isSensitive(value: boolean | cdktf.IResolvable) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // schema_enum - computed: false, optional: true, required: false
  private _schemaEnum?: string[]; 
  public get schemaEnum() {
    return this.getListAttribute('schema_enum');
  }
  public set schemaEnum(value: string[]) {
    this._schemaEnum = value;
  }
  public resetSchemaEnum() {
    this._schemaEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaEnumInput() {
    return this._schemaEnum;
  }

  // schema_format - computed: false, optional: true, required: false
  private _schemaFormat?: string; 
  public get schemaFormat() {
    return this.getStringAttribute('schema_format');
  }
  public set schemaFormat(value: string) {
    this._schemaFormat = value;
  }
  public resetSchemaFormat() {
    this._schemaFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaFormatInput() {
    return this._schemaFormat;
  }

  // schema_type - computed: false, optional: true, required: false
  private _schemaType?: string; 
  public get schemaType() {
    return this.getStringAttribute('schema_type');
  }
  public set schemaType(value: string) {
    this._schemaType = value;
  }
  public resetSchemaType() {
    this._schemaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTypeInput() {
    return this._schemaType;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EnvironmentConfigurationList extends cdktf.ComplexList {
  public internalValue? : EnvironmentConfiguration[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentConfigurationOutputReference {
    return new EnvironmentConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentSubEnvironmentConfigurationConfiguration {
  /**
  * description for the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#description Environment#description}
  */
  readonly description?: string;
  /**
  * is the variable read only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_read_only Environment#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * is the variable required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_required Environment#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * should the variable value be hidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_sensitive Environment#is_sensitive}
  */
  readonly isSensitive?: boolean | cdktf.IResolvable;
  /**
  * variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * the value of this variable must match provided regular expression (enforced only in env0 UI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#regex Environment#regex}
  */
  readonly regex?: string;
  /**
  * a list of possible variable values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#schema_enum Environment#schema_enum}
  */
  readonly schemaEnum?: string[];
  /**
  * the variable format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#schema_format Environment#schema_format}
  */
  readonly schemaFormat?: string;
  /**
  * the type the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#schema_type Environment#schema_type}
  */
  readonly schemaType?: string;
  /**
  * variable type (allowed values are: terraform, environment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#type Environment#type}
  */
  readonly type?: string;
  /**
  * variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#value Environment#value}
  */
  readonly value: string;
}

export function environmentSubEnvironmentConfigurationConfigurationToTerraform(struct?: EnvironmentSubEnvironmentConfigurationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    is_read_only: cdktf.booleanToTerraform(struct!.isReadOnly),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    is_sensitive: cdktf.booleanToTerraform(struct!.isSensitive),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
    schema_enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.schemaEnum),
    schema_format: cdktf.stringToTerraform(struct!.schemaFormat),
    schema_type: cdktf.stringToTerraform(struct!.schemaType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function environmentSubEnvironmentConfigurationConfigurationToHclTerraform(struct?: EnvironmentSubEnvironmentConfigurationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.isReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.isSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.schemaEnum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schema_format: {
      value: cdktf.stringToHclTerraform(struct!.schemaFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_type: {
      value: cdktf.stringToHclTerraform(struct!.schemaType),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentSubEnvironmentConfigurationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentSubEnvironmentConfigurationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReadOnly = this._isReadOnly;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._isSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSensitive = this._isSensitive;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._schemaEnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaEnum = this._schemaEnum;
    }
    if (this._schemaFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaFormat = this._schemaFormat;
    }
    if (this._schemaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaType = this._schemaType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentSubEnvironmentConfigurationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._isReadOnly = undefined;
      this._isRequired = undefined;
      this._isSensitive = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._schemaEnum = undefined;
      this._schemaFormat = undefined;
      this._schemaType = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._isReadOnly = value.isReadOnly;
      this._isRequired = value.isRequired;
      this._isSensitive = value.isSensitive;
      this._name = value.name;
      this._regex = value.regex;
      this._schemaEnum = value.schemaEnum;
      this._schemaFormat = value.schemaFormat;
      this._schemaType = value.schemaType;
      this._type = value.type;
      this._value = value.value;
    }
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

  // is_read_only - computed: false, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // is_required - computed: false, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: boolean | cdktf.IResolvable; 
  public get isSensitive() {
    return this.getBooleanAttribute('is_sensitive');
  }
  public set isSensitive(value: boolean | cdktf.IResolvable) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // schema_enum - computed: false, optional: true, required: false
  private _schemaEnum?: string[]; 
  public get schemaEnum() {
    return this.getListAttribute('schema_enum');
  }
  public set schemaEnum(value: string[]) {
    this._schemaEnum = value;
  }
  public resetSchemaEnum() {
    this._schemaEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaEnumInput() {
    return this._schemaEnum;
  }

  // schema_format - computed: false, optional: true, required: false
  private _schemaFormat?: string; 
  public get schemaFormat() {
    return this.getStringAttribute('schema_format');
  }
  public set schemaFormat(value: string) {
    this._schemaFormat = value;
  }
  public resetSchemaFormat() {
    this._schemaFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaFormatInput() {
    return this._schemaFormat;
  }

  // schema_type - computed: false, optional: true, required: false
  private _schemaType?: string; 
  public get schemaType() {
    return this.getStringAttribute('schema_type');
  }
  public set schemaType(value: string) {
    this._schemaType = value;
  }
  public resetSchemaType() {
    this._schemaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTypeInput() {
    return this._schemaType;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EnvironmentSubEnvironmentConfigurationConfigurationList extends cdktf.ComplexList {
  public internalValue? : EnvironmentSubEnvironmentConfigurationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentSubEnvironmentConfigurationConfigurationOutputReference {
    return new EnvironmentSubEnvironmentConfigurationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentSubEnvironmentConfiguration {
  /**
  * sub environment alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#alias Environment#alias}
  */
  readonly alias: string;
  /**
  * when 'true' (default) plans are approved automatically, otherwise ('false') deployment require manual approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#approve_plan_automatically Environment#approve_plan_automatically}
  */
  readonly approvePlanAutomatically?: boolean | cdktf.IResolvable;
  /**
  * sub environment revision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#revision Environment#revision}
  */
  readonly revision?: string;
  /**
  * sub environment workspace (overrides the configuration in the yml file)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#workspace Environment#workspace}
  */
  readonly workspace?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#configuration Environment#configuration}
  */
  readonly configuration?: EnvironmentSubEnvironmentConfigurationConfiguration[] | cdktf.IResolvable;
}

export function environmentSubEnvironmentConfigurationToTerraform(struct?: EnvironmentSubEnvironmentConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    approve_plan_automatically: cdktf.booleanToTerraform(struct!.approvePlanAutomatically),
    revision: cdktf.stringToTerraform(struct!.revision),
    workspace: cdktf.stringToTerraform(struct!.workspace),
    configuration: cdktf.listMapper(environmentSubEnvironmentConfigurationConfigurationToTerraform, true)(struct!.configuration),
  }
}


export function environmentSubEnvironmentConfigurationToHclTerraform(struct?: EnvironmentSubEnvironmentConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    approve_plan_automatically: {
      value: cdktf.booleanToHclTerraform(struct!.approvePlanAutomatically),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace: {
      value: cdktf.stringToHclTerraform(struct!.workspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.listMapperHcl(environmentSubEnvironmentConfigurationConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentSubEnvironmentConfigurationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentSubEnvironmentConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentSubEnvironmentConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._approvePlanAutomatically !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvePlanAutomatically = this._approvePlanAutomatically;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentSubEnvironmentConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._approvePlanAutomatically = undefined;
      this._revision = undefined;
      this._workspace = undefined;
      this._configuration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._approvePlanAutomatically = value.approvePlanAutomatically;
      this._revision = value.revision;
      this._workspace = value.workspace;
      this._configuration.internalValue = value.configuration;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // approve_plan_automatically - computed: false, optional: true, required: false
  private _approvePlanAutomatically?: boolean | cdktf.IResolvable; 
  public get approvePlanAutomatically() {
    return this.getBooleanAttribute('approve_plan_automatically');
  }
  public set approvePlanAutomatically(value: boolean | cdktf.IResolvable) {
    this._approvePlanAutomatically = value;
  }
  public resetApprovePlanAutomatically() {
    this._approvePlanAutomatically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvePlanAutomaticallyInput() {
    return this._approvePlanAutomatically;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  public resetWorkspace() {
    this._workspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new EnvironmentSubEnvironmentConfigurationConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: EnvironmentSubEnvironmentConfigurationConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}

export class EnvironmentSubEnvironmentConfigurationList extends cdktf.ComplexList {
  public internalValue? : EnvironmentSubEnvironmentConfiguration[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentSubEnvironmentConfigurationOutputReference {
    return new EnvironmentSubEnvironmentConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentWithoutTemplateSettings {
  /**
  * the ansible version to use (required when the template type is 'ansible'). Supported versions are 3.0.0 and above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#ansible_version Environment#ansible_version}
  */
  readonly ansibleVersion?: string;
  /**
  * the bitbucket client key used for integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#bitbucket_client_key Environment#bitbucket_client_key}
  */
  readonly bitbucketClientKey?: string;
  /**
  * description for the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#description Environment#description}
  */
  readonly description?: string;
  /**
  * the cloudformation file name. Required if the template type is cloudformation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#file_name Environment#file_name}
  */
  readonly fileName?: string;
  /**
  * the env0 application installation id on the relevant github repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#github_installation_id Environment#github_installation_id}
  */
  readonly githubInstallationId?: number;
  /**
  * the project id of the relevant repository (deprecated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#gitlab_project_id Environment#gitlab_project_id}
  */
  readonly gitlabProjectId?: number;
  /**
  * the helm chart name. Required if is_helm_repository is set to 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#helm_chart_name Environment#helm_chart_name}
  */
  readonly helmChartName?: string;
  /**
  * true if this template integrates with azure dev ops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_azure_devops Environment#is_azure_devops}
  */
  readonly isAzureDevops?: boolean | cdktf.IResolvable;
  /**
  * true if this template uses bitbucket server repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_bitbucket_server Environment#is_bitbucket_server}
  */
  readonly isBitbucketServer?: boolean | cdktf.IResolvable;
  /**
  * true if this template uses github enterprise repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_github_enterprise Environment#is_github_enterprise}
  */
  readonly isGithubEnterprise?: boolean | cdktf.IResolvable;
  /**
  * set to 'true' if the repository is Gitlab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_gitlab Environment#is_gitlab}
  */
  readonly isGitlab?: boolean | cdktf.IResolvable;
  /**
  * true if this template uses gitlab enterprise repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_gitlab_enterprise Environment#is_gitlab_enterprise}
  */
  readonly isGitlabEnterprise?: boolean | cdktf.IResolvable;
  /**
  * true if this template integrates with a helm repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_helm_repository Environment#is_helm_repository}
  */
  readonly isHelmRepository?: boolean | cdktf.IResolvable;
  /**
  * true if this template should execute run-all commands on multiple modules (check https://terragrunt.gruntwork.io/docs/features/execute-terraform-commands-on-multiple-modules-at-once/#the-run-all-command for additional details). Can only be true with 'terragrunt' template type and terragrunt version 0.28.1 and above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#is_terragrunt_run_all Environment#is_terragrunt_run_all}
  */
  readonly isTerragruntRunAll?: boolean | cdktf.IResolvable;
  /**
  * the Opentofu version to use (example: 1.6.2). Setting to 'RESOLVE_FROM_CODE' extracts the version from the Opentofu code during runtime. Setting to `latest`, the version used will be the most recent one available for Opentofu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#opentofu_version Environment#opentofu_version}
  */
  readonly opentofuVersion?: string;
  /**
  * terraform / terragrunt file folder inside source code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#path Environment#path}
  */
  readonly path?: string;
  /**
  * git repository url for the template source code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#repository Environment#repository}
  */
  readonly repository: string;
  /**
  * number of times to retry when deploying an environment based on this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#retries_on_deploy Environment#retries_on_deploy}
  */
  readonly retriesOnDeploy?: number;
  /**
  * number of times to retry when destroying an environment based on this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#retries_on_destroy Environment#retries_on_destroy}
  */
  readonly retriesOnDestroy?: number;
  /**
  * if specified, will only retry (on deploy) if error matches specified regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#retry_on_deploy_only_when_matches_regex Environment#retry_on_deploy_only_when_matches_regex}
  */
  readonly retryOnDeployOnlyWhenMatchesRegex?: string;
  /**
  * if specified, will only retry (on destroy) if error matches specified regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#retry_on_destroy_only_when_matches_regex Environment#retry_on_destroy_only_when_matches_regex}
  */
  readonly retryOnDestroyOnlyWhenMatchesRegex?: string;
  /**
  * source code revision (branch / tag) to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#revision Environment#revision}
  */
  readonly revision?: string;
  /**
  * an array of references to 'data_ssh_key' to use when accessing git over ssh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#ssh_keys Environment#ssh_keys}
  */
  readonly sshKeys?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * the Terraform version to use (example: 0.15.1). Setting to `RESOLVE_FROM_TERRAFORM_CODE` defaults to the version of `terraform.required_version` during run-time (resolve from terraform code). Setting to `latest`, the version used will be the most recent one available for Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#terraform_version Environment#terraform_version}
  */
  readonly terraformVersion?: string;
  /**
  * the binary to use if the template type is 'terragrunt'. Valid values 'opentofu' and 'terraform'. Defaults to 'opentofu'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#terragrunt_tf_binary Environment#terragrunt_tf_binary}
  */
  readonly terragruntTfBinary?: string;
  /**
  * the Terragrunt version to use (example: 0.36.5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#terragrunt_version Environment#terragrunt_version}
  */
  readonly terragruntVersion?: string;
  /**
  * the git token id to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#token_id Environment#token_id}
  */
  readonly tokenId?: string;
  /**
  * token name for Gitlab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#token_name Environment#token_name}
  */
  readonly tokenName?: string;
  /**
  * template type (allowed values: terraform, terragrunt, pulumi, k8s, workflow, cloudformation, helm, opentofu, ansible)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#type Environment#type}
  */
  readonly type: string;
  /**
  * the VCS connection id to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#vcs_connection_id Environment#vcs_connection_id}
  */
  readonly vcsConnectionId?: string;
}

export function environmentWithoutTemplateSettingsToTerraform(struct?: EnvironmentWithoutTemplateSettingsOutputReference | EnvironmentWithoutTemplateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ansible_version: cdktf.stringToTerraform(struct!.ansibleVersion),
    bitbucket_client_key: cdktf.stringToTerraform(struct!.bitbucketClientKey),
    description: cdktf.stringToTerraform(struct!.description),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    github_installation_id: cdktf.numberToTerraform(struct!.githubInstallationId),
    gitlab_project_id: cdktf.numberToTerraform(struct!.gitlabProjectId),
    helm_chart_name: cdktf.stringToTerraform(struct!.helmChartName),
    is_azure_devops: cdktf.booleanToTerraform(struct!.isAzureDevops),
    is_bitbucket_server: cdktf.booleanToTerraform(struct!.isBitbucketServer),
    is_github_enterprise: cdktf.booleanToTerraform(struct!.isGithubEnterprise),
    is_gitlab: cdktf.booleanToTerraform(struct!.isGitlab),
    is_gitlab_enterprise: cdktf.booleanToTerraform(struct!.isGitlabEnterprise),
    is_helm_repository: cdktf.booleanToTerraform(struct!.isHelmRepository),
    is_terragrunt_run_all: cdktf.booleanToTerraform(struct!.isTerragruntRunAll),
    opentofu_version: cdktf.stringToTerraform(struct!.opentofuVersion),
    path: cdktf.stringToTerraform(struct!.path),
    repository: cdktf.stringToTerraform(struct!.repository),
    retries_on_deploy: cdktf.numberToTerraform(struct!.retriesOnDeploy),
    retries_on_destroy: cdktf.numberToTerraform(struct!.retriesOnDestroy),
    retry_on_deploy_only_when_matches_regex: cdktf.stringToTerraform(struct!.retryOnDeployOnlyWhenMatchesRegex),
    retry_on_destroy_only_when_matches_regex: cdktf.stringToTerraform(struct!.retryOnDestroyOnlyWhenMatchesRegex),
    revision: cdktf.stringToTerraform(struct!.revision),
    ssh_keys: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.sshKeys),
    terraform_version: cdktf.stringToTerraform(struct!.terraformVersion),
    terragrunt_tf_binary: cdktf.stringToTerraform(struct!.terragruntTfBinary),
    terragrunt_version: cdktf.stringToTerraform(struct!.terragruntVersion),
    token_id: cdktf.stringToTerraform(struct!.tokenId),
    token_name: cdktf.stringToTerraform(struct!.tokenName),
    type: cdktf.stringToTerraform(struct!.type),
    vcs_connection_id: cdktf.stringToTerraform(struct!.vcsConnectionId),
  }
}


export function environmentWithoutTemplateSettingsToHclTerraform(struct?: EnvironmentWithoutTemplateSettingsOutputReference | EnvironmentWithoutTemplateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ansible_version: {
      value: cdktf.stringToHclTerraform(struct!.ansibleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bitbucket_client_key: {
      value: cdktf.stringToHclTerraform(struct!.bitbucketClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_installation_id: {
      value: cdktf.numberToHclTerraform(struct!.githubInstallationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gitlab_project_id: {
      value: cdktf.numberToHclTerraform(struct!.gitlabProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    helm_chart_name: {
      value: cdktf.stringToHclTerraform(struct!.helmChartName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_azure_devops: {
      value: cdktf.booleanToHclTerraform(struct!.isAzureDevops),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_bitbucket_server: {
      value: cdktf.booleanToHclTerraform(struct!.isBitbucketServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_github_enterprise: {
      value: cdktf.booleanToHclTerraform(struct!.isGithubEnterprise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_gitlab: {
      value: cdktf.booleanToHclTerraform(struct!.isGitlab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_gitlab_enterprise: {
      value: cdktf.booleanToHclTerraform(struct!.isGitlabEnterprise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_helm_repository: {
      value: cdktf.booleanToHclTerraform(struct!.isHelmRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_terragrunt_run_all: {
      value: cdktf.booleanToHclTerraform(struct!.isTerragruntRunAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    opentofu_version: {
      value: cdktf.stringToHclTerraform(struct!.opentofuVersion),
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
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries_on_deploy: {
      value: cdktf.numberToHclTerraform(struct!.retriesOnDeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries_on_destroy: {
      value: cdktf.numberToHclTerraform(struct!.retriesOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_on_deploy_only_when_matches_regex: {
      value: cdktf.stringToHclTerraform(struct!.retryOnDeployOnlyWhenMatchesRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_on_destroy_only_when_matches_regex: {
      value: cdktf.stringToHclTerraform(struct!.retryOnDestroyOnlyWhenMatchesRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.sshKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    terraform_version: {
      value: cdktf.stringToHclTerraform(struct!.terraformVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terragrunt_tf_binary: {
      value: cdktf.stringToHclTerraform(struct!.terragruntTfBinary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terragrunt_version: {
      value: cdktf.stringToHclTerraform(struct!.terragruntVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_id: {
      value: cdktf.stringToHclTerraform(struct!.tokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_name: {
      value: cdktf.stringToHclTerraform(struct!.tokenName),
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
    vcs_connection_id: {
      value: cdktf.stringToHclTerraform(struct!.vcsConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentWithoutTemplateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentWithoutTemplateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ansibleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ansibleVersion = this._ansibleVersion;
    }
    if (this._bitbucketClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitbucketClientKey = this._bitbucketClientKey;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._githubInstallationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubInstallationId = this._githubInstallationId;
    }
    if (this._gitlabProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlabProjectId = this._gitlabProjectId;
    }
    if (this._helmChartName !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmChartName = this._helmChartName;
    }
    if (this._isAzureDevops !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAzureDevops = this._isAzureDevops;
    }
    if (this._isBitbucketServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBitbucketServer = this._isBitbucketServer;
    }
    if (this._isGithubEnterprise !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGithubEnterprise = this._isGithubEnterprise;
    }
    if (this._isGitlab !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGitlab = this._isGitlab;
    }
    if (this._isGitlabEnterprise !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGitlabEnterprise = this._isGitlabEnterprise;
    }
    if (this._isHelmRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHelmRepository = this._isHelmRepository;
    }
    if (this._isTerragruntRunAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTerragruntRunAll = this._isTerragruntRunAll;
    }
    if (this._opentofuVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentofuVersion = this._opentofuVersion;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._retriesOnDeploy !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriesOnDeploy = this._retriesOnDeploy;
    }
    if (this._retriesOnDestroy !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriesOnDestroy = this._retriesOnDestroy;
    }
    if (this._retryOnDeployOnlyWhenMatchesRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOnDeployOnlyWhenMatchesRegex = this._retryOnDeployOnlyWhenMatchesRegex;
    }
    if (this._retryOnDestroyOnlyWhenMatchesRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOnDestroyOnlyWhenMatchesRegex = this._retryOnDestroyOnlyWhenMatchesRegex;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._terraformVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.terraformVersion = this._terraformVersion;
    }
    if (this._terragruntTfBinary !== undefined) {
      hasAnyValues = true;
      internalValueResult.terragruntTfBinary = this._terragruntTfBinary;
    }
    if (this._terragruntVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.terragruntVersion = this._terragruntVersion;
    }
    if (this._tokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenId = this._tokenId;
    }
    if (this._tokenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenName = this._tokenName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vcsConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcsConnectionId = this._vcsConnectionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentWithoutTemplateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ansibleVersion = undefined;
      this._bitbucketClientKey = undefined;
      this._description = undefined;
      this._fileName = undefined;
      this._githubInstallationId = undefined;
      this._gitlabProjectId = undefined;
      this._helmChartName = undefined;
      this._isAzureDevops = undefined;
      this._isBitbucketServer = undefined;
      this._isGithubEnterprise = undefined;
      this._isGitlab = undefined;
      this._isGitlabEnterprise = undefined;
      this._isHelmRepository = undefined;
      this._isTerragruntRunAll = undefined;
      this._opentofuVersion = undefined;
      this._path = undefined;
      this._repository = undefined;
      this._retriesOnDeploy = undefined;
      this._retriesOnDestroy = undefined;
      this._retryOnDeployOnlyWhenMatchesRegex = undefined;
      this._retryOnDestroyOnlyWhenMatchesRegex = undefined;
      this._revision = undefined;
      this._sshKeys = undefined;
      this._terraformVersion = undefined;
      this._terragruntTfBinary = undefined;
      this._terragruntVersion = undefined;
      this._tokenId = undefined;
      this._tokenName = undefined;
      this._type = undefined;
      this._vcsConnectionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ansibleVersion = value.ansibleVersion;
      this._bitbucketClientKey = value.bitbucketClientKey;
      this._description = value.description;
      this._fileName = value.fileName;
      this._githubInstallationId = value.githubInstallationId;
      this._gitlabProjectId = value.gitlabProjectId;
      this._helmChartName = value.helmChartName;
      this._isAzureDevops = value.isAzureDevops;
      this._isBitbucketServer = value.isBitbucketServer;
      this._isGithubEnterprise = value.isGithubEnterprise;
      this._isGitlab = value.isGitlab;
      this._isGitlabEnterprise = value.isGitlabEnterprise;
      this._isHelmRepository = value.isHelmRepository;
      this._isTerragruntRunAll = value.isTerragruntRunAll;
      this._opentofuVersion = value.opentofuVersion;
      this._path = value.path;
      this._repository = value.repository;
      this._retriesOnDeploy = value.retriesOnDeploy;
      this._retriesOnDestroy = value.retriesOnDestroy;
      this._retryOnDeployOnlyWhenMatchesRegex = value.retryOnDeployOnlyWhenMatchesRegex;
      this._retryOnDestroyOnlyWhenMatchesRegex = value.retryOnDestroyOnlyWhenMatchesRegex;
      this._revision = value.revision;
      this._sshKeys = value.sshKeys;
      this._terraformVersion = value.terraformVersion;
      this._terragruntTfBinary = value.terragruntTfBinary;
      this._terragruntVersion = value.terragruntVersion;
      this._tokenId = value.tokenId;
      this._tokenName = value.tokenName;
      this._type = value.type;
      this._vcsConnectionId = value.vcsConnectionId;
    }
  }

  // ansible_version - computed: false, optional: true, required: false
  private _ansibleVersion?: string; 
  public get ansibleVersion() {
    return this.getStringAttribute('ansible_version');
  }
  public set ansibleVersion(value: string) {
    this._ansibleVersion = value;
  }
  public resetAnsibleVersion() {
    this._ansibleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ansibleVersionInput() {
    return this._ansibleVersion;
  }

  // bitbucket_client_key - computed: false, optional: true, required: false
  private _bitbucketClientKey?: string; 
  public get bitbucketClientKey() {
    return this.getStringAttribute('bitbucket_client_key');
  }
  public set bitbucketClientKey(value: string) {
    this._bitbucketClientKey = value;
  }
  public resetBitbucketClientKey() {
    this._bitbucketClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketClientKeyInput() {
    return this._bitbucketClientKey;
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

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // github_installation_id - computed: false, optional: true, required: false
  private _githubInstallationId?: number; 
  public get githubInstallationId() {
    return this.getNumberAttribute('github_installation_id');
  }
  public set githubInstallationId(value: number) {
    this._githubInstallationId = value;
  }
  public resetGithubInstallationId() {
    this._githubInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInstallationIdInput() {
    return this._githubInstallationId;
  }

  // gitlab_project_id - computed: false, optional: true, required: false
  private _gitlabProjectId?: number; 
  public get gitlabProjectId() {
    return this.getNumberAttribute('gitlab_project_id');
  }
  public set gitlabProjectId(value: number) {
    this._gitlabProjectId = value;
  }
  public resetGitlabProjectId() {
    this._gitlabProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabProjectIdInput() {
    return this._gitlabProjectId;
  }

  // helm_chart_name - computed: false, optional: true, required: false
  private _helmChartName?: string; 
  public get helmChartName() {
    return this.getStringAttribute('helm_chart_name');
  }
  public set helmChartName(value: string) {
    this._helmChartName = value;
  }
  public resetHelmChartName() {
    this._helmChartName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmChartNameInput() {
    return this._helmChartName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_azure_devops - computed: false, optional: true, required: false
  private _isAzureDevops?: boolean | cdktf.IResolvable; 
  public get isAzureDevops() {
    return this.getBooleanAttribute('is_azure_devops');
  }
  public set isAzureDevops(value: boolean | cdktf.IResolvable) {
    this._isAzureDevops = value;
  }
  public resetIsAzureDevops() {
    this._isAzureDevops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAzureDevopsInput() {
    return this._isAzureDevops;
  }

  // is_bitbucket_server - computed: false, optional: true, required: false
  private _isBitbucketServer?: boolean | cdktf.IResolvable; 
  public get isBitbucketServer() {
    return this.getBooleanAttribute('is_bitbucket_server');
  }
  public set isBitbucketServer(value: boolean | cdktf.IResolvable) {
    this._isBitbucketServer = value;
  }
  public resetIsBitbucketServer() {
    this._isBitbucketServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBitbucketServerInput() {
    return this._isBitbucketServer;
  }

  // is_github_enterprise - computed: false, optional: true, required: false
  private _isGithubEnterprise?: boolean | cdktf.IResolvable; 
  public get isGithubEnterprise() {
    return this.getBooleanAttribute('is_github_enterprise');
  }
  public set isGithubEnterprise(value: boolean | cdktf.IResolvable) {
    this._isGithubEnterprise = value;
  }
  public resetIsGithubEnterprise() {
    this._isGithubEnterprise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGithubEnterpriseInput() {
    return this._isGithubEnterprise;
  }

  // is_gitlab - computed: false, optional: true, required: false
  private _isGitlab?: boolean | cdktf.IResolvable; 
  public get isGitlab() {
    return this.getBooleanAttribute('is_gitlab');
  }
  public set isGitlab(value: boolean | cdktf.IResolvable) {
    this._isGitlab = value;
  }
  public resetIsGitlab() {
    this._isGitlab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGitlabInput() {
    return this._isGitlab;
  }

  // is_gitlab_enterprise - computed: false, optional: true, required: false
  private _isGitlabEnterprise?: boolean | cdktf.IResolvable; 
  public get isGitlabEnterprise() {
    return this.getBooleanAttribute('is_gitlab_enterprise');
  }
  public set isGitlabEnterprise(value: boolean | cdktf.IResolvable) {
    this._isGitlabEnterprise = value;
  }
  public resetIsGitlabEnterprise() {
    this._isGitlabEnterprise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGitlabEnterpriseInput() {
    return this._isGitlabEnterprise;
  }

  // is_helm_repository - computed: false, optional: true, required: false
  private _isHelmRepository?: boolean | cdktf.IResolvable; 
  public get isHelmRepository() {
    return this.getBooleanAttribute('is_helm_repository');
  }
  public set isHelmRepository(value: boolean | cdktf.IResolvable) {
    this._isHelmRepository = value;
  }
  public resetIsHelmRepository() {
    this._isHelmRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHelmRepositoryInput() {
    return this._isHelmRepository;
  }

  // is_terragrunt_run_all - computed: false, optional: true, required: false
  private _isTerragruntRunAll?: boolean | cdktf.IResolvable; 
  public get isTerragruntRunAll() {
    return this.getBooleanAttribute('is_terragrunt_run_all');
  }
  public set isTerragruntRunAll(value: boolean | cdktf.IResolvable) {
    this._isTerragruntRunAll = value;
  }
  public resetIsTerragruntRunAll() {
    this._isTerragruntRunAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTerragruntRunAllInput() {
    return this._isTerragruntRunAll;
  }

  // opentofu_version - computed: false, optional: true, required: false
  private _opentofuVersion?: string; 
  public get opentofuVersion() {
    return this.getStringAttribute('opentofu_version');
  }
  public set opentofuVersion(value: string) {
    this._opentofuVersion = value;
  }
  public resetOpentofuVersion() {
    this._opentofuVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentofuVersionInput() {
    return this._opentofuVersion;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // retries_on_deploy - computed: false, optional: true, required: false
  private _retriesOnDeploy?: number; 
  public get retriesOnDeploy() {
    return this.getNumberAttribute('retries_on_deploy');
  }
  public set retriesOnDeploy(value: number) {
    this._retriesOnDeploy = value;
  }
  public resetRetriesOnDeploy() {
    this._retriesOnDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesOnDeployInput() {
    return this._retriesOnDeploy;
  }

  // retries_on_destroy - computed: false, optional: true, required: false
  private _retriesOnDestroy?: number; 
  public get retriesOnDestroy() {
    return this.getNumberAttribute('retries_on_destroy');
  }
  public set retriesOnDestroy(value: number) {
    this._retriesOnDestroy = value;
  }
  public resetRetriesOnDestroy() {
    this._retriesOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesOnDestroyInput() {
    return this._retriesOnDestroy;
  }

  // retry_on_deploy_only_when_matches_regex - computed: false, optional: true, required: false
  private _retryOnDeployOnlyWhenMatchesRegex?: string; 
  public get retryOnDeployOnlyWhenMatchesRegex() {
    return this.getStringAttribute('retry_on_deploy_only_when_matches_regex');
  }
  public set retryOnDeployOnlyWhenMatchesRegex(value: string) {
    this._retryOnDeployOnlyWhenMatchesRegex = value;
  }
  public resetRetryOnDeployOnlyWhenMatchesRegex() {
    this._retryOnDeployOnlyWhenMatchesRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnDeployOnlyWhenMatchesRegexInput() {
    return this._retryOnDeployOnlyWhenMatchesRegex;
  }

  // retry_on_destroy_only_when_matches_regex - computed: false, optional: true, required: false
  private _retryOnDestroyOnlyWhenMatchesRegex?: string; 
  public get retryOnDestroyOnlyWhenMatchesRegex() {
    return this.getStringAttribute('retry_on_destroy_only_when_matches_regex');
  }
  public set retryOnDestroyOnlyWhenMatchesRegex(value: string) {
    this._retryOnDestroyOnlyWhenMatchesRegex = value;
  }
  public resetRetryOnDestroyOnlyWhenMatchesRegex() {
    this._retryOnDestroyOnlyWhenMatchesRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnDestroyOnlyWhenMatchesRegexInput() {
    return this._retryOnDestroyOnlyWhenMatchesRegex;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get sshKeys() {
    return this.interpolationForAttribute('ssh_keys');
  }
  public set sshKeys(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // terraform_version - computed: false, optional: true, required: false
  private _terraformVersion?: string; 
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }
  public set terraformVersion(value: string) {
    this._terraformVersion = value;
  }
  public resetTerraformVersion() {
    this._terraformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformVersionInput() {
    return this._terraformVersion;
  }

  // terragrunt_tf_binary - computed: false, optional: true, required: false
  private _terragruntTfBinary?: string; 
  public get terragruntTfBinary() {
    return this.getStringAttribute('terragrunt_tf_binary');
  }
  public set terragruntTfBinary(value: string) {
    this._terragruntTfBinary = value;
  }
  public resetTerragruntTfBinary() {
    this._terragruntTfBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terragruntTfBinaryInput() {
    return this._terragruntTfBinary;
  }

  // terragrunt_version - computed: false, optional: true, required: false
  private _terragruntVersion?: string; 
  public get terragruntVersion() {
    return this.getStringAttribute('terragrunt_version');
  }
  public set terragruntVersion(value: string) {
    this._terragruntVersion = value;
  }
  public resetTerragruntVersion() {
    this._terragruntVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terragruntVersionInput() {
    return this._terragruntVersion;
  }

  // token_id - computed: false, optional: true, required: false
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  public resetTokenId() {
    this._tokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }

  // token_name - computed: false, optional: true, required: false
  private _tokenName?: string; 
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }
  public set tokenName(value: string) {
    this._tokenName = value;
  }
  public resetTokenName() {
    this._tokenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
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

  // vcs_connection_id - computed: false, optional: true, required: false
  private _vcsConnectionId?: string; 
  public get vcsConnectionId() {
    return this.getStringAttribute('vcs_connection_id');
  }
  public set vcsConnectionId(value: string) {
    this._vcsConnectionId = value;
  }
  public resetVcsConnectionId() {
    this._vcsConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsConnectionIdInput() {
    return this._vcsConnectionId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment env0_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment env0_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_environment',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.8',
        providerVersionConstraint: '1.29.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvePlanAutomatically = config.approvePlanAutomatically;
    this._autoDeployByCustomGlob = config.autoDeployByCustomGlob;
    this._autoDeployOnPathChangesOnly = config.autoDeployOnPathChangesOnly;
    this._deployOnPush = config.deployOnPush;
    this._driftDetectionCron = config.driftDetectionCron;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._isInactive = config.isInactive;
    this._isRemoteApplyEnabled = config.isRemoteApplyEnabled;
    this._isRemoteBackend = config.isRemoteBackend;
    this._k8SNamespace = config.k8SNamespace;
    this._name = config.name;
    this._output = config.output;
    this._preventAutoDeploy = config.preventAutoDeploy;
    this._projectId = config.projectId;
    this._removalStrategy = config.removalStrategy;
    this._revision = config.revision;
    this._runPlanOnPullRequests = config.runPlanOnPullRequests;
    this._templateId = config.templateId;
    this._terragruntWorkingDirectory = config.terragruntWorkingDirectory;
    this._ttl = config.ttl;
    this._variableSets = config.variableSets;
    this._vcsCommandsAlias = config.vcsCommandsAlias;
    this._vcsPrCommentsEnabled = config.vcsPrCommentsEnabled;
    this._waitForDestroy = config.waitForDestroy;
    this._workspace = config.workspace;
    this._configuration.internalValue = config.configuration;
    this._subEnvironmentConfiguration.internalValue = config.subEnvironmentConfiguration;
    this._withoutTemplateSettings.internalValue = config.withoutTemplateSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approve_plan_automatically - computed: false, optional: true, required: false
  private _approvePlanAutomatically?: boolean | cdktf.IResolvable; 
  public get approvePlanAutomatically() {
    return this.getBooleanAttribute('approve_plan_automatically');
  }
  public set approvePlanAutomatically(value: boolean | cdktf.IResolvable) {
    this._approvePlanAutomatically = value;
  }
  public resetApprovePlanAutomatically() {
    this._approvePlanAutomatically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvePlanAutomaticallyInput() {
    return this._approvePlanAutomatically;
  }

  // auto_deploy_by_custom_glob - computed: false, optional: true, required: false
  private _autoDeployByCustomGlob?: string; 
  public get autoDeployByCustomGlob() {
    return this.getStringAttribute('auto_deploy_by_custom_glob');
  }
  public set autoDeployByCustomGlob(value: string) {
    this._autoDeployByCustomGlob = value;
  }
  public resetAutoDeployByCustomGlob() {
    this._autoDeployByCustomGlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployByCustomGlobInput() {
    return this._autoDeployByCustomGlob;
  }

  // auto_deploy_on_path_changes_only - computed: false, optional: true, required: false
  private _autoDeployOnPathChangesOnly?: boolean | cdktf.IResolvable; 
  public get autoDeployOnPathChangesOnly() {
    return this.getBooleanAttribute('auto_deploy_on_path_changes_only');
  }
  public set autoDeployOnPathChangesOnly(value: boolean | cdktf.IResolvable) {
    this._autoDeployOnPathChangesOnly = value;
  }
  public resetAutoDeployOnPathChangesOnly() {
    this._autoDeployOnPathChangesOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployOnPathChangesOnlyInput() {
    return this._autoDeployOnPathChangesOnly;
  }

  // deploy_on_push - computed: false, optional: true, required: false
  private _deployOnPush?: boolean | cdktf.IResolvable; 
  public get deployOnPush() {
    return this.getBooleanAttribute('deploy_on_push');
  }
  public set deployOnPush(value: boolean | cdktf.IResolvable) {
    this._deployOnPush = value;
  }
  public resetDeployOnPush() {
    this._deployOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployOnPushInput() {
    return this._deployOnPush;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // drift_detection_cron - computed: false, optional: true, required: false
  private _driftDetectionCron?: string; 
  public get driftDetectionCron() {
    return this.getStringAttribute('drift_detection_cron');
  }
  public set driftDetectionCron(value: string) {
    this._driftDetectionCron = value;
  }
  public resetDriftDetectionCron() {
    this._driftDetectionCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftDetectionCronInput() {
    return this._driftDetectionCron;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // is_inactive - computed: false, optional: true, required: false
  private _isInactive?: boolean | cdktf.IResolvable; 
  public get isInactive() {
    return this.getBooleanAttribute('is_inactive');
  }
  public set isInactive(value: boolean | cdktf.IResolvable) {
    this._isInactive = value;
  }
  public resetIsInactive() {
    this._isInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInactiveInput() {
    return this._isInactive;
  }

  // is_remote_apply_enabled - computed: false, optional: true, required: false
  private _isRemoteApplyEnabled?: boolean | cdktf.IResolvable; 
  public get isRemoteApplyEnabled() {
    return this.getBooleanAttribute('is_remote_apply_enabled');
  }
  public set isRemoteApplyEnabled(value: boolean | cdktf.IResolvable) {
    this._isRemoteApplyEnabled = value;
  }
  public resetIsRemoteApplyEnabled() {
    this._isRemoteApplyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRemoteApplyEnabledInput() {
    return this._isRemoteApplyEnabled;
  }

  // is_remote_backend - computed: false, optional: true, required: false
  private _isRemoteBackend?: boolean | cdktf.IResolvable; 
  public get isRemoteBackend() {
    return this.getBooleanAttribute('is_remote_backend');
  }
  public set isRemoteBackend(value: boolean | cdktf.IResolvable) {
    this._isRemoteBackend = value;
  }
  public resetIsRemoteBackend() {
    this._isRemoteBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRemoteBackendInput() {
    return this._isRemoteBackend;
  }

  // k8s_namespace - computed: false, optional: true, required: false
  private _k8SNamespace?: string; 
  public get k8SNamespace() {
    return this.getStringAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: string) {
    this._k8SNamespace = value;
  }
  public resetK8SNamespace() {
    this._k8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
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

  // output - computed: true, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // prevent_auto_deploy - computed: false, optional: true, required: false
  private _preventAutoDeploy?: boolean | cdktf.IResolvable; 
  public get preventAutoDeploy() {
    return this.getBooleanAttribute('prevent_auto_deploy');
  }
  public set preventAutoDeploy(value: boolean | cdktf.IResolvable) {
    this._preventAutoDeploy = value;
  }
  public resetPreventAutoDeploy() {
    this._preventAutoDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventAutoDeployInput() {
    return this._preventAutoDeploy;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // removal_strategy - computed: false, optional: true, required: false
  private _removalStrategy?: string; 
  public get removalStrategy() {
    return this.getStringAttribute('removal_strategy');
  }
  public set removalStrategy(value: string) {
    this._removalStrategy = value;
  }
  public resetRemovalStrategy() {
    this._removalStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removalStrategyInput() {
    return this._removalStrategy;
  }

  // revision - computed: true, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // run_plan_on_pull_requests - computed: false, optional: true, required: false
  private _runPlanOnPullRequests?: boolean | cdktf.IResolvable; 
  public get runPlanOnPullRequests() {
    return this.getBooleanAttribute('run_plan_on_pull_requests');
  }
  public set runPlanOnPullRequests(value: boolean | cdktf.IResolvable) {
    this._runPlanOnPullRequests = value;
  }
  public resetRunPlanOnPullRequests() {
    this._runPlanOnPullRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runPlanOnPullRequestsInput() {
    return this._runPlanOnPullRequests;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // terragrunt_working_directory - computed: false, optional: true, required: false
  private _terragruntWorkingDirectory?: string; 
  public get terragruntWorkingDirectory() {
    return this.getStringAttribute('terragrunt_working_directory');
  }
  public set terragruntWorkingDirectory(value: string) {
    this._terragruntWorkingDirectory = value;
  }
  public resetTerragruntWorkingDirectory() {
    this._terragruntWorkingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terragruntWorkingDirectoryInput() {
    return this._terragruntWorkingDirectory;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // variable_sets - computed: false, optional: true, required: false
  private _variableSets?: string[]; 
  public get variableSets() {
    return this.getListAttribute('variable_sets');
  }
  public set variableSets(value: string[]) {
    this._variableSets = value;
  }
  public resetVariableSets() {
    this._variableSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableSetsInput() {
    return this._variableSets;
  }

  // vcs_commands_alias - computed: false, optional: true, required: false
  private _vcsCommandsAlias?: string; 
  public get vcsCommandsAlias() {
    return this.getStringAttribute('vcs_commands_alias');
  }
  public set vcsCommandsAlias(value: string) {
    this._vcsCommandsAlias = value;
  }
  public resetVcsCommandsAlias() {
    this._vcsCommandsAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsCommandsAliasInput() {
    return this._vcsCommandsAlias;
  }

  // vcs_pr_comments_enabled - computed: false, optional: true, required: false
  private _vcsPrCommentsEnabled?: boolean | cdktf.IResolvable; 
  public get vcsPrCommentsEnabled() {
    return this.getBooleanAttribute('vcs_pr_comments_enabled');
  }
  public set vcsPrCommentsEnabled(value: boolean | cdktf.IResolvable) {
    this._vcsPrCommentsEnabled = value;
  }
  public resetVcsPrCommentsEnabled() {
    this._vcsPrCommentsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsPrCommentsEnabledInput() {
    return this._vcsPrCommentsEnabled;
  }

  // wait_for_destroy - computed: false, optional: true, required: false
  private _waitForDestroy?: boolean | cdktf.IResolvable; 
  public get waitForDestroy() {
    return this.getBooleanAttribute('wait_for_destroy');
  }
  public set waitForDestroy(value: boolean | cdktf.IResolvable) {
    this._waitForDestroy = value;
  }
  public resetWaitForDestroy() {
    this._waitForDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDestroyInput() {
    return this._waitForDestroy;
  }

  // workspace - computed: true, optional: true, required: false
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  public resetWorkspace() {
    this._workspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new EnvironmentConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: EnvironmentConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // sub_environment_configuration - computed: false, optional: true, required: false
  private _subEnvironmentConfiguration = new EnvironmentSubEnvironmentConfigurationList(this, "sub_environment_configuration", false);
  public get subEnvironmentConfiguration() {
    return this._subEnvironmentConfiguration;
  }
  public putSubEnvironmentConfiguration(value: EnvironmentSubEnvironmentConfiguration[] | cdktf.IResolvable) {
    this._subEnvironmentConfiguration.internalValue = value;
  }
  public resetSubEnvironmentConfiguration() {
    this._subEnvironmentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subEnvironmentConfigurationInput() {
    return this._subEnvironmentConfiguration.internalValue;
  }

  // without_template_settings - computed: false, optional: true, required: false
  private _withoutTemplateSettings = new EnvironmentWithoutTemplateSettingsOutputReference(this, "without_template_settings");
  public get withoutTemplateSettings() {
    return this._withoutTemplateSettings;
  }
  public putWithoutTemplateSettings(value: EnvironmentWithoutTemplateSettings) {
    this._withoutTemplateSettings.internalValue = value;
  }
  public resetWithoutTemplateSettings() {
    this._withoutTemplateSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withoutTemplateSettingsInput() {
    return this._withoutTemplateSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approve_plan_automatically: cdktf.booleanToTerraform(this._approvePlanAutomatically),
      auto_deploy_by_custom_glob: cdktf.stringToTerraform(this._autoDeployByCustomGlob),
      auto_deploy_on_path_changes_only: cdktf.booleanToTerraform(this._autoDeployOnPathChangesOnly),
      deploy_on_push: cdktf.booleanToTerraform(this._deployOnPush),
      drift_detection_cron: cdktf.stringToTerraform(this._driftDetectionCron),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      is_inactive: cdktf.booleanToTerraform(this._isInactive),
      is_remote_apply_enabled: cdktf.booleanToTerraform(this._isRemoteApplyEnabled),
      is_remote_backend: cdktf.booleanToTerraform(this._isRemoteBackend),
      k8s_namespace: cdktf.stringToTerraform(this._k8SNamespace),
      name: cdktf.stringToTerraform(this._name),
      output: cdktf.stringToTerraform(this._output),
      prevent_auto_deploy: cdktf.booleanToTerraform(this._preventAutoDeploy),
      project_id: cdktf.stringToTerraform(this._projectId),
      removal_strategy: cdktf.stringToTerraform(this._removalStrategy),
      revision: cdktf.stringToTerraform(this._revision),
      run_plan_on_pull_requests: cdktf.booleanToTerraform(this._runPlanOnPullRequests),
      template_id: cdktf.stringToTerraform(this._templateId),
      terragrunt_working_directory: cdktf.stringToTerraform(this._terragruntWorkingDirectory),
      ttl: cdktf.stringToTerraform(this._ttl),
      variable_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._variableSets),
      vcs_commands_alias: cdktf.stringToTerraform(this._vcsCommandsAlias),
      vcs_pr_comments_enabled: cdktf.booleanToTerraform(this._vcsPrCommentsEnabled),
      wait_for_destroy: cdktf.booleanToTerraform(this._waitForDestroy),
      workspace: cdktf.stringToTerraform(this._workspace),
      configuration: cdktf.listMapper(environmentConfigurationToTerraform, true)(this._configuration.internalValue),
      sub_environment_configuration: cdktf.listMapper(environmentSubEnvironmentConfigurationToTerraform, true)(this._subEnvironmentConfiguration.internalValue),
      without_template_settings: environmentWithoutTemplateSettingsToTerraform(this._withoutTemplateSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approve_plan_automatically: {
        value: cdktf.booleanToHclTerraform(this._approvePlanAutomatically),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_deploy_by_custom_glob: {
        value: cdktf.stringToHclTerraform(this._autoDeployByCustomGlob),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_deploy_on_path_changes_only: {
        value: cdktf.booleanToHclTerraform(this._autoDeployOnPathChangesOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deploy_on_push: {
        value: cdktf.booleanToHclTerraform(this._deployOnPush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drift_detection_cron: {
        value: cdktf.stringToHclTerraform(this._driftDetectionCron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
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
      is_inactive: {
        value: cdktf.booleanToHclTerraform(this._isInactive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_remote_apply_enabled: {
        value: cdktf.booleanToHclTerraform(this._isRemoteApplyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_remote_backend: {
        value: cdktf.booleanToHclTerraform(this._isRemoteBackend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      k8s_namespace: {
        value: cdktf.stringToHclTerraform(this._k8SNamespace),
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
      output: {
        value: cdktf.stringToHclTerraform(this._output),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prevent_auto_deploy: {
        value: cdktf.booleanToHclTerraform(this._preventAutoDeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      removal_strategy: {
        value: cdktf.stringToHclTerraform(this._removalStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision: {
        value: cdktf.stringToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_plan_on_pull_requests: {
        value: cdktf.booleanToHclTerraform(this._runPlanOnPullRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terragrunt_working_directory: {
        value: cdktf.stringToHclTerraform(this._terragruntWorkingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._variableSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vcs_commands_alias: {
        value: cdktf.stringToHclTerraform(this._vcsCommandsAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcs_pr_comments_enabled: {
        value: cdktf.booleanToHclTerraform(this._vcsPrCommentsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_destroy: {
        value: cdktf.booleanToHclTerraform(this._waitForDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.listMapperHcl(environmentConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentConfigurationList",
      },
      sub_environment_configuration: {
        value: cdktf.listMapperHcl(environmentSubEnvironmentConfigurationToHclTerraform, true)(this._subEnvironmentConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentSubEnvironmentConfigurationList",
      },
      without_template_settings: {
        value: environmentWithoutTemplateSettingsToHclTerraform(this._withoutTemplateSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentWithoutTemplateSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
