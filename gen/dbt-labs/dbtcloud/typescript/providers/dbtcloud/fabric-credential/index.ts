// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of the adapter (fabric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential#adapter_type FabricCredential#adapter_type}
  */
  readonly adapterType: string;
  /**
  * The client ID of the Azure Active Directory service principal. This is only used when connecting to Azure SQL with an AAD service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential#client_id FabricCredential#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret of the Azure Active Directory service principal. This is only used when connecting to Azure SQL with an AAD service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential#client_secret FabricCredential#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The password for the account to connect to. Only used when connection with AD user/pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential#password FabricCredential#password}
  */
  readonly password?: string;
  /**
  * Project ID to create the Fabric credential in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential#project_id FabricCredential#project_id}
  */
  readonly projectId: number;
  /**
  * The schema where to create the dbt models
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential#schema FabricCredential#schema}
  */
  readonly schema: string;
  /**
  * Optionally set this to the principal who should own the schemas created by dbt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential#schema_authorization FabricCredential#schema_authorization}
  */
  readonly schemaAuthorization?: string;
  /**
  * The tenant ID of the Azure Active Directory instance. This is only used when connecting to Azure SQL with a service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential#tenant_id FabricCredential#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The username of the Fabric account to connect to. Only used when connection with AD user/pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential#user FabricCredential#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential dbtcloud_fabric_credential}
*/
export class FabricCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_fabric_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricCredential to import
  * @param importFromId The id of the existing FabricCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_fabric_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/fabric_credential dbtcloud_fabric_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: FabricCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_fabric_credential',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adapterType = config.adapterType;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._password = config.password;
    this._projectId = config.projectId;
    this._schema = config.schema;
    this._schemaAuthorization = config.schemaAuthorization;
    this._tenantId = config.tenantId;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adapter_type - computed: false, optional: false, required: true
  private _adapterType?: string; 
  public get adapterType() {
    return this.getStringAttribute('adapter_type');
  }
  public set adapterType(value: string) {
    this._adapterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterTypeInput() {
    return this._adapterType;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // schema_authorization - computed: true, optional: true, required: false
  private _schemaAuthorization?: string; 
  public get schemaAuthorization() {
    return this.getStringAttribute('schema_authorization');
  }
  public set schemaAuthorization(value: string) {
    this._schemaAuthorization = value;
  }
  public resetSchemaAuthorization() {
    this._schemaAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaAuthorizationInput() {
    return this._schemaAuthorization;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // user - computed: true, optional: true, required: false
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
      adapter_type: cdktf.stringToTerraform(this._adapterType),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      password: cdktf.stringToTerraform(this._password),
      project_id: cdktf.numberToTerraform(this._projectId),
      schema: cdktf.stringToTerraform(this._schema),
      schema_authorization: cdktf.stringToTerraform(this._schemaAuthorization),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adapter_type: {
        value: cdktf.stringToHclTerraform(this._adapterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_authorization: {
        value: cdktf.stringToHclTerraform(this._schemaAuthorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
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
