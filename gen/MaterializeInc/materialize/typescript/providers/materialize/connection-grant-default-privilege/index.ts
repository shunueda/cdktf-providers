// https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_grant_default_privilege
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionGrantDefaultPrivilegeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default privilege will apply only to objects created in this database, if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_grant_default_privilege#database_name ConnectionGrantDefaultPrivilege#database_name}
  */
  readonly databaseName?: string;
  /**
  * The role name that will gain the default privilege. Use the `PUBLIC` pseudo-role to grant privileges to all roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_grant_default_privilege#grantee_name ConnectionGrantDefaultPrivilege#grantee_name}
  */
  readonly granteeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_grant_default_privilege#id ConnectionGrantDefaultPrivilege#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The privilege to grant to the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_grant_default_privilege#privilege ConnectionGrantDefaultPrivilege#privilege}
  */
  readonly privilege: string;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_grant_default_privilege#region ConnectionGrantDefaultPrivilege#region}
  */
  readonly region?: string;
  /**
  * The default privilege will apply only to objects created in this schema, if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_grant_default_privilege#schema_name ConnectionGrantDefaultPrivilege#schema_name}
  */
  readonly schemaName?: string;
  /**
  * The default privilege will apply to objects created by this role. If this is left blank, then the current role is assumed. Use the `PUBLIC` pseudo-role to target objects created by all roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_grant_default_privilege#target_role_name ConnectionGrantDefaultPrivilege#target_role_name}
  */
  readonly targetRoleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_grant_default_privilege materialize_connection_grant_default_privilege}
*/
export class ConnectionGrantDefaultPrivilege extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_connection_grant_default_privilege";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionGrantDefaultPrivilege resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionGrantDefaultPrivilege to import
  * @param importFromId The id of the existing ConnectionGrantDefaultPrivilege that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_grant_default_privilege#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionGrantDefaultPrivilege to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_connection_grant_default_privilege", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_grant_default_privilege materialize_connection_grant_default_privilege} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionGrantDefaultPrivilegeConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionGrantDefaultPrivilegeConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_connection_grant_default_privilege',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.9.2',
        providerVersionConstraint: '0.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseName = config.databaseName;
    this._granteeName = config.granteeName;
    this._id = config.id;
    this._privilege = config.privilege;
    this._region = config.region;
    this._schemaName = config.schemaName;
    this._targetRoleName = config.targetRoleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // grantee_name - computed: false, optional: false, required: true
  private _granteeName?: string; 
  public get granteeName() {
    return this.getStringAttribute('grantee_name');
  }
  public set granteeName(value: string) {
    this._granteeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeNameInput() {
    return this._granteeName;
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

  // privilege - computed: false, optional: false, required: true
  private _privilege?: string; 
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // target_role_name - computed: false, optional: false, required: true
  private _targetRoleName?: string; 
  public get targetRoleName() {
    return this.getStringAttribute('target_role_name');
  }
  public set targetRoleName(value: string) {
    this._targetRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRoleNameInput() {
    return this._targetRoleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      grantee_name: cdktf.stringToTerraform(this._granteeName),
      id: cdktf.stringToTerraform(this._id),
      privilege: cdktf.stringToTerraform(this._privilege),
      region: cdktf.stringToTerraform(this._region),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      target_role_name: cdktf.stringToTerraform(this._targetRoleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grantee_name: {
        value: cdktf.stringToHclTerraform(this._granteeName),
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
      privilege: {
        value: cdktf.stringToHclTerraform(this._privilege),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_role_name: {
        value: cdktf.stringToHclTerraform(this._targetRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
