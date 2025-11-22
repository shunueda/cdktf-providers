// https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdcV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Astra database to create the keyspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3#database_id CdcV3#database_id}
  */
  readonly databaseId: string;
  /**
  * Astra database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3#database_name CdcV3#database_name}
  */
  readonly databaseName: string;
  /**
  * Mapping between datacenter regions and streaming tenants.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3#regions CdcV3#regions}
  */
  readonly regions: CdcV3Regions[] | cdktf.IResolvable;
  /**
  * List of tables to enable CDC.  Must include at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3#tables CdcV3#tables}
  */
  readonly tables: CdcV3Tables[] | cdktf.IResolvable;
}
export interface CdcV3Regions {
  /**
  * Astra Datacenter ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3#datacenter_id CdcV3#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * Cloud provider region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3#region CdcV3#region}
  */
  readonly region: string;
  /**
  * Name of Pulsar cluster hosting the streaming tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3#streaming_cluster CdcV3#streaming_cluster}
  */
  readonly streamingCluster: string;
  /**
  * Name of the streaming tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3#streaming_tenant CdcV3#streaming_tenant}
  */
  readonly streamingTenant: string;
}

export function cdcV3RegionsToTerraform(struct?: CdcV3Regions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter_id: cdktf.stringToTerraform(struct!.datacenterId),
    region: cdktf.stringToTerraform(struct!.region),
    streaming_cluster: cdktf.stringToTerraform(struct!.streamingCluster),
    streaming_tenant: cdktf.stringToTerraform(struct!.streamingTenant),
  }
}


export function cdcV3RegionsToHclTerraform(struct?: CdcV3Regions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter_id: {
      value: cdktf.stringToHclTerraform(struct!.datacenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    streaming_cluster: {
      value: cdktf.stringToHclTerraform(struct!.streamingCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    streaming_tenant: {
      value: cdktf.stringToHclTerraform(struct!.streamingTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdcV3RegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdcV3Regions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterId = this._datacenterId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._streamingCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingCluster = this._streamingCluster;
    }
    if (this._streamingTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingTenant = this._streamingTenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdcV3Regions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenterId = undefined;
      this._region = undefined;
      this._streamingCluster = undefined;
      this._streamingTenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenterId = value.datacenterId;
      this._region = value.region;
      this._streamingCluster = value.streamingCluster;
      this._streamingTenant = value.streamingTenant;
    }
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // streaming_cluster - computed: false, optional: false, required: true
  private _streamingCluster?: string; 
  public get streamingCluster() {
    return this.getStringAttribute('streaming_cluster');
  }
  public set streamingCluster(value: string) {
    this._streamingCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingClusterInput() {
    return this._streamingCluster;
  }

  // streaming_tenant - computed: false, optional: false, required: true
  private _streamingTenant?: string; 
  public get streamingTenant() {
    return this.getStringAttribute('streaming_tenant');
  }
  public set streamingTenant(value: string) {
    this._streamingTenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingTenantInput() {
    return this._streamingTenant;
  }
}

export class CdcV3RegionsList extends cdktf.ComplexList {
  public internalValue? : CdcV3Regions[] | cdktf.IResolvable

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
  public get(index: number): CdcV3RegionsOutputReference {
    return new CdcV3RegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdcV3Tables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3#keyspace CdcV3#keyspace}
  */
  readonly keyspace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3#table CdcV3#table}
  */
  readonly table: string;
}

export function cdcV3TablesToTerraform(struct?: CdcV3Tables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keyspace: cdktf.stringToTerraform(struct!.keyspace),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function cdcV3TablesToHclTerraform(struct?: CdcV3Tables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keyspace: {
      value: cdktf.stringToHclTerraform(struct!.keyspace),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdcV3TablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdcV3Tables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyspace = this._keyspace;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdcV3Tables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyspace = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyspace = value.keyspace;
      this._table = value.table;
    }
  }

  // keyspace - computed: false, optional: false, required: true
  private _keyspace?: string; 
  public get keyspace() {
    return this.getStringAttribute('keyspace');
  }
  public set keyspace(value: string) {
    this._keyspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyspaceInput() {
    return this._keyspace;
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
}

export class CdcV3TablesList extends cdktf.ComplexList {
  public internalValue? : CdcV3Tables[] | cdktf.IResolvable

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
  public get(index: number): CdcV3TablesOutputReference {
    return new CdcV3TablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3 astra_cdc_v3}
*/
export class CdcV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_cdc_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdcV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdcV3 to import
  * @param importFromId The id of the existing CdcV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdcV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_cdc_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/cdc_v3 astra_cdc_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdcV3Config
  */
  public constructor(scope: Construct, id: string, config: CdcV3Config) {
    super(scope, id, {
      terraformResourceType: 'astra_cdc_v3',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseId = config.databaseId;
    this._databaseName = config.databaseName;
    this._regions.internalValue = config.regions;
    this._tables.internalValue = config.tables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_topics - computed: true, optional: false, required: false
  private _dataTopics = new cdktf.StringMapMap(this, "data_topics");
  public get dataTopics() {
    return this._dataTopics;
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
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

  // regions - computed: false, optional: false, required: true
  private _regions = new CdcV3RegionsList(this, "regions", true);
  public get regions() {
    return this._regions;
  }
  public putRegions(value: CdcV3Regions[] | cdktf.IResolvable) {
    this._regions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions.internalValue;
  }

  // tables - computed: false, optional: false, required: true
  private _tables = new CdcV3TablesList(this, "tables", true);
  public get tables() {
    return this._tables;
  }
  public putTables(value: CdcV3Tables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: cdktf.stringToTerraform(this._databaseId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      regions: cdktf.listMapper(cdcV3RegionsToTerraform, false)(this._regions.internalValue),
      tables: cdktf.listMapper(cdcV3TablesToTerraform, false)(this._tables.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(cdcV3RegionsToHclTerraform, false)(this._regions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdcV3RegionsList",
      },
      tables: {
        value: cdktf.listMapperHcl(cdcV3TablesToHclTerraform, false)(this._tables.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdcV3TablesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
