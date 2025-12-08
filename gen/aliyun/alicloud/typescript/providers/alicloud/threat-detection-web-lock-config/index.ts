// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionWebLockConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config#defence_mode ThreatDetectionWebLockConfig#defence_mode}
  */
  readonly defenceMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config#dir ThreatDetectionWebLockConfig#dir}
  */
  readonly dir: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config#exclusive_dir ThreatDetectionWebLockConfig#exclusive_dir}
  */
  readonly exclusiveDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config#exclusive_file ThreatDetectionWebLockConfig#exclusive_file}
  */
  readonly exclusiveFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config#exclusive_file_type ThreatDetectionWebLockConfig#exclusive_file_type}
  */
  readonly exclusiveFileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config#id ThreatDetectionWebLockConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config#inclusive_file_type ThreatDetectionWebLockConfig#inclusive_file_type}
  */
  readonly inclusiveFileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config#local_backup_dir ThreatDetectionWebLockConfig#local_backup_dir}
  */
  readonly localBackupDir: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config#mode ThreatDetectionWebLockConfig#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config#uuid ThreatDetectionWebLockConfig#uuid}
  */
  readonly uuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config alicloud_threat_detection_web_lock_config}
*/
export class ThreatDetectionWebLockConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_web_lock_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionWebLockConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionWebLockConfig to import
  * @param importFromId The id of the existing ThreatDetectionWebLockConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionWebLockConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_web_lock_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_web_lock_config alicloud_threat_detection_web_lock_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionWebLockConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionWebLockConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_web_lock_config',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defenceMode = config.defenceMode;
    this._dir = config.dir;
    this._exclusiveDir = config.exclusiveDir;
    this._exclusiveFile = config.exclusiveFile;
    this._exclusiveFileType = config.exclusiveFileType;
    this._id = config.id;
    this._inclusiveFileType = config.inclusiveFileType;
    this._localBackupDir = config.localBackupDir;
    this._mode = config.mode;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defence_mode - computed: false, optional: false, required: true
  private _defenceMode?: string; 
  public get defenceMode() {
    return this.getStringAttribute('defence_mode');
  }
  public set defenceMode(value: string) {
    this._defenceMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defenceModeInput() {
    return this._defenceMode;
  }

  // dir - computed: false, optional: false, required: true
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // exclusive_dir - computed: false, optional: true, required: false
  private _exclusiveDir?: string; 
  public get exclusiveDir() {
    return this.getStringAttribute('exclusive_dir');
  }
  public set exclusiveDir(value: string) {
    this._exclusiveDir = value;
  }
  public resetExclusiveDir() {
    this._exclusiveDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveDirInput() {
    return this._exclusiveDir;
  }

  // exclusive_file - computed: false, optional: true, required: false
  private _exclusiveFile?: string; 
  public get exclusiveFile() {
    return this.getStringAttribute('exclusive_file');
  }
  public set exclusiveFile(value: string) {
    this._exclusiveFile = value;
  }
  public resetExclusiveFile() {
    this._exclusiveFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveFileInput() {
    return this._exclusiveFile;
  }

  // exclusive_file_type - computed: false, optional: true, required: false
  private _exclusiveFileType?: string; 
  public get exclusiveFileType() {
    return this.getStringAttribute('exclusive_file_type');
  }
  public set exclusiveFileType(value: string) {
    this._exclusiveFileType = value;
  }
  public resetExclusiveFileType() {
    this._exclusiveFileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveFileTypeInput() {
    return this._exclusiveFileType;
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

  // inclusive_file_type - computed: false, optional: true, required: false
  private _inclusiveFileType?: string; 
  public get inclusiveFileType() {
    return this.getStringAttribute('inclusive_file_type');
  }
  public set inclusiveFileType(value: string) {
    this._inclusiveFileType = value;
  }
  public resetInclusiveFileType() {
    this._inclusiveFileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveFileTypeInput() {
    return this._inclusiveFileType;
  }

  // local_backup_dir - computed: false, optional: false, required: true
  private _localBackupDir?: string; 
  public get localBackupDir() {
    return this.getStringAttribute('local_backup_dir');
  }
  public set localBackupDir(value: string) {
    this._localBackupDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localBackupDirInput() {
    return this._localBackupDir;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
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
      defence_mode: cdktf.stringToTerraform(this._defenceMode),
      dir: cdktf.stringToTerraform(this._dir),
      exclusive_dir: cdktf.stringToTerraform(this._exclusiveDir),
      exclusive_file: cdktf.stringToTerraform(this._exclusiveFile),
      exclusive_file_type: cdktf.stringToTerraform(this._exclusiveFileType),
      id: cdktf.stringToTerraform(this._id),
      inclusive_file_type: cdktf.stringToTerraform(this._inclusiveFileType),
      local_backup_dir: cdktf.stringToTerraform(this._localBackupDir),
      mode: cdktf.stringToTerraform(this._mode),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defence_mode: {
        value: cdktf.stringToHclTerraform(this._defenceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dir: {
        value: cdktf.stringToHclTerraform(this._dir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusive_dir: {
        value: cdktf.stringToHclTerraform(this._exclusiveDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusive_file: {
        value: cdktf.stringToHclTerraform(this._exclusiveFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusive_file_type: {
        value: cdktf.stringToHclTerraform(this._exclusiveFileType),
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
      inclusive_file_type: {
        value: cdktf.stringToHclTerraform(this._inclusiveFileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_backup_dir: {
        value: cdktf.stringToHclTerraform(this._localBackupDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
