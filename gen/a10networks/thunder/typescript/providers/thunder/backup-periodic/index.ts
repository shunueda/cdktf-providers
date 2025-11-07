// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPeriodicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify interval days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#day BackupPeriodic#day}
  */
  readonly day?: number;
  /**
  * Encrypt the backup file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#encrypt BackupPeriodic#encrypt}
  */
  readonly encrypt?: number;
  /**
  * Backup fixed-nat port mapping files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#fixed_nat BackupPeriodic#fixed_nat}
  */
  readonly fixedNat?: number;
  /**
  * Specify interval hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#hour BackupPeriodic#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#id BackupPeriodic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Backup log files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#log BackupPeriodic#log}
  */
  readonly log?: number;
  /**
  * profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#remote_file BackupPeriodic#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * profile name to store remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#store_name BackupPeriodic#store_name}
  */
  readonly storeName?: string;
  /**
  * Backup system files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#system BackupPeriodic#system}
  */
  readonly systemAttribute?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#use_mgmt_port BackupPeriodic#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#uuid BackupPeriodic#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify interval weeks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#week BackupPeriodic#week}
  */
  readonly week?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic thunder_backup_periodic}
*/
export class BackupPeriodic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_backup_periodic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupPeriodic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupPeriodic to import
  * @param importFromId The id of the existing BackupPeriodic that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupPeriodic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_backup_periodic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/backup_periodic thunder_backup_periodic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupPeriodicConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BackupPeriodicConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_backup_periodic',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._day = config.day;
    this._encrypt = config.encrypt;
    this._fixedNat = config.fixedNat;
    this._hour = config.hour;
    this._id = config.id;
    this._log = config.log;
    this._remoteFile = config.remoteFile;
    this._storeName = config.storeName;
    this._system = config.systemAttribute;
    this._useMgmtPort = config.useMgmtPort;
    this._uuid = config.uuid;
    this._week = config.week;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: number; 
  public get encrypt() {
    return this.getNumberAttribute('encrypt');
  }
  public set encrypt(value: number) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // fixed_nat - computed: false, optional: true, required: false
  private _fixedNat?: number; 
  public get fixedNat() {
    return this.getNumberAttribute('fixed_nat');
  }
  public set fixedNat(value: number) {
    this._fixedNat = value;
  }
  public resetFixedNat() {
    this._fixedNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatInput() {
    return this._fixedNat;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
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

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // store_name - computed: false, optional: true, required: false
  private _storeName?: string; 
  public get storeName() {
    return this.getStringAttribute('store_name');
  }
  public set storeName(value: string) {
    this._storeName = value;
  }
  public resetStoreName() {
    this._storeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeNameInput() {
    return this._storeName;
  }

  // system - computed: false, optional: true, required: false
  private _system?: number; 
  public get systemAttribute() {
    return this.getNumberAttribute('system');
  }
  public set systemAttribute(value: number) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // week - computed: false, optional: true, required: false
  private _week?: number; 
  public get week() {
    return this.getNumberAttribute('week');
  }
  public set week(value: number) {
    this._week = value;
  }
  public resetWeek() {
    this._week = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekInput() {
    return this._week;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      day: cdktf.numberToTerraform(this._day),
      encrypt: cdktf.numberToTerraform(this._encrypt),
      fixed_nat: cdktf.numberToTerraform(this._fixedNat),
      hour: cdktf.numberToTerraform(this._hour),
      id: cdktf.stringToTerraform(this._id),
      log: cdktf.numberToTerraform(this._log),
      remote_file: cdktf.stringToTerraform(this._remoteFile),
      store_name: cdktf.stringToTerraform(this._storeName),
      system: cdktf.numberToTerraform(this._system),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      week: cdktf.numberToTerraform(this._week),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      day: {
        value: cdktf.numberToHclTerraform(this._day),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encrypt: {
        value: cdktf.numberToHclTerraform(this._encrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fixed_nat: {
        value: cdktf.numberToHclTerraform(this._fixedNat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hour: {
        value: cdktf.numberToHclTerraform(this._hour),
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
      log: {
        value: cdktf.numberToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_file: {
        value: cdktf.stringToHclTerraform(this._remoteFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_name: {
        value: cdktf.stringToHclTerraform(this._storeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system: {
        value: cdktf.numberToHclTerraform(this._system),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      week: {
        value: cdktf.numberToHclTerraform(this._week),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
