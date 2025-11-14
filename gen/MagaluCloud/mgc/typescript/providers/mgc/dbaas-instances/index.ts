// https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbaasInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability zone to use for the instance. Not used when restoring from a snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#availability_zone DbaasInstances#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Number of days to retain automated backups (1-35 days). Zero disables automated backups. Default is 7 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#backup_retention_days DbaasInstances#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * Time to initiate the daily backup in UTC (format: 'HH:MM:SS'). Default is 04:00:00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#backup_start_at DbaasInstances#backup_start_at}
  */
  readonly backupStartAt?: string;
  /**
  * Type of database engine to use (e.g., 'mysql', 'postgresql'). Cannot be changed after creation. Required when creating a new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#engine_name DbaasInstances#engine_name}
  */
  readonly engineName?: string;
  /**
  * Version of the database engine (e.g., '8.0', '13.3'). Must be compatible with the selected engine_name. Required when creating a new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#engine_version DbaasInstances#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Compute and memory capacity of the instance (e.g., 'DP2-16-40'). Can be changed to scale the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#instance_type DbaasInstances#instance_type}
  */
  readonly instanceType: string;
  /**
  * Name of the DBaaS instance. Must be unique within your account. Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#name DbaasInstances#name}
  */
  readonly name: string;
  /**
  * ID of the parameter group to use for the instance. Not used when restoring from a snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#parameter_group DbaasInstances#parameter_group}
  */
  readonly parameterGroup?: string;
  /**
  * Master password for the database. Must be at least 8 characters long and contain letters, numbers and special characters. Required when creating a new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#password DbaasInstances#password}
  */
  readonly password?: string;
  /**
  * ID of the snapshot to use for the instance. Not used when creating a new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#snapshot_id DbaasInstances#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * ID of the instance to use for the snapshot. Not used when creating a new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#snapshot_source_id DbaasInstances#snapshot_source_id}
  */
  readonly snapshotSourceId?: string;
  /**
  * Master username for the database. Must start with a letter and contain only alphanumeric characters. Required when creating a new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#user DbaasInstances#user}
  */
  readonly user?: string;
  /**
  * Size of the storage volume in GB. Can be increased but not decreased after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#volume_size DbaasInstances#volume_size}
  */
  readonly volumeSize: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances mgc_dbaas_instances}
*/
export class DbaasInstances extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_dbaas_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbaasInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbaasInstances to import
  * @param importFromId The id of the existing DbaasInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbaasInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_dbaas_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/dbaas_instances mgc_dbaas_instances} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbaasInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DbaasInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_dbaas_instances',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.40.1',
        providerVersionConstraint: '0.40.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._backupRetentionDays = config.backupRetentionDays;
    this._backupStartAt = config.backupStartAt;
    this._engineName = config.engineName;
    this._engineVersion = config.engineVersion;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._parameterGroup = config.parameterGroup;
    this._password = config.password;
    this._snapshotId = config.snapshotId;
    this._snapshotSourceId = config.snapshotSourceId;
    this._user = config.user;
    this._volumeSize = config.volumeSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // backup_retention_days - computed: true, optional: true, required: false
  private _backupRetentionDays?: number; 
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }
  public set backupRetentionDays(value: number) {
    this._backupRetentionDays = value;
  }
  public resetBackupRetentionDays() {
    this._backupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionDaysInput() {
    return this._backupRetentionDays;
  }

  // backup_start_at - computed: true, optional: true, required: false
  private _backupStartAt?: string; 
  public get backupStartAt() {
    return this.getStringAttribute('backup_start_at');
  }
  public set backupStartAt(value: string) {
    this._backupStartAt = value;
  }
  public resetBackupStartAt() {
    this._backupStartAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStartAtInput() {
    return this._backupStartAt;
  }

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }

  // engine_name - computed: true, optional: true, required: false
  private _engineName?: string; 
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }
  public set engineName(value: string) {
    this._engineName = value;
  }
  public resetEngineName() {
    this._engineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNameInput() {
    return this._engineName;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // instance_type_id - computed: true, optional: false, required: false
  public get instanceTypeId() {
    return this.getStringAttribute('instance_type_id');
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

  // parameter_group - computed: true, optional: true, required: false
  private _parameterGroup?: string; 
  public get parameterGroup() {
    return this.getStringAttribute('parameter_group');
  }
  public set parameterGroup(value: string) {
    this._parameterGroup = value;
  }
  public resetParameterGroup() {
    this._parameterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupInput() {
    return this._parameterGroup;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // snapshot_source_id - computed: false, optional: true, required: false
  private _snapshotSourceId?: string; 
  public get snapshotSourceId() {
    return this.getStringAttribute('snapshot_source_id');
  }
  public set snapshotSourceId(value: string) {
    this._snapshotSourceId = value;
  }
  public resetSnapshotSourceId() {
    this._snapshotSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotSourceIdInput() {
    return this._snapshotSourceId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // volume_size - computed: false, optional: false, required: true
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      backup_retention_days: cdktf.numberToTerraform(this._backupRetentionDays),
      backup_start_at: cdktf.stringToTerraform(this._backupStartAt),
      engine_name: cdktf.stringToTerraform(this._engineName),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      name: cdktf.stringToTerraform(this._name),
      parameter_group: cdktf.stringToTerraform(this._parameterGroup),
      password: cdktf.stringToTerraform(this._password),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      snapshot_source_id: cdktf.stringToTerraform(this._snapshotSourceId),
      user: cdktf.stringToTerraform(this._user),
      volume_size: cdktf.numberToTerraform(this._volumeSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_retention_days: {
        value: cdktf.numberToHclTerraform(this._backupRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_start_at: {
        value: cdktf.stringToHclTerraform(this._backupStartAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_name: {
        value: cdktf.stringToHclTerraform(this._engineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
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
      parameter_group: {
        value: cdktf.stringToHclTerraform(this._parameterGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_source_id: {
        value: cdktf.stringToHclTerraform(this._snapshotSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_size: {
        value: cdktf.numberToHclTerraform(this._volumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
