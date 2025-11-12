// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BoundaryStartConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of boundary binary we're going to use when starting the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start#bin_name BoundaryStart#bin_name}
  */
  readonly binName?: string;
  /**
  * The path to the directory with binary we're going to use when starting the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start#bin_path BoundaryStart#bin_path}
  */
  readonly binPath: string;
  /**
  * The name of a Boundary configuration to use when starting the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start#config_name BoundaryStart#config_name}
  */
  readonly configName?: string;
  /**
  * The path to the Boundary configuration to use when starting the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start#config_path BoundaryStart#config_path}
  */
  readonly configPath: string;
  /**
  * The path to a license for Boundary Enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start#license BoundaryStart#license}
  */
  readonly license?: string;
  /**
  * Whether or not Enos should supply a systemd unit for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start#manage_service BoundaryStart#manage_service}
  */
  readonly manageService?: boolean | cdktf.IResolvable;
  /**
  * The path to use for storage when recording
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start#recording_storage_path BoundaryStart#recording_storage_path}
  */
  readonly recordingStoragePath?: string;
  /**
  * 
  * - `transport.ssh` (Object) the ssh transport configuration
  * - `transport.ssh.user` (String) the ssh login user|string
  * - `transport.ssh.host` (String) the remote host to access
  * - `transport.ssh.private_key` (String) the private key as a string
  * - `transport.ssh.private_key_path` (String) the path to a private key file
  * - `transport.ssh.passphrase` (String) a passphrase if the private key requires one
  * - `transport.ssh.passphrase_path` (String) a path to a file with the passphrase for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start#transport BoundaryStart#transport}
  */
  readonly transport?: { [key: string]: any };
  /**
  * The name of the systemd unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start#unit_name BoundaryStart#unit_name}
  */
  readonly unitName?: string;
  /**
  * The local username for the Boundary service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start#username BoundaryStart#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start enos_boundary_start}
*/
export class BoundaryStart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_boundary_start";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BoundaryStart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BoundaryStart to import
  * @param importFromId The id of the existing BoundaryStart that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BoundaryStart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_boundary_start", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_start enos_boundary_start} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BoundaryStartConfig
  */
  public constructor(scope: Construct, id: string, config: BoundaryStartConfig) {
    super(scope, id, {
      terraformResourceType: 'enos_boundary_start',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binName = config.binName;
    this._binPath = config.binPath;
    this._configName = config.configName;
    this._configPath = config.configPath;
    this._license = config.license;
    this._manageService = config.manageService;
    this._recordingStoragePath = config.recordingStoragePath;
    this._transport = config.transport;
    this._unitName = config.unitName;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bin_name - computed: false, optional: true, required: false
  private _binName?: string; 
  public get binName() {
    return this.getStringAttribute('bin_name');
  }
  public set binName(value: string) {
    this._binName = value;
  }
  public resetBinName() {
    this._binName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binNameInput() {
    return this._binName;
  }

  // bin_path - computed: false, optional: false, required: true
  private _binPath?: string; 
  public get binPath() {
    return this.getStringAttribute('bin_path');
  }
  public set binPath(value: string) {
    this._binPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binPathInput() {
    return this._binPath;
  }

  // config_name - computed: false, optional: true, required: false
  private _configName?: string; 
  public get configName() {
    return this.getStringAttribute('config_name');
  }
  public set configName(value: string) {
    this._configName = value;
  }
  public resetConfigName() {
    this._configName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configNameInput() {
    return this._configName;
  }

  // config_path - computed: false, optional: false, required: true
  private _configPath?: string; 
  public get configPath() {
    return this.getStringAttribute('config_path');
  }
  public set configPath(value: string) {
    this._configPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // manage_service - computed: false, optional: true, required: false
  private _manageService?: boolean | cdktf.IResolvable; 
  public get manageService() {
    return this.getBooleanAttribute('manage_service');
  }
  public set manageService(value: boolean | cdktf.IResolvable) {
    this._manageService = value;
  }
  public resetManageService() {
    this._manageService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageServiceInput() {
    return this._manageService;
  }

  // recording_storage_path - computed: false, optional: true, required: false
  private _recordingStoragePath?: string; 
  public get recordingStoragePath() {
    return this.getStringAttribute('recording_storage_path');
  }
  public set recordingStoragePath(value: string) {
    this._recordingStoragePath = value;
  }
  public resetRecordingStoragePath() {
    this._recordingStoragePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingStoragePathInput() {
    return this._recordingStoragePath;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: { [key: string]: any }; 
  public get transport() {
    return this.getAnyMapAttribute('transport');
  }
  public set transport(value: { [key: string]: any }) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // unit_name - computed: false, optional: true, required: false
  private _unitName?: string; 
  public get unitName() {
    return this.getStringAttribute('unit_name');
  }
  public set unitName(value: string) {
    this._unitName = value;
  }
  public resetUnitName() {
    this._unitName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNameInput() {
    return this._unitName;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bin_name: cdktf.stringToTerraform(this._binName),
      bin_path: cdktf.stringToTerraform(this._binPath),
      config_name: cdktf.stringToTerraform(this._configName),
      config_path: cdktf.stringToTerraform(this._configPath),
      license: cdktf.stringToTerraform(this._license),
      manage_service: cdktf.booleanToTerraform(this._manageService),
      recording_storage_path: cdktf.stringToTerraform(this._recordingStoragePath),
      transport: cdktf.hashMapper(cdktf.anyToTerraform)(this._transport),
      unit_name: cdktf.stringToTerraform(this._unitName),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bin_name: {
        value: cdktf.stringToHclTerraform(this._binName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bin_path: {
        value: cdktf.stringToHclTerraform(this._binPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_name: {
        value: cdktf.stringToHclTerraform(this._configName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_path: {
        value: cdktf.stringToHclTerraform(this._configPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license: {
        value: cdktf.stringToHclTerraform(this._license),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_service: {
        value: cdktf.booleanToHclTerraform(this._manageService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recording_storage_path: {
        value: cdktf.stringToHclTerraform(this._recordingStoragePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._transport),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      unit_name: {
        value: cdktf.stringToHclTerraform(this._unitName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
