// https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DoublecloudProviderConfig {
  /**
  * Path to the authorized key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs#authorized_key DoublecloudProvider#authorized_key}
  */
  readonly authorizedKey?: string;
  /**
  * API endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs#endpoint DoublecloudProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Federation Endpoint which is used to authorized in federation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs#federation_endpoint DoublecloudProvider#federation_endpoint}
  */
  readonly federationEndpoint?: string;
  /**
  * Federation ID to authorize, if provided authorized_key is ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs#federation_id DoublecloudProvider#federation_id}
  */
  readonly federationId?: string;
  /**
  * Token resolver URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs#token_url DoublecloudProvider#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs#alias DoublecloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs doublecloud}
*/
export class DoublecloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doublecloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DoublecloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DoublecloudProvider to import
  * @param importFromId The id of the existing DoublecloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DoublecloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doublecloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs doublecloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DoublecloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DoublecloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'doublecloud',
      terraformGeneratorMetadata: {
        providerName: 'doublecloud',
        providerVersion: '0.1.26'
      },
      terraformProviderSource: 'doublecloud/doublecloud'
    });
    this._authorizedKey = config.authorizedKey;
    this._endpoint = config.endpoint;
    this._federationEndpoint = config.federationEndpoint;
    this._federationId = config.federationId;
    this._tokenUrl = config.tokenUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_key - computed: false, optional: true, required: false
  private _authorizedKey?: string; 
  public get authorizedKey() {
    return this._authorizedKey;
  }
  public set authorizedKey(value: string | undefined) {
    this._authorizedKey = value;
  }
  public resetAuthorizedKey() {
    this._authorizedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeyInput() {
    return this._authorizedKey;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // federation_endpoint - computed: false, optional: true, required: false
  private _federationEndpoint?: string; 
  public get federationEndpoint() {
    return this._federationEndpoint;
  }
  public set federationEndpoint(value: string | undefined) {
    this._federationEndpoint = value;
  }
  public resetFederationEndpoint() {
    this._federationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federationEndpointInput() {
    return this._federationEndpoint;
  }

  // federation_id - computed: false, optional: true, required: false
  private _federationId?: string; 
  public get federationId() {
    return this._federationId;
  }
  public set federationId(value: string | undefined) {
    this._federationId = value;
  }
  public resetFederationId() {
    this._federationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federationIdInput() {
    return this._federationId;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this._tokenUrl;
  }
  public set tokenUrl(value: string | undefined) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
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
      authorized_key: cdktf.stringToTerraform(this._authorizedKey),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      federation_endpoint: cdktf.stringToTerraform(this._federationEndpoint),
      federation_id: cdktf.stringToTerraform(this._federationId),
      token_url: cdktf.stringToTerraform(this._tokenUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized_key: {
        value: cdktf.stringToHclTerraform(this._authorizedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federation_endpoint: {
        value: cdktf.stringToHclTerraform(this._federationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federation_id: {
        value: cdktf.stringToHclTerraform(this._federationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_url: {
        value: cdktf.stringToHclTerraform(this._tokenUrl),
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
