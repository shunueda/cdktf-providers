// https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_key_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumerKeyAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_key_auth#consumer_id ConsumerKeyAuth#consumer_id}
  */
  readonly consumerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_key_auth#key ConsumerKeyAuth#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_key_auth#tags ConsumerKeyAuth#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_key_auth kong_consumer_key_auth}
*/
export class ConsumerKeyAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kong_consumer_key_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsumerKeyAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsumerKeyAuth to import
  * @param importFromId The id of the existing ConsumerKeyAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_key_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsumerKeyAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kong_consumer_key_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/consumer_key_auth kong_consumer_key_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsumerKeyAuthConfig
  */
  public constructor(scope: Construct, id: string, config: ConsumerKeyAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'kong_consumer_key_auth',
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
    this._consumerId = config.consumerId;
    this._key = config.key;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // kong_id - computed: true, optional: false, required: false
  public get kongId() {
    return this.getStringAttribute('kong_id');
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
      consumer_id: cdktf.stringToTerraform(this._consumerId),
      key: cdktf.stringToTerraform(this._key),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
