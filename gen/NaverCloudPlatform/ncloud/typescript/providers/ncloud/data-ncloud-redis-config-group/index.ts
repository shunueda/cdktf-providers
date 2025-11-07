// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/redis_config_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudRedisConfigGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/redis_config_group#name DataNcloudRedisConfigGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/redis_config_group ncloud_redis_config_group}
*/
export class DataNcloudRedisConfigGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_redis_config_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudRedisConfigGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudRedisConfigGroup to import
  * @param importFromId The id of the existing DataNcloudRedisConfigGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/redis_config_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudRedisConfigGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_redis_config_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/redis_config_group ncloud_redis_config_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudRedisConfigGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataNcloudRedisConfigGroupConfig) {
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // redis_version - computed: true, optional: false, required: false
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
