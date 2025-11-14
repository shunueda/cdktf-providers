// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/routing_skill_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingSkillGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the skill group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/routing_skill_group#description RoutingSkillGroup#description}
  */
  readonly description?: string;
  /**
  * The division to which this entity belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/routing_skill_group#division_id RoutingSkillGroup#division_id}
  */
  readonly divisionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/routing_skill_group#id RoutingSkillGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IDs of member divisions to add or remove for this skill group. An empty array means all divisions will be removed, '*' means all divisions will be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/routing_skill_group#member_division_ids RoutingSkillGroup#member_division_ids}
  */
  readonly memberDivisionIds?: string[];
  /**
  * The group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/routing_skill_group#name RoutingSkillGroup#name}
  */
  readonly name: string;
  /**
  * JSON encoded array of rules that will be used to determine group membership.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/routing_skill_group#skill_conditions RoutingSkillGroup#skill_conditions}
  */
  readonly skillConditions?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/routing_skill_group genesyscloud_routing_skill_group}
*/
export class RoutingSkillGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_routing_skill_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingSkillGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingSkillGroup to import
  * @param importFromId The id of the existing RoutingSkillGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/routing_skill_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingSkillGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_routing_skill_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/routing_skill_group genesyscloud_routing_skill_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingSkillGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingSkillGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_routing_skill_group',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
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
    this._divisionId = config.divisionId;
    this._id = config.id;
    this._memberDivisionIds = config.memberDivisionIds;
    this._name = config.name;
    this._skillConditions = config.skillConditions;
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

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
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

  // member_division_ids - computed: false, optional: true, required: false
  private _memberDivisionIds?: string[]; 
  public get memberDivisionIds() {
    return this.getListAttribute('member_division_ids');
  }
  public set memberDivisionIds(value: string[]) {
    this._memberDivisionIds = value;
  }
  public resetMemberDivisionIds() {
    this._memberDivisionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberDivisionIdsInput() {
    return this._memberDivisionIds;
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

  // skill_conditions - computed: true, optional: true, required: false
  private _skillConditions?: string; 
  public get skillConditions() {
    return this.getStringAttribute('skill_conditions');
  }
  public set skillConditions(value: string) {
    this._skillConditions = value;
  }
  public resetSkillConditions() {
    this._skillConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillConditionsInput() {
    return this._skillConditions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      division_id: cdktf.stringToTerraform(this._divisionId),
      id: cdktf.stringToTerraform(this._id),
      member_division_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberDivisionIds),
      name: cdktf.stringToTerraform(this._name),
      skill_conditions: cdktf.stringToTerraform(this._skillConditions),
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
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
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
      member_division_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._memberDivisionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skill_conditions: {
        value: cdktf.stringToHclTerraform(this._skillConditions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
