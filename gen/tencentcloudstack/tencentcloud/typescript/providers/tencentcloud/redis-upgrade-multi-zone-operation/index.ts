// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_upgrade_multi_zone_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisUpgradeMultiZoneOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_upgrade_multi_zone_operation#id RedisUpgradeMultiZoneOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_upgrade_multi_zone_operation#instance_id RedisUpgradeMultiZoneOperation#instance_id}
  */
  readonly instanceId: string;
  /**
  * After you upgrade Multi-AZ, whether the nearby access feature is supported.true: Supports nearby access.The upgrade process, which requires upgrading both the proxy version and the Redis kernel minor version, involves data migration and can take several hours.false: No need to support nearby access.Upgrading Multi-AZ only involves managing metadata migration, with no service impact, and the upgrade process typically completes within 3 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_upgrade_multi_zone_operation#upgrade_proxy_and_redis_server RedisUpgradeMultiZoneOperation#upgrade_proxy_and_redis_server}
  */
  readonly upgradeProxyAndRedisServer?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_upgrade_multi_zone_operation tencentcloud_redis_upgrade_multi_zone_operation}
*/
export class RedisUpgradeMultiZoneOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_redis_upgrade_multi_zone_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisUpgradeMultiZoneOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisUpgradeMultiZoneOperation to import
  * @param importFromId The id of the existing RedisUpgradeMultiZoneOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_upgrade_multi_zone_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisUpgradeMultiZoneOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_redis_upgrade_multi_zone_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_upgrade_multi_zone_operation tencentcloud_redis_upgrade_multi_zone_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisUpgradeMultiZoneOperationConfig
  */
  public constructor(scope: Construct, id: string, config: RedisUpgradeMultiZoneOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_redis_upgrade_multi_zone_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._upgradeProxyAndRedisServer = config.upgradeProxyAndRedisServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // upgrade_proxy_and_redis_server - computed: false, optional: true, required: false
  private _upgradeProxyAndRedisServer?: boolean | cdktf.IResolvable; 
  public get upgradeProxyAndRedisServer() {
    return this.getBooleanAttribute('upgrade_proxy_and_redis_server');
  }
  public set upgradeProxyAndRedisServer(value: boolean | cdktf.IResolvable) {
    this._upgradeProxyAndRedisServer = value;
  }
  public resetUpgradeProxyAndRedisServer() {
    this._upgradeProxyAndRedisServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeProxyAndRedisServerInput() {
    return this._upgradeProxyAndRedisServer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      upgrade_proxy_and_redis_server: cdktf.booleanToTerraform(this._upgradeProxyAndRedisServer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      upgrade_proxy_and_redis_server: {
        value: cdktf.booleanToHclTerraform(this._upgradeProxyAndRedisServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
