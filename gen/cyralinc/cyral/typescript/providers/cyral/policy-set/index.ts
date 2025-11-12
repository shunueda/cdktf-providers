// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_set#description PolicySet#description}
  */
  readonly description?: string;
  /**
  * Indicates if the policy set is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_set#enabled PolicySet#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_set#name PolicySet#name}
  */
  readonly name: string;
  /**
  * Tags associated with the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_set#tags PolicySet#tags}
  */
  readonly tags?: string[];
  /**
  * The ID of the policy wizard used to create this policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_set#wizard_id PolicySet#wizard_id}
  */
  readonly wizardId: string;
  /**
  * Parameters passed to the wizard while creating the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_set#wizard_parameters PolicySet#wizard_parameters}
  */
  readonly wizardParameters: string;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_set#scope PolicySet#scope}
  */
  readonly scope?: PolicySetScope;
}
export interface PolicySetPolicies {
}

export function policySetPoliciesToTerraform(struct?: PolicySetPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function policySetPoliciesToHclTerraform(struct?: PolicySetPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PolicySetPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PolicySetPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PolicySetPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): PolicySetPoliciesOutputReference {
    return new PolicySetPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySetScope {
  /**
  * List of repository IDs that are in scope. Empty list means all repositories are in scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_set#repo_ids PolicySet#repo_ids}
  */
  readonly repoIds?: string[];
}

export function policySetScopeToTerraform(struct?: PolicySetScopeOutputReference | PolicySetScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repo_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repoIds),
  }
}


export function policySetScopeToHclTerraform(struct?: PolicySetScopeOutputReference | PolicySetScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repo_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repoIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySetScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySetScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repoIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoIds = this._repoIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySetScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repoIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repoIds = value.repoIds;
    }
  }

  // repo_ids - computed: false, optional: true, required: false
  private _repoIds?: string[]; 
  public get repoIds() {
    return this.getListAttribute('repo_ids');
  }
  public set repoIds(value: string[]) {
    this._repoIds = value;
  }
  public resetRepoIds() {
    this._repoIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoIdsInput() {
    return this._repoIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_set cyral_policy_set}
*/
export class PolicySet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_policy_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicySet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicySet to import
  * @param importFromId The id of the existing PolicySet that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicySet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_policy_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_set cyral_policy_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySetConfig
  */
  public constructor(scope: Construct, id: string, config: PolicySetConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_policy_set',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
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
    this._enabled = config.enabled;
    this._name = config.name;
    this._tags = config.tags;
    this._wizardId = config.wizardId;
    this._wizardParameters = config.wizardParameters;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  private _created = new cdktf.StringMap(this, "created");
  public get created() {
    return this._created;
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

  // enabled - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  private _lastUpdated = new cdktf.StringMap(this, "last_updated");
  public get lastUpdated() {
    return this._lastUpdated;
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

  // policies - computed: true, optional: false, required: false
  private _policies = new PolicySetPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // wizard_id - computed: false, optional: false, required: true
  private _wizardId?: string; 
  public get wizardId() {
    return this.getStringAttribute('wizard_id');
  }
  public set wizardId(value: string) {
    this._wizardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wizardIdInput() {
    return this._wizardId;
  }

  // wizard_parameters - computed: false, optional: false, required: true
  private _wizardParameters?: string; 
  public get wizardParameters() {
    return this.getStringAttribute('wizard_parameters');
  }
  public set wizardParameters(value: string) {
    this._wizardParameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wizardParametersInput() {
    return this._wizardParameters;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new PolicySetScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: PolicySetScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      wizard_id: cdktf.stringToTerraform(this._wizardId),
      wizard_parameters: cdktf.stringToTerraform(this._wizardParameters),
      scope: policySetScopeToTerraform(this._scope.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wizard_id: {
        value: cdktf.stringToHclTerraform(this._wizardId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wizard_parameters: {
        value: cdktf.stringToHclTerraform(this._wizardParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: policySetScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySetScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
