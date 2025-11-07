// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRuleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rule_set#child_rule_set_ids PolicyRuleSet#child_rule_set_ids}
  */
  readonly childRuleSetIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rule_set#description PolicyRuleSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rule_set#group_member_ids PolicyRuleSet#group_member_ids}
  */
  readonly groupMemberIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rule_set#id PolicyRuleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rule_set#name PolicyRuleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rule_set#type PolicyRuleSet#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rule_set valtix_policy_rule_set}
*/
export class PolicyRuleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_policy_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyRuleSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyRuleSet to import
  * @param importFromId The id of the existing PolicyRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_policy_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rule_set valtix_policy_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_policy_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._childRuleSetIds = config.childRuleSetIds;
    this._description = config.description;
    this._groupMemberIds = config.groupMemberIds;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_rule_set_ids - computed: false, optional: true, required: false
  private _childRuleSetIds?: number[]; 
  public get childRuleSetIds() {
    return this.getNumberListAttribute('child_rule_set_ids');
  }
  public set childRuleSetIds(value: number[]) {
    this._childRuleSetIds = value;
  }
  public resetChildRuleSetIds() {
    this._childRuleSetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childRuleSetIdsInput() {
    return this._childRuleSetIds;
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

  // group_member_ids - computed: false, optional: true, required: false
  private _groupMemberIds?: number[]; 
  public get groupMemberIds() {
    return this.getNumberListAttribute('group_member_ids');
  }
  public set groupMemberIds(value: number[]) {
    this._groupMemberIds = value;
  }
  public resetGroupMemberIds() {
    this._groupMemberIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberIdsInput() {
    return this._groupMemberIds;
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

  // rule_set_id - computed: true, optional: false, required: false
  public get ruleSetId() {
    return this.getNumberAttribute('rule_set_id');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      child_rule_set_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._childRuleSetIds),
      description: cdktf.stringToTerraform(this._description),
      group_member_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groupMemberIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      child_rule_set_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._childRuleSetIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groupMemberIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
