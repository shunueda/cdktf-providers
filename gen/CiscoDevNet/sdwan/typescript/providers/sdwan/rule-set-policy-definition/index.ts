// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleSetPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#description RuleSetPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#name RuleSetPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#rules RuleSetPolicyDefinition#rules}
  */
  readonly rules: RuleSetPolicyDefinitionRules[] | cdktf.IResolvable;
}
export interface RuleSetPolicyDefinitionRules {
  /**
  * Destination data FQDN prefix list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_data_fqdn_prefix_list_id RuleSetPolicyDefinition#destination_data_fqdn_prefix_list_id}
  */
  readonly destinationDataFqdnPrefixListId?: string;
  /**
  * Destination data FQDN prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_data_fqdn_prefix_list_version RuleSetPolicyDefinition#destination_data_fqdn_prefix_list_version}
  */
  readonly destinationDataFqdnPrefixListVersion?: number;
  /**
  * Destination data IPv4 prefix list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_data_ipv4_prefix_list_id RuleSetPolicyDefinition#destination_data_ipv4_prefix_list_id}
  */
  readonly destinationDataIpv4PrefixListId?: string;
  /**
  * Destination data IPv4 prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_data_ipv4_prefix_list_version RuleSetPolicyDefinition#destination_data_ipv4_prefix_list_version}
  */
  readonly destinationDataIpv4PrefixListVersion?: number;
  /**
  * Destination fully qualified domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_fqdn RuleSetPolicyDefinition#destination_fqdn}
  */
  readonly destinationFqdn?: string;
  /**
  * Destination geo location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_geo_location RuleSetPolicyDefinition#destination_geo_location}
  */
  readonly destinationGeoLocation?: string;
  /**
  * Destination geo location list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_geo_location_list_id RuleSetPolicyDefinition#destination_geo_location_list_id}
  */
  readonly destinationGeoLocationListId?: string;
  /**
  * Destination geo location list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_geo_location_list_version RuleSetPolicyDefinition#destination_geo_location_list_version}
  */
  readonly destinationGeoLocationListVersion?: number;
  /**
  * Destination IPv4 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_ipv4_prefix RuleSetPolicyDefinition#destination_ipv4_prefix}
  */
  readonly destinationIpv4Prefix?: string;
  /**
  * Destination IPv4 prefix variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_ipv4_prefix_variable RuleSetPolicyDefinition#destination_ipv4_prefix_variable}
  */
  readonly destinationIpv4PrefixVariable?: string;
  /**
  * Destination object group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_object_group_id RuleSetPolicyDefinition#destination_object_group_id}
  */
  readonly destinationObjectGroupId?: string;
  /**
  * Destination object group version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_object_group_version RuleSetPolicyDefinition#destination_object_group_version}
  */
  readonly destinationObjectGroupVersion?: number;
  /**
  * Destination port or range of ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_port RuleSetPolicyDefinition#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Destination port list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_port_list_id RuleSetPolicyDefinition#destination_port_list_id}
  */
  readonly destinationPortListId?: string;
  /**
  * Destination port list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#destination_port_list_version RuleSetPolicyDefinition#destination_port_list_version}
  */
  readonly destinationPortListVersion?: number;
  /**
  * The name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#name RuleSetPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * The order of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#order RuleSetPolicyDefinition#order}
  */
  readonly order: number;
  /**
  * Protocol name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#protocol RuleSetPolicyDefinition#protocol}
  */
  readonly protocol?: string;
  /**
  * Protocol list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#protocol_list_id RuleSetPolicyDefinition#protocol_list_id}
  */
  readonly protocolListId?: string;
  /**
  * Protocol list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#protocol_list_version RuleSetPolicyDefinition#protocol_list_version}
  */
  readonly protocolListVersion?: number;
  /**
  * Protocol number
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#protocol_number RuleSetPolicyDefinition#protocol_number}
  */
  readonly protocolNumber?: number;
  /**
  * Source data FQDN prefix list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_data_fqdn_prefix_list_id RuleSetPolicyDefinition#source_data_fqdn_prefix_list_id}
  */
  readonly sourceDataFqdnPrefixListId?: string;
  /**
  * Source data FQDN prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_data_fqdn_prefix_list_version RuleSetPolicyDefinition#source_data_fqdn_prefix_list_version}
  */
  readonly sourceDataFqdnPrefixListVersion?: number;
  /**
  * Source data IPv4 prefix list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_data_ipv4_prefix_list_id RuleSetPolicyDefinition#source_data_ipv4_prefix_list_id}
  */
  readonly sourceDataIpv4PrefixListId?: string;
  /**
  * Source data IPv4 prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_data_ipv4_prefix_list_version RuleSetPolicyDefinition#source_data_ipv4_prefix_list_version}
  */
  readonly sourceDataIpv4PrefixListVersion?: number;
  /**
  * Source fully qualified domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_fqdn RuleSetPolicyDefinition#source_fqdn}
  */
  readonly sourceFqdn?: string;
  /**
  * Source geo location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_geo_location RuleSetPolicyDefinition#source_geo_location}
  */
  readonly sourceGeoLocation?: string;
  /**
  * Source geo location list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_geo_location_list_id RuleSetPolicyDefinition#source_geo_location_list_id}
  */
  readonly sourceGeoLocationListId?: string;
  /**
  * Source geo location list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_geo_location_list_version RuleSetPolicyDefinition#source_geo_location_list_version}
  */
  readonly sourceGeoLocationListVersion?: number;
  /**
  * Source IPv4 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_ipv4_prefix RuleSetPolicyDefinition#source_ipv4_prefix}
  */
  readonly sourceIpv4Prefix?: string;
  /**
  * Source IPv4 prefix variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_ipv4_prefix_variable RuleSetPolicyDefinition#source_ipv4_prefix_variable}
  */
  readonly sourceIpv4PrefixVariable?: string;
  /**
  * Source object group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_object_group_id RuleSetPolicyDefinition#source_object_group_id}
  */
  readonly sourceObjectGroupId?: string;
  /**
  * Source object group version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_object_group_version RuleSetPolicyDefinition#source_object_group_version}
  */
  readonly sourceObjectGroupVersion?: number;
  /**
  * Source port or range of ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_port RuleSetPolicyDefinition#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Source port list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_port_list_id RuleSetPolicyDefinition#source_port_list_id}
  */
  readonly sourcePortListId?: string;
  /**
  * Source port list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#source_port_list_version RuleSetPolicyDefinition#source_port_list_version}
  */
  readonly sourcePortListVersion?: number;
}

