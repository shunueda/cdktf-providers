// https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaterializedViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#allow_mv_without_rls MaterializedView#allow_mv_without_rls}
  */
  readonly allowMvWithoutRls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#async MaterializedView#async}
  */
  readonly async?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#auto_update_schema MaterializedView#auto_update_schema}
  */
  readonly autoUpdateSchema?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#backfill MaterializedView#backfill}
  */
  readonly backfill?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#concurrency MaterializedView#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#database_name MaterializedView#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#docstring MaterializedView#docstring}
  */
  readonly docstring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#effective_date_time MaterializedView#effective_date_time}
  */
  readonly effectiveDateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#folder MaterializedView#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#id MaterializedView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#max_source_records_for_single_ingest MaterializedView#max_source_records_for_single_ingest}
  */
  readonly maxSourceRecordsForSingleIngest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#name MaterializedView#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#query MaterializedView#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#source_table_name MaterializedView#source_table_name}
  */
  readonly sourceTableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#update_extents_creation_time MaterializedView#update_extents_creation_time}
  */
  readonly updateExtentsCreationTime?: boolean | cdktf.IResolvable;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#cluster MaterializedView#cluster}
  */
  readonly cluster?: MaterializedViewCluster;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#timeouts MaterializedView#timeouts}
  */
  readonly timeouts?: MaterializedViewTimeouts;
}
export interface MaterializedViewCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#client_id MaterializedView#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#client_secret MaterializedView#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#tenant_id MaterializedView#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#uri MaterializedView#uri}
  */
  readonly uri?: string;
}

