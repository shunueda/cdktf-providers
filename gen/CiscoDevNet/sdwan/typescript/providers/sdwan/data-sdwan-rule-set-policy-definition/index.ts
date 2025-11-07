// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/rule_set_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanRuleSetPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/rule_set_policy_definition#id DataSdwanRuleSetPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanRuleSetPolicyDefinitionRules {
}

export function dataSdwanRuleSetPolicyDefinitionRulesToTerraform(struct?: DataSdwanRuleSetPolicyDefinitionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanRuleSetPolicyDefinitionRulesToHclTerraform(struct?: DataSdwanRuleSetPolicyDefinitionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanRuleSetPolicyDefinitionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanRuleSetPolicyDefinitionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanRuleSetPolicyDefinitionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_data_fqdn_prefix_list_id - computed: true, optional: false, required: false
  public get destinationDataFqdnPrefixListId() {
    return this.getStringAttribute('destination_data_fqdn_prefix_list_id');
  }

  // destination_data_fqdn_prefix_list_version - computed: true, optional: false, required: false
  public get destinationDataFqdnPrefixListVersion() {
    return this.getNumberAttribute('destination_data_fqdn_prefix_list_version');
  }

  // destination_data_ipv4_prefix_list_id - computed: true, optional: false, required: false
  public get destinationDataIpv4PrefixListId() {
    return this.getStringAttribute('destination_data_ipv4_prefix_list_id');
  }

  // destination_data_ipv4_prefix_list_version - computed: true, optional: false, required: false
  public get destinationDataIpv4PrefixListVersion() {
    return this.getNumberAttribute('destination_data_ipv4_prefix_list_version');
  }

  // destination_fqdn - computed: true, optional: false, required: false
  public get destinationFqdn() {
    return this.getStringAttribute('destination_fqdn');
  }

  // destination_geo_location - computed: true, optional: false, required: false
  public get destinationGeoLocation() {
    return this.getStringAttribute('destination_geo_location');
  }

  // destination_geo_location_list_id - computed: true, optional: false, required: false
  public get destinationGeoLocationListId() {
    return this.getStringAttribute('destination_geo_location_list_id');
  }

  // destination_geo_location_list_version - computed: true, optional: false, required: false
  public get destinationGeoLocationListVersion() {
    return this.getNumberAttribute('destination_geo_location_list_version');
  }

  // destination_ipv4_prefix - computed: true, optional: false, required: false
  public get destinationIpv4Prefix() {
    return this.getStringAttribute('destination_ipv4_prefix');
  }

  // destination_ipv4_prefix_variable - computed: true, optional: false, required: false
  public get destinationIpv4PrefixVariable() {
    return this.getStringAttribute('destination_ipv4_prefix_variable');
  }

  // destination_object_group_id - computed: true, optional: false, required: false
  public get destinationObjectGroupId() {
    return this.getStringAttribute('destination_object_group_id');
  }

  // destination_object_group_version - computed: true, optional: false, required: false
  public get destinationObjectGroupVersion() {
    return this.getNumberAttribute('destination_object_group_version');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }

  // destination_port_list_id - computed: true, optional: false, required: false
  public get destinationPortListId() {
    return this.getStringAttribute('destination_port_list_id');
  }

  // destination_port_list_version - computed: true, optional: false, required: false
  public get destinationPortListVersion() {
    return this.getNumberAttribute('destination_port_list_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_list_id - computed: true, optional: false, required: false
  public get protocolListId() {
    return this.getStringAttribute('protocol_list_id');
  }

  // protocol_list_version - computed: true, optional: false, required: false
  public get protocolListVersion() {
    return this.getNumberAttribute('protocol_list_version');
  }

  // protocol_number - computed: true, optional: false, required: false
  public get protocolNumber() {
    return this.getNumberAttribute('protocol_number');
  }

  // source_data_fqdn_prefix_list_id - computed: true, optional: false, required: false
  public get sourceDataFqdnPrefixListId() {
    return this.getStringAttribute('source_data_fqdn_prefix_list_id');
  }

  // source_data_fqdn_prefix_list_version - computed: true, optional: false, required: false
  public get sourceDataFqdnPrefixListVersion() {
    return this.getNumberAttribute('source_data_fqdn_prefix_list_version');
  }

  // source_data_ipv4_prefix_list_id - computed: true, optional: false, required: false
  public get sourceDataIpv4PrefixListId() {
    return this.getStringAttribute('source_data_ipv4_prefix_list_id');
  }

  // source_data_ipv4_prefix_list_version - computed: true, optional: false, required: false
  public get sourceDataIpv4PrefixListVersion() {
    return this.getNumberAttribute('source_data_ipv4_prefix_list_version');
  }

  // source_fqdn - computed: true, optional: false, required: false
  public get sourceFqdn() {
    return this.getStringAttribute('source_fqdn');
  }

  // source_geo_location - computed: true, optional: false, required: false
  public get sourceGeoLocation() {
    return this.getStringAttribute('source_geo_location');
  }

  // source_geo_location_list_id - computed: true, optional: false, required: false
  public get sourceGeoLocationListId() {
    return this.getStringAttribute('source_geo_location_list_id');
  }

  // source_geo_location_list_version - computed: true, optional: false, required: false
  public get sourceGeoLocationListVersion() {
    return this.getNumberAttribute('source_geo_location_list_version');
  }

  // source_ipv4_prefix - computed: true, optional: false, required: false
  public get sourceIpv4Prefix() {
    return this.getStringAttribute('source_ipv4_prefix');
  }

  // source_ipv4_prefix_variable - computed: true, optional: false, required: false
  public get sourceIpv4PrefixVariable() {
    return this.getStringAttribute('source_ipv4_prefix_variable');
  }

  // source_object_group_id - computed: true, optional: false, required: false
  public get sourceObjectGroupId() {
    return this.getStringAttribute('source_object_group_id');
  }

  // source_object_group_version - computed: true, optional: false, required: false
  public get sourceObjectGroupVersion() {
    return this.getNumberAttribute('source_object_group_version');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // source_port_list_id - computed: true, optional: false, required: false
  public get sourcePortListId() {
    return this.getStringAttribute('source_port_list_id');
  }

  // source_port_list_version - computed: true, optional: false, required: false
  public get sourcePortListVersion() {
    return this.getNumberAttribute('source_port_list_version');
  }
}

export class DataSdwanRuleSetPolicyDefinitionRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanRuleSetPolicyDefinitionRulesOutputReference {
    return new DataSdwanRuleSetPolicyDefinitionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/rule_set_policy_definition sdwan_rule_set_policy_definition}
*/
export class DataSdwanRuleSetPolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_rule_set_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanRuleSetPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanRuleSetPolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanRuleSetPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/rule_set_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanRuleSetPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_rule_set_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/rule_set_policy_definition sdwan_rule_set_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanRuleSetPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanRuleSetPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_rule_set_policy_definition',
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

  // rules - computed: true, optional: false, required: false
  private _rules = new DataSdwanRuleSetPolicyDefinitionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
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
