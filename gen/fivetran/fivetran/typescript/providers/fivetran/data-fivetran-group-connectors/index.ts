// https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/data-sources/group_connectors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranGroupConnectorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/data-sources/group_connectors#id DataFivetranGroupConnectors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional filter. When defined, the data source will only contain information for the connector with the specified schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/data-sources/group_connectors#schema DataFivetranGroupConnectors#schema}
  */
  readonly schema?: string;
  /**
  * connectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/data-sources/group_connectors#connectors DataFivetranGroupConnectors#connectors}
  */
  readonly connectors?: DataFivetranGroupConnectorsConnectors[] | cdktf.IResolvable;
}
export interface DataFivetranGroupConnectorsConnectorsStatusTasks {
}

export function dataFivetranGroupConnectorsConnectorsStatusTasksToTerraform(struct?: DataFivetranGroupConnectorsConnectorsStatusTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranGroupConnectorsConnectorsStatusTasksToHclTerraform(struct?: DataFivetranGroupConnectorsConnectorsStatusTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranGroupConnectorsConnectorsStatusTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranGroupConnectorsConnectorsStatusTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranGroupConnectorsConnectorsStatusTasks | cdktf.IResolvable | undefined) {
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

export class DataFivetranGroupConnectorsConnectorsStatusTasksList extends cdktf.ComplexList {
  public internalValue? : DataFivetranGroupConnectorsConnectorsStatusTasks[] | cdktf.IResolvable

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
  public get(index: number): DataFivetranGroupConnectorsConnectorsStatusTasksOutputReference {
    return new DataFivetranGroupConnectorsConnectorsStatusTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranGroupConnectorsConnectorsStatusWarnings {
}

export function dataFivetranGroupConnectorsConnectorsStatusWarningsToTerraform(struct?: DataFivetranGroupConnectorsConnectorsStatusWarnings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranGroupConnectorsConnectorsStatusWarningsToHclTerraform(struct?: DataFivetranGroupConnectorsConnectorsStatusWarnings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranGroupConnectorsConnectorsStatusWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranGroupConnectorsConnectorsStatusWarnings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranGroupConnectorsConnectorsStatusWarnings | cdktf.IResolvable | undefined) {
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

export class DataFivetranGroupConnectorsConnectorsStatusWarningsList extends cdktf.ComplexList {
  public internalValue? : DataFivetranGroupConnectorsConnectorsStatusWarnings[] | cdktf.IResolvable

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
  public get(index: number): DataFivetranGroupConnectorsConnectorsStatusWarningsOutputReference {
    return new DataFivetranGroupConnectorsConnectorsStatusWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranGroupConnectorsConnectorsStatus {
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/data-sources/group_connectors#tasks DataFivetranGroupConnectors#tasks}
  */
  readonly tasks?: DataFivetranGroupConnectorsConnectorsStatusTasks[] | cdktf.IResolvable;
  /**
  * warnings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/data-sources/group_connectors#warnings DataFivetranGroupConnectors#warnings}
  */
  readonly warnings?: DataFivetranGroupConnectorsConnectorsStatusWarnings[] | cdktf.IResolvable;
}

export function dataFivetranGroupConnectorsConnectorsStatusToTerraform(struct?: DataFivetranGroupConnectorsConnectorsStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tasks: cdktf.listMapper(dataFivetranGroupConnectorsConnectorsStatusTasksToTerraform, true)(struct!.tasks),
    warnings: cdktf.listMapper(dataFivetranGroupConnectorsConnectorsStatusWarningsToTerraform, true)(struct!.warnings),
  }
}


export function dataFivetranGroupConnectorsConnectorsStatusToHclTerraform(struct?: DataFivetranGroupConnectorsConnectorsStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tasks: {
      value: cdktf.listMapperHcl(dataFivetranGroupConnectorsConnectorsStatusTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "set",
      storageClassType: "DataFivetranGroupConnectorsConnectorsStatusTasksList",
    },
    warnings: {
      value: cdktf.listMapperHcl(dataFivetranGroupConnectorsConnectorsStatusWarningsToHclTerraform, true)(struct!.warnings),
      isBlock: true,
      type: "set",
      storageClassType: "DataFivetranGroupConnectorsConnectorsStatusWarningsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFivetranGroupConnectorsConnectorsStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFivetranGroupConnectorsConnectorsStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFivetranGroupConnectorsConnectorsStatus | cdktf.IResolvable | undefined) {
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
  private _tasks = new DataFivetranGroupConnectorsConnectorsStatusTasksList(this, "tasks", true);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: DataFivetranGroupConnectorsConnectorsStatusTasks[] | cdktf.IResolvable) {
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
  private _warnings = new DataFivetranGroupConnectorsConnectorsStatusWarningsList(this, "warnings", true);
  public get warnings() {
    return this._warnings;
  }
  public putWarnings(value: DataFivetranGroupConnectorsConnectorsStatusWarnings[] | cdktf.IResolvable) {
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
export interface DataFivetranGroupConnectorsConnectors {
  /**
  * status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/data-sources/group_connectors#status DataFivetranGroupConnectors#status}
  */
  readonly status?: DataFivetranGroupConnectorsConnectorsStatus;
}

export function dataFivetranGroupConnectorsConnectorsToTerraform(struct?: DataFivetranGroupConnectorsConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: dataFivetranGroupConnectorsConnectorsStatusToTerraform(struct!.status),
  }
}


export function dataFivetranGroupConnectorsConnectorsToHclTerraform(struct?: DataFivetranGroupConnectorsConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: dataFivetranGroupConnectorsConnectorsStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFivetranGroupConnectorsConnectorsStatus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFivetranGroupConnectorsConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranGroupConnectorsConnectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFivetranGroupConnectorsConnectors | cdktf.IResolvable | undefined) {
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
  private _status = new DataFivetranGroupConnectorsConnectorsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: DataFivetranGroupConnectorsConnectorsStatus) {
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

export class DataFivetranGroupConnectorsConnectorsList extends cdktf.ComplexList {
  public internalValue? : DataFivetranGroupConnectorsConnectors[] | cdktf.IResolvable

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
  public get(index: number): DataFivetranGroupConnectorsConnectorsOutputReference {
    return new DataFivetranGroupConnectorsConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/data-sources/group_connectors fivetran_group_connectors}
*/
export class DataFivetranGroupConnectors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_group_connectors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranGroupConnectors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranGroupConnectors to import
  * @param importFromId The id of the existing DataFivetranGroupConnectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/data-sources/group_connectors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranGroupConnectors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_group_connectors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/data-sources/group_connectors fivetran_group_connectors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranGroupConnectorsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFivetranGroupConnectorsConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_group_connectors',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.15',
        providerVersionConstraint: '1.9.15'
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
    this._connectors.internalValue = config.connectors;
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

  // connectors - computed: false, optional: true, required: false
  private _connectors = new DataFivetranGroupConnectorsConnectorsList(this, "connectors", true);
  public get connectors() {
    return this._connectors;
  }
  public putConnectors(value: DataFivetranGroupConnectorsConnectors[] | cdktf.IResolvable) {
    this._connectors.internalValue = value;
  }
  public resetConnectors() {
    this._connectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorsInput() {
    return this._connectors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schema: cdktf.stringToTerraform(this._schema),
      connectors: cdktf.listMapper(dataFivetranGroupConnectorsConnectorsToTerraform, true)(this._connectors.internalValue),
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
      connectors: {
        value: cdktf.listMapperHcl(dataFivetranGroupConnectorsConnectorsToHclTerraform, true)(this._connectors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataFivetranGroupConnectorsConnectorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
