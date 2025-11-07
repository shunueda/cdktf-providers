// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/application_aware_routing_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanApplicationAwareRoutingPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/application_aware_routing_policy_definition#id DataSdwanApplicationAwareRoutingPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters {
}

export function dataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersToTerraform(struct?: DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersToHclTerraform(struct?: DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preferred_color - computed: true, optional: false, required: false
  public get preferredColor() {
    return this.getStringAttribute('preferred_color');
  }

  // preferred_color_group_list_id - computed: true, optional: false, required: false
  public get preferredColorGroupListId() {
    return this.getStringAttribute('preferred_color_group_list_id');
  }

  // preferred_color_group_list_version - computed: true, optional: false, required: false
  public get preferredColorGroupListVersion() {
    return this.getNumberAttribute('preferred_color_group_list_version');
  }

  // sla_class_list_id - computed: true, optional: false, required: false
  public get slaClassListId() {
    return this.getStringAttribute('sla_class_list_id');
  }

  // sla_class_list_version - computed: true, optional: false, required: false
  public get slaClassListVersion() {
    return this.getNumberAttribute('sla_class_list_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersOutputReference {
    return new DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntries {
}

export function dataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesToTerraform(struct?: DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesToHclTerraform(struct?: DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_sla_preferred_color - computed: true, optional: false, required: false
  public get backupSlaPreferredColor() {
    return this.getStringAttribute('backup_sla_preferred_color');
  }

  // cloud_sla - computed: true, optional: false, required: false
  public get cloudSla() {
    return this.getBooleanAttribute('cloud_sla');
  }

  // counter - computed: true, optional: false, required: false
  public get counter() {
    return this.getStringAttribute('counter');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getBooleanAttribute('log');
  }

  // sla_class_parameters - computed: true, optional: false, required: false
  private _slaClassParameters = new DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersList(this, "sla_class_parameters", false);
  public get slaClassParameters() {
    return this._slaClassParameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesOutputReference {
    return new DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries {
}

export function dataSdwanApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesToTerraform(struct?: DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesToHclTerraform(struct?: DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_list_id - computed: true, optional: false, required: false
  public get applicationListId() {
    return this.getStringAttribute('application_list_id');
  }

  // application_list_version - computed: true, optional: false, required: false
  public get applicationListVersion() {
    return this.getNumberAttribute('application_list_version');
  }

  // destination_data_prefix_list_id - computed: true, optional: false, required: false
  public get destinationDataPrefixListId() {
    return this.getStringAttribute('destination_data_prefix_list_id');
  }

  // destination_data_prefix_list_version - computed: true, optional: false, required: false
  public get destinationDataPrefixListVersion() {
    return this.getNumberAttribute('destination_data_prefix_list_version');
  }

  // destination_ip - computed: true, optional: false, required: false
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }

  // destination_region - computed: true, optional: false, required: false
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getStringAttribute('dns');
  }

  // dns_application_list_id - computed: true, optional: false, required: false
  public get dnsApplicationListId() {
    return this.getStringAttribute('dns_application_list_id');
  }

  // dns_application_list_version - computed: true, optional: false, required: false
  public get dnsApplicationListVersion() {
    return this.getNumberAttribute('dns_application_list_version');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // icmp_message - computed: true, optional: false, required: false
  public get icmpMessage() {
    return this.getStringAttribute('icmp_message');
  }

  // plp - computed: true, optional: false, required: false
  public get plp() {
    return this.getStringAttribute('plp');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_data_prefix_list_id - computed: true, optional: false, required: false
  public get sourceDataPrefixListId() {
    return this.getStringAttribute('source_data_prefix_list_id');
  }

  // source_data_prefix_list_version - computed: true, optional: false, required: false
  public get sourceDataPrefixListVersion() {
    return this.getNumberAttribute('source_data_prefix_list_version');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // traffic_to - computed: true, optional: false, required: false
  public get trafficTo() {
    return this.getStringAttribute('traffic_to');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesOutputReference {
    return new DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanApplicationAwareRoutingPolicyDefinitionSequences {
}

export function dataSdwanApplicationAwareRoutingPolicyDefinitionSequencesToTerraform(struct?: DataSdwanApplicationAwareRoutingPolicyDefinitionSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanApplicationAwareRoutingPolicyDefinitionSequencesToHclTerraform(struct?: DataSdwanApplicationAwareRoutingPolicyDefinitionSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanApplicationAwareRoutingPolicyDefinitionSequences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanApplicationAwareRoutingPolicyDefinitionSequences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_entries - computed: true, optional: false, required: false
  private _actionEntries = new DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesList(this, "action_entries", true);
  public get actionEntries() {
    return this._actionEntries;
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
  private _matchEntries = new DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesOutputReference {
    return new DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/application_aware_routing_policy_definition sdwan_application_aware_routing_policy_definition}
*/
export class DataSdwanApplicationAwareRoutingPolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_application_aware_routing_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanApplicationAwareRoutingPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanApplicationAwareRoutingPolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanApplicationAwareRoutingPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/application_aware_routing_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanApplicationAwareRoutingPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_application_aware_routing_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/application_aware_routing_policy_definition sdwan_application_aware_routing_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanApplicationAwareRoutingPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanApplicationAwareRoutingPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_application_aware_routing_policy_definition',
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

  // default_action_sla_class_list_id - computed: true, optional: false, required: false
  public get defaultActionSlaClassListId() {
    return this.getStringAttribute('default_action_sla_class_list_id');
  }

  // default_action_sla_class_list_version - computed: true, optional: false, required: false
  public get defaultActionSlaClassListVersion() {
    return this.getNumberAttribute('default_action_sla_class_list_version');
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
  private _sequences = new DataSdwanApplicationAwareRoutingPolicyDefinitionSequencesList(this, "sequences", false);
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
