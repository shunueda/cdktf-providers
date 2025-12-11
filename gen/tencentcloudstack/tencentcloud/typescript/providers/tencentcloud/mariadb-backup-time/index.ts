// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_backup_time
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MariadbBackupTimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * End time of daily backup window in the format of `mm:ss`, such as 23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_backup_time#end_backup_time MariadbBackupTime#end_backup_time}
  */
  readonly endBackupTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_backup_time#id MariadbBackupTime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_backup_time#instance_id MariadbBackupTime#instance_id}
  */
  readonly instanceId: string;
  /**
  * Start time of daily backup window in the format of `mm:ss`, such as 22:00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_backup_time#start_backup_time MariadbBackupTime#start_backup_time}
  */
  readonly startBackupTime: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_backup_time tencentcloud_mariadb_backup_time}
*/
export class MariadbBackupTime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mariadb_backup_time";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MariadbBackupTime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MariadbBackupTime to import
  * @param importFromId The id of the existing MariadbBackupTime that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_backup_time#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MariadbBackupTime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mariadb_backup_time", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mariadb_backup_time tencentcloud_mariadb_backup_time} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MariadbBackupTimeConfig
  */
  public constructor(scope: Construct, id: string, config: MariadbBackupTimeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mariadb_backup_time',
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
    this._endBackupTime = config.endBackupTime;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._startBackupTime = config.startBackupTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_backup_time - computed: false, optional: false, required: true
  private _endBackupTime?: string; 
  public get endBackupTime() {
    return this.getStringAttribute('end_backup_time');
  }
  public set endBackupTime(value: string) {
    this._endBackupTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endBackupTimeInput() {
    return this._endBackupTime;
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

  // start_backup_time - computed: false, optional: false, required: true
  private _startBackupTime?: string; 
  public get startBackupTime() {
    return this.getStringAttribute('start_backup_time');
  }
  public set startBackupTime(value: string) {
    this._startBackupTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startBackupTimeInput() {
    return this._startBackupTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_backup_time: cdktf.stringToTerraform(this._endBackupTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      start_backup_time: cdktf.stringToTerraform(this._startBackupTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_backup_time: {
        value: cdktf.stringToHclTerraform(this._endBackupTime),
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
      start_backup_time: {
        value: cdktf.stringToHclTerraform(this._startBackupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
