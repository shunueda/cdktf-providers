// https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableContinuousExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#database_name TableContinuousExport#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#distributed TableContinuousExport#distributed}
  */
  readonly distributed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#external_table_name TableContinuousExport#external_table_name}
  */
  readonly externalTableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#forced_latency TableContinuousExport#forced_latency}
  */
  readonly forcedLatency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#id TableContinuousExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#interval_between_runs TableContinuousExport#interval_between_runs}
  */
  readonly intervalBetweenRuns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#is_disabled TableContinuousExport#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#managed_identity TableContinuousExport#managed_identity}
  */
  readonly managedIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#name TableContinuousExport#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#parquet_row_group_size TableContinuousExport#parquet_row_group_size}
  */
  readonly parquetRowGroupSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#query TableContinuousExport#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#size_limit TableContinuousExport#size_limit}
  */
  readonly sizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#use_native_parquet_writer TableContinuousExport#use_native_parquet_writer}
  */
  readonly useNativeParquetWriter?: boolean | cdktf.IResolvable;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#cluster TableContinuousExport#cluster}
  */
  readonly cluster?: TableContinuousExportCluster;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#timeouts TableContinuousExport#timeouts}
  */
  readonly timeouts?: TableContinuousExportTimeouts;
}
export interface TableContinuousExportCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#client_id TableContinuousExport#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#client_secret TableContinuousExport#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#tenant_id TableContinuousExport#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#uri TableContinuousExport#uri}
  */
  readonly uri?: string;
}

