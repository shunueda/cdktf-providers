// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickhouseBackupStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#id ClickhouseBackupStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#instance_id ClickhouseBackupStrategy#instance_id}
  */
  readonly instanceId: string;
  /**
  * data_backup_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#data_backup_strategy ClickhouseBackupStrategy#data_backup_strategy}
  */
  readonly dataBackupStrategy: ClickhouseBackupStrategyDataBackupStrategy[] | cdktf.IResolvable;
  /**
  * meta_backup_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#meta_backup_strategy ClickhouseBackupStrategy#meta_backup_strategy}
  */
  readonly metaBackupStrategy?: ClickhouseBackupStrategyMetaBackupStrategy[] | cdktf.IResolvable;
}
export interface ClickhouseBackupStrategyDataBackupStrategyBackUpTables {
  /**
  * Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#database ClickhouseBackupStrategy#database}
  */
  readonly database: string;
  /**
  * Table ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#ips ClickhouseBackupStrategy#ips}
  */
  readonly ips?: string;
  /**
  * Ip address of cvm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#rip ClickhouseBackupStrategy#rip}
  */
  readonly rip?: string;
  /**
  * Table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#table ClickhouseBackupStrategy#table}
  */
  readonly table: string;
  /**
  * Back up the list of tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#total_bytes ClickhouseBackupStrategy#total_bytes}
  */
  readonly totalBytes: number;
  /**
  * Virtual clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#v_cluster ClickhouseBackupStrategy#v_cluster}
  */
  readonly vCluster?: string;
  /**
  * ZK path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#zoo_path ClickhouseBackupStrategy#zoo_path}
  */
  readonly zooPath?: string;
}

export function clickhouseBackupStrategyDataBackupStrategyBackUpTablesToTerraform(struct?: ClickhouseBackupStrategyDataBackupStrategyBackUpTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    ips: cdktf.stringToTerraform(struct!.ips),
    rip: cdktf.stringToTerraform(struct!.rip),
    table: cdktf.stringToTerraform(struct!.table),
    total_bytes: cdktf.numberToTerraform(struct!.totalBytes),
    v_cluster: cdktf.stringToTerraform(struct!.vCluster),
    zoo_path: cdktf.stringToTerraform(struct!.zooPath),
  }
}


