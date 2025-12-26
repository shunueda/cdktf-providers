// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_upgrade_proxy_version_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisUpgradeProxyVersionOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Current proxy version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_upgrade_proxy_version_operation#current_proxy_version RedisUpgradeProxyVersionOperation#current_proxy_version}
  */
  readonly currentProxyVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_upgrade_proxy_version_operation#id RedisUpgradeProxyVersionOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_upgrade_proxy_version_operation#instance_id RedisUpgradeProxyVersionOperation#instance_id}
  */
  readonly instanceId: string;
  /**
  * Switch mode:1 - Upgrade now0 - Maintenance window upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_upgrade_proxy_version_operation#instance_type_upgrade_now RedisUpgradeProxyVersionOperation#instance_type_upgrade_now}
  */
  readonly instanceTypeUpgradeNow: number;
  /**
  * Upgradeable redis proxy version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_upgrade_proxy_version_operation#upgrade_proxy_version RedisUpgradeProxyVersionOperation#upgrade_proxy_version}
  */
  readonly upgradeProxyVersion: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_upgrade_proxy_version_operation tencentcloud_redis_upgrade_proxy_version_operation}
*/
export class RedisUpgradeProxyVersionOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_redis_upgrade_proxy_version_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisUpgradeProxyVersionOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisUpgradeProxyVersionOperation to import
  * @param importFromId The id of the existing RedisUpgradeProxyVersionOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_upgrade_proxy_version_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisUpgradeProxyVersionOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_redis_upgrade_proxy_version_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_upgrade_proxy_version_operation tencentcloud_redis_upgrade_proxy_version_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisUpgradeProxyVersionOperationConfig
  */
  public constructor(scope: Construct, id: string, config: RedisUpgradeProxyVersionOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_redis_upgrade_proxy_version_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._currentProxyVersion = config.currentProxyVersion;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceTypeUpgradeNow = config.instanceTypeUpgradeNow;
    this._upgradeProxyVersion = config.upgradeProxyVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_proxy_version - computed: false, optional: false, required: true
  private _currentProxyVersion?: string; 
  public get currentProxyVersion() {
    return this.getStringAttribute('current_proxy_version');
  }
  public set currentProxyVersion(value: string) {
    this._currentProxyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currentProxyVersionInput() {
    return this._currentProxyVersion;
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

  // upgrade_proxy_version - computed: false, optional: false, required: true
  private _upgradeProxyVersion?: string; 
  public get upgradeProxyVersion() {
    return this.getStringAttribute('upgrade_proxy_version');
  }
  public set upgradeProxyVersion(value: string) {
    this._upgradeProxyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeProxyVersionInput() {
    return this._upgradeProxyVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      current_proxy_version: cdktf.stringToTerraform(this._currentProxyVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_type_upgrade_now: cdktf.numberToTerraform(this._instanceTypeUpgradeNow),
      upgrade_proxy_version: cdktf.stringToTerraform(this._upgradeProxyVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      current_proxy_version: {
        value: cdktf.stringToHclTerraform(this._currentProxyVersion),
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
      upgrade_proxy_version: {
        value: cdktf.stringToHclTerraform(this._upgradeProxyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
