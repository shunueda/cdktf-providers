// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/route_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanRoutePolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/route_policy_definition#id DataSdwanRoutePolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanRoutePolicyDefinitionSequencesActionEntries {
}

export function dataSdwanRoutePolicyDefinitionSequencesActionEntriesToTerraform(struct?: DataSdwanRoutePolicyDefinitionSequencesActionEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanRoutePolicyDefinitionSequencesActionEntriesToHclTerraform(struct?: DataSdwanRoutePolicyDefinitionSequencesActionEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanRoutePolicyDefinitionSequencesActionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanRoutePolicyDefinitionSequencesActionEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanRoutePolicyDefinitionSequencesActionEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator - computed: true, optional: false, required: false
  public get aggregator() {
    return this.getNumberAttribute('aggregator');
  }

  // aggregator_ip_address - computed: true, optional: false, required: false
  public get aggregatorIpAddress() {
    return this.getStringAttribute('aggregator_ip_address');
  }

  // as_path_exclude - computed: true, optional: false, required: false
  public get asPathExclude() {
    return this.getStringAttribute('as_path_exclude');
  }

  // as_path_prepend - computed: true, optional: false, required: false
  public get asPathPrepend() {
    return this.getStringAttribute('as_path_prepend');
  }

  // atomic_aggregate - computed: true, optional: false, required: false
  public get atomicAggregate() {
    return this.getBooleanAttribute('atomic_aggregate');
  }

  // community - computed: true, optional: false, required: false
  public get community() {
    return this.getStringAttribute('community');
  }

  // community_additive - computed: true, optional: false, required: false
  public get communityAdditive() {
    return this.getBooleanAttribute('community_additive');
  }

  // community_variable - computed: true, optional: false, required: false
  public get communityVariable() {
    return this.getStringAttribute('community_variable');
  }

  // local_preference - computed: true, optional: false, required: false
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // next_hop - computed: true, optional: false, required: false
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }

  // omp_tag - computed: true, optional: false, required: false
  public get ompTag() {
    return this.getNumberAttribute('omp_tag');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // originator - computed: true, optional: false, required: false
  public get originator() {
    return this.getStringAttribute('originator');
  }

  // ospf_tag - computed: true, optional: false, required: false
  public get ospfTag() {
    return this.getNumberAttribute('ospf_tag');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataSdwanRoutePolicyDefinitionSequencesActionEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanRoutePolicyDefinitionSequencesActionEntriesOutputReference {
    return new DataSdwanRoutePolicyDefinitionSequencesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanRoutePolicyDefinitionSequencesMatchEntries {
}

export function dataSdwanRoutePolicyDefinitionSequencesMatchEntriesToTerraform(struct?: DataSdwanRoutePolicyDefinitionSequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanRoutePolicyDefinitionSequencesMatchEntriesToHclTerraform(struct?: DataSdwanRoutePolicyDefinitionSequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanRoutePolicyDefinitionSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanRoutePolicyDefinitionSequencesMatchEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanRoutePolicyDefinitionSequencesMatchEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path_list_id - computed: true, optional: false, required: false
  public get asPathListId() {
    return this.getStringAttribute('as_path_list_id');
  }

  // as_path_list_version - computed: true, optional: false, required: false
  public get asPathListVersion() {
    return this.getNumberAttribute('as_path_list_version');
  }

  // community_list_id - computed: true, optional: false, required: false
  public get communityListId() {
    return this.getStringAttribute('community_list_id');
  }

  // community_list_ids - computed: true, optional: false, required: false
  public get communityListIds() {
    return cdktf.Fn.tolist(this.getListAttribute('community_list_ids'));
  }

  // community_list_match_flag - computed: true, optional: false, required: false
  public get communityListMatchFlag() {
    return this.getStringAttribute('community_list_match_flag');
  }

  // community_list_version - computed: true, optional: false, required: false
  public get communityListVersion() {
    return this.getNumberAttribute('community_list_version');
  }

  // community_list_versions - computed: true, optional: false, required: false
  public get communityListVersions() {
    return this.getListAttribute('community_list_versions');
  }

  // expanded_community_list_id - computed: true, optional: false, required: false
  public get expandedCommunityListId() {
    return this.getStringAttribute('expanded_community_list_id');
  }

  // expanded_community_list_variable - computed: true, optional: false, required: false
  public get expandedCommunityListVariable() {
    return this.getStringAttribute('expanded_community_list_variable');
  }

  // expanded_community_list_version - computed: true, optional: false, required: false
  public get expandedCommunityListVersion() {
    return this.getNumberAttribute('expanded_community_list_version');
  }

  // extended_community_list_id - computed: true, optional: false, required: false
  public get extendedCommunityListId() {
    return this.getStringAttribute('extended_community_list_id');
  }

  // extended_community_list_version - computed: true, optional: false, required: false
  public get extendedCommunityListVersion() {
    return this.getNumberAttribute('extended_community_list_version');
  }

  // local_preference - computed: true, optional: false, required: false
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // next_hop_prefix_list_id - computed: true, optional: false, required: false
  public get nextHopPrefixListId() {
    return this.getStringAttribute('next_hop_prefix_list_id');
  }

  // next_hop_prefix_list_version - computed: true, optional: false, required: false
  public get nextHopPrefixListVersion() {
    return this.getNumberAttribute('next_hop_prefix_list_version');
  }

  // omp_tag - computed: true, optional: false, required: false
  public get ompTag() {
    return this.getNumberAttribute('omp_tag');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // ospf_tag - computed: true, optional: false, required: false
  public get ospfTag() {
    return this.getNumberAttribute('ospf_tag');
  }

  // peer - computed: true, optional: false, required: false
  public get peer() {
    return this.getStringAttribute('peer');
  }

  // prefix_list_id - computed: true, optional: false, required: false
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // prefix_list_version - computed: true, optional: false, required: false
  public get prefixListVersion() {
    return this.getNumberAttribute('prefix_list_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanRoutePolicyDefinitionSequencesMatchEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanRoutePolicyDefinitionSequencesMatchEntriesOutputReference {
    return new DataSdwanRoutePolicyDefinitionSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanRoutePolicyDefinitionSequences {
}

export function dataSdwanRoutePolicyDefinitionSequencesToTerraform(struct?: DataSdwanRoutePolicyDefinitionSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanRoutePolicyDefinitionSequencesToHclTerraform(struct?: DataSdwanRoutePolicyDefinitionSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanRoutePolicyDefinitionSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanRoutePolicyDefinitionSequences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanRoutePolicyDefinitionSequences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_entries - computed: true, optional: false, required: false
  private _actionEntries = new DataSdwanRoutePolicyDefinitionSequencesActionEntriesList(this, "action_entries", true);
  public get actionEntries() {
    return this._actionEntries;
  }

  // base_action - computed: true, optional: false, required: false
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_type - computed: true, optional: false, required: false
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }

  // match_entries - computed: true, optional: false, required: false
  private _matchEntries = new DataSdwanRoutePolicyDefinitionSequencesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataSdwanRoutePolicyDefinitionSequencesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanRoutePolicyDefinitionSequencesOutputReference {
    return new DataSdwanRoutePolicyDefinitionSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/route_policy_definition sdwan_route_policy_definition}
*/
export class DataSdwanRoutePolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_route_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanRoutePolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanRoutePolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanRoutePolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/route_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanRoutePolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_route_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/route_policy_definition sdwan_route_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanRoutePolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanRoutePolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_route_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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

  // default_action - computed: true, optional: false, required: false
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // sequences - computed: true, optional: false, required: false
  private _sequences = new DataSdwanRoutePolicyDefinitionSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
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
