// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/custom_control_topology_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCustomControlTopologyPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/custom_control_topology_policy_definition#id DataSdwanCustomControlTopologyPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters {
}

export function dataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersToTerraform(struct?: DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersToHclTerraform(struct?: DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // community - computed: true, optional: false, required: false
  public get community() {
    return this.getStringAttribute('community');
  }

  // community_additive - computed: true, optional: false, required: false
  public get communityAdditive() {
    return this.getBooleanAttribute('community_additive');
  }

  // omp_tag - computed: true, optional: false, required: false
  public get ompTag() {
    return this.getNumberAttribute('omp_tag');
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getNumberAttribute('preference');
  }

  // service_tloc_color - computed: true, optional: false, required: false
  public get serviceTlocColor() {
    return this.getStringAttribute('service_tloc_color');
  }

  // service_tloc_encapsulation - computed: true, optional: false, required: false
  public get serviceTlocEncapsulation() {
    return this.getStringAttribute('service_tloc_encapsulation');
  }

  // service_tloc_ip - computed: true, optional: false, required: false
  public get serviceTlocIp() {
    return this.getStringAttribute('service_tloc_ip');
  }

  // service_tloc_list_id - computed: true, optional: false, required: false
  public get serviceTlocListId() {
    return this.getStringAttribute('service_tloc_list_id');
  }

  // service_tloc_list_version - computed: true, optional: false, required: false
  public get serviceTlocListVersion() {
    return this.getNumberAttribute('service_tloc_list_version');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_vpn_id - computed: true, optional: false, required: false
  public get serviceVpnId() {
    return this.getNumberAttribute('service_vpn_id');
  }

  // tloc_action - computed: true, optional: false, required: false
  public get tlocAction() {
    return this.getStringAttribute('tloc_action');
  }

  // tloc_color - computed: true, optional: false, required: false
  public get tlocColor() {
    return this.getStringAttribute('tloc_color');
  }

  // tloc_encapsulation - computed: true, optional: false, required: false
  public get tlocEncapsulation() {
    return this.getStringAttribute('tloc_encapsulation');
  }

  // tloc_ip - computed: true, optional: false, required: false
  public get tlocIp() {
    return this.getStringAttribute('tloc_ip');
  }

  // tloc_list_id - computed: true, optional: false, required: false
  public get tlocListId() {
    return this.getStringAttribute('tloc_list_id');
  }

  // tloc_list_version - computed: true, optional: false, required: false
  public get tlocListVersion() {
    return this.getNumberAttribute('tloc_list_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersOutputReference {
    return new DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntries {
}

export function dataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesToTerraform(struct?: DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesToHclTerraform(struct?: DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_to_vpn_list_id - computed: true, optional: false, required: false
  public get exportToVpnListId() {
    return this.getStringAttribute('export_to_vpn_list_id');
  }

  // export_to_vpn_list_version - computed: true, optional: false, required: false
  public get exportToVpnListVersion() {
    return this.getNumberAttribute('export_to_vpn_list_version');
  }

  // set_parameters - computed: true, optional: false, required: false
  private _setParameters = new DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesSetParametersList(this, "set_parameters", false);
  public get setParameters() {
    return this._setParameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesOutputReference {
    return new DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCustomControlTopologyPolicyDefinitionSequencesMatchEntries {
}

export function dataSdwanCustomControlTopologyPolicyDefinitionSequencesMatchEntriesToTerraform(struct?: DataSdwanCustomControlTopologyPolicyDefinitionSequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCustomControlTopologyPolicyDefinitionSequencesMatchEntriesToHclTerraform(struct?: DataSdwanCustomControlTopologyPolicyDefinitionSequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCustomControlTopologyPolicyDefinitionSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCustomControlTopologyPolicyDefinitionSequencesMatchEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCustomControlTopologyPolicyDefinitionSequencesMatchEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // carrier - computed: true, optional: false, required: false
  public get carrier() {
    return this.getStringAttribute('carrier');
  }

  // color_list_id - computed: true, optional: false, required: false
  public get colorListId() {
    return this.getStringAttribute('color_list_id');
  }

  // color_list_version - computed: true, optional: false, required: false
  public get colorListVersion() {
    return this.getNumberAttribute('color_list_version');
  }

  // community_list_id - computed: true, optional: false, required: false
  public get communityListId() {
    return this.getStringAttribute('community_list_id');
  }

  // community_list_version - computed: true, optional: false, required: false
  public get communityListVersion() {
    return this.getNumberAttribute('community_list_version');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }

  // expanded_community_list_id - computed: true, optional: false, required: false
  public get expandedCommunityListId() {
    return this.getStringAttribute('expanded_community_list_id');
  }

  // expanded_community_list_version - computed: true, optional: false, required: false
  public get expandedCommunityListVersion() {
    return this.getNumberAttribute('expanded_community_list_version');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
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

  // path_type - computed: true, optional: false, required: false
  public get pathType() {
    return this.getStringAttribute('path_type');
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getNumberAttribute('preference');
  }

  // prefix_list_id - computed: true, optional: false, required: false
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // prefix_list_version - computed: true, optional: false, required: false
  public get prefixListVersion() {
    return this.getNumberAttribute('prefix_list_version');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // region_list_id - computed: true, optional: false, required: false
  public get regionListId() {
    return this.getStringAttribute('region_list_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }

  // site_list_id - computed: true, optional: false, required: false
  public get siteListId() {
    return this.getStringAttribute('site_list_id');
  }

  // site_list_version - computed: true, optional: false, required: false
  public get siteListVersion() {
    return this.getNumberAttribute('site_list_version');
  }

  // tloc_color - computed: true, optional: false, required: false
  public get tlocColor() {
    return this.getStringAttribute('tloc_color');
  }

  // tloc_encapsulation - computed: true, optional: false, required: false
  public get tlocEncapsulation() {
    return this.getStringAttribute('tloc_encapsulation');
  }

  // tloc_ip - computed: true, optional: false, required: false
  public get tlocIp() {
    return this.getStringAttribute('tloc_ip');
  }

  // tloc_list_id - computed: true, optional: false, required: false
  public get tlocListId() {
    return this.getStringAttribute('tloc_list_id');
  }

  // tloc_list_version - computed: true, optional: false, required: false
  public get tlocListVersion() {
    return this.getNumberAttribute('tloc_list_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // vpn_list_id - computed: true, optional: false, required: false
  public get vpnListId() {
    return this.getStringAttribute('vpn_list_id');
  }

  // vpn_list_version - computed: true, optional: false, required: false
  public get vpnListVersion() {
    return this.getNumberAttribute('vpn_list_version');
  }
}

export class DataSdwanCustomControlTopologyPolicyDefinitionSequencesMatchEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCustomControlTopologyPolicyDefinitionSequencesMatchEntriesOutputReference {
    return new DataSdwanCustomControlTopologyPolicyDefinitionSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCustomControlTopologyPolicyDefinitionSequences {
}

export function dataSdwanCustomControlTopologyPolicyDefinitionSequencesToTerraform(struct?: DataSdwanCustomControlTopologyPolicyDefinitionSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCustomControlTopologyPolicyDefinitionSequencesToHclTerraform(struct?: DataSdwanCustomControlTopologyPolicyDefinitionSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCustomControlTopologyPolicyDefinitionSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCustomControlTopologyPolicyDefinitionSequences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCustomControlTopologyPolicyDefinitionSequences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_entries - computed: true, optional: false, required: false
  private _actionEntries = new DataSdwanCustomControlTopologyPolicyDefinitionSequencesActionEntriesList(this, "action_entries", true);
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
  private _matchEntries = new DataSdwanCustomControlTopologyPolicyDefinitionSequencesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanCustomControlTopologyPolicyDefinitionSequencesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCustomControlTopologyPolicyDefinitionSequencesOutputReference {
    return new DataSdwanCustomControlTopologyPolicyDefinitionSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/custom_control_topology_policy_definition sdwan_custom_control_topology_policy_definition}
*/
export class DataSdwanCustomControlTopologyPolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_custom_control_topology_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCustomControlTopologyPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCustomControlTopologyPolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanCustomControlTopologyPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/custom_control_topology_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCustomControlTopologyPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_custom_control_topology_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/custom_control_topology_policy_definition sdwan_custom_control_topology_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCustomControlTopologyPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCustomControlTopologyPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_custom_control_topology_policy_definition',
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
  private _sequences = new DataSdwanCustomControlTopologyPolicyDefinitionSequencesList(this, "sequences", false);
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
