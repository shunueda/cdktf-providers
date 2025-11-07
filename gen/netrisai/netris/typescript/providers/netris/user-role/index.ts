// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * User Role description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user_role#description UserRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user_role#id UserRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the user role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user_role#name UserRole#name}
  */
  readonly name: string;
  /**
  * The name of existing permission group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user_role#pgroup UserRole#pgroup}
  */
  readonly pgroup: string;
  /**
  * List of tenant IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user_role#tenantids UserRole#tenantids}
  */
  readonly tenantids?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user_role netris_user_role}
*/
export class UserRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_user_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserRole to import
  * @param importFromId The id of the existing UserRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_user_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user_role netris_user_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserRoleConfig
  */
  public constructor(scope: Construct, id: string, config: UserRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_user_role',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6'
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
    this._id = config.id;
    this._name = config.name;
    this._pgroup = config.pgroup;
    this._tenantids = config.tenantids;
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

  // pgroup - computed: false, optional: false, required: true
  private _pgroup?: string; 
  public get pgroup() {
    return this.getStringAttribute('pgroup');
  }
  public set pgroup(value: string) {
    this._pgroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgroupInput() {
    return this._pgroup;
  }

  // tenantids - computed: false, optional: true, required: false
  private _tenantids?: number[]; 
  public get tenantids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tenantids')));
  }
  public set tenantids(value: number[]) {
    this._tenantids = value;
  }
  public resetTenantids() {
    this._tenantids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantidsInput() {
    return this._tenantids;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pgroup: cdktf.stringToTerraform(this._pgroup),
      tenantids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tenantids),
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
      pgroup: {
        value: cdktf.stringToHclTerraform(this._pgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenantids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tenantids),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
