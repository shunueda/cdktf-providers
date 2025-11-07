// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_scalable_group_tag_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectSecurityScalableGroupTagListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_scalable_group_tag_list#description PolicyObjectSecurityScalableGroupTagList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_scalable_group_tag_list#entries PolicyObjectSecurityScalableGroupTagList#entries}
  */
  readonly entries: PolicyObjectSecurityScalableGroupTagListEntries[] | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_scalable_group_tag_list#feature_profile_id PolicyObjectSecurityScalableGroupTagList#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_scalable_group_tag_list#name PolicyObjectSecurityScalableGroupTagList#name}
  */
  readonly name: string;
}
export interface PolicyObjectSecurityScalableGroupTagListEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_scalable_group_tag_list#sgt_name PolicyObjectSecurityScalableGroupTagList#sgt_name}
  */
  readonly sgtName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_scalable_group_tag_list#tag PolicyObjectSecurityScalableGroupTagList#tag}
  */
  readonly tag?: string;
}

export function policyObjectSecurityScalableGroupTagListEntriesToTerraform(struct?: PolicyObjectSecurityScalableGroupTagListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sgt_name: cdktf.stringToTerraform(struct!.sgtName),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyObjectSecurityScalableGroupTagListEntriesToHclTerraform(struct?: PolicyObjectSecurityScalableGroupTagListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sgt_name: {
      value: cdktf.stringToHclTerraform(struct!.sgtName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyObjectSecurityScalableGroupTagListEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyObjectSecurityScalableGroupTagListEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sgtName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgtName = this._sgtName;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyObjectSecurityScalableGroupTagListEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sgtName = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sgtName = value.sgtName;
      this._tag = value.tag;
    }
  }

  // sgt_name - computed: false, optional: true, required: false
  private _sgtName?: string; 
  public get sgtName() {
    return this.getStringAttribute('sgt_name');
  }
  public set sgtName(value: string) {
    this._sgtName = value;
  }
  public resetSgtName() {
    this._sgtName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtNameInput() {
    return this._sgtName;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyObjectSecurityScalableGroupTagListEntriesList extends cdktf.ComplexList {
  public internalValue? : PolicyObjectSecurityScalableGroupTagListEntries[] | cdktf.IResolvable

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
  public get(index: number): PolicyObjectSecurityScalableGroupTagListEntriesOutputReference {
    return new PolicyObjectSecurityScalableGroupTagListEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_scalable_group_tag_list sdwan_policy_object_security_scalable_group_tag_list}
*/
export class PolicyObjectSecurityScalableGroupTagList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_security_scalable_group_tag_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectSecurityScalableGroupTagList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectSecurityScalableGroupTagList to import
  * @param importFromId The id of the existing PolicyObjectSecurityScalableGroupTagList that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_scalable_group_tag_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectSecurityScalableGroupTagList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_security_scalable_group_tag_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_scalable_group_tag_list sdwan_policy_object_security_scalable_group_tag_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectSecurityScalableGroupTagListConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectSecurityScalableGroupTagListConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_security_scalable_group_tag_list',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
    this._entries.internalValue = config.entries;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
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

  // entries - computed: false, optional: false, required: true
  private _entries = new PolicyObjectSecurityScalableGroupTagListEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: PolicyObjectSecurityScalableGroupTagListEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      entries: cdktf.listMapper(policyObjectSecurityScalableGroupTagListEntriesToTerraform, false)(this._entries.internalValue),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
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
      entries: {
        value: cdktf.listMapperHcl(policyObjectSecurityScalableGroupTagListEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyObjectSecurityScalableGroupTagListEntriesList",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
