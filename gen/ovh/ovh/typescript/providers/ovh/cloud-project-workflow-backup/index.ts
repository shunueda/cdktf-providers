// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_workflow_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectWorkflowBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_workflow_backup#backup_name CloudProjectWorkflowBackup#backup_name}
  */
  readonly backupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_workflow_backup#cron CloudProjectWorkflowBackup#cron}
  */
  readonly cron: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_workflow_backup#instance_id CloudProjectWorkflowBackup#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_workflow_backup#max_execution_count CloudProjectWorkflowBackup#max_execution_count}
  */
  readonly maxExecutionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_workflow_backup#name CloudProjectWorkflowBackup#name}
  */
  readonly name: string;
  /**
  * Region name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_workflow_backup#region_name CloudProjectWorkflowBackup#region_name}
  */
  readonly regionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_workflow_backup#rotation CloudProjectWorkflowBackup#rotation}
  */
  readonly rotation: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_workflow_backup#service_name CloudProjectWorkflowBackup#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_workflow_backup ovh_cloud_project_workflow_backup}
*/
export class CloudProjectWorkflowBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_workflow_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectWorkflowBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectWorkflowBackup to import
  * @param importFromId The id of the existing CloudProjectWorkflowBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_workflow_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectWorkflowBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_workflow_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_workflow_backup ovh_cloud_project_workflow_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectWorkflowBackupConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectWorkflowBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_workflow_backup',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupName = config.backupName;
    this._cron = config.cron;
    this._instanceId = config.instanceId;
    this._maxExecutionCount = config.maxExecutionCount;
    this._name = config.name;
    this._regionName = config.regionName;
    this._rotation = config.rotation;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_name - computed: true, optional: true, required: false
  private _backupName?: string; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string) {
    this._backupName = value;
  }
  public resetBackupName() {
    this._backupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // max_execution_count - computed: false, optional: true, required: false
  private _maxExecutionCount?: number; 
  public get maxExecutionCount() {
    return this.getNumberAttribute('max_execution_count');
  }
  public set maxExecutionCount(value: number) {
    this._maxExecutionCount = value;
  }
  public resetMaxExecutionCount() {
    this._maxExecutionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutionCountInput() {
    return this._maxExecutionCount;
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

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // rotation - computed: false, optional: false, required: true
  private _rotation?: number; 
  public get rotation() {
    return this.getNumberAttribute('rotation');
  }
  public set rotation(value: number) {
    this._rotation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationInput() {
    return this._rotation;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_name: cdktf.stringToTerraform(this._backupName),
      cron: cdktf.stringToTerraform(this._cron),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_execution_count: cdktf.numberToTerraform(this._maxExecutionCount),
      name: cdktf.stringToTerraform(this._name),
      region_name: cdktf.stringToTerraform(this._regionName),
      rotation: cdktf.numberToTerraform(this._rotation),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_name: {
        value: cdktf.stringToHclTerraform(this._backupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
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
      max_execution_count: {
        value: cdktf.numberToHclTerraform(this._maxExecutionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation: {
        value: cdktf.numberToHclTerraform(this._rotation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
