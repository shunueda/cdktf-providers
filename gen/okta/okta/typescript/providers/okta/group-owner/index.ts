// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/group_owner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupOwnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/group_owner#group_id GroupOwner#group_id}
  */
  readonly groupId: string;
  /**
  * The user id of the group owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/group_owner#id_of_group_owner GroupOwner#id_of_group_owner}
  */
  readonly idOfGroupOwner: string;
  /**
  * The entity type of the owner. Enum: "GROUP" "USER"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/group_owner#type GroupOwner#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/group_owner okta_group_owner}
*/
export class GroupOwner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_group_owner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupOwner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupOwner to import
  * @param importFromId The id of the existing GroupOwner that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/group_owner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupOwner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_group_owner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/group_owner okta_group_owner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupOwnerConfig
  */
  public constructor(scope: Construct, id: string, config: GroupOwnerConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_group_owner',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._idOfGroupOwner = config.idOfGroupOwner;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_of_group_owner - computed: false, optional: false, required: true
  private _idOfGroupOwner?: string; 
  public get idOfGroupOwner() {
    return this.getStringAttribute('id_of_group_owner');
  }
  public set idOfGroupOwner(value: string) {
    this._idOfGroupOwner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idOfGroupOwnerInput() {
    return this._idOfGroupOwner;
  }

  // origin_id - computed: true, optional: false, required: false
  public get originId() {
    return this.getStringAttribute('origin_id');
  }

  // origin_type - computed: true, optional: false, required: false
  public get originType() {
    return this.getStringAttribute('origin_type');
  }

  // resolved - computed: true, optional: false, required: false
  public get resolved() {
    return this.getBooleanAttribute('resolved');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      id_of_group_owner: cdktf.stringToTerraform(this._idOfGroupOwner),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_of_group_owner: {
        value: cdktf.stringToHclTerraform(this._idOfGroupOwner),
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
