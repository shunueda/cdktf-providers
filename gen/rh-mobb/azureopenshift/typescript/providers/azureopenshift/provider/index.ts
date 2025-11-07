// https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureopenshiftProviderConfig {
  /**
  * The Client ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs#client_id AzureopenshiftProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs#client_secret AzureopenshiftProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The Cloud Environment which should be used. Possible values are public and usgovernment. Defaults to public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs#environment AzureopenshiftProvider#environment}
  */
  readonly environment?: string;
  /**
  * The Subscription ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs#subscription_id AzureopenshiftProvider#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * The Tenant ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs#tenant_id AzureopenshiftProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs#alias AzureopenshiftProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs azureopenshift}
*/
export class AzureopenshiftProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azureopenshift";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureopenshiftProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureopenshiftProvider to import
  * @param importFromId The id of the existing AzureopenshiftProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureopenshiftProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azureopenshift", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs azureopenshift} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureopenshiftProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AzureopenshiftProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azureopenshift',
      terraformGeneratorMetadata: {
        providerName: 'azureopenshift',
        providerVersion: '0.4.0'
      },
      terraformProviderSource: 'rh-mobb/azureopenshift'
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._environment = config.environment;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
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

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this._subscriptionId;
  }
  public set subscriptionId(value: string | undefined) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
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
      environment: cdktf.stringToTerraform(this._environment),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
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
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
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
