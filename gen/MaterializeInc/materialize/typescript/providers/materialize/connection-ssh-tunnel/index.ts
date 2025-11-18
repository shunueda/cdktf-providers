// https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionSshTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel#comment ConnectionSshTunnel#comment}
  */
  readonly comment?: string;
  /**
  * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel#database_name ConnectionSshTunnel#database_name}
  */
  readonly databaseName?: string;
  /**
  * The host of the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel#host ConnectionSshTunnel#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel#id ConnectionSshTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel#name ConnectionSshTunnel#name}
  */
  readonly name: string;
  /**
  * The owernship role of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel#ownership_role ConnectionSshTunnel#ownership_role}
  */
  readonly ownershipRole?: string;
  /**
  * The port of the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel#port ConnectionSshTunnel#port}
  */
  readonly port: number;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel#region ConnectionSshTunnel#region}
  */
  readonly region?: string;
  /**
  * The identifier for the connection schema in Materialize. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel#schema_name ConnectionSshTunnel#schema_name}
  */
  readonly schemaName?: string;
  /**
  * The user of the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel#user ConnectionSshTunnel#user}
  */
  readonly user: string;
  /**
  * If the connection should wait for validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel#validate ConnectionSshTunnel#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel materialize_connection_ssh_tunnel}
*/
export class ConnectionSshTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_connection_ssh_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionSshTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionSshTunnel to import
  * @param importFromId The id of the existing ConnectionSshTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionSshTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_connection_ssh_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/connection_ssh_tunnel materialize_connection_ssh_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionSshTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionSshTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_connection_ssh_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.9.3',
        providerVersionConstraint: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._databaseName = config.databaseName;
    this._host = config.host;
    this._id = config.id;
    this._name = config.name;
    this._ownershipRole = config.ownershipRole;
    this._port = config.port;
    this._region = config.region;
    this._schemaName = config.schemaName;
    this._user = config.user;
    this._validate = config.validate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // ownership_role - computed: true, optional: true, required: false
  private _ownershipRole?: string; 
  public get ownershipRole() {
    return this.getStringAttribute('ownership_role');
  }
  public set ownershipRole(value: string) {
    this._ownershipRole = value;
  }
  public resetOwnershipRole() {
    this._ownershipRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipRoleInput() {
    return this._ownershipRole;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // public_key_1 - computed: true, optional: false, required: false
  public get publicKey1() {
    return this.getStringAttribute('public_key_1');
  }

  // public_key_2 - computed: true, optional: false, required: false
  public get publicKey2() {
    return this.getStringAttribute('public_key_2');
  }

  // qualified_sql_name - computed: true, optional: false, required: false
  public get qualifiedSqlName() {
    return this.getStringAttribute('qualified_sql_name');
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

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktf.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database_name: cdktf.stringToTerraform(this._databaseName),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ownership_role: cdktf.stringToTerraform(this._ownershipRole),
      port: cdktf.numberToTerraform(this._port),
      region: cdktf.stringToTerraform(this._region),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      user: cdktf.stringToTerraform(this._user),
      validate: cdktf.booleanToTerraform(this._validate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      ownership_role: {
        value: cdktf.stringToHclTerraform(this._ownershipRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate: {
        value: cdktf.booleanToHclTerraform(this._validate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
