// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_device_backup_restore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmDeviceBackupRestoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * User password for the backup file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_device_backup_restore#backup_password CmDeviceBackupRestore#backup_password}
  */
  readonly backupPassword: string;
  /**
  * Hostname of the device managed by BIG-IP Next CM.
  * Parameter required for create operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_device_backup_restore#device_hostname CmDeviceBackupRestore#device_hostname}
  */
  readonly deviceHostname?: string;
  /**
  * IP Address of the device managed by BIG-IP Next CM.
  * Parameter required for create operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_device_backup_restore#device_ip CmDeviceBackupRestore#device_ip}
  */
  readonly deviceIp?: string;
  /**
  * Name of the backup file to create, or use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_device_backup_restore#file_name CmDeviceBackupRestore#file_name}
  */
  readonly fileName: string;
  /**
  * Type of operation to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_device_backup_restore#operation CmDeviceBackupRestore#operation}
  */
  readonly operation: string;
  /**
  * The number of seconds to wait for backup or restore operation to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_device_backup_restore#timeout CmDeviceBackupRestore#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_device_backup_restore bigipnext_cm_device_backup_restore}
*/
export class CmDeviceBackupRestore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_device_backup_restore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmDeviceBackupRestore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmDeviceBackupRestore to import
  * @param importFromId The id of the existing CmDeviceBackupRestore that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_device_backup_restore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmDeviceBackupRestore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_device_backup_restore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_device_backup_restore bigipnext_cm_device_backup_restore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmDeviceBackupRestoreConfig
  */
  public constructor(scope: Construct, id: string, config: CmDeviceBackupRestoreConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_device_backup_restore',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupPassword = config.backupPassword;
    this._deviceHostname = config.deviceHostname;
    this._deviceIp = config.deviceIp;
    this._fileName = config.fileName;
    this._operation = config.operation;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_date - computed: true, optional: false, required: false
  public get backupDate() {
    return this.getStringAttribute('backup_date');
  }

  // backup_password - computed: false, optional: false, required: true
  private _backupPassword?: string; 
  public get backupPassword() {
    return this.getStringAttribute('backup_password');
  }
  public set backupPassword(value: string) {
    this._backupPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPasswordInput() {
    return this._backupPassword;
  }

  // device_hostname - computed: false, optional: true, required: false
  private _deviceHostname?: string; 
  public get deviceHostname() {
    return this.getStringAttribute('device_hostname');
  }
  public set deviceHostname(value: string) {
    this._deviceHostname = value;
  }
  public resetDeviceHostname() {
    this._deviceHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceHostnameInput() {
    return this._deviceHostname;
  }

  // device_ip - computed: false, optional: true, required: false
  private _deviceIp?: string; 
  public get deviceIp() {
    return this.getStringAttribute('device_ip');
  }
  public set deviceIp(value: string) {
    this._deviceIp = value;
  }
  public resetDeviceIp() {
    this._deviceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIpInput() {
    return this._deviceIp;
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // restore_date - computed: true, optional: false, required: false
  public get restoreDate() {
    return this.getStringAttribute('restore_date');
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_password: cdktf.stringToTerraform(this._backupPassword),
      device_hostname: cdktf.stringToTerraform(this._deviceHostname),
      device_ip: cdktf.stringToTerraform(this._deviceIp),
      file_name: cdktf.stringToTerraform(this._fileName),
      operation: cdktf.stringToTerraform(this._operation),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_password: {
        value: cdktf.stringToHclTerraform(this._backupPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_hostname: {
        value: cdktf.stringToHclTerraform(this._deviceHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_ip: {
        value: cdktf.stringToHclTerraform(this._deviceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation: {
        value: cdktf.stringToHclTerraform(this._operation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
