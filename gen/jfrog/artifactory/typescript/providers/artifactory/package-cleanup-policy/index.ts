// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackageCleanupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cron expression that determines when the policy is run, However if left empty the policy will not run automatically and can only be triggered manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#cron_expression PackageCleanupPolicy#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#description PackageCleanupPolicy#description}
  */
  readonly description?: string;
  /**
  * The maximum duration (in minutes) for policy execution, after which the policy will stop running even if not completed. While setting a maximum run duration for a policy is useful for adhering to a strict cleanup schedule, it can cause the policy to stop before completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#duration_in_minutes PackageCleanupPolicy#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * A cleanup policy must be created inactive. But if used it must be set to `false`. If set to `true` when calling this API, the API call will fail and an error message is received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#enabled PackageCleanupPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * An ID that is used to identify the cleanup policy. A minimum of three characters is required and can include letters, numbers, underscore and hyphen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#key PackageCleanupPolicy#key}
  */
  readonly key: string;
  /**
  * This attribute is used only for project-level cleanup policies, it is not used for global-level policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#project_key PackageCleanupPolicy#project_key}
  */
  readonly projectKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#search_criteria PackageCleanupPolicy#search_criteria}
  */
  readonly searchCriteria: PackageCleanupPolicySearchCriteria;
  /**
  * A true value means that when this policy is executed, packages will be permanently deleted. false means that when the policy is executed packages will be deleted to the Trash Can.
  * 
  * ~>The Global Trash Can setting must be enabled if you want deleted items to be transferred to the Trash Can, see [Trash Can Settings](https://jfrog.com/help/r/jfrog-artifactory-documentation/trash-can-settings).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#skip_trashcan PackageCleanupPolicy#skip_trashcan}
  */
  readonly skipTrashcan?: boolean | cdktf.IResolvable;
}
export interface PackageCleanupPolicySearchCriteria {
  /**
  * The cleanup policy will delete packages based on how long ago they were created. For example, if this parameter is 5 then packages created more than 5 days ago will be deleted as part of the policy.
  * 
  * ~>JFrog recommends using the `created_before_in_days` condition to ensure that packages currently in use are not deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#created_before_in_days PackageCleanupPolicy#created_before_in_days}
  */
  readonly createdBeforeInDays?: number;
  /**
  * The cleanup policy will delete packages based on how long ago they were created. For example, if this parameter is 2 then packages created more than 2 months ago will be deleted as part of the policy.
  * 
  * ~>JFrog recommends using the `created_before_in_months` condition to ensure that packages currently in use are not deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#created_before_in_months PackageCleanupPolicy#created_before_in_months}
  */
  readonly createdBeforeInMonths?: number;
  /**
  * Specify explicit package names that you want excluded from the policy. Only explicit names (and not patterns) are accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#excluded_packages PackageCleanupPolicy#excluded_packages}
  */
  readonly excludedPackages?: string[];
  /**
  * A key-value pair applied to the lead artifact of a package. Packages with this property will be excluded from deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#excluded_properties PackageCleanupPolicy#excluded_properties}
  */
  readonly excludedProperties?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Specify patterns for repository names or explicit repository names that you want excluded from the cleanup policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#excluded_repos PackageCleanupPolicy#excluded_repos}
  */
  readonly excludedRepos?: string[];
  /**
  * Set this value to `true` if you want the policy to run on all Artifactory projects. The default value is `false`.
  * 
  *  ~>This parameter is relevant only on the global level, for Platform Admins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#include_all_projects PackageCleanupPolicy#include_all_projects}
  */
  readonly includeAllProjects?: boolean | cdktf.IResolvable;
  /**
  * Specify a pattern for a package name or an explicit package name on which you want the cleanup policy to run. Only one pattern or explicit name can be entered. To include all packages, use `**`. Example: `included_packages = ["**"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#included_packages PackageCleanupPolicy#included_packages}
  */
  readonly includedPackages: string[];
  /**
  * Enter the project keys for the projects on which you want the policy to run. To include repositories that are not assigned to any project, enter the project key `default`.
  * 
  * ~>This parameter is relevant only on the global level, for Platform Admins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#included_projects PackageCleanupPolicy#included_projects}
  */
  readonly includedProjects: string[];
  /**
  * A key-value pair applied to the lead artifact of a package. Packages with this property will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#included_properties PackageCleanupPolicy#included_properties}
  */
  readonly includedProperties?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Set a value for the number of latest versions to keep. The cleanup policy will remove all versions prior to the number you select here. The latest version is always excluded.
  * 
  * ~>Not all package types support this condition. For information on which package types support this condition, [learn more](https://jfrog.com/help/r/jfrog-platform-administration-documentation/retention-policies/package-types-coverage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#keep_last_n_versions PackageCleanupPolicy#keep_last_n_versions}
  */
  readonly keepLastNVersions?: number;
  /**
  * The cleanup policy will delete packages based on how long ago they were downloaded. For example, if this parameter is 5 then packages downloaded more than 5 days ago will be deleted as part of the policy.
  * 
  * ~>JFrog recommends using the `last_downloaded_before_in_days` condition to ensure that packages currently in use are not deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#last_downloaded_before_in_days PackageCleanupPolicy#last_downloaded_before_in_days}
  */
  readonly lastDownloadedBeforeInDays?: number;
  /**
  * The cleanup policy will delete packages based on how long ago they were downloaded. For example, if this parameter is 5 then packages downloaded more than 5 months ago will be deleted as part of the policy.
  * 
  * ~>JFrog recommends using the `last_downloaded_before_in_months` condition to ensure that packages currently in use are not deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#last_downloaded_before_in_months PackageCleanupPolicy#last_downloaded_before_in_months}
  */
  readonly lastDownloadedBeforeInMonths?: number;
  /**
  * The package types that are cleaned up by the policy. Support: alpine, ansible, cargo, chef, cocoapods, composer, conan, conda, debian, docker, gems, generic, go, gradle, helm, helmoci, huggingfaceml, machinelearning, maven, npm, nuget, oci, puppet, pypi, sbt, swift, terraform, terraformbackend, rpm, yum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#package_types PackageCleanupPolicy#package_types}
  */
  readonly packageTypes: string[];
  /**
  * Specify one or more patterns for the repository name(s) on which you want the cleanup policy to run. You can also specify explicit repository names. Specifying at least one pattern or explicit name is mandatory. Only packages in repositories that match the pattern or explicit name will be deleted. For including all repos use `**`. Example: `repos = ["**"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#repos PackageCleanupPolicy#repos}
  */
  readonly repos: string[];
}

export function packageCleanupPolicySearchCriteriaToTerraform(struct?: PackageCleanupPolicySearchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_before_in_days: cdktf.numberToTerraform(struct!.createdBeforeInDays),
    created_before_in_months: cdktf.numberToTerraform(struct!.createdBeforeInMonths),
    excluded_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedPackages),
    excluded_properties: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.excludedProperties),
    excluded_repos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedRepos),
    include_all_projects: cdktf.booleanToTerraform(struct!.includeAllProjects),
    included_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPackages),
    included_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedProjects),
    included_properties: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.includedProperties),
    keep_last_n_versions: cdktf.numberToTerraform(struct!.keepLastNVersions),
    last_downloaded_before_in_days: cdktf.numberToTerraform(struct!.lastDownloadedBeforeInDays),
    last_downloaded_before_in_months: cdktf.numberToTerraform(struct!.lastDownloadedBeforeInMonths),
    package_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageTypes),
    repos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repos),
  }
}


