// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Mysql database case sensitivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#database_case_sensitivity Mysql#database_case_sensitivity}
  */
  readonly databaseCaseSensitivity: boolean | cdktf.IResolvable;
  /**
  * Mysql encoding. (utf8mb3|utf8mb4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#database_character_set Mysql#database_character_set}
  */
  readonly databaseCharacterSet: string;
  /**
  * Name of database. (only English alphabets or numbers between 3 and 20 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#database_name Mysql#database_name}
  */
  readonly databaseName: string;
  /**
  * Port number of database. (1024 to 65535)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#database_port Mysql#database_port}
  */
  readonly databasePort: number;
  /**
  * User account id of database. (2 to 20 lowercase alphabets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#database_user_name Mysql#database_user_name}
  */
  readonly databaseUserName: string;
  /**
  * User account password of database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#database_user_password Mysql#database_user_password}
  */
  readonly databaseUserPassword: string;
  /**
  * Whether to use storage encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#encryption_enabled Mysql#encryption_enabled}
  */
  readonly encryptionEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#id Mysql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mysql virtual server image id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#image_id Mysql#image_id}
  */
  readonly imageId: string;
  /**
  * Name of database cluster. (3 to 20 characters only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#mysql_cluster_name Mysql#mysql_cluster_name}
  */
  readonly mysqlClusterName: string;
  /**
  * Mysql cluster state (RUNNING|STOPPED)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#mysql_cluster_state Mysql#mysql_cluster_state}
  */
  readonly mysqlClusterState: string;
  /**
  * Whether to use nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#nat_enabled Mysql#nat_enabled}
  */
  readonly natEnabled?: boolean | cdktf.IResolvable;
  /**
  * Public IP for NAT. If it is null, it is automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#nat_public_ip_id Mysql#nat_public_ip_id}
  */
  readonly natPublicIpId?: string;
  /**
  * Security-Group ids of this Mysql DB. Each security-group must be a valid security-group resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#security_group_ids Mysql#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Server type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#server_type Mysql#server_type}
  */
  readonly serverType: string;
  /**
  * Service Zone Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#service_zone_id Mysql#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Subnet id of this database server. Subnet must be a valid subnet resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#subnet_id Mysql#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#tags Mysql#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Timezone setting of this database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#timezone Mysql#timezone}
  */
  readonly timezone: string;
  /**
  * backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#backup Mysql#backup}
  */
  readonly backup?: MysqlBackup;
  /**
  * block_storages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#block_storages Mysql#block_storages}
  */
  readonly blockStorages: MysqlBlockStorages[] | cdktf.IResolvable;
  /**
  * mysql_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#mysql_servers Mysql#mysql_servers}
  */
  readonly mysqlServers: MysqlMysqlServers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#timeouts Mysql#timeouts}
  */
  readonly timeouts?: MysqlTimeouts;
}
export interface MysqlBackup {
  /**
  * Backup File Schedule Frequency.(5M|10M|30M|1H) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#archive_backup_schedule_frequency Mysql#archive_backup_schedule_frequency}
  */
  readonly archiveBackupScheduleFrequency: string;
  /**
  * Backup File Retention Day.(7D <= day <= 35D) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#backup_retention_period Mysql#backup_retention_period}
  */
  readonly backupRetentionPeriod: string;
  /**
  * The time at which the backup starts. (from 0 to 23)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#backup_start_hour Mysql#backup_start_hour}
  */
  readonly backupStartHour: number;
  /**
  * Object storage ID where backup files will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#object_storage_id Mysql#object_storage_id}
  */
  readonly objectStorageId?: string;
}

export function mysqlBackupToTerraform(struct?: MysqlBackupOutputReference | MysqlBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_backup_schedule_frequency: cdktf.stringToTerraform(struct!.archiveBackupScheduleFrequency),
    backup_retention_period: cdktf.stringToTerraform(struct!.backupRetentionPeriod),
    backup_start_hour: cdktf.numberToTerraform(struct!.backupStartHour),
    object_storage_id: cdktf.stringToTerraform(struct!.objectStorageId),
  }
}


