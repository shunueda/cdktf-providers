// https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile_policy_prioritization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfilePolicyPrioritizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile_policy_prioritization#id ProfilePolicyPrioritization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable policy ordering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile_policy_prioritization#policy_priority_enabled ProfilePolicyPrioritization#policy_priority_enabled}
  */
  readonly policyPriorityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile_policy_prioritization#profile_id ProfilePolicyPrioritization#profile_id}
  */
  readonly profileId: string;
  /**
  * policy_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile_policy_prioritization#policy_priority ProfilePolicyPrioritization#policy_priority}
  */
  readonly policyPriority?: ProfilePolicyPrioritizationPolicyPriority[] | cdktf.IResolvable;
}
export interface ProfilePolicyPrioritizationPolicyPriority {
  /**
  * Policy Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile_policy_prioritization#id ProfilePolicyPrioritization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Priority number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile_policy_prioritization#priority ProfilePolicyPrioritization#priority}
  */
  readonly priority: number;
}

export function profilePolicyPrioritizationPolicyPriorityToTerraform(struct?: ProfilePolicyPrioritizationPolicyPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function profilePolicyPrioritizationPolicyPriorityToHclTerraform(struct?: ProfilePolicyPrioritizationPolicyPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfilePolicyPrioritizationPolicyPriorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfilePolicyPrioritizationPolicyPriority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfilePolicyPrioritizationPolicyPriority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._priority = value.priority;
    }
  }

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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class ProfilePolicyPrioritizationPolicyPriorityList extends cdktf.ComplexList {
  public internalValue? : ProfilePolicyPrioritizationPolicyPriority[] | cdktf.IResolvable

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
  public get(index: number): ProfilePolicyPrioritizationPolicyPriorityOutputReference {
    return new ProfilePolicyPrioritizationPolicyPriorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile_policy_prioritization britive_profile_policy_prioritization}
*/
export class ProfilePolicyPrioritization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_profile_policy_prioritization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfilePolicyPrioritization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfilePolicyPrioritization to import
  * @param importFromId The id of the existing ProfilePolicyPrioritization that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile_policy_prioritization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfilePolicyPrioritization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_profile_policy_prioritization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile_policy_prioritization britive_profile_policy_prioritization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfilePolicyPrioritizationConfig
  */
  public constructor(scope: Construct, id: string, config: ProfilePolicyPrioritizationConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_profile_policy_prioritization',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.3'
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
    this._policyPriorityEnabled = config.policyPriorityEnabled;
    this._profileId = config.profileId;
    this._policyPriority.internalValue = config.policyPriority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // policy_priority_enabled - computed: false, optional: true, required: false
  private _policyPriorityEnabled?: boolean | cdktf.IResolvable; 
  public get policyPriorityEnabled() {
    return this.getBooleanAttribute('policy_priority_enabled');
  }
  public set policyPriorityEnabled(value: boolean | cdktf.IResolvable) {
    this._policyPriorityEnabled = value;
  }
  public resetPolicyPriorityEnabled() {
    this._policyPriorityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyPriorityEnabledInput() {
    return this._policyPriorityEnabled;
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // policy_priority - computed: false, optional: true, required: false
  private _policyPriority = new ProfilePolicyPrioritizationPolicyPriorityList(this, "policy_priority", true);
  public get policyPriority() {
    return this._policyPriority;
  }
  public putPolicyPriority(value: ProfilePolicyPrioritizationPolicyPriority[] | cdktf.IResolvable) {
    this._policyPriority.internalValue = value;
  }
  public resetPolicyPriority() {
    this._policyPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyPriorityInput() {
    return this._policyPriority.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_priority_enabled: cdktf.booleanToTerraform(this._policyPriorityEnabled),
      profile_id: cdktf.stringToTerraform(this._profileId),
      policy_priority: cdktf.listMapper(profilePolicyPrioritizationPolicyPriorityToTerraform, true)(this._policyPriority.internalValue),
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
      policy_priority_enabled: {
        value: cdktf.booleanToHclTerraform(this._policyPriorityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_priority: {
        value: cdktf.listMapperHcl(profilePolicyPrioritizationPolicyPriorityToHclTerraform, true)(this._policyPriority.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProfilePolicyPrioritizationPolicyPriorityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
