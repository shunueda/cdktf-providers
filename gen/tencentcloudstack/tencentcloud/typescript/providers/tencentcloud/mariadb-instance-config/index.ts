// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mariadb_instance_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MariadbInstanceConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * External network status, 0-closed; 1- Opening; Default not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mariadb_instance_config#extranet_access MariadbInstanceConfigA#extranet_access}
  */
  readonly extranetAccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mariadb_instance_config#id MariadbInstanceConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mariadb_instance_config#instance_id MariadbInstanceConfigA#instance_id}
  */
  readonly instanceId: string;
  /**
  * RS proximity mode, 0- no strategy, 1- access to the nearest available zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mariadb_instance_config#rs_access_strategy MariadbInstanceConfigA#rs_access_strategy}
  */
  readonly rsAccessStrategy?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mariadb_instance_config tencentcloud_mariadb_instance_config}
*/
export class MariadbInstanceConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mariadb_instance_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MariadbInstanceConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MariadbInstanceConfigA to import
  * @param importFromId The id of the existing MariadbInstanceConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mariadb_instance_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MariadbInstanceConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mariadb_instance_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/mariadb_instance_config tencentcloud_mariadb_instance_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MariadbInstanceConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: MariadbInstanceConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mariadb_instance_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extranetAccess = config.extranetAccess;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._rsAccessStrategy = config.rsAccessStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extranet_access - computed: true, optional: true, required: false
  private _extranetAccess?: number; 
  public get extranetAccess() {
    return this.getNumberAttribute('extranet_access');
  }
  public set extranetAccess(value: number) {
    this._extranetAccess = value;
  }
  public resetExtranetAccess() {
    this._extranetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extranetAccessInput() {
    return this._extranetAccess;
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

  // rs_access_strategy - computed: true, optional: true, required: false
  private _rsAccessStrategy?: number; 
  public get rsAccessStrategy() {
    return this.getNumberAttribute('rs_access_strategy');
  }
  public set rsAccessStrategy(value: number) {
    this._rsAccessStrategy = value;
  }
  public resetRsAccessStrategy() {
    this._rsAccessStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsAccessStrategyInput() {
    return this._rsAccessStrategy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extranet_access: cdktf.numberToTerraform(this._extranetAccess),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      rs_access_strategy: cdktf.numberToTerraform(this._rsAccessStrategy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extranet_access: {
        value: cdktf.numberToHclTerraform(this._extranetAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      rs_access_strategy: {
        value: cdktf.numberToHclTerraform(this._rsAccessStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
