// https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableStreamingIngestionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy#database_name TableStreamingIngestionPolicy#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy#enabled TableStreamingIngestionPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy#hint_allocated_rate TableStreamingIngestionPolicy#hint_allocated_rate}
  */
  readonly hintAllocatedRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy#id TableStreamingIngestionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy#table_name TableStreamingIngestionPolicy#table_name}
  */
  readonly tableName: string;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy#cluster TableStreamingIngestionPolicy#cluster}
  */
  readonly cluster?: TableStreamingIngestionPolicyCluster;
}
export interface TableStreamingIngestionPolicyCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy#client_id TableStreamingIngestionPolicy#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy#client_secret TableStreamingIngestionPolicy#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy#tenant_id TableStreamingIngestionPolicy#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy#uri TableStreamingIngestionPolicy#uri}
  */
  readonly uri?: string;
}

export function tableStreamingIngestionPolicyClusterToTerraform(struct?: TableStreamingIngestionPolicyClusterOutputReference | TableStreamingIngestionPolicyCluster): any {
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


export function tableStreamingIngestionPolicyClusterToHclTerraform(struct?: TableStreamingIngestionPolicyClusterOutputReference | TableStreamingIngestionPolicyCluster): any {
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

export class TableStreamingIngestionPolicyClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TableStreamingIngestionPolicyCluster | undefined {
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

  public set internalValue(value: TableStreamingIngestionPolicyCluster | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy adx_table_streaming_ingestion_policy}
*/
export class TableStreamingIngestionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adx_table_streaming_ingestion_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TableStreamingIngestionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TableStreamingIngestionPolicy to import
  * @param importFromId The id of the existing TableStreamingIngestionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TableStreamingIngestionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adx_table_streaming_ingestion_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table_streaming_ingestion_policy adx_table_streaming_ingestion_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableStreamingIngestionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TableStreamingIngestionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'adx_table_streaming_ingestion_policy',
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
    this._enabled = config.enabled;
    this._hintAllocatedRate = config.hintAllocatedRate;
    this._id = config.id;
    this._tableName = config.tableName;
    this._cluster.internalValue = config.cluster;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hint_allocated_rate - computed: true, optional: true, required: false
  private _hintAllocatedRate?: string; 
  public get hintAllocatedRate() {
    return this.getStringAttribute('hint_allocated_rate');
  }
  public set hintAllocatedRate(value: string) {
    this._hintAllocatedRate = value;
  }
  public resetHintAllocatedRate() {
    this._hintAllocatedRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hintAllocatedRateInput() {
    return this._hintAllocatedRate;
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

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new TableStreamingIngestionPolicyClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: TableStreamingIngestionPolicyCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hint_allocated_rate: cdktf.stringToTerraform(this._hintAllocatedRate),
      id: cdktf.stringToTerraform(this._id),
      table_name: cdktf.stringToTerraform(this._tableName),
      cluster: tableStreamingIngestionPolicyClusterToTerraform(this._cluster.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hint_allocated_rate: {
        value: cdktf.stringToHclTerraform(this._hintAllocatedRate),
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
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: tableStreamingIngestionPolicyClusterToHclTerraform(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableStreamingIngestionPolicyClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
