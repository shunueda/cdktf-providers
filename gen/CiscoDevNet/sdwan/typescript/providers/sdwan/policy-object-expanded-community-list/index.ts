// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_expanded_community_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectExpandedCommunityListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_expanded_community_list#description PolicyObjectExpandedCommunityList#description}
  */
  readonly description?: string;
  /**
  * Expanded Community List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_expanded_community_list#expanded_community_lists PolicyObjectExpandedCommunityList#expanded_community_lists}
  */
  readonly expandedCommunityLists: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_expanded_community_list#expanded_community_lists_variable PolicyObjectExpandedCommunityList#expanded_community_lists_variable}
  */
  readonly expandedCommunityListsVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_expanded_community_list#feature_profile_id PolicyObjectExpandedCommunityList#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_expanded_community_list#name PolicyObjectExpandedCommunityList#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_expanded_community_list sdwan_policy_object_expanded_community_list}
*/
export class PolicyObjectExpandedCommunityList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_expanded_community_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectExpandedCommunityList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectExpandedCommunityList to import
  * @param importFromId The id of the existing PolicyObjectExpandedCommunityList that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_expanded_community_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectExpandedCommunityList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_expanded_community_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_expanded_community_list sdwan_policy_object_expanded_community_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectExpandedCommunityListConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectExpandedCommunityListConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_expanded_community_list',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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
    this._expandedCommunityLists = config.expandedCommunityLists;
    this._expandedCommunityListsVariable = config.expandedCommunityListsVariable;
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

  // expanded_community_lists - computed: false, optional: false, required: true
  private _expandedCommunityLists?: string[]; 
  public get expandedCommunityLists() {
    return cdktf.Fn.tolist(this.getListAttribute('expanded_community_lists'));
  }
  public set expandedCommunityLists(value: string[]) {
    this._expandedCommunityLists = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedCommunityListsInput() {
    return this._expandedCommunityLists;
  }

  // expanded_community_lists_variable - computed: false, optional: true, required: false
  private _expandedCommunityListsVariable?: string; 
  public get expandedCommunityListsVariable() {
    return this.getStringAttribute('expanded_community_lists_variable');
  }
  public set expandedCommunityListsVariable(value: string) {
    this._expandedCommunityListsVariable = value;
  }
  public resetExpandedCommunityListsVariable() {
    this._expandedCommunityListsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedCommunityListsVariableInput() {
    return this._expandedCommunityListsVariable;
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
      expanded_community_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._expandedCommunityLists),
      expanded_community_lists_variable: cdktf.stringToTerraform(this._expandedCommunityListsVariable),
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
      expanded_community_lists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._expandedCommunityLists),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      expanded_community_lists_variable: {
        value: cdktf.stringToHclTerraform(this._expandedCommunityListsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
