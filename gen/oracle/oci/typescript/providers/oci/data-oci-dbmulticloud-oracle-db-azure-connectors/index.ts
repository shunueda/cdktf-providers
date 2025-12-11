// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDbmulticloudOracleDbAzureConnectorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors#compartment_id DataOciDbmulticloudOracleDbAzureConnectors#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors#db_cluster_resource_id DataOciDbmulticloudOracleDbAzureConnectors#db_cluster_resource_id}
  */
  readonly dbClusterResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors#display_name DataOciDbmulticloudOracleDbAzureConnectors#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors#id DataOciDbmulticloudOracleDbAzureConnectors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors#oracle_db_azure_connector_id DataOciDbmulticloudOracleDbAzureConnectors#oracle_db_azure_connector_id}
  */
  readonly oracleDbAzureConnectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors#state DataOciDbmulticloudOracleDbAzureConnectors#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors#filter DataOciDbmulticloudOracleDbAzureConnectors#filter}
  */
  readonly filter?: DataOciDbmulticloudOracleDbAzureConnectorsFilter[] | cdktf.IResolvable;
}
export interface DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsArcAgentNodes {
}

export function dataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsArcAgentNodesToTerraform(struct?: DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsArcAgentNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsArcAgentNodesToHclTerraform(struct?: DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsArcAgentNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsArcAgentNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsArcAgentNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsArcAgentNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_arc_agent_version - computed: true, optional: false, required: false
  public get currentArcAgentVersion() {
    return this.getStringAttribute('current_arc_agent_version');
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_last_checked - computed: true, optional: false, required: false
  public get timeLastChecked() {
    return this.getStringAttribute('time_last_checked');
  }
}

export class DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsArcAgentNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsArcAgentNodesOutputReference {
    return new DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsArcAgentNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItems {
}

export function dataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsToTerraform(struct?: DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsToHclTerraform(struct?: DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // arc_agent_nodes - computed: true, optional: false, required: false
  private _arcAgentNodes = new DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsArcAgentNodesList(this, "arc_agent_nodes", false);
  public get arcAgentNodes() {
    return this._arcAgentNodes;
  }

  // azure_identity_connectivity_status - computed: true, optional: false, required: false
  public get azureIdentityConnectivityStatus() {
    return this.getStringAttribute('azure_identity_connectivity_status');
  }

  // azure_identity_mechanism - computed: true, optional: false, required: false
  public get azureIdentityMechanism() {
    return this.getStringAttribute('azure_identity_mechanism');
  }

  // azure_resource_group - computed: true, optional: false, required: false
  public get azureResourceGroup() {
    return this.getStringAttribute('azure_resource_group');
  }

  // azure_subscription_id - computed: true, optional: false, required: false
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }

  // azure_tenant_id - computed: true, optional: false, required: false
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // db_cluster_resource_id - computed: true, optional: false, required: false
  public get dbClusterResourceId() {
    return this.getStringAttribute('db_cluster_resource_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modification - computed: true, optional: false, required: false
  public get lastModification() {
    return this.getStringAttribute('last_modification');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsOutputReference {
    return new DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollection {
}

export function dataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionToTerraform(struct?: DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionToHclTerraform(struct?: DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionOutputReference {
    return new DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDbmulticloudOracleDbAzureConnectorsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors#name DataOciDbmulticloudOracleDbAzureConnectors#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors#regex DataOciDbmulticloudOracleDbAzureConnectors#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors#values DataOciDbmulticloudOracleDbAzureConnectors#values}
  */
  readonly values: string[];
}

export function dataOciDbmulticloudOracleDbAzureConnectorsFilterToTerraform(struct?: DataOciDbmulticloudOracleDbAzureConnectorsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDbmulticloudOracleDbAzureConnectorsFilterToHclTerraform(struct?: DataOciDbmulticloudOracleDbAzureConnectorsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDbmulticloudOracleDbAzureConnectorsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudOracleDbAzureConnectorsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDbmulticloudOracleDbAzureConnectorsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDbmulticloudOracleDbAzureConnectorsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDbmulticloudOracleDbAzureConnectorsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDbmulticloudOracleDbAzureConnectorsFilterOutputReference {
    return new DataOciDbmulticloudOracleDbAzureConnectorsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors oci_dbmulticloud_oracle_db_azure_connectors}
*/
export class DataOciDbmulticloudOracleDbAzureConnectors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_azure_connectors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDbmulticloudOracleDbAzureConnectors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDbmulticloudOracleDbAzureConnectors to import
  * @param importFromId The id of the existing DataOciDbmulticloudOracleDbAzureConnectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDbmulticloudOracleDbAzureConnectors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_azure_connectors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_connectors oci_dbmulticloud_oracle_db_azure_connectors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDbmulticloudOracleDbAzureConnectorsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDbmulticloudOracleDbAzureConnectorsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_azure_connectors',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._dbClusterResourceId = config.dbClusterResourceId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._oracleDbAzureConnectorId = config.oracleDbAzureConnectorId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // db_cluster_resource_id - computed: false, optional: true, required: false
  private _dbClusterResourceId?: string; 
  public get dbClusterResourceId() {
    return this.getStringAttribute('db_cluster_resource_id');
  }
  public set dbClusterResourceId(value: string) {
    this._dbClusterResourceId = value;
  }
  public resetDbClusterResourceId() {
    this._dbClusterResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterResourceIdInput() {
    return this._dbClusterResourceId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // oracle_db_azure_connector_id - computed: false, optional: true, required: false
  private _oracleDbAzureConnectorId?: string; 
  public get oracleDbAzureConnectorId() {
    return this.getStringAttribute('oracle_db_azure_connector_id');
  }
  public set oracleDbAzureConnectorId(value: string) {
    this._oracleDbAzureConnectorId = value;
  }
  public resetOracleDbAzureConnectorId() {
    this._oracleDbAzureConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbAzureConnectorIdInput() {
    return this._oracleDbAzureConnectorId;
  }

  // oracle_db_azure_connector_summary_collection - computed: true, optional: false, required: false
  private _oracleDbAzureConnectorSummaryCollection = new DataOciDbmulticloudOracleDbAzureConnectorsOracleDbAzureConnectorSummaryCollectionList(this, "oracle_db_azure_connector_summary_collection", false);
  public get oracleDbAzureConnectorSummaryCollection() {
    return this._oracleDbAzureConnectorSummaryCollection;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDbmulticloudOracleDbAzureConnectorsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDbmulticloudOracleDbAzureConnectorsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      db_cluster_resource_id: cdktf.stringToTerraform(this._dbClusterResourceId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      oracle_db_azure_connector_id: cdktf.stringToTerraform(this._oracleDbAzureConnectorId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDbmulticloudOracleDbAzureConnectorsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_resource_id: {
        value: cdktf.stringToHclTerraform(this._dbClusterResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      oracle_db_azure_connector_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbAzureConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDbmulticloudOracleDbAzureConnectorsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDbmulticloudOracleDbAzureConnectorsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
