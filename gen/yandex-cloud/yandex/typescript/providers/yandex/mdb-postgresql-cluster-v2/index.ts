// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbPostgresqlClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#deletion_protection MdbPostgresqlClusterV2#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Description of the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#description MdbPostgresqlClusterV2#description}
  */
  readonly description?: string;
  /**
  * ID of the KMS key for cluster disk encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#disk_encryption_key_id MdbPostgresqlClusterV2#disk_encryption_key_id}
  */
  readonly diskEncryptionKeyId?: string;
  /**
  * Deployment environment of the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#environment MdbPostgresqlClusterV2#environment}
  */
  readonly environment: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#folder_id MdbPostgresqlClusterV2#folder_id}
  */
  readonly folderId?: string;
  /**
  * A host configuration of the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#hosts MdbPostgresqlClusterV2#hosts}
  */
  readonly hosts: { [key: string]: MdbPostgresqlClusterV2Hosts } | cdktf.IResolvable;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#labels MdbPostgresqlClusterV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Maintenance policy of the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#maintenance_window MdbPostgresqlClusterV2#maintenance_window}
  */
  readonly maintenanceWindow?: MdbPostgresqlClusterV2MaintenanceWindow;
  /**
  * Name of the PostgreSQL cluster. Provided by the client when the cluster is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#name MdbPostgresqlClusterV2#name}
  */
  readonly name: string;
  /**
  * The `VPC Network ID` of subnets which resource attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#network_id MdbPostgresqlClusterV2#network_id}
  */
  readonly networkId: string;
  /**
  * The cluster will be created from the specified backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#restore MdbPostgresqlClusterV2#restore}
  */
  readonly restore?: MdbPostgresqlClusterV2Restore;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#security_group_ids MdbPostgresqlClusterV2#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#timeouts MdbPostgresqlClusterV2#timeouts}
  */
  readonly timeouts?: MdbPostgresqlClusterV2Timeouts;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#config MdbPostgresqlClusterV2#config}
  */
  readonly config?: MdbPostgresqlClusterV2ConfigA;
}
export interface MdbPostgresqlClusterV2Hosts {
  /**
  * Whether the host should get a public IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#assign_public_ip MdbPostgresqlClusterV2#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * FQDN of the host that is used as a replication source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#replication_source MdbPostgresqlClusterV2#replication_source}
  */
  readonly replicationSource?: string;
  /**
  * ID of the subnet where the host is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#subnet_id MdbPostgresqlClusterV2#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The availability zone where the host is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#zone MdbPostgresqlClusterV2#zone}
  */
  readonly zone: string;
}

export function mdbPostgresqlClusterV2HostsToTerraform(struct?: MdbPostgresqlClusterV2Hosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    replication_source: cdktf.stringToTerraform(struct!.replicationSource),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function mdbPostgresqlClusterV2HostsToHclTerraform(struct?: MdbPostgresqlClusterV2Hosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replication_source: {
      value: cdktf.stringToHclTerraform(struct!.replicationSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterV2HostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): MdbPostgresqlClusterV2Hosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._replicationSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSource = this._replicationSource;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterV2Hosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._replicationSource = undefined;
      this._subnetId = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignPublicIp = value.assignPublicIp;
      this._replicationSource = value.replicationSource;
      this._subnetId = value.subnetId;
      this._zone = value.zone;
    }
  }

  // assign_public_ip - computed: true, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // replication_source - computed: true, optional: true, required: false
  private _replicationSource?: string; 
  public get replicationSource() {
    return this.getStringAttribute('replication_source');
  }
  public set replicationSource(value: string) {
    this._replicationSource = value;
  }
  public resetReplicationSource() {
    this._replicationSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSourceInput() {
    return this._replicationSource;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class MdbPostgresqlClusterV2HostsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: MdbPostgresqlClusterV2Hosts } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): MdbPostgresqlClusterV2HostsOutputReference {
    return new MdbPostgresqlClusterV2HostsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface MdbPostgresqlClusterV2MaintenanceWindow {
  /**
  * Day of the week (in DDD format). Allowed values: "MON", "TUE", "WED", "THU", "FRI", "SAT","SUN"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#day MdbPostgresqlClusterV2#day}
  */
  readonly day?: string;
  /**
  * Hour of the day in UTC (in HH format). Allowed value is between 1 and 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#hour MdbPostgresqlClusterV2#hour}
  */
  readonly hour?: number;
  /**
  * Type of maintenance window. Can be either ANYTIME or WEEKLY. A day and hour of window need to be specified with weekly window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#type MdbPostgresqlClusterV2#type}
  */
  readonly type?: string;
}

export function mdbPostgresqlClusterV2MaintenanceWindowToTerraform(struct?: MdbPostgresqlClusterV2MaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mdbPostgresqlClusterV2MaintenanceWindowToHclTerraform(struct?: MdbPostgresqlClusterV2MaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterV2MaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbPostgresqlClusterV2MaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterV2MaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._hour = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._hour = value.hour;
      this._type = value.type;
    }
  }

  // day - computed: true, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: true, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MdbPostgresqlClusterV2Restore {
  /**
  * Backup ID. The cluster will be created from the specified backup. [How to get a list of PostgreSQL backups](https://yandex.cloud/docs/managed-postgresql/operations/cluster-backups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#backup_id MdbPostgresqlClusterV2#backup_id}
  */
  readonly backupId: string;
  /**
  * Timestamp of the moment to which the PostgreSQL cluster should be restored. (Format: `2006-01-02T15:04:05` - UTC). When not set, current time is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#time MdbPostgresqlClusterV2#time}
  */
  readonly time?: string;
  /**
  * Flag that indicates whether a database should be restored to the first backup point available just after the timestamp specified in the [time] field instead of just before. Possible values:
  * * `false` (default) — the restore point refers to the first backup moment before [time].
  * * `true` — the restore point refers to the first backup point after [time].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#time_inclusive MdbPostgresqlClusterV2#time_inclusive}
  */
  readonly timeInclusive?: boolean | cdktf.IResolvable;
}

export function mdbPostgresqlClusterV2RestoreToTerraform(struct?: MdbPostgresqlClusterV2Restore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    time: cdktf.stringToTerraform(struct!.time),
    time_inclusive: cdktf.booleanToTerraform(struct!.timeInclusive),
  }
}


