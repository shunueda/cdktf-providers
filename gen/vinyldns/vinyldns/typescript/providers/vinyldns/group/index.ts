// https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/group#admin_ids Group#admin_ids}
  */
  readonly adminIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/group#email Group#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/group#member_ids Group#member_ids}
  */
  readonly memberIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/group vinyldns_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vinyldns_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vinyldns_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/group vinyldns_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vinyldns_group',
      terraformGeneratorMetadata: {
        providerName: 'vinyldns',
        providerVersion: '0.10.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminIds = config.adminIds;
    this._description = config.description;
    this._email = config.email;
    this._id = config.id;
    this._memberIds = config.memberIds;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_ids - computed: false, optional: false, required: true
  private _adminIds?: string[]; 
  public get adminIds() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_ids'));
  }
  public set adminIds(value: string[]) {
    this._adminIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIdsInput() {
    return this._adminIds;
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

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // member_ids - computed: false, optional: false, required: true
  private _memberIds?: string[]; 
  public get memberIds() {
    return cdktf.Fn.tolist(this.getListAttribute('member_ids'));
  }
  public set memberIds(value: string[]) {
    this._memberIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdsInput() {
    return this._memberIds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminIds),
      description: cdktf.stringToTerraform(this._description),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      member_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberIds),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      member_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._memberIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