export function packageCleanupPolicySearchCriteriaToHclTerraform(struct?: PackageCleanupPolicySearchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_before_in_days: {
      value: cdktf.numberToHclTerraform(struct!.createdBeforeInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    created_before_in_months: {
      value: cdktf.numberToHclTerraform(struct!.createdBeforeInMonths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    excluded_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedPackages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    excluded_properties: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.excludedProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    excluded_repos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedRepos),
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
    included_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedPackages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    included_projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedProjects),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    included_properties: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.includedProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    keep_last_n_versions: {
      value: cdktf.numberToHclTerraform(struct!.keepLastNVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_downloaded_before_in_days: {
      value: cdktf.numberToHclTerraform(struct!.lastDownloadedBeforeInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_downloaded_before_in_months: {
      value: cdktf.numberToHclTerraform(struct!.lastDownloadedBeforeInMonths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    package_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packageTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repos),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackageCleanupPolicySearchCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PackageCleanupPolicySearchCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBeforeInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBeforeInDays = this._createdBeforeInDays;
    }
    if (this._createdBeforeInMonths !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBeforeInMonths = this._createdBeforeInMonths;
    }
    if (this._excludedPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPackages = this._excludedPackages;
    }
    if (this._excludedProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedProperties = this._excludedProperties;
    }
    if (this._excludedRepos !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedRepos = this._excludedRepos;
    }
    if (this._includeAllProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllProjects = this._includeAllProjects;
    }
    if (this._includedPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPackages = this._includedPackages;
    }
    if (this._includedProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedProjects = this._includedProjects;
    }
    if (this._includedProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedProperties = this._includedProperties;
    }
    if (this._keepLastNVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepLastNVersions = this._keepLastNVersions;
    }
    if (this._lastDownloadedBeforeInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDownloadedBeforeInDays = this._lastDownloadedBeforeInDays;
    }
    if (this._lastDownloadedBeforeInMonths !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDownloadedBeforeInMonths = this._lastDownloadedBeforeInMonths;
    }
    if (this._packageTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageTypes = this._packageTypes;
    }
    if (this._repos !== undefined) {
      hasAnyValues = true;
      internalValueResult.repos = this._repos;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackageCleanupPolicySearchCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBeforeInDays = undefined;
      this._createdBeforeInMonths = undefined;
      this._excludedPackages = undefined;
      this._excludedProperties = undefined;
      this._excludedRepos = undefined;
      this._includeAllProjects = undefined;
      this._includedPackages = undefined;
      this._includedProjects = undefined;
      this._includedProperties = undefined;
      this._keepLastNVersions = undefined;
      this._lastDownloadedBeforeInDays = undefined;
      this._lastDownloadedBeforeInMonths = undefined;
      this._packageTypes = undefined;
      this._repos = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBeforeInDays = value.createdBeforeInDays;
      this._createdBeforeInMonths = value.createdBeforeInMonths;
      this._excludedPackages = value.excludedPackages;
      this._excludedProperties = value.excludedProperties;
      this._excludedRepos = value.excludedRepos;
      this._includeAllProjects = value.includeAllProjects;
      this._includedPackages = value.includedPackages;
      this._includedProjects = value.includedProjects;
      this._includedProperties = value.includedProperties;
      this._keepLastNVersions = value.keepLastNVersions;
      this._lastDownloadedBeforeInDays = value.lastDownloadedBeforeInDays;
      this._lastDownloadedBeforeInMonths = value.lastDownloadedBeforeInMonths;
      this._packageTypes = value.packageTypes;
      this._repos = value.repos;
    }
  }

  // created_before_in_days - computed: true, optional: true, required: false
  private _createdBeforeInDays?: number; 
  public get createdBeforeInDays() {
    return this.getNumberAttribute('created_before_in_days');
  }
  public set createdBeforeInDays(value: number) {
    this._createdBeforeInDays = value;
  }
  public resetCreatedBeforeInDays() {
    this._createdBeforeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdBeforeInDaysInput() {
    return this._createdBeforeInDays;
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

  // excluded_packages - computed: false, optional: true, required: false
  private _excludedPackages?: string[]; 
  public get excludedPackages() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_packages'));
  }
  public set excludedPackages(value: string[]) {
    this._excludedPackages = value;
  }
  public resetExcludedPackages() {
    this._excludedPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPackagesInput() {
    return this._excludedPackages;
  }

  // excluded_properties - computed: false, optional: true, required: false
  private _excludedProperties?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get excludedProperties() {
    return this.interpolationForAttribute('excluded_properties');
  }
  public set excludedProperties(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._excludedProperties = value;
  }
  public resetExcludedProperties() {
    this._excludedProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPropertiesInput() {
    return this._excludedProperties;
  }

  // excluded_repos - computed: false, optional: true, required: false
  private _excludedRepos?: string[]; 
  public get excludedRepos() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_repos'));
  }
  public set excludedRepos(value: string[]) {
    this._excludedRepos = value;
  }
  public resetExcludedRepos() {
    this._excludedRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedReposInput() {
    return this._excludedRepos;
  }

  // include_all_projects - computed: true, optional: true, required: false
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

  // included_packages - computed: false, optional: false, required: true
  private _includedPackages?: string[]; 
  public get includedPackages() {
    return cdktf.Fn.tolist(this.getListAttribute('included_packages'));
  }
  public set includedPackages(value: string[]) {
    this._includedPackages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPackagesInput() {
    return this._includedPackages;
  }

  // included_projects - computed: false, optional: false, required: true
  private _includedProjects?: string[]; 
  public get includedProjects() {
    return cdktf.Fn.tolist(this.getListAttribute('included_projects'));
  }
  public set includedProjects(value: string[]) {
    this._includedProjects = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedProjectsInput() {
    return this._includedProjects;
  }

  // included_properties - computed: false, optional: true, required: false
  private _includedProperties?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get includedProperties() {
    return this.interpolationForAttribute('included_properties');
  }
  public set includedProperties(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._includedProperties = value;
  }
  public resetIncludedProperties() {
    this._includedProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPropertiesInput() {
    return this._includedProperties;
  }

  // keep_last_n_versions - computed: true, optional: true, required: false
  private _keepLastNVersions?: number; 
  public get keepLastNVersions() {
    return this.getNumberAttribute('keep_last_n_versions');
  }
  public set keepLastNVersions(value: number) {
    this._keepLastNVersions = value;
  }
  public resetKeepLastNVersions() {
    this._keepLastNVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLastNVersionsInput() {
    return this._keepLastNVersions;
  }

  // last_downloaded_before_in_days - computed: true, optional: true, required: false
  private _lastDownloadedBeforeInDays?: number; 
  public get lastDownloadedBeforeInDays() {
    return this.getNumberAttribute('last_downloaded_before_in_days');
  }
  public set lastDownloadedBeforeInDays(value: number) {
    this._lastDownloadedBeforeInDays = value;
  }
  public resetLastDownloadedBeforeInDays() {
    this._lastDownloadedBeforeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDownloadedBeforeInDaysInput() {
    return this._lastDownloadedBeforeInDays;
  }

  // last_downloaded_before_in_months - computed: true, optional: true, required: false
  private _lastDownloadedBeforeInMonths?: number; 
  public get lastDownloadedBeforeInMonths() {
    return this.getNumberAttribute('last_downloaded_before_in_months');
  }
  public set lastDownloadedBeforeInMonths(value: number) {
    this._lastDownloadedBeforeInMonths = value;
  }
  public resetLastDownloadedBeforeInMonths() {
    this._lastDownloadedBeforeInMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDownloadedBeforeInMonthsInput() {
    return this._lastDownloadedBeforeInMonths;
  }

  // package_types - computed: false, optional: false, required: true
  private _packageTypes?: string[]; 
  public get packageTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('package_types'));
  }
  public set packageTypes(value: string[]) {
    this._packageTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypesInput() {
    return this._packageTypes;
  }

  // repos - computed: false, optional: false, required: true
  private _repos?: string[]; 
  public get repos() {
    return cdktf.Fn.tolist(this.getListAttribute('repos'));
  }
  public set repos(value: string[]) {
    this._repos = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reposInput() {
    return this._repos;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy artifactory_package_cleanup_policy}
*/
export class PackageCleanupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_package_cleanup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackageCleanupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackageCleanupPolicy to import
  * @param importFromId The id of the existing PackageCleanupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackageCleanupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_package_cleanup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/package_cleanup_policy artifactory_package_cleanup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackageCleanupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PackageCleanupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_package_cleanup_policy',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.10.1'
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
    this._key = config.key;
    this._projectKey = config.projectKey;
    this._searchCriteria.internalValue = config.searchCriteria;
    this._skipTrashcan = config.skipTrashcan;
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

  // duration_in_minutes - computed: true, optional: true, required: false
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

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // search_criteria - computed: false, optional: false, required: true
  private _searchCriteria = new PackageCleanupPolicySearchCriteriaOutputReference(this, "search_criteria");
  public get searchCriteria() {
    return this._searchCriteria;
  }
  public putSearchCriteria(value: PackageCleanupPolicySearchCriteria) {
    this._searchCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchCriteriaInput() {
    return this._searchCriteria.internalValue;
  }

  // skip_trashcan - computed: true, optional: true, required: false
  private _skipTrashcan?: boolean | cdktf.IResolvable; 
  public get skipTrashcan() {
    return this.getBooleanAttribute('skip_trashcan');
  }
  public set skipTrashcan(value: boolean | cdktf.IResolvable) {
    this._skipTrashcan = value;
  }
  public resetSkipTrashcan() {
    this._skipTrashcan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTrashcanInput() {
    return this._skipTrashcan;
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
      key: cdktf.stringToTerraform(this._key),
      project_key: cdktf.stringToTerraform(this._projectKey),
      search_criteria: packageCleanupPolicySearchCriteriaToTerraform(this._searchCriteria.internalValue),
      skip_trashcan: cdktf.booleanToTerraform(this._skipTrashcan),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_criteria: {
        value: packageCleanupPolicySearchCriteriaToHclTerraform(this._searchCriteria.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PackageCleanupPolicySearchCriteria",
      },
      skip_trashcan: {
        value: cdktf.booleanToHclTerraform(this._skipTrashcan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
