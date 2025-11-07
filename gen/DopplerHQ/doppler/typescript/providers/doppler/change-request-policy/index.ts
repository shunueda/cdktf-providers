// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChangeRequestPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the change request policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#description ChangeRequestPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#id ChangeRequestPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the change request policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#name ChangeRequestPolicy#name}
  */
  readonly name: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#rules ChangeRequestPolicy#rules}
  */
  readonly rules: ChangeRequestPolicyRules;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#targets ChangeRequestPolicy#targets}
  */
  readonly targets: ChangeRequestPolicyTargets;
}
export interface ChangeRequestPolicyRulesRequiredReviewers {
  /**
  * The number of approvals a change request must receive before it can be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#count ChangeRequestPolicy#count}
  */
  readonly count: number;
  /**
  * If set, only approvals from members of these groups will satisfy this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#group_slugs ChangeRequestPolicy#group_slugs}
  */
  readonly groupSlugs?: string[];
  /**
  * If set, only approvals from these users will satisfy this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#user_slugs ChangeRequestPolicy#user_slugs}
  */
  readonly userSlugs?: string[];
}

export function changeRequestPolicyRulesRequiredReviewersToTerraform(struct?: ChangeRequestPolicyRulesRequiredReviewers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    group_slugs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupSlugs),
    user_slugs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userSlugs),
  }
}


