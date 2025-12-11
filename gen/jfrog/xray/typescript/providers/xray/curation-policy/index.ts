// https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CurationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the condition used by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#condition_id CurationPolicy#condition_id}
  */
  readonly conditionId: string;
  /**
  * List of JFrog Access groups used by waiver_request_config=manual
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#decision_owners CurationPolicy#decision_owners}
  */
  readonly decisionOwners?: string[];
  /**
  * List of label waivers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#label_waivers CurationPolicy#label_waivers}
  */
  readonly labelWaivers?: CurationPolicyLabelWaivers[] | cdktf.IResolvable;
  /**
  * Name of policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#name CurationPolicy#name}
  */
  readonly name: string;
  /**
  * List of email addresses that receive notifications when the policy causes a package to be blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#notify_emails CurationPolicy#notify_emails}
  */
  readonly notifyEmails?: string[];
  /**
  * Used with scope: pkg_types. List of package types to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#pkg_types_include CurationPolicy#pkg_types_include}
  */
  readonly pkgTypesInclude?: string[];
  /**
  * One of: block or dry_run. Dry run policies only accumulate audit logs, they don't block packages from being downloaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#policy_action CurationPolicy#policy_action}
  */
  readonly policyAction: string;
  /**
  * Used with scope: all_repos. List of repositories to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#repo_exclude CurationPolicy#repo_exclude}
  */
  readonly repoExclude?: string[];
  /**
  * Used with scope: specific_repos. List of repositories to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#repo_include CurationPolicy#repo_include}
  */
  readonly repoInclude?: string[];
  /**
  * One of: all_repos, specific_repos or pkg_types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#scope CurationPolicy#scope}
  */
  readonly scope: string;
  /**
  * One of: forbidden, manual or auto_approved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#waiver_request_config CurationPolicy#waiver_request_config}
  */
  readonly waiverRequestConfig?: string;
  /**
  * List of package waivers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#waivers CurationPolicy#waivers}
  */
  readonly waivers?: CurationPolicyWaivers[] | cdktf.IResolvable;
}
export interface CurationPolicyLabelWaivers {
  /**
  * A way to document why the waiver was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#justification CurationPolicy#justification}
  */
  readonly justification: string;
  /**
  * A label from the custom Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#label CurationPolicy#label}
  */
  readonly label: string;
}

