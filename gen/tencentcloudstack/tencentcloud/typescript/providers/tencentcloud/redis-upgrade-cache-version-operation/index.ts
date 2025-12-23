// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/redis_upgrade_cache_version_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisUpgradeCacheVersionOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Current redis version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/redis_upgrade_cache_version_operation#current_redis_version RedisUpgradeCacheVersionOperation#current_redis_version}
  */
  readonly currentRedisVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/redis_upgrade_cache_version_operation#id RedisUpgradeCacheVersionOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/redis_upgrade_cache_version_operation#instance_id RedisUpgradeCacheVersionOperation#instance_id}
  */
  readonly instanceId: string;
  /**
  * Switch mode:1 - Upgrade now0 - Maintenance window upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/redis_upgrade_cache_version_operation#instance_type_upgrade_now RedisUpgradeCacheVersionOperation#instance_type_upgrade_now}
  */
  readonly instanceTypeUpgradeNow: number;
  /**
  * Upgradeable redis version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/redis_upgrade_cache_version_operation#upgrade_redis_version RedisUpgradeCacheVersionOperation#upgrade_redis_version}
  */
  readonly upgradeRedisVersion: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/redis_upgrade_cache_version_operation tencentcloud_redis_upgrade_cache_version_operation}
*/
export class RedisUpgradeCacheVersionOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_redis_upgrade_cache_version_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisUpgradeCacheVersionOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisUpgradeCacheVersionOperation to import
  * @param importFromId The id of the existing RedisUpgradeCacheVersionOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/redis_upgrade_cache_version_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisUpgradeCacheVersionOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_redis_upgrade_cache_version_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/redis_upgrade_cache_version_operation tencentcloud_redis_upgrade_cache_version_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisUpgradeCacheVersionOperationConfig
  */
  public constructor(scope: Construct, id: string, config: RedisUpgradeCacheVersionOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_redis_upgrade_cache_version_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._currentRedisVersion = config.currentRedisVersion;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceTypeUpgradeNow = config.instanceTypeUpgradeNow;
    this._upgradeRedisVersion = config.upgradeRedisVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_redis_version - computed: false, optional: false, required: true
  private _currentRedisVersion?: string; 
  public get currentRedisVersion() {
    return this.getStringAttribute('current_redis_version');
  }
  public set currentRedisVersion(value: string) {
    this._currentRedisVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currentRedisVersionInput() {
    return this._currentRedisVersion;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_type_upgrade_now - computed: false, optional: false, required: true
  private _instanceTypeUpgradeNow?: number; 
  public get instanceTypeUpgradeNow() {
    return this.getNumberAttribute('instance_type_upgrade_now');
  }
  public set instanceTypeUpgradeNow(value: number) {
    this._instanceTypeUpgradeNow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeUpgradeNowInput() {
    return this._instanceTypeUpgradeNow;
  }

  // upgrade_redis_version - computed: false, optional: false, required: true
  private _upgradeRedisVersion?: string; 
  public get upgradeRedisVersion() {
    return this.getStringAttribute('upgrade_redis_version');
  }
  public set upgradeRedisVersion(value: string) {
    this._upgradeRedisVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeRedisVersionInput() {
    return this._upgradeRedisVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      current_redis_version: cdktf.stringToTerraform(this._currentRedisVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_type_upgrade_now: cdktf.numberToTerraform(this._instanceTypeUpgradeNow),
      upgrade_redis_version: cdktf.stringToTerraform(this._upgradeRedisVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      current_redis_version: {
        value: cdktf.stringToHclTerraform(this._currentRedisVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type_upgrade_now: {
        value: cdktf.numberToHclTerraform(this._instanceTypeUpgradeNow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upgrade_redis_version: {
        value: cdktf.stringToHclTerraform(this._upgradeRedisVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
