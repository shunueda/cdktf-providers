// https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlProviderConfig {
  /**
  * When provided, Azure AD authentication will be used when connecting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs#azure_auth MssqlProvider#azure_auth}
  */
  readonly azureAuth?: MssqlProviderAzureAuth;
  /**
  * FQDN or IP address of the SQL endpoint. Can be also set using `MSSQL_HOSTNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs#hostname MssqlProvider#hostname}
  */
  readonly hostname?: string;
  /**
  * TCP port of SQL endpoint. Defaults to `1433`. Can be also set using `MSSQL_PORT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs#port MssqlProvider#port}
  */
  readonly port?: number;
  /**
  * When provided, SQL authentication will be used when connecting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs#sql_auth MssqlProvider#sql_auth}
  */
  readonly sqlAuth?: MssqlProviderSqlAuth;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs#alias MssqlProvider#alias}
  */
  readonly alias?: string;
}
export interface MssqlProviderAzureAuth {
  /**
  * Service Principal client (application) ID. When omitted, default, chained set of credentials will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs#client_id MssqlProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Service Principal secret. When omitted, default, chained set of credentials will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs#client_secret MssqlProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Azure AD tenant ID. Required only if Azure SQL Server's tenant is different than Service Principal's.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs#tenant_id MssqlProvider#tenant_id}
  */
  readonly tenantId?: string;
}

export function mssqlProviderAzureAuthToTerraform(struct?: MssqlProviderAzureAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function mssqlProviderAzureAuthToHclTerraform(struct?: MssqlProviderAzureAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface MssqlProviderSqlAuth {
  /**
  * Password for SQL authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs#password MssqlProvider#password}
  */
  readonly password: string;
  /**
  * User name for SQL authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs#username MssqlProvider#username}
  */
  readonly username: string;
}

export function mssqlProviderSqlAuthToTerraform(struct?: MssqlProviderSqlAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function mssqlProviderSqlAuthToHclTerraform(struct?: MssqlProviderSqlAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs mssql}
*/
export class MssqlProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mssql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MssqlProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MssqlProvider to import
  * @param importFromId The id of the existing MssqlProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MssqlProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mssql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs mssql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MssqlProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mssql',
      terraformGeneratorMetadata: {
        providerName: 'mssql',
        providerVersion: '0.6.0'
      },
      terraformProviderSource: 'PGSSoft/mssql'
    });
    this._azureAuth = config.azureAuth;
    this._hostname = config.hostname;
    this._port = config.port;
    this._sqlAuth = config.sqlAuth;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_auth - computed: false, optional: true, required: false
  private _azureAuth?: MssqlProviderAzureAuth; 
  public get azureAuth() {
    return this._azureAuth;
  }
  public set azureAuth(value: MssqlProviderAzureAuth | undefined) {
    this._azureAuth = value;
  }
  public resetAzureAuth() {
    this._azureAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAuthInput() {
    return this._azureAuth;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this._hostname;
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // sql_auth - computed: false, optional: true, required: false
  private _sqlAuth?: MssqlProviderSqlAuth; 
  public get sqlAuth() {
    return this._sqlAuth;
  }
  public set sqlAuth(value: MssqlProviderSqlAuth | undefined) {
    this._sqlAuth = value;
  }
  public resetSqlAuth() {
    this._sqlAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlAuthInput() {
    return this._sqlAuth;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_auth: mssqlProviderAzureAuthToTerraform(this._azureAuth),
      hostname: cdktf.stringToTerraform(this._hostname),
      port: cdktf.numberToTerraform(this._port),
      sql_auth: mssqlProviderSqlAuthToTerraform(this._sqlAuth),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_auth: {
        value: mssqlProviderAzureAuthToHclTerraform(this._azureAuth),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlProviderAzureAuth",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      sql_auth: {
        value: mssqlProviderSqlAuthToHclTerraform(this._sqlAuth),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlProviderSqlAuth",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
