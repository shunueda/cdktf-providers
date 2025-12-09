// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseBundleV2CleanupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cron expression determines when the policy is run. This parameter is not mandatory, however if left empty the policy will not run automatically and can only be triggered manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#cron_expression ReleaseBundleV2CleanupPolicy#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#description ReleaseBundleV2CleanupPolicy#description}
  */
  readonly description?: string;
  /**
  * The maximum duration (in minutes) for policy execution, after which the policy will stop running even if not completed. While setting a maximum run duration for a policy is useful for adhering to a strict archive V2 schedule, it can cause the policy to stop before completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#duration_in_minutes ReleaseBundleV2CleanupPolicy#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Enables or disabled the release bundle cleanup policy. This allows the user to run the policy manually. If a policy has a valid cron expression, then it will be scheduled for execution based on it. If a policy is disabled, its future executions will be unscheduled. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#enabled ReleaseBundleV2CleanupPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Needs to be set to releaseBundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#item_type ReleaseBundleV2CleanupPolicy#item_type}
  */
  readonly itemType?: string;
  /**
  * An ID that is used to identify the release bundle cleanup policy. A minimum of three characters is required and can include letters, numbers, underscore and hyphen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#key ReleaseBundleV2CleanupPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#search_criteria ReleaseBundleV2CleanupPolicy#search_criteria}
  */
  readonly searchCriteria: ReleaseBundleV2CleanupPolicySearchCriteria;
}
export interface ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundles {
  /**
  * The name of the release bundle. Set '**' to include all bundles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#name ReleaseBundleV2CleanupPolicy#name}
  */
  readonly name: string;
  /**
  * The project identifier associated with the release bundle. This key is obtained from the Project Settings screen. Leave the field blank to apply at a global level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#project_key ReleaseBundleV2CleanupPolicy#project_key}
  */
  readonly projectKey: string;
}

export function releaseBundleV2CleanupPolicySearchCriteriaReleaseBundlesToTerraform(struct?: ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    project_key: cdktf.stringToTerraform(struct!.projectKey),
  }
}


export function releaseBundleV2CleanupPolicySearchCriteriaReleaseBundlesToHclTerraform(struct?: ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundles | cdktf.IResolvable): any {
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
    project_key: {
      value: cdktf.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._projectKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._projectKey = value.projectKey;
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

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }
}

export class ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundlesList extends cdktf.ComplexList {
  public internalValue? : ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundles[] | cdktf.IResolvable

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
  public get(index: number): ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundlesOutputReference {
    return new ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseBundleV2CleanupPolicySearchCriteria {
  /**
  * Specifies the time frame for filtering based on item creation date (for example, 24 months).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#created_before_in_months ReleaseBundleV2CleanupPolicy#created_before_in_months}
  */
  readonly createdBeforeInMonths?: number;
  /**
  * A list of environments to exclude from the cleanup process. To exclude all, set to **
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#exclude_promoted_environments ReleaseBundleV2CleanupPolicy#exclude_promoted_environments}
  */
  readonly excludePromotedEnvironments: string[];
  /**
  * Set this value to `true` if you want the policy to run on all Artifactory projects. The default value is `false`.
  * 
  * ~>This attribute is relevant only on the global level, for Platform Admins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#include_all_projects ReleaseBundleV2CleanupPolicy#include_all_projects}
  */
  readonly includeAllProjects?: boolean | cdktf.IResolvable;
  /**
  * List of projects on which you want this policy to run. To include repositories that are not assigned to any project, enter the project key `default`.
  * 
  * ~>This setting is relevant only on the global level, for Platform Admins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#included_projects ReleaseBundleV2CleanupPolicy#included_projects}
  */
  readonly includedProjects?: string[];
  /**
  * Specify the release bundles to include in the cleanup policy. The policy will only clean up the release bundles that match the specified criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#release_bundles ReleaseBundleV2CleanupPolicy#release_bundles}
  */
  readonly releaseBundles?: ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundles[] | cdktf.IResolvable;
}

export function releaseBundleV2CleanupPolicySearchCriteriaToTerraform(struct?: ReleaseBundleV2CleanupPolicySearchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_before_in_months: cdktf.numberToTerraform(struct!.createdBeforeInMonths),
    exclude_promoted_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePromotedEnvironments),
    include_all_projects: cdktf.booleanToTerraform(struct!.includeAllProjects),
    included_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedProjects),
    release_bundles: cdktf.listMapper(releaseBundleV2CleanupPolicySearchCriteriaReleaseBundlesToTerraform, false)(struct!.releaseBundles),
  }
}


