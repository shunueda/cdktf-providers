// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to use database audit logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#audit_enabled Sqlserver#audit_enabled}
  */
  readonly auditEnabled: boolean | cdktf.IResolvable;
  /**
  * Contract : None, 1-year, 3-year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#contract_period Sqlserver#contract_period}
  */
  readonly contractPeriod: string;
  /**
  * Commands that specify how to sort and compare data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#database_collation Sqlserver#database_collation}
  */
  readonly databaseCollation: string;
  /**
  * Database Name List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#database_names Sqlserver#database_names}
  */
  readonly databaseNames: string[];
  /**
  * Port number of this database. (1024 to 65535)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#database_port Sqlserver#database_port}
  */
  readonly databasePort: number;
  /**
  * MS SQL Server Database Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#database_service_name Sqlserver#database_service_name}
  */
  readonly databaseServiceName: string;
  /**
  * User account id of database. (2 to 20 alpha-numerics)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#database_user_name Sqlserver#database_user_name}
  */
  readonly databaseUserName: string;
  /**
  * User account password of database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#database_user_password Sqlserver#database_user_password}
  */
  readonly databaseUserPassword: string;
  /**
  * Whether to use storage encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#encryption_enabled Sqlserver#encryption_enabled}
  */
  readonly encryptionEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#id Sqlserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SQL Server standard image id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#image_id Sqlserver#image_id}
  */
  readonly imageId: string;
  /**
  * License key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#license Sqlserver#license}
  */
  readonly license: string;
  /**
  * Whether to use nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#nat_enabled Sqlserver#nat_enabled}
  */
  readonly natEnabled?: boolean | cdktf.IResolvable;
  /**
  * Public IP for NAT. If it is null, it is automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#nat_public_ip_id Sqlserver#nat_public_ip_id}
  */
  readonly natPublicIpId?: string;
  /**
  * Next contract : None, 1-year, 3-year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#next_contract_period Sqlserver#next_contract_period}
  */
  readonly nextContractPeriod?: string;
  /**
  * Security-Group ids of this MS SQL Server DB. Each security-group must be a valid security-group resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#security_group_ids Sqlserver#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Whether to use storage encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#server_type Sqlserver#server_type}
  */
  readonly serverType: string;
  /**
  * Service Zone Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#service_zone_id Sqlserver#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Name of database cluster. (3 to 20 characters only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#sqlserver_cluster_name Sqlserver#sqlserver_cluster_name}
  */
  readonly sqlserverClusterName: string;
  /**
  * MS SQL Server cluster state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#sqlserver_cluster_state Sqlserver#sqlserver_cluster_state}
  */
  readonly sqlserverClusterState: string;
  /**
  * Subnet id of this database server. Subnet must be a valid subnet resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#subnet_id Sqlserver#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#tags Sqlserver#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Timezone setting of this database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#timezone Sqlserver#timezone}
  */
  readonly timezone: string;
  /**
  * backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#backup Sqlserver#backup}
  */
  readonly backup?: SqlserverBackup;
  /**
  * block_storages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#block_storages Sqlserver#block_storages}
  */
  readonly blockStorages: SqlserverBlockStorages[] | cdktf.IResolvable;
  /**
  * sqlserver_active_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#sqlserver_active_directory Sqlserver#sqlserver_active_directory}
  */
  readonly sqlserverActiveDirectory?: SqlserverSqlserverActiveDirectory[] | cdktf.IResolvable;
  /**
  * sqlserver_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#sqlserver_servers Sqlserver#sqlserver_servers}
  */
  readonly sqlserverServers: SqlserverSqlserverServers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#timeouts Sqlserver#timeouts}
  */
  readonly timeouts?: SqlserverTimeouts;
}
export interface SqlserverBackup {
  /**
  * Backup File Schedule Frequency.(5M, 10M, 30M, 1H) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#archive_backup_schedule_frequency Sqlserver#archive_backup_schedule_frequency}
  */
  readonly archiveBackupScheduleFrequency: string;
  /**
  * Backup File Retention Day.(7D <= day <= 35D) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#backup_retention_period Sqlserver#backup_retention_period}
  */
  readonly backupRetentionPeriod: string;
  /**
  * The time at which the backup starts. (from 0 to 23)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#backup_start_hour Sqlserver#backup_start_hour}
  */
  readonly backupStartHour: number;
  /**
  * Full backup schedule(Day). (MONDAY to SUNDAY)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#full_backup_day_of_week Sqlserver#full_backup_day_of_week}
  */
  readonly fullBackupDayOfWeek: string;
  /**
  * Object storage ID where backup files will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#object_storage_id Sqlserver#object_storage_id}
  */
  readonly objectStorageId: string;
}

