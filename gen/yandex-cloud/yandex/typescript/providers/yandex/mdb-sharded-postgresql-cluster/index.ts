// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbShardedPostgresqlClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration of the Sharded PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#config MdbShardedPostgresqlCluster#config}
  */
  readonly config: MdbShardedPostgresqlClusterConfigA;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#deletion_protection MdbShardedPostgresqlCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Description of the Sharded PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#description MdbShardedPostgresqlCluster#description}
  */
  readonly description?: string;
  /**
  * Deployment environment of the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#environment MdbShardedPostgresqlCluster#environment}
  */
  readonly environment: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#folder_id MdbShardedPostgresqlCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * A host configuration of the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#hosts MdbShardedPostgresqlCluster#hosts}
  */
  readonly hosts: { [key: string]: MdbShardedPostgresqlClusterHosts } | cdktf.IResolvable;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#labels MdbShardedPostgresqlCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Maintenance policy of the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#maintenance_window MdbShardedPostgresqlCluster#maintenance_window}
  */
  readonly maintenanceWindow?: MdbShardedPostgresqlClusterMaintenanceWindow;
  /**
  * Name of the Sharded PostgreSQL cluster. Provided by the client when the cluster is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#name MdbShardedPostgresqlCluster#name}
  */
  readonly name: string;
  /**
  * The `VPC Network ID` of subnets which resource attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#network_id MdbShardedPostgresqlCluster#network_id}
  */
  readonly networkId: string;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#security_group_ids MdbShardedPostgresqlCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#timeouts MdbShardedPostgresqlCluster#timeouts}
  */
  readonly timeouts?: MdbShardedPostgresqlClusterTimeouts;
}
export interface MdbShardedPostgresqlClusterConfigAccess {
  /**
  * Allow access for Yandex DataLens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#data_lens MdbShardedPostgresqlCluster#data_lens}
  */
  readonly dataLens?: boolean | cdktf.IResolvable;
  /**
  * Allow access for DataTransfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#data_transfer MdbShardedPostgresqlCluster#data_transfer}
  */
  readonly dataTransfer?: boolean | cdktf.IResolvable;
  /**
  * Allow access for connection to managed databases from functions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#serverless MdbShardedPostgresqlCluster#serverless}
  */
  readonly serverless?: boolean | cdktf.IResolvable;
  /**
  * Allow access for SQL queries in the management console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#web_sql MdbShardedPostgresqlCluster#web_sql}
  */
  readonly webSql?: boolean | cdktf.IResolvable;
}

