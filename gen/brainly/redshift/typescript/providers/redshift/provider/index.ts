// https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftProviderConfig {
  /**
  * The name of the database to connect to. The default is `redshift`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#database RedshiftProvider#database}
  */
  readonly database?: string;
  /**
  * Name of Redshift server address to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#host RedshiftProvider#host}
  */
  readonly host?: string;
  /**
  * Maximum number of connections to establish to the database. Zero means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#max_connections RedshiftProvider#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Password to be used if the Redshift server demands password authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#password RedshiftProvider#password}
  */
  readonly password?: string;
  /**
  * The Redshift port number to connect to at the server host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#port RedshiftProvider#port}
  */
  readonly port?: number;
  /**
  * This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the Redshift server. Valid values are `require` (default, always SSL, also skip verification), `verify-ca` (always SSL, verify that the certificate presented by the server was signed by a trusted CA), `verify-full` (always SSL, verify that the certification presented by the server was signed by a trusted CA and the server host name matches the one in the certificate), `disable` (no SSL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#sslmode RedshiftProvider#sslmode}
  */
  readonly sslmode?: string;
  /**
  * Redshift user name to connect as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#username RedshiftProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#alias RedshiftProvider#alias}
  */
  readonly alias?: string;
  /**
  * temporary_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#temporary_credentials RedshiftProvider#temporary_credentials}
  */
  readonly temporaryCredentials?: RedshiftProviderTemporaryCredentials;
}
export interface RedshiftProviderTemporaryCredentialsAssumeRole {
  /**
  * Amazon Resource Name of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#arn RedshiftProvider#arn}
  */
  readonly arn: string;
  /**
  * A unique identifier that might be required when you assume a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#external_id RedshiftProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * An identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#session_name RedshiftProvider#session_name}
  */
  readonly sessionName?: string;
}

export function redshiftProviderTemporaryCredentialsAssumeRoleToTerraform(struct?: RedshiftProviderTemporaryCredentialsAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
  }
}


export function redshiftProviderTemporaryCredentialsAssumeRoleToHclTerraform(struct?: RedshiftProviderTemporaryCredentialsAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface RedshiftProviderTemporaryCredentials {
  /**
  * Create a database user with the name specified for the user if one does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#auto_create_user RedshiftProvider#auto_create_user}
  */
  readonly autoCreateUser?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of the cluster that contains the database for which you are requesting credentials. This parameter is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#cluster_identifier RedshiftProvider#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * A list of the names of existing database groups that the user will join for the current session, in addition to any group memberships for an existing user. If not specified, a new user is added only to PUBLIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#db_groups RedshiftProvider#db_groups}
  */
  readonly dbGroups?: string[];
  /**
  * The number of seconds until the returned temporary password expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#duration_seconds RedshiftProvider#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * The AWS region where the Redshift cluster is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#region RedshiftProvider#region}
  */
  readonly region?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#assume_role RedshiftProvider#assume_role}
  */
  readonly assumeRole?: RedshiftProviderTemporaryCredentialsAssumeRole;
}

export function redshiftProviderTemporaryCredentialsToTerraform(struct?: RedshiftProviderTemporaryCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create_user: cdktf.booleanToTerraform(struct!.autoCreateUser),
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
    db_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbGroups),
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    region: cdktf.stringToTerraform(struct!.region),
    assume_role: redshiftProviderTemporaryCredentialsAssumeRoleToTerraform(struct!.assumeRole),
  }
}


export function redshiftProviderTemporaryCredentialsToHclTerraform(struct?: RedshiftProviderTemporaryCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_create_user: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreateUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.clusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assume_role: {
      value: redshiftProviderTemporaryCredentialsAssumeRoleToHclTerraform(struct!.assumeRole),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftProviderTemporaryCredentialsAssumeRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs redshift}
*/
export class RedshiftProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redshift";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftProvider to import
  * @param importFromId The id of the existing RedshiftProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redshift", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs redshift} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RedshiftProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'redshift',
      terraformGeneratorMetadata: {
        providerName: 'redshift',
        providerVersion: '1.1.0'
      },
      terraformProviderSource: 'brainly/redshift'
    });
    this._database = config.database;
    this._host = config.host;
    this._maxConnections = config.maxConnections;
    this._password = config.password;
    this._port = config.port;
    this._sslmode = config.sslmode;
    this._username = config.username;
    this._alias = config.alias;
    this._temporaryCredentials = config.temporaryCredentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this._database;
  }
  public set database(value: string | undefined) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this._maxConnections;
  }
  public set maxConnections(value: number | undefined) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sslmode - computed: false, optional: true, required: false
  private _sslmode?: string; 
  public get sslmode() {
    return this._sslmode;
  }
  public set sslmode(value: string | undefined) {
    this._sslmode = value;
  }
  public resetSslmode() {
    this._sslmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslmodeInput() {
    return this._sslmode;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // temporary_credentials - computed: false, optional: true, required: false
  private _temporaryCredentials?: RedshiftProviderTemporaryCredentials; 
  public get temporaryCredentials() {
    return this._temporaryCredentials;
  }
  public set temporaryCredentials(value: RedshiftProviderTemporaryCredentials | undefined) {
    this._temporaryCredentials = value;
  }
  public resetTemporaryCredentials() {
    this._temporaryCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryCredentialsInput() {
    return this._temporaryCredentials;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database: cdktf.stringToTerraform(this._database),
      host: cdktf.stringToTerraform(this._host),
      max_connections: cdktf.numberToTerraform(this._maxConnections),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      sslmode: cdktf.stringToTerraform(this._sslmode),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
      temporary_credentials: redshiftProviderTemporaryCredentialsToTerraform(this._temporaryCredentials),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database: {
        value: cdktf.stringToHclTerraform(this._database),
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
      max_connections: {
        value: cdktf.numberToHclTerraform(this._maxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      sslmode: {
        value: cdktf.stringToHclTerraform(this._sslmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      temporary_credentials: {
        value: redshiftProviderTemporaryCredentialsToHclTerraform(this._temporaryCredentials),
        isBlock: true,
        type: "list",
        storageClassType: "RedshiftProviderTemporaryCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
