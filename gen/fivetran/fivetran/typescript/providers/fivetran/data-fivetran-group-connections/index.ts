// https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/group_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranGroupConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/group_connections#id DataFivetranGroupConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional filter. When defined, the data source will only contain information for the connection with the specified schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/group_connections#schema DataFivetranGroupConnections#schema}
  */
  readonly schema?: string;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/group_connections#connections DataFivetranGroupConnections#connections}
  */
  readonly connections?: DataFivetranGroupConnectionsConnections[] | cdktf.IResolvable;
}
export interface DataFivetranGroupConnectionsConnectionsStatusTasks {
}

export function dataFivetranGroupConnectionsConnectionsStatusTasksToTerraform(struct?: DataFivetranGroupConnectionsConnectionsStatusTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranGroupConnectionsConnectionsStatusTasksToHclTerraform(struct?: DataFivetranGroupConnectionsConnectionsStatusTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranGroupConnectionsConnectionsStatusTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranGroupConnectionsConnectionsStatusTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranGroupConnectionsConnectionsStatusTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataFivetranGroupConnectionsConnectionsStatusTasksList extends cdktf.ComplexList {
  public internalValue? : DataFivetranGroupConnectionsConnectionsStatusTasks[] | cdktf.IResolvable

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
  public get(index: number): DataFivetranGroupConnectionsConnectionsStatusTasksOutputReference {
    return new DataFivetranGroupConnectionsConnectionsStatusTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranGroupConnectionsConnectionsStatusWarnings {
}

export function dataFivetranGroupConnectionsConnectionsStatusWarningsToTerraform(struct?: DataFivetranGroupConnectionsConnectionsStatusWarnings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranGroupConnectionsConnectionsStatusWarningsToHclTerraform(struct?: DataFivetranGroupConnectionsConnectionsStatusWarnings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranGroupConnectionsConnectionsStatusWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranGroupConnectionsConnectionsStatusWarnings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranGroupConnectionsConnectionsStatusWarnings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataFivetranGroupConnectionsConnectionsStatusWarningsList extends cdktf.ComplexList {
  public internalValue? : DataFivetranGroupConnectionsConnectionsStatusWarnings[] | cdktf.IResolvable

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
  public get(index: number): DataFivetranGroupConnectionsConnectionsStatusWarningsOutputReference {
    return new DataFivetranGroupConnectionsConnectionsStatusWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranGroupConnectionsConnectionsStatus {
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/group_connections#tasks DataFivetranGroupConnections#tasks}
  */
  readonly tasks?: DataFivetranGroupConnectionsConnectionsStatusTasks[] | cdktf.IResolvable;
  /**
  * warnings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/group_connections#warnings DataFivetranGroupConnections#warnings}
  */
  readonly warnings?: DataFivetranGroupConnectionsConnectionsStatusWarnings[] | cdktf.IResolvable;
}

export function dataFivetranGroupConnectionsConnectionsStatusToTerraform(struct?: DataFivetranGroupConnectionsConnectionsStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tasks: cdktf.listMapper(dataFivetranGroupConnectionsConnectionsStatusTasksToTerraform, true)(struct!.tasks),
    warnings: cdktf.listMapper(dataFivetranGroupConnectionsConnectionsStatusWarningsToTerraform, true)(struct!.warnings),
  }
}


export function dataFivetranGroupConnectionsConnectionsStatusToHclTerraform(struct?: DataFivetranGroupConnectionsConnectionsStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tasks: {
      value: cdktf.listMapperHcl(dataFivetranGroupConnectionsConnectionsStatusTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "set",
      storageClassType: "DataFivetranGroupConnectionsConnectionsStatusTasksList",
    },
    warnings: {
      value: cdktf.listMapperHcl(dataFivetranGroupConnectionsConnectionsStatusWarningsToHclTerraform, true)(struct!.warnings),
      isBlock: true,
      type: "set",
      storageClassType: "DataFivetranGroupConnectionsConnectionsStatusWarningsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFivetranGroupConnectionsConnectionsStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFivetranGroupConnectionsConnectionsStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    if (this._warnings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warnings = this._warnings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranGroupConnectionsConnectionsStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tasks.internalValue = undefined;
      this._warnings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tasks.internalValue = value.tasks;
      this._warnings.internalValue = value.warnings;
    }
  }

  // is_historical_sync - computed: true, optional: false, required: false
  public get isHistoricalSync() {
    return this.getBooleanAttribute('is_historical_sync');
  }

  // setup_state - computed: true, optional: false, required: false
  public get setupState() {
    return this.getStringAttribute('setup_state');
  }

  // sync_state - computed: true, optional: false, required: false
  public get syncState() {
    return this.getStringAttribute('sync_state');
  }

  // update_state - computed: true, optional: false, required: false
  public get updateState() {
    return this.getStringAttribute('update_state');
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new DataFivetranGroupConnectionsConnectionsStatusTasksList(this, "tasks", true);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: DataFivetranGroupConnectionsConnectionsStatusTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }

  // warnings - computed: false, optional: true, required: false
  private _warnings = new DataFivetranGroupConnectionsConnectionsStatusWarningsList(this, "warnings", true);
  public get warnings() {
    return this._warnings;
  }
  public putWarnings(value: DataFivetranGroupConnectionsConnectionsStatusWarnings[] | cdktf.IResolvable) {
    this._warnings.internalValue = value;
  }
  public resetWarnings() {
    this._warnings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningsInput() {
    return this._warnings.internalValue;
  }
}
export interface DataFivetranGroupConnectionsConnections {
  /**
  * status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/group_connections#status DataFivetranGroupConnections#status}
  */
  readonly status?: DataFivetranGroupConnectionsConnectionsStatus;
}

export function dataFivetranGroupConnectionsConnectionsToTerraform(struct?: DataFivetranGroupConnectionsConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: dataFivetranGroupConnectionsConnectionsStatusToTerraform(struct!.status),
  }
}


export function dataFivetranGroupConnectionsConnectionsToHclTerraform(struct?: DataFivetranGroupConnectionsConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: dataFivetranGroupConnectionsConnectionsStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFivetranGroupConnectionsConnectionsStatus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFivetranGroupConnectionsConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranGroupConnectionsConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranGroupConnectionsConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status.internalValue = value.status;
    }
  }

  // connected_by - computed: true, optional: false, required: false
  public get connectedBy() {
    return this.getStringAttribute('connected_by');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // daily_sync_time - computed: true, optional: false, required: false
  public get dailySyncTime() {
    return this.getStringAttribute('daily_sync_time');
  }

  // failed_at - computed: true, optional: false, required: false
  public get failedAt() {
    return this.getStringAttribute('failed_at');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schedule_type - computed: true, optional: false, required: false
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // service_version - computed: true, optional: false, required: false
  public get serviceVersion() {
    return this.getNumberAttribute('service_version');
  }

  // succeeded_at - computed: true, optional: false, required: false
  public get succeededAt() {
    return this.getStringAttribute('succeeded_at');
  }

  // sync_frequency - computed: true, optional: false, required: false
  public get syncFrequency() {
    return this.getNumberAttribute('sync_frequency');
  }

  // status - computed: false, optional: true, required: false
  private _status = new DataFivetranGroupConnectionsConnectionsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: DataFivetranGroupConnectionsConnectionsStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }
}

export class DataFivetranGroupConnectionsConnectionsList extends cdktf.ComplexList {
  public internalValue? : DataFivetranGroupConnectionsConnections[] | cdktf.IResolvable

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
  public get(index: number): DataFivetranGroupConnectionsConnectionsOutputReference {
    return new DataFivetranGroupConnectionsConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/group_connections fivetran_group_connections}
*/
export class DataFivetranGroupConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_group_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranGroupConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranGroupConnections to import
  * @param importFromId The id of the existing DataFivetranGroupConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/group_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranGroupConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_group_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/group_connections fivetran_group_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranGroupConnectionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFivetranGroupConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_group_connections',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.17',
        providerVersionConstraint: '1.9.17'
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
    this._schema = config.schema;
    this._connections.internalValue = config.connections;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // connections - computed: false, optional: true, required: false
  private _connections = new DataFivetranGroupConnectionsConnectionsList(this, "connections", true);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: DataFivetranGroupConnectionsConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  public resetConnections() {
    this._connections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schema: cdktf.stringToTerraform(this._schema),
      connections: cdktf.listMapper(dataFivetranGroupConnectionsConnectionsToTerraform, true)(this._connections.internalValue),
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
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connections: {
        value: cdktf.listMapperHcl(dataFivetranGroupConnectionsConnectionsToHclTerraform, true)(this._connections.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataFivetranGroupConnectionsConnectionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
