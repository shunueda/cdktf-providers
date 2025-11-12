// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_google_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGoogleIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * User authentication domain name for Google Cloud Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_google_identity_provider#auth_domain_name CloudGoogleIdentityProvider#auth_domain_name}
  */
  readonly authDomainName: string;
  /**
  * Email of the Google client for configuring Google Cloud Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_google_identity_provider#client_email CloudGoogleIdentityProvider#client_email}
  */
  readonly clientEmail: string;
  /**
  * Impersonated user for configuring Google Cloud Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_google_identity_provider#impersonated_user CloudGoogleIdentityProvider#impersonated_user}
  */
  readonly impersonatedUser: string;
  /**
  * Name of the Citrix Cloud Google Cloud Identity Provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_google_identity_provider#name CloudGoogleIdentityProvider#name}
  */
  readonly name: string;
  /**
  * Private key of the Google Cloud Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_google_identity_provider#private_key CloudGoogleIdentityProvider#private_key}
  */
  readonly privateKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_google_identity_provider citrix_cloud_google_identity_provider}
*/
export class CloudGoogleIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_cloud_google_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGoogleIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGoogleIdentityProvider to import
  * @param importFromId The id of the existing CloudGoogleIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_google_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGoogleIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_cloud_google_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_google_identity_provider citrix_cloud_google_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGoogleIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGoogleIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_cloud_google_identity_provider',
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
    this._authDomainName = config.authDomainName;
    this._clientEmail = config.clientEmail;
    this._impersonatedUser = config.impersonatedUser;
    this._name = config.name;
    this._privateKey = config.privateKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_domain_name - computed: false, optional: false, required: true
  private _authDomainName?: string; 
  public get authDomainName() {
    return this.getStringAttribute('auth_domain_name');
  }
  public set authDomainName(value: string) {
    this._authDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authDomainNameInput() {
    return this._authDomainName;
  }

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // google_customer_id - computed: true, optional: false, required: false
  public get googleCustomerId() {
    return this.getStringAttribute('google_customer_id');
  }

  // google_domain - computed: true, optional: false, required: false
  public get googleDomain() {
    return this.getStringAttribute('google_domain');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // impersonated_user - computed: false, optional: false, required: true
  private _impersonatedUser?: string; 
  public get impersonatedUser() {
    return this.getStringAttribute('impersonated_user');
  }
  public set impersonatedUser(value: string) {
    this._impersonatedUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonatedUserInput() {
    return this._impersonatedUser;
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_domain_name: cdktf.stringToTerraform(this._authDomainName),
      client_email: cdktf.stringToTerraform(this._clientEmail),
      impersonated_user: cdktf.stringToTerraform(this._impersonatedUser),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_domain_name: {
        value: cdktf.stringToHclTerraform(this._authDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_email: {
        value: cdktf.stringToHclTerraform(this._clientEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      impersonated_user: {
        value: cdktf.stringToHclTerraform(this._impersonatedUser),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