export function materializedViewClusterToTerraform(struct?: MaterializedViewClusterOutputReference | MaterializedViewCluster): any {
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


export function materializedViewClusterToHclTerraform(struct?: MaterializedViewClusterOutputReference | MaterializedViewCluster): any {
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

export class MaterializedViewClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaterializedViewCluster | undefined {
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

  public set internalValue(value: MaterializedViewCluster | undefined) {
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
export interface MaterializedViewTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#create MaterializedView#create}
  */
  readonly create?: string;
}

export function materializedViewTimeoutsToTerraform(struct?: MaterializedViewTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function materializedViewTimeoutsToHclTerraform(struct?: MaterializedViewTimeouts | cdktf.IResolvable): any {
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

export class MaterializedViewTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MaterializedViewTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MaterializedViewTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view adx_materialized_view}
*/
export class MaterializedView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adx_materialized_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaterializedView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaterializedView to import
  * @param importFromId The id of the existing MaterializedView that should be imported. Refer to the {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaterializedView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adx_materialized_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/materialized_view adx_materialized_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaterializedViewConfig
  */
  public constructor(scope: Construct, id: string, config: MaterializedViewConfig) {
    super(scope, id, {
      terraformResourceType: 'adx_materialized_view',
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
    this._allowMvWithoutRls = config.allowMvWithoutRls;
    this._async = config.async;
    this._autoUpdateSchema = config.autoUpdateSchema;
    this._backfill = config.backfill;
    this._concurrency = config.concurrency;
    this._databaseName = config.databaseName;
    this._docstring = config.docstring;
    this._effectiveDateTime = config.effectiveDateTime;
    this._folder = config.folder;
    this._id = config.id;
    this._maxSourceRecordsForSingleIngest = config.maxSourceRecordsForSingleIngest;
    this._name = config.name;
    this._query = config.query;
    this._sourceTableName = config.sourceTableName;
    this._updateExtentsCreationTime = config.updateExtentsCreationTime;
    this._cluster.internalValue = config.cluster;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_mv_without_rls - computed: false, optional: true, required: false
  private _allowMvWithoutRls?: boolean | cdktf.IResolvable; 
  public get allowMvWithoutRls() {
    return this.getBooleanAttribute('allow_mv_without_rls');
  }
  public set allowMvWithoutRls(value: boolean | cdktf.IResolvable) {
    this._allowMvWithoutRls = value;
  }
  public resetAllowMvWithoutRls() {
    this._allowMvWithoutRls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMvWithoutRlsInput() {
    return this._allowMvWithoutRls;
  }

  // async - computed: false, optional: true, required: false
  private _async?: boolean | cdktf.IResolvable; 
  public get async() {
    return this.getBooleanAttribute('async');
  }
  public set async(value: boolean | cdktf.IResolvable) {
    this._async = value;
  }
  public resetAsync() {
    this._async = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInput() {
    return this._async;
  }

  // auto_update_schema - computed: false, optional: true, required: false
  private _autoUpdateSchema?: boolean | cdktf.IResolvable; 
  public get autoUpdateSchema() {
    return this.getBooleanAttribute('auto_update_schema');
  }
  public set autoUpdateSchema(value: boolean | cdktf.IResolvable) {
    this._autoUpdateSchema = value;
  }
  public resetAutoUpdateSchema() {
    this._autoUpdateSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateSchemaInput() {
    return this._autoUpdateSchema;
  }

  // backfill - computed: false, optional: true, required: false
  private _backfill?: boolean | cdktf.IResolvable; 
  public get backfill() {
    return this.getBooleanAttribute('backfill');
  }
  public set backfill(value: boolean | cdktf.IResolvable) {
    this._backfill = value;
  }
  public resetBackfill() {
    this._backfill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillInput() {
    return this._backfill;
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
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

  // docstring - computed: false, optional: true, required: false
  private _docstring?: string; 
  public get docstring() {
    return this.getStringAttribute('docstring');
  }
  public set docstring(value: string) {
    this._docstring = value;
  }
  public resetDocstring() {
    this._docstring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docstringInput() {
    return this._docstring;
  }

  // effective_date_time - computed: true, optional: true, required: false
  private _effectiveDateTime?: string; 
  public get effectiveDateTime() {
    return this.getStringAttribute('effective_date_time');
  }
  public set effectiveDateTime(value: string) {
    this._effectiveDateTime = value;
  }
  public resetEffectiveDateTime() {
    this._effectiveDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveDateTimeInput() {
    return this._effectiveDateTime;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // max_source_records_for_single_ingest - computed: false, optional: true, required: false
  private _maxSourceRecordsForSingleIngest?: number; 
  public get maxSourceRecordsForSingleIngest() {
    return this.getNumberAttribute('max_source_records_for_single_ingest');
  }
  public set maxSourceRecordsForSingleIngest(value: number) {
    this._maxSourceRecordsForSingleIngest = value;
  }
  public resetMaxSourceRecordsForSingleIngest() {
    this._maxSourceRecordsForSingleIngest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSourceRecordsForSingleIngestInput() {
    return this._maxSourceRecordsForSingleIngest;
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

  // source_table_name - computed: false, optional: false, required: true
  private _sourceTableName?: string; 
  public get sourceTableName() {
    return this.getStringAttribute('source_table_name');
  }
  public set sourceTableName(value: string) {
    this._sourceTableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableNameInput() {
    return this._sourceTableName;
  }

  // update_extents_creation_time - computed: false, optional: true, required: false
  private _updateExtentsCreationTime?: boolean | cdktf.IResolvable; 
  public get updateExtentsCreationTime() {
    return this.getBooleanAttribute('update_extents_creation_time');
  }
  public set updateExtentsCreationTime(value: boolean | cdktf.IResolvable) {
    this._updateExtentsCreationTime = value;
  }
  public resetUpdateExtentsCreationTime() {
    this._updateExtentsCreationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateExtentsCreationTimeInput() {
    return this._updateExtentsCreationTime;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new MaterializedViewClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: MaterializedViewCluster) {
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
  private _timeouts = new MaterializedViewTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MaterializedViewTimeouts) {
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
      allow_mv_without_rls: cdktf.booleanToTerraform(this._allowMvWithoutRls),
      async: cdktf.booleanToTerraform(this._async),
      auto_update_schema: cdktf.booleanToTerraform(this._autoUpdateSchema),
      backfill: cdktf.booleanToTerraform(this._backfill),
      concurrency: cdktf.numberToTerraform(this._concurrency),
      database_name: cdktf.stringToTerraform(this._databaseName),
      docstring: cdktf.stringToTerraform(this._docstring),
      effective_date_time: cdktf.stringToTerraform(this._effectiveDateTime),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      max_source_records_for_single_ingest: cdktf.numberToTerraform(this._maxSourceRecordsForSingleIngest),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      source_table_name: cdktf.stringToTerraform(this._sourceTableName),
      update_extents_creation_time: cdktf.booleanToTerraform(this._updateExtentsCreationTime),
      cluster: materializedViewClusterToTerraform(this._cluster.internalValue),
      timeouts: materializedViewTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_mv_without_rls: {
        value: cdktf.booleanToHclTerraform(this._allowMvWithoutRls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      async: {
        value: cdktf.booleanToHclTerraform(this._async),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_update_schema: {
        value: cdktf.booleanToHclTerraform(this._autoUpdateSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backfill: {
        value: cdktf.booleanToHclTerraform(this._backfill),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      concurrency: {
        value: cdktf.numberToHclTerraform(this._concurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docstring: {
        value: cdktf.stringToHclTerraform(this._docstring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_date_time: {
        value: cdktf.stringToHclTerraform(this._effectiveDateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      max_source_records_for_single_ingest: {
        value: cdktf.numberToHclTerraform(this._maxSourceRecordsForSingleIngest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_table_name: {
        value: cdktf.stringToHclTerraform(this._sourceTableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_extents_creation_time: {
        value: cdktf.booleanToHclTerraform(this._updateExtentsCreationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster: {
        value: materializedViewClusterToHclTerraform(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaterializedViewClusterList",
      },
      timeouts: {
        value: materializedViewTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MaterializedViewTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
