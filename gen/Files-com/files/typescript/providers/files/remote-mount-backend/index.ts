// https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemoteMountBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to the canary file used for health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#canary_file_path RemoteMountBackend#canary_file_path}
  */
  readonly canaryFilePath: string;
  /**
  * True if this backend is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#enabled RemoteMountBackend#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Number of consecutive failures before considering the backend unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#fall RemoteMountBackend#fall}
  */
  readonly fall?: number;
  /**
  * True if health checks are enabled for this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#health_check_enabled RemoteMountBackend#health_check_enabled}
  */
  readonly healthCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Type of health check to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#health_check_type RemoteMountBackend#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Interval in seconds between health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#interval RemoteMountBackend#interval}
  */
  readonly interval?: number;
  /**
  * Minimum free CPU percentage required for this backend to be considered healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#min_free_cpu RemoteMountBackend#min_free_cpu}
  */
  readonly minFreeCpu?: string;
  /**
  * Minimum free memory percentage required for this backend to be considered healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#min_free_mem RemoteMountBackend#min_free_mem}
  */
  readonly minFreeMem?: string;
  /**
  * Priority of this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#priority RemoteMountBackend#priority}
  */
  readonly priority?: number;
  /**
  * Path on the remote server to treat as the root of this mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#remote_path RemoteMountBackend#remote_path}
  */
  readonly remotePath?: string;
  /**
  * The remote server that this backend is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#remote_server_id RemoteMountBackend#remote_server_id}
  */
  readonly remoteServerId: number;
  /**
  * The mount ID of the Remote Server Mount that this backend is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#remote_server_mount_id RemoteMountBackend#remote_server_mount_id}
  */
  readonly remoteServerMountId: number;
  /**
  * Number of consecutive successes before considering the backend healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#rise RemoteMountBackend#rise}
  */
  readonly rise?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend files_remote_mount_backend}