export function tableContinuousExportClusterToTerraform(struct?: TableContinuousExportClusterOutputReference | TableContinuousExportCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function tableContinuousExportClusterToHclTerraform(struct?: TableContinuousExportClusterOutputReference | TableContinuousExportCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableContinuousExportClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TableContinuousExportCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableContinuousExportCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tenantId = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tenantId = value.tenantId;
      this._uri = value.uri;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface TableContinuousExportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#create TableContinuousExport#create}
  */
  readonly create?: string;
}

export function tableContinuousExportTimeoutsToTerraform(struct?: TableContinuousExportTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function tableContinuousExportTimeoutsToHclTerraform(struct?: TableContinuousExportTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableContinuousExportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TableContinuousExportTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableContinuousExportTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export adx_table_continuous_export}
*/
export class TableContinuousExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adx_table_continuous_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TableContinuousExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TableContinuousExport to import
  * @param importFromId The id of the existing TableContinuousExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TableContinuousExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adx_table_continuous_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_continuous_export adx_table_continuous_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableContinuousExportConfig
  */
  public constructor(scope: Construct, id: string, config: TableContinuousExportConfig) {
    super(scope, id, {
      terraformResourceType: 'adx_table_continuous_export',
      terraformGeneratorMetadata: {
        providerName: 'adx',
        providerVersion: '0.0.35',
        providerVersionConstraint: '0.0.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseName = config.databaseName;
    this._distributed = config.distributed;
    this._externalTableName = config.externalTableName;
    this._forcedLatency = config.forcedLatency;
    this._id = config.id;
    this._intervalBetweenRuns = config.intervalBetweenRuns;
    this._isDisabled = config.isDisabled;
    this._managedIdentity = config.managedIdentity;
    this._name = config.name;
    this._parquetRowGroupSize = config.parquetRowGroupSize;
    this._query = config.query;
    this._sizeLimit = config.sizeLimit;
    this._useNativeParquetWriter = config.useNativeParquetWriter;
    this._cluster.internalValue = config.cluster;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // distributed - computed: false, optional: true, required: false
  private _distributed?: boolean | cdktf.IResolvable; 
  public get distributed() {
    return this.getBooleanAttribute('distributed');
  }
  public set distributed(value: boolean | cdktf.IResolvable) {
    this._distributed = value;
  }
  public resetDistributed() {
    this._distributed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedInput() {
    return this._distributed;
  }

  // external_table_name - computed: false, optional: false, required: true
  private _externalTableName?: string; 
  public get externalTableName() {
    return this.getStringAttribute('external_table_name');
  }
  public set externalTableName(value: string) {
    this._externalTableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTableNameInput() {
    return this._externalTableName;
  }

  // forced_latency - computed: false, optional: true, required: false
  private _forcedLatency?: string; 
  public get forcedLatency() {
    return this.getStringAttribute('forced_latency');
  }
  public set forcedLatency(value: string) {
    this._forcedLatency = value;
  }
  public resetForcedLatency() {
    this._forcedLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedLatencyInput() {
    return this._forcedLatency;
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

  // interval_between_runs - computed: false, optional: true, required: false
  private _intervalBetweenRuns?: string; 
  public get intervalBetweenRuns() {
    return this.getStringAttribute('interval_between_runs');
  }
  public set intervalBetweenRuns(value: string) {
    this._intervalBetweenRuns = value;
  }
  public resetIntervalBetweenRuns() {
    this._intervalBetweenRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalBetweenRunsInput() {
    return this._intervalBetweenRuns;
  }

  // is_disabled - computed: false, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // managed_identity - computed: false, optional: true, required: false
  private _managedIdentity?: string; 
  public get managedIdentity() {
    return this.getStringAttribute('managed_identity');
  }
  public set managedIdentity(value: string) {
    this._managedIdentity = value;
  }
  public resetManagedIdentity() {
    this._managedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityInput() {
    return this._managedIdentity;
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

  // parquet_row_group_size - computed: false, optional: true, required: false
  private _parquetRowGroupSize?: number; 
  public get parquetRowGroupSize() {
    return this.getNumberAttribute('parquet_row_group_size');
  }
  public set parquetRowGroupSize(value: number) {
    this._parquetRowGroupSize = value;
  }
  public resetParquetRowGroupSize() {
    this._parquetRowGroupSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetRowGroupSizeInput() {
    return this._parquetRowGroupSize;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: number; 
  public get sizeLimit() {
    return this.getNumberAttribute('size_limit');
  }
  public set sizeLimit(value: number) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }

  // use_native_parquet_writer - computed: false, optional: true, required: false
  private _useNativeParquetWriter?: boolean | cdktf.IResolvable; 
  public get useNativeParquetWriter() {
    return this.getBooleanAttribute('use_native_parquet_writer');
  }
  public set useNativeParquetWriter(value: boolean | cdktf.IResolvable) {
    this._useNativeParquetWriter = value;
  }
  public resetUseNativeParquetWriter() {
    this._useNativeParquetWriter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNativeParquetWriterInput() {
    return this._useNativeParquetWriter;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new TableContinuousExportClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: TableContinuousExportCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TableContinuousExportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TableContinuousExportTimeouts) {
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
      database_name: cdktf.stringToTerraform(this._databaseName),
      distributed: cdktf.booleanToTerraform(this._distributed),
      external_table_name: cdktf.stringToTerraform(this._externalTableName),
      forced_latency: cdktf.stringToTerraform(this._forcedLatency),
      id: cdktf.stringToTerraform(this._id),
      interval_between_runs: cdktf.stringToTerraform(this._intervalBetweenRuns),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      managed_identity: cdktf.stringToTerraform(this._managedIdentity),
      name: cdktf.stringToTerraform(this._name),
      parquet_row_group_size: cdktf.numberToTerraform(this._parquetRowGroupSize),
      query: cdktf.stringToTerraform(this._query),
      size_limit: cdktf.numberToTerraform(this._sizeLimit),
      use_native_parquet_writer: cdktf.booleanToTerraform(this._useNativeParquetWriter),
      cluster: tableContinuousExportClusterToTerraform(this._cluster.internalValue),
      timeouts: tableContinuousExportTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distributed: {
        value: cdktf.booleanToHclTerraform(this._distributed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_table_name: {
        value: cdktf.stringToHclTerraform(this._externalTableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forced_latency: {
        value: cdktf.stringToHclTerraform(this._forcedLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval_between_runs: {
        value: cdktf.stringToHclTerraform(this._intervalBetweenRuns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      managed_identity: {
        value: cdktf.stringToHclTerraform(this._managedIdentity),
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
      parquet_row_group_size: {
        value: cdktf.numberToHclTerraform(this._parquetRowGroupSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_limit: {
        value: cdktf.numberToHclTerraform(this._sizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_native_parquet_writer: {
        value: cdktf.booleanToHclTerraform(this._useNativeParquetWriter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster: {
        value: tableContinuousExportClusterToHclTerraform(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableContinuousExportClusterList",
      },
      timeouts: {
        value: tableContinuousExportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TableContinuousExportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