export function changeRequestPolicyRulesRequiredReviewersToHclTerraform(struct?: ChangeRequestPolicyRulesRequiredReviewers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_slugs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupSlugs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_slugs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userSlugs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChangeRequestPolicyRulesRequiredReviewersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChangeRequestPolicyRulesRequiredReviewers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._groupSlugs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSlugs = this._groupSlugs;
    }
    if (this._userSlugs !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSlugs = this._userSlugs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChangeRequestPolicyRulesRequiredReviewers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._groupSlugs = undefined;
      this._userSlugs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._groupSlugs = value.groupSlugs;
      this._userSlugs = value.userSlugs;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // group_slugs - computed: false, optional: true, required: false
  private _groupSlugs?: string[]; 
  public get groupSlugs() {
    return cdktf.Fn.tolist(this.getListAttribute('group_slugs'));
  }
  public set groupSlugs(value: string[]) {
    this._groupSlugs = value;
  }
  public resetGroupSlugs() {
    this._groupSlugs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSlugsInput() {
    return this._groupSlugs;
  }

  // user_slugs - computed: false, optional: true, required: false
  private _userSlugs?: string[]; 
  public get userSlugs() {
    return cdktf.Fn.tolist(this.getListAttribute('user_slugs'));
  }
  public set userSlugs(value: string[]) {
    this._userSlugs = value;
  }
  public resetUserSlugs() {
    this._userSlugs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSlugsInput() {
    return this._userSlugs;
  }
}

export class ChangeRequestPolicyRulesRequiredReviewersList extends cdktf.ComplexList {
  public internalValue? : ChangeRequestPolicyRulesRequiredReviewers[] | cdktf.IResolvable

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
  public get(index: number): ChangeRequestPolicyRulesRequiredReviewersOutputReference {
    return new ChangeRequestPolicyRulesRequiredReviewersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChangeRequestPolicyRules {
  /**
  * If set, the strategy used to automatically assign reviewers to CRs targeted by this policy. Valid values: all, matchCount, never (default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#auto_assign_reviewers ChangeRequestPolicy#auto_assign_reviewers}
  */
  readonly autoAssignReviewers?: string;
  /**
  * If true, approvals from the author of a change request will be excluded when evaluating this policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#disallow_self_review ChangeRequestPolicy#disallow_self_review}
  */
  readonly disallowSelfReview?: boolean | cdktf.IResolvable;
  /**
  * required_reviewers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#required_reviewers ChangeRequestPolicy#required_reviewers}
  */
  readonly requiredReviewers?: ChangeRequestPolicyRulesRequiredReviewers[] | cdktf.IResolvable;
}

export function changeRequestPolicyRulesToTerraform(struct?: ChangeRequestPolicyRulesOutputReference | ChangeRequestPolicyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_assign_reviewers: cdktf.stringToTerraform(struct!.autoAssignReviewers),
    disallow_self_review: cdktf.booleanToTerraform(struct!.disallowSelfReview),
    required_reviewers: cdktf.listMapper(changeRequestPolicyRulesRequiredReviewersToTerraform, true)(struct!.requiredReviewers),
  }
}


export function changeRequestPolicyRulesToHclTerraform(struct?: ChangeRequestPolicyRulesOutputReference | ChangeRequestPolicyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_assign_reviewers: {
      value: cdktf.stringToHclTerraform(struct!.autoAssignReviewers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disallow_self_review: {
      value: cdktf.booleanToHclTerraform(struct!.disallowSelfReview),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_reviewers: {
      value: cdktf.listMapperHcl(changeRequestPolicyRulesRequiredReviewersToHclTerraform, true)(struct!.requiredReviewers),
      isBlock: true,
      type: "set",
      storageClassType: "ChangeRequestPolicyRulesRequiredReviewersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChangeRequestPolicyRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChangeRequestPolicyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoAssignReviewers !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAssignReviewers = this._autoAssignReviewers;
    }
    if (this._disallowSelfReview !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowSelfReview = this._disallowSelfReview;
    }
    if (this._requiredReviewers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredReviewers = this._requiredReviewers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChangeRequestPolicyRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoAssignReviewers = undefined;
      this._disallowSelfReview = undefined;
      this._requiredReviewers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoAssignReviewers = value.autoAssignReviewers;
      this._disallowSelfReview = value.disallowSelfReview;
      this._requiredReviewers.internalValue = value.requiredReviewers;
    }
  }

  // auto_assign_reviewers - computed: false, optional: true, required: false
  private _autoAssignReviewers?: string; 
  public get autoAssignReviewers() {
    return this.getStringAttribute('auto_assign_reviewers');
  }
  public set autoAssignReviewers(value: string) {
    this._autoAssignReviewers = value;
  }
  public resetAutoAssignReviewers() {
    this._autoAssignReviewers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignReviewersInput() {
    return this._autoAssignReviewers;
  }

  // disallow_self_review - computed: false, optional: true, required: false
  private _disallowSelfReview?: boolean | cdktf.IResolvable; 
  public get disallowSelfReview() {
    return this.getBooleanAttribute('disallow_self_review');
  }
  public set disallowSelfReview(value: boolean | cdktf.IResolvable) {
    this._disallowSelfReview = value;
  }
  public resetDisallowSelfReview() {
    this._disallowSelfReview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowSelfReviewInput() {
    return this._disallowSelfReview;
  }

  // required_reviewers - computed: false, optional: true, required: false
  private _requiredReviewers = new ChangeRequestPolicyRulesRequiredReviewersList(this, "required_reviewers", true);
  public get requiredReviewers() {
    return this._requiredReviewers;
  }
  public putRequiredReviewers(value: ChangeRequestPolicyRulesRequiredReviewers[] | cdktf.IResolvable) {
    this._requiredReviewers.internalValue = value;
  }
  public resetRequiredReviewers() {
    this._requiredReviewers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredReviewersInput() {
    return this._requiredReviewers.internalValue;
  }
}
export interface ChangeRequestPolicyTargetsProject {
  /**
  * Whether or not the policy applies to all configs in the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#all ChangeRequestPolicy#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Specific configs the policy applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#config_names ChangeRequestPolicy#config_names}
  */
  readonly configNames?: string[];
  /**
  * Entire environments the policy applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#environment_slugs ChangeRequestPolicy#environment_slugs}
  */
  readonly environmentSlugs?: string[];
  /**
  * The name of the project to apply the policy to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#project_name ChangeRequestPolicy#project_name}
  */
  readonly projectName: string;
}

export function changeRequestPolicyTargetsProjectToTerraform(struct?: ChangeRequestPolicyTargetsProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    config_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configNames),
    environment_slugs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environmentSlugs),
    project_name: cdktf.stringToTerraform(struct!.projectName),
  }
}


export function changeRequestPolicyTargetsProjectToHclTerraform(struct?: ChangeRequestPolicyTargetsProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    environment_slugs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environmentSlugs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChangeRequestPolicyTargetsProjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChangeRequestPolicyTargetsProject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._configNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.configNames = this._configNames;
    }
    if (this._environmentSlugs !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentSlugs = this._environmentSlugs;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChangeRequestPolicyTargetsProject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._configNames = undefined;
      this._environmentSlugs = undefined;
      this._projectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._configNames = value.configNames;
      this._environmentSlugs = value.environmentSlugs;
      this._projectName = value.projectName;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // config_names - computed: false, optional: true, required: false
  private _configNames?: string[]; 
  public get configNames() {
    return cdktf.Fn.tolist(this.getListAttribute('config_names'));
  }
  public set configNames(value: string[]) {
    this._configNames = value;
  }
  public resetConfigNames() {
    this._configNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configNamesInput() {
    return this._configNames;
  }

  // environment_slugs - computed: false, optional: true, required: false
  private _environmentSlugs?: string[]; 
  public get environmentSlugs() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_slugs'));
  }
  public set environmentSlugs(value: string[]) {
    this._environmentSlugs = value;
  }
  public resetEnvironmentSlugs() {
    this._environmentSlugs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentSlugsInput() {
    return this._environmentSlugs;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }
}

export class ChangeRequestPolicyTargetsProjectList extends cdktf.ComplexList {
  public internalValue? : ChangeRequestPolicyTargetsProject[] | cdktf.IResolvable

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
  public get(index: number): ChangeRequestPolicyTargetsProjectOutputReference {
    return new ChangeRequestPolicyTargetsProjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChangeRequestPolicyTargets {
  /**
  * Whether or not the policy applies to all projects in the workplace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#all_projects ChangeRequestPolicy#all_projects}
  */
  readonly allProjects?: boolean | cdktf.IResolvable;
  /**
  * project block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#project ChangeRequestPolicy#project}
  */
  readonly project?: ChangeRequestPolicyTargetsProject[] | cdktf.IResolvable;
}

export function changeRequestPolicyTargetsToTerraform(struct?: ChangeRequestPolicyTargetsOutputReference | ChangeRequestPolicyTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_projects: cdktf.booleanToTerraform(struct!.allProjects),
    project: cdktf.listMapper(changeRequestPolicyTargetsProjectToTerraform, true)(struct!.project),
  }
}


export function changeRequestPolicyTargetsToHclTerraform(struct?: ChangeRequestPolicyTargetsOutputReference | ChangeRequestPolicyTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_projects: {
      value: cdktf.booleanToHclTerraform(struct!.allProjects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project: {
      value: cdktf.listMapperHcl(changeRequestPolicyTargetsProjectToHclTerraform, true)(struct!.project),
      isBlock: true,
      type: "set",
      storageClassType: "ChangeRequestPolicyTargetsProjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChangeRequestPolicyTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChangeRequestPolicyTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.allProjects = this._allProjects;
    }
    if (this._project?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChangeRequestPolicyTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allProjects = undefined;
      this._project.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allProjects = value.allProjects;
      this._project.internalValue = value.project;
    }
  }

  // all_projects - computed: false, optional: true, required: false
  private _allProjects?: boolean | cdktf.IResolvable; 
  public get allProjects() {
    return this.getBooleanAttribute('all_projects');
  }
  public set allProjects(value: boolean | cdktf.IResolvable) {
    this._allProjects = value;
  }
  public resetAllProjects() {
    this._allProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allProjectsInput() {
    return this._allProjects;
  }

  // project - computed: false, optional: true, required: false
  private _project = new ChangeRequestPolicyTargetsProjectList(this, "project", true);
  public get project() {
    return this._project;
  }
  public putProject(value: ChangeRequestPolicyTargetsProject[] | cdktf.IResolvable) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy doppler_change_request_policy}
*/
export class ChangeRequestPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_change_request_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChangeRequestPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChangeRequestPolicy to import
  * @param importFromId The id of the existing ChangeRequestPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChangeRequestPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_change_request_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/change_request_policy doppler_change_request_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChangeRequestPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ChangeRequestPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_change_request_policy',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._rules.internalValue = config.rules;
    this._targets.internalValue = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new ChangeRequestPolicyRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: ChangeRequestPolicyRules) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new ChangeRequestPolicyTargetsOutputReference(this, "targets");
  public get targets() {
    return this._targets;
  }
  public putTargets(value: ChangeRequestPolicyTargets) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rules: changeRequestPolicyRulesToTerraform(this._rules.internalValue),
      targets: changeRequestPolicyTargetsToTerraform(this._targets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: changeRequestPolicyRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChangeRequestPolicyRulesList",
      },
      targets: {
        value: changeRequestPolicyTargetsToHclTerraform(this._targets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChangeRequestPolicyTargetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
