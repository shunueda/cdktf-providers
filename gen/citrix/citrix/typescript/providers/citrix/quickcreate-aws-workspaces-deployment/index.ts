// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuickcreateAwsWorkspacesDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * GUID of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#account_id QuickcreateAwsWorkspacesDeployment#account_id}
  */
  readonly accountId: string;
  /**
  * GUID of the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#directory_connection_id QuickcreateAwsWorkspacesDeployment#directory_connection_id}
  */
  readonly directoryConnectionId: string;
  /**
  * GUID of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#image_id QuickcreateAwsWorkspacesDeployment#image_id}
  */
  readonly imageId: string;
  /**
  * Name of the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#name QuickcreateAwsWorkspacesDeployment#name}
  */
  readonly name: string;
  /**
  * Performance of the workspace. Possible Values are `VALUE`, `STANDARD`, `PERFORMANCE`, `POWER`, `POWERPRO`, `GRAPHICS`, `GRAPHICSPRO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#performance QuickcreateAwsWorkspacesDeployment#performance}
  */
  readonly performance: string;
  /**
  * Size of the root volume in GB. Possible Values are `80` or any integer between `175` and `2000` (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#root_volume_size QuickcreateAwsWorkspacesDeployment#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Running mode of the workspace. Possible Values are `ALWAYS_ON` and `MANUAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#running_mode QuickcreateAwsWorkspacesDeployment#running_mode}
  */
  readonly runningMode: string;
  /**
  * Manual power management configuration for the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#scale_settings QuickcreateAwsWorkspacesDeployment#scale_settings}
  */
  readonly scaleSettings?: QuickcreateAwsWorkspacesDeploymentScaleSettings;
  /**
  * Indicates if the user decoupled workspaces are enabled. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#user_decoupled_workspaces QuickcreateAwsWorkspacesDeployment#user_decoupled_workspaces}
  */
  readonly userDecoupledWorkspaces: boolean | cdktf.IResolvable;
  /**
  * Size of the user volume in GB. Possible Values are `10`, `50`, or any integer between `100` and `2000` (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#user_volume_size QuickcreateAwsWorkspacesDeployment#user_volume_size}
  */
  readonly userVolumeSize: number;
  /**
  * Indicates if the volumes are encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#volumes_encrypted QuickcreateAwsWorkspacesDeployment#volumes_encrypted}
  */
  readonly volumesEncrypted: boolean | cdktf.IResolvable;
  /**
  * AWS KMS key to be used for workspace encryption. Use `alias/aws/workspaces` for default AWS KMS workspace encryption key. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#volumes_encryption_key QuickcreateAwsWorkspacesDeployment#volumes_encryption_key}
  */
  readonly volumesEncryptionKey?: string;
  /**
  * Set of workspaces with assigned users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#workspaces QuickcreateAwsWorkspacesDeployment#workspaces}
  */
  readonly workspaces?: QuickcreateAwsWorkspacesDeploymentWorkspaces[] | cdktf.IResolvable;
}
export interface QuickcreateAwsWorkspacesDeploymentScaleSettings {
  /**
  * Indicates buffer capacity size. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#buffer_capacity_size_percentage QuickcreateAwsWorkspacesDeployment#buffer_capacity_size_percentage}
  */
  readonly bufferCapacitySizePercentage?: number;
  /**
  * Indicates timespan before disconnect sessions that are idle in minutes. Defaults to `15`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#disconnect_session_idle_timeout QuickcreateAwsWorkspacesDeployment#disconnect_session_idle_timeout}
  */
  readonly disconnectSessionIdleTimeout?: number;
  /**
  * Indicates timespan before shut down desktops with disconnected sessions in minutes. Defaults to `15`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#shutdown_disconnect_timeout QuickcreateAwsWorkspacesDeployment#shutdown_disconnect_timeout}
  */
  readonly shutdownDisconnectTimeout?: number;
  /**
  * Indicates timespan before shut down desktops after sign-out in minutes. Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#shutdown_log_off_timeout QuickcreateAwsWorkspacesDeployment#shutdown_log_off_timeout}
  */
  readonly shutdownLogOffTimeout?: number;
}

