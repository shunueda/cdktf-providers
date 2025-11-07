// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_remote_backup_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlRemoteBackupConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Remote backup retention time, in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_remote_backup_config#expire_days MysqlRemoteBackupConfig#expire_days}
  */
  readonly expireDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_remote_backup_config#id MysqlRemoteBackupConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID, in the format: cdb-c1nl9rpv. Same instance ID as displayed in the ApsaraDB for Console page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_remote_backup_config#instance_id MysqlRemoteBackupConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * Remote data backup switch, off - disable remote backup, on - enable remote backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_remote_backup_config#remote_backup_save MysqlRemoteBackupConfig#remote_backup_save}
  */
  readonly remoteBackupSave: string;
  /**
  * Off-site log backup switch, off - off off-site backup, on-on off-site backup, only when the parameter RemoteBackupSave is on, the RemoteBinlogSave parameter can be set to on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_remote_backup_config#remote_binlog_save MysqlRemoteBackupConfig#remote_binlog_save}
  */
  readonly remoteBinlogSave: string;
  /**
  * User settings off-site backup region list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_remote_backup_config#remote_region MysqlRemoteBackupConfig#remote_region}
  */
  readonly remoteRegion: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_remote_backup_config tencentcloud_mysql_remote_backup_config}
*/
export class MysqlRemoteBackupConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_remote_backup_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlRemoteBackupConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlRemoteBackupConfig to import
  * @param importFromId The id of the existing MysqlRemoteBackupConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_remote_backup_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlRemoteBackupConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_remote_backup_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_remote_backup_config tencentcloud_mysql_remote_backup_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlRemoteBackupConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlRemoteBackupConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_remote_backup_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expireDays = config.expireDays;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._remoteBackupSave = config.remoteBackupSave;
    this._remoteBinlogSave = config.remoteBinlogSave;
    this._remoteRegion = config.remoteRegion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expire_days - computed: false, optional: false, required: true
  private _expireDays?: number; 
  public get expireDays() {
    return this.getNumberAttribute('expire_days');
  }
  public set expireDays(value: number) {
    this._expireDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireDaysInput() {
    return this._expireDays;
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

  // remote_backup_save - computed: false, optional: false, required: true
  private _remoteBackupSave?: string; 
  public get remoteBackupSave() {
    return this.getStringAttribute('remote_backup_save');
  }
  public set remoteBackupSave(value: string) {
    this._remoteBackupSave = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteBackupSaveInput() {
    return this._remoteBackupSave;
  }

  // remote_binlog_save - computed: false, optional: false, required: true
  private _remoteBinlogSave?: string; 
  public get remoteBinlogSave() {
    return this.getStringAttribute('remote_binlog_save');
  }
  public set remoteBinlogSave(value: string) {
    this._remoteBinlogSave = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteBinlogSaveInput() {
    return this._remoteBinlogSave;
  }

  // remote_region - computed: false, optional: false, required: true
  private _remoteRegion?: string[]; 
  public get remoteRegion() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_region'));
  }
  public set remoteRegion(value: string[]) {
    this._remoteRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRegionInput() {
    return this._remoteRegion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expire_days: cdktf.numberToTerraform(this._expireDays),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      remote_backup_save: cdktf.stringToTerraform(this._remoteBackupSave),
      remote_binlog_save: cdktf.stringToTerraform(this._remoteBinlogSave),
      remote_region: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteRegion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expire_days: {
        value: cdktf.numberToHclTerraform(this._expireDays),
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
      remote_backup_save: {
        value: cdktf.stringToHclTerraform(this._remoteBackupSave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_binlog_save: {
        value: cdktf.stringToHclTerraform(this._remoteBinlogSave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_region: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteRegion),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