export function mdbShardedPostgresqlClusterConfigAccessToTerraform(struct?: MdbShardedPostgresqlClusterConfigAccess | cdktf.IResolvable): any {
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


export function mdbShardedPostgresqlClusterConfigAccessToHclTerraform(struct?: MdbShardedPostgresqlClusterConfigAccess | cdktf.IResolvable): any {
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

export class MdbShardedPostgresqlClusterConfigAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlClusterConfigAccess | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbShardedPostgresqlClusterConfigAccess | cdktf.IResolvable | undefined) {
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
export interface MdbShardedPostgresqlClusterConfigBackupWindowStart {
  /**
  * The hour at which backup will be started (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#hours MdbShardedPostgresqlCluster#hours}
  */
  readonly hours?: number;
  /**
  * The minute at which backup will be started (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#minutes MdbShardedPostgresqlCluster#minutes}
  */
  readonly minutes?: number;
}

export function mdbShardedPostgresqlClusterConfigBackupWindowStartToTerraform(struct?: MdbShardedPostgresqlClusterConfigBackupWindowStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function mdbShardedPostgresqlClusterConfigBackupWindowStartToHclTerraform(struct?: MdbShardedPostgresqlClusterConfigBackupWindowStart | cdktf.IResolvable): any {
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

export class MdbShardedPostgresqlClusterConfigBackupWindowStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlClusterConfigBackupWindowStart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbShardedPostgresqlClusterConfigBackupWindowStart | cdktf.IResolvable | undefined) {
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
export interface MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResources {
  /**
  * Size of the disk in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#disk_size MdbShardedPostgresqlCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * ID of the disk type that determines the disk performance characteristics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#disk_type_id MdbShardedPostgresqlCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * ID of the resource preset that determines the number of CPU cores and memory size for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#resource_preset_id MdbShardedPostgresqlCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResourcesToTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResources | cdktf.IResolvable): any {
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


export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResourcesToHclTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResources | cdktf.IResolvable): any {
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

export class MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResources | cdktf.IResolvable | undefined) {
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
export interface MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinator {
  /**
  * Coordinator settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#config MdbShardedPostgresqlCluster#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Resources allocated to routers of the Sharded PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#resources MdbShardedPostgresqlCluster#resources}
  */
  readonly resources: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResources;
}

export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorToTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    resources: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResourcesToTerraform(struct!.resources),
  }
}


export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorToHclTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._resources.internalValue = value.resources;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResources {
  /**
  * Size of the disk in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#disk_size MdbShardedPostgresqlCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * ID of the disk type that determines the disk performance characteristics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#disk_type_id MdbShardedPostgresqlCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * ID of the resource preset that determines the number of CPU cores and memory size for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#resource_preset_id MdbShardedPostgresqlCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResourcesToTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResources | cdktf.IResolvable): any {
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


export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResourcesToHclTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResources | cdktf.IResolvable): any {
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

export class MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResources | cdktf.IResolvable | undefined) {
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
export interface MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfra {
  /**
  * Coordinator settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#coordinator MdbShardedPostgresqlCluster#coordinator}
  */
  readonly coordinator?: { [key: string]: string };
  /**
  * Resources allocated to routers of the Sharded PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#resources MdbShardedPostgresqlCluster#resources}
  */
  readonly resources: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResources;
  /**
  * Router settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#router MdbShardedPostgresqlCluster#router}
  */
  readonly router?: { [key: string]: string };
}

export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraToTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfra | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinator: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.coordinator),
    resources: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResourcesToTerraform(struct!.resources),
    router: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.router),
  }
}


export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraToHclTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfra | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coordinator: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.coordinator),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResources",
    },
    router: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.router),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfra | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinator !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinator = this._coordinator;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._router !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfra | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coordinator = undefined;
      this._resources.internalValue = undefined;
      this._router = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coordinator = value.coordinator;
      this._resources.internalValue = value.resources;
      this._router = value.router;
    }
  }

  // coordinator - computed: true, optional: true, required: false
  private _coordinator?: { [key: string]: string }; 
  public get coordinator() {
    return this.getStringMapAttribute('coordinator');
  }
  public set coordinator(value: { [key: string]: string }) {
    this._coordinator = value;
  }
  public resetCoordinator() {
    this._coordinator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatorInput() {
    return this._coordinator;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // router - computed: true, optional: true, required: false
  private _router?: { [key: string]: string }; 
  public get router() {
    return this.getStringMapAttribute('router');
  }
  public set router(value: { [key: string]: string }) {
    this._router = value;
  }
  public resetRouter() {
    this._router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }
}
export interface MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResources {
  /**
  * Size of the disk in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#disk_size MdbShardedPostgresqlCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * ID of the disk type that determines the disk performance characteristics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#disk_type_id MdbShardedPostgresqlCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * ID of the resource preset that determines the number of CPU cores and memory size for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#resource_preset_id MdbShardedPostgresqlCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResourcesToTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResources | cdktf.IResolvable): any {
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


export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResourcesToHclTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResources | cdktf.IResolvable): any {
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

export class MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResources | cdktf.IResolvable | undefined) {
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
export interface MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouter {
  /**
  * Router settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#config MdbShardedPostgresqlCluster#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Resources allocated to routers of the Sharded PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#resources MdbShardedPostgresqlCluster#resources}
  */
  readonly resources: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResources;
}

export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterToTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    resources: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResourcesToTerraform(struct!.resources),
  }
}


export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterToHclTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._resources.internalValue = value.resources;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface MdbShardedPostgresqlClusterConfigShardedPostgresqlConfig {
  /**
  * Balancer specific configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#balancer MdbShardedPostgresqlCluster#balancer}
  */
  readonly balancer?: { [key: string]: string };
  /**
  * General settings for all types of hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#common MdbShardedPostgresqlCluster#common}
  */
  readonly common?: { [key: string]: string };
  /**
  * Coordinator specific configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#coordinator MdbShardedPostgresqlCluster#coordinator}
  */
  readonly coordinator?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#infra MdbShardedPostgresqlCluster#infra}
  */
  readonly infra?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfra;
  /**
  * Router specific configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#router MdbShardedPostgresqlCluster#router}
  */
  readonly router?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouter;
}

