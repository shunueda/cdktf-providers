// https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/elasticsearch_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * A custom domain label compatible with RFC-1035 standards. Derived from the project name by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/elasticsearch_project#alias ElasticsearchProject#alias}
  */
  readonly alias?: string;
  /**
  * Descriptive name for a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/elasticsearch_project#name ElasticsearchProject#name}
  */
  readonly name: string;
  /**
  * The purpose for which the hardware of this elasticsearch project is optimized for. Also known as the Elasticsearch project subtype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/elasticsearch_project#optimized_for ElasticsearchProject#optimized_for}
  */
  readonly optimizedFor?: string;
  /**
  * Unique human-readable identifier for a region in Elastic Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/elasticsearch_project#region_id ElasticsearchProject#region_id}
  */
  readonly regionId: string;
  /**
  * Configuration for entire set of capabilities that make the data searchable in Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/elasticsearch_project#search_lake ElasticsearchProject#search_lake}
  */
  readonly searchLake?: ElasticsearchProjectSearchLake;
}
export interface ElasticsearchProjectCredentials {
}

export function elasticsearchProjectCredentialsToTerraform(struct?: ElasticsearchProjectCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function elasticsearchProjectCredentialsToHclTerraform(struct?: ElasticsearchProjectCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ElasticsearchProjectCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchProjectCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchProjectCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface ElasticsearchProjectEndpoints {
}

export function elasticsearchProjectEndpointsToTerraform(struct?: ElasticsearchProjectEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function elasticsearchProjectEndpointsToHclTerraform(struct?: ElasticsearchProjectEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ElasticsearchProjectEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchProjectEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchProjectEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // elasticsearch - computed: true, optional: false, required: false
  public get elasticsearch() {
    return this.getStringAttribute('elasticsearch');
  }

  // kibana - computed: true, optional: false, required: false
  public get kibana() {
    return this.getStringAttribute('kibana');
  }
}
export interface ElasticsearchProjectMetadata {
}

export function elasticsearchProjectMetadataToTerraform(struct?: ElasticsearchProjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function elasticsearchProjectMetadataToHclTerraform(struct?: ElasticsearchProjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ElasticsearchProjectMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchProjectMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchProjectMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // suspended_at - computed: true, optional: false, required: false
  public get suspendedAt() {
    return this.getStringAttribute('suspended_at');
  }

  // suspended_reason - computed: true, optional: false, required: false
  public get suspendedReason() {
    return this.getStringAttribute('suspended_reason');
  }
}
export interface ElasticsearchProjectSearchLake {
  /**
  * Determines how much data can benefit from faster search. When ingested, a certain amount of data is loaded into a cache that makes it super fast to query. The system dynamically adjusts the cache allocated to your project based on how much data you ingest during the period defined by your Search Boost Window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/elasticsearch_project#boost_window ElasticsearchProject#boost_window}
  */
  readonly boostWindow?: number;
  /**
  * Controls how fast searches are against your project data. When ingested, a certain amount of data is loaded into a cache that makes it super fast to query. You can either increase the performance of searches on cached data by adding replicas, or reduce the quantity of cached data by a static factor to save on costs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/elasticsearch_project#search_power ElasticsearchProject#search_power}
  */
  readonly searchPower?: number;
}

export function elasticsearchProjectSearchLakeToTerraform(struct?: ElasticsearchProjectSearchLake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boost_window: cdktf.numberToTerraform(struct!.boostWindow),
    search_power: cdktf.numberToTerraform(struct!.searchPower),
  }
}


export function elasticsearchProjectSearchLakeToHclTerraform(struct?: ElasticsearchProjectSearchLake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boost_window: {
      value: cdktf.numberToHclTerraform(struct!.boostWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_power: {
      value: cdktf.numberToHclTerraform(struct!.searchPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchProjectSearchLakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchProjectSearchLake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boostWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.boostWindow = this._boostWindow;
    }
    if (this._searchPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchPower = this._searchPower;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchProjectSearchLake | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boostWindow = undefined;
      this._searchPower = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boostWindow = value.boostWindow;
      this._searchPower = value.searchPower;
    }
  }

  // boost_window - computed: true, optional: true, required: false
  private _boostWindow?: number; 
  public get boostWindow() {
    return this.getNumberAttribute('boost_window');
  }
  public set boostWindow(value: number) {
    this._boostWindow = value;
  }
  public resetBoostWindow() {
    this._boostWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostWindowInput() {
    return this._boostWindow;
  }

  // search_power - computed: true, optional: true, required: false
  private _searchPower?: number; 
  public get searchPower() {
    return this.getNumberAttribute('search_power');
  }
  public set searchPower(value: number) {
    this._searchPower = value;
  }
  public resetSearchPower() {
    this._searchPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPowerInput() {
    return this._searchPower;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/elasticsearch_project ec_elasticsearch_project}
*/
export class ElasticsearchProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_elasticsearch_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchProject to import
  * @param importFromId The id of the existing ElasticsearchProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/elasticsearch_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_elasticsearch_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/elasticsearch_project ec_elasticsearch_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'ec_elasticsearch_project',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.4',
        providerVersionConstraint: '0.12.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._name = config.name;
    this._optimizedFor = config.optimizedFor;
    this._regionId = config.regionId;
    this._searchLake.internalValue = config.searchLake;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // cloud_id - computed: true, optional: false, required: false
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new ElasticsearchProjectCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new ElasticsearchProjectEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new ElasticsearchProjectMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // optimized_for - computed: true, optional: true, required: false
  private _optimizedFor?: string; 
  public get optimizedFor() {
    return this.getStringAttribute('optimized_for');
  }
  public set optimizedFor(value: string) {
    this._optimizedFor = value;
  }
  public resetOptimizedFor() {
    this._optimizedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedForInput() {
    return this._optimizedFor;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // search_lake - computed: true, optional: true, required: false
  private _searchLake = new ElasticsearchProjectSearchLakeOutputReference(this, "search_lake");
  public get searchLake() {
    return this._searchLake;
  }
  public putSearchLake(value: ElasticsearchProjectSearchLake) {
    this._searchLake.internalValue = value;
  }
  public resetSearchLake() {
    this._searchLake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchLakeInput() {
    return this._searchLake.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      name: cdktf.stringToTerraform(this._name),
      optimized_for: cdktf.stringToTerraform(this._optimizedFor),
      region_id: cdktf.stringToTerraform(this._regionId),
      search_lake: elasticsearchProjectSearchLakeToTerraform(this._searchLake.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
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
      optimized_for: {
        value: cdktf.stringToHclTerraform(this._optimizedFor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_lake: {
        value: elasticsearchProjectSearchLakeToHclTerraform(this._searchLake.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticsearchProjectSearchLake",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
