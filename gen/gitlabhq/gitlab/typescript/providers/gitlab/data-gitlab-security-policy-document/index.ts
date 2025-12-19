// https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabSecurityPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Scan execution policy configuration. Multiple policies can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#scan_execution_policy DataGitlabSecurityPolicyDocument#scan_execution_policy}
  */
  readonly scanExecutionPolicy?: DataGitlabSecurityPolicyDocumentScanExecutionPolicy[] | cdktf.IResolvable;
}
export interface DataGitlabSecurityPolicyDocumentScanExecutionPolicyActions {
  /**
  * Type of scan to run. Valid values: `sast`, `secret_detection`, `container_scanning`, `dependency_scanning`, `dast`, `sast_iac`, `cluster_image_scanning`, `api_fuzzing`, `coverage_fuzzing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#scan DataGitlabSecurityPolicyDocument#scan}
  */
  readonly scan: string;
  /**
  * Scanner profile to use for DAST scans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#scanner_profile DataGitlabSecurityPolicyDocument#scanner_profile}
  */
  readonly scannerProfile?: string;
  /**
  * Site profile to use for DAST scans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#site_profile DataGitlabSecurityPolicyDocument#site_profile}
  */
  readonly siteProfile?: string;
  /**
  * Tags to exclude from the scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#tags_to_exclude DataGitlabSecurityPolicyDocument#tags_to_exclude}
  */
  readonly tagsToExclude?: string[];
  /**
  * The template to use for the scan. Valid values: `default`, `latest`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#template DataGitlabSecurityPolicyDocument#template}
  */
  readonly template?: string;
  /**
  * Environment variables to pass to the scan job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#variables DataGitlabSecurityPolicyDocument#variables}
  */
  readonly variables?: { [key: string]: string };
}

export function dataGitlabSecurityPolicyDocumentScanExecutionPolicyActionsToTerraform(struct?: DataGitlabSecurityPolicyDocumentScanExecutionPolicyActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scan: cdktf.stringToTerraform(struct!.scan),
    scanner_profile: cdktf.stringToTerraform(struct!.scannerProfile),
    site_profile: cdktf.stringToTerraform(struct!.siteProfile),
    tags_to_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagsToExclude),
    template: cdktf.stringToTerraform(struct!.template),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
  }
}