export function clickhouseBackupStrategyDataBackupStrategyBackUpTablesToHclTerraform(struct?: ClickhouseBackupStrategyDataBackupStrategyBackUpTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.stringToHclTerraform(struct!.ips),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rip: {
      value: cdktf.stringToHclTerraform(struct!.rip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_bytes: {
      value: cdktf.numberToHclTerraform(struct!.totalBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_cluster: {
      value: cdktf.stringToHclTerraform(struct!.vCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zoo_path: {
      value: cdktf.stringToHclTerraform(struct!.zooPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseBackupStrategyDataBackupStrategyBackUpTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseBackupStrategyDataBackupStrategyBackUpTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._rip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._totalBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBytes = this._totalBytes;
    }
    if (this._vCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.vCluster = this._vCluster;
    }
    if (this._zooPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.zooPath = this._zooPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseBackupStrategyDataBackupStrategyBackUpTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._ips = undefined;
      this._rip = undefined;
      this._table = undefined;
      this._totalBytes = undefined;
      this._vCluster = undefined;
      this._zooPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._ips = value.ips;
      this._rip = value.rip;
      this._table = value.table;
      this._totalBytes = value.totalBytes;
      this._vCluster = value.vCluster;
      this._zooPath = value.zooPath;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // ips - computed: true, optional: true, required: false
  private _ips?: string; 
  public get ips() {
    return this.getStringAttribute('ips');
  }
  public set ips(value: string) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // rip - computed: true, optional: true, required: false
  private _rip?: string; 
  public get rip() {
    return this.getStringAttribute('rip');
  }
  public set rip(value: string) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // total_bytes - computed: false, optional: false, required: true
  private _totalBytes?: number; 
  public get totalBytes() {
    return this.getNumberAttribute('total_bytes');
  }
  public set totalBytes(value: number) {
    this._totalBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBytesInput() {
    return this._totalBytes;
  }

  // v_cluster - computed: true, optional: true, required: false
  private _vCluster?: string; 
  public get vCluster() {
    return this.getStringAttribute('v_cluster');
  }
  public set vCluster(value: string) {
    this._vCluster = value;
  }
  public resetVCluster() {
    this._vCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vClusterInput() {
    return this._vCluster;
  }

  // zoo_path - computed: true, optional: true, required: false
  private _zooPath?: string; 
  public get zooPath() {
    return this.getStringAttribute('zoo_path');
  }
  public set zooPath(value: string) {
    this._zooPath = value;
  }
  public resetZooPath() {
    this._zooPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zooPathInput() {
    return this._zooPath;
  }
}

export class ClickhouseBackupStrategyDataBackupStrategyBackUpTablesList extends cdktf.ComplexList {
  public internalValue? : ClickhouseBackupStrategyDataBackupStrategyBackUpTables[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseBackupStrategyDataBackupStrategyBackUpTablesOutputReference {
    return new ClickhouseBackupStrategyDataBackupStrategyBackUpTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseBackupStrategyDataBackupStrategy {
  /**
  * Execution hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#execute_hour ClickhouseBackupStrategy#execute_hour}
  */
  readonly executeHour: number;
  /**
  * Retention days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#retain_days ClickhouseBackupStrategy#retain_days}
  */
  readonly retainDays: number;
  /**
  * The day of the week is separated by commas. For example: 2 represents Tuesday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#week_days ClickhouseBackupStrategy#week_days}
  */
  readonly weekDays: string;
  /**
  * back_up_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#back_up_tables ClickhouseBackupStrategy#back_up_tables}
  */
  readonly backUpTables: ClickhouseBackupStrategyDataBackupStrategyBackUpTables[] | cdktf.IResolvable;
}

export function clickhouseBackupStrategyDataBackupStrategyToTerraform(struct?: ClickhouseBackupStrategyDataBackupStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_hour: cdktf.numberToTerraform(struct!.executeHour),
    retain_days: cdktf.numberToTerraform(struct!.retainDays),
    week_days: cdktf.stringToTerraform(struct!.weekDays),
    back_up_tables: cdktf.listMapper(clickhouseBackupStrategyDataBackupStrategyBackUpTablesToTerraform, true)(struct!.backUpTables),
  }
}


export function clickhouseBackupStrategyDataBackupStrategyToHclTerraform(struct?: ClickhouseBackupStrategyDataBackupStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_hour: {
      value: cdktf.numberToHclTerraform(struct!.executeHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retain_days: {
      value: cdktf.numberToHclTerraform(struct!.retainDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    week_days: {
      value: cdktf.stringToHclTerraform(struct!.weekDays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    back_up_tables: {
      value: cdktf.listMapperHcl(clickhouseBackupStrategyDataBackupStrategyBackUpTablesToHclTerraform, true)(struct!.backUpTables),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseBackupStrategyDataBackupStrategyBackUpTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseBackupStrategyDataBackupStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseBackupStrategyDataBackupStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeHour = this._executeHour;
    }
    if (this._retainDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainDays = this._retainDays;
    }
    if (this._weekDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDays = this._weekDays;
    }
    if (this._backUpTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backUpTables = this._backUpTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseBackupStrategyDataBackupStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executeHour = undefined;
      this._retainDays = undefined;
      this._weekDays = undefined;
      this._backUpTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executeHour = value.executeHour;
      this._retainDays = value.retainDays;
      this._weekDays = value.weekDays;
      this._backUpTables.internalValue = value.backUpTables;
    }
  }

  // execute_hour - computed: false, optional: false, required: true
  private _executeHour?: number; 
  public get executeHour() {
    return this.getNumberAttribute('execute_hour');
  }
  public set executeHour(value: number) {
    this._executeHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeHourInput() {
    return this._executeHour;
  }

  // retain_days - computed: false, optional: false, required: true
  private _retainDays?: number; 
  public get retainDays() {
    return this.getNumberAttribute('retain_days');
  }
  public set retainDays(value: number) {
    this._retainDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retainDaysInput() {
    return this._retainDays;
  }

  // week_days - computed: false, optional: false, required: true
  private _weekDays?: string; 
  public get weekDays() {
    return this.getStringAttribute('week_days');
  }
  public set weekDays(value: string) {
    this._weekDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysInput() {
    return this._weekDays;
  }

  // back_up_tables - computed: false, optional: false, required: true
  private _backUpTables = new ClickhouseBackupStrategyDataBackupStrategyBackUpTablesList(this, "back_up_tables", false);
  public get backUpTables() {
    return this._backUpTables;
  }
  public putBackUpTables(value: ClickhouseBackupStrategyDataBackupStrategyBackUpTables[] | cdktf.IResolvable) {
    this._backUpTables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backUpTablesInput() {
    return this._backUpTables.internalValue;
  }
}

export class ClickhouseBackupStrategyDataBackupStrategyList extends cdktf.ComplexList {
  public internalValue? : ClickhouseBackupStrategyDataBackupStrategy[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseBackupStrategyDataBackupStrategyOutputReference {
    return new ClickhouseBackupStrategyDataBackupStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseBackupStrategyMetaBackupStrategy {
  /**
  * Execution hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#execute_hour ClickhouseBackupStrategy#execute_hour}
  */
  readonly executeHour?: number;
  /**
  * Retention days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#retain_days ClickhouseBackupStrategy#retain_days}
  */
  readonly retainDays?: number;
  /**
  * The day of the week is separated by commas. For example: 2 represents Tuesday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#week_days ClickhouseBackupStrategy#week_days}
  */
  readonly weekDays?: string;
}

export function clickhouseBackupStrategyMetaBackupStrategyToTerraform(struct?: ClickhouseBackupStrategyMetaBackupStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_hour: cdktf.numberToTerraform(struct!.executeHour),
    retain_days: cdktf.numberToTerraform(struct!.retainDays),
    week_days: cdktf.stringToTerraform(struct!.weekDays),
  }
}


export function clickhouseBackupStrategyMetaBackupStrategyToHclTerraform(struct?: ClickhouseBackupStrategyMetaBackupStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_hour: {
      value: cdktf.numberToHclTerraform(struct!.executeHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retain_days: {
      value: cdktf.numberToHclTerraform(struct!.retainDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    week_days: {
      value: cdktf.stringToHclTerraform(struct!.weekDays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseBackupStrategyMetaBackupStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseBackupStrategyMetaBackupStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeHour = this._executeHour;
    }
    if (this._retainDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainDays = this._retainDays;
    }
    if (this._weekDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDays = this._weekDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseBackupStrategyMetaBackupStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executeHour = undefined;
      this._retainDays = undefined;
      this._weekDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executeHour = value.executeHour;
      this._retainDays = value.retainDays;
      this._weekDays = value.weekDays;
    }
  }

  // execute_hour - computed: false, optional: true, required: false
  private _executeHour?: number; 
  public get executeHour() {
    return this.getNumberAttribute('execute_hour');
  }
  public set executeHour(value: number) {
    this._executeHour = value;
  }
  public resetExecuteHour() {
    this._executeHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeHourInput() {
    return this._executeHour;
  }

  // retain_days - computed: false, optional: true, required: false
  private _retainDays?: number; 
  public get retainDays() {
    return this.getNumberAttribute('retain_days');
  }
  public set retainDays(value: number) {
    this._retainDays = value;
  }
  public resetRetainDays() {
    this._retainDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainDaysInput() {
    return this._retainDays;
  }

  // week_days - computed: false, optional: true, required: false
  private _weekDays?: string; 
  public get weekDays() {
    return this.getStringAttribute('week_days');
  }
  public set weekDays(value: string) {
    this._weekDays = value;
  }
  public resetWeekDays() {
    this._weekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysInput() {
    return this._weekDays;
  }
}

export class ClickhouseBackupStrategyMetaBackupStrategyList extends cdktf.ComplexList {
  public internalValue? : ClickhouseBackupStrategyMetaBackupStrategy[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseBackupStrategyMetaBackupStrategyOutputReference {
    return new ClickhouseBackupStrategyMetaBackupStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy tencentcloud_clickhouse_backup_strategy}
*/
export class ClickhouseBackupStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clickhouse_backup_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickhouseBackupStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickhouseBackupStrategy to import
  * @param importFromId The id of the existing ClickhouseBackupStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickhouseBackupStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clickhouse_backup_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_backup_strategy tencentcloud_clickhouse_backup_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickhouseBackupStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: ClickhouseBackupStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clickhouse_backup_strategy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._dataBackupStrategy.internalValue = config.dataBackupStrategy;
    this._metaBackupStrategy.internalValue = config.metaBackupStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // data_backup_strategy - computed: false, optional: false, required: true
  private _dataBackupStrategy = new ClickhouseBackupStrategyDataBackupStrategyList(this, "data_backup_strategy", false);
  public get dataBackupStrategy() {
    return this._dataBackupStrategy;
  }
  public putDataBackupStrategy(value: ClickhouseBackupStrategyDataBackupStrategy[] | cdktf.IResolvable) {
    this._dataBackupStrategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBackupStrategyInput() {
    return this._dataBackupStrategy.internalValue;
  }

  // meta_backup_strategy - computed: false, optional: true, required: false
  private _metaBackupStrategy = new ClickhouseBackupStrategyMetaBackupStrategyList(this, "meta_backup_strategy", false);
  public get metaBackupStrategy() {
    return this._metaBackupStrategy;
  }
  public putMetaBackupStrategy(value: ClickhouseBackupStrategyMetaBackupStrategy[] | cdktf.IResolvable) {
    this._metaBackupStrategy.internalValue = value;
  }
  public resetMetaBackupStrategy() {
    this._metaBackupStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaBackupStrategyInput() {
    return this._metaBackupStrategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      data_backup_strategy: cdktf.listMapper(clickhouseBackupStrategyDataBackupStrategyToTerraform, true)(this._dataBackupStrategy.internalValue),
      meta_backup_strategy: cdktf.listMapper(clickhouseBackupStrategyMetaBackupStrategyToTerraform, true)(this._metaBackupStrategy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      data_backup_strategy: {
        value: cdktf.listMapperHcl(clickhouseBackupStrategyDataBackupStrategyToHclTerraform, true)(this._dataBackupStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseBackupStrategyDataBackupStrategyList",
      },
      meta_backup_strategy: {
        value: cdktf.listMapperHcl(clickhouseBackupStrategyMetaBackupStrategyToHclTerraform, true)(this._metaBackupStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseBackupStrategyMetaBackupStrategyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