export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigToTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balancer: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.balancer),
    common: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.common),
    coordinator: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorToTerraform(struct!.coordinator),
    infra: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraToTerraform(struct!.infra),
    router: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterToTerraform(struct!.router),
  }
}


export function mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigToHclTerraform(struct?: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balancer: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.balancer),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    common: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.common),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    coordinator: {
      value: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorToHclTerraform(struct!.coordinator),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinator",
    },
    infra: {
      value: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraToHclTerraform(struct!.infra),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfra",
    },
    router: {
      value: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlClusterConfigShardedPostgresqlConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.balancer = this._balancer;
    }
    if (this._common !== undefined) {
      hasAnyValues = true;
      internalValueResult.common = this._common;
    }
    if (this._coordinator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinator = this._coordinator?.internalValue;
    }
    if (this._infra?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infra = this._infra?.internalValue;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balancer = undefined;
      this._common = undefined;
      this._coordinator.internalValue = undefined;
      this._infra.internalValue = undefined;
      this._router.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._balancer = value.balancer;
      this._common = value.common;
      this._coordinator.internalValue = value.coordinator;
      this._infra.internalValue = value.infra;
      this._router.internalValue = value.router;
    }
  }

  // balancer - computed: true, optional: true, required: false
  private _balancer?: { [key: string]: string }; 
  public get balancer() {
    return this.getStringMapAttribute('balancer');
  }
  public set balancer(value: { [key: string]: string }) {
    this._balancer = value;
  }
  public resetBalancer() {
    this._balancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancerInput() {
    return this._balancer;
  }

  // common - computed: true, optional: true, required: false
  private _common?: { [key: string]: string }; 
  public get common() {
    return this.getStringMapAttribute('common');
  }
  public set common(value: { [key: string]: string }) {
    this._common = value;
  }
  public resetCommon() {
    this._common = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonInput() {
    return this._common;
  }

  // coordinator - computed: false, optional: true, required: false
  private _coordinator = new MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinatorOutputReference(this, "coordinator");
  public get coordinator() {
    return this._coordinator;
  }
  public putCoordinator(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigCoordinator) {
    this._coordinator.internalValue = value;
  }
  public resetCoordinator() {
    this._coordinator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatorInput() {
    return this._coordinator.internalValue;
  }

  // infra - computed: false, optional: true, required: false
  private _infra = new MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfraOutputReference(this, "infra");
  public get infra() {
    return this._infra;
  }
  public putInfra(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigInfra) {
    this._infra.internalValue = value;
  }
  public resetInfra() {
    this._infra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraInput() {
    return this._infra.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }
}
export interface MdbShardedPostgresqlClusterConfigA {
  /**
  * Access policy to the Sharded PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#access MdbShardedPostgresqlCluster#access}
  */
  readonly access?: MdbShardedPostgresqlClusterConfigAccess;
  /**
  * The period in days during which backups are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#backup_retain_period_days MdbShardedPostgresqlCluster#backup_retain_period_days}
  */
  readonly backupRetainPeriodDays?: number;
  /**
  * Time to start the daily backup, in the UTC timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#backup_window_start MdbShardedPostgresqlCluster#backup_window_start}
  */
  readonly backupWindowStart?: MdbShardedPostgresqlClusterConfigBackupWindowStart;
  /**
  * Sharded PostgreSQL cluster configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#sharded_postgresql_config MdbShardedPostgresqlCluster#sharded_postgresql_config}
  */
  readonly shardedPostgresqlConfig: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfig;
}

export function mdbShardedPostgresqlClusterConfigAToTerraform(struct?: MdbShardedPostgresqlClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: mdbShardedPostgresqlClusterConfigAccessToTerraform(struct!.access),
    backup_retain_period_days: cdktf.numberToTerraform(struct!.backupRetainPeriodDays),
    backup_window_start: mdbShardedPostgresqlClusterConfigBackupWindowStartToTerraform(struct!.backupWindowStart),
    sharded_postgresql_config: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigToTerraform(struct!.shardedPostgresqlConfig),
  }
}


export function mdbShardedPostgresqlClusterConfigAToHclTerraform(struct?: MdbShardedPostgresqlClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: mdbShardedPostgresqlClusterConfigAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbShardedPostgresqlClusterConfigAccess",
    },
    backup_retain_period_days: {
      value: cdktf.numberToHclTerraform(struct!.backupRetainPeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_window_start: {
      value: mdbShardedPostgresqlClusterConfigBackupWindowStartToHclTerraform(struct!.backupWindowStart),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbShardedPostgresqlClusterConfigBackupWindowStart",
    },
    sharded_postgresql_config: {
      value: mdbShardedPostgresqlClusterConfigShardedPostgresqlConfigToHclTerraform(struct!.shardedPostgresqlConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbShardedPostgresqlClusterConfigShardedPostgresqlConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbShardedPostgresqlClusterConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlClusterConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._backupRetainPeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetainPeriodDays = this._backupRetainPeriodDays;
    }
    if (this._backupWindowStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupWindowStart = this._backupWindowStart?.internalValue;
    }
    if (this._shardedPostgresqlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardedPostgresqlConfig = this._shardedPostgresqlConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbShardedPostgresqlClusterConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access.internalValue = undefined;
      this._backupRetainPeriodDays = undefined;
      this._backupWindowStart.internalValue = undefined;
      this._shardedPostgresqlConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access.internalValue = value.access;
      this._backupRetainPeriodDays = value.backupRetainPeriodDays;
      this._backupWindowStart.internalValue = value.backupWindowStart;
      this._shardedPostgresqlConfig.internalValue = value.shardedPostgresqlConfig;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access = new MdbShardedPostgresqlClusterConfigAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: MdbShardedPostgresqlClusterConfigAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
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
  private _backupWindowStart = new MdbShardedPostgresqlClusterConfigBackupWindowStartOutputReference(this, "backup_window_start");
  public get backupWindowStart() {
    return this._backupWindowStart;
  }
  public putBackupWindowStart(value: MdbShardedPostgresqlClusterConfigBackupWindowStart) {
    this._backupWindowStart.internalValue = value;
  }
  public resetBackupWindowStart() {
    this._backupWindowStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowStartInput() {
    return this._backupWindowStart.internalValue;
  }

  // sharded_postgresql_config - computed: false, optional: false, required: true
  private _shardedPostgresqlConfig = new MdbShardedPostgresqlClusterConfigShardedPostgresqlConfigOutputReference(this, "sharded_postgresql_config");
  public get shardedPostgresqlConfig() {
    return this._shardedPostgresqlConfig;
  }
  public putShardedPostgresqlConfig(value: MdbShardedPostgresqlClusterConfigShardedPostgresqlConfig) {
    this._shardedPostgresqlConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardedPostgresqlConfigInput() {
    return this._shardedPostgresqlConfig.internalValue;
  }
}
export interface MdbShardedPostgresqlClusterHosts {
  /**
  * Assign a public IP address to the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#assign_public_ip MdbShardedPostgresqlCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * ID of the subnet where the host is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#subnet_id MdbShardedPostgresqlCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#type MdbShardedPostgresqlCluster#type}
  */
  readonly type: string;
  /**
  * The availability zone where the host is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#zone MdbShardedPostgresqlCluster#zone}
  */
  readonly zone: string;
}

export function mdbShardedPostgresqlClusterHostsToTerraform(struct?: MdbShardedPostgresqlClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    type: cdktf.stringToTerraform(struct!.type),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function mdbShardedPostgresqlClusterHostsToHclTerraform(struct?: MdbShardedPostgresqlClusterHosts | cdktf.IResolvable): any {
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
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class MdbShardedPostgresqlClusterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbShardedPostgresqlClusterHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbShardedPostgresqlClusterHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._subnetId = undefined;
      this._type = undefined;
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
      this._subnetId = value.subnetId;
      this._type = value.type;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class MdbShardedPostgresqlClusterHostsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: MdbShardedPostgresqlClusterHosts } | cdktf.IResolvable

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
  public get(key: string): MdbShardedPostgresqlClusterHostsOutputReference {
    return new MdbShardedPostgresqlClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface MdbShardedPostgresqlClusterMaintenanceWindow {
  /**
  * Day of the week (in DDD format). Allowed values: "MON", "TUE", "WED", "THU", "FRI", "SAT","SUN"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#day MdbShardedPostgresqlCluster#day}
  */
  readonly day?: string;
  /**
  * Hour of the day in UTC (in HH format). Allowed value is between 1 and 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#hour MdbShardedPostgresqlCluster#hour}
  */
  readonly hour?: number;
  /**
  * Type of maintenance window. Can be either ANYTIME or WEEKLY. A day and hour of window need to be specified with weekly window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#type MdbShardedPostgresqlCluster#type}
  */
  readonly type?: string;
}

export function mdbShardedPostgresqlClusterMaintenanceWindowToTerraform(struct?: MdbShardedPostgresqlClusterMaintenanceWindow | cdktf.IResolvable): any {
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


export function mdbShardedPostgresqlClusterMaintenanceWindowToHclTerraform(struct?: MdbShardedPostgresqlClusterMaintenanceWindow | cdktf.IResolvable): any {
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

export class MdbShardedPostgresqlClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlClusterMaintenanceWindow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbShardedPostgresqlClusterMaintenanceWindow | cdktf.IResolvable | undefined) {
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
export interface MdbShardedPostgresqlClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#create MdbShardedPostgresqlCluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#delete MdbShardedPostgresqlCluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#update MdbShardedPostgresqlCluster#update}
  */
  readonly update?: string;
}

export function mdbShardedPostgresqlClusterTimeoutsToTerraform(struct?: MdbShardedPostgresqlClusterTimeouts | cdktf.IResolvable): any {
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


export function mdbShardedPostgresqlClusterTimeoutsToHclTerraform(struct?: MdbShardedPostgresqlClusterTimeouts | cdktf.IResolvable): any {
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

export class MdbShardedPostgresqlClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbShardedPostgresqlClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster yandex_mdb_sharded_postgresql_cluster}
*/
export class MdbShardedPostgresqlCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_sharded_postgresql_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbShardedPostgresqlCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbShardedPostgresqlCluster to import
  * @param importFromId The id of the existing MdbShardedPostgresqlCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbShardedPostgresqlCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_sharded_postgresql_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/mdb_sharded_postgresql_cluster yandex_mdb_sharded_postgresql_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbShardedPostgresqlClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MdbShardedPostgresqlClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_sharded_postgresql_cluster',
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
    this._config.internalValue = config.config;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._hosts.internalValue = config.hosts;
    this._labels = config.labels;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._name = config.name;
    this._networkId = config.networkId;
    this._securityGroupIds = config.securityGroupIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config = new MdbShardedPostgresqlClusterConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: MdbShardedPostgresqlClusterConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

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

  // description - computed: false, optional: true, required: false
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
  private _hosts = new MdbShardedPostgresqlClusterHostsMap(this, "hosts");
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: { [key: string]: MdbShardedPostgresqlClusterHosts } | cdktf.IResolvable) {
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
  private _maintenanceWindow = new MdbShardedPostgresqlClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MdbShardedPostgresqlClusterMaintenanceWindow) {
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
  private _timeouts = new MdbShardedPostgresqlClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbShardedPostgresqlClusterTimeouts) {
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
      config: mdbShardedPostgresqlClusterConfigAToTerraform(this._config.internalValue),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      hosts: cdktf.hashMapper(mdbShardedPostgresqlClusterHostsToTerraform)(this._hosts.internalValue),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      maintenance_window: mdbShardedPostgresqlClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      timeouts: mdbShardedPostgresqlClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: mdbShardedPostgresqlClusterConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbShardedPostgresqlClusterConfigA",
      },
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
        value: cdktf.hashMapperHcl(mdbShardedPostgresqlClusterHostsToHclTerraform)(this._hosts.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "MdbShardedPostgresqlClusterHostsMap",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      maintenance_window: {
        value: mdbShardedPostgresqlClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbShardedPostgresqlClusterMaintenanceWindow",
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
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: mdbShardedPostgresqlClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbShardedPostgresqlClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
