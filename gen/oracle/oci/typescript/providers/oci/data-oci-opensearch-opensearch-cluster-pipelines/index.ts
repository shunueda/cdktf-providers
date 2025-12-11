// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpensearchOpensearchClusterPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines#compartment_id DataOciOpensearchOpensearchClusterPipelines#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines#display_name DataOciOpensearchOpensearchClusterPipelines#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines#id DataOciOpensearchOpensearchClusterPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines#pipeline_component_id DataOciOpensearchOpensearchClusterPipelines#pipeline_component_id}
  */
  readonly pipelineComponentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines#state DataOciOpensearchOpensearchClusterPipelines#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines#filter DataOciOpensearchOpensearchClusterPipelines#filter}
  */
  readonly filter?: DataOciOpensearchOpensearchClusterPipelinesFilter[] | cdktf.IResolvable;
}
export interface DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsReverseConnectionEndpoints {
}

export function dataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsReverseConnectionEndpointsToTerraform(struct?: DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsReverseConnectionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsReverseConnectionEndpointsToHclTerraform(struct?: DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsReverseConnectionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsReverseConnectionEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsReverseConnectionEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsReverseConnectionEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_fqdn - computed: true, optional: false, required: false
  public get customerFqdn() {
    return this.getStringAttribute('customer_fqdn');
  }

  // customer_ip - computed: true, optional: false, required: false
  public get customerIp() {
    return this.getStringAttribute('customer_ip');
  }
}

export class DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsReverseConnectionEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsReverseConnectionEndpointsOutputReference {
    return new DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsReverseConnectionEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItems {
}

export function dataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsToTerraform(struct?: DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsToHclTerraform(struct?: DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_prepper_configuration_body - computed: true, optional: false, required: false
  public get dataPrepperConfigurationBody() {
    return this.getStringAttribute('data_prepper_configuration_body');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory_gb - computed: true, optional: false, required: false
  public get memoryGb() {
    return this.getNumberAttribute('memory_gb');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_shape - computed: true, optional: false, required: false
  public get nodeShape() {
    return this.getStringAttribute('node_shape');
  }

  // nsg_id - computed: true, optional: false, required: false
  public get nsgId() {
    return this.getStringAttribute('nsg_id');
  }

  // ocpu_count - computed: true, optional: false, required: false
  public get ocpuCount() {
    return this.getNumberAttribute('ocpu_count');
  }

  // opc_dry_run - computed: true, optional: false, required: false
  public get opcDryRun() {
    return this.getBooleanAttribute('opc_dry_run');
  }

  // opensearch_pipeline_fqdn - computed: true, optional: false, required: false
  public get opensearchPipelineFqdn() {
    return this.getStringAttribute('opensearch_pipeline_fqdn');
  }

  // opensearch_pipeline_private_ip - computed: true, optional: false, required: false
  public get opensearchPipelinePrivateIp() {
    return this.getStringAttribute('opensearch_pipeline_private_ip');
  }

  // pipeline_configuration_body - computed: true, optional: false, required: false
  public get pipelineConfigurationBody() {
    return this.getStringAttribute('pipeline_configuration_body');
  }

  // pipeline_mode - computed: true, optional: false, required: false
  public get pipelineMode() {
    return this.getStringAttribute('pipeline_mode');
  }

  // reverse_connection_endpoints - computed: true, optional: false, required: false
  private _reverseConnectionEndpoints = new DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsReverseConnectionEndpointsList(this, "reverse_connection_endpoints", false);
  public get reverseConnectionEndpoints() {
    return this._reverseConnectionEndpoints;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_compartment_id - computed: true, optional: false, required: false
  public get subnetCompartmentId() {
    return this.getStringAttribute('subnet_compartment_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vcn_compartment_id - computed: true, optional: false, required: false
  public get vcnCompartmentId() {
    return this.getStringAttribute('vcn_compartment_id');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}

export class DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsOutputReference {
    return new DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollection {
}

export function dataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionToTerraform(struct?: DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionToHclTerraform(struct?: DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionOutputReference {
    return new DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClusterPipelinesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines#name DataOciOpensearchOpensearchClusterPipelines#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines#regex DataOciOpensearchOpensearchClusterPipelines#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines#values DataOciOpensearchOpensearchClusterPipelines#values}
  */
  readonly values: string[];
}

export function dataOciOpensearchOpensearchClusterPipelinesFilterToTerraform(struct?: DataOciOpensearchOpensearchClusterPipelinesFilter | cdktf.IResolvable): any {
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


export function dataOciOpensearchOpensearchClusterPipelinesFilterToHclTerraform(struct?: DataOciOpensearchOpensearchClusterPipelinesFilter | cdktf.IResolvable): any {
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

export class DataOciOpensearchOpensearchClusterPipelinesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClusterPipelinesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOpensearchOpensearchClusterPipelinesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOpensearchOpensearchClusterPipelinesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOpensearchOpensearchClusterPipelinesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOpensearchOpensearchClusterPipelinesFilterOutputReference {
    return new DataOciOpensearchOpensearchClusterPipelinesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines oci_opensearch_opensearch_cluster_pipelines}
*/
export class DataOciOpensearchOpensearchClusterPipelines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opensearch_opensearch_cluster_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpensearchOpensearchClusterPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpensearchOpensearchClusterPipelines to import
  * @param importFromId The id of the existing DataOciOpensearchOpensearchClusterPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpensearchOpensearchClusterPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opensearch_opensearch_cluster_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipelines oci_opensearch_opensearch_cluster_pipelines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpensearchOpensearchClusterPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpensearchOpensearchClusterPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opensearch_opensearch_cluster_pipelines',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._pipelineComponentId = config.pipelineComponentId;
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

  // id - computed: false, optional: true, required: false
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

  // opensearch_cluster_pipeline_collection - computed: true, optional: false, required: false
  private _opensearchClusterPipelineCollection = new DataOciOpensearchOpensearchClusterPipelinesOpensearchClusterPipelineCollectionList(this, "opensearch_cluster_pipeline_collection", false);
  public get opensearchClusterPipelineCollection() {
    return this._opensearchClusterPipelineCollection;
  }

  // pipeline_component_id - computed: false, optional: true, required: false
  private _pipelineComponentId?: string; 
  public get pipelineComponentId() {
    return this.getStringAttribute('pipeline_component_id');
  }
  public set pipelineComponentId(value: string) {
    this._pipelineComponentId = value;
  }
  public resetPipelineComponentId() {
    this._pipelineComponentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineComponentIdInput() {
    return this._pipelineComponentId;
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
  private _filter = new DataOciOpensearchOpensearchClusterPipelinesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOpensearchOpensearchClusterPipelinesFilter[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      pipeline_component_id: cdktf.stringToTerraform(this._pipelineComponentId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciOpensearchOpensearchClusterPipelinesFilterToTerraform, true)(this._filter.internalValue),
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
      pipeline_component_id: {
        value: cdktf.stringToHclTerraform(this._pipelineComponentId),
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
        value: cdktf.listMapperHcl(dataOciOpensearchOpensearchClusterPipelinesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOpensearchOpensearchClusterPipelinesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
