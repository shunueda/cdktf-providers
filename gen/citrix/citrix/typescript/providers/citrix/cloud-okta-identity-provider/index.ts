// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_okta_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudOktaIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Citrix Cloud Identity Provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_okta_identity_provider#name CloudOktaIdentityProvider#name}
  */
  readonly name: string;
  /**
  * Okta API token for configuring Okta Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_okta_identity_provider#okta_api_token CloudOktaIdentityProvider#okta_api_token}
  */
  readonly oktaApiToken: string;
  /**
  * ID of the Okta client for configuring Okta Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_okta_identity_provider#okta_client_id CloudOktaIdentityProvider#okta_client_id}
  */
  readonly oktaClientId: string;
  /**
  * Secret of the Okta client for configuring Okta Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_okta_identity_provider#okta_client_secret CloudOktaIdentityProvider#okta_client_secret}
  */
  readonly oktaClientSecret: string;
  /**
  * Okta domain name for configuring Okta Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_okta_identity_provider#okta_domain CloudOktaIdentityProvider#okta_domain}
  */
  readonly oktaDomain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_okta_identity_provider citrix_cloud_okta_identity_provider}
*/
export class CloudOktaIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_cloud_okta_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudOktaIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudOktaIdentityProvider to import
  * @param importFromId The id of the existing CloudOktaIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_okta_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudOktaIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_cloud_okta_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_okta_identity_provider citrix_cloud_okta_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudOktaIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CloudOktaIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_cloud_okta_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._oktaApiToken = config.oktaApiToken;
    this._oktaClientId = config.oktaClientId;
    this._oktaClientSecret = config.oktaClientSecret;
    this._oktaDomain = config.oktaDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // okta_api_token - computed: false, optional: false, required: true
  private _oktaApiToken?: string; 
  public get oktaApiToken() {
    return this.getStringAttribute('okta_api_token');
  }
  public set oktaApiToken(value: string) {
    this._oktaApiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaApiTokenInput() {
    return this._oktaApiToken;
  }

  // okta_client_id - computed: false, optional: false, required: true
  private _oktaClientId?: string; 
  public get oktaClientId() {
    return this.getStringAttribute('okta_client_id');
  }
  public set oktaClientId(value: string) {
    this._oktaClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaClientIdInput() {
    return this._oktaClientId;
  }

  // okta_client_secret - computed: false, optional: false, required: true
  private _oktaClientSecret?: string; 
  public get oktaClientSecret() {
    return this.getStringAttribute('okta_client_secret');
  }
  public set oktaClientSecret(value: string) {
    this._oktaClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaClientSecretInput() {
    return this._oktaClientSecret;
  }

  // okta_domain - computed: false, optional: false, required: true
  private _oktaDomain?: string; 
  public get oktaDomain() {
    return this.getStringAttribute('okta_domain');
  }
  public set oktaDomain(value: string) {
    this._oktaDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaDomainInput() {
    return this._oktaDomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      okta_api_token: cdktf.stringToTerraform(this._oktaApiToken),
      okta_client_id: cdktf.stringToTerraform(this._oktaClientId),
      okta_client_secret: cdktf.stringToTerraform(this._oktaClientSecret),
      okta_domain: cdktf.stringToTerraform(this._oktaDomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_api_token: {
        value: cdktf.stringToHclTerraform(this._oktaApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_client_id: {
        value: cdktf.stringToHclTerraform(this._oktaClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_client_secret: {
        value: cdktf.stringToHclTerraform(this._oktaClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_domain: {
        value: cdktf.stringToHclTerraform(this._oktaDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
