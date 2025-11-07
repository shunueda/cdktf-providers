// https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/admin_saml_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminSamlGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/admin_saml_groups#id AdminSamlGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Required. The external group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/admin_saml_groups#name AdminSamlGroups#name}
  */
  readonly name: string;
  /**
  * Required. List of internal roles assigned to group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/admin_saml_groups#roles AdminSamlGroups#roles}
  */
  readonly roles?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/admin_saml_groups splunk_admin_saml_groups}
*/
export class AdminSamlGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunk_admin_saml_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdminSamlGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdminSamlGroups to import
  * @param importFromId The id of the existing AdminSamlGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/admin_saml_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdminSamlGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunk_admin_saml_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/admin_saml_groups splunk_admin_saml_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminSamlGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: AdminSamlGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'splunk_admin_saml_groups',
      terraformGeneratorMetadata: {
        providerName: 'splunk',
        providerVersion: '1.4.32'
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
    this._name = config.name;
    this._roles = config.roles;
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

  // roles - computed: true, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
