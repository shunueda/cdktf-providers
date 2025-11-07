// https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_oauth2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumerOauth2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_oauth2#client_id ConsumerOauth2#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_oauth2#client_secret ConsumerOauth2#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_oauth2#consumer_id ConsumerOauth2#consumer_id}
  */
  readonly consumerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_oauth2#hash_secret ConsumerOauth2#hash_secret}
  */
  readonly hashSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_oauth2#name ConsumerOauth2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_oauth2#redirect_uris ConsumerOauth2#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_oauth2#tags ConsumerOauth2#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_oauth2 kong_consumer_oauth2}
*/
export class ConsumerOauth2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kong_consumer_oauth2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsumerOauth2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsumerOauth2 to import
  * @param importFromId The id of the existing ConsumerOauth2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_oauth2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsumerOauth2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kong_consumer_oauth2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_oauth2 kong_consumer_oauth2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsumerOauth2Config
  */
  public constructor(scope: Construct, id: string, config: ConsumerOauth2Config) {
    super(scope, id, {
      terraformResourceType: 'kong_consumer_oauth2',
      terraformGeneratorMetadata: {
        providerName: 'kong',
        providerVersion: '8.1.0'
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
    this._consumerId = config.consumerId;
    this._hashSecret = config.hashSecret;
    this._name = config.name;
    this._redirectUris = config.redirectUris;
    this._tags = config.tags;
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

  // consumer_id - computed: false, optional: false, required: true
  private _consumerId?: string; 
  public get consumerId() {
    return this.getStringAttribute('consumer_id');
  }
  public set consumerId(value: string) {
    this._consumerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIdInput() {
    return this._consumerId;
  }

  // hash_secret - computed: true, optional: true, required: false
  private _hashSecret?: boolean | cdktf.IResolvable; 
  public get hashSecret() {
    return this.getBooleanAttribute('hash_secret');
  }
  public set hashSecret(value: boolean | cdktf.IResolvable) {
    this._hashSecret = value;
  }
  public resetHashSecret() {
    this._hashSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashSecretInput() {
    return this._hashSecret;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kong_id - computed: true, optional: false, required: false
  public get kongId() {
    return this.getStringAttribute('kong_id');
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

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      consumer_id: cdktf.stringToTerraform(this._consumerId),
      hash_secret: cdktf.booleanToTerraform(this._hashSecret),
      name: cdktf.stringToTerraform(this._name),
      redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectUris),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
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
      consumer_id: {
        value: cdktf.stringToHclTerraform(this._consumerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_secret: {
        value: cdktf.booleanToHclTerraform(this._hashSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
