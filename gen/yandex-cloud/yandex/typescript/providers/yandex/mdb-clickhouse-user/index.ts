// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbClickhouseUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the ClickHouse cluster. Provided by the client when the user is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#cluster_id MdbClickhouseUser#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Generate password using Connection Manager. Allowed values: `true` or `false`. It's used only during user creation and is ignored during updating.
  * 
  * ~> **Must specify either password or generate_password**.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#generate_password MdbClickhouseUser#generate_password}
  */
  readonly generatePassword?: boolean | cdktf.IResolvable;
  /**
  * Name of the ClickHouse user. Provided by the client when the user is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#name MdbClickhouseUser#name}
  */
  readonly name: string;
  /**
  * Password of the ClickHouse user. Provided by the client when the user is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#password MdbClickhouseUser#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#timeouts MdbClickhouseUser#timeouts}
  */
  readonly timeouts?: MdbClickhouseUserTimeouts;
  /**
  * permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#permission MdbClickhouseUser#permission}
  */
  readonly permission?: MdbClickhouseUserPermission[] | cdktf.IResolvable;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#quota MdbClickhouseUser#quota}
  */
  readonly quota?: MdbClickhouseUserQuota[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#settings MdbClickhouseUser#settings}
  */
  readonly settings?: MdbClickhouseUserSettings;
}
export interface MdbClickhouseUserConnectionManager {
}

export function mdbClickhouseUserConnectionManagerToTerraform(struct?: MdbClickhouseUserConnectionManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mdbClickhouseUserConnectionManagerToHclTerraform(struct?: MdbClickhouseUserConnectionManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MdbClickhouseUserConnectionManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbClickhouseUserConnectionManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseUserConnectionManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
}
export interface MdbClickhouseUserTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#create MdbClickhouseUser#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#delete MdbClickhouseUser#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#update MdbClickhouseUser#update}
  */
  readonly update?: string;
}

export function mdbClickhouseUserTimeoutsToTerraform(struct?: MdbClickhouseUserTimeouts | cdktf.IResolvable): any {
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


export function mdbClickhouseUserTimeoutsToHclTerraform(struct?: MdbClickhouseUserTimeouts | cdktf.IResolvable): any {
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

export class MdbClickhouseUserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbClickhouseUserTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbClickhouseUserTimeouts | cdktf.IResolvable | undefined) {
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
export interface MdbClickhouseUserPermission {
  /**
  * Name of the database that the permission grants access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#database_name MdbClickhouseUser#database_name}
  */
  readonly databaseName: string;
}

export function mdbClickhouseUserPermissionToTerraform(struct?: MdbClickhouseUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
  }
}


export function mdbClickhouseUserPermissionToHclTerraform(struct?: MdbClickhouseUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbClickhouseUserPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbClickhouseUserPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseUserPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
    }
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
}

