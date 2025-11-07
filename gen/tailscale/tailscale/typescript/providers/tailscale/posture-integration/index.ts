// https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/posture_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostureIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for your client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/posture_integration#client_id PostureIntegration#client_id}
  */
  readonly clientId?: string;
  /**
  * The secret (auth key, token, etc.) used to authenticate with the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/posture_integration#client_secret PostureIntegration#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Identifies which of the provider's clouds to integrate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/posture_integration#cloud_id PostureIntegration#cloud_id}
  */
  readonly cloudId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/posture_integration#id PostureIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of posture integration data provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/posture_integration#posture_provider PostureIntegration#posture_provider}
  */
  readonly postureProvider: string;
  /**
  * The Microsoft Intune directory (tenant) ID. For other providers, this is left blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/posture_integration#tenant_id PostureIntegration#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/posture_integration tailscale_posture_integration}
*/
export class PostureIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailscale_posture_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostureIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostureIntegration to import
  * @param importFromId The id of the existing PostureIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/posture_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostureIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailscale_posture_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/posture_integration tailscale_posture_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostureIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: PostureIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'tailscale_posture_integration',
      terraformGeneratorMetadata: {
        providerName: 'tailscale',
        providerVersion: '0.24.0'
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
    this._clientSecret = config.clientSecret;
    this._cloudId = config.cloudId;
    this._id = config.id;
    this._postureProvider = config.postureProvider;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // cloud_id - computed: false, optional: true, required: false
  private _cloudId?: string; 
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }
  public set cloudId(value: string) {
    this._cloudId = value;
  }
  public resetCloudId() {
    this._cloudId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdInput() {
    return this._cloudId;
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

  // posture_provider - computed: false, optional: false, required: true
  private _postureProvider?: string; 
  public get postureProvider() {
    return this.getStringAttribute('posture_provider');
  }
  public set postureProvider(value: string) {
    this._postureProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postureProviderInput() {
    return this._postureProvider;
  }

  // tenant_id - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      cloud_id: cdktf.stringToTerraform(this._cloudId),
      id: cdktf.stringToTerraform(this._id),
      posture_provider: cdktf.stringToTerraform(this._postureProvider),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
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
      cloud_id: {
        value: cdktf.stringToHclTerraform(this._cloudId),
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
      posture_provider: {
        value: cdktf.stringToHclTerraform(this._postureProvider),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
