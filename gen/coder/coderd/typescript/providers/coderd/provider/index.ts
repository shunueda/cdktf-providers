// https://registry.terraform.io/providers/coder/coderd/0.0.12/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoderdProviderConfig {
  /**
  * Default organization ID to use when creating resources. Defaults to the first organization the token has access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs#default_organization_id CoderdProvider#default_organization_id}
  */
  readonly defaultOrganizationId?: string;
  /**
  * API token for communicating with the deployment. Most resource types require elevated permissions. Defaults to `$CODER_SESSION_TOKEN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs#token CoderdProvider#token}
  */
  readonly token?: string;
  /**
  * URL to the Coder deployment. Defaults to `$CODER_URL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs#url CoderdProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs#alias CoderdProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs coderd}
*/
export class CoderdProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coderd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoderdProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoderdProvider to import
  * @param importFromId The id of the existing CoderdProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoderdProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coderd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs coderd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoderdProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CoderdProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coderd',
      terraformGeneratorMetadata: {
        providerName: 'coderd',
        providerVersion: '0.0.12'
      },
      terraformProviderSource: 'coder/coderd'
    });
    this._defaultOrganizationId = config.defaultOrganizationId;
    this._token = config.token;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_organization_id - computed: false, optional: true, required: false
  private _defaultOrganizationId?: string; 
  public get defaultOrganizationId() {
    return this._defaultOrganizationId;
  }
  public set defaultOrganizationId(value: string | undefined) {
    this._defaultOrganizationId = value;
  }
  public resetDefaultOrganizationId() {
    this._defaultOrganizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOrganizationIdInput() {
    return this._defaultOrganizationId;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      default_organization_id: cdktf.stringToTerraform(this._defaultOrganizationId),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_organization_id: {
        value: cdktf.stringToHclTerraform(this._defaultOrganizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
