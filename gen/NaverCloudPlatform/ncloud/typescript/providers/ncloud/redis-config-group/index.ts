// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis_config_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisConfigGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis_config_group#description RedisConfigGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis_config_group#name RedisConfigGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis_config_group#redis_version RedisConfigGroup#redis_version}
  */
  readonly redisVersion: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis_config_group ncloud_redis_config_group}
*/
export class RedisConfigGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_redis_config_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisConfigGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisConfigGroup to import
  * @param importFromId The id of the existing RedisConfigGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis_config_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisConfigGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_redis_config_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis_config_group ncloud_redis_config_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisConfigGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RedisConfigGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_redis_config_group',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._redisVersion = config.redisVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // redis_version - computed: false, optional: false, required: true
  private _redisVersion?: string; 
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }
  public set redisVersion(value: string) {
    this._redisVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisVersionInput() {
    return this._redisVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      redis_version: cdktf.stringToTerraform(this._redisVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      redis_version: {
        value: cdktf.stringToHclTerraform(this._redisVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