export function releaseBundleV2CleanupPolicySearchCriteriaToHclTerraform(struct?: ReleaseBundleV2CleanupPolicySearchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_before_in_months: {
      value: cdktf.numberToHclTerraform(struct!.createdBeforeInMonths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exclude_promoted_environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePromotedEnvironments),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_all_projects: {
      value: cdktf.booleanToHclTerraform(struct!.includeAllProjects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedProjects),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    release_bundles: {
      value: cdktf.listMapperHcl(releaseBundleV2CleanupPolicySearchCriteriaReleaseBundlesToHclTerraform, false)(struct!.releaseBundles),
      isBlock: true,
      type: "set",
      storageClassType: "ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundlesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseBundleV2CleanupPolicySearchCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseBundleV2CleanupPolicySearchCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBeforeInMonths !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBeforeInMonths = this._createdBeforeInMonths;
    }
    if (this._excludePromotedEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePromotedEnvironments = this._excludePromotedEnvironments;
    }
    if (this._includeAllProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllProjects = this._includeAllProjects;
    }
    if (this._includedProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedProjects = this._includedProjects;
    }
    if (this._releaseBundles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseBundles = this._releaseBundles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV2CleanupPolicySearchCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBeforeInMonths = undefined;
      this._excludePromotedEnvironments = undefined;
      this._includeAllProjects = undefined;
      this._includedProjects = undefined;
      this._releaseBundles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBeforeInMonths = value.createdBeforeInMonths;
      this._excludePromotedEnvironments = value.excludePromotedEnvironments;
      this._includeAllProjects = value.includeAllProjects;
      this._includedProjects = value.includedProjects;
      this._releaseBundles.internalValue = value.releaseBundles;
    }
  }

  // created_before_in_months - computed: true, optional: true, required: false
  private _createdBeforeInMonths?: number; 
  public get createdBeforeInMonths() {
    return this.getNumberAttribute('created_before_in_months');
  }
  public set createdBeforeInMonths(value: number) {
    this._createdBeforeInMonths = value;
  }
  public resetCreatedBeforeInMonths() {
    this._createdBeforeInMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdBeforeInMonthsInput() {
    return this._createdBeforeInMonths;
  }

  // exclude_promoted_environments - computed: false, optional: false, required: true
  private _excludePromotedEnvironments?: string[]; 
  public get excludePromotedEnvironments() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_promoted_environments'));
  }
  public set excludePromotedEnvironments(value: string[]) {
    this._excludePromotedEnvironments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePromotedEnvironmentsInput() {
    return this._excludePromotedEnvironments;
  }

  // include_all_projects - computed: false, optional: true, required: false
  private _includeAllProjects?: boolean | cdktf.IResolvable; 
  public get includeAllProjects() {
    return this.getBooleanAttribute('include_all_projects');
  }
  public set includeAllProjects(value: boolean | cdktf.IResolvable) {
    this._includeAllProjects = value;
  }
  public resetIncludeAllProjects() {
    this._includeAllProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllProjectsInput() {
    return this._includeAllProjects;
  }

  // included_projects - computed: false, optional: true, required: false
  private _includedProjects?: string[]; 
  public get includedProjects() {
    return cdktf.Fn.tolist(this.getListAttribute('included_projects'));
  }
  public set includedProjects(value: string[]) {
    this._includedProjects = value;
  }
  public resetIncludedProjects() {
    this._includedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedProjectsInput() {
    return this._includedProjects;
  }

  // release_bundles - computed: false, optional: true, required: false
  private _releaseBundles = new ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundlesList(this, "release_bundles", true);
  public get releaseBundles() {
    return this._releaseBundles;
  }
  public putReleaseBundles(value: ReleaseBundleV2CleanupPolicySearchCriteriaReleaseBundles[] | cdktf.IResolvable) {
    this._releaseBundles.internalValue = value;
  }
  public resetReleaseBundles() {
    this._releaseBundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseBundlesInput() {
    return this._releaseBundles.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy artifactory_release_bundle_v2_cleanup_policy}
*/
export class ReleaseBundleV2CleanupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_release_bundle_v2_cleanup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReleaseBundleV2CleanupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReleaseBundleV2CleanupPolicy to import
  * @param importFromId The id of the existing ReleaseBundleV2CleanupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReleaseBundleV2CleanupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_release_bundle_v2_cleanup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/release_bundle_v2_cleanup_policy artifactory_release_bundle_v2_cleanup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseBundleV2CleanupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ReleaseBundleV2CleanupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_release_bundle_v2_cleanup_policy',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cronExpression = config.cronExpression;
    this._description = config.description;
    this._durationInMinutes = config.durationInMinutes;
    this._enabled = config.enabled;
    this._itemType = config.itemType;
    this._key = config.key;
    this._searchCriteria.internalValue = config.searchCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_expression - computed: false, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
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

  // duration_in_minutes - computed: false, optional: true, required: false
  private _durationInMinutes?: number; 
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  public resetDurationInMinutes() {
    this._durationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // item_type - computed: true, optional: true, required: false
  private _itemType?: string; 
  public get itemType() {
    return this.getStringAttribute('item_type');
  }
  public set itemType(value: string) {
    this._itemType = value;
  }
  public resetItemType() {
    this._itemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemTypeInput() {
    return this._itemType;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // search_criteria - computed: false, optional: false, required: true
  private _searchCriteria = new ReleaseBundleV2CleanupPolicySearchCriteriaOutputReference(this, "search_criteria");
  public get searchCriteria() {
    return this._searchCriteria;
  }
  public putSearchCriteria(value: ReleaseBundleV2CleanupPolicySearchCriteria) {
    this._searchCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchCriteriaInput() {
    return this._searchCriteria.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_expression: cdktf.stringToTerraform(this._cronExpression),
      description: cdktf.stringToTerraform(this._description),
      duration_in_minutes: cdktf.numberToTerraform(this._durationInMinutes),
      enabled: cdktf.booleanToTerraform(this._enabled),
      item_type: cdktf.stringToTerraform(this._itemType),
      key: cdktf.stringToTerraform(this._key),
      search_criteria: releaseBundleV2CleanupPolicySearchCriteriaToTerraform(this._searchCriteria.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_expression: {
        value: cdktf.stringToHclTerraform(this._cronExpression),
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
      duration_in_minutes: {
        value: cdktf.numberToHclTerraform(this._durationInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      item_type: {
        value: cdktf.stringToHclTerraform(this._itemType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_criteria: {
        value: releaseBundleV2CleanupPolicySearchCriteriaToHclTerraform(this._searchCriteria.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ReleaseBundleV2CleanupPolicySearchCriteria",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
