// https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/vcs_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcsProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to automatically create webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/vcs_provider#auto_create_webhooks VcsProvider#auto_create_webhooks}
  */
  readonly autoCreateWebhooks: boolean | cdktf.IResolvable;
  /**
  * A description of the VCS provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/vcs_provider#description VcsProvider#description}
  */
  readonly description: string;
  /**
  * The path of the group where this VCS provider resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/vcs_provider#group_path VcsProvider#group_path}
  */
  readonly groupPath: string;
  /**
  * The name of the VCS provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/vcs_provider#name VcsProvider#name}
  */
  readonly name: string;
  /**
  * A description of the VCS provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/vcs_provider#oauth_client_id VcsProvider#oauth_client_id}
  */
  readonly oauthClientId: string;
  /**
  * A description of the VCS provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/vcs_provider#oauth_client_secret VcsProvider#oauth_client_secret}
  */
  readonly oauthClientSecret: string;
  /**
  * The type of this VCS provider: gitlab, github, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/vcs_provider#type VcsProvider#type}
  */
  readonly type: string;
  /**
  * API URL for this VCS provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/vcs_provider#url VcsProvider#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/vcs_provider tharsis_vcs_provider}
*/
export class VcsProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis_vcs_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcsProvider to import
  * @param importFromId The id of the existing VcsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/vcs_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis_vcs_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/vcs_provider tharsis_vcs_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcsProviderConfig
  */
  public constructor(scope: Construct, id: string, config: VcsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'tharsis_vcs_provider',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreateWebhooks = config.autoCreateWebhooks;
    this._description = config.description;
    this._groupPath = config.groupPath;
    this._name = config.name;
    this._oauthClientId = config.oauthClientId;
    this._oauthClientSecret = config.oauthClientSecret;
    this._type = config.type;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_webhooks - computed: false, optional: false, required: true
  private _autoCreateWebhooks?: boolean | cdktf.IResolvable; 
  public get autoCreateWebhooks() {
    return this.getBooleanAttribute('auto_create_webhooks');
  }
  public set autoCreateWebhooks(value: boolean | cdktf.IResolvable) {
    this._autoCreateWebhooks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateWebhooksInput() {
    return this._autoCreateWebhooks;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // group_path - computed: false, optional: false, required: true
  private _groupPath?: string; 
  public get groupPath() {
    return this.getStringAttribute('group_path');
  }
  public set groupPath(value: string) {
    this._groupPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPathInput() {
    return this._groupPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // oauth_authorization_url - computed: true, optional: false, required: false
  public get oauthAuthorizationUrl() {
    return this.getStringAttribute('oauth_authorization_url');
  }

  // oauth_client_id - computed: false, optional: false, required: true
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_client_secret - computed: false, optional: false, required: true
  private _oauthClientSecret?: string; 
  public get oauthClientSecret() {
    return this.getStringAttribute('oauth_client_secret');
  }
  public set oauthClientSecret(value: string) {
    this._oauthClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret;
  }

  // resource_path - computed: true, optional: false, required: false
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_webhooks: cdktf.booleanToTerraform(this._autoCreateWebhooks),
      description: cdktf.stringToTerraform(this._description),
      group_path: cdktf.stringToTerraform(this._groupPath),
      name: cdktf.stringToTerraform(this._name),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      oauth_client_secret: cdktf.stringToTerraform(this._oauthClientSecret),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_webhooks: {
        value: cdktf.booleanToHclTerraform(this._autoCreateWebhooks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_path: {
        value: cdktf.stringToHclTerraform(this._groupPath),
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
      oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauthClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