*/
export class RemoteMountBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_remote_mount_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemoteMountBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemoteMountBackend to import
  * @param importFromId The id of the existing RemoteMountBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemoteMountBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_remote_mount_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/remote_mount_backend files_remote_mount_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemoteMountBackendConfig
  */
  public constructor(scope: Construct, id: string, config: RemoteMountBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'files_remote_mount_backend',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.420',
        providerVersionConstraint: '0.1.420'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canaryFilePath = config.canaryFilePath;
    this._enabled = config.enabled;
    this._fall = config.fall;
    this._healthCheckEnabled = config.healthCheckEnabled;
    this._healthCheckType = config.healthCheckType;
    this._interval = config.interval;
    this._minFreeCpu = config.minFreeCpu;
    this._minFreeMem = config.minFreeMem;
    this._priority = config.priority;
    this._remotePath = config.remotePath;
    this._remoteServerId = config.remoteServerId;
    this._remoteServerMountId = config.remoteServerMountId;
    this._rise = config.rise;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canary_file_path - computed: false, optional: false, required: true
  private _canaryFilePath?: string; 
  public get canaryFilePath() {
    return this.getStringAttribute('canary_file_path');
  }
  public set canaryFilePath(value: string) {
    this._canaryFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryFilePathInput() {
    return this._canaryFilePath;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fall - computed: true, optional: true, required: false
  private _fall?: number; 
  public get fall() {
    return this.getNumberAttribute('fall');
  }
  public set fall(value: number) {
    this._fall = value;
  }
  public resetFall() {
    this._fall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallInput() {
    return this._fall;
  }

  // health_check_enabled - computed: true, optional: true, required: false
  private _healthCheckEnabled?: boolean | cdktf.IResolvable; 
  public get healthCheckEnabled() {
    return this.getBooleanAttribute('health_check_enabled');
  }
  public set healthCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._healthCheckEnabled = value;
  }
  public resetHealthCheckEnabled() {
    this._healthCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckEnabledInput() {
    return this._healthCheckEnabled;
  }

  // health_check_results - computed: true, optional: false, required: false
  private _healthCheckResults = new cdktf.AnyMap(this, "health_check_results");
  public get healthCheckResults() {
    return this._healthCheckResults;
  }

  // health_check_type - computed: true, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // min_free_cpu - computed: true, optional: true, required: false
  private _minFreeCpu?: string; 
  public get minFreeCpu() {
    return this.getStringAttribute('min_free_cpu');
  }
  public set minFreeCpu(value: string) {
    this._minFreeCpu = value;
  }
  public resetMinFreeCpu() {
    this._minFreeCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFreeCpuInput() {
    return this._minFreeCpu;
  }

  // min_free_mem - computed: true, optional: true, required: false
  private _minFreeMem?: string; 
  public get minFreeMem() {
    return this.getStringAttribute('min_free_mem');
  }
  public set minFreeMem(value: string) {
    this._minFreeMem = value;
  }
  public resetMinFreeMem() {
    this._minFreeMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFreeMemInput() {
    return this._minFreeMem;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // remote_path - computed: true, optional: true, required: false
  private _remotePath?: string; 
  public get remotePath() {
    return this.getStringAttribute('remote_path');
  }
  public set remotePath(value: string) {
    this._remotePath = value;
  }
  public resetRemotePath() {
    this._remotePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePathInput() {
    return this._remotePath;
  }

  // remote_server_id - computed: false, optional: false, required: true
  private _remoteServerId?: number; 
  public get remoteServerId() {
    return this.getNumberAttribute('remote_server_id');
  }
  public set remoteServerId(value: number) {
    this._remoteServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteServerIdInput() {
    return this._remoteServerId;
  }

  // remote_server_mount_id - computed: false, optional: false, required: true
  private _remoteServerMountId?: number; 
  public get remoteServerMountId() {
    return this.getNumberAttribute('remote_server_mount_id');
  }
  public set remoteServerMountId(value: number) {
    this._remoteServerMountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteServerMountIdInput() {
    return this._remoteServerMountId;
  }

  // rise - computed: true, optional: true, required: false
  private _rise?: number; 
  public get rise() {
    return this.getNumberAttribute('rise');
  }
  public set rise(value: number) {
    this._rise = value;
  }
  public resetRise() {
    this._rise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riseInput() {
    return this._rise;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // undergoing_maintenance - computed: true, optional: false, required: false
  public get undergoingMaintenance() {
    return this.getBooleanAttribute('undergoing_maintenance');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      canary_file_path: cdktf.stringToTerraform(this._canaryFilePath),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fall: cdktf.numberToTerraform(this._fall),
      health_check_enabled: cdktf.booleanToTerraform(this._healthCheckEnabled),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      interval: cdktf.numberToTerraform(this._interval),
      min_free_cpu: cdktf.stringToTerraform(this._minFreeCpu),
      min_free_mem: cdktf.stringToTerraform(this._minFreeMem),
      priority: cdktf.numberToTerraform(this._priority),
      remote_path: cdktf.stringToTerraform(this._remotePath),
      remote_server_id: cdktf.numberToTerraform(this._remoteServerId),
      remote_server_mount_id: cdktf.numberToTerraform(this._remoteServerMountId),
      rise: cdktf.numberToTerraform(this._rise),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      canary_file_path: {
        value: cdktf.stringToHclTerraform(this._canaryFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fall: {
        value: cdktf.numberToHclTerraform(this._fall),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._healthCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_type: {
        value: cdktf.stringToHclTerraform(this._healthCheckType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_free_cpu: {
        value: cdktf.stringToHclTerraform(this._minFreeCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_free_mem: {
        value: cdktf.stringToHclTerraform(this._minFreeMem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_path: {
        value: cdktf.stringToHclTerraform(this._remotePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_server_id: {
        value: cdktf.numberToHclTerraform(this._remoteServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_server_mount_id: {
        value: cdktf.numberToHclTerraform(this._remoteServerMountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rise: {
        value: cdktf.numberToHclTerraform(this._rise),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