export class MdbClickhouseUserPermissionList extends cdktf.ComplexList {
  public internalValue? : MdbClickhouseUserPermission[] | cdktf.IResolvable

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
  public get(index: number): MdbClickhouseUserPermissionOutputReference {
    return new MdbClickhouseUserPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbClickhouseUserQuota {
  /**
  * The number of queries that threw exception. 0 - unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#errors MdbClickhouseUser#errors}
  */
  readonly errors?: number;
  /**
  * The total query execution time, in milliseconds (wall time). 0 - unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#execution_time MdbClickhouseUser#execution_time}
  */
  readonly executionTime?: number;
  /**
  * Duration of interval for quota in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#interval_duration MdbClickhouseUser#interval_duration}
  */
  readonly intervalDuration: number;
  /**
  * The total number of queries. 0 - unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#queries MdbClickhouseUser#queries}
  */
  readonly queries?: number;
  /**
  * The total number of source rows read from tables for running the query, on all remote servers. 0 - unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#read_rows MdbClickhouseUser#read_rows}
  */
  readonly readRows?: number;
  /**
  * The total number of rows given as the result. 0 - unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#result_rows MdbClickhouseUser#result_rows}
  */
  readonly resultRows?: number;
}

export function mdbClickhouseUserQuotaToTerraform(struct?: MdbClickhouseUserQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    errors: cdktf.numberToTerraform(struct!.errors),
    execution_time: cdktf.numberToTerraform(struct!.executionTime),
    interval_duration: cdktf.numberToTerraform(struct!.intervalDuration),
    queries: cdktf.numberToTerraform(struct!.queries),
    read_rows: cdktf.numberToTerraform(struct!.readRows),
    result_rows: cdktf.numberToTerraform(struct!.resultRows),
  }
}


export function mdbClickhouseUserQuotaToHclTerraform(struct?: MdbClickhouseUserQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    errors: {
      value: cdktf.numberToHclTerraform(struct!.errors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    execution_time: {
      value: cdktf.numberToHclTerraform(struct!.executionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_duration: {
      value: cdktf.numberToHclTerraform(struct!.intervalDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queries: {
      value: cdktf.numberToHclTerraform(struct!.queries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_rows: {
      value: cdktf.numberToHclTerraform(struct!.readRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    result_rows: {
      value: cdktf.numberToHclTerraform(struct!.resultRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbClickhouseUserQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbClickhouseUserQuota | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errors !== undefined) {
      hasAnyValues = true;
      internalValueResult.errors = this._errors;
    }
    if (this._executionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTime = this._executionTime;
    }
    if (this._intervalDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalDuration = this._intervalDuration;
    }
    if (this._queries !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    if (this._readRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.readRows = this._readRows;
    }
    if (this._resultRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultRows = this._resultRows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseUserQuota | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errors = undefined;
      this._executionTime = undefined;
      this._intervalDuration = undefined;
      this._queries = undefined;
      this._readRows = undefined;
      this._resultRows = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errors = value.errors;
      this._executionTime = value.executionTime;
      this._intervalDuration = value.intervalDuration;
      this._queries = value.queries;
      this._readRows = value.readRows;
      this._resultRows = value.resultRows;
    }
  }

  // errors - computed: false, optional: true, required: false
  private _errors?: number; 
  public get errors() {
    return this.getNumberAttribute('errors');
  }
  public set errors(value: number) {
    this._errors = value;
  }
  public resetErrors() {
    this._errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors;
  }

  // execution_time - computed: false, optional: true, required: false
  private _executionTime?: number; 
  public get executionTime() {
    return this.getNumberAttribute('execution_time');
  }
  public set executionTime(value: number) {
    this._executionTime = value;
  }
  public resetExecutionTime() {
    this._executionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeInput() {
    return this._executionTime;
  }

  // interval_duration - computed: false, optional: false, required: true
  private _intervalDuration?: number; 
  public get intervalDuration() {
    return this.getNumberAttribute('interval_duration');
  }
  public set intervalDuration(value: number) {
    this._intervalDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalDurationInput() {
    return this._intervalDuration;
  }

  // queries - computed: false, optional: true, required: false
  private _queries?: number; 
  public get queries() {
    return this.getNumberAttribute('queries');
  }
  public set queries(value: number) {
    this._queries = value;
  }
  public resetQueries() {
    this._queries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries;
  }

  // read_rows - computed: false, optional: true, required: false
  private _readRows?: number; 
  public get readRows() {
    return this.getNumberAttribute('read_rows');
  }
  public set readRows(value: number) {
    this._readRows = value;
  }
  public resetReadRows() {
    this._readRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readRowsInput() {
    return this._readRows;
  }

  // result_rows - computed: false, optional: true, required: false
  private _resultRows?: number; 
  public get resultRows() {
    return this.getNumberAttribute('result_rows');
  }
  public set resultRows(value: number) {
    this._resultRows = value;
  }
  public resetResultRows() {
    this._resultRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultRowsInput() {
    return this._resultRows;
  }
}

export class MdbClickhouseUserQuotaList extends cdktf.ComplexList {
  public internalValue? : MdbClickhouseUserQuota[] | cdktf.IResolvable

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
  public get(index: number): MdbClickhouseUserQuotaOutputReference {
    return new MdbClickhouseUserQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbClickhouseUserSettings {
  /**
  * Include CORS headers in HTTP response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#add_http_cors_header MdbClickhouseUser#add_http_cors_header}
  */
  readonly addHttpCorsHeader?: boolean | cdktf.IResolvable;
  /**
  * Allows or denies DDL queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#allow_ddl MdbClickhouseUser#allow_ddl}
  */
  readonly allowDdl?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables introspection functions for query profiling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#allow_introspection_functions MdbClickhouseUser#allow_introspection_functions}
  */
  readonly allowIntrospectionFunctions?: boolean | cdktf.IResolvable;
  /**
  * Allows specifying LowCardinality modifier for types of small fixed size (8 or less) in CREATE TABLE statements. Enabling this may increase merge times and memory consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#allow_suspicious_low_cardinality_types MdbClickhouseUser#allow_suspicious_low_cardinality_types}
  */
  readonly allowSuspiciousLowCardinalityTypes?: boolean | cdktf.IResolvable;
  /**
  * Enables legacy ClickHouse server behaviour in ANY INNER|LEFT JOIN operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#any_join_distinct_right_table_keys MdbClickhouseUser#any_join_distinct_right_table_keys}
  */
  readonly anyJoinDistinctRightTableKeys?: boolean | cdktf.IResolvable;
  /**
  * Enables asynchronous inserts. Disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#async_insert MdbClickhouseUser#async_insert}
  */
  readonly asyncInsert?: boolean | cdktf.IResolvable;
  /**
  * The maximum timeout in milliseconds since the first INSERT query before inserting collected data. If the parameter is set to 0, the timeout is disabled. Default value: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#async_insert_busy_timeout MdbClickhouseUser#async_insert_busy_timeout}
  */
  readonly asyncInsertBusyTimeout?: number;
  /**
  * The maximum size of the unparsed data in bytes collected per query before being inserted. If the parameter is set to 0, asynchronous insertions are disabled. Default value: 100000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#async_insert_max_data_size MdbClickhouseUser#async_insert_max_data_size}
  */
  readonly asyncInsertMaxDataSize?: number;
  /**
  * The maximum timeout in milliseconds since the last INSERT query before dumping collected data. If enabled, the settings prolongs the async_insert_busy_timeout with every INSERT query as long as async_insert_max_data_size is not exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#async_insert_stale_timeout MdbClickhouseUser#async_insert_stale_timeout}
  */
  readonly asyncInsertStaleTimeout?: number;
  /**
  * The maximum number of threads for background data parsing and insertion. If the parameter is set to 0, asynchronous insertions are disabled. Default value: 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#async_insert_threads MdbClickhouseUser#async_insert_threads}
  */
  readonly asyncInsertThreads?: number;
  /**
  * If it is set to true, use adaptive busy timeout for asynchronous inserts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#async_insert_use_adaptive_busy_timeout MdbClickhouseUser#async_insert_use_adaptive_busy_timeout}
  */
  readonly asyncInsertUseAdaptiveBusyTimeout?: boolean | cdktf.IResolvable;
  /**
  * Cancels HTTP read-only queries (e.g. SELECT) when a client closes the connection without waiting for the response. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#cancel_http_readonly_queries_on_client_close MdbClickhouseUser#cancel_http_readonly_queries_on_client_close}
  */
  readonly cancelHttpReadonlyQueriesOnClientClose?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable compilation of some scalar functions and operators to native code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#compile_expressions MdbClickhouseUser#compile_expressions}
  */
  readonly compileExpressions?: boolean | cdktf.IResolvable;
  /**
  * Connection timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#connect_timeout MdbClickhouseUser#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * The timeout in milliseconds for connecting to a remote server for a Distributed table engine.  Applies only if the cluster uses sharding and replication. If unsuccessful, several attempts are made to connect to various replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#connect_timeout_with_failover MdbClickhouseUser#connect_timeout_with_failover}
  */
  readonly connectTimeoutWithFailover?: number;
  /**
  * Specifies which of the uniq* functions should be used to perform the COUNT(DISTINCT …) construction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#count_distinct_implementation MdbClickhouseUser#count_distinct_implementation}
  */
  readonly countDistinctImplementation?: string;
  /**
  * Allows data types without explicit modifiers NULL or NOT NULL in column definition will be Nullable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#data_type_default_nullable MdbClickhouseUser#data_type_default_nullable}
  */
  readonly dataTypeDefaultNullable?: boolean | cdktf.IResolvable;
  /**
  * Allows choosing a parser of the text representation of date and time, one of: `best_effort`, `basic`, `best_effort_us`. Default value: `basic`. Cloud default value: `best_effort`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#date_time_input_format MdbClickhouseUser#date_time_input_format}
  */
  readonly dateTimeInputFormat?: string;
  /**
  * Allows choosing different output formats of the text representation of date and time, one of: `simple`, `iso`, `unix_timestamp`. Default value: `simple`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#date_time_output_format MdbClickhouseUser#date_time_output_format}
  */
  readonly dateTimeOutputFormat?: string;
  /**
  * Enables or disables the deduplication check for materialized views that receive data from Replicated* tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#deduplicate_blocks_in_dependent_materialized_views MdbClickhouseUser#deduplicate_blocks_in_dependent_materialized_views}
  */
  readonly deduplicateBlocksInDependentMaterializedViews?: boolean | cdktf.IResolvable;
  /**
  * Sets behaviour on overflow when using DISTINCT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#distinct_overflow_mode MdbClickhouseUser#distinct_overflow_mode}
  */
  readonly distinctOverflowMode?: string;
  /**
  * Enables of disables memory saving mode when doing distributed aggregation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#distributed_aggregation_memory_efficient MdbClickhouseUser#distributed_aggregation_memory_efficient}
  */
  readonly distributedAggregationMemoryEfficient?: boolean | cdktf.IResolvable;
  /**
  * Determines the format of distributed DDL query result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#distributed_ddl_output_mode MdbClickhouseUser#distributed_ddl_output_mode}
  */
  readonly distributedDdlOutputMode?: string;
  /**
  * Timeout for DDL queries, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#distributed_ddl_task_timeout MdbClickhouseUser#distributed_ddl_task_timeout}
  */
  readonly distributedDdlTaskTimeout?: number;
  /**
  * Determine the behavior of distributed subqueries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#distributed_product_mode MdbClickhouseUser#distributed_product_mode}
  */
  readonly distributedProductMode?: string;
  /**
  * Enable or disable independent processing of partitions for **SELECT** queries with **FINAL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#do_not_merge_across_partitions_select_final MdbClickhouseUser#do_not_merge_across_partitions_select_final}
  */
  readonly doNotMergeAcrossPartitionsSelectFinal?: boolean | cdktf.IResolvable;
  /**
  * Allows to retunr empty result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#empty_result_for_aggregation_by_empty_set MdbClickhouseUser#empty_result_for_aggregation_by_empty_set}
  */
  readonly emptyResultForAggregationByEmptySet?: boolean | cdktf.IResolvable;
  /**
  * Enable new query analyzer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#enable_analyzer MdbClickhouseUser#enable_analyzer}
  */
  readonly enableAnalyzer?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables data compression in the response to an HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#enable_http_compression MdbClickhouseUser#enable_http_compression}
  */
  readonly enableHttpCompression?: boolean | cdktf.IResolvable;
  /**
  * If turned on, results of SELECT queries are retrieved from the query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#enable_reads_from_query_cache MdbClickhouseUser#enable_reads_from_query_cache}
  */
  readonly enableReadsFromQueryCache?: boolean | cdktf.IResolvable;
  /**
  * If turned on, results of SELECT queries are stored in the query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#enable_writes_to_query_cache MdbClickhouseUser#enable_writes_to_query_cache}
  */
  readonly enableWritesToQueryCache?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables query forcing to a stale replica in case the actual data is unavailable. If enabled, ClickHouse will choose the most up-to-date replica and force the query to use the data in this replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#fallback_to_stale_replicas_for_distributed_queries MdbClickhouseUser#fallback_to_stale_replicas_for_distributed_queries}
  */
  readonly fallbackToStaleReplicasForDistributedQueries?: boolean | cdktf.IResolvable;
  /**
  * Sets the data format of a nested columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#flatten_nested MdbClickhouseUser#flatten_nested}
  */
  readonly flattenNested?: boolean | cdktf.IResolvable;
  /**
  * Disable query execution if the index cannot be used by date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#force_index_by_date MdbClickhouseUser#force_index_by_date}
  */
  readonly forceIndexByDate?: boolean | cdktf.IResolvable;
  /**
  * Disable query execution if indexing by the primary key is not possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#force_primary_key MdbClickhouseUser#force_primary_key}
  */
  readonly forcePrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * Avro schema registry URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#format_avro_schema_registry_url MdbClickhouseUser#format_avro_schema_registry_url}
  */
  readonly formatAvroSchemaRegistryUrl?: string;
  /**
  * Regular expression (for Regexp format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#format_regexp MdbClickhouseUser#format_regexp}
  */
  readonly formatRegexp?: string;
  /**
  * Skip lines unmatched by regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#format_regexp_skip_unmatched MdbClickhouseUser#format_regexp_skip_unmatched}
  */
  readonly formatRegexpSkipUnmatched?: boolean | cdktf.IResolvable;
  /**
  * Sets behaviour on overflow while GROUP BY operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#group_by_overflow_mode MdbClickhouseUser#group_by_overflow_mode}
  */
  readonly groupByOverflowMode?: string;
  /**
  * Sets the threshold of the number of keys, after that the two-level aggregation should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#group_by_two_level_threshold MdbClickhouseUser#group_by_two_level_threshold}
  */
  readonly groupByTwoLevelThreshold?: number;
  /**
  * Sets the threshold of the number of bytes, after that the two-level aggregation should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#group_by_two_level_threshold_bytes MdbClickhouseUser#group_by_two_level_threshold_bytes}
  */
  readonly groupByTwoLevelThresholdBytes?: number;
  /**
  * Connection timeout for establishing connection with replica for Hedged requests. Default value: 50 milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#hedged_connection_timeout_ms MdbClickhouseUser#hedged_connection_timeout_ms}
  */
  readonly hedgedConnectionTimeoutMs?: number;
  /**
  * Timeout for HTTP connection in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#http_connection_timeout MdbClickhouseUser#http_connection_timeout}
  */
  readonly httpConnectionTimeout?: number;
  /**
  * Sets minimal interval between notifications about request process in HTTP header X-ClickHouse-Progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#http_headers_progress_interval MdbClickhouseUser#http_headers_progress_interval}
  */
  readonly httpHeadersProgressInterval?: number;
  /**
  * Maximum length of field name in HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#http_max_field_name_size MdbClickhouseUser#http_max_field_name_size}
  */
  readonly httpMaxFieldNameSize?: number;
  /**
  * Maximum length of field value in HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#http_max_field_value_size MdbClickhouseUser#http_max_field_value_size}
  */
  readonly httpMaxFieldValueSize?: number;
  /**
  * Timeout for HTTP connection in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#http_receive_timeout MdbClickhouseUser#http_receive_timeout}
  */
  readonly httpReceiveTimeout?: number;
  /**
  * Timeout for HTTP connection in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#http_send_timeout MdbClickhouseUser#http_send_timeout}
  */
  readonly httpSendTimeout?: number;
  /**
  * Timeout to close idle TCP connections after specified number of seconds. Default value: 3600 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#idle_connection_timeout MdbClickhouseUser#idle_connection_timeout}
  */
  readonly idleConnectionTimeout?: number;
  /**
  * Ignore materialized views with dropped target table during pushing to views.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#ignore_materialized_views_with_dropped_target_table MdbClickhouseUser#ignore_materialized_views_with_dropped_target_table}
  */
  readonly ignoreMaterializedViewsWithDroppedTargetTable?: boolean | cdktf.IResolvable;
  /**
  * When performing INSERT queries, replace omitted input column values with default values of the respective columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#input_format_defaults_for_omitted_fields MdbClickhouseUser#input_format_defaults_for_omitted_fields}
  */
  readonly inputFormatDefaultsForOmittedFields?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables the insertion of JSON data with nested objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#input_format_import_nested_json MdbClickhouseUser#input_format_import_nested_json}
  */
  readonly inputFormatImportNestedJson?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables the initialization of NULL fields with default values, if data type of these fields is not nullable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#input_format_null_as_default MdbClickhouseUser#input_format_null_as_default}
  */
  readonly inputFormatNullAsDefault?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables order-preserving parallel parsing of data formats. Supported only for TSV, TKSV, CSV and JSONEachRow formats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#input_format_parallel_parsing MdbClickhouseUser#input_format_parallel_parsing}
  */
  readonly inputFormatParallelParsing?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables the full SQL parser if the fast stream parser can’t parse the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#input_format_values_interpret_expressions MdbClickhouseUser#input_format_values_interpret_expressions}
  */
  readonly inputFormatValuesInterpretExpressions?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables checking the column order when inserting data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#input_format_with_names_use_header MdbClickhouseUser#input_format_with_names_use_header}
  */
  readonly inputFormatWithNamesUseHeader?: boolean | cdktf.IResolvable;
  /**
  * The setting sets the maximum number of retries for ClickHouse Keeper (or ZooKeeper) requests during insert into replicated MergeTree. Only Keeper requests which failed due to network error, Keeper session timeout, or request timeout are considered for retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#insert_keeper_max_retries MdbClickhouseUser#insert_keeper_max_retries}
  */
  readonly insertKeeperMaxRetries?: number;
  /**
  * Enables the insertion of default values instead of NULL into columns with not nullable data type. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#insert_null_as_default MdbClickhouseUser#insert_null_as_default}
  */
  readonly insertNullAsDefault?: boolean | cdktf.IResolvable;
  /**
  * Enables the quorum writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#insert_quorum MdbClickhouseUser#insert_quorum}
  */
  readonly insertQuorum?: number;
  /**
  * Enables or disables parallelism for quorum INSERT queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#insert_quorum_parallel MdbClickhouseUser#insert_quorum_parallel}
  */
  readonly insertQuorumParallel?: boolean | cdktf.IResolvable;
  /**
  * Quorum write timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#insert_quorum_timeout MdbClickhouseUser#insert_quorum_timeout}
  */
  readonly insertQuorumTimeout?: number;
  /**
  * Specifies which JOIN algorithm to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#join_algorithm MdbClickhouseUser#join_algorithm}
  */
  readonly joinAlgorithm?: string[];
  /**
  * Sets behaviour on overflow in JOIN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#join_overflow_mode MdbClickhouseUser#join_overflow_mode}
  */
  readonly joinOverflowMode?: string;
  /**
  * Sets the type of JOIN behaviour. When merging tables, empty cells may appear. ClickHouse fills them differently based on this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#join_use_nulls MdbClickhouseUser#join_use_nulls}
  */
  readonly joinUseNulls?: boolean | cdktf.IResolvable;
  /**
  * Require aliases for subselects and table functions in FROM that more than one table is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#joined_subquery_requires_alias MdbClickhouseUser#joined_subquery_requires_alias}
  */
  readonly joinedSubqueryRequiresAlias?: boolean | cdktf.IResolvable;
  /**
  * Specifies the algorithm of replicas selection that is used for distributed query processing, one of: random, nearest_hostname, in_order, first_or_random, round_robin. Default value: random.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#load_balancing MdbClickhouseUser#load_balancing}
  */
  readonly loadBalancing?: string;
  /**
  * Method of reading data from local filesystem. Possible values: 
  * * 'read' - abort query execution, return an error.  
  * * 'pread' - abort query execution, return an error.  
  * * 'pread_threadpool' - stop query execution, return partial result. 
  * If the parameter is set to 0 (default), no hops is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#local_filesystem_read_method MdbClickhouseUser#local_filesystem_read_method}
  */
  readonly localFilesystemReadMethod?: string;
  /**
  * Enabled or disable logging of processors level profiling data to the the system.log_processors_profiles table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#log_processors_profiles MdbClickhouseUser#log_processors_profiles}
  */
  readonly logProcessorsProfiles?: boolean | cdktf.IResolvable;
  /**
  * Log queries with the specified probability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#log_queries_probability MdbClickhouseUser#log_queries_probability}
  */
  readonly logQueriesProbability?: number;
  /**
  * Setting up query threads logging. Query threads log into the system.query_thread_log table. This setting has effect only when log_queries is true. Queries’ threads run by ClickHouse with this setup are logged according to the rules in the query_thread_log server configuration parameter. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#log_query_threads MdbClickhouseUser#log_query_threads}
  */
  readonly logQueryThreads?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables query views logging to the the system.query_views_log table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#log_query_views MdbClickhouseUser#log_query_views}
  */
  readonly logQueryViews?: boolean | cdktf.IResolvable;
  /**
  * Allows or restricts using the LowCardinality data type with the Native format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#low_cardinality_allow_in_native_format MdbClickhouseUser#low_cardinality_allow_in_native_format}
  */
  readonly lowCardinalityAllowInNativeFormat?: boolean | cdktf.IResolvable;
  /**
  * Limits the maximum depth of query syntax tree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_ast_depth MdbClickhouseUser#max_ast_depth}
  */
  readonly maxAstDepth?: number;
  /**
  * Limits the maximum size of query syntax tree in number of nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_ast_elements MdbClickhouseUser#max_ast_elements}
  */
  readonly maxAstElements?: number;
  /**
  * A recommendation for what size of the block (in a count of rows) to load from tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_block_size MdbClickhouseUser#max_block_size}
  */
  readonly maxBlockSize?: number;
  /**
  * Limit in bytes for using memoru for GROUP BY before using swap on disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_bytes_before_external_group_by MdbClickhouseUser#max_bytes_before_external_group_by}
  */
  readonly maxBytesBeforeExternalGroupBy?: number;
  /**
  * This setting is equivalent of the max_bytes_before_external_group_by setting, except for it is for sort operation (ORDER BY), not aggregation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_bytes_before_external_sort MdbClickhouseUser#max_bytes_before_external_sort}
  */
  readonly maxBytesBeforeExternalSort?: number;
  /**
  * Limits the maximum size of a hash table in bytes (uncompressed data) when using DISTINCT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_bytes_in_distinct MdbClickhouseUser#max_bytes_in_distinct}
  */
  readonly maxBytesInDistinct?: number;
  /**
  * Limit on maximum size of the hash table for JOIN, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_bytes_in_join MdbClickhouseUser#max_bytes_in_join}
  */
  readonly maxBytesInJoin?: number;
  /**
  * Limit on the number of bytes in the set resulting from the execution of the IN section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_bytes_in_set MdbClickhouseUser#max_bytes_in_set}
  */
  readonly maxBytesInSet?: number;
  /**
  * Limits the maximum number of bytes (uncompressed data) that can be read from a table when running a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_bytes_to_read MdbClickhouseUser#max_bytes_to_read}
  */
  readonly maxBytesToRead?: number;
  /**
  * Limits the maximum number of bytes (uncompressed data) that can be read from a table for sorting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_bytes_to_sort MdbClickhouseUser#max_bytes_to_sort}
  */
  readonly maxBytesToSort?: number;
  /**
  * Limits the maximum number of bytes (uncompressed data) that can be passed to a remote server or saved in a temporary table when using GLOBAL IN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_bytes_to_transfer MdbClickhouseUser#max_bytes_to_transfer}
  */
  readonly maxBytesToTransfer?: number;
  /**
  * Limits the maximum number of columns that can be read from a table in a single query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_columns_to_read MdbClickhouseUser#max_columns_to_read}
  */
  readonly maxColumnsToRead?: number;
  /**
  * The maximum number of concurrent requests per user. Default value: 0 (no limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_concurrent_queries_for_user MdbClickhouseUser#max_concurrent_queries_for_user}
  */
  readonly maxConcurrentQueriesForUser?: number;
  /**
  * Limits the maximum query execution time in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_execution_time MdbClickhouseUser#max_execution_time}
  */
  readonly maxExecutionTime?: number;
  /**
  * Limits the maximum size of query syntax tree in number of nodes after expansion of aliases and the asterisk values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_expanded_ast_elements MdbClickhouseUser#max_expanded_ast_elements}
  */
  readonly maxExpandedAstElements?: number;
  /**
  * Sets the maximum number of parallel threads for the SELECT query data read phase with the FINAL modifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_final_threads MdbClickhouseUser#max_final_threads}
  */
  readonly maxFinalThreads?: number;
  /**
  * Limits the maximum number of HTTP GET redirect hops for URL-engine tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_http_get_redirects MdbClickhouseUser#max_http_get_redirects}
  */
  readonly maxHttpGetRedirects?: number;
  /**
  * The size of blocks (in a count of rows) to form for insertion into a table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_insert_block_size MdbClickhouseUser#max_insert_block_size}
  */
  readonly maxInsertBlockSize?: number;
  /**
  * The maximum number of threads to execute the INSERT SELECT query. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_insert_threads MdbClickhouseUser#max_insert_threads}
  */
  readonly maxInsertThreads?: number;
  /**
  * Maximum memory usage for processing all concurrently running queries for the user. Zero means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_memory_usage MdbClickhouseUser#max_memory_usage}
  */
  readonly maxMemoryUsage?: number;
  /**
  * Maximum memory usage for processing all concurrently running queries for the user. Zero means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_memory_usage_for_user MdbClickhouseUser#max_memory_usage_for_user}
  */
  readonly maxMemoryUsageForUser?: number;
  /**
  * Limits the speed of the data exchange over the network in bytes per second.  This setting applies to every query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_network_bandwidth MdbClickhouseUser#max_network_bandwidth}
  */
  readonly maxNetworkBandwidth?: number;
  /**
  * Limits the speed of the data exchange over the network in bytes per second. This setting applies to all concurrently running queries performed by a single user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_network_bandwidth_for_user MdbClickhouseUser#max_network_bandwidth_for_user}
  */
  readonly maxNetworkBandwidthForUser?: number;
  /**
  * Limits maximum recursion depth in the recursive descent parser. Allows controlling the stack size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_parser_depth MdbClickhouseUser#max_parser_depth}
  */
  readonly maxParserDepth?: number;
  /**
  * Limits the maximum number of partitions in a single inserted block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_partitions_per_insert_block MdbClickhouseUser#max_partitions_per_insert_block}
  */
  readonly maxPartitionsPerInsertBlock?: number;
  /**
  * The maximum part of a query that can be taken to RAM for parsing with the SQL parser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_query_size MdbClickhouseUser#max_query_size}
  */
  readonly maxQuerySize?: number;
  /**
  * The maximum size of the buffer to read from the filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_read_buffer_size MdbClickhouseUser#max_read_buffer_size}
  */
  readonly maxReadBufferSize?: number;
  /**
  * Max replica delay in milliseconds. If a replica lags more than the set value,this replica is not used and becomes a stale one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_replica_delay_for_distributed_queries MdbClickhouseUser#max_replica_delay_for_distributed_queries}
  */
  readonly maxReplicaDelayForDistributedQueries?: number;
  /**
  * Limits the number of bytes in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_result_bytes MdbClickhouseUser#max_result_bytes}
  */
  readonly maxResultBytes?: number;
  /**
  * Limits the number of rows in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_result_rows MdbClickhouseUser#max_result_rows}
  */
  readonly maxResultRows?: number;
  /**
  * Limits the maximum number of different rows when using DISTINCT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_rows_in_distinct MdbClickhouseUser#max_rows_in_distinct}
  */
  readonly maxRowsInDistinct?: number;
  /**
  * Limit on maximum size of the hash table for JOIN, in rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_rows_in_join MdbClickhouseUser#max_rows_in_join}
  */
  readonly maxRowsInJoin?: number;
  /**
  * Limit on the number of rows in the set resulting from the execution of the IN section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_rows_in_set MdbClickhouseUser#max_rows_in_set}
  */
  readonly maxRowsInSet?: number;
  /**
  * Limits the maximum number of unique keys received from aggregation function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_rows_to_group_by MdbClickhouseUser#max_rows_to_group_by}
  */
  readonly maxRowsToGroupBy?: number;
  /**
  * Limits the maximum number of rows that can be read from a table when running a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_rows_to_read MdbClickhouseUser#max_rows_to_read}
  */
  readonly maxRowsToRead?: number;
  /**
  * Limits the maximum number of rows that can be read from a table for sorting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_rows_to_sort MdbClickhouseUser#max_rows_to_sort}
  */
  readonly maxRowsToSort?: number;
  /**
  * Limits the maximum number of rows that can be passed to a remote server or saved in a temporary table when using GLOBAL IN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_rows_to_transfer MdbClickhouseUser#max_rows_to_transfer}
  */
  readonly maxRowsToTransfer?: number;
  /**
  * Limits the maximum number of temporary columns that must be kept in RAM at the same time when running a query, including constant columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_temporary_columns MdbClickhouseUser#max_temporary_columns}
  */
  readonly maxTemporaryColumns?: number;
  /**
  * The maximum amount of data consumed by temporary files on disk in bytes for all concurrently running queries. Zero means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_temporary_data_on_disk_size_for_query MdbClickhouseUser#max_temporary_data_on_disk_size_for_query}
  */
  readonly maxTemporaryDataOnDiskSizeForQuery?: number;
  /**
  * The maximum amount of data consumed by temporary files on disk in bytes for all concurrently running user queries. Zero means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_temporary_data_on_disk_size_for_user MdbClickhouseUser#max_temporary_data_on_disk_size_for_user}
  */
  readonly maxTemporaryDataOnDiskSizeForUser?: number;
  /**
  * Limits the maximum number of temporary columns that must be kept in RAM at the same time when running a query, excluding constant columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_temporary_non_const_columns MdbClickhouseUser#max_temporary_non_const_columns}
  */
  readonly maxTemporaryNonConstColumns?: number;
  /**
  * The maximum number of query processing threads, excluding threads for retrieving data from remote servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#max_threads MdbClickhouseUser#max_threads}
  */
  readonly maxThreads?: number;
  /**
  * It represents soft memory limit in case when hard limit is reached on user level. This value is used to compute overcommit ratio for the query. Zero means skip the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#memory_overcommit_ratio_denominator MdbClickhouseUser#memory_overcommit_ratio_denominator}
  */
  readonly memoryOvercommitRatioDenominator?: number;
  /**
  * It represents soft memory limit in case when hard limit is reached on global level. This value is used to compute overcommit ratio for the query. Zero means skip the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#memory_overcommit_ratio_denominator_for_user MdbClickhouseUser#memory_overcommit_ratio_denominator_for_user}
  */
  readonly memoryOvercommitRatioDenominatorForUser?: number;
  /**
  * Collect random allocations and deallocations and write them into system.trace_log with 'MemorySample' trace_type. The probability is for every alloc/free regardless to the size of the allocation. Possible values: from 0 to 1. Default: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#memory_profiler_sample_probability MdbClickhouseUser#memory_profiler_sample_probability}
  */
  readonly memoryProfilerSampleProbability?: number;
  /**
  * Memory profiler step (in bytes). If the next query step requires more memory than this parameter specifies, the memory profiler collects the allocating stack trace. Values lower than a few megabytes slow down query processing. Default value: 4194304 (4 MB). Zero means disabled memory profiler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#memory_profiler_step MdbClickhouseUser#memory_profiler_step}
  */
  readonly memoryProfilerStep?: number;
  /**
  * Maximum time thread will wait for memory to be freed in the case of memory overcommit on a user level. If the timeout is reached and memory is not freed, an exception is thrown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#memory_usage_overcommit_max_wait_microseconds MdbClickhouseUser#memory_usage_overcommit_max_wait_microseconds}
  */
  readonly memoryUsageOvercommitMaxWaitMicroseconds?: number;
  /**
  * If ClickHouse should read more than merge_tree_max_bytes_to_use_cache bytes in one query, it doesn’t use the cache of uncompressed blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#merge_tree_max_bytes_to_use_cache MdbClickhouseUser#merge_tree_max_bytes_to_use_cache}
  */
  readonly mergeTreeMaxBytesToUseCache?: number;
  /**
  * If ClickHouse should read more than merge_tree_max_rows_to_use_cache rows in one query, it doesn’t use the cache of uncompressed blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#merge_tree_max_rows_to_use_cache MdbClickhouseUser#merge_tree_max_rows_to_use_cache}
  */
  readonly mergeTreeMaxRowsToUseCache?: number;
  /**
  * If the number of bytes to read from one file of a MergeTree-engine table exceeds merge_tree_min_bytes_for_concurrent_read, then ClickHouse tries to concurrently read from this file in several threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#merge_tree_min_bytes_for_concurrent_read MdbClickhouseUser#merge_tree_min_bytes_for_concurrent_read}
  */
  readonly mergeTreeMinBytesForConcurrentRead?: number;
  /**
  * If the number of rows to be read from a file of a MergeTree table exceeds merge_tree_min_rows_for_concurrent_read then ClickHouse tries to perform a concurrent reading from this file on several threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#merge_tree_min_rows_for_concurrent_read MdbClickhouseUser#merge_tree_min_rows_for_concurrent_read}
  */
  readonly mergeTreeMinRowsForConcurrentRead?: number;
  /**
  * The minimum data volume required for using direct I/O access to the storage disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#min_bytes_to_use_direct_io MdbClickhouseUser#min_bytes_to_use_direct_io}
  */
  readonly minBytesToUseDirectIo?: number;
  /**
  * Minimum count of executing same expression before it is get compiled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#min_count_to_compile_expression MdbClickhouseUser#min_count_to_compile_expression}
  */
  readonly minCountToCompileExpression?: number;
  /**
  * Minimal execution speed in rows per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#min_execution_speed MdbClickhouseUser#min_execution_speed}
  */
  readonly minExecutionSpeed?: number;
  /**
  * Minimal execution speed in bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#min_execution_speed_bytes MdbClickhouseUser#min_execution_speed_bytes}
  */
  readonly minExecutionSpeedBytes?: number;
  /**
  * Sets the minimum number of bytes in the block which can be inserted into a table by an INSERT query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#min_insert_block_size_bytes MdbClickhouseUser#min_insert_block_size_bytes}
  */
  readonly minInsertBlockSizeBytes?: number;
  /**
  * Sets the minimum number of rows in the block which can be inserted into a table by an INSERT query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#min_insert_block_size_rows MdbClickhouseUser#min_insert_block_size_rows}
  */
  readonly minInsertBlockSizeRows?: number;
  /**
  * If the value is true, integers appear in quotes when using JSON* Int64 and UInt64 formats (for compatibility with most JavaScript implementations); otherwise, integers are output without the quotes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#output_format_json_quote_64bit_integers MdbClickhouseUser#output_format_json_quote_64bit_integers}
  */
  readonly outputFormatJsonQuote64BitIntegers?: boolean | cdktf.IResolvable;
  /**
  * Enables +nan, -nan, +inf, -inf outputs in JSON output format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#output_format_json_quote_denormals MdbClickhouseUser#output_format_json_quote_denormals}
  */
  readonly outputFormatJsonQuoteDenormals?: boolean | cdktf.IResolvable;
  /**
  * Enables/disables preferable using the localhost replica when processing distributed queries. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#prefer_localhost_replica MdbClickhouseUser#prefer_localhost_replica}
  */
  readonly preferLocalhostReplica?: boolean | cdktf.IResolvable;
  /**
  * Priority of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#priority MdbClickhouseUser#priority}
  */
  readonly priority?: number;
  /**
  * The maximum number of query results the current user may store in the query cache. 0 means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#query_cache_max_entries MdbClickhouseUser#query_cache_max_entries}
  */
  readonly queryCacheMaxEntries?: number;
  /**
  * The maximum amount of memory (in bytes) the current user may allocate in the query cache. 0 means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#query_cache_max_size_in_bytes MdbClickhouseUser#query_cache_max_size_in_bytes}
  */
  readonly queryCacheMaxSizeInBytes?: number;
  /**
  * Minimum duration in milliseconds a query needs to run for its result to be stored in the query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#query_cache_min_query_duration MdbClickhouseUser#query_cache_min_query_duration}
  */
  readonly queryCacheMinQueryDuration?: number;
  /**
  * Minimum number of times a SELECT query must run before its result is stored in the query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#query_cache_min_query_runs MdbClickhouseUser#query_cache_min_query_runs}
  */
  readonly queryCacheMinQueryRuns?: number;
  /**
  * Controls how the query cache handles **SELECT** queries with non-deterministic functions like rand() or now().
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#query_cache_nondeterministic_function_handling MdbClickhouseUser#query_cache_nondeterministic_function_handling}
  */
  readonly queryCacheNondeterministicFunctionHandling?: string;
  /**
  * If turned on, the result of SELECT queries cached in the query cache can be read by other users. It is not recommended to enable this setting due to security reasons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#query_cache_share_between_users MdbClickhouseUser#query_cache_share_between_users}
  */
  readonly queryCacheShareBetweenUsers?: boolean | cdktf.IResolvable;
  /**
  * Controls how the query cache handles **SELECT** queries against system tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#query_cache_system_table_handling MdbClickhouseUser#query_cache_system_table_handling}
  */
  readonly queryCacheSystemTableHandling?: string;
  /**
  * A string which acts as a label for query cache entries. The same queries with different tags are considered different by the query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#query_cache_tag MdbClickhouseUser#query_cache_tag}
  */
  readonly queryCacheTag?: string;
  /**
  * After this time in seconds entries in the query cache become stale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#query_cache_ttl MdbClickhouseUser#query_cache_ttl}
  */
  readonly queryCacheTtl?: number;
  /**
  * Quota accounting mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#quota_mode MdbClickhouseUser#quota_mode}
  */
  readonly quotaMode?: string;
  /**
  * Sets behaviour on overflow while read. Possible values: * throw - abort query execution, return an error.  * break - stop query execution, return partial result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#read_overflow_mode MdbClickhouseUser#read_overflow_mode}
  */
  readonly readOverflowMode?: string;
  /**
  * Restricts permissions for non-DDL queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#readonly MdbClickhouseUser#readonly}
  */
  readonly readonly?: number;
  /**
  * Receive timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#receive_timeout MdbClickhouseUser#receive_timeout}
  */
  readonly receiveTimeout?: number;
  /**
  * Method of reading data from remote filesystem, one of: `read`, `threadpool`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#remote_filesystem_read_method MdbClickhouseUser#remote_filesystem_read_method}
  */
  readonly remoteFilesystemReadMethod?: string;
  /**
  * Wait mode for asynchronous actions in ALTER queries on replicated tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#replication_alter_partitions_sync MdbClickhouseUser#replication_alter_partitions_sync}
  */
  readonly replicationAlterPartitionsSync?: number;
  /**
  * Sets behaviour on overflow in result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#result_overflow_mode MdbClickhouseUser#result_overflow_mode}
  */
  readonly resultOverflowMode?: string;
  /**
  * Enables or disables adaptive timeouts for S3 requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#s3_use_adaptive_timeouts MdbClickhouseUser#s3_use_adaptive_timeouts}
  */
  readonly s3UseAdaptiveTimeouts?: boolean | cdktf.IResolvable;
  /**
  * Determines the behavior of SELECT queries from replicated tables. If enabled, ClickHouse will terminate a query with error message in case the replica does not have a chunk written with the quorum and will not read the parts that have not yet been written with the quorum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#select_sequential_consistency MdbClickhouseUser#select_sequential_consistency}
  */
  readonly selectSequentialConsistency?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables X-ClickHouse-Progress HTTP response headers in clickhouse-server responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#send_progress_in_http_headers MdbClickhouseUser#send_progress_in_http_headers}
  */
  readonly sendProgressInHttpHeaders?: boolean | cdktf.IResolvable;
  /**
  * Send timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#send_timeout MdbClickhouseUser#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Sets behaviour on overflow in the set resulting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#set_overflow_mode MdbClickhouseUser#set_overflow_mode}
  */
  readonly setOverflowMode?: string;
  /**
  * Enables or disables silent skipping of unavailable shards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#skip_unavailable_shards MdbClickhouseUser#skip_unavailable_shards}
  */
  readonly skipUnavailableShards?: boolean | cdktf.IResolvable;
  /**
  * Sets behaviour on overflow while sort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#sort_overflow_mode MdbClickhouseUser#sort_overflow_mode}
  */
  readonly sortOverflowMode?: string;
  /**
  * Timeout (in seconds) between checks of execution speed. It is checked that execution speed is not less that specified in min_execution_speed parameter. Must be at least 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#timeout_before_checking_execution_speed MdbClickhouseUser#timeout_before_checking_execution_speed}
  */
  readonly timeoutBeforeCheckingExecutionSpeed?: number;
  /**
  * Sets behaviour on overflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#timeout_overflow_mode MdbClickhouseUser#timeout_overflow_mode}
  */
  readonly timeoutOverflowMode?: string;
  /**
  * Sets behaviour on overflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#transfer_overflow_mode MdbClickhouseUser#transfer_overflow_mode}
  */
  readonly transferOverflowMode?: string;
  /**
  * Enables equality of NULL values for IN operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#transform_null_in MdbClickhouseUser#transform_null_in}
  */
  readonly transformNullIn?: boolean | cdktf.IResolvable;
  /**
  * Enables hedged requests logic for remote queries. It allows to establish many connections with different replicas for query. New connection is enabled in case existent connection(s) with replica(s) were not established within hedged_connection_timeout or no data was received within receive_data_timeout. Query uses the first connection which send non empty progress packet (or data packet, if allow_changing_replica_until_first_data_packet); other connections are cancelled. Queries with max_parallel_replicas > 1 are supported. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#use_hedged_requests MdbClickhouseUser#use_hedged_requests}
  */
  readonly useHedgedRequests?: boolean | cdktf.IResolvable;
  /**
  * If turned on, SELECT queries may utilize the query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#use_query_cache MdbClickhouseUser#use_query_cache}
  */
  readonly useQueryCache?: boolean | cdktf.IResolvable;
  /**
  * Whether to use a cache of uncompressed blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#use_uncompressed_cache MdbClickhouseUser#use_uncompressed_cache}
  */
  readonly useUncompressedCache?: boolean | cdktf.IResolvable;
  /**
  * Enables waiting for processing of asynchronous insertion. If enabled, server returns OK only after the data is inserted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#wait_for_async_insert MdbClickhouseUser#wait_for_async_insert}
  */
  readonly waitForAsyncInsert?: boolean | cdktf.IResolvable;
  /**
  * The timeout (in seconds) for waiting for processing of asynchronous insertion. Value must be at least 1000 (1 second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#wait_for_async_insert_timeout MdbClickhouseUser#wait_for_async_insert_timeout}
  */
  readonly waitForAsyncInsertTimeout?: number;
}

export function mdbClickhouseUserSettingsToTerraform(struct?: MdbClickhouseUserSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_http_cors_header: cdktf.booleanToTerraform(struct!.addHttpCorsHeader),
    allow_ddl: cdktf.booleanToTerraform(struct!.allowDdl),
    allow_introspection_functions: cdktf.booleanToTerraform(struct!.allowIntrospectionFunctions),
    allow_suspicious_low_cardinality_types: cdktf.booleanToTerraform(struct!.allowSuspiciousLowCardinalityTypes),
    any_join_distinct_right_table_keys: cdktf.booleanToTerraform(struct!.anyJoinDistinctRightTableKeys),
    async_insert: cdktf.booleanToTerraform(struct!.asyncInsert),
    async_insert_busy_timeout: cdktf.numberToTerraform(struct!.asyncInsertBusyTimeout),
    async_insert_max_data_size: cdktf.numberToTerraform(struct!.asyncInsertMaxDataSize),
    async_insert_stale_timeout: cdktf.numberToTerraform(struct!.asyncInsertStaleTimeout),
    async_insert_threads: cdktf.numberToTerraform(struct!.asyncInsertThreads),
    async_insert_use_adaptive_busy_timeout: cdktf.booleanToTerraform(struct!.asyncInsertUseAdaptiveBusyTimeout),
    cancel_http_readonly_queries_on_client_close: cdktf.booleanToTerraform(struct!.cancelHttpReadonlyQueriesOnClientClose),
    compile_expressions: cdktf.booleanToTerraform(struct!.compileExpressions),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    connect_timeout_with_failover: cdktf.numberToTerraform(struct!.connectTimeoutWithFailover),
    count_distinct_implementation: cdktf.stringToTerraform(struct!.countDistinctImplementation),
    data_type_default_nullable: cdktf.booleanToTerraform(struct!.dataTypeDefaultNullable),
    date_time_input_format: cdktf.stringToTerraform(struct!.dateTimeInputFormat),
    date_time_output_format: cdktf.stringToTerraform(struct!.dateTimeOutputFormat),
    deduplicate_blocks_in_dependent_materialized_views: cdktf.booleanToTerraform(struct!.deduplicateBlocksInDependentMaterializedViews),
    distinct_overflow_mode: cdktf.stringToTerraform(struct!.distinctOverflowMode),
    distributed_aggregation_memory_efficient: cdktf.booleanToTerraform(struct!.distributedAggregationMemoryEfficient),
    distributed_ddl_output_mode: cdktf.stringToTerraform(struct!.distributedDdlOutputMode),
    distributed_ddl_task_timeout: cdktf.numberToTerraform(struct!.distributedDdlTaskTimeout),
    distributed_product_mode: cdktf.stringToTerraform(struct!.distributedProductMode),
    do_not_merge_across_partitions_select_final: cdktf.booleanToTerraform(struct!.doNotMergeAcrossPartitionsSelectFinal),
    empty_result_for_aggregation_by_empty_set: cdktf.booleanToTerraform(struct!.emptyResultForAggregationByEmptySet),
    enable_analyzer: cdktf.booleanToTerraform(struct!.enableAnalyzer),
    enable_http_compression: cdktf.booleanToTerraform(struct!.enableHttpCompression),
    enable_reads_from_query_cache: cdktf.booleanToTerraform(struct!.enableReadsFromQueryCache),
    enable_writes_to_query_cache: cdktf.booleanToTerraform(struct!.enableWritesToQueryCache),
    fallback_to_stale_replicas_for_distributed_queries: cdktf.booleanToTerraform(struct!.fallbackToStaleReplicasForDistributedQueries),
    flatten_nested: cdktf.booleanToTerraform(struct!.flattenNested),
    force_index_by_date: cdktf.booleanToTerraform(struct!.forceIndexByDate),
    force_primary_key: cdktf.booleanToTerraform(struct!.forcePrimaryKey),
    format_avro_schema_registry_url: cdktf.stringToTerraform(struct!.formatAvroSchemaRegistryUrl),
    format_regexp: cdktf.stringToTerraform(struct!.formatRegexp),
    format_regexp_skip_unmatched: cdktf.booleanToTerraform(struct!.formatRegexpSkipUnmatched),
    group_by_overflow_mode: cdktf.stringToTerraform(struct!.groupByOverflowMode),
    group_by_two_level_threshold: cdktf.numberToTerraform(struct!.groupByTwoLevelThreshold),
    group_by_two_level_threshold_bytes: cdktf.numberToTerraform(struct!.groupByTwoLevelThresholdBytes),
    hedged_connection_timeout_ms: cdktf.numberToTerraform(struct!.hedgedConnectionTimeoutMs),
    http_connection_timeout: cdktf.numberToTerraform(struct!.httpConnectionTimeout),
    http_headers_progress_interval: cdktf.numberToTerraform(struct!.httpHeadersProgressInterval),
    http_max_field_name_size: cdktf.numberToTerraform(struct!.httpMaxFieldNameSize),
    http_max_field_value_size: cdktf.numberToTerraform(struct!.httpMaxFieldValueSize),
    http_receive_timeout: cdktf.numberToTerraform(struct!.httpReceiveTimeout),
    http_send_timeout: cdktf.numberToTerraform(struct!.httpSendTimeout),
    idle_connection_timeout: cdktf.numberToTerraform(struct!.idleConnectionTimeout),
    ignore_materialized_views_with_dropped_target_table: cdktf.booleanToTerraform(struct!.ignoreMaterializedViewsWithDroppedTargetTable),
    input_format_defaults_for_omitted_fields: cdktf.booleanToTerraform(struct!.inputFormatDefaultsForOmittedFields),
    input_format_import_nested_json: cdktf.booleanToTerraform(struct!.inputFormatImportNestedJson),
    input_format_null_as_default: cdktf.booleanToTerraform(struct!.inputFormatNullAsDefault),
    input_format_parallel_parsing: cdktf.booleanToTerraform(struct!.inputFormatParallelParsing),
    input_format_values_interpret_expressions: cdktf.booleanToTerraform(struct!.inputFormatValuesInterpretExpressions),
    input_format_with_names_use_header: cdktf.booleanToTerraform(struct!.inputFormatWithNamesUseHeader),
    insert_keeper_max_retries: cdktf.numberToTerraform(struct!.insertKeeperMaxRetries),
    insert_null_as_default: cdktf.booleanToTerraform(struct!.insertNullAsDefault),
    insert_quorum: cdktf.numberToTerraform(struct!.insertQuorum),
    insert_quorum_parallel: cdktf.booleanToTerraform(struct!.insertQuorumParallel),
    insert_quorum_timeout: cdktf.numberToTerraform(struct!.insertQuorumTimeout),
    join_algorithm: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.joinAlgorithm),
    join_overflow_mode: cdktf.stringToTerraform(struct!.joinOverflowMode),
    join_use_nulls: cdktf.booleanToTerraform(struct!.joinUseNulls),
    joined_subquery_requires_alias: cdktf.booleanToTerraform(struct!.joinedSubqueryRequiresAlias),
    load_balancing: cdktf.stringToTerraform(struct!.loadBalancing),
    local_filesystem_read_method: cdktf.stringToTerraform(struct!.localFilesystemReadMethod),
    log_processors_profiles: cdktf.booleanToTerraform(struct!.logProcessorsProfiles),
    log_queries_probability: cdktf.numberToTerraform(struct!.logQueriesProbability),
    log_query_threads: cdktf.booleanToTerraform(struct!.logQueryThreads),
    log_query_views: cdktf.booleanToTerraform(struct!.logQueryViews),
    low_cardinality_allow_in_native_format: cdktf.booleanToTerraform(struct!.lowCardinalityAllowInNativeFormat),
    max_ast_depth: cdktf.numberToTerraform(struct!.maxAstDepth),
    max_ast_elements: cdktf.numberToTerraform(struct!.maxAstElements),
    max_block_size: cdktf.numberToTerraform(struct!.maxBlockSize),
    max_bytes_before_external_group_by: cdktf.numberToTerraform(struct!.maxBytesBeforeExternalGroupBy),
    max_bytes_before_external_sort: cdktf.numberToTerraform(struct!.maxBytesBeforeExternalSort),
    max_bytes_in_distinct: cdktf.numberToTerraform(struct!.maxBytesInDistinct),
    max_bytes_in_join: cdktf.numberToTerraform(struct!.maxBytesInJoin),
    max_bytes_in_set: cdktf.numberToTerraform(struct!.maxBytesInSet),
    max_bytes_to_read: cdktf.numberToTerraform(struct!.maxBytesToRead),
    max_bytes_to_sort: cdktf.numberToTerraform(struct!.maxBytesToSort),
    max_bytes_to_transfer: cdktf.numberToTerraform(struct!.maxBytesToTransfer),
    max_columns_to_read: cdktf.numberToTerraform(struct!.maxColumnsToRead),
    max_concurrent_queries_for_user: cdktf.numberToTerraform(struct!.maxConcurrentQueriesForUser),
    max_execution_time: cdktf.numberToTerraform(struct!.maxExecutionTime),
    max_expanded_ast_elements: cdktf.numberToTerraform(struct!.maxExpandedAstElements),
    max_final_threads: cdktf.numberToTerraform(struct!.maxFinalThreads),
    max_http_get_redirects: cdktf.numberToTerraform(struct!.maxHttpGetRedirects),
    max_insert_block_size: cdktf.numberToTerraform(struct!.maxInsertBlockSize),
    max_insert_threads: cdktf.numberToTerraform(struct!.maxInsertThreads),
    max_memory_usage: cdktf.numberToTerraform(struct!.maxMemoryUsage),
    max_memory_usage_for_user: cdktf.numberToTerraform(struct!.maxMemoryUsageForUser),
    max_network_bandwidth: cdktf.numberToTerraform(struct!.maxNetworkBandwidth),
    max_network_bandwidth_for_user: cdktf.numberToTerraform(struct!.maxNetworkBandwidthForUser),
    max_parser_depth: cdktf.numberToTerraform(struct!.maxParserDepth),
    max_partitions_per_insert_block: cdktf.numberToTerraform(struct!.maxPartitionsPerInsertBlock),
    max_query_size: cdktf.numberToTerraform(struct!.maxQuerySize),
    max_read_buffer_size: cdktf.numberToTerraform(struct!.maxReadBufferSize),
    max_replica_delay_for_distributed_queries: cdktf.numberToTerraform(struct!.maxReplicaDelayForDistributedQueries),
    max_result_bytes: cdktf.numberToTerraform(struct!.maxResultBytes),
    max_result_rows: cdktf.numberToTerraform(struct!.maxResultRows),
    max_rows_in_distinct: cdktf.numberToTerraform(struct!.maxRowsInDistinct),
    max_rows_in_join: cdktf.numberToTerraform(struct!.maxRowsInJoin),
    max_rows_in_set: cdktf.numberToTerraform(struct!.maxRowsInSet),
    max_rows_to_group_by: cdktf.numberToTerraform(struct!.maxRowsToGroupBy),
    max_rows_to_read: cdktf.numberToTerraform(struct!.maxRowsToRead),
    max_rows_to_sort: cdktf.numberToTerraform(struct!.maxRowsToSort),
    max_rows_to_transfer: cdktf.numberToTerraform(struct!.maxRowsToTransfer),
    max_temporary_columns: cdktf.numberToTerraform(struct!.maxTemporaryColumns),
    max_temporary_data_on_disk_size_for_query: cdktf.numberToTerraform(struct!.maxTemporaryDataOnDiskSizeForQuery),
    max_temporary_data_on_disk_size_for_user: cdktf.numberToTerraform(struct!.maxTemporaryDataOnDiskSizeForUser),
    max_temporary_non_const_columns: cdktf.numberToTerraform(struct!.maxTemporaryNonConstColumns),
    max_threads: cdktf.numberToTerraform(struct!.maxThreads),
    memory_overcommit_ratio_denominator: cdktf.numberToTerraform(struct!.memoryOvercommitRatioDenominator),
    memory_overcommit_ratio_denominator_for_user: cdktf.numberToTerraform(struct!.memoryOvercommitRatioDenominatorForUser),
    memory_profiler_sample_probability: cdktf.numberToTerraform(struct!.memoryProfilerSampleProbability),
    memory_profiler_step: cdktf.numberToTerraform(struct!.memoryProfilerStep),
    memory_usage_overcommit_max_wait_microseconds: cdktf.numberToTerraform(struct!.memoryUsageOvercommitMaxWaitMicroseconds),
    merge_tree_max_bytes_to_use_cache: cdktf.numberToTerraform(struct!.mergeTreeMaxBytesToUseCache),
    merge_tree_max_rows_to_use_cache: cdktf.numberToTerraform(struct!.mergeTreeMaxRowsToUseCache),
    merge_tree_min_bytes_for_concurrent_read: cdktf.numberToTerraform(struct!.mergeTreeMinBytesForConcurrentRead),
    merge_tree_min_rows_for_concurrent_read: cdktf.numberToTerraform(struct!.mergeTreeMinRowsForConcurrentRead),
    min_bytes_to_use_direct_io: cdktf.numberToTerraform(struct!.minBytesToUseDirectIo),
    min_count_to_compile_expression: cdktf.numberToTerraform(struct!.minCountToCompileExpression),
    min_execution_speed: cdktf.numberToTerraform(struct!.minExecutionSpeed),
    min_execution_speed_bytes: cdktf.numberToTerraform(struct!.minExecutionSpeedBytes),
    min_insert_block_size_bytes: cdktf.numberToTerraform(struct!.minInsertBlockSizeBytes),
    min_insert_block_size_rows: cdktf.numberToTerraform(struct!.minInsertBlockSizeRows),
    output_format_json_quote_64bit_integers: cdktf.booleanToTerraform(struct!.outputFormatJsonQuote64BitIntegers),
    output_format_json_quote_denormals: cdktf.booleanToTerraform(struct!.outputFormatJsonQuoteDenormals),
    prefer_localhost_replica: cdktf.booleanToTerraform(struct!.preferLocalhostReplica),
    priority: cdktf.numberToTerraform(struct!.priority),
    query_cache_max_entries: cdktf.numberToTerraform(struct!.queryCacheMaxEntries),
    query_cache_max_size_in_bytes: cdktf.numberToTerraform(struct!.queryCacheMaxSizeInBytes),
    query_cache_min_query_duration: cdktf.numberToTerraform(struct!.queryCacheMinQueryDuration),
    query_cache_min_query_runs: cdktf.numberToTerraform(struct!.queryCacheMinQueryRuns),
    query_cache_nondeterministic_function_handling: cdktf.stringToTerraform(struct!.queryCacheNondeterministicFunctionHandling),
    query_cache_share_between_users: cdktf.booleanToTerraform(struct!.queryCacheShareBetweenUsers),
    query_cache_system_table_handling: cdktf.stringToTerraform(struct!.queryCacheSystemTableHandling),
    query_cache_tag: cdktf.stringToTerraform(struct!.queryCacheTag),
    query_cache_ttl: cdktf.numberToTerraform(struct!.queryCacheTtl),
    quota_mode: cdktf.stringToTerraform(struct!.quotaMode),
    read_overflow_mode: cdktf.stringToTerraform(struct!.readOverflowMode),
    readonly: cdktf.numberToTerraform(struct!.readonly),
    receive_timeout: cdktf.numberToTerraform(struct!.receiveTimeout),
    remote_filesystem_read_method: cdktf.stringToTerraform(struct!.remoteFilesystemReadMethod),
    replication_alter_partitions_sync: cdktf.numberToTerraform(struct!.replicationAlterPartitionsSync),
    result_overflow_mode: cdktf.stringToTerraform(struct!.resultOverflowMode),
    s3_use_adaptive_timeouts: cdktf.booleanToTerraform(struct!.s3UseAdaptiveTimeouts),
    select_sequential_consistency: cdktf.booleanToTerraform(struct!.selectSequentialConsistency),
    send_progress_in_http_headers: cdktf.booleanToTerraform(struct!.sendProgressInHttpHeaders),
    send_timeout: cdktf.numberToTerraform(struct!.sendTimeout),
    set_overflow_mode: cdktf.stringToTerraform(struct!.setOverflowMode),
    skip_unavailable_shards: cdktf.booleanToTerraform(struct!.skipUnavailableShards),
    sort_overflow_mode: cdktf.stringToTerraform(struct!.sortOverflowMode),
    timeout_before_checking_execution_speed: cdktf.numberToTerraform(struct!.timeoutBeforeCheckingExecutionSpeed),
    timeout_overflow_mode: cdktf.stringToTerraform(struct!.timeoutOverflowMode),
    transfer_overflow_mode: cdktf.stringToTerraform(struct!.transferOverflowMode),
    transform_null_in: cdktf.booleanToTerraform(struct!.transformNullIn),
    use_hedged_requests: cdktf.booleanToTerraform(struct!.useHedgedRequests),
    use_query_cache: cdktf.booleanToTerraform(struct!.useQueryCache),
    use_uncompressed_cache: cdktf.booleanToTerraform(struct!.useUncompressedCache),
    wait_for_async_insert: cdktf.booleanToTerraform(struct!.waitForAsyncInsert),
    wait_for_async_insert_timeout: cdktf.numberToTerraform(struct!.waitForAsyncInsertTimeout),
  }
}


export function mdbClickhouseUserSettingsToHclTerraform(struct?: MdbClickhouseUserSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_http_cors_header: {
      value: cdktf.booleanToHclTerraform(struct!.addHttpCorsHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_ddl: {
      value: cdktf.booleanToHclTerraform(struct!.allowDdl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_introspection_functions: {
      value: cdktf.booleanToHclTerraform(struct!.allowIntrospectionFunctions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_suspicious_low_cardinality_types: {
      value: cdktf.booleanToHclTerraform(struct!.allowSuspiciousLowCardinalityTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_join_distinct_right_table_keys: {
      value: cdktf.booleanToHclTerraform(struct!.anyJoinDistinctRightTableKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    async_insert: {
      value: cdktf.booleanToHclTerraform(struct!.asyncInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    async_insert_busy_timeout: {
      value: cdktf.numberToHclTerraform(struct!.asyncInsertBusyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    async_insert_max_data_size: {
      value: cdktf.numberToHclTerraform(struct!.asyncInsertMaxDataSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    async_insert_stale_timeout: {
      value: cdktf.numberToHclTerraform(struct!.asyncInsertStaleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    async_insert_threads: {
      value: cdktf.numberToHclTerraform(struct!.asyncInsertThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    async_insert_use_adaptive_busy_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.asyncInsertUseAdaptiveBusyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cancel_http_readonly_queries_on_client_close: {
      value: cdktf.booleanToHclTerraform(struct!.cancelHttpReadonlyQueriesOnClientClose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compile_expressions: {
      value: cdktf.booleanToHclTerraform(struct!.compileExpressions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_timeout_with_failover: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeoutWithFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    count_distinct_implementation: {
      value: cdktf.stringToHclTerraform(struct!.countDistinctImplementation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type_default_nullable: {
      value: cdktf.booleanToHclTerraform(struct!.dataTypeDefaultNullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    date_time_input_format: {
      value: cdktf.stringToHclTerraform(struct!.dateTimeInputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_time_output_format: {
      value: cdktf.stringToHclTerraform(struct!.dateTimeOutputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deduplicate_blocks_in_dependent_materialized_views: {
      value: cdktf.booleanToHclTerraform(struct!.deduplicateBlocksInDependentMaterializedViews),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    distinct_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.distinctOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distributed_aggregation_memory_efficient: {
      value: cdktf.booleanToHclTerraform(struct!.distributedAggregationMemoryEfficient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    distributed_ddl_output_mode: {
      value: cdktf.stringToHclTerraform(struct!.distributedDdlOutputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distributed_ddl_task_timeout: {
      value: cdktf.numberToHclTerraform(struct!.distributedDdlTaskTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distributed_product_mode: {
      value: cdktf.stringToHclTerraform(struct!.distributedProductMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    do_not_merge_across_partitions_select_final: {
      value: cdktf.booleanToHclTerraform(struct!.doNotMergeAcrossPartitionsSelectFinal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    empty_result_for_aggregation_by_empty_set: {
      value: cdktf.booleanToHclTerraform(struct!.emptyResultForAggregationByEmptySet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_analyzer: {
      value: cdktf.booleanToHclTerraform(struct!.enableAnalyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_http_compression: {
      value: cdktf.booleanToHclTerraform(struct!.enableHttpCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_reads_from_query_cache: {
      value: cdktf.booleanToHclTerraform(struct!.enableReadsFromQueryCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_writes_to_query_cache: {
      value: cdktf.booleanToHclTerraform(struct!.enableWritesToQueryCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_to_stale_replicas_for_distributed_queries: {
      value: cdktf.booleanToHclTerraform(struct!.fallbackToStaleReplicasForDistributedQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flatten_nested: {
      value: cdktf.booleanToHclTerraform(struct!.flattenNested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_index_by_date: {
      value: cdktf.booleanToHclTerraform(struct!.forceIndexByDate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.forcePrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format_avro_schema_registry_url: {
      value: cdktf.stringToHclTerraform(struct!.formatAvroSchemaRegistryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_regexp: {
      value: cdktf.stringToHclTerraform(struct!.formatRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_regexp_skip_unmatched: {
      value: cdktf.booleanToHclTerraform(struct!.formatRegexpSkipUnmatched),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_by_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.groupByOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_two_level_threshold: {
      value: cdktf.numberToHclTerraform(struct!.groupByTwoLevelThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_by_two_level_threshold_bytes: {
      value: cdktf.numberToHclTerraform(struct!.groupByTwoLevelThresholdBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hedged_connection_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.hedgedConnectionTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.httpConnectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_headers_progress_interval: {
      value: cdktf.numberToHclTerraform(struct!.httpHeadersProgressInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_max_field_name_size: {
      value: cdktf.numberToHclTerraform(struct!.httpMaxFieldNameSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_max_field_value_size: {
      value: cdktf.numberToHclTerraform(struct!.httpMaxFieldValueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_receive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.httpReceiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_send_timeout: {
      value: cdktf.numberToHclTerraform(struct!.httpSendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleConnectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_materialized_views_with_dropped_target_table: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMaterializedViewsWithDroppedTargetTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_defaults_for_omitted_fields: {
      value: cdktf.booleanToHclTerraform(struct!.inputFormatDefaultsForOmittedFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_import_nested_json: {
      value: cdktf.booleanToHclTerraform(struct!.inputFormatImportNestedJson),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_null_as_default: {
      value: cdktf.booleanToHclTerraform(struct!.inputFormatNullAsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_parallel_parsing: {
      value: cdktf.booleanToHclTerraform(struct!.inputFormatParallelParsing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_values_interpret_expressions: {
      value: cdktf.booleanToHclTerraform(struct!.inputFormatValuesInterpretExpressions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_with_names_use_header: {
      value: cdktf.booleanToHclTerraform(struct!.inputFormatWithNamesUseHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insert_keeper_max_retries: {
      value: cdktf.numberToHclTerraform(struct!.insertKeeperMaxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_null_as_default: {
      value: cdktf.booleanToHclTerraform(struct!.insertNullAsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insert_quorum: {
      value: cdktf.numberToHclTerraform(struct!.insertQuorum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_quorum_parallel: {
      value: cdktf.booleanToHclTerraform(struct!.insertQuorumParallel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insert_quorum_timeout: {
      value: cdktf.numberToHclTerraform(struct!.insertQuorumTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    join_algorithm: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.joinAlgorithm),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    join_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.joinOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_use_nulls: {
      value: cdktf.booleanToHclTerraform(struct!.joinUseNulls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    joined_subquery_requires_alias: {
      value: cdktf.booleanToHclTerraform(struct!.joinedSubqueryRequiresAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balancing: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_filesystem_read_method: {
      value: cdktf.stringToHclTerraform(struct!.localFilesystemReadMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_processors_profiles: {
      value: cdktf.booleanToHclTerraform(struct!.logProcessorsProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_queries_probability: {
      value: cdktf.numberToHclTerraform(struct!.logQueriesProbability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_query_threads: {
      value: cdktf.booleanToHclTerraform(struct!.logQueryThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_query_views: {
      value: cdktf.booleanToHclTerraform(struct!.logQueryViews),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_cardinality_allow_in_native_format: {
      value: cdktf.booleanToHclTerraform(struct!.lowCardinalityAllowInNativeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_ast_depth: {
      value: cdktf.numberToHclTerraform(struct!.maxAstDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ast_elements: {
      value: cdktf.numberToHclTerraform(struct!.maxAstElements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_block_size: {
      value: cdktf.numberToHclTerraform(struct!.maxBlockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_before_external_group_by: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesBeforeExternalGroupBy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_before_external_sort: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesBeforeExternalSort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_in_distinct: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesInDistinct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_in_join: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesInJoin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_in_set: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesInSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_to_read: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesToRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_to_sort: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesToSort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_to_transfer: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesToTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_columns_to_read: {
      value: cdktf.numberToHclTerraform(struct!.maxColumnsToRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_queries_for_user: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentQueriesForUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_execution_time: {
      value: cdktf.numberToHclTerraform(struct!.maxExecutionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_expanded_ast_elements: {
      value: cdktf.numberToHclTerraform(struct!.maxExpandedAstElements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_final_threads: {
      value: cdktf.numberToHclTerraform(struct!.maxFinalThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_http_get_redirects: {
      value: cdktf.numberToHclTerraform(struct!.maxHttpGetRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_insert_block_size: {
      value: cdktf.numberToHclTerraform(struct!.maxInsertBlockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_insert_threads: {
      value: cdktf.numberToHclTerraform(struct!.maxInsertThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_memory_usage: {
      value: cdktf.numberToHclTerraform(struct!.maxMemoryUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_memory_usage_for_user: {
      value: cdktf.numberToHclTerraform(struct!.maxMemoryUsageForUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_network_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.maxNetworkBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_network_bandwidth_for_user: {
      value: cdktf.numberToHclTerraform(struct!.maxNetworkBandwidthForUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parser_depth: {
      value: cdktf.numberToHclTerraform(struct!.maxParserDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_partitions_per_insert_block: {
      value: cdktf.numberToHclTerraform(struct!.maxPartitionsPerInsertBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_query_size: {
      value: cdktf.numberToHclTerraform(struct!.maxQuerySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_read_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.maxReadBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_replica_delay_for_distributed_queries: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicaDelayForDistributedQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_result_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxResultBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_result_rows: {
      value: cdktf.numberToHclTerraform(struct!.maxResultRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_in_distinct: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsInDistinct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_in_join: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsInJoin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_in_set: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsInSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_to_group_by: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsToGroupBy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_to_read: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsToRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_to_sort: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsToSort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_to_transfer: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsToTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_temporary_columns: {
      value: cdktf.numberToHclTerraform(struct!.maxTemporaryColumns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_temporary_data_on_disk_size_for_query: {
      value: cdktf.numberToHclTerraform(struct!.maxTemporaryDataOnDiskSizeForQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_temporary_data_on_disk_size_for_user: {
      value: cdktf.numberToHclTerraform(struct!.maxTemporaryDataOnDiskSizeForUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_temporary_non_const_columns: {
      value: cdktf.numberToHclTerraform(struct!.maxTemporaryNonConstColumns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_threads: {
      value: cdktf.numberToHclTerraform(struct!.maxThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_overcommit_ratio_denominator: {
      value: cdktf.numberToHclTerraform(struct!.memoryOvercommitRatioDenominator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_overcommit_ratio_denominator_for_user: {
      value: cdktf.numberToHclTerraform(struct!.memoryOvercommitRatioDenominatorForUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_profiler_sample_probability: {
      value: cdktf.numberToHclTerraform(struct!.memoryProfilerSampleProbability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_profiler_step: {
      value: cdktf.numberToHclTerraform(struct!.memoryProfilerStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_usage_overcommit_max_wait_microseconds: {
      value: cdktf.numberToHclTerraform(struct!.memoryUsageOvercommitMaxWaitMicroseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merge_tree_max_bytes_to_use_cache: {
      value: cdktf.numberToHclTerraform(struct!.mergeTreeMaxBytesToUseCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merge_tree_max_rows_to_use_cache: {
      value: cdktf.numberToHclTerraform(struct!.mergeTreeMaxRowsToUseCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merge_tree_min_bytes_for_concurrent_read: {
      value: cdktf.numberToHclTerraform(struct!.mergeTreeMinBytesForConcurrentRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merge_tree_min_rows_for_concurrent_read: {
      value: cdktf.numberToHclTerraform(struct!.mergeTreeMinRowsForConcurrentRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_bytes_to_use_direct_io: {
      value: cdktf.numberToHclTerraform(struct!.minBytesToUseDirectIo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count_to_compile_expression: {
      value: cdktf.numberToHclTerraform(struct!.minCountToCompileExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_execution_speed: {
      value: cdktf.numberToHclTerraform(struct!.minExecutionSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_execution_speed_bytes: {
      value: cdktf.numberToHclTerraform(struct!.minExecutionSpeedBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_insert_block_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.minInsertBlockSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_insert_block_size_rows: {
      value: cdktf.numberToHclTerraform(struct!.minInsertBlockSizeRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_format_json_quote_64bit_integers: {
      value: cdktf.booleanToHclTerraform(struct!.outputFormatJsonQuote64BitIntegers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_format_json_quote_denormals: {
      value: cdktf.booleanToHclTerraform(struct!.outputFormatJsonQuoteDenormals),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefer_localhost_replica: {
      value: cdktf.booleanToHclTerraform(struct!.preferLocalhostReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_cache_max_entries: {
      value: cdktf.numberToHclTerraform(struct!.queryCacheMaxEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_cache_max_size_in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.queryCacheMaxSizeInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_cache_min_query_duration: {
      value: cdktf.numberToHclTerraform(struct!.queryCacheMinQueryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_cache_min_query_runs: {
      value: cdktf.numberToHclTerraform(struct!.queryCacheMinQueryRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_cache_nondeterministic_function_handling: {
      value: cdktf.stringToHclTerraform(struct!.queryCacheNondeterministicFunctionHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_cache_share_between_users: {
      value: cdktf.booleanToHclTerraform(struct!.queryCacheShareBetweenUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_cache_system_table_handling: {
      value: cdktf.stringToHclTerraform(struct!.queryCacheSystemTableHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_cache_tag: {
      value: cdktf.stringToHclTerraform(struct!.queryCacheTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.queryCacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quota_mode: {
      value: cdktf.stringToHclTerraform(struct!.quotaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.readOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readonly: {
      value: cdktf.numberToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.receiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_filesystem_read_method: {
      value: cdktf.stringToHclTerraform(struct!.remoteFilesystemReadMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_alter_partitions_sync: {
      value: cdktf.numberToHclTerraform(struct!.replicationAlterPartitionsSync),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    result_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.resultOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_use_adaptive_timeouts: {
      value: cdktf.booleanToHclTerraform(struct!.s3UseAdaptiveTimeouts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    select_sequential_consistency: {
      value: cdktf.booleanToHclTerraform(struct!.selectSequentialConsistency),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_progress_in_http_headers: {
      value: cdktf.booleanToHclTerraform(struct!.sendProgressInHttpHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.setOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_unavailable_shards: {
      value: cdktf.booleanToHclTerraform(struct!.skipUnavailableShards),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.sortOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_before_checking_execution_speed: {
      value: cdktf.numberToHclTerraform(struct!.timeoutBeforeCheckingExecutionSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.timeoutOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transfer_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.transferOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transform_null_in: {
      value: cdktf.booleanToHclTerraform(struct!.transformNullIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_hedged_requests: {
      value: cdktf.booleanToHclTerraform(struct!.useHedgedRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_query_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useQueryCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_uncompressed_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useUncompressedCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_for_async_insert: {
      value: cdktf.booleanToHclTerraform(struct!.waitForAsyncInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_for_async_insert_timeout: {
      value: cdktf.numberToHclTerraform(struct!.waitForAsyncInsertTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbClickhouseUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbClickhouseUserSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHttpCorsHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttpCorsHeader = this._addHttpCorsHeader;
    }
    if (this._allowDdl !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDdl = this._allowDdl;
    }
    if (this._allowIntrospectionFunctions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIntrospectionFunctions = this._allowIntrospectionFunctions;
    }
    if (this._allowSuspiciousLowCardinalityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSuspiciousLowCardinalityTypes = this._allowSuspiciousLowCardinalityTypes;
    }
    if (this._anyJoinDistinctRightTableKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyJoinDistinctRightTableKeys = this._anyJoinDistinctRightTableKeys;
    }
    if (this._asyncInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInsert = this._asyncInsert;
    }
    if (this._asyncInsertBusyTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInsertBusyTimeout = this._asyncInsertBusyTimeout;
    }
    if (this._asyncInsertMaxDataSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInsertMaxDataSize = this._asyncInsertMaxDataSize;
    }
    if (this._asyncInsertStaleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInsertStaleTimeout = this._asyncInsertStaleTimeout;
    }
    if (this._asyncInsertThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInsertThreads = this._asyncInsertThreads;
    }
    if (this._asyncInsertUseAdaptiveBusyTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInsertUseAdaptiveBusyTimeout = this._asyncInsertUseAdaptiveBusyTimeout;
    }
    if (this._cancelHttpReadonlyQueriesOnClientClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelHttpReadonlyQueriesOnClientClose = this._cancelHttpReadonlyQueriesOnClientClose;
    }
    if (this._compileExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.compileExpressions = this._compileExpressions;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._connectTimeoutWithFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeoutWithFailover = this._connectTimeoutWithFailover;
    }
    if (this._countDistinctImplementation !== undefined) {
      hasAnyValues = true;
      internalValueResult.countDistinctImplementation = this._countDistinctImplementation;
    }
    if (this._dataTypeDefaultNullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTypeDefaultNullable = this._dataTypeDefaultNullable;
    }
    if (this._dateTimeInputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeInputFormat = this._dateTimeInputFormat;
    }
    if (this._dateTimeOutputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeOutputFormat = this._dateTimeOutputFormat;
    }
    if (this._deduplicateBlocksInDependentMaterializedViews !== undefined) {
      hasAnyValues = true;
      internalValueResult.deduplicateBlocksInDependentMaterializedViews = this._deduplicateBlocksInDependentMaterializedViews;
    }
    if (this._distinctOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinctOverflowMode = this._distinctOverflowMode;
    }
    if (this._distributedAggregationMemoryEfficient !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributedAggregationMemoryEfficient = this._distributedAggregationMemoryEfficient;
    }
    if (this._distributedDdlOutputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributedDdlOutputMode = this._distributedDdlOutputMode;
    }
    if (this._distributedDdlTaskTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributedDdlTaskTimeout = this._distributedDdlTaskTimeout;
    }
    if (this._distributedProductMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributedProductMode = this._distributedProductMode;
    }
    if (this._doNotMergeAcrossPartitionsSelectFinal !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotMergeAcrossPartitionsSelectFinal = this._doNotMergeAcrossPartitionsSelectFinal;
    }
    if (this._emptyResultForAggregationByEmptySet !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyResultForAggregationByEmptySet = this._emptyResultForAggregationByEmptySet;
    }
    if (this._enableAnalyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAnalyzer = this._enableAnalyzer;
    }
    if (this._enableHttpCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttpCompression = this._enableHttpCompression;
    }
    if (this._enableReadsFromQueryCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableReadsFromQueryCache = this._enableReadsFromQueryCache;
    }
    if (this._enableWritesToQueryCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWritesToQueryCache = this._enableWritesToQueryCache;
    }
    if (this._fallbackToStaleReplicasForDistributedQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackToStaleReplicasForDistributedQueries = this._fallbackToStaleReplicasForDistributedQueries;
    }
    if (this._flattenNested !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattenNested = this._flattenNested;
    }
    if (this._forceIndexByDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceIndexByDate = this._forceIndexByDate;
    }
    if (this._forcePrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcePrimaryKey = this._forcePrimaryKey;
    }
    if (this._formatAvroSchemaRegistryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatAvroSchemaRegistryUrl = this._formatAvroSchemaRegistryUrl;
    }
    if (this._formatRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatRegexp = this._formatRegexp;
    }
    if (this._formatRegexpSkipUnmatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatRegexpSkipUnmatched = this._formatRegexpSkipUnmatched;
    }
    if (this._groupByOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByOverflowMode = this._groupByOverflowMode;
    }
    if (this._groupByTwoLevelThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByTwoLevelThreshold = this._groupByTwoLevelThreshold;
    }
    if (this._groupByTwoLevelThresholdBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByTwoLevelThresholdBytes = this._groupByTwoLevelThresholdBytes;
    }
    if (this._hedgedConnectionTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.hedgedConnectionTimeoutMs = this._hedgedConnectionTimeoutMs;
    }
    if (this._httpConnectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConnectionTimeout = this._httpConnectionTimeout;
    }
    if (this._httpHeadersProgressInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeadersProgressInterval = this._httpHeadersProgressInterval;
    }
    if (this._httpMaxFieldNameSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaxFieldNameSize = this._httpMaxFieldNameSize;
    }
    if (this._httpMaxFieldValueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaxFieldValueSize = this._httpMaxFieldValueSize;
    }
    if (this._httpReceiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReceiveTimeout = this._httpReceiveTimeout;
    }
    if (this._httpSendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSendTimeout = this._httpSendTimeout;
    }
    if (this._idleConnectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleConnectionTimeout = this._idleConnectionTimeout;
    }
    if (this._ignoreMaterializedViewsWithDroppedTargetTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMaterializedViewsWithDroppedTargetTable = this._ignoreMaterializedViewsWithDroppedTargetTable;
    }
    if (this._inputFormatDefaultsForOmittedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatDefaultsForOmittedFields = this._inputFormatDefaultsForOmittedFields;
    }
    if (this._inputFormatImportNestedJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatImportNestedJson = this._inputFormatImportNestedJson;
    }
    if (this._inputFormatNullAsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatNullAsDefault = this._inputFormatNullAsDefault;
    }
    if (this._inputFormatParallelParsing !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatParallelParsing = this._inputFormatParallelParsing;
    }
    if (this._inputFormatValuesInterpretExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatValuesInterpretExpressions = this._inputFormatValuesInterpretExpressions;
    }
    if (this._inputFormatWithNamesUseHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatWithNamesUseHeader = this._inputFormatWithNamesUseHeader;
    }
    if (this._insertKeeperMaxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertKeeperMaxRetries = this._insertKeeperMaxRetries;
    }
    if (this._insertNullAsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertNullAsDefault = this._insertNullAsDefault;
    }
    if (this._insertQuorum !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertQuorum = this._insertQuorum;
    }
    if (this._insertQuorumParallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertQuorumParallel = this._insertQuorumParallel;
    }
    if (this._insertQuorumTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertQuorumTimeout = this._insertQuorumTimeout;
    }
    if (this._joinAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinAlgorithm = this._joinAlgorithm;
    }
    if (this._joinOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinOverflowMode = this._joinOverflowMode;
    }
    if (this._joinUseNulls !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinUseNulls = this._joinUseNulls;
    }
    if (this._joinedSubqueryRequiresAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinedSubqueryRequiresAlias = this._joinedSubqueryRequiresAlias;
    }
    if (this._loadBalancing !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancing = this._loadBalancing;
    }
    if (this._localFilesystemReadMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.localFilesystemReadMethod = this._localFilesystemReadMethod;
    }
    if (this._logProcessorsProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.logProcessorsProfiles = this._logProcessorsProfiles;
    }
    if (this._logQueriesProbability !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQueriesProbability = this._logQueriesProbability;
    }
    if (this._logQueryThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQueryThreads = this._logQueryThreads;
    }
    if (this._logQueryViews !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQueryViews = this._logQueryViews;
    }
    if (this._lowCardinalityAllowInNativeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowCardinalityAllowInNativeFormat = this._lowCardinalityAllowInNativeFormat;
    }
    if (this._maxAstDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAstDepth = this._maxAstDepth;
    }
    if (this._maxAstElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAstElements = this._maxAstElements;
    }
    if (this._maxBlockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBlockSize = this._maxBlockSize;
    }
    if (this._maxBytesBeforeExternalGroupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesBeforeExternalGroupBy = this._maxBytesBeforeExternalGroupBy;
    }
    if (this._maxBytesBeforeExternalSort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesBeforeExternalSort = this._maxBytesBeforeExternalSort;
    }
    if (this._maxBytesInDistinct !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesInDistinct = this._maxBytesInDistinct;
    }
    if (this._maxBytesInJoin !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesInJoin = this._maxBytesInJoin;
    }
    if (this._maxBytesInSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesInSet = this._maxBytesInSet;
    }
    if (this._maxBytesToRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesToRead = this._maxBytesToRead;
    }
    if (this._maxBytesToSort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesToSort = this._maxBytesToSort;
    }
    if (this._maxBytesToTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesToTransfer = this._maxBytesToTransfer;
    }
    if (this._maxColumnsToRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxColumnsToRead = this._maxColumnsToRead;
    }
    if (this._maxConcurrentQueriesForUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentQueriesForUser = this._maxConcurrentQueriesForUser;
    }
    if (this._maxExecutionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExecutionTime = this._maxExecutionTime;
    }
    if (this._maxExpandedAstElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExpandedAstElements = this._maxExpandedAstElements;
    }
    if (this._maxFinalThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFinalThreads = this._maxFinalThreads;
    }
    if (this._maxHttpGetRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttpGetRedirects = this._maxHttpGetRedirects;
    }
    if (this._maxInsertBlockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInsertBlockSize = this._maxInsertBlockSize;
    }
    if (this._maxInsertThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInsertThreads = this._maxInsertThreads;
    }
    if (this._maxMemoryUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryUsage = this._maxMemoryUsage;
    }
    if (this._maxMemoryUsageForUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryUsageForUser = this._maxMemoryUsageForUser;
    }
    if (this._maxNetworkBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNetworkBandwidth = this._maxNetworkBandwidth;
    }
    if (this._maxNetworkBandwidthForUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNetworkBandwidthForUser = this._maxNetworkBandwidthForUser;
    }
    if (this._maxParserDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParserDepth = this._maxParserDepth;
    }
    if (this._maxPartitionsPerInsertBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPartitionsPerInsertBlock = this._maxPartitionsPerInsertBlock;
    }
    if (this._maxQuerySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuerySize = this._maxQuerySize;
    }
    if (this._maxReadBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReadBufferSize = this._maxReadBufferSize;
    }
    if (this._maxReplicaDelayForDistributedQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicaDelayForDistributedQueries = this._maxReplicaDelayForDistributedQueries;
    }
    if (this._maxResultBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResultBytes = this._maxResultBytes;
    }
    if (this._maxResultRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResultRows = this._maxResultRows;
    }
    if (this._maxRowsInDistinct !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsInDistinct = this._maxRowsInDistinct;
    }
    if (this._maxRowsInJoin !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsInJoin = this._maxRowsInJoin;
    }
    if (this._maxRowsInSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsInSet = this._maxRowsInSet;
    }
    if (this._maxRowsToGroupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsToGroupBy = this._maxRowsToGroupBy;
    }
    if (this._maxRowsToRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsToRead = this._maxRowsToRead;
    }
    if (this._maxRowsToSort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsToSort = this._maxRowsToSort;
    }
    if (this._maxRowsToTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsToTransfer = this._maxRowsToTransfer;
    }
    if (this._maxTemporaryColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTemporaryColumns = this._maxTemporaryColumns;
    }
    if (this._maxTemporaryDataOnDiskSizeForQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTemporaryDataOnDiskSizeForQuery = this._maxTemporaryDataOnDiskSizeForQuery;
    }
    if (this._maxTemporaryDataOnDiskSizeForUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTemporaryDataOnDiskSizeForUser = this._maxTemporaryDataOnDiskSizeForUser;
    }
    if (this._maxTemporaryNonConstColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTemporaryNonConstColumns = this._maxTemporaryNonConstColumns;
    }
    if (this._maxThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThreads = this._maxThreads;
    }
    if (this._memoryOvercommitRatioDenominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryOvercommitRatioDenominator = this._memoryOvercommitRatioDenominator;
    }
    if (this._memoryOvercommitRatioDenominatorForUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryOvercommitRatioDenominatorForUser = this._memoryOvercommitRatioDenominatorForUser;
    }
    if (this._memoryProfilerSampleProbability !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryProfilerSampleProbability = this._memoryProfilerSampleProbability;
    }
    if (this._memoryProfilerStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryProfilerStep = this._memoryProfilerStep;
    }
    if (this._memoryUsageOvercommitMaxWaitMicroseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsageOvercommitMaxWaitMicroseconds = this._memoryUsageOvercommitMaxWaitMicroseconds;
    }
    if (this._mergeTreeMaxBytesToUseCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTreeMaxBytesToUseCache = this._mergeTreeMaxBytesToUseCache;
    }
    if (this._mergeTreeMaxRowsToUseCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTreeMaxRowsToUseCache = this._mergeTreeMaxRowsToUseCache;
    }
    if (this._mergeTreeMinBytesForConcurrentRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTreeMinBytesForConcurrentRead = this._mergeTreeMinBytesForConcurrentRead;
    }
    if (this._mergeTreeMinRowsForConcurrentRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTreeMinRowsForConcurrentRead = this._mergeTreeMinRowsForConcurrentRead;
    }
    if (this._minBytesToUseDirectIo !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBytesToUseDirectIo = this._minBytesToUseDirectIo;
    }
    if (this._minCountToCompileExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCountToCompileExpression = this._minCountToCompileExpression;
    }
    if (this._minExecutionSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.minExecutionSpeed = this._minExecutionSpeed;
    }
    if (this._minExecutionSpeedBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minExecutionSpeedBytes = this._minExecutionSpeedBytes;
    }
    if (this._minInsertBlockSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInsertBlockSizeBytes = this._minInsertBlockSizeBytes;
    }
    if (this._minInsertBlockSizeRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInsertBlockSizeRows = this._minInsertBlockSizeRows;
    }
    if (this._outputFormatJsonQuote64BitIntegers !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormatJsonQuote64BitIntegers = this._outputFormatJsonQuote64BitIntegers;
    }
    if (this._outputFormatJsonQuoteDenormals !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormatJsonQuoteDenormals = this._outputFormatJsonQuoteDenormals;
    }
    if (this._preferLocalhostReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferLocalhostReplica = this._preferLocalhostReplica;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._queryCacheMaxEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheMaxEntries = this._queryCacheMaxEntries;
    }
    if (this._queryCacheMaxSizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheMaxSizeInBytes = this._queryCacheMaxSizeInBytes;
    }
    if (this._queryCacheMinQueryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheMinQueryDuration = this._queryCacheMinQueryDuration;
    }
    if (this._queryCacheMinQueryRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheMinQueryRuns = this._queryCacheMinQueryRuns;
    }
    if (this._queryCacheNondeterministicFunctionHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheNondeterministicFunctionHandling = this._queryCacheNondeterministicFunctionHandling;
    }
    if (this._queryCacheShareBetweenUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheShareBetweenUsers = this._queryCacheShareBetweenUsers;
    }
    if (this._queryCacheSystemTableHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheSystemTableHandling = this._queryCacheSystemTableHandling;
    }
    if (this._queryCacheTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheTag = this._queryCacheTag;
    }
    if (this._queryCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheTtl = this._queryCacheTtl;
    }
    if (this._quotaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaMode = this._quotaMode;
    }
    if (this._readOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOverflowMode = this._readOverflowMode;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._receiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveTimeout = this._receiveTimeout;
    }
    if (this._remoteFilesystemReadMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteFilesystemReadMethod = this._remoteFilesystemReadMethod;
    }
    if (this._replicationAlterPartitionsSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationAlterPartitionsSync = this._replicationAlterPartitionsSync;
    }
    if (this._resultOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultOverflowMode = this._resultOverflowMode;
    }
    if (this._s3UseAdaptiveTimeouts !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3UseAdaptiveTimeouts = this._s3UseAdaptiveTimeouts;
    }
    if (this._selectSequentialConsistency !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectSequentialConsistency = this._selectSequentialConsistency;
    }
    if (this._sendProgressInHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendProgressInHttpHeaders = this._sendProgressInHttpHeaders;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._setOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.setOverflowMode = this._setOverflowMode;
    }
    if (this._skipUnavailableShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUnavailableShards = this._skipUnavailableShards;
    }
    if (this._sortOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOverflowMode = this._sortOverflowMode;
    }
    if (this._timeoutBeforeCheckingExecutionSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutBeforeCheckingExecutionSpeed = this._timeoutBeforeCheckingExecutionSpeed;
    }
    if (this._timeoutOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutOverflowMode = this._timeoutOverflowMode;
    }
    if (this._transferOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferOverflowMode = this._transferOverflowMode;
    }
    if (this._transformNullIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformNullIn = this._transformNullIn;
    }
    if (this._useHedgedRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHedgedRequests = this._useHedgedRequests;
    }
    if (this._useQueryCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useQueryCache = this._useQueryCache;
    }
    if (this._useUncompressedCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useUncompressedCache = this._useUncompressedCache;
    }
    if (this._waitForAsyncInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForAsyncInsert = this._waitForAsyncInsert;
    }
    if (this._waitForAsyncInsertTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForAsyncInsertTimeout = this._waitForAsyncInsertTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbClickhouseUserSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addHttpCorsHeader = undefined;
      this._allowDdl = undefined;
      this._allowIntrospectionFunctions = undefined;
      this._allowSuspiciousLowCardinalityTypes = undefined;
      this._anyJoinDistinctRightTableKeys = undefined;
      this._asyncInsert = undefined;
      this._asyncInsertBusyTimeout = undefined;
      this._asyncInsertMaxDataSize = undefined;
      this._asyncInsertStaleTimeout = undefined;
      this._asyncInsertThreads = undefined;
      this._asyncInsertUseAdaptiveBusyTimeout = undefined;
      this._cancelHttpReadonlyQueriesOnClientClose = undefined;
      this._compileExpressions = undefined;
      this._connectTimeout = undefined;
      this._connectTimeoutWithFailover = undefined;
      this._countDistinctImplementation = undefined;
      this._dataTypeDefaultNullable = undefined;
      this._dateTimeInputFormat = undefined;
      this._dateTimeOutputFormat = undefined;
      this._deduplicateBlocksInDependentMaterializedViews = undefined;
      this._distinctOverflowMode = undefined;
      this._distributedAggregationMemoryEfficient = undefined;
      this._distributedDdlOutputMode = undefined;
      this._distributedDdlTaskTimeout = undefined;
      this._distributedProductMode = undefined;
      this._doNotMergeAcrossPartitionsSelectFinal = undefined;
      this._emptyResultForAggregationByEmptySet = undefined;
      this._enableAnalyzer = undefined;
      this._enableHttpCompression = undefined;
      this._enableReadsFromQueryCache = undefined;
      this._enableWritesToQueryCache = undefined;
      this._fallbackToStaleReplicasForDistributedQueries = undefined;
      this._flattenNested = undefined;
      this._forceIndexByDate = undefined;
      this._forcePrimaryKey = undefined;
      this._formatAvroSchemaRegistryUrl = undefined;
      this._formatRegexp = undefined;
      this._formatRegexpSkipUnmatched = undefined;
      this._groupByOverflowMode = undefined;
      this._groupByTwoLevelThreshold = undefined;
      this._groupByTwoLevelThresholdBytes = undefined;
      this._hedgedConnectionTimeoutMs = undefined;
      this._httpConnectionTimeout = undefined;
      this._httpHeadersProgressInterval = undefined;
      this._httpMaxFieldNameSize = undefined;
      this._httpMaxFieldValueSize = undefined;
      this._httpReceiveTimeout = undefined;
      this._httpSendTimeout = undefined;
      this._idleConnectionTimeout = undefined;
      this._ignoreMaterializedViewsWithDroppedTargetTable = undefined;
      this._inputFormatDefaultsForOmittedFields = undefined;
      this._inputFormatImportNestedJson = undefined;
      this._inputFormatNullAsDefault = undefined;
      this._inputFormatParallelParsing = undefined;
      this._inputFormatValuesInterpretExpressions = undefined;
      this._inputFormatWithNamesUseHeader = undefined;
      this._insertKeeperMaxRetries = undefined;
      this._insertNullAsDefault = undefined;
      this._insertQuorum = undefined;
      this._insertQuorumParallel = undefined;
      this._insertQuorumTimeout = undefined;
      this._joinAlgorithm = undefined;
      this._joinOverflowMode = undefined;
      this._joinUseNulls = undefined;
      this._joinedSubqueryRequiresAlias = undefined;
      this._loadBalancing = undefined;
      this._localFilesystemReadMethod = undefined;
      this._logProcessorsProfiles = undefined;
      this._logQueriesProbability = undefined;
      this._logQueryThreads = undefined;
      this._logQueryViews = undefined;
      this._lowCardinalityAllowInNativeFormat = undefined;
      this._maxAstDepth = undefined;
      this._maxAstElements = undefined;
      this._maxBlockSize = undefined;
      this._maxBytesBeforeExternalGroupBy = undefined;
      this._maxBytesBeforeExternalSort = undefined;
      this._maxBytesInDistinct = undefined;
      this._maxBytesInJoin = undefined;
      this._maxBytesInSet = undefined;
      this._maxBytesToRead = undefined;
      this._maxBytesToSort = undefined;
      this._maxBytesToTransfer = undefined;
      this._maxColumnsToRead = undefined;
      this._maxConcurrentQueriesForUser = undefined;
      this._maxExecutionTime = undefined;
      this._maxExpandedAstElements = undefined;
      this._maxFinalThreads = undefined;
      this._maxHttpGetRedirects = undefined;
      this._maxInsertBlockSize = undefined;
      this._maxInsertThreads = undefined;
      this._maxMemoryUsage = undefined;
      this._maxMemoryUsageForUser = undefined;
      this._maxNetworkBandwidth = undefined;
      this._maxNetworkBandwidthForUser = undefined;
      this._maxParserDepth = undefined;
      this._maxPartitionsPerInsertBlock = undefined;
      this._maxQuerySize = undefined;
      this._maxReadBufferSize = undefined;
      this._maxReplicaDelayForDistributedQueries = undefined;
      this._maxResultBytes = undefined;
      this._maxResultRows = undefined;
      this._maxRowsInDistinct = undefined;
      this._maxRowsInJoin = undefined;
      this._maxRowsInSet = undefined;
      this._maxRowsToGroupBy = undefined;
      this._maxRowsToRead = undefined;
      this._maxRowsToSort = undefined;
      this._maxRowsToTransfer = undefined;
      this._maxTemporaryColumns = undefined;
      this._maxTemporaryDataOnDiskSizeForQuery = undefined;
      this._maxTemporaryDataOnDiskSizeForUser = undefined;
      this._maxTemporaryNonConstColumns = undefined;
      this._maxThreads = undefined;
      this._memoryOvercommitRatioDenominator = undefined;
      this._memoryOvercommitRatioDenominatorForUser = undefined;
      this._memoryProfilerSampleProbability = undefined;
      this._memoryProfilerStep = undefined;
      this._memoryUsageOvercommitMaxWaitMicroseconds = undefined;
      this._mergeTreeMaxBytesToUseCache = undefined;
      this._mergeTreeMaxRowsToUseCache = undefined;
      this._mergeTreeMinBytesForConcurrentRead = undefined;
      this._mergeTreeMinRowsForConcurrentRead = undefined;
      this._minBytesToUseDirectIo = undefined;
      this._minCountToCompileExpression = undefined;
      this._minExecutionSpeed = undefined;
      this._minExecutionSpeedBytes = undefined;
      this._minInsertBlockSizeBytes = undefined;
      this._minInsertBlockSizeRows = undefined;
      this._outputFormatJsonQuote64BitIntegers = undefined;
      this._outputFormatJsonQuoteDenormals = undefined;
      this._preferLocalhostReplica = undefined;
      this._priority = undefined;
      this._queryCacheMaxEntries = undefined;
      this._queryCacheMaxSizeInBytes = undefined;
      this._queryCacheMinQueryDuration = undefined;
      this._queryCacheMinQueryRuns = undefined;
      this._queryCacheNondeterministicFunctionHandling = undefined;
      this._queryCacheShareBetweenUsers = undefined;
      this._queryCacheSystemTableHandling = undefined;
      this._queryCacheTag = undefined;
      this._queryCacheTtl = undefined;
      this._quotaMode = undefined;
      this._readOverflowMode = undefined;
      this._readonly = undefined;
      this._receiveTimeout = undefined;
      this._remoteFilesystemReadMethod = undefined;
      this._replicationAlterPartitionsSync = undefined;
      this._resultOverflowMode = undefined;
      this._s3UseAdaptiveTimeouts = undefined;
      this._selectSequentialConsistency = undefined;
      this._sendProgressInHttpHeaders = undefined;
      this._sendTimeout = undefined;
      this._setOverflowMode = undefined;
      this._skipUnavailableShards = undefined;
      this._sortOverflowMode = undefined;
      this._timeoutBeforeCheckingExecutionSpeed = undefined;
      this._timeoutOverflowMode = undefined;
      this._transferOverflowMode = undefined;
      this._transformNullIn = undefined;
      this._useHedgedRequests = undefined;
      this._useQueryCache = undefined;
      this._useUncompressedCache = undefined;
      this._waitForAsyncInsert = undefined;
      this._waitForAsyncInsertTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addHttpCorsHeader = value.addHttpCorsHeader;
      this._allowDdl = value.allowDdl;
      this._allowIntrospectionFunctions = value.allowIntrospectionFunctions;
      this._allowSuspiciousLowCardinalityTypes = value.allowSuspiciousLowCardinalityTypes;
      this._anyJoinDistinctRightTableKeys = value.anyJoinDistinctRightTableKeys;
      this._asyncInsert = value.asyncInsert;
      this._asyncInsertBusyTimeout = value.asyncInsertBusyTimeout;
      this._asyncInsertMaxDataSize = value.asyncInsertMaxDataSize;
      this._asyncInsertStaleTimeout = value.asyncInsertStaleTimeout;
      this._asyncInsertThreads = value.asyncInsertThreads;
      this._asyncInsertUseAdaptiveBusyTimeout = value.asyncInsertUseAdaptiveBusyTimeout;
      this._cancelHttpReadonlyQueriesOnClientClose = value.cancelHttpReadonlyQueriesOnClientClose;
      this._compileExpressions = value.compileExpressions;
      this._connectTimeout = value.connectTimeout;
      this._connectTimeoutWithFailover = value.connectTimeoutWithFailover;
      this._countDistinctImplementation = value.countDistinctImplementation;
      this._dataTypeDefaultNullable = value.dataTypeDefaultNullable;
      this._dateTimeInputFormat = value.dateTimeInputFormat;
      this._dateTimeOutputFormat = value.dateTimeOutputFormat;
      this._deduplicateBlocksInDependentMaterializedViews = value.deduplicateBlocksInDependentMaterializedViews;
      this._distinctOverflowMode = value.distinctOverflowMode;
      this._distributedAggregationMemoryEfficient = value.distributedAggregationMemoryEfficient;
      this._distributedDdlOutputMode = value.distributedDdlOutputMode;
      this._distributedDdlTaskTimeout = value.distributedDdlTaskTimeout;
      this._distributedProductMode = value.distributedProductMode;
      this._doNotMergeAcrossPartitionsSelectFinal = value.doNotMergeAcrossPartitionsSelectFinal;
      this._emptyResultForAggregationByEmptySet = value.emptyResultForAggregationByEmptySet;
      this._enableAnalyzer = value.enableAnalyzer;
      this._enableHttpCompression = value.enableHttpCompression;
      this._enableReadsFromQueryCache = value.enableReadsFromQueryCache;
      this._enableWritesToQueryCache = value.enableWritesToQueryCache;
      this._fallbackToStaleReplicasForDistributedQueries = value.fallbackToStaleReplicasForDistributedQueries;
      this._flattenNested = value.flattenNested;
      this._forceIndexByDate = value.forceIndexByDate;
      this._forcePrimaryKey = value.forcePrimaryKey;
      this._formatAvroSchemaRegistryUrl = value.formatAvroSchemaRegistryUrl;
      this._formatRegexp = value.formatRegexp;
      this._formatRegexpSkipUnmatched = value.formatRegexpSkipUnmatched;
      this._groupByOverflowMode = value.groupByOverflowMode;
      this._groupByTwoLevelThreshold = value.groupByTwoLevelThreshold;
      this._groupByTwoLevelThresholdBytes = value.groupByTwoLevelThresholdBytes;
      this._hedgedConnectionTimeoutMs = value.hedgedConnectionTimeoutMs;
      this._httpConnectionTimeout = value.httpConnectionTimeout;
      this._httpHeadersProgressInterval = value.httpHeadersProgressInterval;
      this._httpMaxFieldNameSize = value.httpMaxFieldNameSize;
      this._httpMaxFieldValueSize = value.httpMaxFieldValueSize;
      this._httpReceiveTimeout = value.httpReceiveTimeout;
      this._httpSendTimeout = value.httpSendTimeout;
      this._idleConnectionTimeout = value.idleConnectionTimeout;
      this._ignoreMaterializedViewsWithDroppedTargetTable = value.ignoreMaterializedViewsWithDroppedTargetTable;
      this._inputFormatDefaultsForOmittedFields = value.inputFormatDefaultsForOmittedFields;
      this._inputFormatImportNestedJson = value.inputFormatImportNestedJson;
      this._inputFormatNullAsDefault = value.inputFormatNullAsDefault;
      this._inputFormatParallelParsing = value.inputFormatParallelParsing;
      this._inputFormatValuesInterpretExpressions = value.inputFormatValuesInterpretExpressions;
      this._inputFormatWithNamesUseHeader = value.inputFormatWithNamesUseHeader;
      this._insertKeeperMaxRetries = value.insertKeeperMaxRetries;
      this._insertNullAsDefault = value.insertNullAsDefault;
      this._insertQuorum = value.insertQuorum;
      this._insertQuorumParallel = value.insertQuorumParallel;
      this._insertQuorumTimeout = value.insertQuorumTimeout;
      this._joinAlgorithm = value.joinAlgorithm;
      this._joinOverflowMode = value.joinOverflowMode;
      this._joinUseNulls = value.joinUseNulls;
      this._joinedSubqueryRequiresAlias = value.joinedSubqueryRequiresAlias;
      this._loadBalancing = value.loadBalancing;
      this._localFilesystemReadMethod = value.localFilesystemReadMethod;
      this._logProcessorsProfiles = value.logProcessorsProfiles;
      this._logQueriesProbability = value.logQueriesProbability;
      this._logQueryThreads = value.logQueryThreads;
      this._logQueryViews = value.logQueryViews;
      this._lowCardinalityAllowInNativeFormat = value.lowCardinalityAllowInNativeFormat;
      this._maxAstDepth = value.maxAstDepth;
      this._maxAstElements = value.maxAstElements;
      this._maxBlockSize = value.maxBlockSize;
      this._maxBytesBeforeExternalGroupBy = value.maxBytesBeforeExternalGroupBy;
      this._maxBytesBeforeExternalSort = value.maxBytesBeforeExternalSort;
      this._maxBytesInDistinct = value.maxBytesInDistinct;
      this._maxBytesInJoin = value.maxBytesInJoin;
      this._maxBytesInSet = value.maxBytesInSet;
      this._maxBytesToRead = value.maxBytesToRead;
      this._maxBytesToSort = value.maxBytesToSort;
      this._maxBytesToTransfer = value.maxBytesToTransfer;
      this._maxColumnsToRead = value.maxColumnsToRead;
      this._maxConcurrentQueriesForUser = value.maxConcurrentQueriesForUser;
      this._maxExecutionTime = value.maxExecutionTime;
      this._maxExpandedAstElements = value.maxExpandedAstElements;
      this._maxFinalThreads = value.maxFinalThreads;
      this._maxHttpGetRedirects = value.maxHttpGetRedirects;
      this._maxInsertBlockSize = value.maxInsertBlockSize;
      this._maxInsertThreads = value.maxInsertThreads;
      this._maxMemoryUsage = value.maxMemoryUsage;
      this._maxMemoryUsageForUser = value.maxMemoryUsageForUser;
      this._maxNetworkBandwidth = value.maxNetworkBandwidth;
      this._maxNetworkBandwidthForUser = value.maxNetworkBandwidthForUser;
      this._maxParserDepth = value.maxParserDepth;
      this._maxPartitionsPerInsertBlock = value.maxPartitionsPerInsertBlock;
      this._maxQuerySize = value.maxQuerySize;
      this._maxReadBufferSize = value.maxReadBufferSize;
      this._maxReplicaDelayForDistributedQueries = value.maxReplicaDelayForDistributedQueries;
      this._maxResultBytes = value.maxResultBytes;
      this._maxResultRows = value.maxResultRows;
      this._maxRowsInDistinct = value.maxRowsInDistinct;
      this._maxRowsInJoin = value.maxRowsInJoin;
      this._maxRowsInSet = value.maxRowsInSet;
      this._maxRowsToGroupBy = value.maxRowsToGroupBy;
      this._maxRowsToRead = value.maxRowsToRead;
      this._maxRowsToSort = value.maxRowsToSort;
      this._maxRowsToTransfer = value.maxRowsToTransfer;
      this._maxTemporaryColumns = value.maxTemporaryColumns;
      this._maxTemporaryDataOnDiskSizeForQuery = value.maxTemporaryDataOnDiskSizeForQuery;
      this._maxTemporaryDataOnDiskSizeForUser = value.maxTemporaryDataOnDiskSizeForUser;
      this._maxTemporaryNonConstColumns = value.maxTemporaryNonConstColumns;
      this._maxThreads = value.maxThreads;
      this._memoryOvercommitRatioDenominator = value.memoryOvercommitRatioDenominator;
      this._memoryOvercommitRatioDenominatorForUser = value.memoryOvercommitRatioDenominatorForUser;
      this._memoryProfilerSampleProbability = value.memoryProfilerSampleProbability;
      this._memoryProfilerStep = value.memoryProfilerStep;
      this._memoryUsageOvercommitMaxWaitMicroseconds = value.memoryUsageOvercommitMaxWaitMicroseconds;
      this._mergeTreeMaxBytesToUseCache = value.mergeTreeMaxBytesToUseCache;
      this._mergeTreeMaxRowsToUseCache = value.mergeTreeMaxRowsToUseCache;
      this._mergeTreeMinBytesForConcurrentRead = value.mergeTreeMinBytesForConcurrentRead;
      this._mergeTreeMinRowsForConcurrentRead = value.mergeTreeMinRowsForConcurrentRead;
      this._minBytesToUseDirectIo = value.minBytesToUseDirectIo;
      this._minCountToCompileExpression = value.minCountToCompileExpression;
      this._minExecutionSpeed = value.minExecutionSpeed;
      this._minExecutionSpeedBytes = value.minExecutionSpeedBytes;
      this._minInsertBlockSizeBytes = value.minInsertBlockSizeBytes;
      this._minInsertBlockSizeRows = value.minInsertBlockSizeRows;
      this._outputFormatJsonQuote64BitIntegers = value.outputFormatJsonQuote64BitIntegers;
      this._outputFormatJsonQuoteDenormals = value.outputFormatJsonQuoteDenormals;
      this._preferLocalhostReplica = value.preferLocalhostReplica;
      this._priority = value.priority;
      this._queryCacheMaxEntries = value.queryCacheMaxEntries;
      this._queryCacheMaxSizeInBytes = value.queryCacheMaxSizeInBytes;
      this._queryCacheMinQueryDuration = value.queryCacheMinQueryDuration;
      this._queryCacheMinQueryRuns = value.queryCacheMinQueryRuns;
      this._queryCacheNondeterministicFunctionHandling = value.queryCacheNondeterministicFunctionHandling;
      this._queryCacheShareBetweenUsers = value.queryCacheShareBetweenUsers;
      this._queryCacheSystemTableHandling = value.queryCacheSystemTableHandling;
      this._queryCacheTag = value.queryCacheTag;
      this._queryCacheTtl = value.queryCacheTtl;
      this._quotaMode = value.quotaMode;
      this._readOverflowMode = value.readOverflowMode;
      this._readonly = value.readonly;
      this._receiveTimeout = value.receiveTimeout;
      this._remoteFilesystemReadMethod = value.remoteFilesystemReadMethod;
      this._replicationAlterPartitionsSync = value.replicationAlterPartitionsSync;
      this._resultOverflowMode = value.resultOverflowMode;
      this._s3UseAdaptiveTimeouts = value.s3UseAdaptiveTimeouts;
      this._selectSequentialConsistency = value.selectSequentialConsistency;
      this._sendProgressInHttpHeaders = value.sendProgressInHttpHeaders;
      this._sendTimeout = value.sendTimeout;
      this._setOverflowMode = value.setOverflowMode;
      this._skipUnavailableShards = value.skipUnavailableShards;
      this._sortOverflowMode = value.sortOverflowMode;
      this._timeoutBeforeCheckingExecutionSpeed = value.timeoutBeforeCheckingExecutionSpeed;
      this._timeoutOverflowMode = value.timeoutOverflowMode;
      this._transferOverflowMode = value.transferOverflowMode;
      this._transformNullIn = value.transformNullIn;
      this._useHedgedRequests = value.useHedgedRequests;
      this._useQueryCache = value.useQueryCache;
      this._useUncompressedCache = value.useUncompressedCache;
      this._waitForAsyncInsert = value.waitForAsyncInsert;
      this._waitForAsyncInsertTimeout = value.waitForAsyncInsertTimeout;
    }
  }

  // add_http_cors_header - computed: false, optional: true, required: false
  private _addHttpCorsHeader?: boolean | cdktf.IResolvable; 
  public get addHttpCorsHeader() {
    return this.getBooleanAttribute('add_http_cors_header');
  }
  public set addHttpCorsHeader(value: boolean | cdktf.IResolvable) {
    this._addHttpCorsHeader = value;
  }
  public resetAddHttpCorsHeader() {
    this._addHttpCorsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttpCorsHeaderInput() {
    return this._addHttpCorsHeader;
  }

  // allow_ddl - computed: false, optional: true, required: false
  private _allowDdl?: boolean | cdktf.IResolvable; 
  public get allowDdl() {
    return this.getBooleanAttribute('allow_ddl');
  }
  public set allowDdl(value: boolean | cdktf.IResolvable) {
    this._allowDdl = value;
  }
  public resetAllowDdl() {
    this._allowDdl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDdlInput() {
    return this._allowDdl;
  }

  // allow_introspection_functions - computed: false, optional: true, required: false
  private _allowIntrospectionFunctions?: boolean | cdktf.IResolvable; 
  public get allowIntrospectionFunctions() {
    return this.getBooleanAttribute('allow_introspection_functions');
  }
  public set allowIntrospectionFunctions(value: boolean | cdktf.IResolvable) {
    this._allowIntrospectionFunctions = value;
  }
  public resetAllowIntrospectionFunctions() {
    this._allowIntrospectionFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIntrospectionFunctionsInput() {
    return this._allowIntrospectionFunctions;
  }

  // allow_suspicious_low_cardinality_types - computed: false, optional: true, required: false
  private _allowSuspiciousLowCardinalityTypes?: boolean | cdktf.IResolvable; 
  public get allowSuspiciousLowCardinalityTypes() {
    return this.getBooleanAttribute('allow_suspicious_low_cardinality_types');
  }
  public set allowSuspiciousLowCardinalityTypes(value: boolean | cdktf.IResolvable) {
    this._allowSuspiciousLowCardinalityTypes = value;
  }
  public resetAllowSuspiciousLowCardinalityTypes() {
    this._allowSuspiciousLowCardinalityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSuspiciousLowCardinalityTypesInput() {
    return this._allowSuspiciousLowCardinalityTypes;
  }

  // any_join_distinct_right_table_keys - computed: false, optional: true, required: false
  private _anyJoinDistinctRightTableKeys?: boolean | cdktf.IResolvable; 
  public get anyJoinDistinctRightTableKeys() {
    return this.getBooleanAttribute('any_join_distinct_right_table_keys');
  }
  public set anyJoinDistinctRightTableKeys(value: boolean | cdktf.IResolvable) {
    this._anyJoinDistinctRightTableKeys = value;
  }
  public resetAnyJoinDistinctRightTableKeys() {
    this._anyJoinDistinctRightTableKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyJoinDistinctRightTableKeysInput() {
    return this._anyJoinDistinctRightTableKeys;
  }

  // async_insert - computed: false, optional: true, required: false
  private _asyncInsert?: boolean | cdktf.IResolvable; 
  public get asyncInsert() {
    return this.getBooleanAttribute('async_insert');
  }
  public set asyncInsert(value: boolean | cdktf.IResolvable) {
    this._asyncInsert = value;
  }
  public resetAsyncInsert() {
    this._asyncInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInsertInput() {
    return this._asyncInsert;
  }

  // async_insert_busy_timeout - computed: false, optional: true, required: false
  private _asyncInsertBusyTimeout?: number; 
  public get asyncInsertBusyTimeout() {
    return this.getNumberAttribute('async_insert_busy_timeout');
  }
  public set asyncInsertBusyTimeout(value: number) {
    this._asyncInsertBusyTimeout = value;
  }
  public resetAsyncInsertBusyTimeout() {
    this._asyncInsertBusyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInsertBusyTimeoutInput() {
    return this._asyncInsertBusyTimeout;
  }

  // async_insert_max_data_size - computed: false, optional: true, required: false
  private _asyncInsertMaxDataSize?: number; 
  public get asyncInsertMaxDataSize() {
    return this.getNumberAttribute('async_insert_max_data_size');
  }
  public set asyncInsertMaxDataSize(value: number) {
    this._asyncInsertMaxDataSize = value;
  }
  public resetAsyncInsertMaxDataSize() {
    this._asyncInsertMaxDataSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInsertMaxDataSizeInput() {
    return this._asyncInsertMaxDataSize;
  }

  // async_insert_stale_timeout - computed: false, optional: true, required: false
  private _asyncInsertStaleTimeout?: number; 
  public get asyncInsertStaleTimeout() {
    return this.getNumberAttribute('async_insert_stale_timeout');
  }
  public set asyncInsertStaleTimeout(value: number) {
    this._asyncInsertStaleTimeout = value;
  }
  public resetAsyncInsertStaleTimeout() {
    this._asyncInsertStaleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInsertStaleTimeoutInput() {
    return this._asyncInsertStaleTimeout;
  }

  // async_insert_threads - computed: false, optional: true, required: false
  private _asyncInsertThreads?: number; 
  public get asyncInsertThreads() {
    return this.getNumberAttribute('async_insert_threads');
  }
  public set asyncInsertThreads(value: number) {
    this._asyncInsertThreads = value;
  }
  public resetAsyncInsertThreads() {
    this._asyncInsertThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInsertThreadsInput() {
    return this._asyncInsertThreads;
  }

  // async_insert_use_adaptive_busy_timeout - computed: false, optional: true, required: false
  private _asyncInsertUseAdaptiveBusyTimeout?: boolean | cdktf.IResolvable; 
  public get asyncInsertUseAdaptiveBusyTimeout() {
    return this.getBooleanAttribute('async_insert_use_adaptive_busy_timeout');
  }
  public set asyncInsertUseAdaptiveBusyTimeout(value: boolean | cdktf.IResolvable) {
    this._asyncInsertUseAdaptiveBusyTimeout = value;
  }
  public resetAsyncInsertUseAdaptiveBusyTimeout() {
    this._asyncInsertUseAdaptiveBusyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInsertUseAdaptiveBusyTimeoutInput() {
    return this._asyncInsertUseAdaptiveBusyTimeout;
  }

  // cancel_http_readonly_queries_on_client_close - computed: false, optional: true, required: false
  private _cancelHttpReadonlyQueriesOnClientClose?: boolean | cdktf.IResolvable; 
  public get cancelHttpReadonlyQueriesOnClientClose() {
    return this.getBooleanAttribute('cancel_http_readonly_queries_on_client_close');
  }
  public set cancelHttpReadonlyQueriesOnClientClose(value: boolean | cdktf.IResolvable) {
    this._cancelHttpReadonlyQueriesOnClientClose = value;
  }
  public resetCancelHttpReadonlyQueriesOnClientClose() {
    this._cancelHttpReadonlyQueriesOnClientClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelHttpReadonlyQueriesOnClientCloseInput() {
    return this._cancelHttpReadonlyQueriesOnClientClose;
  }

  // compile_expressions - computed: false, optional: true, required: false
  private _compileExpressions?: boolean | cdktf.IResolvable; 
  public get compileExpressions() {
    return this.getBooleanAttribute('compile_expressions');
  }
  public set compileExpressions(value: boolean | cdktf.IResolvable) {
    this._compileExpressions = value;
  }
  public resetCompileExpressions() {
    this._compileExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compileExpressionsInput() {
    return this._compileExpressions;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // connect_timeout_with_failover - computed: false, optional: true, required: false
  private _connectTimeoutWithFailover?: number; 
  public get connectTimeoutWithFailover() {
    return this.getNumberAttribute('connect_timeout_with_failover');
  }
  public set connectTimeoutWithFailover(value: number) {
    this._connectTimeoutWithFailover = value;
  }
  public resetConnectTimeoutWithFailover() {
    this._connectTimeoutWithFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutWithFailoverInput() {
    return this._connectTimeoutWithFailover;
  }

  // count_distinct_implementation - computed: false, optional: true, required: false
  private _countDistinctImplementation?: string; 
  public get countDistinctImplementation() {
    return this.getStringAttribute('count_distinct_implementation');
  }
  public set countDistinctImplementation(value: string) {
    this._countDistinctImplementation = value;
  }
  public resetCountDistinctImplementation() {
    this._countDistinctImplementation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countDistinctImplementationInput() {
    return this._countDistinctImplementation;
  }

  // data_type_default_nullable - computed: false, optional: true, required: false
  private _dataTypeDefaultNullable?: boolean | cdktf.IResolvable; 
  public get dataTypeDefaultNullable() {
    return this.getBooleanAttribute('data_type_default_nullable');
  }
  public set dataTypeDefaultNullable(value: boolean | cdktf.IResolvable) {
    this._dataTypeDefaultNullable = value;
  }
  public resetDataTypeDefaultNullable() {
    this._dataTypeDefaultNullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeDefaultNullableInput() {
    return this._dataTypeDefaultNullable;
  }

  // date_time_input_format - computed: false, optional: true, required: false
  private _dateTimeInputFormat?: string; 
  public get dateTimeInputFormat() {
    return this.getStringAttribute('date_time_input_format');
  }
  public set dateTimeInputFormat(value: string) {
    this._dateTimeInputFormat = value;
  }
  public resetDateTimeInputFormat() {
    this._dateTimeInputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeInputFormatInput() {
    return this._dateTimeInputFormat;
  }

  // date_time_output_format - computed: false, optional: true, required: false
  private _dateTimeOutputFormat?: string; 
  public get dateTimeOutputFormat() {
    return this.getStringAttribute('date_time_output_format');
  }
  public set dateTimeOutputFormat(value: string) {
    this._dateTimeOutputFormat = value;
  }
  public resetDateTimeOutputFormat() {
    this._dateTimeOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeOutputFormatInput() {
    return this._dateTimeOutputFormat;
  }

  // deduplicate_blocks_in_dependent_materialized_views - computed: false, optional: true, required: false
  private _deduplicateBlocksInDependentMaterializedViews?: boolean | cdktf.IResolvable; 
  public get deduplicateBlocksInDependentMaterializedViews() {
    return this.getBooleanAttribute('deduplicate_blocks_in_dependent_materialized_views');
  }
  public set deduplicateBlocksInDependentMaterializedViews(value: boolean | cdktf.IResolvable) {
    this._deduplicateBlocksInDependentMaterializedViews = value;
  }
  public resetDeduplicateBlocksInDependentMaterializedViews() {
    this._deduplicateBlocksInDependentMaterializedViews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicateBlocksInDependentMaterializedViewsInput() {
    return this._deduplicateBlocksInDependentMaterializedViews;
  }

  // distinct_overflow_mode - computed: false, optional: true, required: false
  private _distinctOverflowMode?: string; 
  public get distinctOverflowMode() {
    return this.getStringAttribute('distinct_overflow_mode');
  }
  public set distinctOverflowMode(value: string) {
    this._distinctOverflowMode = value;
  }
  public resetDistinctOverflowMode() {
    this._distinctOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinctOverflowModeInput() {
    return this._distinctOverflowMode;
  }

  // distributed_aggregation_memory_efficient - computed: false, optional: true, required: false
  private _distributedAggregationMemoryEfficient?: boolean | cdktf.IResolvable; 
  public get distributedAggregationMemoryEfficient() {
    return this.getBooleanAttribute('distributed_aggregation_memory_efficient');
  }
  public set distributedAggregationMemoryEfficient(value: boolean | cdktf.IResolvable) {
    this._distributedAggregationMemoryEfficient = value;
  }
  public resetDistributedAggregationMemoryEfficient() {
    this._distributedAggregationMemoryEfficient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedAggregationMemoryEfficientInput() {
    return this._distributedAggregationMemoryEfficient;
  }

  // distributed_ddl_output_mode - computed: false, optional: true, required: false
  private _distributedDdlOutputMode?: string; 
  public get distributedDdlOutputMode() {
    return this.getStringAttribute('distributed_ddl_output_mode');
  }
  public set distributedDdlOutputMode(value: string) {
    this._distributedDdlOutputMode = value;
  }
  public resetDistributedDdlOutputMode() {
    this._distributedDdlOutputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedDdlOutputModeInput() {
    return this._distributedDdlOutputMode;
  }

  // distributed_ddl_task_timeout - computed: false, optional: true, required: false
  private _distributedDdlTaskTimeout?: number; 
  public get distributedDdlTaskTimeout() {
    return this.getNumberAttribute('distributed_ddl_task_timeout');
  }
  public set distributedDdlTaskTimeout(value: number) {
    this._distributedDdlTaskTimeout = value;
  }
  public resetDistributedDdlTaskTimeout() {
    this._distributedDdlTaskTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedDdlTaskTimeoutInput() {
    return this._distributedDdlTaskTimeout;
  }

  // distributed_product_mode - computed: false, optional: true, required: false
  private _distributedProductMode?: string; 
  public get distributedProductMode() {
    return this.getStringAttribute('distributed_product_mode');
  }
  public set distributedProductMode(value: string) {
    this._distributedProductMode = value;
  }
  public resetDistributedProductMode() {
    this._distributedProductMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedProductModeInput() {
    return this._distributedProductMode;
  }

  // do_not_merge_across_partitions_select_final - computed: false, optional: true, required: false
  private _doNotMergeAcrossPartitionsSelectFinal?: boolean | cdktf.IResolvable; 
  public get doNotMergeAcrossPartitionsSelectFinal() {
    return this.getBooleanAttribute('do_not_merge_across_partitions_select_final');
  }
  public set doNotMergeAcrossPartitionsSelectFinal(value: boolean | cdktf.IResolvable) {
    this._doNotMergeAcrossPartitionsSelectFinal = value;
  }
  public resetDoNotMergeAcrossPartitionsSelectFinal() {
    this._doNotMergeAcrossPartitionsSelectFinal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotMergeAcrossPartitionsSelectFinalInput() {
    return this._doNotMergeAcrossPartitionsSelectFinal;
  }

  // empty_result_for_aggregation_by_empty_set - computed: false, optional: true, required: false
  private _emptyResultForAggregationByEmptySet?: boolean | cdktf.IResolvable; 
  public get emptyResultForAggregationByEmptySet() {
    return this.getBooleanAttribute('empty_result_for_aggregation_by_empty_set');
  }
  public set emptyResultForAggregationByEmptySet(value: boolean | cdktf.IResolvable) {
    this._emptyResultForAggregationByEmptySet = value;
  }
  public resetEmptyResultForAggregationByEmptySet() {
    this._emptyResultForAggregationByEmptySet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyResultForAggregationByEmptySetInput() {
    return this._emptyResultForAggregationByEmptySet;
  }

  // enable_analyzer - computed: false, optional: true, required: false
  private _enableAnalyzer?: boolean | cdktf.IResolvable; 
  public get enableAnalyzer() {
    return this.getBooleanAttribute('enable_analyzer');
  }
  public set enableAnalyzer(value: boolean | cdktf.IResolvable) {
    this._enableAnalyzer = value;
  }
  public resetEnableAnalyzer() {
    this._enableAnalyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAnalyzerInput() {
    return this._enableAnalyzer;
  }

  // enable_http_compression - computed: false, optional: true, required: false
  private _enableHttpCompression?: boolean | cdktf.IResolvable; 
  public get enableHttpCompression() {
    return this.getBooleanAttribute('enable_http_compression');
  }
  public set enableHttpCompression(value: boolean | cdktf.IResolvable) {
    this._enableHttpCompression = value;
  }
  public resetEnableHttpCompression() {
    this._enableHttpCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpCompressionInput() {
    return this._enableHttpCompression;
  }

  // enable_reads_from_query_cache - computed: false, optional: true, required: false
  private _enableReadsFromQueryCache?: boolean | cdktf.IResolvable; 
  public get enableReadsFromQueryCache() {
    return this.getBooleanAttribute('enable_reads_from_query_cache');
  }
  public set enableReadsFromQueryCache(value: boolean | cdktf.IResolvable) {
    this._enableReadsFromQueryCache = value;
  }
  public resetEnableReadsFromQueryCache() {
    this._enableReadsFromQueryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReadsFromQueryCacheInput() {
    return this._enableReadsFromQueryCache;
  }

  // enable_writes_to_query_cache - computed: false, optional: true, required: false
  private _enableWritesToQueryCache?: boolean | cdktf.IResolvable; 
  public get enableWritesToQueryCache() {
    return this.getBooleanAttribute('enable_writes_to_query_cache');
  }
  public set enableWritesToQueryCache(value: boolean | cdktf.IResolvable) {
    this._enableWritesToQueryCache = value;
  }
  public resetEnableWritesToQueryCache() {
    this._enableWritesToQueryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWritesToQueryCacheInput() {
    return this._enableWritesToQueryCache;
  }

  // fallback_to_stale_replicas_for_distributed_queries - computed: false, optional: true, required: false
  private _fallbackToStaleReplicasForDistributedQueries?: boolean | cdktf.IResolvable; 
  public get fallbackToStaleReplicasForDistributedQueries() {
    return this.getBooleanAttribute('fallback_to_stale_replicas_for_distributed_queries');
  }
  public set fallbackToStaleReplicasForDistributedQueries(value: boolean | cdktf.IResolvable) {
    this._fallbackToStaleReplicasForDistributedQueries = value;
  }
  public resetFallbackToStaleReplicasForDistributedQueries() {
    this._fallbackToStaleReplicasForDistributedQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToStaleReplicasForDistributedQueriesInput() {
    return this._fallbackToStaleReplicasForDistributedQueries;
  }

  // flatten_nested - computed: false, optional: true, required: false
  private _flattenNested?: boolean | cdktf.IResolvable; 
  public get flattenNested() {
    return this.getBooleanAttribute('flatten_nested');
  }
  public set flattenNested(value: boolean | cdktf.IResolvable) {
    this._flattenNested = value;
  }
  public resetFlattenNested() {
    this._flattenNested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenNestedInput() {
    return this._flattenNested;
  }

  // force_index_by_date - computed: false, optional: true, required: false
  private _forceIndexByDate?: boolean | cdktf.IResolvable; 
  public get forceIndexByDate() {
    return this.getBooleanAttribute('force_index_by_date');
  }
  public set forceIndexByDate(value: boolean | cdktf.IResolvable) {
    this._forceIndexByDate = value;
  }
  public resetForceIndexByDate() {
    this._forceIndexByDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceIndexByDateInput() {
    return this._forceIndexByDate;
  }

  // force_primary_key - computed: false, optional: true, required: false
  private _forcePrimaryKey?: boolean | cdktf.IResolvable; 
  public get forcePrimaryKey() {
    return this.getBooleanAttribute('force_primary_key');
  }
  public set forcePrimaryKey(value: boolean | cdktf.IResolvable) {
    this._forcePrimaryKey = value;
  }
  public resetForcePrimaryKey() {
    this._forcePrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePrimaryKeyInput() {
    return this._forcePrimaryKey;
  }

  // format_avro_schema_registry_url - computed: false, optional: true, required: false
  private _formatAvroSchemaRegistryUrl?: string; 
  public get formatAvroSchemaRegistryUrl() {
    return this.getStringAttribute('format_avro_schema_registry_url');
  }
  public set formatAvroSchemaRegistryUrl(value: string) {
    this._formatAvroSchemaRegistryUrl = value;
  }
  public resetFormatAvroSchemaRegistryUrl() {
    this._formatAvroSchemaRegistryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatAvroSchemaRegistryUrlInput() {
    return this._formatAvroSchemaRegistryUrl;
  }

  // format_regexp - computed: false, optional: true, required: false
  private _formatRegexp?: string; 
  public get formatRegexp() {
    return this.getStringAttribute('format_regexp');
  }
  public set formatRegexp(value: string) {
    this._formatRegexp = value;
  }
  public resetFormatRegexp() {
    this._formatRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatRegexpInput() {
    return this._formatRegexp;
  }

  // format_regexp_skip_unmatched - computed: false, optional: true, required: false
  private _formatRegexpSkipUnmatched?: boolean | cdktf.IResolvable; 
  public get formatRegexpSkipUnmatched() {
    return this.getBooleanAttribute('format_regexp_skip_unmatched');
  }
  public set formatRegexpSkipUnmatched(value: boolean | cdktf.IResolvable) {
    this._formatRegexpSkipUnmatched = value;
  }
  public resetFormatRegexpSkipUnmatched() {
    this._formatRegexpSkipUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatRegexpSkipUnmatchedInput() {
    return this._formatRegexpSkipUnmatched;
  }

  // group_by_overflow_mode - computed: false, optional: true, required: false
  private _groupByOverflowMode?: string; 
  public get groupByOverflowMode() {
    return this.getStringAttribute('group_by_overflow_mode');
  }
  public set groupByOverflowMode(value: string) {
    this._groupByOverflowMode = value;
  }
  public resetGroupByOverflowMode() {
    this._groupByOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByOverflowModeInput() {
    return this._groupByOverflowMode;
  }

  // group_by_two_level_threshold - computed: false, optional: true, required: false
  private _groupByTwoLevelThreshold?: number; 
  public get groupByTwoLevelThreshold() {
    return this.getNumberAttribute('group_by_two_level_threshold');
  }
  public set groupByTwoLevelThreshold(value: number) {
    this._groupByTwoLevelThreshold = value;
  }
  public resetGroupByTwoLevelThreshold() {
    this._groupByTwoLevelThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTwoLevelThresholdInput() {
    return this._groupByTwoLevelThreshold;
  }

  // group_by_two_level_threshold_bytes - computed: false, optional: true, required: false
  private _groupByTwoLevelThresholdBytes?: number; 
  public get groupByTwoLevelThresholdBytes() {
    return this.getNumberAttribute('group_by_two_level_threshold_bytes');
  }
  public set groupByTwoLevelThresholdBytes(value: number) {
    this._groupByTwoLevelThresholdBytes = value;
  }
  public resetGroupByTwoLevelThresholdBytes() {
    this._groupByTwoLevelThresholdBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTwoLevelThresholdBytesInput() {
    return this._groupByTwoLevelThresholdBytes;
  }

  // hedged_connection_timeout_ms - computed: false, optional: true, required: false
  private _hedgedConnectionTimeoutMs?: number; 
  public get hedgedConnectionTimeoutMs() {
    return this.getNumberAttribute('hedged_connection_timeout_ms');
  }
  public set hedgedConnectionTimeoutMs(value: number) {
    this._hedgedConnectionTimeoutMs = value;
  }
  public resetHedgedConnectionTimeoutMs() {
    this._hedgedConnectionTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hedgedConnectionTimeoutMsInput() {
    return this._hedgedConnectionTimeoutMs;
  }

  // http_connection_timeout - computed: false, optional: true, required: false
  private _httpConnectionTimeout?: number; 
  public get httpConnectionTimeout() {
    return this.getNumberAttribute('http_connection_timeout');
  }
  public set httpConnectionTimeout(value: number) {
    this._httpConnectionTimeout = value;
  }
  public resetHttpConnectionTimeout() {
    this._httpConnectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnectionTimeoutInput() {
    return this._httpConnectionTimeout;
  }

  // http_headers_progress_interval - computed: false, optional: true, required: false
  private _httpHeadersProgressInterval?: number; 
  public get httpHeadersProgressInterval() {
    return this.getNumberAttribute('http_headers_progress_interval');
  }
  public set httpHeadersProgressInterval(value: number) {
    this._httpHeadersProgressInterval = value;
  }
  public resetHttpHeadersProgressInterval() {
    this._httpHeadersProgressInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersProgressIntervalInput() {
    return this._httpHeadersProgressInterval;
  }

  // http_max_field_name_size - computed: false, optional: true, required: false
  private _httpMaxFieldNameSize?: number; 
  public get httpMaxFieldNameSize() {
    return this.getNumberAttribute('http_max_field_name_size');
  }
  public set httpMaxFieldNameSize(value: number) {
    this._httpMaxFieldNameSize = value;
  }
  public resetHttpMaxFieldNameSize() {
    this._httpMaxFieldNameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxFieldNameSizeInput() {
    return this._httpMaxFieldNameSize;
  }

  // http_max_field_value_size - computed: false, optional: true, required: false
  private _httpMaxFieldValueSize?: number; 
  public get httpMaxFieldValueSize() {
    return this.getNumberAttribute('http_max_field_value_size');
  }
  public set httpMaxFieldValueSize(value: number) {
    this._httpMaxFieldValueSize = value;
  }
  public resetHttpMaxFieldValueSize() {
    this._httpMaxFieldValueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxFieldValueSizeInput() {
    return this._httpMaxFieldValueSize;
  }

  // http_receive_timeout - computed: false, optional: true, required: false
  private _httpReceiveTimeout?: number; 
  public get httpReceiveTimeout() {
    return this.getNumberAttribute('http_receive_timeout');
  }
  public set httpReceiveTimeout(value: number) {
    this._httpReceiveTimeout = value;
  }
  public resetHttpReceiveTimeout() {
    this._httpReceiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReceiveTimeoutInput() {
    return this._httpReceiveTimeout;
  }

  // http_send_timeout - computed: false, optional: true, required: false
  private _httpSendTimeout?: number; 
  public get httpSendTimeout() {
    return this.getNumberAttribute('http_send_timeout');
  }
  public set httpSendTimeout(value: number) {
    this._httpSendTimeout = value;
  }
  public resetHttpSendTimeout() {
    this._httpSendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSendTimeoutInput() {
    return this._httpSendTimeout;
  }

  // idle_connection_timeout - computed: false, optional: true, required: false
  private _idleConnectionTimeout?: number; 
  public get idleConnectionTimeout() {
    return this.getNumberAttribute('idle_connection_timeout');
  }
  public set idleConnectionTimeout(value: number) {
    this._idleConnectionTimeout = value;
  }
  public resetIdleConnectionTimeout() {
    this._idleConnectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleConnectionTimeoutInput() {
    return this._idleConnectionTimeout;
  }

  // ignore_materialized_views_with_dropped_target_table - computed: false, optional: true, required: false
  private _ignoreMaterializedViewsWithDroppedTargetTable?: boolean | cdktf.IResolvable; 
  public get ignoreMaterializedViewsWithDroppedTargetTable() {
    return this.getBooleanAttribute('ignore_materialized_views_with_dropped_target_table');
  }
  public set ignoreMaterializedViewsWithDroppedTargetTable(value: boolean | cdktf.IResolvable) {
    this._ignoreMaterializedViewsWithDroppedTargetTable = value;
  }
  public resetIgnoreMaterializedViewsWithDroppedTargetTable() {
    this._ignoreMaterializedViewsWithDroppedTargetTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMaterializedViewsWithDroppedTargetTableInput() {
    return this._ignoreMaterializedViewsWithDroppedTargetTable;
  }

  // input_format_defaults_for_omitted_fields - computed: false, optional: true, required: false
  private _inputFormatDefaultsForOmittedFields?: boolean | cdktf.IResolvable; 
  public get inputFormatDefaultsForOmittedFields() {
    return this.getBooleanAttribute('input_format_defaults_for_omitted_fields');
  }
  public set inputFormatDefaultsForOmittedFields(value: boolean | cdktf.IResolvable) {
    this._inputFormatDefaultsForOmittedFields = value;
  }
  public resetInputFormatDefaultsForOmittedFields() {
    this._inputFormatDefaultsForOmittedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatDefaultsForOmittedFieldsInput() {
    return this._inputFormatDefaultsForOmittedFields;
  }

  // input_format_import_nested_json - computed: false, optional: true, required: false
  private _inputFormatImportNestedJson?: boolean | cdktf.IResolvable; 
  public get inputFormatImportNestedJson() {
    return this.getBooleanAttribute('input_format_import_nested_json');
  }
  public set inputFormatImportNestedJson(value: boolean | cdktf.IResolvable) {
    this._inputFormatImportNestedJson = value;
  }
  public resetInputFormatImportNestedJson() {
    this._inputFormatImportNestedJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatImportNestedJsonInput() {
    return this._inputFormatImportNestedJson;
  }

  // input_format_null_as_default - computed: false, optional: true, required: false
  private _inputFormatNullAsDefault?: boolean | cdktf.IResolvable; 
  public get inputFormatNullAsDefault() {
    return this.getBooleanAttribute('input_format_null_as_default');
  }
  public set inputFormatNullAsDefault(value: boolean | cdktf.IResolvable) {
    this._inputFormatNullAsDefault = value;
  }
  public resetInputFormatNullAsDefault() {
    this._inputFormatNullAsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatNullAsDefaultInput() {
    return this._inputFormatNullAsDefault;
  }

  // input_format_parallel_parsing - computed: false, optional: true, required: false
  private _inputFormatParallelParsing?: boolean | cdktf.IResolvable; 
  public get inputFormatParallelParsing() {
    return this.getBooleanAttribute('input_format_parallel_parsing');
  }
  public set inputFormatParallelParsing(value: boolean | cdktf.IResolvable) {
    this._inputFormatParallelParsing = value;
  }
  public resetInputFormatParallelParsing() {
    this._inputFormatParallelParsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatParallelParsingInput() {
    return this._inputFormatParallelParsing;
  }

  // input_format_values_interpret_expressions - computed: false, optional: true, required: false
  private _inputFormatValuesInterpretExpressions?: boolean | cdktf.IResolvable; 
  public get inputFormatValuesInterpretExpressions() {
    return this.getBooleanAttribute('input_format_values_interpret_expressions');
  }
  public set inputFormatValuesInterpretExpressions(value: boolean | cdktf.IResolvable) {
    this._inputFormatValuesInterpretExpressions = value;
  }
  public resetInputFormatValuesInterpretExpressions() {
    this._inputFormatValuesInterpretExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatValuesInterpretExpressionsInput() {
    return this._inputFormatValuesInterpretExpressions;
  }

  // input_format_with_names_use_header - computed: false, optional: true, required: false
  private _inputFormatWithNamesUseHeader?: boolean | cdktf.IResolvable; 
  public get inputFormatWithNamesUseHeader() {
    return this.getBooleanAttribute('input_format_with_names_use_header');
  }
  public set inputFormatWithNamesUseHeader(value: boolean | cdktf.IResolvable) {
    this._inputFormatWithNamesUseHeader = value;
  }
  public resetInputFormatWithNamesUseHeader() {
    this._inputFormatWithNamesUseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatWithNamesUseHeaderInput() {
    return this._inputFormatWithNamesUseHeader;
  }

  // insert_keeper_max_retries - computed: false, optional: true, required: false
  private _insertKeeperMaxRetries?: number; 
  public get insertKeeperMaxRetries() {
    return this.getNumberAttribute('insert_keeper_max_retries');
  }
  public set insertKeeperMaxRetries(value: number) {
    this._insertKeeperMaxRetries = value;
  }
  public resetInsertKeeperMaxRetries() {
    this._insertKeeperMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertKeeperMaxRetriesInput() {
    return this._insertKeeperMaxRetries;
  }

  // insert_null_as_default - computed: false, optional: true, required: false
  private _insertNullAsDefault?: boolean | cdktf.IResolvable; 
  public get insertNullAsDefault() {
    return this.getBooleanAttribute('insert_null_as_default');
  }
  public set insertNullAsDefault(value: boolean | cdktf.IResolvable) {
    this._insertNullAsDefault = value;
  }
  public resetInsertNullAsDefault() {
    this._insertNullAsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertNullAsDefaultInput() {
    return this._insertNullAsDefault;
  }

  // insert_quorum - computed: false, optional: true, required: false
  private _insertQuorum?: number; 
  public get insertQuorum() {
    return this.getNumberAttribute('insert_quorum');
  }
  public set insertQuorum(value: number) {
    this._insertQuorum = value;
  }
  public resetInsertQuorum() {
    this._insertQuorum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertQuorumInput() {
    return this._insertQuorum;
  }

  // insert_quorum_parallel - computed: false, optional: true, required: false
  private _insertQuorumParallel?: boolean | cdktf.IResolvable; 
  public get insertQuorumParallel() {
    return this.getBooleanAttribute('insert_quorum_parallel');
  }
  public set insertQuorumParallel(value: boolean | cdktf.IResolvable) {
    this._insertQuorumParallel = value;
  }
  public resetInsertQuorumParallel() {
    this._insertQuorumParallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertQuorumParallelInput() {
    return this._insertQuorumParallel;
  }

  // insert_quorum_timeout - computed: false, optional: true, required: false
  private _insertQuorumTimeout?: number; 
  public get insertQuorumTimeout() {
    return this.getNumberAttribute('insert_quorum_timeout');
  }
  public set insertQuorumTimeout(value: number) {
    this._insertQuorumTimeout = value;
  }
  public resetInsertQuorumTimeout() {
    this._insertQuorumTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertQuorumTimeoutInput() {
    return this._insertQuorumTimeout;
  }

  // join_algorithm - computed: false, optional: true, required: false
  private _joinAlgorithm?: string[]; 
  public get joinAlgorithm() {
    return cdktf.Fn.tolist(this.getListAttribute('join_algorithm'));
  }
  public set joinAlgorithm(value: string[]) {
    this._joinAlgorithm = value;
  }
  public resetJoinAlgorithm() {
    this._joinAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinAlgorithmInput() {
    return this._joinAlgorithm;
  }

  // join_overflow_mode - computed: false, optional: true, required: false
  private _joinOverflowMode?: string; 
  public get joinOverflowMode() {
    return this.getStringAttribute('join_overflow_mode');
  }
  public set joinOverflowMode(value: string) {
    this._joinOverflowMode = value;
  }
  public resetJoinOverflowMode() {
    this._joinOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinOverflowModeInput() {
    return this._joinOverflowMode;
  }

  // join_use_nulls - computed: false, optional: true, required: false
  private _joinUseNulls?: boolean | cdktf.IResolvable; 
  public get joinUseNulls() {
    return this.getBooleanAttribute('join_use_nulls');
  }
  public set joinUseNulls(value: boolean | cdktf.IResolvable) {
    this._joinUseNulls = value;
  }
  public resetJoinUseNulls() {
    this._joinUseNulls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinUseNullsInput() {
    return this._joinUseNulls;
  }

  // joined_subquery_requires_alias - computed: false, optional: true, required: false
  private _joinedSubqueryRequiresAlias?: boolean | cdktf.IResolvable; 
  public get joinedSubqueryRequiresAlias() {
    return this.getBooleanAttribute('joined_subquery_requires_alias');
  }
  public set joinedSubqueryRequiresAlias(value: boolean | cdktf.IResolvable) {
    this._joinedSubqueryRequiresAlias = value;
  }
  public resetJoinedSubqueryRequiresAlias() {
    this._joinedSubqueryRequiresAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinedSubqueryRequiresAliasInput() {
    return this._joinedSubqueryRequiresAlias;
  }

  // load_balancing - computed: false, optional: true, required: false
  private _loadBalancing?: string; 
  public get loadBalancing() {
    return this.getStringAttribute('load_balancing');
  }
  public set loadBalancing(value: string) {
    this._loadBalancing = value;
  }
  public resetLoadBalancing() {
    this._loadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingInput() {
    return this._loadBalancing;
  }

  // local_filesystem_read_method - computed: false, optional: true, required: false
  private _localFilesystemReadMethod?: string; 
  public get localFilesystemReadMethod() {
    return this.getStringAttribute('local_filesystem_read_method');
  }
  public set localFilesystemReadMethod(value: string) {
    this._localFilesystemReadMethod = value;
  }
  public resetLocalFilesystemReadMethod() {
    this._localFilesystemReadMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localFilesystemReadMethodInput() {
    return this._localFilesystemReadMethod;
  }

  // log_processors_profiles - computed: false, optional: true, required: false
  private _logProcessorsProfiles?: boolean | cdktf.IResolvable; 
  public get logProcessorsProfiles() {
    return this.getBooleanAttribute('log_processors_profiles');
  }
  public set logProcessorsProfiles(value: boolean | cdktf.IResolvable) {
    this._logProcessorsProfiles = value;
  }
  public resetLogProcessorsProfiles() {
    this._logProcessorsProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logProcessorsProfilesInput() {
    return this._logProcessorsProfiles;
  }

  // log_queries_probability - computed: false, optional: true, required: false
  private _logQueriesProbability?: number; 
  public get logQueriesProbability() {
    return this.getNumberAttribute('log_queries_probability');
  }
  public set logQueriesProbability(value: number) {
    this._logQueriesProbability = value;
  }
  public resetLogQueriesProbability() {
    this._logQueriesProbability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueriesProbabilityInput() {
    return this._logQueriesProbability;
  }

  // log_query_threads - computed: false, optional: true, required: false
  private _logQueryThreads?: boolean | cdktf.IResolvable; 
  public get logQueryThreads() {
    return this.getBooleanAttribute('log_query_threads');
  }
  public set logQueryThreads(value: boolean | cdktf.IResolvable) {
    this._logQueryThreads = value;
  }
  public resetLogQueryThreads() {
    this._logQueryThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryThreadsInput() {
    return this._logQueryThreads;
  }

  // log_query_views - computed: false, optional: true, required: false
  private _logQueryViews?: boolean | cdktf.IResolvable; 
  public get logQueryViews() {
    return this.getBooleanAttribute('log_query_views');
  }
  public set logQueryViews(value: boolean | cdktf.IResolvable) {
    this._logQueryViews = value;
  }
  public resetLogQueryViews() {
    this._logQueryViews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryViewsInput() {
    return this._logQueryViews;
  }

  // low_cardinality_allow_in_native_format - computed: false, optional: true, required: false
  private _lowCardinalityAllowInNativeFormat?: boolean | cdktf.IResolvable; 
  public get lowCardinalityAllowInNativeFormat() {
    return this.getBooleanAttribute('low_cardinality_allow_in_native_format');
  }
  public set lowCardinalityAllowInNativeFormat(value: boolean | cdktf.IResolvable) {
    this._lowCardinalityAllowInNativeFormat = value;
  }
  public resetLowCardinalityAllowInNativeFormat() {
    this._lowCardinalityAllowInNativeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowCardinalityAllowInNativeFormatInput() {
    return this._lowCardinalityAllowInNativeFormat;
  }

  // max_ast_depth - computed: false, optional: true, required: false
  private _maxAstDepth?: number; 
  public get maxAstDepth() {
    return this.getNumberAttribute('max_ast_depth');
  }
  public set maxAstDepth(value: number) {
    this._maxAstDepth = value;
  }
  public resetMaxAstDepth() {
    this._maxAstDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAstDepthInput() {
    return this._maxAstDepth;
  }

  // max_ast_elements - computed: false, optional: true, required: false
  private _maxAstElements?: number; 
  public get maxAstElements() {
    return this.getNumberAttribute('max_ast_elements');
  }
  public set maxAstElements(value: number) {
    this._maxAstElements = value;
  }
  public resetMaxAstElements() {
    this._maxAstElements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAstElementsInput() {
    return this._maxAstElements;
  }

  // max_block_size - computed: false, optional: true, required: false
  private _maxBlockSize?: number; 
  public get maxBlockSize() {
    return this.getNumberAttribute('max_block_size');
  }
  public set maxBlockSize(value: number) {
    this._maxBlockSize = value;
  }
  public resetMaxBlockSize() {
    this._maxBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBlockSizeInput() {
    return this._maxBlockSize;
  }

  // max_bytes_before_external_group_by - computed: false, optional: true, required: false
  private _maxBytesBeforeExternalGroupBy?: number; 
  public get maxBytesBeforeExternalGroupBy() {
    return this.getNumberAttribute('max_bytes_before_external_group_by');
  }
  public set maxBytesBeforeExternalGroupBy(value: number) {
    this._maxBytesBeforeExternalGroupBy = value;
  }
  public resetMaxBytesBeforeExternalGroupBy() {
    this._maxBytesBeforeExternalGroupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesBeforeExternalGroupByInput() {
    return this._maxBytesBeforeExternalGroupBy;
  }

  // max_bytes_before_external_sort - computed: false, optional: true, required: false
  private _maxBytesBeforeExternalSort?: number; 
  public get maxBytesBeforeExternalSort() {
    return this.getNumberAttribute('max_bytes_before_external_sort');
  }
  public set maxBytesBeforeExternalSort(value: number) {
    this._maxBytesBeforeExternalSort = value;
  }
  public resetMaxBytesBeforeExternalSort() {
    this._maxBytesBeforeExternalSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesBeforeExternalSortInput() {
    return this._maxBytesBeforeExternalSort;
  }

  // max_bytes_in_distinct - computed: false, optional: true, required: false
  private _maxBytesInDistinct?: number; 
  public get maxBytesInDistinct() {
    return this.getNumberAttribute('max_bytes_in_distinct');
  }
  public set maxBytesInDistinct(value: number) {
    this._maxBytesInDistinct = value;
  }
  public resetMaxBytesInDistinct() {
    this._maxBytesInDistinct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInDistinctInput() {
    return this._maxBytesInDistinct;
  }

  // max_bytes_in_join - computed: false, optional: true, required: false
  private _maxBytesInJoin?: number; 
  public get maxBytesInJoin() {
    return this.getNumberAttribute('max_bytes_in_join');
  }
  public set maxBytesInJoin(value: number) {
    this._maxBytesInJoin = value;
  }
  public resetMaxBytesInJoin() {
    this._maxBytesInJoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInJoinInput() {
    return this._maxBytesInJoin;
  }

  // max_bytes_in_set - computed: false, optional: true, required: false
  private _maxBytesInSet?: number; 
  public get maxBytesInSet() {
    return this.getNumberAttribute('max_bytes_in_set');
  }
  public set maxBytesInSet(value: number) {
    this._maxBytesInSet = value;
  }
  public resetMaxBytesInSet() {
    this._maxBytesInSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInSetInput() {
    return this._maxBytesInSet;
  }

  // max_bytes_to_read - computed: false, optional: true, required: false
  private _maxBytesToRead?: number; 
  public get maxBytesToRead() {
    return this.getNumberAttribute('max_bytes_to_read');
  }
  public set maxBytesToRead(value: number) {
    this._maxBytesToRead = value;
  }
  public resetMaxBytesToRead() {
    this._maxBytesToRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesToReadInput() {
    return this._maxBytesToRead;
  }

  // max_bytes_to_sort - computed: false, optional: true, required: false
  private _maxBytesToSort?: number; 
  public get maxBytesToSort() {
    return this.getNumberAttribute('max_bytes_to_sort');
  }
  public set maxBytesToSort(value: number) {
    this._maxBytesToSort = value;
  }
  public resetMaxBytesToSort() {
    this._maxBytesToSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesToSortInput() {
    return this._maxBytesToSort;
  }

  // max_bytes_to_transfer - computed: false, optional: true, required: false
  private _maxBytesToTransfer?: number; 
  public get maxBytesToTransfer() {
    return this.getNumberAttribute('max_bytes_to_transfer');
  }
  public set maxBytesToTransfer(value: number) {
    this._maxBytesToTransfer = value;
  }
  public resetMaxBytesToTransfer() {
    this._maxBytesToTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesToTransferInput() {
    return this._maxBytesToTransfer;
  }

  // max_columns_to_read - computed: false, optional: true, required: false
  private _maxColumnsToRead?: number; 
  public get maxColumnsToRead() {
    return this.getNumberAttribute('max_columns_to_read');
  }
  public set maxColumnsToRead(value: number) {
    this._maxColumnsToRead = value;
  }
  public resetMaxColumnsToRead() {
    this._maxColumnsToRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxColumnsToReadInput() {
    return this._maxColumnsToRead;
  }

  // max_concurrent_queries_for_user - computed: false, optional: true, required: false
  private _maxConcurrentQueriesForUser?: number; 
  public get maxConcurrentQueriesForUser() {
    return this.getNumberAttribute('max_concurrent_queries_for_user');
  }
  public set maxConcurrentQueriesForUser(value: number) {
    this._maxConcurrentQueriesForUser = value;
  }
  public resetMaxConcurrentQueriesForUser() {
    this._maxConcurrentQueriesForUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentQueriesForUserInput() {
    return this._maxConcurrentQueriesForUser;
  }

  // max_execution_time - computed: false, optional: true, required: false
  private _maxExecutionTime?: number; 
  public get maxExecutionTime() {
    return this.getNumberAttribute('max_execution_time');
  }
  public set maxExecutionTime(value: number) {
    this._maxExecutionTime = value;
  }
  public resetMaxExecutionTime() {
    this._maxExecutionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutionTimeInput() {
    return this._maxExecutionTime;
  }

  // max_expanded_ast_elements - computed: false, optional: true, required: false
  private _maxExpandedAstElements?: number; 
  public get maxExpandedAstElements() {
    return this.getNumberAttribute('max_expanded_ast_elements');
  }
  public set maxExpandedAstElements(value: number) {
    this._maxExpandedAstElements = value;
  }
  public resetMaxExpandedAstElements() {
    this._maxExpandedAstElements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExpandedAstElementsInput() {
    return this._maxExpandedAstElements;
  }

  // max_final_threads - computed: false, optional: true, required: false
  private _maxFinalThreads?: number; 
  public get maxFinalThreads() {
    return this.getNumberAttribute('max_final_threads');
  }
  public set maxFinalThreads(value: number) {
    this._maxFinalThreads = value;
  }
  public resetMaxFinalThreads() {
    this._maxFinalThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFinalThreadsInput() {
    return this._maxFinalThreads;
  }

  // max_http_get_redirects - computed: false, optional: true, required: false
  private _maxHttpGetRedirects?: number; 
  public get maxHttpGetRedirects() {
    return this.getNumberAttribute('max_http_get_redirects');
  }
  public set maxHttpGetRedirects(value: number) {
    this._maxHttpGetRedirects = value;
  }
  public resetMaxHttpGetRedirects() {
    this._maxHttpGetRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttpGetRedirectsInput() {
    return this._maxHttpGetRedirects;
  }

  // max_insert_block_size - computed: false, optional: true, required: false
  private _maxInsertBlockSize?: number; 
  public get maxInsertBlockSize() {
    return this.getNumberAttribute('max_insert_block_size');
  }
  public set maxInsertBlockSize(value: number) {
    this._maxInsertBlockSize = value;
  }
  public resetMaxInsertBlockSize() {
    this._maxInsertBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInsertBlockSizeInput() {
    return this._maxInsertBlockSize;
  }

  // max_insert_threads - computed: false, optional: true, required: false
  private _maxInsertThreads?: number; 
  public get maxInsertThreads() {
    return this.getNumberAttribute('max_insert_threads');
  }
  public set maxInsertThreads(value: number) {
    this._maxInsertThreads = value;
  }
  public resetMaxInsertThreads() {
    this._maxInsertThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInsertThreadsInput() {
    return this._maxInsertThreads;
  }

  // max_memory_usage - computed: false, optional: true, required: false
  private _maxMemoryUsage?: number; 
  public get maxMemoryUsage() {
    return this.getNumberAttribute('max_memory_usage');
  }
  public set maxMemoryUsage(value: number) {
    this._maxMemoryUsage = value;
  }
  public resetMaxMemoryUsage() {
    this._maxMemoryUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryUsageInput() {
    return this._maxMemoryUsage;
  }

  // max_memory_usage_for_user - computed: false, optional: true, required: false
  private _maxMemoryUsageForUser?: number; 
  public get maxMemoryUsageForUser() {
    return this.getNumberAttribute('max_memory_usage_for_user');
  }
  public set maxMemoryUsageForUser(value: number) {
    this._maxMemoryUsageForUser = value;
  }
  public resetMaxMemoryUsageForUser() {
    this._maxMemoryUsageForUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryUsageForUserInput() {
    return this._maxMemoryUsageForUser;
  }

  // max_network_bandwidth - computed: false, optional: true, required: false
  private _maxNetworkBandwidth?: number; 
  public get maxNetworkBandwidth() {
    return this.getNumberAttribute('max_network_bandwidth');
  }
  public set maxNetworkBandwidth(value: number) {
    this._maxNetworkBandwidth = value;
  }
  public resetMaxNetworkBandwidth() {
    this._maxNetworkBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNetworkBandwidthInput() {
    return this._maxNetworkBandwidth;
  }

  // max_network_bandwidth_for_user - computed: false, optional: true, required: false
  private _maxNetworkBandwidthForUser?: number; 
  public get maxNetworkBandwidthForUser() {
    return this.getNumberAttribute('max_network_bandwidth_for_user');
  }
  public set maxNetworkBandwidthForUser(value: number) {
    this._maxNetworkBandwidthForUser = value;
  }
  public resetMaxNetworkBandwidthForUser() {
    this._maxNetworkBandwidthForUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNetworkBandwidthForUserInput() {
    return this._maxNetworkBandwidthForUser;
  }

  // max_parser_depth - computed: false, optional: true, required: false
  private _maxParserDepth?: number; 
  public get maxParserDepth() {
    return this.getNumberAttribute('max_parser_depth');
  }
  public set maxParserDepth(value: number) {
    this._maxParserDepth = value;
  }
  public resetMaxParserDepth() {
    this._maxParserDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParserDepthInput() {
    return this._maxParserDepth;
  }

  // max_partitions_per_insert_block - computed: false, optional: true, required: false
  private _maxPartitionsPerInsertBlock?: number; 
  public get maxPartitionsPerInsertBlock() {
    return this.getNumberAttribute('max_partitions_per_insert_block');
  }
  public set maxPartitionsPerInsertBlock(value: number) {
    this._maxPartitionsPerInsertBlock = value;
  }
  public resetMaxPartitionsPerInsertBlock() {
    this._maxPartitionsPerInsertBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPartitionsPerInsertBlockInput() {
    return this._maxPartitionsPerInsertBlock;
  }

  // max_query_size - computed: false, optional: true, required: false
  private _maxQuerySize?: number; 
  public get maxQuerySize() {
    return this.getNumberAttribute('max_query_size');
  }
  public set maxQuerySize(value: number) {
    this._maxQuerySize = value;
  }
  public resetMaxQuerySize() {
    this._maxQuerySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuerySizeInput() {
    return this._maxQuerySize;
  }

  // max_read_buffer_size - computed: false, optional: true, required: false
  private _maxReadBufferSize?: number; 
  public get maxReadBufferSize() {
    return this.getNumberAttribute('max_read_buffer_size');
  }
  public set maxReadBufferSize(value: number) {
    this._maxReadBufferSize = value;
  }
  public resetMaxReadBufferSize() {
    this._maxReadBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReadBufferSizeInput() {
    return this._maxReadBufferSize;
  }

  // max_replica_delay_for_distributed_queries - computed: false, optional: true, required: false
  private _maxReplicaDelayForDistributedQueries?: number; 
  public get maxReplicaDelayForDistributedQueries() {
    return this.getNumberAttribute('max_replica_delay_for_distributed_queries');
  }
  public set maxReplicaDelayForDistributedQueries(value: number) {
    this._maxReplicaDelayForDistributedQueries = value;
  }
  public resetMaxReplicaDelayForDistributedQueries() {
    this._maxReplicaDelayForDistributedQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicaDelayForDistributedQueriesInput() {
    return this._maxReplicaDelayForDistributedQueries;
  }

  // max_result_bytes - computed: false, optional: true, required: false
  private _maxResultBytes?: number; 
  public get maxResultBytes() {
    return this.getNumberAttribute('max_result_bytes');
  }
  public set maxResultBytes(value: number) {
    this._maxResultBytes = value;
  }
  public resetMaxResultBytes() {
    this._maxResultBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultBytesInput() {
    return this._maxResultBytes;
  }

  // max_result_rows - computed: false, optional: true, required: false
  private _maxResultRows?: number; 
  public get maxResultRows() {
    return this.getNumberAttribute('max_result_rows');
  }
  public set maxResultRows(value: number) {
    this._maxResultRows = value;
  }
  public resetMaxResultRows() {
    this._maxResultRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultRowsInput() {
    return this._maxResultRows;
  }

  // max_rows_in_distinct - computed: false, optional: true, required: false
  private _maxRowsInDistinct?: number; 
  public get maxRowsInDistinct() {
    return this.getNumberAttribute('max_rows_in_distinct');
  }
  public set maxRowsInDistinct(value: number) {
    this._maxRowsInDistinct = value;
  }
  public resetMaxRowsInDistinct() {
    this._maxRowsInDistinct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsInDistinctInput() {
    return this._maxRowsInDistinct;
  }

  // max_rows_in_join - computed: false, optional: true, required: false
  private _maxRowsInJoin?: number; 
  public get maxRowsInJoin() {
    return this.getNumberAttribute('max_rows_in_join');
  }
  public set maxRowsInJoin(value: number) {
    this._maxRowsInJoin = value;
  }
  public resetMaxRowsInJoin() {
    this._maxRowsInJoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsInJoinInput() {
    return this._maxRowsInJoin;
  }

  // max_rows_in_set - computed: false, optional: true, required: false
  private _maxRowsInSet?: number; 
  public get maxRowsInSet() {
    return this.getNumberAttribute('max_rows_in_set');
  }
  public set maxRowsInSet(value: number) {
    this._maxRowsInSet = value;
  }
  public resetMaxRowsInSet() {
    this._maxRowsInSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsInSetInput() {
    return this._maxRowsInSet;
  }

  // max_rows_to_group_by - computed: false, optional: true, required: false
  private _maxRowsToGroupBy?: number; 
  public get maxRowsToGroupBy() {
    return this.getNumberAttribute('max_rows_to_group_by');
  }
  public set maxRowsToGroupBy(value: number) {
    this._maxRowsToGroupBy = value;
  }
  public resetMaxRowsToGroupBy() {
    this._maxRowsToGroupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsToGroupByInput() {
    return this._maxRowsToGroupBy;
  }

  // max_rows_to_read - computed: false, optional: true, required: false
  private _maxRowsToRead?: number; 
  public get maxRowsToRead() {
    return this.getNumberAttribute('max_rows_to_read');
  }
  public set maxRowsToRead(value: number) {
    this._maxRowsToRead = value;
  }
  public resetMaxRowsToRead() {
    this._maxRowsToRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsToReadInput() {
    return this._maxRowsToRead;
  }

  // max_rows_to_sort - computed: false, optional: true, required: false
  private _maxRowsToSort?: number; 
  public get maxRowsToSort() {
    return this.getNumberAttribute('max_rows_to_sort');
  }
  public set maxRowsToSort(value: number) {
    this._maxRowsToSort = value;
  }
  public resetMaxRowsToSort() {
    this._maxRowsToSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsToSortInput() {
    return this._maxRowsToSort;
  }

  // max_rows_to_transfer - computed: false, optional: true, required: false
  private _maxRowsToTransfer?: number; 
  public get maxRowsToTransfer() {
    return this.getNumberAttribute('max_rows_to_transfer');
  }
  public set maxRowsToTransfer(value: number) {
    this._maxRowsToTransfer = value;
  }
  public resetMaxRowsToTransfer() {
    this._maxRowsToTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsToTransferInput() {
    return this._maxRowsToTransfer;
  }

  // max_temporary_columns - computed: false, optional: true, required: false
  private _maxTemporaryColumns?: number; 
  public get maxTemporaryColumns() {
    return this.getNumberAttribute('max_temporary_columns');
  }
  public set maxTemporaryColumns(value: number) {
    this._maxTemporaryColumns = value;
  }
  public resetMaxTemporaryColumns() {
    this._maxTemporaryColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTemporaryColumnsInput() {
    return this._maxTemporaryColumns;
  }

  // max_temporary_data_on_disk_size_for_query - computed: false, optional: true, required: false
  private _maxTemporaryDataOnDiskSizeForQuery?: number; 
  public get maxTemporaryDataOnDiskSizeForQuery() {
    return this.getNumberAttribute('max_temporary_data_on_disk_size_for_query');
  }
  public set maxTemporaryDataOnDiskSizeForQuery(value: number) {
    this._maxTemporaryDataOnDiskSizeForQuery = value;
  }
  public resetMaxTemporaryDataOnDiskSizeForQuery() {
    this._maxTemporaryDataOnDiskSizeForQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTemporaryDataOnDiskSizeForQueryInput() {
    return this._maxTemporaryDataOnDiskSizeForQuery;
  }

  // max_temporary_data_on_disk_size_for_user - computed: false, optional: true, required: false
  private _maxTemporaryDataOnDiskSizeForUser?: number; 
  public get maxTemporaryDataOnDiskSizeForUser() {
    return this.getNumberAttribute('max_temporary_data_on_disk_size_for_user');
  }
  public set maxTemporaryDataOnDiskSizeForUser(value: number) {
    this._maxTemporaryDataOnDiskSizeForUser = value;
  }
  public resetMaxTemporaryDataOnDiskSizeForUser() {
    this._maxTemporaryDataOnDiskSizeForUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTemporaryDataOnDiskSizeForUserInput() {
    return this._maxTemporaryDataOnDiskSizeForUser;
  }

  // max_temporary_non_const_columns - computed: false, optional: true, required: false
  private _maxTemporaryNonConstColumns?: number; 
  public get maxTemporaryNonConstColumns() {
    return this.getNumberAttribute('max_temporary_non_const_columns');
  }
  public set maxTemporaryNonConstColumns(value: number) {
    this._maxTemporaryNonConstColumns = value;
  }
  public resetMaxTemporaryNonConstColumns() {
    this._maxTemporaryNonConstColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTemporaryNonConstColumnsInput() {
    return this._maxTemporaryNonConstColumns;
  }

  // max_threads - computed: false, optional: true, required: false
  private _maxThreads?: number; 
  public get maxThreads() {
    return this.getNumberAttribute('max_threads');
  }
  public set maxThreads(value: number) {
    this._maxThreads = value;
  }
  public resetMaxThreads() {
    this._maxThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThreadsInput() {
    return this._maxThreads;
  }

  // memory_overcommit_ratio_denominator - computed: false, optional: true, required: false
  private _memoryOvercommitRatioDenominator?: number; 
  public get memoryOvercommitRatioDenominator() {
    return this.getNumberAttribute('memory_overcommit_ratio_denominator');
  }
  public set memoryOvercommitRatioDenominator(value: number) {
    this._memoryOvercommitRatioDenominator = value;
  }
  public resetMemoryOvercommitRatioDenominator() {
    this._memoryOvercommitRatioDenominator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryOvercommitRatioDenominatorInput() {
    return this._memoryOvercommitRatioDenominator;
  }

  // memory_overcommit_ratio_denominator_for_user - computed: false, optional: true, required: false
  private _memoryOvercommitRatioDenominatorForUser?: number; 
  public get memoryOvercommitRatioDenominatorForUser() {
    return this.getNumberAttribute('memory_overcommit_ratio_denominator_for_user');
  }
  public set memoryOvercommitRatioDenominatorForUser(value: number) {
    this._memoryOvercommitRatioDenominatorForUser = value;
  }
  public resetMemoryOvercommitRatioDenominatorForUser() {
    this._memoryOvercommitRatioDenominatorForUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryOvercommitRatioDenominatorForUserInput() {
    return this._memoryOvercommitRatioDenominatorForUser;
  }

  // memory_profiler_sample_probability - computed: false, optional: true, required: false
  private _memoryProfilerSampleProbability?: number; 
  public get memoryProfilerSampleProbability() {
    return this.getNumberAttribute('memory_profiler_sample_probability');
  }
  public set memoryProfilerSampleProbability(value: number) {
    this._memoryProfilerSampleProbability = value;
  }
  public resetMemoryProfilerSampleProbability() {
    this._memoryProfilerSampleProbability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryProfilerSampleProbabilityInput() {
    return this._memoryProfilerSampleProbability;
  }

  // memory_profiler_step - computed: false, optional: true, required: false
  private _memoryProfilerStep?: number; 
  public get memoryProfilerStep() {
    return this.getNumberAttribute('memory_profiler_step');
  }
  public set memoryProfilerStep(value: number) {
    this._memoryProfilerStep = value;
  }
  public resetMemoryProfilerStep() {
    this._memoryProfilerStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryProfilerStepInput() {
    return this._memoryProfilerStep;
  }

  // memory_usage_overcommit_max_wait_microseconds - computed: false, optional: true, required: false
  private _memoryUsageOvercommitMaxWaitMicroseconds?: number; 
  public get memoryUsageOvercommitMaxWaitMicroseconds() {
    return this.getNumberAttribute('memory_usage_overcommit_max_wait_microseconds');
  }
  public set memoryUsageOvercommitMaxWaitMicroseconds(value: number) {
    this._memoryUsageOvercommitMaxWaitMicroseconds = value;
  }
  public resetMemoryUsageOvercommitMaxWaitMicroseconds() {
    this._memoryUsageOvercommitMaxWaitMicroseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageOvercommitMaxWaitMicrosecondsInput() {
    return this._memoryUsageOvercommitMaxWaitMicroseconds;
  }

  // merge_tree_max_bytes_to_use_cache - computed: false, optional: true, required: false
  private _mergeTreeMaxBytesToUseCache?: number; 
  public get mergeTreeMaxBytesToUseCache() {
    return this.getNumberAttribute('merge_tree_max_bytes_to_use_cache');
  }
  public set mergeTreeMaxBytesToUseCache(value: number) {
    this._mergeTreeMaxBytesToUseCache = value;
  }
  public resetMergeTreeMaxBytesToUseCache() {
    this._mergeTreeMaxBytesToUseCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeMaxBytesToUseCacheInput() {
    return this._mergeTreeMaxBytesToUseCache;
  }

  // merge_tree_max_rows_to_use_cache - computed: false, optional: true, required: false
  private _mergeTreeMaxRowsToUseCache?: number; 
  public get mergeTreeMaxRowsToUseCache() {
    return this.getNumberAttribute('merge_tree_max_rows_to_use_cache');
  }
  public set mergeTreeMaxRowsToUseCache(value: number) {
    this._mergeTreeMaxRowsToUseCache = value;
  }
  public resetMergeTreeMaxRowsToUseCache() {
    this._mergeTreeMaxRowsToUseCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeMaxRowsToUseCacheInput() {
    return this._mergeTreeMaxRowsToUseCache;
  }

  // merge_tree_min_bytes_for_concurrent_read - computed: false, optional: true, required: false
  private _mergeTreeMinBytesForConcurrentRead?: number; 
  public get mergeTreeMinBytesForConcurrentRead() {
    return this.getNumberAttribute('merge_tree_min_bytes_for_concurrent_read');
  }
  public set mergeTreeMinBytesForConcurrentRead(value: number) {
    this._mergeTreeMinBytesForConcurrentRead = value;
  }
  public resetMergeTreeMinBytesForConcurrentRead() {
    this._mergeTreeMinBytesForConcurrentRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeMinBytesForConcurrentReadInput() {
    return this._mergeTreeMinBytesForConcurrentRead;
  }

  // merge_tree_min_rows_for_concurrent_read - computed: false, optional: true, required: false
  private _mergeTreeMinRowsForConcurrentRead?: number; 
  public get mergeTreeMinRowsForConcurrentRead() {
    return this.getNumberAttribute('merge_tree_min_rows_for_concurrent_read');
  }
  public set mergeTreeMinRowsForConcurrentRead(value: number) {
    this._mergeTreeMinRowsForConcurrentRead = value;
  }
  public resetMergeTreeMinRowsForConcurrentRead() {
    this._mergeTreeMinRowsForConcurrentRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeMinRowsForConcurrentReadInput() {
    return this._mergeTreeMinRowsForConcurrentRead;
  }

  // min_bytes_to_use_direct_io - computed: false, optional: true, required: false
  private _minBytesToUseDirectIo?: number; 
  public get minBytesToUseDirectIo() {
    return this.getNumberAttribute('min_bytes_to_use_direct_io');
  }
  public set minBytesToUseDirectIo(value: number) {
    this._minBytesToUseDirectIo = value;
  }
  public resetMinBytesToUseDirectIo() {
    this._minBytesToUseDirectIo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBytesToUseDirectIoInput() {
    return this._minBytesToUseDirectIo;
  }

  // min_count_to_compile_expression - computed: false, optional: true, required: false
  private _minCountToCompileExpression?: number; 
  public get minCountToCompileExpression() {
    return this.getNumberAttribute('min_count_to_compile_expression');
  }
  public set minCountToCompileExpression(value: number) {
    this._minCountToCompileExpression = value;
  }
  public resetMinCountToCompileExpression() {
    this._minCountToCompileExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountToCompileExpressionInput() {
    return this._minCountToCompileExpression;
  }

  // min_execution_speed - computed: false, optional: true, required: false
  private _minExecutionSpeed?: number; 
  public get minExecutionSpeed() {
    return this.getNumberAttribute('min_execution_speed');
  }
  public set minExecutionSpeed(value: number) {
    this._minExecutionSpeed = value;
  }
  public resetMinExecutionSpeed() {
    this._minExecutionSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExecutionSpeedInput() {
    return this._minExecutionSpeed;
  }

  // min_execution_speed_bytes - computed: false, optional: true, required: false
  private _minExecutionSpeedBytes?: number; 
  public get minExecutionSpeedBytes() {
    return this.getNumberAttribute('min_execution_speed_bytes');
  }
  public set minExecutionSpeedBytes(value: number) {
    this._minExecutionSpeedBytes = value;
  }
  public resetMinExecutionSpeedBytes() {
    this._minExecutionSpeedBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExecutionSpeedBytesInput() {
    return this._minExecutionSpeedBytes;
  }

  // min_insert_block_size_bytes - computed: false, optional: true, required: false
  private _minInsertBlockSizeBytes?: number; 
  public get minInsertBlockSizeBytes() {
    return this.getNumberAttribute('min_insert_block_size_bytes');
  }
  public set minInsertBlockSizeBytes(value: number) {
    this._minInsertBlockSizeBytes = value;
  }
  public resetMinInsertBlockSizeBytes() {
    this._minInsertBlockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInsertBlockSizeBytesInput() {
    return this._minInsertBlockSizeBytes;
  }

  // min_insert_block_size_rows - computed: false, optional: true, required: false
  private _minInsertBlockSizeRows?: number; 
  public get minInsertBlockSizeRows() {
    return this.getNumberAttribute('min_insert_block_size_rows');
  }
  public set minInsertBlockSizeRows(value: number) {
    this._minInsertBlockSizeRows = value;
  }
  public resetMinInsertBlockSizeRows() {
    this._minInsertBlockSizeRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInsertBlockSizeRowsInput() {
    return this._minInsertBlockSizeRows;
  }

  // output_format_json_quote_64bit_integers - computed: false, optional: true, required: false
  private _outputFormatJsonQuote64BitIntegers?: boolean | cdktf.IResolvable; 
  public get outputFormatJsonQuote64BitIntegers() {
    return this.getBooleanAttribute('output_format_json_quote_64bit_integers');
  }
  public set outputFormatJsonQuote64BitIntegers(value: boolean | cdktf.IResolvable) {
    this._outputFormatJsonQuote64BitIntegers = value;
  }
  public resetOutputFormatJsonQuote64BitIntegers() {
    this._outputFormatJsonQuote64BitIntegers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatJsonQuote64BitIntegersInput() {
    return this._outputFormatJsonQuote64BitIntegers;
  }

  // output_format_json_quote_denormals - computed: false, optional: true, required: false
  private _outputFormatJsonQuoteDenormals?: boolean | cdktf.IResolvable; 
  public get outputFormatJsonQuoteDenormals() {
    return this.getBooleanAttribute('output_format_json_quote_denormals');
  }
  public set outputFormatJsonQuoteDenormals(value: boolean | cdktf.IResolvable) {
    this._outputFormatJsonQuoteDenormals = value;
  }
  public resetOutputFormatJsonQuoteDenormals() {
    this._outputFormatJsonQuoteDenormals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatJsonQuoteDenormalsInput() {
    return this._outputFormatJsonQuoteDenormals;
  }

  // prefer_localhost_replica - computed: false, optional: true, required: false
  private _preferLocalhostReplica?: boolean | cdktf.IResolvable; 
  public get preferLocalhostReplica() {
    return this.getBooleanAttribute('prefer_localhost_replica');
  }
  public set preferLocalhostReplica(value: boolean | cdktf.IResolvable) {
    this._preferLocalhostReplica = value;
  }
  public resetPreferLocalhostReplica() {
    this._preferLocalhostReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferLocalhostReplicaInput() {
    return this._preferLocalhostReplica;
  }

  // priority - computed: false, optional: true, required: false
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

  // query_cache_max_entries - computed: false, optional: true, required: false
  private _queryCacheMaxEntries?: number; 
  public get queryCacheMaxEntries() {
    return this.getNumberAttribute('query_cache_max_entries');
  }
  public set queryCacheMaxEntries(value: number) {
    this._queryCacheMaxEntries = value;
  }
  public resetQueryCacheMaxEntries() {
    this._queryCacheMaxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheMaxEntriesInput() {
    return this._queryCacheMaxEntries;
  }

  // query_cache_max_size_in_bytes - computed: false, optional: true, required: false
  private _queryCacheMaxSizeInBytes?: number; 
  public get queryCacheMaxSizeInBytes() {
    return this.getNumberAttribute('query_cache_max_size_in_bytes');
  }
  public set queryCacheMaxSizeInBytes(value: number) {
    this._queryCacheMaxSizeInBytes = value;
  }
  public resetQueryCacheMaxSizeInBytes() {
    this._queryCacheMaxSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheMaxSizeInBytesInput() {
    return this._queryCacheMaxSizeInBytes;
  }

  // query_cache_min_query_duration - computed: false, optional: true, required: false
  private _queryCacheMinQueryDuration?: number; 
  public get queryCacheMinQueryDuration() {
    return this.getNumberAttribute('query_cache_min_query_duration');
  }
  public set queryCacheMinQueryDuration(value: number) {
    this._queryCacheMinQueryDuration = value;
  }
  public resetQueryCacheMinQueryDuration() {
    this._queryCacheMinQueryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheMinQueryDurationInput() {
    return this._queryCacheMinQueryDuration;
  }

  // query_cache_min_query_runs - computed: false, optional: true, required: false
  private _queryCacheMinQueryRuns?: number; 
  public get queryCacheMinQueryRuns() {
    return this.getNumberAttribute('query_cache_min_query_runs');
  }
  public set queryCacheMinQueryRuns(value: number) {
    this._queryCacheMinQueryRuns = value;
  }
  public resetQueryCacheMinQueryRuns() {
    this._queryCacheMinQueryRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheMinQueryRunsInput() {
    return this._queryCacheMinQueryRuns;
  }

  // query_cache_nondeterministic_function_handling - computed: false, optional: true, required: false
  private _queryCacheNondeterministicFunctionHandling?: string; 
  public get queryCacheNondeterministicFunctionHandling() {
    return this.getStringAttribute('query_cache_nondeterministic_function_handling');
  }
  public set queryCacheNondeterministicFunctionHandling(value: string) {
    this._queryCacheNondeterministicFunctionHandling = value;
  }
  public resetQueryCacheNondeterministicFunctionHandling() {
    this._queryCacheNondeterministicFunctionHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheNondeterministicFunctionHandlingInput() {
    return this._queryCacheNondeterministicFunctionHandling;
  }

  // query_cache_share_between_users - computed: false, optional: true, required: false
  private _queryCacheShareBetweenUsers?: boolean | cdktf.IResolvable; 
  public get queryCacheShareBetweenUsers() {
    return this.getBooleanAttribute('query_cache_share_between_users');
  }
  public set queryCacheShareBetweenUsers(value: boolean | cdktf.IResolvable) {
    this._queryCacheShareBetweenUsers = value;
  }
  public resetQueryCacheShareBetweenUsers() {
    this._queryCacheShareBetweenUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheShareBetweenUsersInput() {
    return this._queryCacheShareBetweenUsers;
  }

  // query_cache_system_table_handling - computed: false, optional: true, required: false
  private _queryCacheSystemTableHandling?: string; 
  public get queryCacheSystemTableHandling() {
    return this.getStringAttribute('query_cache_system_table_handling');
  }
  public set queryCacheSystemTableHandling(value: string) {
    this._queryCacheSystemTableHandling = value;
  }
  public resetQueryCacheSystemTableHandling() {
    this._queryCacheSystemTableHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheSystemTableHandlingInput() {
    return this._queryCacheSystemTableHandling;
  }

  // query_cache_tag - computed: false, optional: true, required: false
  private _queryCacheTag?: string; 
  public get queryCacheTag() {
    return this.getStringAttribute('query_cache_tag');
  }
  public set queryCacheTag(value: string) {
    this._queryCacheTag = value;
  }
  public resetQueryCacheTag() {
    this._queryCacheTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheTagInput() {
    return this._queryCacheTag;
  }

  // query_cache_ttl - computed: false, optional: true, required: false
  private _queryCacheTtl?: number; 
  public get queryCacheTtl() {
    return this.getNumberAttribute('query_cache_ttl');
  }
  public set queryCacheTtl(value: number) {
    this._queryCacheTtl = value;
  }
  public resetQueryCacheTtl() {
    this._queryCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheTtlInput() {
    return this._queryCacheTtl;
  }

  // quota_mode - computed: false, optional: true, required: false
  private _quotaMode?: string; 
  public get quotaMode() {
    return this.getStringAttribute('quota_mode');
  }
  public set quotaMode(value: string) {
    this._quotaMode = value;
  }
  public resetQuotaMode() {
    this._quotaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaModeInput() {
    return this._quotaMode;
  }

  // read_overflow_mode - computed: false, optional: true, required: false
  private _readOverflowMode?: string; 
  public get readOverflowMode() {
    return this.getStringAttribute('read_overflow_mode');
  }
  public set readOverflowMode(value: string) {
    this._readOverflowMode = value;
  }
  public resetReadOverflowMode() {
    this._readOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOverflowModeInput() {
    return this._readOverflowMode;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: number; 
  public get readonly() {
    return this.getNumberAttribute('readonly');
  }
  public set readonly(value: number) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // receive_timeout - computed: false, optional: true, required: false
  private _receiveTimeout?: number; 
  public get receiveTimeout() {
    return this.getNumberAttribute('receive_timeout');
  }
  public set receiveTimeout(value: number) {
    this._receiveTimeout = value;
  }
  public resetReceiveTimeout() {
    this._receiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveTimeoutInput() {
    return this._receiveTimeout;
  }

  // remote_filesystem_read_method - computed: false, optional: true, required: false
  private _remoteFilesystemReadMethod?: string; 
  public get remoteFilesystemReadMethod() {
    return this.getStringAttribute('remote_filesystem_read_method');
  }
  public set remoteFilesystemReadMethod(value: string) {
    this._remoteFilesystemReadMethod = value;
  }
  public resetRemoteFilesystemReadMethod() {
    this._remoteFilesystemReadMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFilesystemReadMethodInput() {
    return this._remoteFilesystemReadMethod;
  }

  // replication_alter_partitions_sync - computed: false, optional: true, required: false
  private _replicationAlterPartitionsSync?: number; 
  public get replicationAlterPartitionsSync() {
    return this.getNumberAttribute('replication_alter_partitions_sync');
  }
  public set replicationAlterPartitionsSync(value: number) {
    this._replicationAlterPartitionsSync = value;
  }
  public resetReplicationAlterPartitionsSync() {
    this._replicationAlterPartitionsSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationAlterPartitionsSyncInput() {
    return this._replicationAlterPartitionsSync;
  }

  // result_overflow_mode - computed: false, optional: true, required: false
  private _resultOverflowMode?: string; 
  public get resultOverflowMode() {
    return this.getStringAttribute('result_overflow_mode');
  }
  public set resultOverflowMode(value: string) {
    this._resultOverflowMode = value;
  }
  public resetResultOverflowMode() {
    this._resultOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOverflowModeInput() {
    return this._resultOverflowMode;
  }

  // s3_use_adaptive_timeouts - computed: false, optional: true, required: false
  private _s3UseAdaptiveTimeouts?: boolean | cdktf.IResolvable; 
  public get s3UseAdaptiveTimeouts() {
    return this.getBooleanAttribute('s3_use_adaptive_timeouts');
  }
  public set s3UseAdaptiveTimeouts(value: boolean | cdktf.IResolvable) {
    this._s3UseAdaptiveTimeouts = value;
  }
  public resetS3UseAdaptiveTimeouts() {
    this._s3UseAdaptiveTimeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UseAdaptiveTimeoutsInput() {
    return this._s3UseAdaptiveTimeouts;
  }

  // select_sequential_consistency - computed: false, optional: true, required: false
  private _selectSequentialConsistency?: boolean | cdktf.IResolvable; 
  public get selectSequentialConsistency() {
    return this.getBooleanAttribute('select_sequential_consistency');
  }
  public set selectSequentialConsistency(value: boolean | cdktf.IResolvable) {
    this._selectSequentialConsistency = value;
  }
  public resetSelectSequentialConsistency() {
    this._selectSequentialConsistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectSequentialConsistencyInput() {
    return this._selectSequentialConsistency;
  }

  // send_progress_in_http_headers - computed: false, optional: true, required: false
  private _sendProgressInHttpHeaders?: boolean | cdktf.IResolvable; 
  public get sendProgressInHttpHeaders() {
    return this.getBooleanAttribute('send_progress_in_http_headers');
  }
  public set sendProgressInHttpHeaders(value: boolean | cdktf.IResolvable) {
    this._sendProgressInHttpHeaders = value;
  }
  public resetSendProgressInHttpHeaders() {
    this._sendProgressInHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendProgressInHttpHeadersInput() {
    return this._sendProgressInHttpHeaders;
  }

  // send_timeout - computed: false, optional: true, required: false
  private _sendTimeout?: number; 
  public get sendTimeout() {
    return this.getNumberAttribute('send_timeout');
  }
  public set sendTimeout(value: number) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // set_overflow_mode - computed: false, optional: true, required: false
  private _setOverflowMode?: string; 
  public get setOverflowMode() {
    return this.getStringAttribute('set_overflow_mode');
  }
  public set setOverflowMode(value: string) {
    this._setOverflowMode = value;
  }
  public resetSetOverflowMode() {
    this._setOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOverflowModeInput() {
    return this._setOverflowMode;
  }

  // skip_unavailable_shards - computed: false, optional: true, required: false
  private _skipUnavailableShards?: boolean | cdktf.IResolvable; 
  public get skipUnavailableShards() {
    return this.getBooleanAttribute('skip_unavailable_shards');
  }
  public set skipUnavailableShards(value: boolean | cdktf.IResolvable) {
    this._skipUnavailableShards = value;
  }
  public resetSkipUnavailableShards() {
    this._skipUnavailableShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUnavailableShardsInput() {
    return this._skipUnavailableShards;
  }

  // sort_overflow_mode - computed: false, optional: true, required: false
  private _sortOverflowMode?: string; 
  public get sortOverflowMode() {
    return this.getStringAttribute('sort_overflow_mode');
  }
  public set sortOverflowMode(value: string) {
    this._sortOverflowMode = value;
  }
  public resetSortOverflowMode() {
    this._sortOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOverflowModeInput() {
    return this._sortOverflowMode;
  }

  // timeout_before_checking_execution_speed - computed: false, optional: true, required: false
  private _timeoutBeforeCheckingExecutionSpeed?: number; 
  public get timeoutBeforeCheckingExecutionSpeed() {
    return this.getNumberAttribute('timeout_before_checking_execution_speed');
  }
  public set timeoutBeforeCheckingExecutionSpeed(value: number) {
    this._timeoutBeforeCheckingExecutionSpeed = value;
  }
  public resetTimeoutBeforeCheckingExecutionSpeed() {
    this._timeoutBeforeCheckingExecutionSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutBeforeCheckingExecutionSpeedInput() {
    return this._timeoutBeforeCheckingExecutionSpeed;
  }

  // timeout_overflow_mode - computed: false, optional: true, required: false
  private _timeoutOverflowMode?: string; 
  public get timeoutOverflowMode() {
    return this.getStringAttribute('timeout_overflow_mode');
  }
  public set timeoutOverflowMode(value: string) {
    this._timeoutOverflowMode = value;
  }
  public resetTimeoutOverflowMode() {
    this._timeoutOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutOverflowModeInput() {
    return this._timeoutOverflowMode;
  }

  // transfer_overflow_mode - computed: false, optional: true, required: false
  private _transferOverflowMode?: string; 
  public get transferOverflowMode() {
    return this.getStringAttribute('transfer_overflow_mode');
  }
  public set transferOverflowMode(value: string) {
    this._transferOverflowMode = value;
  }
  public resetTransferOverflowMode() {
    this._transferOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferOverflowModeInput() {
    return this._transferOverflowMode;
  }

  // transform_null_in - computed: false, optional: true, required: false
  private _transformNullIn?: boolean | cdktf.IResolvable; 
  public get transformNullIn() {
    return this.getBooleanAttribute('transform_null_in');
  }
  public set transformNullIn(value: boolean | cdktf.IResolvable) {
    this._transformNullIn = value;
  }
  public resetTransformNullIn() {
    this._transformNullIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformNullInInput() {
    return this._transformNullIn;
  }

  // use_hedged_requests - computed: false, optional: true, required: false
  private _useHedgedRequests?: boolean | cdktf.IResolvable; 
  public get useHedgedRequests() {
    return this.getBooleanAttribute('use_hedged_requests');
  }
  public set useHedgedRequests(value: boolean | cdktf.IResolvable) {
    this._useHedgedRequests = value;
  }
  public resetUseHedgedRequests() {
    this._useHedgedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHedgedRequestsInput() {
    return this._useHedgedRequests;
  }

  // use_query_cache - computed: false, optional: true, required: false
  private _useQueryCache?: boolean | cdktf.IResolvable; 
  public get useQueryCache() {
    return this.getBooleanAttribute('use_query_cache');
  }
  public set useQueryCache(value: boolean | cdktf.IResolvable) {
    this._useQueryCache = value;
  }
  public resetUseQueryCache() {
    this._useQueryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useQueryCacheInput() {
    return this._useQueryCache;
  }

  // use_uncompressed_cache - computed: false, optional: true, required: false
  private _useUncompressedCache?: boolean | cdktf.IResolvable; 
  public get useUncompressedCache() {
    return this.getBooleanAttribute('use_uncompressed_cache');
  }
  public set useUncompressedCache(value: boolean | cdktf.IResolvable) {
    this._useUncompressedCache = value;
  }
  public resetUseUncompressedCache() {
    this._useUncompressedCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUncompressedCacheInput() {
    return this._useUncompressedCache;
  }

  // wait_for_async_insert - computed: false, optional: true, required: false
  private _waitForAsyncInsert?: boolean | cdktf.IResolvable; 
  public get waitForAsyncInsert() {
    return this.getBooleanAttribute('wait_for_async_insert');
  }
  public set waitForAsyncInsert(value: boolean | cdktf.IResolvable) {
    this._waitForAsyncInsert = value;
  }
  public resetWaitForAsyncInsert() {
    this._waitForAsyncInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForAsyncInsertInput() {
    return this._waitForAsyncInsert;
  }

  // wait_for_async_insert_timeout - computed: false, optional: true, required: false
  private _waitForAsyncInsertTimeout?: number; 
  public get waitForAsyncInsertTimeout() {
    return this.getNumberAttribute('wait_for_async_insert_timeout');
  }
  public set waitForAsyncInsertTimeout(value: number) {
    this._waitForAsyncInsertTimeout = value;
  }
  public resetWaitForAsyncInsertTimeout() {
    this._waitForAsyncInsertTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForAsyncInsertTimeoutInput() {
    return this._waitForAsyncInsertTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user yandex_mdb_clickhouse_user}
*/
export class MdbClickhouseUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_clickhouse_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbClickhouseUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbClickhouseUser to import
  * @param importFromId The id of the existing MdbClickhouseUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbClickhouseUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_clickhouse_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_clickhouse_user yandex_mdb_clickhouse_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbClickhouseUserConfig
  */
  public constructor(scope: Construct, id: string, config: MdbClickhouseUserConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_clickhouse_user',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._generatePassword = config.generatePassword;
    this._name = config.name;
    this._password = config.password;
    this._timeouts.internalValue = config.timeouts;
    this._permission.internalValue = config.permission;
    this._quota.internalValue = config.quota;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // connection_manager - computed: true, optional: false, required: false
  private _connectionManager = new MdbClickhouseUserConnectionManagerOutputReference(this, "connection_manager");
  public get connectionManager() {
    return this._connectionManager;
  }

  // generate_password - computed: true, optional: true, required: false
  private _generatePassword?: boolean | cdktf.IResolvable; 
  public get generatePassword() {
    return this.getBooleanAttribute('generate_password');
  }
  public set generatePassword(value: boolean | cdktf.IResolvable) {
    this._generatePassword = value;
  }
  public resetGeneratePassword() {
    this._generatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatePasswordInput() {
    return this._generatePassword;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbClickhouseUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbClickhouseUserTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new MdbClickhouseUserPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: MdbClickhouseUserPermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new MdbClickhouseUserQuotaList(this, "quota", true);
  public get quota() {
    return this._quota;
  }
  public putQuota(value: MdbClickhouseUserQuota[] | cdktf.IResolvable) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new MdbClickhouseUserSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: MdbClickhouseUserSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      generate_password: cdktf.booleanToTerraform(this._generatePassword),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      timeouts: mdbClickhouseUserTimeoutsToTerraform(this._timeouts.internalValue),
      permission: cdktf.listMapper(mdbClickhouseUserPermissionToTerraform, true)(this._permission.internalValue),
      quota: cdktf.listMapper(mdbClickhouseUserQuotaToTerraform, true)(this._quota.internalValue),
      settings: mdbClickhouseUserSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_password: {
        value: cdktf.booleanToHclTerraform(this._generatePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      timeouts: {
        value: mdbClickhouseUserTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbClickhouseUserTimeouts",
      },
      permission: {
        value: cdktf.listMapperHcl(mdbClickhouseUserPermissionToHclTerraform, true)(this._permission.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MdbClickhouseUserPermissionList",
      },
      quota: {
        value: cdktf.listMapperHcl(mdbClickhouseUserQuotaToHclTerraform, true)(this._quota.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MdbClickhouseUserQuotaList",
      },
      settings: {
        value: mdbClickhouseUserSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbClickhouseUserSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
