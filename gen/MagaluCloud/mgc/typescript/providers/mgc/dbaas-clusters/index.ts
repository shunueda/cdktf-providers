// https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbaasClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of days to retain automated backups (1-35 days). Default is 7 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters#backup_retention_days DbaasClusters#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * Time to initiate the daily backup in UTC (format: 'HH:MM:SS'). Default is '04:00:00'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters#backup_start_at DbaasClusters#backup_start_at}
  */
  readonly backupStartAt?: string;
  /**
  * Type of database engine to use (e.g., 'mysql', 'postgresql'). Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters#engine_name DbaasClusters#engine_name}
  */
  readonly engineName: string;
  /**
  * Version of the database engine (e.g., '8.0', '13.3'). Must be compatible with the selected engine_name. Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters#engine_version DbaasClusters#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Compute and memory capacity of the cluster determined by the instance-type field label (e.g., 'DP2-16-40'). Can be changed to scale the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters#instance_type DbaasClusters#instance_type}
  */
  readonly instanceType: string;
  /**
  * Name of the DBaaS cluster. Must be unique. Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters#name DbaasClusters#name}
  */
  readonly name: string;
  /**
  * ID of the parameter group to associate with the cluster.  Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters#parameter_group DbaasClusters#parameter_group}
  */
  readonly parameterGroup?: string;
  /**
  * Master password for the database cluster. Must be at least 8 characters long.  Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters#password DbaasClusters#password}
  */
  readonly password: string;
  /**
  * Master username for the database cluster. Must start with a letter and contain only alphanumeric characters.  Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters#user DbaasClusters#user}
  */
  readonly user: string;
  /**
  * Size of the storage volume in GB. Can be increased but not decreased after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters#volume_size DbaasClusters#volume_size}
  */
  readonly volumeSize: number;
  /**
  * Type of the storage volume (e.g., 'CLOUD_NVME15K' or 'CLOUD_NVME20K'). Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters#volume_type DbaasClusters#volume_type}
  */
  readonly volumeType?: string;
}
export interface DbaasClustersAddresses {
}

export function dbaasClustersAddressesToTerraform(struct?: DbaasClustersAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbaasClustersAddressesToHclTerraform(struct?: DbaasClustersAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbaasClustersAddressesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbaasClustersAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasClustersAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // purpose - computed: true, optional: false, required: false
  public get purpose() {
    return this.getStringAttribute('purpose');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DbaasClustersAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DbaasClustersAddressesOutputReference {
    return new DbaasClustersAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters mgc_dbaas_clusters}
*/
export class DbaasClusters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_dbaas_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbaasClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbaasClusters to import
  * @param importFromId The id of the existing DbaasClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbaasClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_dbaas_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/dbaas_clusters mgc_dbaas_clusters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbaasClustersConfig
  */
  public constructor(scope: Construct, id: string, config: DbaasClustersConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_dbaas_clusters',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.0',
        providerVersionConstraint: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupRetentionDays = config.backupRetentionDays;
    this._backupStartAt = config.backupStartAt;
    this._engineName = config.engineName;
    this._engineVersion = config.engineVersion;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._parameterGroup = config.parameterGroup;
    this._password = config.password;
    this._user = config.user;
    this._volumeSize = config.volumeSize;
    this._volumeType = config.volumeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: true, optional: false, required: false
  private _addresses = new DbaasClustersAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }

  // apply_parameters_pending - computed: true, optional: false, required: false
  public get applyParametersPending() {
    return this.getBooleanAttribute('apply_parameters_pending');
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }

  // engine_name - computed: false, optional: false, required: true
  private _engineName?: string; 
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }
  public set engineName(value: string) {
    this._engineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNameInput() {
    return this._engineName;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // finished_at - computed: true, optional: false, required: false
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // started_at - computed: true, optional: false, required: false
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
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

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_retention_days: cdktf.numberToTerraform(this._backupRetentionDays),
      backup_start_at: cdktf.stringToTerraform(this._backupStartAt),
      engine_name: cdktf.stringToTerraform(this._engineName),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      name: cdktf.stringToTerraform(this._name),
      parameter_group: cdktf.stringToTerraform(this._parameterGroup),
      password: cdktf.stringToTerraform(this._password),
      user: cdktf.stringToTerraform(this._user),
      volume_size: cdktf.numberToTerraform(this._volumeSize),
      volume_type: cdktf.stringToTerraform(this._volumeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      volume_type: {
        value: cdktf.stringToHclTerraform(this._volumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