export function sqlserverBackupToTerraform(struct?: SqlserverBackupOutputReference | SqlserverBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_backup_schedule_frequency: cdktf.stringToTerraform(struct!.archiveBackupScheduleFrequency),
    backup_retention_period: cdktf.stringToTerraform(struct!.backupRetentionPeriod),
    backup_start_hour: cdktf.numberToTerraform(struct!.backupStartHour),
    full_backup_day_of_week: cdktf.stringToTerraform(struct!.fullBackupDayOfWeek),
    object_storage_id: cdktf.stringToTerraform(struct!.objectStorageId),
  }
}


export function sqlserverBackupToHclTerraform(struct?: SqlserverBackupOutputReference | SqlserverBackup): any {
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
    full_backup_day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.fullBackupDayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SqlserverBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlserverBackup | undefined {
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
    if (this._fullBackupDayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullBackupDayOfWeek = this._fullBackupDayOfWeek;
    }
    if (this._objectStorageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageId = this._objectStorageId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBackupScheduleFrequency = undefined;
      this._backupRetentionPeriod = undefined;
      this._backupStartHour = undefined;
      this._fullBackupDayOfWeek = undefined;
      this._objectStorageId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveBackupScheduleFrequency = value.archiveBackupScheduleFrequency;
      this._backupRetentionPeriod = value.backupRetentionPeriod;
      this._backupStartHour = value.backupStartHour;
      this._fullBackupDayOfWeek = value.fullBackupDayOfWeek;
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

  // full_backup_day_of_week - computed: false, optional: false, required: true
  private _fullBackupDayOfWeek?: string; 
  public get fullBackupDayOfWeek() {
    return this.getStringAttribute('full_backup_day_of_week');
  }
  public set fullBackupDayOfWeek(value: string) {
    this._fullBackupDayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupDayOfWeekInput() {
    return this._fullBackupDayOfWeek;
  }

  // object_storage_id - computed: false, optional: false, required: true
  private _objectStorageId?: string; 
  public get objectStorageId() {
    return this.getStringAttribute('object_storage_id');
  }
  public set objectStorageId(value: string) {
    this._objectStorageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageIdInput() {
    return this._objectStorageId;
  }
}
export interface SqlserverBlockStorages {
  /**
  * Block Storage Size (10 to 5120)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#block_storage_size Sqlserver#block_storage_size}
  */
  readonly blockStorageSize: number;
  /**
  * Storage product name. (SSD|HDD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#block_storage_type Sqlserver#block_storage_type}
  */
  readonly blockStorageType: string;
}

export function sqlserverBlockStoragesToTerraform(struct?: SqlserverBlockStorages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size: cdktf.numberToTerraform(struct!.blockStorageSize),
    block_storage_type: cdktf.stringToTerraform(struct!.blockStorageType),
  }
}


export function sqlserverBlockStoragesToHclTerraform(struct?: SqlserverBlockStorages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SqlserverBlockStoragesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlserverBlockStorages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SqlserverBlockStorages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._blockStorageSize = value.blockStorageSize;
      this._blockStorageType = value.blockStorageType;
    }
  }

  // block_storage_group_id - computed: true, optional: false, required: false
  public get blockStorageGroupId() {
    return this.getStringAttribute('block_storage_group_id');
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

export class SqlserverBlockStoragesList extends cdktf.ComplexList {
  public internalValue? : SqlserverBlockStorages[] | cdktf.IResolvable

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
  public get(index: number): SqlserverBlockStoragesOutputReference {
    return new SqlserverBlockStoragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlserverSqlserverActiveDirectory {
  /**
  * Active Directory Server User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#ad_server_user_id Sqlserver#ad_server_user_id}
  */
  readonly adServerUserId?: string;
  /**
  * Active Directory Server User password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#ad_server_user_password Sqlserver#ad_server_user_password}
  */
  readonly adServerUserPassword?: string;
  /**
  * Active Directory DNS Server IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#dns_server_ips Sqlserver#dns_server_ips}
  */
  readonly dnsServerIps?: string[];
  /**
  * Active Directory Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#domain_name Sqlserver#domain_name}
  */
  readonly domainName?: string;
  /**
  * Active Directory NetBios name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#domain_net_bios_name Sqlserver#domain_net_bios_name}
  */
  readonly domainNetBiosName?: string;
  /**
  * Active Directory Failover Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#failover_cluster_name Sqlserver#failover_cluster_name}
  */
  readonly failoverClusterName?: string;
}

export function sqlserverSqlserverActiveDirectoryToTerraform(struct?: SqlserverSqlserverActiveDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_server_user_id: cdktf.stringToTerraform(struct!.adServerUserId),
    ad_server_user_password: cdktf.stringToTerraform(struct!.adServerUserPassword),
    dns_server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServerIps),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_net_bios_name: cdktf.stringToTerraform(struct!.domainNetBiosName),
    failover_cluster_name: cdktf.stringToTerraform(struct!.failoverClusterName),
  }
}


export function sqlserverSqlserverActiveDirectoryToHclTerraform(struct?: SqlserverSqlserverActiveDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_server_user_id: {
      value: cdktf.stringToHclTerraform(struct!.adServerUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ad_server_user_password: {
      value: cdktf.stringToHclTerraform(struct!.adServerUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServerIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_net_bios_name: {
      value: cdktf.stringToHclTerraform(struct!.domainNetBiosName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.failoverClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverSqlserverActiveDirectoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlserverSqlserverActiveDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adServerUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.adServerUserId = this._adServerUserId;
    }
    if (this._adServerUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adServerUserPassword = this._adServerUserPassword;
    }
    if (this._dnsServerIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerIps = this._dnsServerIps;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainNetBiosName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNetBiosName = this._domainNetBiosName;
    }
    if (this._failoverClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverClusterName = this._failoverClusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverSqlserverActiveDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adServerUserId = undefined;
      this._adServerUserPassword = undefined;
      this._dnsServerIps = undefined;
      this._domainName = undefined;
      this._domainNetBiosName = undefined;
      this._failoverClusterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adServerUserId = value.adServerUserId;
      this._adServerUserPassword = value.adServerUserPassword;
      this._dnsServerIps = value.dnsServerIps;
      this._domainName = value.domainName;
      this._domainNetBiosName = value.domainNetBiosName;
      this._failoverClusterName = value.failoverClusterName;
    }
  }

  // ad_server_user_id - computed: false, optional: true, required: false
  private _adServerUserId?: string; 
  public get adServerUserId() {
    return this.getStringAttribute('ad_server_user_id');
  }
  public set adServerUserId(value: string) {
    this._adServerUserId = value;
  }
  public resetAdServerUserId() {
    this._adServerUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adServerUserIdInput() {
    return this._adServerUserId;
  }

  // ad_server_user_password - computed: false, optional: true, required: false
  private _adServerUserPassword?: string; 
  public get adServerUserPassword() {
    return this.getStringAttribute('ad_server_user_password');
  }
  public set adServerUserPassword(value: string) {
    this._adServerUserPassword = value;
  }
  public resetAdServerUserPassword() {
    this._adServerUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adServerUserPasswordInput() {
    return this._adServerUserPassword;
  }

  // dns_server_ips - computed: false, optional: true, required: false
  private _dnsServerIps?: string[]; 
  public get dnsServerIps() {
    return this.getListAttribute('dns_server_ips');
  }
  public set dnsServerIps(value: string[]) {
    this._dnsServerIps = value;
  }
  public resetDnsServerIps() {
    this._dnsServerIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpsInput() {
    return this._dnsServerIps;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_net_bios_name - computed: false, optional: true, required: false
  private _domainNetBiosName?: string; 
  public get domainNetBiosName() {
    return this.getStringAttribute('domain_net_bios_name');
  }
  public set domainNetBiosName(value: string) {
    this._domainNetBiosName = value;
  }
  public resetDomainNetBiosName() {
    this._domainNetBiosName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNetBiosNameInput() {
    return this._domainNetBiosName;
  }

  // failover_cluster_name - computed: false, optional: true, required: false
  private _failoverClusterName?: string; 
  public get failoverClusterName() {
    return this.getStringAttribute('failover_cluster_name');
  }
  public set failoverClusterName(value: string) {
    this._failoverClusterName = value;
  }
  public resetFailoverClusterName() {
    this._failoverClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverClusterNameInput() {
    return this._failoverClusterName;
  }
}

export class SqlserverSqlserverActiveDirectoryList extends cdktf.ComplexList {
  public internalValue? : SqlserverSqlserverActiveDirectory[] | cdktf.IResolvable

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
  public get(index: number): SqlserverSqlserverActiveDirectoryOutputReference {
    return new SqlserverSqlserverActiveDirectoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlserverSqlserverServers {
  /**
  * Availability Zone Name. (AZ1 | AZ2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#availability_zone_name Sqlserver#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Server role type Enter 'ACTIVE' for a single server configuration. (ACTIVE | PRIMARY | SECONDARY)",
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#server_role_type Sqlserver#server_role_type}
  */
  readonly serverRoleType: string;
  /**
  * MS SQL Server database server names. (3 to 15 lowercase and number with dash and the first character should be an lowercase letter.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#sqlserver_server_name Sqlserver#sqlserver_server_name}
  */
  readonly sqlserverServerName: string;
}

export function sqlserverSqlserverServersToTerraform(struct?: SqlserverSqlserverServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone_name: cdktf.stringToTerraform(struct!.availabilityZoneName),
    server_role_type: cdktf.stringToTerraform(struct!.serverRoleType),
    sqlserver_server_name: cdktf.stringToTerraform(struct!.sqlserverServerName),
  }
}


export function sqlserverSqlserverServersToHclTerraform(struct?: SqlserverSqlserverServers | cdktf.IResolvable): any {
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
    server_role_type: {
      value: cdktf.stringToHclTerraform(struct!.serverRoleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqlserver_server_name: {
      value: cdktf.stringToHclTerraform(struct!.sqlserverServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverSqlserverServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlserverSqlserverServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneName = this._availabilityZoneName;
    }
    if (this._serverRoleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRoleType = this._serverRoleType;
    }
    if (this._sqlserverServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlserverServerName = this._sqlserverServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverSqlserverServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneName = undefined;
      this._serverRoleType = undefined;
      this._sqlserverServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneName = value.availabilityZoneName;
      this._serverRoleType = value.serverRoleType;
      this._sqlserverServerName = value.sqlserverServerName;
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

  // sqlserver_server_name - computed: false, optional: false, required: true
  private _sqlserverServerName?: string; 
  public get sqlserverServerName() {
    return this.getStringAttribute('sqlserver_server_name');
  }
  public set sqlserverServerName(value: string) {
    this._sqlserverServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlserverServerNameInput() {
    return this._sqlserverServerName;
  }
}

export class SqlserverSqlserverServersList extends cdktf.ComplexList {
  public internalValue? : SqlserverSqlserverServers[] | cdktf.IResolvable

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
  public get(index: number): SqlserverSqlserverServersOutputReference {
    return new SqlserverSqlserverServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlserverTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#create Sqlserver#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#delete Sqlserver#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#update Sqlserver#update}
  */
  readonly update?: string;
}

export function sqlserverTimeoutsToTerraform(struct?: SqlserverTimeouts | cdktf.IResolvable): any {
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


export function sqlserverTimeoutsToHclTerraform(struct?: SqlserverTimeouts | cdktf.IResolvable): any {
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

export class SqlserverTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SqlserverTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SqlserverTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver samsungcloudplatform_sqlserver}
*/
export class Sqlserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_sqlserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sqlserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sqlserver to import
  * @param importFromId The id of the existing Sqlserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sqlserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_sqlserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/sqlserver samsungcloudplatform_sqlserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_sqlserver',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0',
        providerVersionConstraint: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditEnabled = config.auditEnabled;
    this._contractPeriod = config.contractPeriod;
    this._databaseCollation = config.databaseCollation;
    this._databaseNames = config.databaseNames;
    this._databasePort = config.databasePort;
    this._databaseServiceName = config.databaseServiceName;
    this._databaseUserName = config.databaseUserName;
    this._databaseUserPassword = config.databaseUserPassword;
    this._encryptionEnabled = config.encryptionEnabled;
    this._id = config.id;
    this._imageId = config.imageId;
    this._license = config.license;
    this._natEnabled = config.natEnabled;
    this._natPublicIpId = config.natPublicIpId;
    this._nextContractPeriod = config.nextContractPeriod;
    this._securityGroupIds = config.securityGroupIds;
    this._serverType = config.serverType;
    this._serviceZoneId = config.serviceZoneId;
    this._sqlserverClusterName = config.sqlserverClusterName;
    this._sqlserverClusterState = config.sqlserverClusterState;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._backup.internalValue = config.backup;
    this._blockStorages.internalValue = config.blockStorages;
    this._sqlserverActiveDirectory.internalValue = config.sqlserverActiveDirectory;
    this._sqlserverServers.internalValue = config.sqlserverServers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_enabled - computed: false, optional: false, required: true
  private _auditEnabled?: boolean | cdktf.IResolvable; 
  public get auditEnabled() {
    return this.getBooleanAttribute('audit_enabled');
  }
  public set auditEnabled(value: boolean | cdktf.IResolvable) {
    this._auditEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditEnabledInput() {
    return this._auditEnabled;
  }

  // contract_period - computed: false, optional: false, required: true
  private _contractPeriod?: string; 
  public get contractPeriod() {
    return this.getStringAttribute('contract_period');
  }
  public set contractPeriod(value: string) {
    this._contractPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractPeriodInput() {
    return this._contractPeriod;
  }

  // database_collation - computed: false, optional: false, required: true
  private _databaseCollation?: string; 
  public get databaseCollation() {
    return this.getStringAttribute('database_collation');
  }
  public set databaseCollation(value: string) {
    this._databaseCollation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseCollationInput() {
    return this._databaseCollation;
  }

  // database_names - computed: false, optional: false, required: true
  private _databaseNames?: string[]; 
  public get databaseNames() {
    return this.getListAttribute('database_names');
  }
  public set databaseNames(value: string[]) {
    this._databaseNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNamesInput() {
    return this._databaseNames;
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

  // database_service_name - computed: false, optional: false, required: true
  private _databaseServiceName?: string; 
  public get databaseServiceName() {
    return this.getStringAttribute('database_service_name');
  }
  public set databaseServiceName(value: string) {
    this._databaseServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseServiceNameInput() {
    return this._databaseServiceName;
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

  // license - computed: false, optional: false, required: true
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
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

  // next_contract_period - computed: false, optional: true, required: false
  private _nextContractPeriod?: string; 
  public get nextContractPeriod() {
    return this.getStringAttribute('next_contract_period');
  }
  public set nextContractPeriod(value: string) {
    this._nextContractPeriod = value;
  }
  public resetNextContractPeriod() {
    this._nextContractPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextContractPeriodInput() {
    return this._nextContractPeriod;
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

  // sqlserver_cluster_name - computed: false, optional: false, required: true
  private _sqlserverClusterName?: string; 
  public get sqlserverClusterName() {
    return this.getStringAttribute('sqlserver_cluster_name');
  }
  public set sqlserverClusterName(value: string) {
    this._sqlserverClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlserverClusterNameInput() {
    return this._sqlserverClusterName;
  }

  // sqlserver_cluster_state - computed: false, optional: false, required: true
  private _sqlserverClusterState?: string; 
  public get sqlserverClusterState() {
    return this.getStringAttribute('sqlserver_cluster_state');
  }
  public set sqlserverClusterState(value: string) {
    this._sqlserverClusterState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlserverClusterStateInput() {
    return this._sqlserverClusterState;
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
  private _backup = new SqlserverBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: SqlserverBackup) {
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
  private _blockStorages = new SqlserverBlockStoragesList(this, "block_storages", false);
  public get blockStorages() {
    return this._blockStorages;
  }
  public putBlockStorages(value: SqlserverBlockStorages[] | cdktf.IResolvable) {
    this._blockStorages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStoragesInput() {
    return this._blockStorages.internalValue;
  }

  // sqlserver_active_directory - computed: false, optional: true, required: false
  private _sqlserverActiveDirectory = new SqlserverSqlserverActiveDirectoryList(this, "sqlserver_active_directory", true);
  public get sqlserverActiveDirectory() {
    return this._sqlserverActiveDirectory;
  }
  public putSqlserverActiveDirectory(value: SqlserverSqlserverActiveDirectory[] | cdktf.IResolvable) {
    this._sqlserverActiveDirectory.internalValue = value;
  }
  public resetSqlserverActiveDirectory() {
    this._sqlserverActiveDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlserverActiveDirectoryInput() {
    return this._sqlserverActiveDirectory.internalValue;
  }

  // sqlserver_servers - computed: false, optional: false, required: true
  private _sqlserverServers = new SqlserverSqlserverServersList(this, "sqlserver_servers", false);
  public get sqlserverServers() {
    return this._sqlserverServers;
  }
  public putSqlserverServers(value: SqlserverSqlserverServers[] | cdktf.IResolvable) {
    this._sqlserverServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlserverServersInput() {
    return this._sqlserverServers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SqlserverTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SqlserverTimeouts) {
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
      audit_enabled: cdktf.booleanToTerraform(this._auditEnabled),
      contract_period: cdktf.stringToTerraform(this._contractPeriod),
      database_collation: cdktf.stringToTerraform(this._databaseCollation),
      database_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._databaseNames),
      database_port: cdktf.numberToTerraform(this._databasePort),
      database_service_name: cdktf.stringToTerraform(this._databaseServiceName),
      database_user_name: cdktf.stringToTerraform(this._databaseUserName),
      database_user_password: cdktf.stringToTerraform(this._databaseUserPassword),
      encryption_enabled: cdktf.booleanToTerraform(this._encryptionEnabled),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      license: cdktf.stringToTerraform(this._license),
      nat_enabled: cdktf.booleanToTerraform(this._natEnabled),
      nat_public_ip_id: cdktf.stringToTerraform(this._natPublicIpId),
      next_contract_period: cdktf.stringToTerraform(this._nextContractPeriod),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      server_type: cdktf.stringToTerraform(this._serverType),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      sqlserver_cluster_name: cdktf.stringToTerraform(this._sqlserverClusterName),
      sqlserver_cluster_state: cdktf.stringToTerraform(this._sqlserverClusterState),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      backup: sqlserverBackupToTerraform(this._backup.internalValue),
      block_storages: cdktf.listMapper(sqlserverBlockStoragesToTerraform, true)(this._blockStorages.internalValue),
      sqlserver_active_directory: cdktf.listMapper(sqlserverSqlserverActiveDirectoryToTerraform, true)(this._sqlserverActiveDirectory.internalValue),
      sqlserver_servers: cdktf.listMapper(sqlserverSqlserverServersToTerraform, true)(this._sqlserverServers.internalValue),
      timeouts: sqlserverTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_enabled: {
        value: cdktf.booleanToHclTerraform(this._auditEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contract_period: {
        value: cdktf.stringToHclTerraform(this._contractPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_collation: {
        value: cdktf.stringToHclTerraform(this._databaseCollation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._databaseNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      database_port: {
        value: cdktf.numberToHclTerraform(this._databasePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_service_name: {
        value: cdktf.stringToHclTerraform(this._databaseServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      license: {
        value: cdktf.stringToHclTerraform(this._license),
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
      next_contract_period: {
        value: cdktf.stringToHclTerraform(this._nextContractPeriod),
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
      sqlserver_cluster_name: {
        value: cdktf.stringToHclTerraform(this._sqlserverClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqlserver_cluster_state: {
        value: cdktf.stringToHclTerraform(this._sqlserverClusterState),
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
        value: sqlserverBackupToHclTerraform(this._backup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SqlserverBackupList",
      },
      block_storages: {
        value: cdktf.listMapperHcl(sqlserverBlockStoragesToHclTerraform, true)(this._blockStorages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlserverBlockStoragesList",
      },
      sqlserver_active_directory: {
        value: cdktf.listMapperHcl(sqlserverSqlserverActiveDirectoryToHclTerraform, true)(this._sqlserverActiveDirectory.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SqlserverSqlserverActiveDirectoryList",
      },
      sqlserver_servers: {
        value: cdktf.listMapperHcl(sqlserverSqlserverServersToHclTerraform, true)(this._sqlserverServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlserverSqlserverServersList",
      },
      timeouts: {
        value: sqlserverTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SqlserverTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
