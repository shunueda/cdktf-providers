// https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceManagerProfilePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of access for the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#access_type ResourceManagerProfilePolicy#access_type}
  */
  readonly accessType?: string;
  /**
  * Condition of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#condition ResourceManagerProfilePolicy#condition}
  */
  readonly condition?: string;
  /**
  * The consumer service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#consumer ResourceManagerProfilePolicy#consumer}
  */
  readonly consumer?: string;
  /**
  * The description of the profile policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#description ResourceManagerProfilePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#id ResourceManagerProfilePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is the policy active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#is_active ResourceManagerProfilePolicy#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Is the policy a draft
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#is_draft ResourceManagerProfilePolicy#is_draft}
  */
  readonly isDraft?: boolean | cdktf.IResolvable;
  /**
  * Is the policy read only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#is_read_only ResourceManagerProfilePolicy#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Members of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#members ResourceManagerProfilePolicy#members}
  */
  readonly members?: string;
  /**
  * The policy associated with the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#policy_name ResourceManagerProfilePolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * The identifier of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#profile_id ResourceManagerProfilePolicy#profile_id}
  */
  readonly profileId: string;
  /**
  * resource_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#resource_labels ResourceManagerProfilePolicy#resource_labels}
  */
  readonly resourceLabels?: ResourceManagerProfilePolicyResourceLabels[] | cdktf.IResolvable;
}
export interface ResourceManagerProfilePolicyResourceLabels {
  /**
  * Name of resource label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#label_key ResourceManagerProfilePolicy#label_key}
  */
  readonly labelKey: string;
  /**
  * List of values of resource label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#values ResourceManagerProfilePolicy#values}
  */
  readonly values: string[];
}

export function resourceManagerProfilePolicyResourceLabelsToTerraform(struct?: ResourceManagerProfilePolicyResourceLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_key: cdktf.stringToTerraform(struct!.labelKey),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceManagerProfilePolicyResourceLabelsToHclTerraform(struct?: ResourceManagerProfilePolicyResourceLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_key: {
      value: cdktf.stringToHclTerraform(struct!.labelKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceManagerProfilePolicyResourceLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceManagerProfilePolicyResourceLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelKey = this._labelKey;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerProfilePolicyResourceLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelKey = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelKey = value.labelKey;
      this._values = value.values;
    }
  }

  // label_key - computed: false, optional: false, required: true
  private _labelKey?: string; 
  public get labelKey() {
    return this.getStringAttribute('label_key');
  }
  public set labelKey(value: string) {
    this._labelKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelKeyInput() {
    return this._labelKey;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceManagerProfilePolicyResourceLabelsList extends cdktf.ComplexList {
  public internalValue? : ResourceManagerProfilePolicyResourceLabels[] | cdktf.IResolvable

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
  public get(index: number): ResourceManagerProfilePolicyResourceLabelsOutputReference {
    return new ResourceManagerProfilePolicyResourceLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy britive_resource_manager_profile_policy}
*/
export class ResourceManagerProfilePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_resource_manager_profile_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceManagerProfilePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceManagerProfilePolicy to import
  * @param importFromId The id of the existing ResourceManagerProfilePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceManagerProfilePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_resource_manager_profile_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_profile_policy britive_resource_manager_profile_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceManagerProfilePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceManagerProfilePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_resource_manager_profile_policy',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.6',
        providerVersionConstraint: '2.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessType = config.accessType;
    this._condition = config.condition;
    this._consumer = config.consumer;
    this._description = config.description;
    this._id = config.id;
    this._isActive = config.isActive;
    this._isDraft = config.isDraft;
    this._isReadOnly = config.isReadOnly;
    this._members = config.members;
    this._policyName = config.policyName;
    this._profileId = config.profileId;
    this._resourceLabels.internalValue = config.resourceLabels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // consumer - computed: false, optional: true, required: false
  private _consumer?: string; 
  public get consumer() {
    return this.getStringAttribute('consumer');
  }
  public set consumer(value: string) {
    this._consumer = value;
  }
  public resetConsumer() {
    this._consumer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer;
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

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // is_draft - computed: false, optional: true, required: false
  private _isDraft?: boolean | cdktf.IResolvable; 
  public get isDraft() {
    return this.getBooleanAttribute('is_draft');
  }
  public set isDraft(value: boolean | cdktf.IResolvable) {
    this._isDraft = value;
  }
  public resetIsDraft() {
    this._isDraft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDraftInput() {
    return this._isDraft;
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

  // members - computed: false, optional: true, required: false
  private _members?: string; 
  public get members() {
    return this.getStringAttribute('members');
  }
  public set members(value: string) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
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

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels = new ResourceManagerProfilePolicyResourceLabelsList(this, "resource_labels", true);
  public get resourceLabels() {
    return this._resourceLabels;
  }
  public putResourceLabels(value: ResourceManagerProfilePolicyResourceLabels[] | cdktf.IResolvable) {
    this._resourceLabels.internalValue = value;
  }
  public resetResourceLabels() {
    this._resourceLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: cdktf.stringToTerraform(this._accessType),
      condition: cdktf.stringToTerraform(this._condition),
      consumer: cdktf.stringToTerraform(this._consumer),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.booleanToTerraform(this._isActive),
      is_draft: cdktf.booleanToTerraform(this._isDraft),
      is_read_only: cdktf.booleanToTerraform(this._isReadOnly),
      members: cdktf.stringToTerraform(this._members),
      policy_name: cdktf.stringToTerraform(this._policyName),
      profile_id: cdktf.stringToTerraform(this._profileId),
      resource_labels: cdktf.listMapper(resourceManagerProfilePolicyResourceLabelsToTerraform, true)(this._resourceLabels.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer: {
        value: cdktf.stringToHclTerraform(this._consumer),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_draft: {
        value: cdktf.booleanToHclTerraform(this._isDraft),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_read_only: {
        value: cdktf.booleanToHclTerraform(this._isReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      members: {
        value: cdktf.stringToHclTerraform(this._members),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_labels: {
        value: cdktf.listMapperHcl(resourceManagerProfilePolicyResourceLabelsToHclTerraform, true)(this._resourceLabels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResourceManagerProfilePolicyResourceLabelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