export function mdbPostgresqlClusterV2RestoreToHclTerraform(struct?: MdbPostgresqlClusterV2Restore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_id: {
      value: cdktf.stringToHclTerraform(struct!.backupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_inclusive: {
      value: cdktf.booleanToHclTerraform(struct!.timeInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterV2RestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbPostgresqlClusterV2Restore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._timeInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInclusive = this._timeInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterV2Restore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupId = undefined;
      this._time = undefined;
      this._timeInclusive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupId = value.backupId;
      this._time = value.time;
      this._timeInclusive = value.timeInclusive;
    }
  }

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // time_inclusive - computed: false, optional: true, required: false
  private _timeInclusive?: boolean | cdktf.IResolvable; 
  public get timeInclusive() {
    return this.getBooleanAttribute('time_inclusive');
  }
  public set timeInclusive(value: boolean | cdktf.IResolvable) {
    this._timeInclusive = value;
  }
  public resetTimeInclusive() {
    this._timeInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInclusiveInput() {
    return this._timeInclusive;
  }
}
export interface MdbPostgresqlClusterV2Timeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#create MdbPostgresqlClusterV2#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#delete MdbPostgresqlClusterV2#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#update MdbPostgresqlClusterV2#update}
  */
  readonly update?: string;
}

export function mdbPostgresqlClusterV2TimeoutsToTerraform(struct?: MdbPostgresqlClusterV2Timeouts | cdktf.IResolvable): any {
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


export function mdbPostgresqlClusterV2TimeoutsToHclTerraform(struct?: MdbPostgresqlClusterV2Timeouts | cdktf.IResolvable): any {
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

export class MdbPostgresqlClusterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbPostgresqlClusterV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbPostgresqlClusterV2Timeouts | cdktf.IResolvable | undefined) {
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
export interface MdbPostgresqlClusterV2ConfigAccess {
  /**
  * Allow access for Yandex DataLens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#data_lens MdbPostgresqlClusterV2#data_lens}
  */
  readonly dataLens?: boolean | cdktf.IResolvable;
  /**
  * Allow access for DataTransfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#data_transfer MdbPostgresqlClusterV2#data_transfer}
  */
  readonly dataTransfer?: boolean | cdktf.IResolvable;
  /**
  * Allow access for connection to managed databases from functions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#serverless MdbPostgresqlClusterV2#serverless}
  */
  readonly serverless?: boolean | cdktf.IResolvable;
  /**
  * Allow access for SQL queries in the management console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#web_sql MdbPostgresqlClusterV2#web_sql}
  */
  readonly webSql?: boolean | cdktf.IResolvable;
}

export function mdbPostgresqlClusterV2ConfigAccessToTerraform(struct?: MdbPostgresqlClusterV2ConfigAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lens: cdktf.booleanToTerraform(struct!.dataLens),
    data_transfer: cdktf.booleanToTerraform(struct!.dataTransfer),
    serverless: cdktf.booleanToTerraform(struct!.serverless),
    web_sql: cdktf.booleanToTerraform(struct!.webSql),
  }
}


export function mdbPostgresqlClusterV2ConfigAccessToHclTerraform(struct?: MdbPostgresqlClusterV2ConfigAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_lens: {
      value: cdktf.booleanToHclTerraform(struct!.dataLens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.dataTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serverless: {
      value: cdktf.booleanToHclTerraform(struct!.serverless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_sql: {
      value: cdktf.booleanToHclTerraform(struct!.webSql),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterV2ConfigAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbPostgresqlClusterV2ConfigAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLens !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLens = this._dataLens;
    }
    if (this._dataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransfer = this._dataTransfer;
    }
    if (this._serverless !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverless = this._serverless;
    }
    if (this._webSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSql = this._webSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterV2ConfigAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataLens = undefined;
      this._dataTransfer = undefined;
      this._serverless = undefined;
      this._webSql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataLens = value.dataLens;
      this._dataTransfer = value.dataTransfer;
      this._serverless = value.serverless;
      this._webSql = value.webSql;
    }
  }

  // data_lens - computed: true, optional: true, required: false
  private _dataLens?: boolean | cdktf.IResolvable; 
  public get dataLens() {
    return this.getBooleanAttribute('data_lens');
  }
  public set dataLens(value: boolean | cdktf.IResolvable) {
    this._dataLens = value;
  }
  public resetDataLens() {
    this._dataLens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLensInput() {
    return this._dataLens;
  }

  // data_transfer - computed: true, optional: true, required: false
  private _dataTransfer?: boolean | cdktf.IResolvable; 
  public get dataTransfer() {
    return this.getBooleanAttribute('data_transfer');
  }
  public set dataTransfer(value: boolean | cdktf.IResolvable) {
    this._dataTransfer = value;
  }
  public resetDataTransfer() {
    this._dataTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferInput() {
    return this._dataTransfer;
  }

  // serverless - computed: true, optional: true, required: false
  private _serverless?: boolean | cdktf.IResolvable; 
  public get serverless() {
    return this.getBooleanAttribute('serverless');
  }
  public set serverless(value: boolean | cdktf.IResolvable) {
    this._serverless = value;
  }
  public resetServerless() {
    this._serverless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessInput() {
    return this._serverless;
  }

  // web_sql - computed: true, optional: true, required: false
  private _webSql?: boolean | cdktf.IResolvable; 
  public get webSql() {
    return this.getBooleanAttribute('web_sql');
  }
  public set webSql(value: boolean | cdktf.IResolvable) {
    this._webSql = value;
  }
  public resetWebSql() {
    this._webSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSqlInput() {
    return this._webSql;
  }
}
export interface MdbPostgresqlClusterV2ConfigBackupWindowStart {
  /**
  * The hour at which backup will be started (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#hours MdbPostgresqlClusterV2#hours}
  */
  readonly hours?: number;
  /**
  * The minute at which backup will be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#minutes MdbPostgresqlClusterV2#minutes}
  */
  readonly minutes?: number;
}

export function mdbPostgresqlClusterV2ConfigBackupWindowStartToTerraform(struct?: MdbPostgresqlClusterV2ConfigBackupWindowStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function mdbPostgresqlClusterV2ConfigBackupWindowStartToHclTerraform(struct?: MdbPostgresqlClusterV2ConfigBackupWindowStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterV2ConfigBackupWindowStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbPostgresqlClusterV2ConfigBackupWindowStart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterV2ConfigBackupWindowStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: true, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface MdbPostgresqlClusterV2ConfigDiskSizeAutoscaling {
  /**
  * The overall maximum for disk size that limit all autoscaling iterations. See the [documentation](https://yandex.cloud/en/docs/managed-postgresql/concepts/storage#auto-rescale) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#disk_size_limit MdbPostgresqlClusterV2#disk_size_limit}
  */
  readonly diskSizeLimit: number;
  /**
  * Threshold of storage usage (in percent) that triggers immediate automatic scaling of the storage. Zero value means disabled threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#emergency_usage_threshold MdbPostgresqlClusterV2#emergency_usage_threshold}
  */
  readonly emergencyUsageThreshold?: number;
  /**
  * Threshold of storage usage (in percent) that triggers automatic scaling of the storage during the maintenance window. Zero value means disabled threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#planned_usage_threshold MdbPostgresqlClusterV2#planned_usage_threshold}
  */
  readonly plannedUsageThreshold?: number;
}

export function mdbPostgresqlClusterV2ConfigDiskSizeAutoscalingToTerraform(struct?: MdbPostgresqlClusterV2ConfigDiskSizeAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_limit: cdktf.numberToTerraform(struct!.diskSizeLimit),
    emergency_usage_threshold: cdktf.numberToTerraform(struct!.emergencyUsageThreshold),
    planned_usage_threshold: cdktf.numberToTerraform(struct!.plannedUsageThreshold),
  }
}


export function mdbPostgresqlClusterV2ConfigDiskSizeAutoscalingToHclTerraform(struct?: MdbPostgresqlClusterV2ConfigDiskSizeAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_limit: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    emergency_usage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.emergencyUsageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    planned_usage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.plannedUsageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterV2ConfigDiskSizeAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbPostgresqlClusterV2ConfigDiskSizeAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeLimit = this._diskSizeLimit;
    }
    if (this._emergencyUsageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.emergencyUsageThreshold = this._emergencyUsageThreshold;
    }
    if (this._plannedUsageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.plannedUsageThreshold = this._plannedUsageThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterV2ConfigDiskSizeAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeLimit = undefined;
      this._emergencyUsageThreshold = undefined;
      this._plannedUsageThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeLimit = value.diskSizeLimit;
      this._emergencyUsageThreshold = value.emergencyUsageThreshold;
      this._plannedUsageThreshold = value.plannedUsageThreshold;
    }
  }

  // disk_size_limit - computed: true, optional: false, required: true
  private _diskSizeLimit?: number; 
  public get diskSizeLimit() {
    return this.getNumberAttribute('disk_size_limit');
  }
  public set diskSizeLimit(value: number) {
    this._diskSizeLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeLimitInput() {
    return this._diskSizeLimit;
  }

  // emergency_usage_threshold - computed: true, optional: true, required: false
  private _emergencyUsageThreshold?: number; 
  public get emergencyUsageThreshold() {
    return this.getNumberAttribute('emergency_usage_threshold');
  }
  public set emergencyUsageThreshold(value: number) {
    this._emergencyUsageThreshold = value;
  }
  public resetEmergencyUsageThreshold() {
    this._emergencyUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyUsageThresholdInput() {
    return this._emergencyUsageThreshold;
  }

  // planned_usage_threshold - computed: true, optional: true, required: false
  private _plannedUsageThreshold?: number; 
  public get plannedUsageThreshold() {
    return this.getNumberAttribute('planned_usage_threshold');
  }
  public set plannedUsageThreshold(value: number) {
    this._plannedUsageThreshold = value;
  }
  public resetPlannedUsageThreshold() {
    this._plannedUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plannedUsageThresholdInput() {
    return this._plannedUsageThreshold;
  }
}
export interface MdbPostgresqlClusterV2ConfigPerformanceDiagnostics {
  /**
  * Enable performance diagnostics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#enabled MdbPostgresqlClusterV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Interval (in seconds) for pg_stat_activity sampling. Acceptable values are 1 to 86400, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#sessions_sampling_interval MdbPostgresqlClusterV2#sessions_sampling_interval}
  */
  readonly sessionsSamplingInterval: number;
  /**
  * Interval (in seconds) for pg_stat_statements sampling. Acceptable values are 60 to 86400, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#statements_sampling_interval MdbPostgresqlClusterV2#statements_sampling_interval}
  */
  readonly statementsSamplingInterval: number;
}

export function mdbPostgresqlClusterV2ConfigPerformanceDiagnosticsToTerraform(struct?: MdbPostgresqlClusterV2ConfigPerformanceDiagnostics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sessions_sampling_interval: cdktf.numberToTerraform(struct!.sessionsSamplingInterval),
    statements_sampling_interval: cdktf.numberToTerraform(struct!.statementsSamplingInterval),
  }
}


export function mdbPostgresqlClusterV2ConfigPerformanceDiagnosticsToHclTerraform(struct?: MdbPostgresqlClusterV2ConfigPerformanceDiagnostics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sessions_sampling_interval: {
      value: cdktf.numberToHclTerraform(struct!.sessionsSamplingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statements_sampling_interval: {
      value: cdktf.numberToHclTerraform(struct!.statementsSamplingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterV2ConfigPerformanceDiagnosticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbPostgresqlClusterV2ConfigPerformanceDiagnostics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._sessionsSamplingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsSamplingInterval = this._sessionsSamplingInterval;
    }
    if (this._statementsSamplingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.statementsSamplingInterval = this._statementsSamplingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterV2ConfigPerformanceDiagnostics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._sessionsSamplingInterval = undefined;
      this._statementsSamplingInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._sessionsSamplingInterval = value.sessionsSamplingInterval;
      this._statementsSamplingInterval = value.statementsSamplingInterval;
    }
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

  // sessions_sampling_interval - computed: true, optional: false, required: true
  private _sessionsSamplingInterval?: number; 
  public get sessionsSamplingInterval() {
    return this.getNumberAttribute('sessions_sampling_interval');
  }
  public set sessionsSamplingInterval(value: number) {
    this._sessionsSamplingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsSamplingIntervalInput() {
    return this._sessionsSamplingInterval;
  }

  // statements_sampling_interval - computed: true, optional: false, required: true
  private _statementsSamplingInterval?: number; 
  public get statementsSamplingInterval() {
    return this.getNumberAttribute('statements_sampling_interval');
  }
  public set statementsSamplingInterval(value: number) {
    this._statementsSamplingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsSamplingIntervalInput() {
    return this._statementsSamplingInterval;
  }
}
export interface MdbPostgresqlClusterV2ConfigPoolerConfig {
  /**
  * Setting pool_discard parameter in Odyssey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#pool_discard MdbPostgresqlClusterV2#pool_discard}
  */
  readonly poolDiscard?: boolean | cdktf.IResolvable;
  /**
  * Mode that the connection pooler is working in. See descriptions of all modes in the [documentation for Odyssey](https://github.com/yandex/odyssey/blob/master/documentation/configuration.md#pool-string.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#pooling_mode MdbPostgresqlClusterV2#pooling_mode}
  */
  readonly poolingMode?: string;
}

export function mdbPostgresqlClusterV2ConfigPoolerConfigToTerraform(struct?: MdbPostgresqlClusterV2ConfigPoolerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_discard: cdktf.booleanToTerraform(struct!.poolDiscard),
    pooling_mode: cdktf.stringToTerraform(struct!.poolingMode),
  }
}


export function mdbPostgresqlClusterV2ConfigPoolerConfigToHclTerraform(struct?: MdbPostgresqlClusterV2ConfigPoolerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_discard: {
      value: cdktf.booleanToHclTerraform(struct!.poolDiscard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pooling_mode: {
      value: cdktf.stringToHclTerraform(struct!.poolingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterV2ConfigPoolerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbPostgresqlClusterV2ConfigPoolerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolDiscard !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolDiscard = this._poolDiscard;
    }
    if (this._poolingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolingMode = this._poolingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterV2ConfigPoolerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolDiscard = undefined;
      this._poolingMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolDiscard = value.poolDiscard;
      this._poolingMode = value.poolingMode;
    }
  }

  // pool_discard - computed: true, optional: true, required: false
  private _poolDiscard?: boolean | cdktf.IResolvable; 
  public get poolDiscard() {
    return this.getBooleanAttribute('pool_discard');
  }
  public set poolDiscard(value: boolean | cdktf.IResolvable) {
    this._poolDiscard = value;
  }
  public resetPoolDiscard() {
    this._poolDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolDiscardInput() {
    return this._poolDiscard;
  }

  // pooling_mode - computed: true, optional: true, required: false
  private _poolingMode?: string; 
  public get poolingMode() {
    return this.getStringAttribute('pooling_mode');
  }
  public set poolingMode(value: string) {
    this._poolingMode = value;
  }
  public resetPoolingMode() {
    this._poolingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolingModeInput() {
    return this._poolingMode;
  }
}
export interface MdbPostgresqlClusterV2ConfigResources {
  /**
  * Size of the disk in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#disk_size MdbPostgresqlClusterV2#disk_size}
  */
  readonly diskSize: number;
  /**
  * ID of the disk type that determines the disk performance characteristics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#disk_type_id MdbPostgresqlClusterV2#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * ID of the resource preset that determines the number of CPU cores and memory size for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#resource_preset_id MdbPostgresqlClusterV2#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbPostgresqlClusterV2ConfigResourcesToTerraform(struct?: MdbPostgresqlClusterV2ConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function mdbPostgresqlClusterV2ConfigResourcesToHclTerraform(struct?: MdbPostgresqlClusterV2ConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type_id: {
      value: cdktf.stringToHclTerraform(struct!.diskTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterV2ConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbPostgresqlClusterV2ConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterV2ConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: false, optional: false, required: true
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface MdbPostgresqlClusterV2ConfigA {
  /**
  * Access policy to the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#access MdbPostgresqlClusterV2#access}
  */
  readonly access?: MdbPostgresqlClusterV2ConfigAccess;
  /**
  * Configuration setting which enables/disables automatic failover in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#autofailover MdbPostgresqlClusterV2#autofailover}
  */
  readonly autofailover?: boolean | cdktf.IResolvable;
  /**
  * The period in days during which backups are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#backup_retain_period_days MdbPostgresqlClusterV2#backup_retain_period_days}
  */
  readonly backupRetainPeriodDays?: number;
  /**
  * Time to start the daily backup, in the UTC timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#backup_window_start MdbPostgresqlClusterV2#backup_window_start}
  */
  readonly backupWindowStart?: MdbPostgresqlClusterV2ConfigBackupWindowStart;
  /**
  * Cluster disk size autoscaling settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#disk_size_autoscaling MdbPostgresqlClusterV2#disk_size_autoscaling}
  */
  readonly diskSizeAutoscaling?: MdbPostgresqlClusterV2ConfigDiskSizeAutoscaling;
  /**
  * Cluster performance diagnostics settings. The structure is documented below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#performance_diagnostics MdbPostgresqlClusterV2#performance_diagnostics}
  */
  readonly performanceDiagnostics?: MdbPostgresqlClusterV2ConfigPerformanceDiagnostics;
  /**
  * Configuration of the connection pooler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#pooler_config MdbPostgresqlClusterV2#pooler_config}
  */
  readonly poolerConfig?: MdbPostgresqlClusterV2ConfigPoolerConfig;
  /**
  * PostgreSQL cluster configuration. For detailed information specific to your PostgreSQL version, please refer to the [API proto specifications](https://github.com/yandex-cloud/cloudapi/tree/master/yandex/cloud/mdb/postgresql/v1/config).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#postgresql_config MdbPostgresqlClusterV2#postgresql_config}
  */
  readonly postgresqlConfig?: { [key: string]: string };
  /**
  * Version of the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#version MdbPostgresqlClusterV2#version}
  */
  readonly version: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#resources MdbPostgresqlClusterV2#resources}
  */
  readonly resources: MdbPostgresqlClusterV2ConfigResources;
}

export function mdbPostgresqlClusterV2ConfigAToTerraform(struct?: MdbPostgresqlClusterV2ConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: mdbPostgresqlClusterV2ConfigAccessToTerraform(struct!.access),
    autofailover: cdktf.booleanToTerraform(struct!.autofailover),
    backup_retain_period_days: cdktf.numberToTerraform(struct!.backupRetainPeriodDays),
    backup_window_start: mdbPostgresqlClusterV2ConfigBackupWindowStartToTerraform(struct!.backupWindowStart),
    disk_size_autoscaling: mdbPostgresqlClusterV2ConfigDiskSizeAutoscalingToTerraform(struct!.diskSizeAutoscaling),
    performance_diagnostics: mdbPostgresqlClusterV2ConfigPerformanceDiagnosticsToTerraform(struct!.performanceDiagnostics),
    pooler_config: mdbPostgresqlClusterV2ConfigPoolerConfigToTerraform(struct!.poolerConfig),
    postgresql_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.postgresqlConfig),
    version: cdktf.stringToTerraform(struct!.version),
    resources: mdbPostgresqlClusterV2ConfigResourcesToTerraform(struct!.resources),
  }
}


export function mdbPostgresqlClusterV2ConfigAToHclTerraform(struct?: MdbPostgresqlClusterV2ConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: mdbPostgresqlClusterV2ConfigAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbPostgresqlClusterV2ConfigAccess",
    },
    autofailover: {
      value: cdktf.booleanToHclTerraform(struct!.autofailover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup_retain_period_days: {
      value: cdktf.numberToHclTerraform(struct!.backupRetainPeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_window_start: {
      value: mdbPostgresqlClusterV2ConfigBackupWindowStartToHclTerraform(struct!.backupWindowStart),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbPostgresqlClusterV2ConfigBackupWindowStart",
    },
    disk_size_autoscaling: {
      value: mdbPostgresqlClusterV2ConfigDiskSizeAutoscalingToHclTerraform(struct!.diskSizeAutoscaling),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbPostgresqlClusterV2ConfigDiskSizeAutoscaling",
    },
    performance_diagnostics: {
      value: mdbPostgresqlClusterV2ConfigPerformanceDiagnosticsToHclTerraform(struct!.performanceDiagnostics),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbPostgresqlClusterV2ConfigPerformanceDiagnostics",
    },
    pooler_config: {
      value: mdbPostgresqlClusterV2ConfigPoolerConfigToHclTerraform(struct!.poolerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbPostgresqlClusterV2ConfigPoolerConfig",
    },
    postgresql_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.postgresqlConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: mdbPostgresqlClusterV2ConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbPostgresqlClusterV2ConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterV2ConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbPostgresqlClusterV2ConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._autofailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.autofailover = this._autofailover;
    }
    if (this._backupRetainPeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetainPeriodDays = this._backupRetainPeriodDays;
    }
    if (this._backupWindowStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupWindowStart = this._backupWindowStart?.internalValue;
    }
    if (this._diskSizeAutoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeAutoscaling = this._diskSizeAutoscaling?.internalValue;
    }
    if (this._performanceDiagnostics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceDiagnostics = this._performanceDiagnostics?.internalValue;
    }
    if (this._poolerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolerConfig = this._poolerConfig?.internalValue;
    }
    if (this._postgresqlConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlConfig = this._postgresqlConfig;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterV2ConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access.internalValue = undefined;
      this._autofailover = undefined;
      this._backupRetainPeriodDays = undefined;
      this._backupWindowStart.internalValue = undefined;
      this._diskSizeAutoscaling.internalValue = undefined;
      this._performanceDiagnostics.internalValue = undefined;
      this._poolerConfig.internalValue = undefined;
      this._postgresqlConfig = undefined;
      this._version = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access.internalValue = value.access;
      this._autofailover = value.autofailover;
      this._backupRetainPeriodDays = value.backupRetainPeriodDays;
      this._backupWindowStart.internalValue = value.backupWindowStart;
      this._diskSizeAutoscaling.internalValue = value.diskSizeAutoscaling;
      this._performanceDiagnostics.internalValue = value.performanceDiagnostics;
      this._poolerConfig.internalValue = value.poolerConfig;
      this._postgresqlConfig = value.postgresqlConfig;
      this._version = value.version;
      this._resources.internalValue = value.resources;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access = new MdbPostgresqlClusterV2ConfigAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: MdbPostgresqlClusterV2ConfigAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // autofailover - computed: true, optional: true, required: false
  private _autofailover?: boolean | cdktf.IResolvable; 
  public get autofailover() {
    return this.getBooleanAttribute('autofailover');
  }
  public set autofailover(value: boolean | cdktf.IResolvable) {
    this._autofailover = value;
  }
  public resetAutofailover() {
    this._autofailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autofailoverInput() {
    return this._autofailover;
  }

  // backup_retain_period_days - computed: true, optional: true, required: false
  private _backupRetainPeriodDays?: number; 
  public get backupRetainPeriodDays() {
    return this.getNumberAttribute('backup_retain_period_days');
  }
  public set backupRetainPeriodDays(value: number) {
    this._backupRetainPeriodDays = value;
  }
  public resetBackupRetainPeriodDays() {
    this._backupRetainPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetainPeriodDaysInput() {
    return this._backupRetainPeriodDays;
  }

  // backup_window_start - computed: true, optional: true, required: false
  private _backupWindowStart = new MdbPostgresqlClusterV2ConfigBackupWindowStartOutputReference(this, "backup_window_start");
  public get backupWindowStart() {
    return this._backupWindowStart;
  }
  public putBackupWindowStart(value: MdbPostgresqlClusterV2ConfigBackupWindowStart) {
    this._backupWindowStart.internalValue = value;
  }
  public resetBackupWindowStart() {
    this._backupWindowStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowStartInput() {
    return this._backupWindowStart.internalValue;
  }

  // disk_size_autoscaling - computed: true, optional: true, required: false
  private _diskSizeAutoscaling = new MdbPostgresqlClusterV2ConfigDiskSizeAutoscalingOutputReference(this, "disk_size_autoscaling");
  public get diskSizeAutoscaling() {
    return this._diskSizeAutoscaling;
  }
  public putDiskSizeAutoscaling(value: MdbPostgresqlClusterV2ConfigDiskSizeAutoscaling) {
    this._diskSizeAutoscaling.internalValue = value;
  }
  public resetDiskSizeAutoscaling() {
    this._diskSizeAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeAutoscalingInput() {
    return this._diskSizeAutoscaling.internalValue;
  }

  // performance_diagnostics - computed: true, optional: true, required: false
  private _performanceDiagnostics = new MdbPostgresqlClusterV2ConfigPerformanceDiagnosticsOutputReference(this, "performance_diagnostics");
  public get performanceDiagnostics() {
    return this._performanceDiagnostics;
  }
  public putPerformanceDiagnostics(value: MdbPostgresqlClusterV2ConfigPerformanceDiagnostics) {
    this._performanceDiagnostics.internalValue = value;
  }
  public resetPerformanceDiagnostics() {
    this._performanceDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceDiagnosticsInput() {
    return this._performanceDiagnostics.internalValue;
  }

  // pooler_config - computed: true, optional: true, required: false
  private _poolerConfig = new MdbPostgresqlClusterV2ConfigPoolerConfigOutputReference(this, "pooler_config");
  public get poolerConfig() {
    return this._poolerConfig;
  }
  public putPoolerConfig(value: MdbPostgresqlClusterV2ConfigPoolerConfig) {
    this._poolerConfig.internalValue = value;
  }
  public resetPoolerConfig() {
    this._poolerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolerConfigInput() {
    return this._poolerConfig.internalValue;
  }

  // postgresql_config - computed: true, optional: true, required: false
  private _postgresqlConfig?: { [key: string]: string }; 
  public get postgresqlConfig() {
    return this.getStringMapAttribute('postgresql_config');
  }
  public set postgresqlConfig(value: { [key: string]: string }) {
    this._postgresqlConfig = value;
  }
  public resetPostgresqlConfig() {
    this._postgresqlConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlConfigInput() {
    return this._postgresqlConfig;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbPostgresqlClusterV2ConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbPostgresqlClusterV2ConfigResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2 yandex_mdb_postgresql_cluster_v2}
*/
export class MdbPostgresqlClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_postgresql_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbPostgresqlClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbPostgresqlClusterV2 to import
  * @param importFromId The id of the existing MdbPostgresqlClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbPostgresqlClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_postgresql_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_postgresql_cluster_v2 yandex_mdb_postgresql_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbPostgresqlClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: MdbPostgresqlClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_postgresql_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._diskEncryptionKeyId = config.diskEncryptionKeyId;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._hosts.internalValue = config.hosts;
    this._labels = config.labels;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._name = config.name;
    this._networkId = config.networkId;
    this._restore.internalValue = config.restore;
    this._securityGroupIds = config.securityGroupIds;
    this._timeouts.internalValue = config.timeouts;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disk_encryption_key_id - computed: false, optional: true, required: false
  private _diskEncryptionKeyId?: string; 
  public get diskEncryptionKeyId() {
    return this.getStringAttribute('disk_encryption_key_id');
  }
  public set diskEncryptionKeyId(value: string) {
    this._diskEncryptionKeyId = value;
  }
  public resetDiskEncryptionKeyId() {
    this._diskEncryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyIdInput() {
    return this._diskEncryptionKeyId;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts = new MdbPostgresqlClusterV2HostsMap(this, "hosts");
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: { [key: string]: MdbPostgresqlClusterV2Hosts } | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow = new MdbPostgresqlClusterV2MaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MdbPostgresqlClusterV2MaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new MdbPostgresqlClusterV2RestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: MdbPostgresqlClusterV2Restore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbPostgresqlClusterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbPostgresqlClusterV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new MdbPostgresqlClusterV2ConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: MdbPostgresqlClusterV2ConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      disk_encryption_key_id: cdktf.stringToTerraform(this._diskEncryptionKeyId),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      hosts: cdktf.hashMapper(mdbPostgresqlClusterV2HostsToTerraform)(this._hosts.internalValue),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      maintenance_window: mdbPostgresqlClusterV2MaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      restore: mdbPostgresqlClusterV2RestoreToTerraform(this._restore.internalValue),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      timeouts: mdbPostgresqlClusterV2TimeoutsToTerraform(this._timeouts.internalValue),
      config: mdbPostgresqlClusterV2ConfigAToTerraform(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_encryption_key_id: {
        value: cdktf.stringToHclTerraform(this._diskEncryptionKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosts: {
        value: cdktf.hashMapperHcl(mdbPostgresqlClusterV2HostsToHclTerraform)(this._hosts.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "MdbPostgresqlClusterV2HostsMap",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      maintenance_window: {
        value: mdbPostgresqlClusterV2MaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbPostgresqlClusterV2MaintenanceWindow",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore: {
        value: mdbPostgresqlClusterV2RestoreToHclTerraform(this._restore.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbPostgresqlClusterV2Restore",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: mdbPostgresqlClusterV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbPostgresqlClusterV2Timeouts",
      },
      config: {
        value: mdbPostgresqlClusterV2ConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbPostgresqlClusterV2ConfigA",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
