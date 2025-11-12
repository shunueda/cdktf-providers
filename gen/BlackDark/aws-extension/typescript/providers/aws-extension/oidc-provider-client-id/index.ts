// https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs/resources/oidc_provider_client_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OidcProviderClientIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ClientID/Audience to be added to the OIDC provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs/resources/oidc_provider_client_id#client_id OidcProviderClientId#client_id}
  */
  readonly clientId: string;
  /**
  * The target OIDC provider ARN where the ClientID should be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs/resources/oidc_provider_client_id#oidc_arn OidcProviderClientId#oidc_arn}
  */
  readonly oidcArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs/resources/oidc_provider_client_id aws-extension_oidc_provider_client_id}
*/
export class OidcProviderClientId extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws-extension_oidc_provider_client_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OidcProviderClientId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OidcProviderClientId to import
  * @param importFromId The id of the existing OidcProviderClientId that should be imported. Refer to the {@link https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs/resources/oidc_provider_client_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OidcProviderClientId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws-extension_oidc_provider_client_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs/resources/oidc_provider_client_id aws-extension_oidc_provider_client_id} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OidcProviderClientIdConfig
  */
  public constructor(scope: Construct, id: string, config: OidcProviderClientIdConfig) {
    super(scope, id, {
      terraformResourceType: 'aws-extension_oidc_provider_client_id',
      terraformGeneratorMetadata: {
        providerName: 'aws-extension',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._oidcArn = config.oidcArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // oidc_arn - computed: false, optional: false, required: true
  private _oidcArn?: string; 
  public get oidcArn() {
    return this.getStringAttribute('oidc_arn');
  }
  public set oidcArn(value: string) {
    this._oidcArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcArnInput() {
    return this._oidcArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      oidc_arn: cdktf.stringToTerraform(this._oidcArn),
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
      oidc_arn: {
        value: cdktf.stringToHclTerraform(this._oidcArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