export function ruleSetPolicyDefinitionRulesToTerraform(struct?: RuleSetPolicyDefinitionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_data_fqdn_prefix_list_id: cdktf.stringToTerraform(struct!.destinationDataFqdnPrefixListId),
    destination_data_fqdn_prefix_list_version: cdktf.numberToTerraform(struct!.destinationDataFqdnPrefixListVersion),
    destination_data_ipv4_prefix_list_id: cdktf.stringToTerraform(struct!.destinationDataIpv4PrefixListId),
    destination_data_ipv4_prefix_list_version: cdktf.numberToTerraform(struct!.destinationDataIpv4PrefixListVersion),
    destination_fqdn: cdktf.stringToTerraform(struct!.destinationFqdn),
    destination_geo_location: cdktf.stringToTerraform(struct!.destinationGeoLocation),
    destination_geo_location_list_id: cdktf.stringToTerraform(struct!.destinationGeoLocationListId),
    destination_geo_location_list_version: cdktf.numberToTerraform(struct!.destinationGeoLocationListVersion),
    destination_ipv4_prefix: cdktf.stringToTerraform(struct!.destinationIpv4Prefix),
    destination_ipv4_prefix_variable: cdktf.stringToTerraform(struct!.destinationIpv4PrefixVariable),
    destination_object_group_id: cdktf.stringToTerraform(struct!.destinationObjectGroupId),
    destination_object_group_version: cdktf.numberToTerraform(struct!.destinationObjectGroupVersion),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    destination_port_list_id: cdktf.stringToTerraform(struct!.destinationPortListId),
    destination_port_list_version: cdktf.numberToTerraform(struct!.destinationPortListVersion),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_list_id: cdktf.stringToTerraform(struct!.protocolListId),
    protocol_list_version: cdktf.numberToTerraform(struct!.protocolListVersion),
    protocol_number: cdktf.numberToTerraform(struct!.protocolNumber),
    source_data_fqdn_prefix_list_id: cdktf.stringToTerraform(struct!.sourceDataFqdnPrefixListId),
    source_data_fqdn_prefix_list_version: cdktf.numberToTerraform(struct!.sourceDataFqdnPrefixListVersion),
    source_data_ipv4_prefix_list_id: cdktf.stringToTerraform(struct!.sourceDataIpv4PrefixListId),
    source_data_ipv4_prefix_list_version: cdktf.numberToTerraform(struct!.sourceDataIpv4PrefixListVersion),
    source_fqdn: cdktf.stringToTerraform(struct!.sourceFqdn),
    source_geo_location: cdktf.stringToTerraform(struct!.sourceGeoLocation),
    source_geo_location_list_id: cdktf.stringToTerraform(struct!.sourceGeoLocationListId),
    source_geo_location_list_version: cdktf.numberToTerraform(struct!.sourceGeoLocationListVersion),
    source_ipv4_prefix: cdktf.stringToTerraform(struct!.sourceIpv4Prefix),
    source_ipv4_prefix_variable: cdktf.stringToTerraform(struct!.sourceIpv4PrefixVariable),
    source_object_group_id: cdktf.stringToTerraform(struct!.sourceObjectGroupId),
    source_object_group_version: cdktf.numberToTerraform(struct!.sourceObjectGroupVersion),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
    source_port_list_id: cdktf.stringToTerraform(struct!.sourcePortListId),
    source_port_list_version: cdktf.numberToTerraform(struct!.sourcePortListVersion),
  }
}