export function quickcreateAwsWorkspacesDeploymentScaleSettingsToTerraform(struct?: QuickcreateAwsWorkspacesDeploymentScaleSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_capacity_size_percentage: cdktf.numberToTerraform(struct!.bufferCapacitySizePercentage),
    disconnect_session_idle_timeout: cdktf.numberToTerraform(struct!.disconnectSessionIdleTimeout),
    shutdown_disconnect_timeout: cdktf.numberToTerraform(struct!.shutdownDisconnectTimeout),
    shutdown_log_off_timeout: cdktf.numberToTerraform(struct!.shutdownLogOffTimeout),
  }
}


export function quickcreateAwsWorkspacesDeploymentScaleSettingsToHclTerraform(struct?: QuickcreateAwsWorkspacesDeploymentScaleSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_capacity_size_percentage: {
      value: cdktf.numberToHclTerraform(struct!.bufferCapacitySizePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disconnect_session_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.disconnectSessionIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shutdown_disconnect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.shutdownDisconnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shutdown_log_off_timeout: {
      value: cdktf.numberToHclTerraform(struct!.shutdownLogOffTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuickcreateAwsWorkspacesDeploymentScaleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuickcreateAwsWorkspacesDeploymentScaleSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferCapacitySizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferCapacitySizePercentage = this._bufferCapacitySizePercentage;
    }
    if (this._disconnectSessionIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnectSessionIdleTimeout = this._disconnectSessionIdleTimeout;
    }
    if (this._shutdownDisconnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownDisconnectTimeout = this._shutdownDisconnectTimeout;
    }
    if (this._shutdownLogOffTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownLogOffTimeout = this._shutdownLogOffTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuickcreateAwsWorkspacesDeploymentScaleSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferCapacitySizePercentage = undefined;
      this._disconnectSessionIdleTimeout = undefined;
      this._shutdownDisconnectTimeout = undefined;
      this._shutdownLogOffTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferCapacitySizePercentage = value.bufferCapacitySizePercentage;
      this._disconnectSessionIdleTimeout = value.disconnectSessionIdleTimeout;
      this._shutdownDisconnectTimeout = value.shutdownDisconnectTimeout;
      this._shutdownLogOffTimeout = value.shutdownLogOffTimeout;
    }
  }

  // buffer_capacity_size_percentage - computed: true, optional: true, required: false
  private _bufferCapacitySizePercentage?: number; 
  public get bufferCapacitySizePercentage() {
    return this.getNumberAttribute('buffer_capacity_size_percentage');
  }
  public set bufferCapacitySizePercentage(value: number) {
    this._bufferCapacitySizePercentage = value;
  }
  public resetBufferCapacitySizePercentage() {
    this._bufferCapacitySizePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferCapacitySizePercentageInput() {
    return this._bufferCapacitySizePercentage;
  }

  // disconnect_session_idle_timeout - computed: true, optional: true, required: false
  private _disconnectSessionIdleTimeout?: number; 
  public get disconnectSessionIdleTimeout() {
    return this.getNumberAttribute('disconnect_session_idle_timeout');
  }
  public set disconnectSessionIdleTimeout(value: number) {
    this._disconnectSessionIdleTimeout = value;
  }
  public resetDisconnectSessionIdleTimeout() {
    this._disconnectSessionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectSessionIdleTimeoutInput() {
    return this._disconnectSessionIdleTimeout;
  }

  // shutdown_disconnect_timeout - computed: true, optional: true, required: false
  private _shutdownDisconnectTimeout?: number; 
  public get shutdownDisconnectTimeout() {
    return this.getNumberAttribute('shutdown_disconnect_timeout');
  }
  public set shutdownDisconnectTimeout(value: number) {
    this._shutdownDisconnectTimeout = value;
  }
  public resetShutdownDisconnectTimeout() {
    this._shutdownDisconnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownDisconnectTimeoutInput() {
    return this._shutdownDisconnectTimeout;
  }

  // shutdown_log_off_timeout - computed: true, optional: true, required: false
  private _shutdownLogOffTimeout?: number; 
  public get shutdownLogOffTimeout() {
    return this.getNumberAttribute('shutdown_log_off_timeout');
  }
  public set shutdownLogOffTimeout(value: number) {
    this._shutdownLogOffTimeout = value;
  }
  public resetShutdownLogOffTimeout() {
    this._shutdownLogOffTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownLogOffTimeoutInput() {
    return this._shutdownLogOffTimeout;
  }
}
export interface QuickcreateAwsWorkspacesDeploymentWorkspaces {
  /**
  * Indicates if the workspace will be set to maintenance mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#maintenance_mode QuickcreateAwsWorkspacesDeployment#maintenance_mode}
  */
  readonly maintenanceMode?: boolean | cdktf.IResolvable;
  /**
  * Indicates the root volume size of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#root_volume_size QuickcreateAwsWorkspacesDeployment#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Indicates the user volume size of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#user_volume_size QuickcreateAwsWorkspacesDeployment#user_volume_size}
  */
  readonly userVolumeSize: number;
  /**
  * Username of the user to be assigned to this workspace. Required if `user_decoupled_workspaces` is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#username QuickcreateAwsWorkspacesDeployment#username}
  */
  readonly username?: string;
}

export function quickcreateAwsWorkspacesDeploymentWorkspacesToTerraform(struct?: QuickcreateAwsWorkspacesDeploymentWorkspaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_mode: cdktf.booleanToTerraform(struct!.maintenanceMode),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    user_volume_size: cdktf.numberToTerraform(struct!.userVolumeSize),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function quickcreateAwsWorkspacesDeploymentWorkspacesToHclTerraform(struct?: QuickcreateAwsWorkspacesDeploymentWorkspaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_mode: {
      value: cdktf.booleanToHclTerraform(struct!.maintenanceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    root_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.rootVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.userVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuickcreateAwsWorkspacesDeploymentWorkspacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuickcreateAwsWorkspacesDeploymentWorkspaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceMode = this._maintenanceMode;
    }
    if (this._rootVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeSize = this._rootVolumeSize;
    }
    if (this._userVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.userVolumeSize = this._userVolumeSize;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuickcreateAwsWorkspacesDeploymentWorkspaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maintenanceMode = undefined;
      this._rootVolumeSize = undefined;
      this._userVolumeSize = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maintenanceMode = value.maintenanceMode;
      this._rootVolumeSize = value.rootVolumeSize;
      this._userVolumeSize = value.userVolumeSize;
      this._username = value.username;
    }
  }

  // broker_machine_id - computed: true, optional: false, required: false
  public get brokerMachineId() {
    return this.getStringAttribute('broker_machine_id');
  }

  // machine_id - computed: true, optional: false, required: false
  public get machineId() {
    return this.getStringAttribute('machine_id');
  }

  // machine_name - computed: true, optional: false, required: false
  public get machineName() {
    return this.getStringAttribute('machine_name');
  }

  // maintenance_mode - computed: true, optional: true, required: false
  private _maintenanceMode?: boolean | cdktf.IResolvable; 
  public get maintenanceMode() {
    return this.getBooleanAttribute('maintenance_mode');
  }
  public set maintenanceMode(value: boolean | cdktf.IResolvable) {
    this._maintenanceMode = value;
  }
  public resetMaintenanceMode() {
    this._maintenanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeInput() {
    return this._maintenanceMode;
  }

  // root_volume_size - computed: false, optional: false, required: true
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }

  // user_volume_size - computed: false, optional: false, required: true
  private _userVolumeSize?: number; 
  public get userVolumeSize() {
    return this.getNumberAttribute('user_volume_size');
  }
  public set userVolumeSize(value: number) {
    this._userVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userVolumeSizeInput() {
    return this._userVolumeSize;
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

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class QuickcreateAwsWorkspacesDeploymentWorkspacesList extends cdktf.ComplexList {
  public internalValue? : QuickcreateAwsWorkspacesDeploymentWorkspaces[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuickcreateAwsWorkspacesDeploymentWorkspacesOutputReference {
    return new QuickcreateAwsWorkspacesDeploymentWorkspacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment citrix_quickcreate_aws_workspaces_deployment}
*/
export class QuickcreateAwsWorkspacesDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_quickcreate_aws_workspaces_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuickcreateAwsWorkspacesDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuickcreateAwsWorkspacesDeployment to import
  * @param importFromId The id of the existing QuickcreateAwsWorkspacesDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuickcreateAwsWorkspacesDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_quickcreate_aws_workspaces_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_deployment citrix_quickcreate_aws_workspaces_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuickcreateAwsWorkspacesDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: QuickcreateAwsWorkspacesDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_quickcreate_aws_workspaces_deployment',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._directoryConnectionId = config.directoryConnectionId;
    this._imageId = config.imageId;
    this._name = config.name;
    this._performance = config.performance;
    this._rootVolumeSize = config.rootVolumeSize;
    this._runningMode = config.runningMode;
    this._scaleSettings.internalValue = config.scaleSettings;
    this._userDecoupledWorkspaces = config.userDecoupledWorkspaces;
    this._userVolumeSize = config.userVolumeSize;
    this._volumesEncrypted = config.volumesEncrypted;
    this._volumesEncryptionKey = config.volumesEncryptionKey;
    this._workspaces.internalValue = config.workspaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // directory_connection_id - computed: false, optional: false, required: true
  private _directoryConnectionId?: string; 
  public get directoryConnectionId() {
    return this.getStringAttribute('directory_connection_id');
  }
  public set directoryConnectionId(value: string) {
    this._directoryConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryConnectionIdInput() {
    return this._directoryConnectionId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // performance - computed: false, optional: false, required: true
  private _performance?: string; 
  public get performance() {
    return this.getStringAttribute('performance');
  }
  public set performance(value: string) {
    this._performance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInput() {
    return this._performance;
  }

  // root_volume_size - computed: false, optional: false, required: true
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }

  // running_mode - computed: false, optional: false, required: true
  private _runningMode?: string; 
  public get runningMode() {
    return this.getStringAttribute('running_mode');
  }
  public set runningMode(value: string) {
    this._runningMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runningModeInput() {
    return this._runningMode;
  }

  // scale_settings - computed: false, optional: true, required: false
  private _scaleSettings = new QuickcreateAwsWorkspacesDeploymentScaleSettingsOutputReference(this, "scale_settings");
  public get scaleSettings() {
    return this._scaleSettings;
  }
  public putScaleSettings(value: QuickcreateAwsWorkspacesDeploymentScaleSettings) {
    this._scaleSettings.internalValue = value;
  }
  public resetScaleSettings() {
    this._scaleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleSettingsInput() {
    return this._scaleSettings.internalValue;
  }

  // user_decoupled_workspaces - computed: false, optional: false, required: true
  private _userDecoupledWorkspaces?: boolean | cdktf.IResolvable; 
  public get userDecoupledWorkspaces() {
    return this.getBooleanAttribute('user_decoupled_workspaces');
  }
  public set userDecoupledWorkspaces(value: boolean | cdktf.IResolvable) {
    this._userDecoupledWorkspaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userDecoupledWorkspacesInput() {
    return this._userDecoupledWorkspaces;
  }

  // user_volume_size - computed: false, optional: false, required: true
  private _userVolumeSize?: number; 
  public get userVolumeSize() {
    return this.getNumberAttribute('user_volume_size');
  }
  public set userVolumeSize(value: number) {
    this._userVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userVolumeSizeInput() {
    return this._userVolumeSize;
  }

  // volumes_encrypted - computed: false, optional: false, required: true
  private _volumesEncrypted?: boolean | cdktf.IResolvable; 
  public get volumesEncrypted() {
    return this.getBooleanAttribute('volumes_encrypted');
  }
  public set volumesEncrypted(value: boolean | cdktf.IResolvable) {
    this._volumesEncrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesEncryptedInput() {
    return this._volumesEncrypted;
  }

  // volumes_encryption_key - computed: false, optional: true, required: false
  private _volumesEncryptionKey?: string; 
  public get volumesEncryptionKey() {
    return this.getStringAttribute('volumes_encryption_key');
  }
  public set volumesEncryptionKey(value: string) {
    this._volumesEncryptionKey = value;
  }
  public resetVolumesEncryptionKey() {
    this._volumesEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesEncryptionKeyInput() {
    return this._volumesEncryptionKey;
  }

  // workspaces - computed: false, optional: true, required: false
  private _workspaces = new QuickcreateAwsWorkspacesDeploymentWorkspacesList(this, "workspaces", false);
  public get workspaces() {
    return this._workspaces;
  }
  public putWorkspaces(value: QuickcreateAwsWorkspacesDeploymentWorkspaces[] | cdktf.IResolvable) {
    this._workspaces.internalValue = value;
  }
  public resetWorkspaces() {
    this._workspaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspacesInput() {
    return this._workspaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      directory_connection_id: cdktf.stringToTerraform(this._directoryConnectionId),
      image_id: cdktf.stringToTerraform(this._imageId),
      name: cdktf.stringToTerraform(this._name),
      performance: cdktf.stringToTerraform(this._performance),
      root_volume_size: cdktf.numberToTerraform(this._rootVolumeSize),
      running_mode: cdktf.stringToTerraform(this._runningMode),
      scale_settings: quickcreateAwsWorkspacesDeploymentScaleSettingsToTerraform(this._scaleSettings.internalValue),
      user_decoupled_workspaces: cdktf.booleanToTerraform(this._userDecoupledWorkspaces),
      user_volume_size: cdktf.numberToTerraform(this._userVolumeSize),
      volumes_encrypted: cdktf.booleanToTerraform(this._volumesEncrypted),
      volumes_encryption_key: cdktf.stringToTerraform(this._volumesEncryptionKey),
      workspaces: cdktf.listMapper(quickcreateAwsWorkspacesDeploymentWorkspacesToTerraform, false)(this._workspaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_connection_id: {
        value: cdktf.stringToHclTerraform(this._directoryConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance: {
        value: cdktf.stringToHclTerraform(this._performance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_volume_size: {
        value: cdktf.numberToHclTerraform(this._rootVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      running_mode: {
        value: cdktf.stringToHclTerraform(this._runningMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_settings: {
        value: quickcreateAwsWorkspacesDeploymentScaleSettingsToHclTerraform(this._scaleSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuickcreateAwsWorkspacesDeploymentScaleSettings",
      },
      user_decoupled_workspaces: {
        value: cdktf.booleanToHclTerraform(this._userDecoupledWorkspaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_volume_size: {
        value: cdktf.numberToHclTerraform(this._userVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volumes_encrypted: {
        value: cdktf.booleanToHclTerraform(this._volumesEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volumes_encryption_key: {
        value: cdktf.stringToHclTerraform(this._volumesEncryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspaces: {
        value: cdktf.listMapperHcl(quickcreateAwsWorkspacesDeploymentWorkspacesToHclTerraform, false)(this._workspaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuickcreateAwsWorkspacesDeploymentWorkspacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
