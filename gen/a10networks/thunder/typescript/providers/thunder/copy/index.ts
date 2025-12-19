// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CopyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Local Configuration Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#dest_profile Copy#dest_profile}
  */
  readonly destProfile?: string;
  /**
  * Remote file path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#dest_remote_file Copy#dest_remote_file}
  */
  readonly destRemoteFile?: string;
  /**
  * Use management port as destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#dest_use_mgmt_port Copy#dest_use_mgmt_port}
  */
  readonly destUseMgmtPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#id Copy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * From Startup-config Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#profile Copy#profile}
  */
  readonly profile?: string;
  /**
  * Remote file path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#remote_file Copy#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * From Running Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#running_config Copy#running_config}
  */
  readonly runningConfig?: number;
  /**
  * From Startup Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#startup_config Copy#startup_config}
  */
  readonly startupConfig?: number;
  /**
  * To Local Configuration Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#to_profile Copy#to_profile}
  */
  readonly toProfile?: string;
  /**
  * To Running Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#to_running_config Copy#to_running_config}
  */
  readonly toRunningConfig?: number;
  /**
  * To Startup Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#to_startup_config Copy#to_startup_config}
  */
  readonly toStartupConfig?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#use_mgmt_port Copy#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy thunder_copy}
*/
export class Copy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_copy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Copy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Copy to import
  * @param importFromId The id of the existing Copy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Copy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_copy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/copy thunder_copy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CopyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CopyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_copy',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destProfile = config.destProfile;
    this._destRemoteFile = config.destRemoteFile;
    this._destUseMgmtPort = config.destUseMgmtPort;
    this._id = config.id;
    this._profile = config.profile;
    this._remoteFile = config.remoteFile;
    this._runningConfig = config.runningConfig;
    this._startupConfig = config.startupConfig;
    this._toProfile = config.toProfile;
    this._toRunningConfig = config.toRunningConfig;
    this._toStartupConfig = config.toStartupConfig;
    this._useMgmtPort = config.useMgmtPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dest_profile - computed: false, optional: true, required: false
  private _destProfile?: string; 
  public get destProfile() {
    return this.getStringAttribute('dest_profile');
  }
  public set destProfile(value: string) {
    this._destProfile = value;
  }
  public resetDestProfile() {
    this._destProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destProfileInput() {
    return this._destProfile;
  }

  // dest_remote_file - computed: false, optional: true, required: false
  private _destRemoteFile?: string; 
  public get destRemoteFile() {
    return this.getStringAttribute('dest_remote_file');
  }
  public set destRemoteFile(value: string) {
    this._destRemoteFile = value;
  }
  public resetDestRemoteFile() {
    this._destRemoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRemoteFileInput() {
    return this._destRemoteFile;
  }

  // dest_use_mgmt_port - computed: false, optional: true, required: false
  private _destUseMgmtPort?: number; 
  public get destUseMgmtPort() {
    return this.getNumberAttribute('dest_use_mgmt_port');
  }
  public set destUseMgmtPort(value: number) {
    this._destUseMgmtPort = value;
  }
  public resetDestUseMgmtPort() {
    this._destUseMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destUseMgmtPortInput() {
    return this._destUseMgmtPort;
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

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
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

  // running_config - computed: false, optional: true, required: false
  private _runningConfig?: number; 
  public get runningConfig() {
    return this.getNumberAttribute('running_config');
  }
  public set runningConfig(value: number) {
    this._runningConfig = value;
  }
  public resetRunningConfig() {
    this._runningConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningConfigInput() {
    return this._runningConfig;
  }

  // startup_config - computed: false, optional: true, required: false
  private _startupConfig?: number; 
  public get startupConfig() {
    return this.getNumberAttribute('startup_config');
  }
  public set startupConfig(value: number) {
    this._startupConfig = value;
  }
  public resetStartupConfig() {
    this._startupConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupConfigInput() {
    return this._startupConfig;
  }

  // to_profile - computed: false, optional: true, required: false
  private _toProfile?: string; 
  public get toProfile() {
    return this.getStringAttribute('to_profile');
  }
  public set toProfile(value: string) {
    this._toProfile = value;
  }
  public resetToProfile() {
    this._toProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toProfileInput() {
    return this._toProfile;
  }

  // to_running_config - computed: false, optional: true, required: false
  private _toRunningConfig?: number; 
  public get toRunningConfig() {
    return this.getNumberAttribute('to_running_config');
  }
  public set toRunningConfig(value: number) {
    this._toRunningConfig = value;
  }
  public resetToRunningConfig() {
    this._toRunningConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toRunningConfigInput() {
    return this._toRunningConfig;
  }

  // to_startup_config - computed: false, optional: true, required: false
  private _toStartupConfig?: number; 
  public get toStartupConfig() {
    return this.getNumberAttribute('to_startup_config');
  }
  public set toStartupConfig(value: number) {
    this._toStartupConfig = value;
  }
  public resetToStartupConfig() {
    this._toStartupConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toStartupConfigInput() {
    return this._toStartupConfig;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dest_profile: cdktf.stringToTerraform(this._destProfile),
      dest_remote_file: cdktf.stringToTerraform(this._destRemoteFile),
      dest_use_mgmt_port: cdktf.numberToTerraform(this._destUseMgmtPort),
      id: cdktf.stringToTerraform(this._id),
      profile: cdktf.stringToTerraform(this._profile),
      remote_file: cdktf.stringToTerraform(this._remoteFile),
      running_config: cdktf.numberToTerraform(this._runningConfig),
      startup_config: cdktf.numberToTerraform(this._startupConfig),
      to_profile: cdktf.stringToTerraform(this._toProfile),
      to_running_config: cdktf.numberToTerraform(this._toRunningConfig),
      to_startup_config: cdktf.numberToTerraform(this._toStartupConfig),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dest_profile: {
        value: cdktf.stringToHclTerraform(this._destProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_remote_file: {
        value: cdktf.stringToHclTerraform(this._destRemoteFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._destUseMgmtPort),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_file: {
        value: cdktf.stringToHclTerraform(this._remoteFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      running_config: {
        value: cdktf.numberToHclTerraform(this._runningConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      startup_config: {
        value: cdktf.numberToHclTerraform(this._startupConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      to_profile: {
        value: cdktf.stringToHclTerraform(this._toProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_running_config: {
        value: cdktf.numberToHclTerraform(this._toRunningConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      to_startup_config: {
        value: cdktf.numberToHclTerraform(this._toStartupConfig),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
