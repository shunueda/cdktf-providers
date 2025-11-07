// https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The time until the key expires. This is a string in the format of `30m`, `3h`, `90d`, etc. Defaults to `90d`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/api_key#time_to_expire ApiKey#time_to_expire}
  */
  readonly timeToExpire?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/api_key headscale_api_key}
*/
export class ApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "headscale_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiKey to import
  * @param importFromId The id of the existing ApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "headscale_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/api_key headscale_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApiKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'headscale_api_key',
      terraformGeneratorMetadata: {
        providerName: 'headscale',
        providerVersion: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._timeToExpire = config.timeToExpire;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // time_to_expire - computed: false, optional: true, required: false
  private _timeToExpire?: string; 
  public get timeToExpire() {
    return this.getStringAttribute('time_to_expire');
  }
  public set timeToExpire(value: string) {
    this._timeToExpire = value;
  }
  public resetTimeToExpire() {
    this._timeToExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToExpireInput() {
    return this._timeToExpire;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      time_to_expire: cdktf.stringToTerraform(this._timeToExpire),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      time_to_expire: {
        value: cdktf.stringToHclTerraform(this._timeToExpire),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
