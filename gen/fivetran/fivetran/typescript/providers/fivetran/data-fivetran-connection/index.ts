// https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the connection within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/connection#id DataFivetranConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataFivetranConnectionDestinationSchema {
}

export function dataFivetranConnectionDestinationSchemaToTerraform(struct?: DataFivetranConnectionDestinationSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectionDestinationSchemaToHclTerraform(struct?: DataFivetranConnectionDestinationSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectionDestinationSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFivetranConnectionDestinationSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectionDestinationSchema | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // table_group_name - computed: true, optional: false, required: false
  public get tableGroupName() {
    return this.getStringAttribute('table_group_name');
  }
}
export interface DataFivetranConnectionStatusTasks {
}

export function dataFivetranConnectionStatusTasksToTerraform(struct?: DataFivetranConnectionStatusTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectionStatusTasksToHclTerraform(struct?: DataFivetranConnectionStatusTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectionStatusTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectionStatusTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectionStatusTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

export class DataFivetranConnectionStatusTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectionStatusTasksOutputReference {
    return new DataFivetranConnectionStatusTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectionStatusWarnings {
}

export function dataFivetranConnectionStatusWarningsToTerraform(struct?: DataFivetranConnectionStatusWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectionStatusWarningsToHclTerraform(struct?: DataFivetranConnectionStatusWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectionStatusWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectionStatusWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectionStatusWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

export class DataFivetranConnectionStatusWarningsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectionStatusWarningsOutputReference {
    return new DataFivetranConnectionStatusWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectionStatus {
}

export function dataFivetranConnectionStatusToTerraform(struct?: DataFivetranConnectionStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectionStatusToHclTerraform(struct?: DataFivetranConnectionStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectionStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFivetranConnectionStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectionStatus | cdktf.IResolvable | undefined) {
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

  // tasks - computed: true, optional: false, required: false
  private _tasks = new DataFivetranConnectionStatusTasksList(this, "tasks", true);
  public get tasks() {
    return this._tasks;
  }

  // update_state - computed: true, optional: false, required: false
  public get updateState() {
    return this.getStringAttribute('update_state');
  }

  // warnings - computed: true, optional: false, required: false
  private _warnings = new DataFivetranConnectionStatusWarningsList(this, "warnings", true);
  public get warnings() {
    return this._warnings;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/connection fivetran_connection}
*/
export class DataFivetranConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranConnection to import
  * @param importFromId The id of the existing DataFivetranConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/connection fivetran_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataFivetranConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_connection',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.16',
        providerVersionConstraint: '1.9.16'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // data_delay_sensitivity - computed: true, optional: false, required: false
  public get dataDelaySensitivity() {
    return this.getStringAttribute('data_delay_sensitivity');
  }

  // data_delay_threshold - computed: true, optional: false, required: false
  public get dataDelayThreshold() {
    return this.getNumberAttribute('data_delay_threshold');
  }

  // failed_at - computed: true, optional: false, required: false
  public get failedAt() {
    return this.getStringAttribute('failed_at');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // hybrid_deployment_agent_id - computed: true, optional: false, required: false
  public get hybridDeploymentAgentId() {
    return this.getStringAttribute('hybrid_deployment_agent_id');
  }

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // networking_method - computed: true, optional: false, required: false
  public get networkingMethod() {
    return this.getStringAttribute('networking_method');
  }

  // pause_after_trial - computed: true, optional: false, required: false
  public get pauseAfterTrial() {
    return this.getBooleanAttribute('pause_after_trial');
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
  }

  // private_link_id - computed: true, optional: false, required: false
  public get privateLinkId() {
    return this.getStringAttribute('private_link_id');
  }

  // proxy_agent_id - computed: true, optional: false, required: false
  public get proxyAgentId() {
    return this.getStringAttribute('proxy_agent_id');
  }

  // schedule_type - computed: true, optional: false, required: false
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // service_version - computed: true, optional: false, required: false
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }

  // succeeded_at - computed: true, optional: false, required: false
  public get succeededAt() {
    return this.getStringAttribute('succeeded_at');
  }

  // sync_frequency - computed: true, optional: false, required: false
  public get syncFrequency() {
    return this.getNumberAttribute('sync_frequency');
  }

  // destination_schema - computed: false, optional: false, required: false
  private _destinationSchema = new DataFivetranConnectionDestinationSchemaOutputReference(this, "destination_schema");
  public get destinationSchema() {
    return this._destinationSchema;
  }

  // status - computed: false, optional: false, required: false
  private _status = new DataFivetranConnectionStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
