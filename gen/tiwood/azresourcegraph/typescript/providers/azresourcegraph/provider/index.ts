// https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzresourcegraphProviderConfig {
  /**
  * The Client ID which should be used. This can also be sourced from the `AZRGRAPH_CLIENT_ID` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs#client_id AzresourcegraphProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The Client Secret which should be used. This can also be sourced from the `AZRGRAPH_CLIENT_SECRET` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs#client_secret AzresourcegraphProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The Tenant ID which should be used. This can also be sourced from the `AZRGRAPH_TENANT_ID` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs#tenant_id AzresourcegraphProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Use Azure Default Credential for authentication. If this is true, the provider will try to authenticate using the following mechanisms in order:Environment variables > Workload identity > Managed Identity > Azure CLI > Azure Developer CLI This can also be sourced from the `AZRGRAPH_USE_AZURE_DEFAULT_CREDENTIAL` Environment Variable. Note, that the Client Secret flow will take precedence over the Azure Default Credential. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs#use_azure_default_credential AzresourcegraphProvider#use_azure_default_credential}
  */
  readonly useAzureDefaultCredential?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs#alias AzresourcegraphProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs azresourcegraph}
*/
export class AzresourcegraphProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azresourcegraph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzresourcegraphProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzresourcegraphProvider to import
  * @param importFromId The id of the existing AzresourcegraphProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzresourcegraphProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azresourcegraph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs azresourcegraph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzresourcegraphProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AzresourcegraphProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azresourcegraph',
      terraformGeneratorMetadata: {
        providerName: 'azresourcegraph',
        providerVersion: '0.3.0'
      },
      terraformProviderSource: 'tiwood/azresourcegraph'
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._tenantId = config.tenantId;
    this._useAzureDefaultCredential = config.useAzureDefaultCredential;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_azure_default_credential - computed: false, optional: true, required: false
  private _useAzureDefaultCredential?: boolean | cdktf.IResolvable; 
  public get useAzureDefaultCredential() {
    return this._useAzureDefaultCredential;
  }
  public set useAzureDefaultCredential(value: boolean | cdktf.IResolvable | undefined) {
    this._useAzureDefaultCredential = value;
  }
  public resetUseAzureDefaultCredential() {
    this._useAzureDefaultCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAzureDefaultCredentialInput() {
    return this._useAzureDefaultCredential;
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
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_azure_default_credential: cdktf.booleanToTerraform(this._useAzureDefaultCredential),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_azure_default_credential: {
        value: cdktf.booleanToHclTerraform(this._useAzureDefaultCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