export function ruleSetPolicyDefinitionRulesToHclTerraform(struct?: RuleSetPolicyDefinitionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_data_fqdn_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataFqdnPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_fqdn_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.destinationDataFqdnPrefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_data_ipv4_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataIpv4PrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_ipv4_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.destinationDataIpv4PrefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.destinationFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_geo_location: {
      value: cdktf.stringToHclTerraform(struct!.destinationGeoLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_geo_location_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationGeoLocationListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_geo_location_list_version: {
      value: cdktf.numberToHclTerraform(struct!.destinationGeoLocationListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.destinationIpv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ipv4_prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.destinationIpv4PrefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_object_group_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationObjectGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_object_group_version: {
      value: cdktf.numberToHclTerraform(struct!.destinationObjectGroupVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_list_version: {
      value: cdktf.numberToHclTerraform(struct!.destinationPortListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_list_id: {
      value: cdktf.stringToHclTerraform(struct!.protocolListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_list_version: {
      value: cdktf.numberToHclTerraform(struct!.protocolListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol_number: {
      value: cdktf.numberToHclTerraform(struct!.protocolNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_data_fqdn_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataFqdnPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_fqdn_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.sourceDataFqdnPrefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_data_ipv4_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataIpv4PrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_ipv4_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.sourceDataIpv4PrefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.sourceFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_geo_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceGeoLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_geo_location_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceGeoLocationListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_geo_location_list_version: {
      value: cdktf.numberToHclTerraform(struct!.sourceGeoLocationListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ipv4_prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpv4PrefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_object_group_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceObjectGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_object_group_version: {
      value: cdktf.numberToHclTerraform(struct!.sourceObjectGroupVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_list_version: {
      value: cdktf.numberToHclTerraform(struct!.sourcePortListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetPolicyDefinitionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleSetPolicyDefinitionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationDataFqdnPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataFqdnPrefixListId = this._destinationDataFqdnPrefixListId;
    }
    if (this._destinationDataFqdnPrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataFqdnPrefixListVersion = this._destinationDataFqdnPrefixListVersion;
    }
    if (this._destinationDataIpv4PrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataIpv4PrefixListId = this._destinationDataIpv4PrefixListId;
    }
    if (this._destinationDataIpv4PrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataIpv4PrefixListVersion = this._destinationDataIpv4PrefixListVersion;
    }
    if (this._destinationFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFqdn = this._destinationFqdn;
    }
    if (this._destinationGeoLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationGeoLocation = this._destinationGeoLocation;
    }
    if (this._destinationGeoLocationListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationGeoLocationListId = this._destinationGeoLocationListId;
    }
    if (this._destinationGeoLocationListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationGeoLocationListVersion = this._destinationGeoLocationListVersion;
    }
    if (this._destinationIpv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpv4Prefix = this._destinationIpv4Prefix;
    }
    if (this._destinationIpv4PrefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpv4PrefixVariable = this._destinationIpv4PrefixVariable;
    }
    if (this._destinationObjectGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationObjectGroupId = this._destinationObjectGroupId;
    }
    if (this._destinationObjectGroupVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationObjectGroupVersion = this._destinationObjectGroupVersion;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._destinationPortListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortListId = this._destinationPortListId;
    }
    if (this._destinationPortListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortListVersion = this._destinationPortListVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolListId = this._protocolListId;
    }
    if (this._protocolListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolListVersion = this._protocolListVersion;
    }
    if (this._protocolNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolNumber = this._protocolNumber;
    }
    if (this._sourceDataFqdnPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataFqdnPrefixListId = this._sourceDataFqdnPrefixListId;
    }
    if (this._sourceDataFqdnPrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataFqdnPrefixListVersion = this._sourceDataFqdnPrefixListVersion;
    }
    if (this._sourceDataIpv4PrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataIpv4PrefixListId = this._sourceDataIpv4PrefixListId;
    }
    if (this._sourceDataIpv4PrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataIpv4PrefixListVersion = this._sourceDataIpv4PrefixListVersion;
    }
    if (this._sourceFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFqdn = this._sourceFqdn;
    }
    if (this._sourceGeoLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceGeoLocation = this._sourceGeoLocation;
    }
    if (this._sourceGeoLocationListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceGeoLocationListId = this._sourceGeoLocationListId;
    }
    if (this._sourceGeoLocationListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceGeoLocationListVersion = this._sourceGeoLocationListVersion;
    }
    if (this._sourceIpv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpv4Prefix = this._sourceIpv4Prefix;
    }
    if (this._sourceIpv4PrefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpv4PrefixVariable = this._sourceIpv4PrefixVariable;
    }
    if (this._sourceObjectGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceObjectGroupId = this._sourceObjectGroupId;
    }
    if (this._sourceObjectGroupVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceObjectGroupVersion = this._sourceObjectGroupVersion;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourcePortListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortListId = this._sourcePortListId;
    }
    if (this._sourcePortListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortListVersion = this._sourcePortListVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetPolicyDefinitionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationDataFqdnPrefixListId = undefined;
      this._destinationDataFqdnPrefixListVersion = undefined;
      this._destinationDataIpv4PrefixListId = undefined;
      this._destinationDataIpv4PrefixListVersion = undefined;
      this._destinationFqdn = undefined;
      this._destinationGeoLocation = undefined;
      this._destinationGeoLocationListId = undefined;
      this._destinationGeoLocationListVersion = undefined;
      this._destinationIpv4Prefix = undefined;
      this._destinationIpv4PrefixVariable = undefined;
      this._destinationObjectGroupId = undefined;
      this._destinationObjectGroupVersion = undefined;
      this._destinationPort = undefined;
      this._destinationPortListId = undefined;
      this._destinationPortListVersion = undefined;
      this._name = undefined;
      this._order = undefined;
      this._protocol = undefined;
      this._protocolListId = undefined;
      this._protocolListVersion = undefined;
      this._protocolNumber = undefined;
      this._sourceDataFqdnPrefixListId = undefined;
      this._sourceDataFqdnPrefixListVersion = undefined;
      this._sourceDataIpv4PrefixListId = undefined;
      this._sourceDataIpv4PrefixListVersion = undefined;
      this._sourceFqdn = undefined;
      this._sourceGeoLocation = undefined;
      this._sourceGeoLocationListId = undefined;
      this._sourceGeoLocationListVersion = undefined;
      this._sourceIpv4Prefix = undefined;
      this._sourceIpv4PrefixVariable = undefined;
      this._sourceObjectGroupId = undefined;
      this._sourceObjectGroupVersion = undefined;
      this._sourcePort = undefined;
      this._sourcePortListId = undefined;
      this._sourcePortListVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationDataFqdnPrefixListId = value.destinationDataFqdnPrefixListId;
      this._destinationDataFqdnPrefixListVersion = value.destinationDataFqdnPrefixListVersion;
      this._destinationDataIpv4PrefixListId = value.destinationDataIpv4PrefixListId;
      this._destinationDataIpv4PrefixListVersion = value.destinationDataIpv4PrefixListVersion;
      this._destinationFqdn = value.destinationFqdn;
      this._destinationGeoLocation = value.destinationGeoLocation;
      this._destinationGeoLocationListId = value.destinationGeoLocationListId;
      this._destinationGeoLocationListVersion = value.destinationGeoLocationListVersion;
      this._destinationIpv4Prefix = value.destinationIpv4Prefix;
      this._destinationIpv4PrefixVariable = value.destinationIpv4PrefixVariable;
      this._destinationObjectGroupId = value.destinationObjectGroupId;
      this._destinationObjectGroupVersion = value.destinationObjectGroupVersion;
      this._destinationPort = value.destinationPort;
      this._destinationPortListId = value.destinationPortListId;
      this._destinationPortListVersion = value.destinationPortListVersion;
      this._name = value.name;
      this._order = value.order;
      this._protocol = value.protocol;
      this._protocolListId = value.protocolListId;
      this._protocolListVersion = value.protocolListVersion;
      this._protocolNumber = value.protocolNumber;
      this._sourceDataFqdnPrefixListId = value.sourceDataFqdnPrefixListId;
      this._sourceDataFqdnPrefixListVersion = value.sourceDataFqdnPrefixListVersion;
      this._sourceDataIpv4PrefixListId = value.sourceDataIpv4PrefixListId;
      this._sourceDataIpv4PrefixListVersion = value.sourceDataIpv4PrefixListVersion;
      this._sourceFqdn = value.sourceFqdn;
      this._sourceGeoLocation = value.sourceGeoLocation;
      this._sourceGeoLocationListId = value.sourceGeoLocationListId;
      this._sourceGeoLocationListVersion = value.sourceGeoLocationListVersion;
      this._sourceIpv4Prefix = value.sourceIpv4Prefix;
      this._sourceIpv4PrefixVariable = value.sourceIpv4PrefixVariable;
      this._sourceObjectGroupId = value.sourceObjectGroupId;
      this._sourceObjectGroupVersion = value.sourceObjectGroupVersion;
      this._sourcePort = value.sourcePort;
      this._sourcePortListId = value.sourcePortListId;
      this._sourcePortListVersion = value.sourcePortListVersion;
    }
  }

  // destination_data_fqdn_prefix_list_id - computed: false, optional: true, required: false
  private _destinationDataFqdnPrefixListId?: string; 
  public get destinationDataFqdnPrefixListId() {
    return this.getStringAttribute('destination_data_fqdn_prefix_list_id');
  }
  public set destinationDataFqdnPrefixListId(value: string) {
    this._destinationDataFqdnPrefixListId = value;
  }
  public resetDestinationDataFqdnPrefixListId() {
    this._destinationDataFqdnPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataFqdnPrefixListIdInput() {
    return this._destinationDataFqdnPrefixListId;
  }

  // destination_data_fqdn_prefix_list_version - computed: false, optional: true, required: false
  private _destinationDataFqdnPrefixListVersion?: number; 
  public get destinationDataFqdnPrefixListVersion() {
    return this.getNumberAttribute('destination_data_fqdn_prefix_list_version');
  }
  public set destinationDataFqdnPrefixListVersion(value: number) {
    this._destinationDataFqdnPrefixListVersion = value;
  }
  public resetDestinationDataFqdnPrefixListVersion() {
    this._destinationDataFqdnPrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataFqdnPrefixListVersionInput() {
    return this._destinationDataFqdnPrefixListVersion;
  }

  // destination_data_ipv4_prefix_list_id - computed: false, optional: true, required: false
  private _destinationDataIpv4PrefixListId?: string; 
  public get destinationDataIpv4PrefixListId() {
    return this.getStringAttribute('destination_data_ipv4_prefix_list_id');
  }
  public set destinationDataIpv4PrefixListId(value: string) {
    this._destinationDataIpv4PrefixListId = value;
  }
  public resetDestinationDataIpv4PrefixListId() {
    this._destinationDataIpv4PrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataIpv4PrefixListIdInput() {
    return this._destinationDataIpv4PrefixListId;
  }

  // destination_data_ipv4_prefix_list_version - computed: false, optional: true, required: false
  private _destinationDataIpv4PrefixListVersion?: number; 
  public get destinationDataIpv4PrefixListVersion() {
    return this.getNumberAttribute('destination_data_ipv4_prefix_list_version');
  }
  public set destinationDataIpv4PrefixListVersion(value: number) {
    this._destinationDataIpv4PrefixListVersion = value;
  }
  public resetDestinationDataIpv4PrefixListVersion() {
    this._destinationDataIpv4PrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataIpv4PrefixListVersionInput() {
    return this._destinationDataIpv4PrefixListVersion;
  }

  // destination_fqdn - computed: false, optional: true, required: false
  private _destinationFqdn?: string; 
  public get destinationFqdn() {
    return this.getStringAttribute('destination_fqdn');
  }
  public set destinationFqdn(value: string) {
    this._destinationFqdn = value;
  }
  public resetDestinationFqdn() {
    this._destinationFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFqdnInput() {
    return this._destinationFqdn;
  }

  // destination_geo_location - computed: false, optional: true, required: false
  private _destinationGeoLocation?: string; 
  public get destinationGeoLocation() {
    return this.getStringAttribute('destination_geo_location');
  }
  public set destinationGeoLocation(value: string) {
    this._destinationGeoLocation = value;
  }
  public resetDestinationGeoLocation() {
    this._destinationGeoLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationGeoLocationInput() {
    return this._destinationGeoLocation;
  }

  // destination_geo_location_list_id - computed: false, optional: true, required: false
  private _destinationGeoLocationListId?: string; 
  public get destinationGeoLocationListId() {
    return this.getStringAttribute('destination_geo_location_list_id');
  }
  public set destinationGeoLocationListId(value: string) {
    this._destinationGeoLocationListId = value;
  }
  public resetDestinationGeoLocationListId() {
    this._destinationGeoLocationListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationGeoLocationListIdInput() {
    return this._destinationGeoLocationListId;
  }

  // destination_geo_location_list_version - computed: false, optional: true, required: false
  private _destinationGeoLocationListVersion?: number; 
  public get destinationGeoLocationListVersion() {
    return this.getNumberAttribute('destination_geo_location_list_version');
  }
  public set destinationGeoLocationListVersion(value: number) {
    this._destinationGeoLocationListVersion = value;
  }
  public resetDestinationGeoLocationListVersion() {
    this._destinationGeoLocationListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationGeoLocationListVersionInput() {
    return this._destinationGeoLocationListVersion;
  }

  // destination_ipv4_prefix - computed: false, optional: true, required: false
  private _destinationIpv4Prefix?: string; 
  public get destinationIpv4Prefix() {
    return this.getStringAttribute('destination_ipv4_prefix');
  }
  public set destinationIpv4Prefix(value: string) {
    this._destinationIpv4Prefix = value;
  }
  public resetDestinationIpv4Prefix() {
    this._destinationIpv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpv4PrefixInput() {
    return this._destinationIpv4Prefix;
  }

  // destination_ipv4_prefix_variable - computed: false, optional: true, required: false
  private _destinationIpv4PrefixVariable?: string; 
  public get destinationIpv4PrefixVariable() {
    return this.getStringAttribute('destination_ipv4_prefix_variable');
  }
  public set destinationIpv4PrefixVariable(value: string) {
    this._destinationIpv4PrefixVariable = value;
  }
  public resetDestinationIpv4PrefixVariable() {
    this._destinationIpv4PrefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpv4PrefixVariableInput() {
    return this._destinationIpv4PrefixVariable;
  }

  // destination_object_group_id - computed: false, optional: true, required: false
  private _destinationObjectGroupId?: string; 
  public get destinationObjectGroupId() {
    return this.getStringAttribute('destination_object_group_id');
  }
  public set destinationObjectGroupId(value: string) {
    this._destinationObjectGroupId = value;
  }
  public resetDestinationObjectGroupId() {
    this._destinationObjectGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationObjectGroupIdInput() {
    return this._destinationObjectGroupId;
  }

  // destination_object_group_version - computed: false, optional: true, required: false
  private _destinationObjectGroupVersion?: number; 
  public get destinationObjectGroupVersion() {
    return this.getNumberAttribute('destination_object_group_version');
  }
  public set destinationObjectGroupVersion(value: number) {
    this._destinationObjectGroupVersion = value;
  }
  public resetDestinationObjectGroupVersion() {
    this._destinationObjectGroupVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationObjectGroupVersionInput() {
    return this._destinationObjectGroupVersion;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // destination_port_list_id - computed: false, optional: true, required: false
  private _destinationPortListId?: string; 
  public get destinationPortListId() {
    return this.getStringAttribute('destination_port_list_id');
  }
  public set destinationPortListId(value: string) {
    this._destinationPortListId = value;
  }
  public resetDestinationPortListId() {
    this._destinationPortListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortListIdInput() {
    return this._destinationPortListId;
  }

  // destination_port_list_version - computed: false, optional: true, required: false
  private _destinationPortListVersion?: number; 
  public get destinationPortListVersion() {
    return this.getNumberAttribute('destination_port_list_version');
  }
  public set destinationPortListVersion(value: number) {
    this._destinationPortListVersion = value;
  }
  public resetDestinationPortListVersion() {
    this._destinationPortListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortListVersionInput() {
    return this._destinationPortListVersion;
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

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_list_id - computed: false, optional: true, required: false
  private _protocolListId?: string; 
  public get protocolListId() {
    return this.getStringAttribute('protocol_list_id');
  }
  public set protocolListId(value: string) {
    this._protocolListId = value;
  }
  public resetProtocolListId() {
    this._protocolListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolListIdInput() {
    return this._protocolListId;
  }

  // protocol_list_version - computed: false, optional: true, required: false
  private _protocolListVersion?: number; 
  public get protocolListVersion() {
    return this.getNumberAttribute('protocol_list_version');
  }
  public set protocolListVersion(value: number) {
    this._protocolListVersion = value;
  }
  public resetProtocolListVersion() {
    this._protocolListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolListVersionInput() {
    return this._protocolListVersion;
  }

  // protocol_number - computed: false, optional: true, required: false
  private _protocolNumber?: number; 
  public get protocolNumber() {
    return this.getNumberAttribute('protocol_number');
  }
  public set protocolNumber(value: number) {
    this._protocolNumber = value;
  }
  public resetProtocolNumber() {
    this._protocolNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumberInput() {
    return this._protocolNumber;
  }

  // source_data_fqdn_prefix_list_id - computed: false, optional: true, required: false
  private _sourceDataFqdnPrefixListId?: string; 
  public get sourceDataFqdnPrefixListId() {
    return this.getStringAttribute('source_data_fqdn_prefix_list_id');
  }
  public set sourceDataFqdnPrefixListId(value: string) {
    this._sourceDataFqdnPrefixListId = value;
  }
  public resetSourceDataFqdnPrefixListId() {
    this._sourceDataFqdnPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataFqdnPrefixListIdInput() {
    return this._sourceDataFqdnPrefixListId;
  }

  // source_data_fqdn_prefix_list_version - computed: false, optional: true, required: false
  private _sourceDataFqdnPrefixListVersion?: number; 
  public get sourceDataFqdnPrefixListVersion() {
    return this.getNumberAttribute('source_data_fqdn_prefix_list_version');
  }
  public set sourceDataFqdnPrefixListVersion(value: number) {
    this._sourceDataFqdnPrefixListVersion = value;
  }
  public resetSourceDataFqdnPrefixListVersion() {
    this._sourceDataFqdnPrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataFqdnPrefixListVersionInput() {
    return this._sourceDataFqdnPrefixListVersion;
  }

  // source_data_ipv4_prefix_list_id - computed: false, optional: true, required: false
  private _sourceDataIpv4PrefixListId?: string; 
  public get sourceDataIpv4PrefixListId() {
    return this.getStringAttribute('source_data_ipv4_prefix_list_id');
  }
  public set sourceDataIpv4PrefixListId(value: string) {
    this._sourceDataIpv4PrefixListId = value;
  }
  public resetSourceDataIpv4PrefixListId() {
    this._sourceDataIpv4PrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataIpv4PrefixListIdInput() {
    return this._sourceDataIpv4PrefixListId;
  }

  // source_data_ipv4_prefix_list_version - computed: false, optional: true, required: false
  private _sourceDataIpv4PrefixListVersion?: number; 
  public get sourceDataIpv4PrefixListVersion() {
    return this.getNumberAttribute('source_data_ipv4_prefix_list_version');
  }
  public set sourceDataIpv4PrefixListVersion(value: number) {
    this._sourceDataIpv4PrefixListVersion = value;
  }
  public resetSourceDataIpv4PrefixListVersion() {
    this._sourceDataIpv4PrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataIpv4PrefixListVersionInput() {
    return this._sourceDataIpv4PrefixListVersion;
  }

  // source_fqdn - computed: false, optional: true, required: false
  private _sourceFqdn?: string; 
  public get sourceFqdn() {
    return this.getStringAttribute('source_fqdn');
  }
  public set sourceFqdn(value: string) {
    this._sourceFqdn = value;
  }
  public resetSourceFqdn() {
    this._sourceFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFqdnInput() {
    return this._sourceFqdn;
  }

  // source_geo_location - computed: false, optional: true, required: false
  private _sourceGeoLocation?: string; 
  public get sourceGeoLocation() {
    return this.getStringAttribute('source_geo_location');
  }
  public set sourceGeoLocation(value: string) {
    this._sourceGeoLocation = value;
  }
  public resetSourceGeoLocation() {
    this._sourceGeoLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGeoLocationInput() {
    return this._sourceGeoLocation;
  }

  // source_geo_location_list_id - computed: false, optional: true, required: false
  private _sourceGeoLocationListId?: string; 
  public get sourceGeoLocationListId() {
    return this.getStringAttribute('source_geo_location_list_id');
  }
  public set sourceGeoLocationListId(value: string) {
    this._sourceGeoLocationListId = value;
  }
  public resetSourceGeoLocationListId() {
    this._sourceGeoLocationListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGeoLocationListIdInput() {
    return this._sourceGeoLocationListId;
  }

  // source_geo_location_list_version - computed: false, optional: true, required: false
  private _sourceGeoLocationListVersion?: number; 
  public get sourceGeoLocationListVersion() {
    return this.getNumberAttribute('source_geo_location_list_version');
  }
  public set sourceGeoLocationListVersion(value: number) {
    this._sourceGeoLocationListVersion = value;
  }
  public resetSourceGeoLocationListVersion() {
    this._sourceGeoLocationListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGeoLocationListVersionInput() {
    return this._sourceGeoLocationListVersion;
  }

  // source_ipv4_prefix - computed: false, optional: true, required: false
  private _sourceIpv4Prefix?: string; 
  public get sourceIpv4Prefix() {
    return this.getStringAttribute('source_ipv4_prefix');
  }
  public set sourceIpv4Prefix(value: string) {
    this._sourceIpv4Prefix = value;
  }
  public resetSourceIpv4Prefix() {
    this._sourceIpv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpv4PrefixInput() {
    return this._sourceIpv4Prefix;
  }

  // source_ipv4_prefix_variable - computed: false, optional: true, required: false
  private _sourceIpv4PrefixVariable?: string; 
  public get sourceIpv4PrefixVariable() {
    return this.getStringAttribute('source_ipv4_prefix_variable');
  }
  public set sourceIpv4PrefixVariable(value: string) {
    this._sourceIpv4PrefixVariable = value;
  }
  public resetSourceIpv4PrefixVariable() {
    this._sourceIpv4PrefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpv4PrefixVariableInput() {
    return this._sourceIpv4PrefixVariable;
  }

  // source_object_group_id - computed: false, optional: true, required: false
  private _sourceObjectGroupId?: string; 
  public get sourceObjectGroupId() {
    return this.getStringAttribute('source_object_group_id');
  }
  public set sourceObjectGroupId(value: string) {
    this._sourceObjectGroupId = value;
  }
  public resetSourceObjectGroupId() {
    this._sourceObjectGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceObjectGroupIdInput() {
    return this._sourceObjectGroupId;
  }

  // source_object_group_version - computed: false, optional: true, required: false
  private _sourceObjectGroupVersion?: number; 
  public get sourceObjectGroupVersion() {
    return this.getNumberAttribute('source_object_group_version');
  }
  public set sourceObjectGroupVersion(value: number) {
    this._sourceObjectGroupVersion = value;
  }
  public resetSourceObjectGroupVersion() {
    this._sourceObjectGroupVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceObjectGroupVersionInput() {
    return this._sourceObjectGroupVersion;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_port_list_id - computed: false, optional: true, required: false
  private _sourcePortListId?: string; 
  public get sourcePortListId() {
    return this.getStringAttribute('source_port_list_id');
  }
  public set sourcePortListId(value: string) {
    this._sourcePortListId = value;
  }
  public resetSourcePortListId() {
    this._sourcePortListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortListIdInput() {
    return this._sourcePortListId;
  }

  // source_port_list_version - computed: false, optional: true, required: false
  private _sourcePortListVersion?: number; 
  public get sourcePortListVersion() {
    return this.getNumberAttribute('source_port_list_version');
  }
  public set sourcePortListVersion(value: number) {
    this._sourcePortListVersion = value;
  }
  public resetSourcePortListVersion() {
    this._sourcePortListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortListVersionInput() {
    return this._sourcePortListVersion;
  }
}

export class RuleSetPolicyDefinitionRulesList extends cdktf.ComplexList {
  public internalValue? : RuleSetPolicyDefinitionRules[] | cdktf.IResolvable

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
  public get(index: number): RuleSetPolicyDefinitionRulesOutputReference {
    return new RuleSetPolicyDefinitionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition sdwan_rule_set_policy_definition}
*/
export class RuleSetPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_rule_set_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RuleSetPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RuleSetPolicyDefinition to import
  * @param importFromId The id of the existing RuleSetPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RuleSetPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_rule_set_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rule_set_policy_definition sdwan_rule_set_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleSetPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: RuleSetPolicyDefinitionConfig) {
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
    this._description = config.description;
    this._name = config.name;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rules - computed: false, optional: false, required: true
  private _rules = new RuleSetPolicyDefinitionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RuleSetPolicyDefinitionRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(ruleSetPolicyDefinitionRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      rules: {
        value: cdktf.listMapperHcl(ruleSetPolicyDefinitionRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleSetPolicyDefinitionRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