export function dataGitlabSecurityPolicyDocumentScanExecutionPolicyActionsToHclTerraform(struct?: DataGitlabSecurityPolicyDocumentScanExecutionPolicyActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scan: {
      value: cdktf.stringToHclTerraform(struct!.scan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scanner_profile: {
      value: cdktf.stringToHclTerraform(struct!.scannerProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_profile: {
      value: cdktf.stringToHclTerraform(struct!.siteProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags_to_exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagsToExclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGitlabSecurityPolicyDocumentScanExecutionPolicyActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabSecurityPolicyDocumentScanExecutionPolicyActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scan !== undefined) {
      hasAnyValues = true;
      internalValueResult.scan = this._scan;
    }
    if (this._scannerProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.scannerProfile = this._scannerProfile;
    }
    if (this._siteProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteProfile = this._siteProfile;
    }
    if (this._tagsToExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagsToExclude = this._tagsToExclude;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabSecurityPolicyDocumentScanExecutionPolicyActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scan = undefined;
      this._scannerProfile = undefined;
      this._siteProfile = undefined;
      this._tagsToExclude = undefined;
      this._template = undefined;
      this._variables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scan = value.scan;
      this._scannerProfile = value.scannerProfile;
      this._siteProfile = value.siteProfile;
      this._tagsToExclude = value.tagsToExclude;
      this._template = value.template;
      this._variables = value.variables;
    }
  }

  // scan - computed: false, optional: false, required: true
  private _scan?: string; 
  public get scan() {
    return this.getStringAttribute('scan');
  }
  public set scan(value: string) {
    this._scan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanInput() {
    return this._scan;
  }

  // scanner_profile - computed: false, optional: true, required: false
  private _scannerProfile?: string; 
  public get scannerProfile() {
    return this.getStringAttribute('scanner_profile');
  }
  public set scannerProfile(value: string) {
    this._scannerProfile = value;
  }
  public resetScannerProfile() {
    this._scannerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannerProfileInput() {
    return this._scannerProfile;
  }

  // site_profile - computed: false, optional: true, required: false
  private _siteProfile?: string; 
  public get siteProfile() {
    return this.getStringAttribute('site_profile');
  }
  public set siteProfile(value: string) {
    this._siteProfile = value;
  }
  public resetSiteProfile() {
    this._siteProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteProfileInput() {
    return this._siteProfile;
  }

  // tags_to_exclude - computed: false, optional: true, required: false
  private _tagsToExclude?: string[]; 
  public get tagsToExclude() {
    return this.getListAttribute('tags_to_exclude');
  }
  public set tagsToExclude(value: string[]) {
    this._tagsToExclude = value;
  }
  public resetTagsToExclude() {
    this._tagsToExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsToExcludeInput() {
    return this._tagsToExclude;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }
}

export class DataGitlabSecurityPolicyDocumentScanExecutionPolicyActionsList extends cdktf.ComplexList {
  public internalValue? : DataGitlabSecurityPolicyDocumentScanExecutionPolicyActions[] | cdktf.IResolvable

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
  public get(index: number): DataGitlabSecurityPolicyDocumentScanExecutionPolicyActionsOutputReference {
    return new DataGitlabSecurityPolicyDocumentScanExecutionPolicyActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjects {
  /**
  * List of project IDs to exclude from this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#excluding DataGitlabSecurityPolicyDocument#excluding}
  */
  readonly excluding?: number[];
  /**
  * List of project IDs to explicitly include in this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#including DataGitlabSecurityPolicyDocument#including}
  */
  readonly including?: number[];
}

export function dataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjectsToTerraform(struct?: DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluding: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.excluding),
    including: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.including),
  }
}


export function dataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjectsToHclTerraform(struct?: DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluding: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.excluding),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    including: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.including),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excluding !== undefined) {
      hasAnyValues = true;
      internalValueResult.excluding = this._excluding;
    }
    if (this._including !== undefined) {
      hasAnyValues = true;
      internalValueResult.including = this._including;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excluding = undefined;
      this._including = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excluding = value.excluding;
      this._including = value.including;
    }
  }

  // excluding - computed: false, optional: true, required: false
  private _excluding?: number[]; 
  public get excluding() {
    return this.getNumberListAttribute('excluding');
  }
  public set excluding(value: number[]) {
    this._excluding = value;
  }
  public resetExcluding() {
    this._excluding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludingInput() {
    return this._excluding;
  }

  // including - computed: false, optional: true, required: false
  private _including?: number[]; 
  public get including() {
    return this.getNumberListAttribute('including');
  }
  public set including(value: number[]) {
    this._including = value;
  }
  public resetIncluding() {
    this._including = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includingInput() {
    return this._including;
  }
}
export interface DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScope {
  /**
  * Compliance framework names to scope the policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#compliance_frameworks DataGitlabSecurityPolicyDocument#compliance_frameworks}
  */
  readonly complianceFrameworks?: string[];
  /**
  * Project scope configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#projects DataGitlabSecurityPolicyDocument#projects}
  */
  readonly projects?: DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjects;
}

export function dataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeToTerraform(struct?: DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliance_frameworks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.complianceFrameworks),
    projects: dataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjectsToTerraform(struct!.projects),
  }
}


export function dataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeToHclTerraform(struct?: DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compliance_frameworks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.complianceFrameworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    projects: {
      value: dataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjectsToHclTerraform(struct!.projects),
      isBlock: true,
      type: "struct",
      storageClassType: "DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjects",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complianceFrameworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceFrameworks = this._complianceFrameworks;
    }
    if (this._projects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._complianceFrameworks = undefined;
      this._projects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._complianceFrameworks = value.complianceFrameworks;
      this._projects.internalValue = value.projects;
    }
  }

  // compliance_frameworks - computed: false, optional: true, required: false
  private _complianceFrameworks?: string[]; 
  public get complianceFrameworks() {
    return this.getListAttribute('compliance_frameworks');
  }
  public set complianceFrameworks(value: string[]) {
    this._complianceFrameworks = value;
  }
  public resetComplianceFrameworks() {
    this._complianceFrameworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceFrameworksInput() {
    return this._complianceFrameworks;
  }

  // projects - computed: false, optional: true, required: false
  private _projects = new DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjectsOutputReference(this, "projects");
  public get projects() {
    return this._projects;
  }
  public putProjects(value: DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeProjects) {
    this._projects.internalValue = value;
  }
  public resetProjects() {
    this._projects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }
}
export interface DataGitlabSecurityPolicyDocumentScanExecutionPolicyRules {
  /**
  * Kubernetes agents configuration for agent-based policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#agents DataGitlabSecurityPolicyDocument#agents}
  */
  readonly agents?: { [key: string]: string };
  /**
  * Branches to exclude from the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#branch_exceptions DataGitlabSecurityPolicyDocument#branch_exceptions}
  */
  readonly branchExceptions?: string[];
  /**
  * Type of branches to match. Valid values: `all`, `protected`, `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#branch_type DataGitlabSecurityPolicyDocument#branch_type}
  */
  readonly branchType?: string;
  /**
  * Branch names or patterns to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#branches DataGitlabSecurityPolicyDocument#branches}
  */
  readonly branches?: string[];
  /**
  * Cron expression for schedule type rules (e.g., `* /15 * * * *` for every 15 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#cadence DataGitlabSecurityPolicyDocument#cadence}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly cadence?: string;
  /**
  * Type of rule. Valid values: `pipeline`, `schedule`, `agent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#type DataGitlabSecurityPolicyDocument#type}
  */
  readonly type: string;
}

export function dataGitlabSecurityPolicyDocumentScanExecutionPolicyRulesToTerraform(struct?: DataGitlabSecurityPolicyDocumentScanExecutionPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agents: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.agents),
    branch_exceptions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.branchExceptions),
    branch_type: cdktf.stringToTerraform(struct!.branchType),
    branches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.branches),
    cadence: cdktf.stringToTerraform(struct!.cadence),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataGitlabSecurityPolicyDocumentScanExecutionPolicyRulesToHclTerraform(struct?: DataGitlabSecurityPolicyDocumentScanExecutionPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agents: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.agents),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    branch_exceptions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.branchExceptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    branch_type: {
      value: cdktf.stringToHclTerraform(struct!.branchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.branches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cadence: {
      value: cdktf.stringToHclTerraform(struct!.cadence),
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

export class DataGitlabSecurityPolicyDocumentScanExecutionPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabSecurityPolicyDocumentScanExecutionPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agents !== undefined) {
      hasAnyValues = true;
      internalValueResult.agents = this._agents;
    }
    if (this._branchExceptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchExceptions = this._branchExceptions;
    }
    if (this._branchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchType = this._branchType;
    }
    if (this._branches !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches;
    }
    if (this._cadence !== undefined) {
      hasAnyValues = true;
      internalValueResult.cadence = this._cadence;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabSecurityPolicyDocumentScanExecutionPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agents = undefined;
      this._branchExceptions = undefined;
      this._branchType = undefined;
      this._branches = undefined;
      this._cadence = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agents = value.agents;
      this._branchExceptions = value.branchExceptions;
      this._branchType = value.branchType;
      this._branches = value.branches;
      this._cadence = value.cadence;
      this._type = value.type;
    }
  }

  // agents - computed: false, optional: true, required: false
  private _agents?: { [key: string]: string }; 
  public get agents() {
    return this.getStringMapAttribute('agents');
  }
  public set agents(value: { [key: string]: string }) {
    this._agents = value;
  }
  public resetAgents() {
    this._agents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents;
  }

  // branch_exceptions - computed: false, optional: true, required: false
  private _branchExceptions?: string[]; 
  public get branchExceptions() {
    return this.getListAttribute('branch_exceptions');
  }
  public set branchExceptions(value: string[]) {
    this._branchExceptions = value;
  }
  public resetBranchExceptions() {
    this._branchExceptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchExceptionsInput() {
    return this._branchExceptions;
  }

  // branch_type - computed: false, optional: true, required: false
  private _branchType?: string; 
  public get branchType() {
    return this.getStringAttribute('branch_type');
  }
  public set branchType(value: string) {
    this._branchType = value;
  }
  public resetBranchType() {
    this._branchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchTypeInput() {
    return this._branchType;
  }

  // branches - computed: false, optional: true, required: false
  private _branches?: string[]; 
  public get branches() {
    return this.getListAttribute('branches');
  }
  public set branches(value: string[]) {
    this._branches = value;
  }
  public resetBranches() {
    this._branches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches;
  }

  // cadence - computed: false, optional: true, required: false
  private _cadence?: string; 
  public get cadence() {
    return this.getStringAttribute('cadence');
  }
  public set cadence(value: string) {
    this._cadence = value;
  }
  public resetCadence() {
    this._cadence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cadenceInput() {
    return this._cadence;
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

export class DataGitlabSecurityPolicyDocumentScanExecutionPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : DataGitlabSecurityPolicyDocumentScanExecutionPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): DataGitlabSecurityPolicyDocumentScanExecutionPolicyRulesOutputReference {
    return new DataGitlabSecurityPolicyDocumentScanExecutionPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCi {
  /**
  * Allow (true) or prevent (false) the use of skip-ci directive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#allowed DataGitlabSecurityPolicyDocument#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
}

export function dataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCiToTerraform(struct?: DataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
  }
}


export function dataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCiToHclTerraform(struct?: DataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCi | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
    }
  }

  // allowed - computed: false, optional: false, required: true
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }
}
export interface DataGitlabSecurityPolicyDocumentScanExecutionPolicy {
  /**
  * Actions to execute when rules match. At least one action is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#actions DataGitlabSecurityPolicyDocument#actions}
  */
  readonly actions: DataGitlabSecurityPolicyDocumentScanExecutionPolicyActions[] | cdktf.IResolvable;
  /**
  * Description of the scan execution policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#description DataGitlabSecurityPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Whether the policy is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#enabled DataGitlabSecurityPolicyDocument#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Name of the scan execution policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#name DataGitlabSecurityPolicyDocument#name}
  */
  readonly name: string;
  /**
  * Scope configuration to limit which projects the policy applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#policy_scope DataGitlabSecurityPolicyDocument#policy_scope}
  */
  readonly policyScope?: DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScope;
  /**
  * Rules that trigger the policy. At least one rule is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#rules DataGitlabSecurityPolicyDocument#rules}
  */
  readonly rules: DataGitlabSecurityPolicyDocumentScanExecutionPolicyRules[] | cdktf.IResolvable;
  /**
  * Control whether users can use the skip-ci directive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#skip_ci DataGitlabSecurityPolicyDocument#skip_ci}
  */
  readonly skipCi?: DataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCi;
}

export function dataGitlabSecurityPolicyDocumentScanExecutionPolicyToTerraform(struct?: DataGitlabSecurityPolicyDocumentScanExecutionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(dataGitlabSecurityPolicyDocumentScanExecutionPolicyActionsToTerraform, false)(struct!.actions),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    policy_scope: dataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeToTerraform(struct!.policyScope),
    rules: cdktf.listMapper(dataGitlabSecurityPolicyDocumentScanExecutionPolicyRulesToTerraform, false)(struct!.rules),
    skip_ci: dataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCiToTerraform(struct!.skipCi),
  }
}


export function dataGitlabSecurityPolicyDocumentScanExecutionPolicyToHclTerraform(struct?: DataGitlabSecurityPolicyDocumentScanExecutionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(dataGitlabSecurityPolicyDocumentScanExecutionPolicyActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DataGitlabSecurityPolicyDocumentScanExecutionPolicyActionsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
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
    policy_scope: {
      value: dataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeToHclTerraform(struct!.policyScope),
      isBlock: true,
      type: "struct",
      storageClassType: "DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScope",
    },
    rules: {
      value: cdktf.listMapperHcl(dataGitlabSecurityPolicyDocumentScanExecutionPolicyRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataGitlabSecurityPolicyDocumentScanExecutionPolicyRulesList",
    },
    skip_ci: {
      value: dataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCiToHclTerraform(struct!.skipCi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGitlabSecurityPolicyDocumentScanExecutionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabSecurityPolicyDocumentScanExecutionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyScope = this._policyScope?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._skipCi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCi = this._skipCi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabSecurityPolicyDocumentScanExecutionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._policyScope.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._skipCi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._description = value.description;
      this._enabled = value.enabled;
      this._name = value.name;
      this._policyScope.internalValue = value.policyScope;
      this._rules.internalValue = value.rules;
      this._skipCi.internalValue = value.skipCi;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new DataGitlabSecurityPolicyDocumentScanExecutionPolicyActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataGitlabSecurityPolicyDocumentScanExecutionPolicyActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // policy_scope - computed: false, optional: true, required: false
  private _policyScope = new DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScopeOutputReference(this, "policy_scope");
  public get policyScope() {
    return this._policyScope;
  }
  public putPolicyScope(value: DataGitlabSecurityPolicyDocumentScanExecutionPolicyPolicyScope) {
    this._policyScope.internalValue = value;
  }
  public resetPolicyScope() {
    this._policyScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyScopeInput() {
    return this._policyScope.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataGitlabSecurityPolicyDocumentScanExecutionPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataGitlabSecurityPolicyDocumentScanExecutionPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // skip_ci - computed: false, optional: true, required: false
  private _skipCi = new DataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCiOutputReference(this, "skip_ci");
  public get skipCi() {
    return this._skipCi;
  }
  public putSkipCi(value: DataGitlabSecurityPolicyDocumentScanExecutionPolicySkipCi) {
    this._skipCi.internalValue = value;
  }
  public resetSkipCi() {
    this._skipCi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCiInput() {
    return this._skipCi.internalValue;
  }
}

export class DataGitlabSecurityPolicyDocumentScanExecutionPolicyList extends cdktf.ComplexList {
  public internalValue? : DataGitlabSecurityPolicyDocumentScanExecutionPolicy[] | cdktf.IResolvable

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
  public get(index: number): DataGitlabSecurityPolicyDocumentScanExecutionPolicyOutputReference {
    return new DataGitlabSecurityPolicyDocumentScanExecutionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document gitlab_security_policy_document}
*/
export class DataGitlabSecurityPolicyDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_security_policy_document";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabSecurityPolicyDocument resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabSecurityPolicyDocument to import
  * @param importFromId The id of the existing DataGitlabSecurityPolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabSecurityPolicyDocument to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_security_policy_document", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/security_policy_document gitlab_security_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabSecurityPolicyDocumentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGitlabSecurityPolicyDocumentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab_security_policy_document',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.7.0',
        providerVersionConstraint: '18.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._scanExecutionPolicy.internalValue = config.scanExecutionPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // scan_execution_policy - computed: false, optional: true, required: false
  private _scanExecutionPolicy = new DataGitlabSecurityPolicyDocumentScanExecutionPolicyList(this, "scan_execution_policy", false);
  public get scanExecutionPolicy() {
    return this._scanExecutionPolicy;
  }
  public putScanExecutionPolicy(value: DataGitlabSecurityPolicyDocumentScanExecutionPolicy[] | cdktf.IResolvable) {
    this._scanExecutionPolicy.internalValue = value;
  }
  public resetScanExecutionPolicy() {
    this._scanExecutionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanExecutionPolicyInput() {
    return this._scanExecutionPolicy.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      scan_execution_policy: cdktf.listMapper(dataGitlabSecurityPolicyDocumentScanExecutionPolicyToTerraform, false)(this._scanExecutionPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      scan_execution_policy: {
        value: cdktf.listMapperHcl(dataGitlabSecurityPolicyDocumentScanExecutionPolicyToHclTerraform, false)(this._scanExecutionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGitlabSecurityPolicyDocumentScanExecutionPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
