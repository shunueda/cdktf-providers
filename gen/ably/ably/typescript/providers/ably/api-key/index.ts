// https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Ably application ID which this key is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/api_key#app_id ApiKey#app_id}
  */
  readonly appId: string;
  /**
  * The capabilities that this key has. More information on capabilities can be found in the [Ably documentation](https://ably.com/docs/core-features/authentication#capabilities-explained)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/api_key#capabilities ApiKey#capabilities}
  */
  readonly capabilities: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The name for your API key. This is a friendly name for your reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/api_key#name ApiKey#name}
  */
  readonly name: string;
  /**
  * Allow tokens issued by this key to be revoked. More information on Token Revocation can be found in the [Ably documentation](https://ably.com/docs/auth/revocation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/api_key#revocable_tokens ApiKey#revocable_tokens}
  */
  readonly revocableTokens?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/api_key ably_api_key}
*/
export class ApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ably_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiKey to import
  * @param importFromId The id of the existing ApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ably_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/api_key ably_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'ably_api_key',
      terraformGeneratorMetadata: {
        providerName: 'ably',
        providerVersion: '0.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._capabilities = config.capabilities;
    this._name = config.name;
    this._revocableTokens = config.revocableTokens;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // capabilities - computed: false, optional: false, required: true
  private _capabilities?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get capabilities() {
    return this.interpolationForAttribute('capabilities');
  }
  public set capabilities(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getNumberAttribute('modified');
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

  // revocable_tokens - computed: true, optional: true, required: false
  private _revocableTokens?: boolean | cdktf.IResolvable; 
  public get revocableTokens() {
    return this.getBooleanAttribute('revocable_tokens');
  }
  public set revocableTokens(value: boolean | cdktf.IResolvable) {
    this._revocableTokens = value;
  }
  public resetRevocableTokens() {
    this._revocableTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocableTokensInput() {
    return this._revocableTokens;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      capabilities: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._capabilities),
      name: cdktf.stringToTerraform(this._name),
      revocable_tokens: cdktf.booleanToTerraform(this._revocableTokens),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capabilities: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._capabilities),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revocable_tokens: {
        value: cdktf.booleanToHclTerraform(this._revocableTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
