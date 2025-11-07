// https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/default_privileges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultPrivilegesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the  group to which the specified default privileges are applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/default_privileges#group DefaultPrivileges#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/default_privileges#id DefaultPrivileges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Redshift object type to set the default privileges on (one of: table).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/default_privileges#object_type DefaultPrivileges#object_type}
  */
  readonly objectType: string;
  /**
  * The name of the user for which default privileges are defined. Only a superuser can specify default privileges for other users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/default_privileges#owner DefaultPrivileges#owner}
  */
  readonly owner: string;
  /**
  * The list of privileges to apply as default privileges. See [ALTER DEFAULT PRIVILEGES command documentation](https://docs.aws.amazon.com/redshift/latest/dg/r_ALTER_DEFAULT_PRIVILEGES.html) to see what privileges are available to which object type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/default_privileges#privileges DefaultPrivileges#privileges}
  */
  readonly privileges: string[];
  /**
  * If set, the specified default privileges are applied to new objects created in the specified schema. In this case, the user or user group that is the target of ALTER DEFAULT PRIVILEGES must have CREATE privilege for the specified schema. Default privileges that are specific to a schema are added to existing global default privileges. By default, default privileges are applied globally to the entire database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/default_privileges#schema DefaultPrivileges#schema}
  */
  readonly schema?: string;
  /**
  * The name of the user to which the specified default privileges are applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/default_privileges#user DefaultPrivileges#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/default_privileges redshift_default_privileges}
*/
export class DefaultPrivileges extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redshift_default_privileges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultPrivileges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultPrivileges to import
  * @param importFromId The id of the existing DefaultPrivileges that should be imported. Refer to the {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/default_privileges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultPrivileges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redshift_default_privileges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/default_privileges redshift_default_privileges} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultPrivilegesConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultPrivilegesConfig) {
    super(scope, id, {
      terraformResourceType: 'redshift_default_privileges',
      terraformGeneratorMetadata: {
        providerName: 'redshift',
        providerVersion: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._id = config.id;
    this._objectType = config.objectType;
    this._owner = config.owner;
    this._privileges = config.privileges;
    this._schema = config.schema;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      object_type: cdktf.stringToTerraform(this._objectType),
      owner: cdktf.stringToTerraform(this._owner),
      privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privileges),
      schema: cdktf.stringToTerraform(this._schema),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privileges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
