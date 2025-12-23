// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup#backup_config_ref Backup#backup_config_ref}
  */
  readonly backupConfigRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup#file_name Backup#file_name}
  */
  readonly fileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup#id Backup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup#local_file_url Backup#local_file_url}
  */
  readonly localFileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup#remote_file_url Backup#remote_file_url}
  */
  readonly remoteFileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup#scheduler_ref Backup#scheduler_ref}
  */
  readonly schedulerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup#tenant_ref Backup#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup#timestamp Backup#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup#uuid Backup#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup avi_backup}
*/
export class Backup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Backup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Backup to import
  * @param importFromId The id of the existing Backup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Backup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/backup avi_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupConfig
  */
  public constructor(scope: Construct, id: string, config: BackupConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_backup',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupConfigRef = config.backupConfigRef;
    this._fileName = config.fileName;
    this._id = config.id;
    this._localFileUrl = config.localFileUrl;
    this._remoteFileUrl = config.remoteFileUrl;
    this._schedulerRef = config.schedulerRef;
    this._tenantRef = config.tenantRef;
    this._timestamp = config.timestamp;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_config_ref - computed: true, optional: true, required: false
  private _backupConfigRef?: string; 
  public get backupConfigRef() {
    return this.getStringAttribute('backup_config_ref');
  }
  public set backupConfigRef(value: string) {
    this._backupConfigRef = value;
  }
  public resetBackupConfigRef() {
    this._backupConfigRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigRefInput() {
    return this._backupConfigRef;
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

  // local_file_url - computed: true, optional: true, required: false
  private _localFileUrl?: string; 
  public get localFileUrl() {
    return this.getStringAttribute('local_file_url');
  }
  public set localFileUrl(value: string) {
    this._localFileUrl = value;
  }
  public resetLocalFileUrl() {
    this._localFileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localFileUrlInput() {
    return this._localFileUrl;
  }

  // remote_file_url - computed: true, optional: true, required: false
  private _remoteFileUrl?: string; 
  public get remoteFileUrl() {
    return this.getStringAttribute('remote_file_url');
  }
  public set remoteFileUrl(value: string) {
    this._remoteFileUrl = value;
  }
  public resetRemoteFileUrl() {
    this._remoteFileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileUrlInput() {
    return this._remoteFileUrl;
  }

  // scheduler_ref - computed: true, optional: true, required: false
  private _schedulerRef?: string; 
  public get schedulerRef() {
    return this.getStringAttribute('scheduler_ref');
  }
  public set schedulerRef(value: string) {
    this._schedulerRef = value;
  }
  public resetSchedulerRef() {
    this._schedulerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerRefInput() {
    return this._schedulerRef;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // timestamp - computed: true, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_config_ref: cdktf.stringToTerraform(this._backupConfigRef),
      file_name: cdktf.stringToTerraform(this._fileName),
      id: cdktf.stringToTerraform(this._id),
      local_file_url: cdktf.stringToTerraform(this._localFileUrl),
      remote_file_url: cdktf.stringToTerraform(this._remoteFileUrl),
      scheduler_ref: cdktf.stringToTerraform(this._schedulerRef),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      timestamp: cdktf.stringToTerraform(this._timestamp),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_config_ref: {
        value: cdktf.stringToHclTerraform(this._backupConfigRef),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_file_url: {
        value: cdktf.stringToHclTerraform(this._localFileUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_file_url: {
        value: cdktf.stringToHclTerraform(this._remoteFileUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler_ref: {
        value: cdktf.stringToHclTerraform(this._schedulerRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp: {
        value: cdktf.stringToHclTerraform(this._timestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