export function mysqlBackupToHclTerraform(struct?: MysqlBackupOutputReference | MysqlBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_backup_schedule_frequency: {
      value: cdktf.stringToHclTerraform(struct!.archiveBackupScheduleFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_retention_period: {
      value: cdktf.stringToHclTerraform(struct!.backupRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_start_hour: {
      value: cdktf.numberToHclTerraform(struct!.backupStartHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_storage_id: {
      value: cdktf.stringToHclTerraform(struct!.objectStorageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveBackupScheduleFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveBackupScheduleFrequency = this._archiveBackupScheduleFrequency;
    }
    if (this._backupRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionPeriod = this._backupRetentionPeriod;
    }
    if (this._backupStartHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStartHour = this._backupStartHour;
    }
    if (this._objectStorageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageId = this._objectStorageId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBackupScheduleFrequency = undefined;
      this._backupRetentionPeriod = undefined;
      this._backupStartHour = undefined;
      this._objectStorageId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveBackupScheduleFrequency = value.archiveBackupScheduleFrequency;
      this._backupRetentionPeriod = value.backupRetentionPeriod;
      this._backupStartHour = value.backupStartHour;
      this._objectStorageId = value.objectStorageId;
    }
  }

  // archive_backup_schedule_frequency - computed: false, optional: false, required: true
  private _archiveBackupScheduleFrequency?: string; 
  public get archiveBackupScheduleFrequency() {
    return this.getStringAttribute('archive_backup_schedule_frequency');
  }
  public set archiveBackupScheduleFrequency(value: string) {
    this._archiveBackupScheduleFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBackupScheduleFrequencyInput() {
    return this._archiveBackupScheduleFrequency;
  }

  // backup_retention_period - computed: false, optional: false, required: true
  private _backupRetentionPeriod?: string; 
  public get backupRetentionPeriod() {
    return this.getStringAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: string) {
    this._backupRetentionPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod;
  }

  // backup_start_hour - computed: false, optional: false, required: true
  private _backupStartHour?: number; 
  public get backupStartHour() {
    return this.getNumberAttribute('backup_start_hour');
  }
  public set backupStartHour(value: number) {
    this._backupStartHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStartHourInput() {
    return this._backupStartHour;
  }

  // object_storage_id - computed: false, optional: true, required: false
  private _objectStorageId?: string; 
  public get objectStorageId() {
    return this.getStringAttribute('object_storage_id');
  }
  public set objectStorageId(value: string) {
    this._objectStorageId = value;
  }
  public resetObjectStorageId() {
    this._objectStorageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageIdInput() {
    return this._objectStorageId;
  }
}
export interface MysqlBlockStorages {
  /**
  * Storage usage. (DATA|ARCHIVE|TEMP|BACKUP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#block_storage_role_type Mysql#block_storage_role_type}
  */
  readonly blockStorageRoleType: string;
  /**
  * Block Storage Size (10 to 5120)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#block_storage_size Mysql#block_storage_size}
  */
  readonly blockStorageSize: number;
  /**
  * Storage product name. (SSD|HDD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#block_storage_type Mysql#block_storage_type}
  */
  readonly blockStorageType: string;
}

export function mysqlBlockStoragesToTerraform(struct?: MysqlBlockStorages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_role_type: cdktf.stringToTerraform(struct!.blockStorageRoleType),
    block_storage_size: cdktf.numberToTerraform(struct!.blockStorageSize),
    block_storage_type: cdktf.stringToTerraform(struct!.blockStorageType),
  }
}


export function mysqlBlockStoragesToHclTerraform(struct?: MysqlBlockStorages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage_role_type: {
      value: cdktf.stringToHclTerraform(struct!.blockStorageRoleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_storage_size: {
      value: cdktf.numberToHclTerraform(struct!.blockStorageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_storage_type: {
      value: cdktf.stringToHclTerraform(struct!.blockStorageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlBlockStoragesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlBlockStorages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageRoleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageRoleType = this._blockStorageRoleType;
    }
    if (this._blockStorageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSize = this._blockStorageSize;
    }
    if (this._blockStorageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageType = this._blockStorageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlBlockStorages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockStorageRoleType = undefined;
      this._blockStorageSize = undefined;
      this._blockStorageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockStorageRoleType = value.blockStorageRoleType;
      this._blockStorageSize = value.blockStorageSize;
      this._blockStorageType = value.blockStorageType;
    }
  }

  // block_storage_group_id - computed: true, optional: false, required: false
  public get blockStorageGroupId() {
    return this.getStringAttribute('block_storage_group_id');
  }

  // block_storage_role_type - computed: false, optional: false, required: true
  private _blockStorageRoleType?: string; 
  public get blockStorageRoleType() {
    return this.getStringAttribute('block_storage_role_type');
  }
  public set blockStorageRoleType(value: string) {
    this._blockStorageRoleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageRoleTypeInput() {
    return this._blockStorageRoleType;
  }

  // block_storage_size - computed: false, optional: false, required: true
  private _blockStorageSize?: number; 
  public get blockStorageSize() {
    return this.getNumberAttribute('block_storage_size');
  }
  public set blockStorageSize(value: number) {
    this._blockStorageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInput() {
    return this._blockStorageSize;
  }

  // block_storage_type - computed: false, optional: false, required: true
  private _blockStorageType?: string; 
  public get blockStorageType() {
    return this.getStringAttribute('block_storage_type');
  }
  public set blockStorageType(value: string) {
    this._blockStorageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageTypeInput() {
    return this._blockStorageType;
  }
}

export class MysqlBlockStoragesList extends cdktf.ComplexList {
  public internalValue? : MysqlBlockStorages[] | cdktf.IResolvable

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
  public get(index: number): MysqlBlockStoragesOutputReference {
    return new MysqlBlockStoragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlServers {
  /**
  * Availability Zone Name. The single server does not input anything. (AZ1|AZ2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#availability_zone_name Mysql#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Mysql database server names. (3 to 20 lowercase and number with dash and the first character should be an lowercase letter.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#mysql_server_name Mysql#mysql_server_name}
  */
  readonly mysqlServerName: string;
  /**
  * Server role type Enter 'ACTIVE' for a single server configuration. (ACTIVE | STANDBY)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#server_role_type Mysql#server_role_type}
  */
  readonly serverRoleType: string;
}

export function mysqlMysqlServersToTerraform(struct?: MysqlMysqlServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone_name: cdktf.stringToTerraform(struct!.availabilityZoneName),
    mysql_server_name: cdktf.stringToTerraform(struct!.mysqlServerName),
    server_role_type: cdktf.stringToTerraform(struct!.serverRoleType),
  }
}


export function mysqlMysqlServersToHclTerraform(struct?: MysqlMysqlServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone_name: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_server_name: {
      value: cdktf.stringToHclTerraform(struct!.mysqlServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_role_type: {
      value: cdktf.stringToHclTerraform(struct!.serverRoleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneName = this._availabilityZoneName;
    }
    if (this._mysqlServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlServerName = this._mysqlServerName;
    }
    if (this._serverRoleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRoleType = this._serverRoleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneName = undefined;
      this._mysqlServerName = undefined;
      this._serverRoleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneName = value.availabilityZoneName;
      this._mysqlServerName = value.mysqlServerName;
      this._serverRoleType = value.serverRoleType;
    }
  }

  // availability_zone_name - computed: false, optional: true, required: false
  private _availabilityZoneName?: string; 
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
  public set availabilityZoneName(value: string) {
    this._availabilityZoneName = value;
  }
  public resetAvailabilityZoneName() {
    this._availabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNameInput() {
    return this._availabilityZoneName;
  }

  // mysql_server_name - computed: false, optional: false, required: true
  private _mysqlServerName?: string; 
  public get mysqlServerName() {
    return this.getStringAttribute('mysql_server_name');
  }
  public set mysqlServerName(value: string) {
    this._mysqlServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlServerNameInput() {
    return this._mysqlServerName;
  }

  // server_role_type - computed: false, optional: false, required: true
  private _serverRoleType?: string; 
  public get serverRoleType() {
    return this.getStringAttribute('server_role_type');
  }
  public set serverRoleType(value: string) {
    this._serverRoleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRoleTypeInput() {
    return this._serverRoleType;
  }
}

export class MysqlMysqlServersList extends cdktf.ComplexList {
  public internalValue? : MysqlMysqlServers[] | cdktf.IResolvable

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
  public get(index: number): MysqlMysqlServersOutputReference {
    return new MysqlMysqlServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#create Mysql#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#delete Mysql#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#update Mysql#update}
  */
  readonly update?: string;
}

export function mysqlTimeoutsToTerraform(struct?: MysqlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mysqlTimeoutsToHclTerraform(struct?: MysqlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MysqlTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql samsungcloudplatform_mysql}
*/
export class Mysql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_mysql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mysql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mysql to import
  * @param importFromId The id of the existing Mysql that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mysql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_mysql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/mysql samsungcloudplatform_mysql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_mysql',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseCaseSensitivity = config.databaseCaseSensitivity;
    this._databaseCharacterSet = config.databaseCharacterSet;
    this._databaseName = config.databaseName;
    this._databasePort = config.databasePort;
    this._databaseUserName = config.databaseUserName;
    this._databaseUserPassword = config.databaseUserPassword;
    this._encryptionEnabled = config.encryptionEnabled;
    this._id = config.id;
    this._imageId = config.imageId;
    this._mysqlClusterName = config.mysqlClusterName;
    this._mysqlClusterState = config.mysqlClusterState;
    this._natEnabled = config.natEnabled;
    this._natPublicIpId = config.natPublicIpId;
    this._securityGroupIds = config.securityGroupIds;
    this._serverType = config.serverType;
    this._serviceZoneId = config.serviceZoneId;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._backup.internalValue = config.backup;
    this._blockStorages.internalValue = config.blockStorages;
    this._mysqlServers.internalValue = config.mysqlServers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_case_sensitivity - computed: false, optional: false, required: true
  private _databaseCaseSensitivity?: boolean | cdktf.IResolvable; 
  public get databaseCaseSensitivity() {
    return this.getBooleanAttribute('database_case_sensitivity');
  }
  public set databaseCaseSensitivity(value: boolean | cdktf.IResolvable) {
    this._databaseCaseSensitivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseCaseSensitivityInput() {
    return this._databaseCaseSensitivity;
  }

  // database_character_set - computed: false, optional: false, required: true
  private _databaseCharacterSet?: string; 
  public get databaseCharacterSet() {
    return this.getStringAttribute('database_character_set');
  }
  public set databaseCharacterSet(value: string) {
    this._databaseCharacterSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseCharacterSetInput() {
    return this._databaseCharacterSet;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // database_port - computed: false, optional: false, required: true
  private _databasePort?: number; 
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }
  public set databasePort(value: number) {
    this._databasePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePortInput() {
    return this._databasePort;
  }

  // database_user_name - computed: false, optional: false, required: true
  private _databaseUserName?: string; 
  public get databaseUserName() {
    return this.getStringAttribute('database_user_name');
  }
  public set databaseUserName(value: string) {
    this._databaseUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUserNameInput() {
    return this._databaseUserName;
  }

  // database_user_password - computed: false, optional: false, required: true
  private _databaseUserPassword?: string; 
  public get databaseUserPassword() {
    return this.getStringAttribute('database_user_password');
  }
  public set databaseUserPassword(value: string) {
    this._databaseUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUserPasswordInput() {
    return this._databaseUserPassword;
  }

  // encryption_enabled - computed: false, optional: false, required: true
  private _encryptionEnabled?: boolean | cdktf.IResolvable; 
  public get encryptionEnabled() {
    return this.getBooleanAttribute('encryption_enabled');
  }
  public set encryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionEnabledInput() {
    return this._encryptionEnabled;
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

  // mysql_cluster_name - computed: false, optional: false, required: true
  private _mysqlClusterName?: string; 
  public get mysqlClusterName() {
    return this.getStringAttribute('mysql_cluster_name');
  }
  public set mysqlClusterName(value: string) {
    this._mysqlClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlClusterNameInput() {
    return this._mysqlClusterName;
  }

  // mysql_cluster_state - computed: false, optional: false, required: true
  private _mysqlClusterState?: string; 
  public get mysqlClusterState() {
    return this.getStringAttribute('mysql_cluster_state');
  }
  public set mysqlClusterState(value: string) {
    this._mysqlClusterState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlClusterStateInput() {
    return this._mysqlClusterState;
  }

  // nat_enabled - computed: false, optional: true, required: false
  private _natEnabled?: boolean | cdktf.IResolvable; 
  public get natEnabled() {
    return this.getBooleanAttribute('nat_enabled');
  }
  public set natEnabled(value: boolean | cdktf.IResolvable) {
    this._natEnabled = value;
  }
  public resetNatEnabled() {
    this._natEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natEnabledInput() {
    return this._natEnabled;
  }

  // nat_ip_address - computed: true, optional: false, required: false
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }

  // nat_public_ip_id - computed: false, optional: true, required: false
  private _natPublicIpId?: string; 
  public get natPublicIpId() {
    return this.getStringAttribute('nat_public_ip_id');
  }
  public set natPublicIpId(value: string) {
    this._natPublicIpId = value;
  }
  public resetNatPublicIpId() {
    this._natPublicIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPublicIpIdInput() {
    return this._natPublicIpId;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // service_zone_id - computed: false, optional: false, required: true
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // virtual_ip_address - computed: true, optional: false, required: false
  public get virtualIpAddress() {
    return this.getStringAttribute('virtual_ip_address');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new MysqlBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: MysqlBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // block_storages - computed: false, optional: false, required: true
  private _blockStorages = new MysqlBlockStoragesList(this, "block_storages", false);
  public get blockStorages() {
    return this._blockStorages;
  }
  public putBlockStorages(value: MysqlBlockStorages[] | cdktf.IResolvable) {
    this._blockStorages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStoragesInput() {
    return this._blockStorages.internalValue;
  }

  // mysql_servers - computed: false, optional: false, required: true
  private _mysqlServers = new MysqlMysqlServersList(this, "mysql_servers", false);
  public get mysqlServers() {
    return this._mysqlServers;
  }
  public putMysqlServers(value: MysqlMysqlServers[] | cdktf.IResolvable) {
    this._mysqlServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlServersInput() {
    return this._mysqlServers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MysqlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MysqlTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_case_sensitivity: cdktf.booleanToTerraform(this._databaseCaseSensitivity),
      database_character_set: cdktf.stringToTerraform(this._databaseCharacterSet),
      database_name: cdktf.stringToTerraform(this._databaseName),
      database_port: cdktf.numberToTerraform(this._databasePort),
      database_user_name: cdktf.stringToTerraform(this._databaseUserName),
      database_user_password: cdktf.stringToTerraform(this._databaseUserPassword),
      encryption_enabled: cdktf.booleanToTerraform(this._encryptionEnabled),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      mysql_cluster_name: cdktf.stringToTerraform(this._mysqlClusterName),
      mysql_cluster_state: cdktf.stringToTerraform(this._mysqlClusterState),
      nat_enabled: cdktf.booleanToTerraform(this._natEnabled),
      nat_public_ip_id: cdktf.stringToTerraform(this._natPublicIpId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      server_type: cdktf.stringToTerraform(this._serverType),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      backup: mysqlBackupToTerraform(this._backup.internalValue),
      block_storages: cdktf.listMapper(mysqlBlockStoragesToTerraform, true)(this._blockStorages.internalValue),
      mysql_servers: cdktf.listMapper(mysqlMysqlServersToTerraform, true)(this._mysqlServers.internalValue),
      timeouts: mysqlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_case_sensitivity: {
        value: cdktf.booleanToHclTerraform(this._databaseCaseSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database_character_set: {
        value: cdktf.stringToHclTerraform(this._databaseCharacterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_port: {
        value: cdktf.numberToHclTerraform(this._databasePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_user_name: {
        value: cdktf.stringToHclTerraform(this._databaseUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_user_password: {
        value: cdktf.stringToHclTerraform(this._databaseUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._encryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      mysql_cluster_name: {
        value: cdktf.stringToHclTerraform(this._mysqlClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_cluster_state: {
        value: cdktf.stringToHclTerraform(this._mysqlClusterState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_enabled: {
        value: cdktf.booleanToHclTerraform(this._natEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_public_ip_id: {
        value: cdktf.stringToHclTerraform(this._natPublicIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup: {
        value: mysqlBackupToHclTerraform(this._backup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MysqlBackupList",
      },
      block_storages: {
        value: cdktf.listMapperHcl(mysqlBlockStoragesToHclTerraform, true)(this._blockStorages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlBlockStoragesList",
      },
      mysql_servers: {
        value: cdktf.listMapperHcl(mysqlMysqlServersToHclTerraform, true)(this._mysqlServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlServersList",
      },
      timeouts: {
        value: mysqlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MysqlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
