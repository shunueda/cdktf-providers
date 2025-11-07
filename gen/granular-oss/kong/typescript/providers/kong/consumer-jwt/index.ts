// https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_jwt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumerJwtConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_jwt#algorithm ConsumerJwt#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_jwt#consumer_id ConsumerJwt#consumer_id}
  */
  readonly consumerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_jwt#key ConsumerJwt#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_jwt#rsa_public_key ConsumerJwt#rsa_public_key}
  */
  readonly rsaPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_jwt#secret ConsumerJwt#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_jwt#tags ConsumerJwt#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_jwt kong_consumer_jwt}
*/
export class ConsumerJwt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kong_consumer_jwt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsumerJwt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsumerJwt to import
  * @param importFromId The id of the existing ConsumerJwt that should be imported. Refer to the {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_jwt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsumerJwt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kong_consumer_jwt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_jwt kong_consumer_jwt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsumerJwtConfig
  */
  public constructor(scope: Construct, id: string, config: ConsumerJwtConfig) {
    super(scope, id, {
      terraformResourceType: 'kong_consumer_jwt',
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
    this._algorithm = config.algorithm;
    this._consumerId = config.consumerId;
    this._key = config.key;
    this._rsaPublicKey = config.rsaPublicKey;
    this._secret = config.secret;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // kong_id - computed: true, optional: false, required: false
  public get kongId() {
    return this.getStringAttribute('kong_id');
  }

  // rsa_public_key - computed: false, optional: true, required: false
  private _rsaPublicKey?: string; 
  public get rsaPublicKey() {
    return this.getStringAttribute('rsa_public_key');
  }
  public set rsaPublicKey(value: string) {
    this._rsaPublicKey = value;
  }
  public resetRsaPublicKey() {
    this._rsaPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPublicKeyInput() {
    return this._rsaPublicKey;
  }

  // secret - computed: true, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
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
      algorithm: cdktf.stringToTerraform(this._algorithm),
      consumer_id: cdktf.stringToTerraform(this._consumerId),
      key: cdktf.stringToTerraform(this._key),
      rsa_public_key: cdktf.stringToTerraform(this._rsaPublicKey),
      secret: cdktf.stringToTerraform(this._secret),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_public_key: {
        value: cdktf.stringToHclTerraform(this._rsaPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