export function curationPolicyLabelWaiversToTerraform(struct?: CurationPolicyLabelWaivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    justification: cdktf.stringToTerraform(struct!.justification),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function curationPolicyLabelWaiversToHclTerraform(struct?: CurationPolicyLabelWaivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    justification: {
      value: cdktf.stringToHclTerraform(struct!.justification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CurationPolicyLabelWaiversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CurationPolicyLabelWaivers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._justification !== undefined) {
      hasAnyValues = true;
      internalValueResult.justification = this._justification;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CurationPolicyLabelWaivers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._justification = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._justification = value.justification;
      this._label = value.label;
    }
  }

  // justification - computed: false, optional: false, required: true
  private _justification?: string; 
  public get justification() {
    return this.getStringAttribute('justification');
  }
  public set justification(value: string) {
    this._justification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationInput() {
    return this._justification;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class CurationPolicyLabelWaiversList extends cdktf.ComplexList {
  public internalValue? : CurationPolicyLabelWaivers[] | cdktf.IResolvable

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
  public get(index: number): CurationPolicyLabelWaiversOutputReference {
    return new CurationPolicyLabelWaiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CurationPolicyWaivers {
  /**
  * Set to true to indicate all versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#all_versions CurationPolicy#all_versions}
  */
  readonly allVersions?: boolean | cdktf.IResolvable;
  /**
  * A way to document why the waiver was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#justification CurationPolicy#justification}
  */
  readonly justification: string;
  /**
  * Name of package from Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#pkg_name CurationPolicy#pkg_name}
  */
  readonly pkgName: string;
  /**
  * Package type. One of: npm, PyPI, Maven, Go, NuGet, Conan, Gems, Gradle, HuggingFaceML or Docker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#pkg_type CurationPolicy#pkg_type}
  */
  readonly pkgType: string;
  /**
  * List of specific versions of the package from the Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#pkg_versions CurationPolicy#pkg_versions}
  */
  readonly pkgVersions?: string[];
}

export function curationPolicyWaiversToTerraform(struct?: CurationPolicyWaivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_versions: cdktf.booleanToTerraform(struct!.allVersions),
    justification: cdktf.stringToTerraform(struct!.justification),
    pkg_name: cdktf.stringToTerraform(struct!.pkgName),
    pkg_type: cdktf.stringToTerraform(struct!.pkgType),
    pkg_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pkgVersions),
  }
}


export function curationPolicyWaiversToHclTerraform(struct?: CurationPolicyWaivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_versions: {
      value: cdktf.booleanToHclTerraform(struct!.allVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    justification: {
      value: cdktf.stringToHclTerraform(struct!.justification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkg_name: {
      value: cdktf.stringToHclTerraform(struct!.pkgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkg_type: {
      value: cdktf.stringToHclTerraform(struct!.pkgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkg_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pkgVersions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CurationPolicyWaiversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CurationPolicyWaivers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allVersions = this._allVersions;
    }
    if (this._justification !== undefined) {
      hasAnyValues = true;
      internalValueResult.justification = this._justification;
    }
    if (this._pkgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkgName = this._pkgName;
    }
    if (this._pkgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkgType = this._pkgType;
    }
    if (this._pkgVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkgVersions = this._pkgVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CurationPolicyWaivers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allVersions = undefined;
      this._justification = undefined;
      this._pkgName = undefined;
      this._pkgType = undefined;
      this._pkgVersions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allVersions = value.allVersions;
      this._justification = value.justification;
      this._pkgName = value.pkgName;
      this._pkgType = value.pkgType;
      this._pkgVersions = value.pkgVersions;
    }
  }

  // all_versions - computed: false, optional: true, required: false
  private _allVersions?: boolean | cdktf.IResolvable; 
  public get allVersions() {
    return this.getBooleanAttribute('all_versions');
  }
  public set allVersions(value: boolean | cdktf.IResolvable) {
    this._allVersions = value;
  }
  public resetAllVersions() {
    this._allVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allVersionsInput() {
    return this._allVersions;
  }

  // justification - computed: false, optional: false, required: true
  private _justification?: string; 
  public get justification() {
    return this.getStringAttribute('justification');
  }
  public set justification(value: string) {
    this._justification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationInput() {
    return this._justification;
  }

  // pkg_name - computed: false, optional: false, required: true
  private _pkgName?: string; 
  public get pkgName() {
    return this.getStringAttribute('pkg_name');
  }
  public set pkgName(value: string) {
    this._pkgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgNameInput() {
    return this._pkgName;
  }

  // pkg_type - computed: false, optional: false, required: true
  private _pkgType?: string; 
  public get pkgType() {
    return this.getStringAttribute('pkg_type');
  }
  public set pkgType(value: string) {
    this._pkgType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgTypeInput() {
    return this._pkgType;
  }

  // pkg_versions - computed: false, optional: true, required: false
  private _pkgVersions?: string[]; 
  public get pkgVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('pkg_versions'));
  }
  public set pkgVersions(value: string[]) {
    this._pkgVersions = value;
  }
  public resetPkgVersions() {
    this._pkgVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgVersionsInput() {
    return this._pkgVersions;
  }
}

export class CurationPolicyWaiversList extends cdktf.ComplexList {
  public internalValue? : CurationPolicyWaivers[] | cdktf.IResolvable

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
  public get(index: number): CurationPolicyWaiversOutputReference {
    return new CurationPolicyWaiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy xray_curation_policy}
*/
export class CurationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_curation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CurationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CurationPolicy to import
  * @param importFromId The id of the existing CurationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CurationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_curation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/curation_policy xray_curation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CurationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CurationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_curation_policy',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.4',
        providerVersionConstraint: '3.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conditionId = config.conditionId;
    this._decisionOwners = config.decisionOwners;
    this._labelWaivers.internalValue = config.labelWaivers;
    this._name = config.name;
    this._notifyEmails = config.notifyEmails;
    this._pkgTypesInclude = config.pkgTypesInclude;
    this._policyAction = config.policyAction;
    this._repoExclude = config.repoExclude;
    this._repoInclude = config.repoInclude;
    this._scope = config.scope;
    this._waiverRequestConfig = config.waiverRequestConfig;
    this._waivers.internalValue = config.waivers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition_id - computed: false, optional: false, required: true
  private _conditionId?: string; 
  public get conditionId() {
    return this.getStringAttribute('condition_id');
  }
  public set conditionId(value: string) {
    this._conditionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionIdInput() {
    return this._conditionId;
  }

  // decision_owners - computed: false, optional: true, required: false
  private _decisionOwners?: string[]; 
  public get decisionOwners() {
    return cdktf.Fn.tolist(this.getListAttribute('decision_owners'));
  }
  public set decisionOwners(value: string[]) {
    this._decisionOwners = value;
  }
  public resetDecisionOwners() {
    this._decisionOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionOwnersInput() {
    return this._decisionOwners;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label_waivers - computed: false, optional: true, required: false
  private _labelWaivers = new CurationPolicyLabelWaiversList(this, "label_waivers", true);
  public get labelWaivers() {
    return this._labelWaivers;
  }
  public putLabelWaivers(value: CurationPolicyLabelWaivers[] | cdktf.IResolvable) {
    this._labelWaivers.internalValue = value;
  }
  public resetLabelWaivers() {
    this._labelWaivers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelWaiversInput() {
    return this._labelWaivers.internalValue;
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

  // notify_emails - computed: false, optional: true, required: false
  private _notifyEmails?: string[]; 
  public get notifyEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_emails'));
  }
  public set notifyEmails(value: string[]) {
    this._notifyEmails = value;
  }
  public resetNotifyEmails() {
    this._notifyEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEmailsInput() {
    return this._notifyEmails;
  }

  // pkg_types_include - computed: false, optional: true, required: false
  private _pkgTypesInclude?: string[]; 
  public get pkgTypesInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('pkg_types_include'));
  }
  public set pkgTypesInclude(value: string[]) {
    this._pkgTypesInclude = value;
  }
  public resetPkgTypesInclude() {
    this._pkgTypesInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgTypesIncludeInput() {
    return this._pkgTypesInclude;
  }

  // policy_action - computed: false, optional: false, required: true
  private _policyAction?: string; 
  public get policyAction() {
    return this.getStringAttribute('policy_action');
  }
  public set policyAction(value: string) {
    this._policyAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyActionInput() {
    return this._policyAction;
  }

  // repo_exclude - computed: false, optional: true, required: false
  private _repoExclude?: string[]; 
  public get repoExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('repo_exclude'));
  }
  public set repoExclude(value: string[]) {
    this._repoExclude = value;
  }
  public resetRepoExclude() {
    this._repoExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoExcludeInput() {
    return this._repoExclude;
  }

  // repo_include - computed: false, optional: true, required: false
  private _repoInclude?: string[]; 
  public get repoInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('repo_include'));
  }
  public set repoInclude(value: string[]) {
    this._repoInclude = value;
  }
  public resetRepoInclude() {
    this._repoInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoIncludeInput() {
    return this._repoInclude;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // waiver_request_config - computed: false, optional: true, required: false
  private _waiverRequestConfig?: string; 
  public get waiverRequestConfig() {
    return this.getStringAttribute('waiver_request_config');
  }
  public set waiverRequestConfig(value: string) {
    this._waiverRequestConfig = value;
  }
  public resetWaiverRequestConfig() {
    this._waiverRequestConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waiverRequestConfigInput() {
    return this._waiverRequestConfig;
  }

  // waivers - computed: false, optional: true, required: false
  private _waivers = new CurationPolicyWaiversList(this, "waivers", true);
  public get waivers() {
    return this._waivers;
  }
  public putWaivers(value: CurationPolicyWaivers[] | cdktf.IResolvable) {
    this._waivers.internalValue = value;
  }
  public resetWaivers() {
    this._waivers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waiversInput() {
    return this._waivers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition_id: cdktf.stringToTerraform(this._conditionId),
      decision_owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._decisionOwners),
      label_waivers: cdktf.listMapper(curationPolicyLabelWaiversToTerraform, false)(this._labelWaivers.internalValue),
      name: cdktf.stringToTerraform(this._name),
      notify_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifyEmails),
      pkg_types_include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pkgTypesInclude),
      policy_action: cdktf.stringToTerraform(this._policyAction),
      repo_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repoExclude),
      repo_include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repoInclude),
      scope: cdktf.stringToTerraform(this._scope),
      waiver_request_config: cdktf.stringToTerraform(this._waiverRequestConfig),
      waivers: cdktf.listMapper(curationPolicyWaiversToTerraform, false)(this._waivers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition_id: {
        value: cdktf.stringToHclTerraform(this._conditionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decision_owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._decisionOwners),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      label_waivers: {
        value: cdktf.listMapperHcl(curationPolicyLabelWaiversToHclTerraform, false)(this._labelWaivers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CurationPolicyLabelWaiversList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifyEmails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pkg_types_include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pkgTypesInclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      policy_action: {
        value: cdktf.stringToHclTerraform(this._policyAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repoExclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      repo_include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repoInclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waiver_request_config: {
        value: cdktf.stringToHclTerraform(this._waiverRequestConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waivers: {
        value: cdktf.listMapperHcl(curationPolicyWaiversToHclTerraform, false)(this._waivers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CurationPolicyWaiversList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
