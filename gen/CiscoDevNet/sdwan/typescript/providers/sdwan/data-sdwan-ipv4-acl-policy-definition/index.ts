// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/ipv4_acl_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanIpv4AclPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/ipv4_acl_policy_definition#id DataSdwanIpv4AclPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesSetParameters {
}

export function dataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesSetParametersToTerraform(struct?: DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesSetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesSetParametersToHclTerraform(struct?: DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesSetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesSetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesSetParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesSetParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }

  // next_hop - computed: true, optional: false, required: false
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesSetParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesSetParametersOutputReference {
    return new DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesSetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanIpv4AclPolicyDefinitionSequencesActionEntries {
}

export function dataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesToTerraform(struct?: DataSdwanIpv4AclPolicyDefinitionSequencesActionEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesToHclTerraform(struct?: DataSdwanIpv4AclPolicyDefinitionSequencesActionEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanIpv4AclPolicyDefinitionSequencesActionEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanIpv4AclPolicyDefinitionSequencesActionEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_map_id - computed: true, optional: false, required: false
  public get classMapId() {
    return this.getStringAttribute('class_map_id');
  }

  // class_map_version - computed: true, optional: false, required: false
  public get classMapVersion() {
    return this.getNumberAttribute('class_map_version');
  }

  // counter_name - computed: true, optional: false, required: false
  public get counterName() {
    return this.getStringAttribute('counter_name');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getBooleanAttribute('log');
  }

  // mirror_id - computed: true, optional: false, required: false
  public get mirrorId() {
    return this.getStringAttribute('mirror_id');
  }

  // mirror_version - computed: true, optional: false, required: false
  public get mirrorVersion() {
    return this.getNumberAttribute('mirror_version');
  }

  // policer_id - computed: true, optional: false, required: false
  public get policerId() {
    return this.getStringAttribute('policer_id');
  }

  // policer_version - computed: true, optional: false, required: false
  public get policerVersion() {
    return this.getNumberAttribute('policer_version');
  }

  // set_parameters - computed: true, optional: false, required: false
  private _setParameters = new DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesSetParametersList(this, "set_parameters", false);
  public get setParameters() {
    return this._setParameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesOutputReference {
    return new DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanIpv4AclPolicyDefinitionSequencesMatchEntries {
}

export function dataSdwanIpv4AclPolicyDefinitionSequencesMatchEntriesToTerraform(struct?: DataSdwanIpv4AclPolicyDefinitionSequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanIpv4AclPolicyDefinitionSequencesMatchEntriesToHclTerraform(struct?: DataSdwanIpv4AclPolicyDefinitionSequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanIpv4AclPolicyDefinitionSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanIpv4AclPolicyDefinitionSequencesMatchEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanIpv4AclPolicyDefinitionSequencesMatchEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_map_id - computed: true, optional: false, required: false
  public get classMapId() {
    return this.getStringAttribute('class_map_id');
  }

  // class_map_version - computed: true, optional: false, required: false
  public get classMapVersion() {
    return this.getNumberAttribute('class_map_version');
  }

  // destination_data_ipv4_prefix_list_id - computed: true, optional: false, required: false
  public get destinationDataIpv4PrefixListId() {
    return this.getStringAttribute('destination_data_ipv4_prefix_list_id');
  }

  // destination_data_ipv4_prefix_list_version - computed: true, optional: false, required: false
  public get destinationDataIpv4PrefixListVersion() {
    return this.getNumberAttribute('destination_data_ipv4_prefix_list_version');
  }

  // destination_ip - computed: true, optional: false, required: false
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }

  // destination_ip_variable - computed: true, optional: false, required: false
  public get destinationIpVariable() {
    return this.getStringAttribute('destination_ip_variable');
  }

  // destination_ports - computed: true, optional: false, required: false
  public get destinationPorts() {
    return this.getStringAttribute('destination_ports');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // icmp_message - computed: true, optional: false, required: false
  public get icmpMessage() {
    return this.getStringAttribute('icmp_message');
  }

  // packet_length - computed: true, optional: false, required: false
  public get packetLength() {
    return this.getNumberAttribute('packet_length');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_data_ipv4_prefix_list_id - computed: true, optional: false, required: false
  public get sourceDataIpv4PrefixListId() {
    return this.getStringAttribute('source_data_ipv4_prefix_list_id');
  }

  // source_data_ipv4_prefix_list_version - computed: true, optional: false, required: false
  public get sourceDataIpv4PrefixListVersion() {
    return this.getNumberAttribute('source_data_ipv4_prefix_list_version');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_ip_variable - computed: true, optional: false, required: false
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getStringAttribute('source_ports');
  }

  // tcp - computed: true, optional: false, required: false
  public get tcp() {
    return this.getStringAttribute('tcp');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanIpv4AclPolicyDefinitionSequencesMatchEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanIpv4AclPolicyDefinitionSequencesMatchEntriesOutputReference {
    return new DataSdwanIpv4AclPolicyDefinitionSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanIpv4AclPolicyDefinitionSequences {
}

export function dataSdwanIpv4AclPolicyDefinitionSequencesToTerraform(struct?: DataSdwanIpv4AclPolicyDefinitionSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanIpv4AclPolicyDefinitionSequencesToHclTerraform(struct?: DataSdwanIpv4AclPolicyDefinitionSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanIpv4AclPolicyDefinitionSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanIpv4AclPolicyDefinitionSequences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanIpv4AclPolicyDefinitionSequences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_entries - computed: true, optional: false, required: false
  private _actionEntries = new DataSdwanIpv4AclPolicyDefinitionSequencesActionEntriesList(this, "action_entries", true);
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

  // match_entries - computed: true, optional: false, required: false
  private _matchEntries = new DataSdwanIpv4AclPolicyDefinitionSequencesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataSdwanIpv4AclPolicyDefinitionSequencesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanIpv4AclPolicyDefinitionSequencesOutputReference {
    return new DataSdwanIpv4AclPolicyDefinitionSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/ipv4_acl_policy_definition sdwan_ipv4_acl_policy_definition}
*/
export class DataSdwanIpv4AclPolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_ipv4_acl_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanIpv4AclPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanIpv4AclPolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanIpv4AclPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/ipv4_acl_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanIpv4AclPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_ipv4_acl_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/ipv4_acl_policy_definition sdwan_ipv4_acl_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanIpv4AclPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanIpv4AclPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_ipv4_acl_policy_definition',
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
  private _sequences = new DataSdwanIpv4AclPolicyDefinitionSequencesList(this, "sequences", false);
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
