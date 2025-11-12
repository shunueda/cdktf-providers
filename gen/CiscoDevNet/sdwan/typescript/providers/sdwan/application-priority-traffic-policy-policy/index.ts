// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationPriorityTrafficPolicyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * 
  *   - Choices: `drop`, `accept`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#default_action ApplicationPriorityTrafficPolicyPolicy#default_action}
  */
  readonly defaultAction: string;
  /**
  * The description of the Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#description ApplicationPriorityTrafficPolicyPolicy#description}
  */
  readonly description?: string;
  /**
  * 
  *   - Choices: `service`, `tunnel`, `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#direction ApplicationPriorityTrafficPolicyPolicy#direction}
  */
  readonly direction: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#feature_profile_id ApplicationPriorityTrafficPolicyPolicy#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#name ApplicationPriorityTrafficPolicyPolicy#name}
  */
  readonly name: string;
  /**
  * Traffic policy sequence list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#sequences ApplicationPriorityTrafficPolicyPolicy#sequences}
  */
  readonly sequences?: ApplicationPriorityTrafficPolicyPolicySequences[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#vpns ApplicationPriorityTrafficPolicyPolicy#vpns}
  */
  readonly vpns: string[];
}
export interface ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters {
  /**
  * 
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#dscp ApplicationPriorityTrafficPolicyPolicy#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#forwarding_class_list_id ApplicationPriorityTrafficPolicyPolicy#forwarding_class_list_id}
  */
  readonly forwardingClassListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#local_tloc_list_color ApplicationPriorityTrafficPolicyPolicy#local_tloc_list_color}
  */
  readonly localTlocListColor?: string[];
  /**
  * 
  *   - Choices: `ipsec`, `gre`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#local_tloc_list_encapsulation ApplicationPriorityTrafficPolicyPolicy#local_tloc_list_encapsulation}
  */
  readonly localTlocListEncapsulation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#local_tloc_list_restrict ApplicationPriorityTrafficPolicyPolicy#local_tloc_list_restrict}
  */
  readonly localTlocListRestrict?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#next_hop_ipv4 ApplicationPriorityTrafficPolicyPolicy#next_hop_ipv4}
  */
  readonly nextHopIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#next_hop_ipv6 ApplicationPriorityTrafficPolicyPolicy#next_hop_ipv6}
  */
  readonly nextHopIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#next_hop_loose ApplicationPriorityTrafficPolicyPolicy#next_hop_loose}
  */
  readonly nextHopLoose?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#policer_id ApplicationPriorityTrafficPolicyPolicy#policer_id}
  */
  readonly policerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#preferred_color_group_id ApplicationPriorityTrafficPolicyPolicy#preferred_color_group_id}
  */
  readonly preferredColorGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#preferred_remote_color_id ApplicationPriorityTrafficPolicyPolicy#preferred_remote_color_id}
  */
  readonly preferredRemoteColorId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#preferred_remote_color_restrict ApplicationPriorityTrafficPolicyPolicy#preferred_remote_color_restrict}
  */
  readonly preferredRemoteColorRestrict?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_chain_fallback_to_routing ApplicationPriorityTrafficPolicyPolicy#service_chain_fallback_to_routing}
  */
  readonly serviceChainFallbackToRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_chain_local ApplicationPriorityTrafficPolicyPolicy#service_chain_local}
  */
  readonly serviceChainLocal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_chain_tloc_color ApplicationPriorityTrafficPolicyPolicy#service_chain_tloc_color}
  */
  readonly serviceChainTlocColor?: string[];
  /**
  * 
  *   - Choices: `ipsec`, `gre`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_chain_tloc_encapsulation ApplicationPriorityTrafficPolicyPolicy#service_chain_tloc_encapsulation}
  */
  readonly serviceChainTlocEncapsulation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_chain_tloc_ip ApplicationPriorityTrafficPolicyPolicy#service_chain_tloc_ip}
  */
  readonly serviceChainTlocIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_chain_tloc_list_id ApplicationPriorityTrafficPolicyPolicy#service_chain_tloc_list_id}
  */
  readonly serviceChainTlocListId?: string;
  /**
  * 
  *   - Choices: `SC1`, `SC2`, `SC4`, `SC5`, `SC6`, `SC7`, `SC8`, `SC9`, `SC10`, `SC11`, `SC12`, `SC13`, `SC14`, `SC15`, `SC16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_chain_type ApplicationPriorityTrafficPolicyPolicy#service_chain_type}
  */
  readonly serviceChainType?: string;
  /**
  * 
  *   - Range: `0`-`65530`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_chain_vpn ApplicationPriorityTrafficPolicyPolicy#service_chain_vpn}
  */
  readonly serviceChainVpn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_tloc_color ApplicationPriorityTrafficPolicyPolicy#service_tloc_color}
  */
  readonly serviceTlocColor?: string[];
  /**
  * 
  *   - Choices: `ipsec`, `gre`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_tloc_encapsulation ApplicationPriorityTrafficPolicyPolicy#service_tloc_encapsulation}
  */
  readonly serviceTlocEncapsulation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_tloc_ip ApplicationPriorityTrafficPolicyPolicy#service_tloc_ip}
  */
  readonly serviceTlocIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_tloc_list_id ApplicationPriorityTrafficPolicyPolicy#service_tloc_list_id}
  */
  readonly serviceTlocListId?: string;
  /**
  * 
  *   - Choices: `FW`, `IDS`, `IDP`, `netsvc1`, `netsvc2`, `netsvc3`, `netsvc4`, `appqoe`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_type ApplicationPriorityTrafficPolicyPolicy#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_vpn ApplicationPriorityTrafficPolicyPolicy#service_vpn}
  */
  readonly serviceVpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#tloc_color ApplicationPriorityTrafficPolicyPolicy#tloc_color}
  */
  readonly tlocColor?: string[];
  /**
  * 
  *   - Choices: `ipsec`, `gre`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#tloc_encapsulation ApplicationPriorityTrafficPolicyPolicy#tloc_encapsulation}
  */
  readonly tlocEncapsulation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#tloc_ip ApplicationPriorityTrafficPolicyPolicy#tloc_ip}
  */
  readonly tlocIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#tloc_list_id ApplicationPriorityTrafficPolicyPolicy#tloc_list_id}
  */
  readonly tlocListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#vpn ApplicationPriorityTrafficPolicyPolicy#vpn}
  */
  readonly vpn?: string;
}

export function applicationPriorityTrafficPolicyPolicySequencesActionsSetParametersToTerraform(struct?: ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.numberToTerraform(struct!.dscp),
    forwarding_class_list_id: cdktf.stringToTerraform(struct!.forwardingClassListId),
    local_tloc_list_color: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localTlocListColor),
    local_tloc_list_encapsulation: cdktf.stringToTerraform(struct!.localTlocListEncapsulation),
    local_tloc_list_restrict: cdktf.stringToTerraform(struct!.localTlocListRestrict),
    next_hop_ipv4: cdktf.stringToTerraform(struct!.nextHopIpv4),
    next_hop_ipv6: cdktf.stringToTerraform(struct!.nextHopIpv6),
    next_hop_loose: cdktf.booleanToTerraform(struct!.nextHopLoose),
    policer_id: cdktf.stringToTerraform(struct!.policerId),
    preferred_color_group_id: cdktf.stringToTerraform(struct!.preferredColorGroupId),
    preferred_remote_color_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredRemoteColorId),
    preferred_remote_color_restrict: cdktf.stringToTerraform(struct!.preferredRemoteColorRestrict),
    service_chain_fallback_to_routing: cdktf.booleanToTerraform(struct!.serviceChainFallbackToRouting),
    service_chain_local: cdktf.booleanToTerraform(struct!.serviceChainLocal),
    service_chain_tloc_color: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceChainTlocColor),
    service_chain_tloc_encapsulation: cdktf.stringToTerraform(struct!.serviceChainTlocEncapsulation),
    service_chain_tloc_ip: cdktf.stringToTerraform(struct!.serviceChainTlocIp),
    service_chain_tloc_list_id: cdktf.stringToTerraform(struct!.serviceChainTlocListId),
    service_chain_type: cdktf.stringToTerraform(struct!.serviceChainType),
    service_chain_vpn: cdktf.numberToTerraform(struct!.serviceChainVpn),
    service_tloc_color: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceTlocColor),
    service_tloc_encapsulation: cdktf.stringToTerraform(struct!.serviceTlocEncapsulation),
    service_tloc_ip: cdktf.stringToTerraform(struct!.serviceTlocIp),
    service_tloc_list_id: cdktf.stringToTerraform(struct!.serviceTlocListId),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    service_vpn: cdktf.stringToTerraform(struct!.serviceVpn),
    tloc_color: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlocColor),
    tloc_encapsulation: cdktf.stringToTerraform(struct!.tlocEncapsulation),
    tloc_ip: cdktf.stringToTerraform(struct!.tlocIp),
    tloc_list_id: cdktf.stringToTerraform(struct!.tlocListId),
    vpn: cdktf.stringToTerraform(struct!.vpn),
  }
}


export function applicationPriorityTrafficPolicyPolicySequencesActionsSetParametersToHclTerraform(struct?: ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forwarding_class_list_id: {
      value: cdktf.stringToHclTerraform(struct!.forwardingClassListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_tloc_list_color: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localTlocListColor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_tloc_list_encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.localTlocListEncapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_tloc_list_restrict: {
      value: cdktf.stringToHclTerraform(struct!.localTlocListRestrict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.nextHopIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.nextHopIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_loose: {
      value: cdktf.booleanToHclTerraform(struct!.nextHopLoose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policer_id: {
      value: cdktf.stringToHclTerraform(struct!.policerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_color_group_id: {
      value: cdktf.stringToHclTerraform(struct!.preferredColorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_remote_color_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredRemoteColorId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preferred_remote_color_restrict: {
      value: cdktf.stringToHclTerraform(struct!.preferredRemoteColorRestrict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_chain_fallback_to_routing: {
      value: cdktf.booleanToHclTerraform(struct!.serviceChainFallbackToRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_chain_local: {
      value: cdktf.booleanToHclTerraform(struct!.serviceChainLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_chain_tloc_color: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceChainTlocColor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_chain_tloc_encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.serviceChainTlocEncapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_chain_tloc_ip: {
      value: cdktf.stringToHclTerraform(struct!.serviceChainTlocIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_chain_tloc_list_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceChainTlocListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_chain_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceChainType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_chain_vpn: {
      value: cdktf.numberToHclTerraform(struct!.serviceChainVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_tloc_color: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceTlocColor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_tloc_encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.serviceTlocEncapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_tloc_ip: {
      value: cdktf.stringToHclTerraform(struct!.serviceTlocIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_tloc_list_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceTlocListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_vpn: {
      value: cdktf.stringToHclTerraform(struct!.serviceVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_color: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlocColor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tloc_encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.tlocEncapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_ip: {
      value: cdktf.stringToHclTerraform(struct!.tlocIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_list_id: {
      value: cdktf.stringToHclTerraform(struct!.tlocListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn: {
      value: cdktf.stringToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._forwardingClassListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingClassListId = this._forwardingClassListId;
    }
    if (this._localTlocListColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTlocListColor = this._localTlocListColor;
    }
    if (this._localTlocListEncapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTlocListEncapsulation = this._localTlocListEncapsulation;
    }
    if (this._localTlocListRestrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTlocListRestrict = this._localTlocListRestrict;
    }
    if (this._nextHopIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopIpv4 = this._nextHopIpv4;
    }
    if (this._nextHopIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopIpv6 = this._nextHopIpv6;
    }
    if (this._nextHopLoose !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopLoose = this._nextHopLoose;
    }
    if (this._policerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policerId = this._policerId;
    }
    if (this._preferredColorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredColorGroupId = this._preferredColorGroupId;
    }
    if (this._preferredRemoteColorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredRemoteColorId = this._preferredRemoteColorId;
    }
    if (this._preferredRemoteColorRestrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredRemoteColorRestrict = this._preferredRemoteColorRestrict;
    }
    if (this._serviceChainFallbackToRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceChainFallbackToRouting = this._serviceChainFallbackToRouting;
    }
    if (this._serviceChainLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceChainLocal = this._serviceChainLocal;
    }
    if (this._serviceChainTlocColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceChainTlocColor = this._serviceChainTlocColor;
    }
    if (this._serviceChainTlocEncapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceChainTlocEncapsulation = this._serviceChainTlocEncapsulation;
    }
    if (this._serviceChainTlocIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceChainTlocIp = this._serviceChainTlocIp;
    }
    if (this._serviceChainTlocListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceChainTlocListId = this._serviceChainTlocListId;
    }
    if (this._serviceChainType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceChainType = this._serviceChainType;
    }
    if (this._serviceChainVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceChainVpn = this._serviceChainVpn;
    }
    if (this._serviceTlocColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTlocColor = this._serviceTlocColor;
    }
    if (this._serviceTlocEncapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTlocEncapsulation = this._serviceTlocEncapsulation;
    }
    if (this._serviceTlocIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTlocIp = this._serviceTlocIp;
    }
    if (this._serviceTlocListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTlocListId = this._serviceTlocListId;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._serviceVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVpn = this._serviceVpn;
    }
    if (this._tlocColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocColor = this._tlocColor;
    }
    if (this._tlocEncapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocEncapsulation = this._tlocEncapsulation;
    }
    if (this._tlocIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocIp = this._tlocIp;
    }
    if (this._tlocListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocListId = this._tlocListId;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dscp = undefined;
      this._forwardingClassListId = undefined;
      this._localTlocListColor = undefined;
      this._localTlocListEncapsulation = undefined;
      this._localTlocListRestrict = undefined;
      this._nextHopIpv4 = undefined;
      this._nextHopIpv6 = undefined;
      this._nextHopLoose = undefined;
      this._policerId = undefined;
      this._preferredColorGroupId = undefined;
      this._preferredRemoteColorId = undefined;
      this._preferredRemoteColorRestrict = undefined;
      this._serviceChainFallbackToRouting = undefined;
      this._serviceChainLocal = undefined;
      this._serviceChainTlocColor = undefined;
      this._serviceChainTlocEncapsulation = undefined;
      this._serviceChainTlocIp = undefined;
      this._serviceChainTlocListId = undefined;
      this._serviceChainType = undefined;
      this._serviceChainVpn = undefined;
      this._serviceTlocColor = undefined;
      this._serviceTlocEncapsulation = undefined;
      this._serviceTlocIp = undefined;
      this._serviceTlocListId = undefined;
      this._serviceType = undefined;
      this._serviceVpn = undefined;
      this._tlocColor = undefined;
      this._tlocEncapsulation = undefined;
      this._tlocIp = undefined;
      this._tlocListId = undefined;
      this._vpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dscp = value.dscp;
      this._forwardingClassListId = value.forwardingClassListId;
      this._localTlocListColor = value.localTlocListColor;
      this._localTlocListEncapsulation = value.localTlocListEncapsulation;
      this._localTlocListRestrict = value.localTlocListRestrict;
      this._nextHopIpv4 = value.nextHopIpv4;
      this._nextHopIpv6 = value.nextHopIpv6;
      this._nextHopLoose = value.nextHopLoose;
      this._policerId = value.policerId;
      this._preferredColorGroupId = value.preferredColorGroupId;
      this._preferredRemoteColorId = value.preferredRemoteColorId;
      this._preferredRemoteColorRestrict = value.preferredRemoteColorRestrict;
      this._serviceChainFallbackToRouting = value.serviceChainFallbackToRouting;
      this._serviceChainLocal = value.serviceChainLocal;
      this._serviceChainTlocColor = value.serviceChainTlocColor;
      this._serviceChainTlocEncapsulation = value.serviceChainTlocEncapsulation;
      this._serviceChainTlocIp = value.serviceChainTlocIp;
      this._serviceChainTlocListId = value.serviceChainTlocListId;
      this._serviceChainType = value.serviceChainType;
      this._serviceChainVpn = value.serviceChainVpn;
      this._serviceTlocColor = value.serviceTlocColor;
      this._serviceTlocEncapsulation = value.serviceTlocEncapsulation;
      this._serviceTlocIp = value.serviceTlocIp;
      this._serviceTlocListId = value.serviceTlocListId;
      this._serviceType = value.serviceType;
      this._serviceVpn = value.serviceVpn;
      this._tlocColor = value.tlocColor;
      this._tlocEncapsulation = value.tlocEncapsulation;
      this._tlocIp = value.tlocIp;
      this._tlocListId = value.tlocListId;
      this._vpn = value.vpn;
    }
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // forwarding_class_list_id - computed: false, optional: true, required: false
  private _forwardingClassListId?: string; 
  public get forwardingClassListId() {
    return this.getStringAttribute('forwarding_class_list_id');
  }
  public set forwardingClassListId(value: string) {
    this._forwardingClassListId = value;
  }
  public resetForwardingClassListId() {
    this._forwardingClassListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingClassListIdInput() {
    return this._forwardingClassListId;
  }

  // local_tloc_list_color - computed: false, optional: true, required: false
  private _localTlocListColor?: string[]; 
  public get localTlocListColor() {
    return cdktf.Fn.tolist(this.getListAttribute('local_tloc_list_color'));
  }
  public set localTlocListColor(value: string[]) {
    this._localTlocListColor = value;
  }
  public resetLocalTlocListColor() {
    this._localTlocListColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTlocListColorInput() {
    return this._localTlocListColor;
  }

  // local_tloc_list_encapsulation - computed: false, optional: true, required: false
  private _localTlocListEncapsulation?: string; 
  public get localTlocListEncapsulation() {
    return this.getStringAttribute('local_tloc_list_encapsulation');
  }
  public set localTlocListEncapsulation(value: string) {
    this._localTlocListEncapsulation = value;
  }
  public resetLocalTlocListEncapsulation() {
    this._localTlocListEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTlocListEncapsulationInput() {
    return this._localTlocListEncapsulation;
  }

  // local_tloc_list_restrict - computed: false, optional: true, required: false
  private _localTlocListRestrict?: string; 
  public get localTlocListRestrict() {
    return this.getStringAttribute('local_tloc_list_restrict');
  }
  public set localTlocListRestrict(value: string) {
    this._localTlocListRestrict = value;
  }
  public resetLocalTlocListRestrict() {
    this._localTlocListRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTlocListRestrictInput() {
    return this._localTlocListRestrict;
  }

  // next_hop_ipv4 - computed: false, optional: true, required: false
  private _nextHopIpv4?: string; 
  public get nextHopIpv4() {
    return this.getStringAttribute('next_hop_ipv4');
  }
  public set nextHopIpv4(value: string) {
    this._nextHopIpv4 = value;
  }
  public resetNextHopIpv4() {
    this._nextHopIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpv4Input() {
    return this._nextHopIpv4;
  }

  // next_hop_ipv6 - computed: false, optional: true, required: false
  private _nextHopIpv6?: string; 
  public get nextHopIpv6() {
    return this.getStringAttribute('next_hop_ipv6');
  }
  public set nextHopIpv6(value: string) {
    this._nextHopIpv6 = value;
  }
  public resetNextHopIpv6() {
    this._nextHopIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpv6Input() {
    return this._nextHopIpv6;
  }

  // next_hop_loose - computed: false, optional: true, required: false
  private _nextHopLoose?: boolean | cdktf.IResolvable; 
  public get nextHopLoose() {
    return this.getBooleanAttribute('next_hop_loose');
  }
  public set nextHopLoose(value: boolean | cdktf.IResolvable) {
    this._nextHopLoose = value;
  }
  public resetNextHopLoose() {
    this._nextHopLoose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopLooseInput() {
    return this._nextHopLoose;
  }

  // policer_id - computed: false, optional: true, required: false
  private _policerId?: string; 
  public get policerId() {
    return this.getStringAttribute('policer_id');
  }
  public set policerId(value: string) {
    this._policerId = value;
  }
  public resetPolicerId() {
    this._policerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerIdInput() {
    return this._policerId;
  }

  // preferred_color_group_id - computed: false, optional: true, required: false
  private _preferredColorGroupId?: string; 
  public get preferredColorGroupId() {
    return this.getStringAttribute('preferred_color_group_id');
  }
  public set preferredColorGroupId(value: string) {
    this._preferredColorGroupId = value;
  }
  public resetPreferredColorGroupId() {
    this._preferredColorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredColorGroupIdInput() {
    return this._preferredColorGroupId;
  }

  // preferred_remote_color_id - computed: false, optional: true, required: false
  private _preferredRemoteColorId?: string[]; 
  public get preferredRemoteColorId() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_remote_color_id'));
  }
  public set preferredRemoteColorId(value: string[]) {
    this._preferredRemoteColorId = value;
  }
  public resetPreferredRemoteColorId() {
    this._preferredRemoteColorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredRemoteColorIdInput() {
    return this._preferredRemoteColorId;
  }

  // preferred_remote_color_restrict - computed: false, optional: true, required: false
  private _preferredRemoteColorRestrict?: string; 
  public get preferredRemoteColorRestrict() {
    return this.getStringAttribute('preferred_remote_color_restrict');
  }
  public set preferredRemoteColorRestrict(value: string) {
    this._preferredRemoteColorRestrict = value;
  }
  public resetPreferredRemoteColorRestrict() {
    this._preferredRemoteColorRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredRemoteColorRestrictInput() {
    return this._preferredRemoteColorRestrict;
  }

  // service_chain_fallback_to_routing - computed: false, optional: true, required: false
  private _serviceChainFallbackToRouting?: boolean | cdktf.IResolvable; 
  public get serviceChainFallbackToRouting() {
    return this.getBooleanAttribute('service_chain_fallback_to_routing');
  }
  public set serviceChainFallbackToRouting(value: boolean | cdktf.IResolvable) {
    this._serviceChainFallbackToRouting = value;
  }
  public resetServiceChainFallbackToRouting() {
    this._serviceChainFallbackToRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceChainFallbackToRoutingInput() {
    return this._serviceChainFallbackToRouting;
  }

  // service_chain_local - computed: false, optional: true, required: false
  private _serviceChainLocal?: boolean | cdktf.IResolvable; 
  public get serviceChainLocal() {
    return this.getBooleanAttribute('service_chain_local');
  }
  public set serviceChainLocal(value: boolean | cdktf.IResolvable) {
    this._serviceChainLocal = value;
  }
  public resetServiceChainLocal() {
    this._serviceChainLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceChainLocalInput() {
    return this._serviceChainLocal;
  }

  // service_chain_tloc_color - computed: false, optional: true, required: false
  private _serviceChainTlocColor?: string[]; 
  public get serviceChainTlocColor() {
    return cdktf.Fn.tolist(this.getListAttribute('service_chain_tloc_color'));
  }
  public set serviceChainTlocColor(value: string[]) {
    this._serviceChainTlocColor = value;
  }
  public resetServiceChainTlocColor() {
    this._serviceChainTlocColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceChainTlocColorInput() {
    return this._serviceChainTlocColor;
  }

  // service_chain_tloc_encapsulation - computed: false, optional: true, required: false
  private _serviceChainTlocEncapsulation?: string; 
  public get serviceChainTlocEncapsulation() {
    return this.getStringAttribute('service_chain_tloc_encapsulation');
  }
  public set serviceChainTlocEncapsulation(value: string) {
    this._serviceChainTlocEncapsulation = value;
  }
  public resetServiceChainTlocEncapsulation() {
    this._serviceChainTlocEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceChainTlocEncapsulationInput() {
    return this._serviceChainTlocEncapsulation;
  }

  // service_chain_tloc_ip - computed: false, optional: true, required: false
  private _serviceChainTlocIp?: string; 
  public get serviceChainTlocIp() {
    return this.getStringAttribute('service_chain_tloc_ip');
  }
  public set serviceChainTlocIp(value: string) {
    this._serviceChainTlocIp = value;
  }
  public resetServiceChainTlocIp() {
    this._serviceChainTlocIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceChainTlocIpInput() {
    return this._serviceChainTlocIp;
  }

  // service_chain_tloc_list_id - computed: false, optional: true, required: false
  private _serviceChainTlocListId?: string; 
  public get serviceChainTlocListId() {
    return this.getStringAttribute('service_chain_tloc_list_id');
  }
  public set serviceChainTlocListId(value: string) {
    this._serviceChainTlocListId = value;
  }
  public resetServiceChainTlocListId() {
    this._serviceChainTlocListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceChainTlocListIdInput() {
    return this._serviceChainTlocListId;
  }

  // service_chain_type - computed: false, optional: true, required: false
  private _serviceChainType?: string; 
  public get serviceChainType() {
    return this.getStringAttribute('service_chain_type');
  }
  public set serviceChainType(value: string) {
    this._serviceChainType = value;
  }
  public resetServiceChainType() {
    this._serviceChainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceChainTypeInput() {
    return this._serviceChainType;
  }

  // service_chain_vpn - computed: false, optional: true, required: false
  private _serviceChainVpn?: number; 
  public get serviceChainVpn() {
    return this.getNumberAttribute('service_chain_vpn');
  }
  public set serviceChainVpn(value: number) {
    this._serviceChainVpn = value;
  }
  public resetServiceChainVpn() {
    this._serviceChainVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceChainVpnInput() {
    return this._serviceChainVpn;
  }

  // service_tloc_color - computed: false, optional: true, required: false
  private _serviceTlocColor?: string[]; 
  public get serviceTlocColor() {
    return cdktf.Fn.tolist(this.getListAttribute('service_tloc_color'));
  }
  public set serviceTlocColor(value: string[]) {
    this._serviceTlocColor = value;
  }
  public resetServiceTlocColor() {
    this._serviceTlocColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlocColorInput() {
    return this._serviceTlocColor;
  }

  // service_tloc_encapsulation - computed: false, optional: true, required: false
  private _serviceTlocEncapsulation?: string; 
  public get serviceTlocEncapsulation() {
    return this.getStringAttribute('service_tloc_encapsulation');
  }
  public set serviceTlocEncapsulation(value: string) {
    this._serviceTlocEncapsulation = value;
  }
  public resetServiceTlocEncapsulation() {
    this._serviceTlocEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlocEncapsulationInput() {
    return this._serviceTlocEncapsulation;
  }

  // service_tloc_ip - computed: false, optional: true, required: false
  private _serviceTlocIp?: string; 
  public get serviceTlocIp() {
    return this.getStringAttribute('service_tloc_ip');
  }
  public set serviceTlocIp(value: string) {
    this._serviceTlocIp = value;
  }
  public resetServiceTlocIp() {
    this._serviceTlocIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlocIpInput() {
    return this._serviceTlocIp;
  }

  // service_tloc_list_id - computed: false, optional: true, required: false
  private _serviceTlocListId?: string; 
  public get serviceTlocListId() {
    return this.getStringAttribute('service_tloc_list_id');
  }
  public set serviceTlocListId(value: string) {
    this._serviceTlocListId = value;
  }
  public resetServiceTlocListId() {
    this._serviceTlocListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlocListIdInput() {
    return this._serviceTlocListId;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // service_vpn - computed: false, optional: true, required: false
  private _serviceVpn?: string; 
  public get serviceVpn() {
    return this.getStringAttribute('service_vpn');
  }
  public set serviceVpn(value: string) {
    this._serviceVpn = value;
  }
  public resetServiceVpn() {
    this._serviceVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVpnInput() {
    return this._serviceVpn;
  }

  // tloc_color - computed: false, optional: true, required: false
  private _tlocColor?: string[]; 
  public get tlocColor() {
    return cdktf.Fn.tolist(this.getListAttribute('tloc_color'));
  }
  public set tlocColor(value: string[]) {
    this._tlocColor = value;
  }
  public resetTlocColor() {
    this._tlocColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocColorInput() {
    return this._tlocColor;
  }

  // tloc_encapsulation - computed: false, optional: true, required: false
  private _tlocEncapsulation?: string; 
  public get tlocEncapsulation() {
    return this.getStringAttribute('tloc_encapsulation');
  }
  public set tlocEncapsulation(value: string) {
    this._tlocEncapsulation = value;
  }
  public resetTlocEncapsulation() {
    this._tlocEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocEncapsulationInput() {
    return this._tlocEncapsulation;
  }

  // tloc_ip - computed: false, optional: true, required: false
  private _tlocIp?: string; 
  public get tlocIp() {
    return this.getStringAttribute('tloc_ip');
  }
  public set tlocIp(value: string) {
    this._tlocIp = value;
  }
  public resetTlocIp() {
    this._tlocIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocIpInput() {
    return this._tlocIp;
  }

  // tloc_list_id - computed: false, optional: true, required: false
  private _tlocListId?: string; 
  public get tlocListId() {
    return this.getStringAttribute('tloc_list_id');
  }
  public set tlocListId(value: string) {
    this._tlocListId = value;
  }
  public resetTlocListId() {
    this._tlocListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocListIdInput() {
    return this._tlocListId;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: string; 
  public get vpn() {
    return this.getStringAttribute('vpn');
  }
  public set vpn(value: string) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }
}

export class ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersList extends cdktf.ComplexList {
  public internalValue? : ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersOutputReference {
    return new ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#fallback_to_best_path ApplicationPriorityTrafficPolicyPolicy#fallback_to_best_path}
  */
  readonly fallbackToBestPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#preferred_color ApplicationPriorityTrafficPolicyPolicy#preferred_color}
  */
  readonly preferredColor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#preferred_color_group_list_id ApplicationPriorityTrafficPolicyPolicy#preferred_color_group_list_id}
  */
  readonly preferredColorGroupListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#preferred_remote_color ApplicationPriorityTrafficPolicyPolicy#preferred_remote_color}
  */
  readonly preferredRemoteColor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#remote_color_restrict ApplicationPriorityTrafficPolicyPolicy#remote_color_restrict}
  */
  readonly remoteColorRestrict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#sla_class_list_id ApplicationPriorityTrafficPolicyPolicy#sla_class_list_id}
  */
  readonly slaClassListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#strict ApplicationPriorityTrafficPolicyPolicy#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
}

export function applicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesToTerraform(struct?: ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_to_best_path: cdktf.booleanToTerraform(struct!.fallbackToBestPath),
    preferred_color: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredColor),
    preferred_color_group_list_id: cdktf.stringToTerraform(struct!.preferredColorGroupListId),
    preferred_remote_color: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredRemoteColor),
    remote_color_restrict: cdktf.booleanToTerraform(struct!.remoteColorRestrict),
    sla_class_list_id: cdktf.stringToTerraform(struct!.slaClassListId),
    strict: cdktf.booleanToTerraform(struct!.strict),
  }
}


export function applicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesToHclTerraform(struct?: ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_to_best_path: {
      value: cdktf.booleanToHclTerraform(struct!.fallbackToBestPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preferred_color: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredColor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preferred_color_group_list_id: {
      value: cdktf.stringToHclTerraform(struct!.preferredColorGroupListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_remote_color: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredRemoteColor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    remote_color_restrict: {
      value: cdktf.booleanToHclTerraform(struct!.remoteColorRestrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sla_class_list_id: {
      value: cdktf.stringToHclTerraform(struct!.slaClassListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict: {
      value: cdktf.booleanToHclTerraform(struct!.strict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackToBestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackToBestPath = this._fallbackToBestPath;
    }
    if (this._preferredColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredColor = this._preferredColor;
    }
    if (this._preferredColorGroupListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredColorGroupListId = this._preferredColorGroupListId;
    }
    if (this._preferredRemoteColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredRemoteColor = this._preferredRemoteColor;
    }
    if (this._remoteColorRestrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteColorRestrict = this._remoteColorRestrict;
    }
    if (this._slaClassListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaClassListId = this._slaClassListId;
    }
    if (this._strict !== undefined) {
      hasAnyValues = true;
      internalValueResult.strict = this._strict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackToBestPath = undefined;
      this._preferredColor = undefined;
      this._preferredColorGroupListId = undefined;
      this._preferredRemoteColor = undefined;
      this._remoteColorRestrict = undefined;
      this._slaClassListId = undefined;
      this._strict = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackToBestPath = value.fallbackToBestPath;
      this._preferredColor = value.preferredColor;
      this._preferredColorGroupListId = value.preferredColorGroupListId;
      this._preferredRemoteColor = value.preferredRemoteColor;
      this._remoteColorRestrict = value.remoteColorRestrict;
      this._slaClassListId = value.slaClassListId;
      this._strict = value.strict;
    }
  }

  // fallback_to_best_path - computed: false, optional: true, required: false
  private _fallbackToBestPath?: boolean | cdktf.IResolvable; 
  public get fallbackToBestPath() {
    return this.getBooleanAttribute('fallback_to_best_path');
  }
  public set fallbackToBestPath(value: boolean | cdktf.IResolvable) {
    this._fallbackToBestPath = value;
  }
  public resetFallbackToBestPath() {
    this._fallbackToBestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToBestPathInput() {
    return this._fallbackToBestPath;
  }

  // preferred_color - computed: false, optional: true, required: false
  private _preferredColor?: string[]; 
  public get preferredColor() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_color'));
  }
  public set preferredColor(value: string[]) {
    this._preferredColor = value;
  }
  public resetPreferredColor() {
    this._preferredColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredColorInput() {
    return this._preferredColor;
  }

  // preferred_color_group_list_id - computed: false, optional: true, required: false
  private _preferredColorGroupListId?: string; 
  public get preferredColorGroupListId() {
    return this.getStringAttribute('preferred_color_group_list_id');
  }
  public set preferredColorGroupListId(value: string) {
    this._preferredColorGroupListId = value;
  }
  public resetPreferredColorGroupListId() {
    this._preferredColorGroupListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredColorGroupListIdInput() {
    return this._preferredColorGroupListId;
  }

  // preferred_remote_color - computed: false, optional: true, required: false
  private _preferredRemoteColor?: string[]; 
  public get preferredRemoteColor() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_remote_color'));
  }
  public set preferredRemoteColor(value: string[]) {
    this._preferredRemoteColor = value;
  }
  public resetPreferredRemoteColor() {
    this._preferredRemoteColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredRemoteColorInput() {
    return this._preferredRemoteColor;
  }

  // remote_color_restrict - computed: false, optional: true, required: false
  private _remoteColorRestrict?: boolean | cdktf.IResolvable; 
  public get remoteColorRestrict() {
    return this.getBooleanAttribute('remote_color_restrict');
  }
  public set remoteColorRestrict(value: boolean | cdktf.IResolvable) {
    this._remoteColorRestrict = value;
  }
  public resetRemoteColorRestrict() {
    this._remoteColorRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteColorRestrictInput() {
    return this._remoteColorRestrict;
  }

  // sla_class_list_id - computed: false, optional: true, required: false
  private _slaClassListId?: string; 
  public get slaClassListId() {
    return this.getStringAttribute('sla_class_list_id');
  }
  public set slaClassListId(value: string) {
    this._slaClassListId = value;
  }
  public resetSlaClassListId() {
    this._slaClassListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaClassListIdInput() {
    return this._slaClassListId;
  }

  // strict - computed: false, optional: true, required: false
  private _strict?: boolean | cdktf.IResolvable; 
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
  public set strict(value: boolean | cdktf.IResolvable) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
  }
}

export class ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesList extends cdktf.ComplexList {
  public internalValue? : ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesOutputReference {
    return new ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationPriorityTrafficPolicyPolicySequencesActions {
  /**
  * Backup SLA perferred color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#backup_sla_preferred_color ApplicationPriorityTrafficPolicyPolicy#backup_sla_preferred_color}
  */
  readonly backupSlaPreferredColor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#cloud_probe ApplicationPriorityTrafficPolicyPolicy#cloud_probe}
  */
  readonly cloudProbe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#cloud_saas ApplicationPriorityTrafficPolicyPolicy#cloud_saas}
  */
  readonly cloudSaas?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#count ApplicationPriorityTrafficPolicyPolicy#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#fallback_to_routing ApplicationPriorityTrafficPolicyPolicy#fallback_to_routing}
  */
  readonly fallbackToRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#log ApplicationPriorityTrafficPolicyPolicy#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1`-`5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#loss_correct_fec_threshold ApplicationPriorityTrafficPolicyPolicy#loss_correct_fec_threshold}
  */
  readonly lossCorrectFecThreshold?: number;
  /**
  * 
  *   - Choices: `fecAdaptive`, `fecAlways`, `packetDuplication`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#loss_correct_type ApplicationPriorityTrafficPolicyPolicy#loss_correct_type}
  */
  readonly lossCorrectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#nat_bypass ApplicationPriorityTrafficPolicyPolicy#nat_bypass}
  */
  readonly natBypass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#nat_dia_interface ApplicationPriorityTrafficPolicyPolicy#nat_dia_interface}
  */
  readonly natDiaInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#nat_dia_pool ApplicationPriorityTrafficPolicyPolicy#nat_dia_pool}
  */
  readonly natDiaPool?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#nat_fallback ApplicationPriorityTrafficPolicyPolicy#nat_fallback}
  */
  readonly natFallback?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1`-`31`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#nat_pool ApplicationPriorityTrafficPolicyPolicy#nat_pool}
  */
  readonly natPool?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#nat_vpn ApplicationPriorityTrafficPolicyPolicy#nat_vpn}
  */
  readonly natVpn?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Choices: `ipAddress`, `redirectDns`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#redirect_dns_field ApplicationPriorityTrafficPolicyPolicy#redirect_dns_field}
  */
  readonly redirectDnsField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#redirect_dns_value ApplicationPriorityTrafficPolicyPolicy#redirect_dns_value}
  */
  readonly redirectDnsValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#secure_internet_gateway ApplicationPriorityTrafficPolicyPolicy#secure_internet_gateway}
  */
  readonly secureInternetGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#set_parameters ApplicationPriorityTrafficPolicyPolicy#set_parameters}
  */
  readonly setParameters?: ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters[] | cdktf.IResolvable;
  /**
  * slaClass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#sla_classes ApplicationPriorityTrafficPolicyPolicy#sla_classes}
  */
  readonly slaClasses?: ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses[] | cdktf.IResolvable;
}

export function applicationPriorityTrafficPolicyPolicySequencesActionsToTerraform(struct?: ApplicationPriorityTrafficPolicyPolicySequencesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_sla_preferred_color: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backupSlaPreferredColor),
    cloud_probe: cdktf.booleanToTerraform(struct!.cloudProbe),
    cloud_saas: cdktf.booleanToTerraform(struct!.cloudSaas),
    count: cdktf.stringToTerraform(struct!.count),
    fallback_to_routing: cdktf.booleanToTerraform(struct!.fallbackToRouting),
    log: cdktf.booleanToTerraform(struct!.log),
    loss_correct_fec_threshold: cdktf.numberToTerraform(struct!.lossCorrectFecThreshold),
    loss_correct_type: cdktf.stringToTerraform(struct!.lossCorrectType),
    nat_bypass: cdktf.booleanToTerraform(struct!.natBypass),
    nat_dia_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.natDiaInterface),
    nat_dia_pool: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.natDiaPool),
    nat_fallback: cdktf.booleanToTerraform(struct!.natFallback),
    nat_pool: cdktf.numberToTerraform(struct!.natPool),
    nat_vpn: cdktf.booleanToTerraform(struct!.natVpn),
    redirect_dns_field: cdktf.stringToTerraform(struct!.redirectDnsField),
    redirect_dns_value: cdktf.stringToTerraform(struct!.redirectDnsValue),
    secure_internet_gateway: cdktf.booleanToTerraform(struct!.secureInternetGateway),
    set_parameters: cdktf.listMapper(applicationPriorityTrafficPolicyPolicySequencesActionsSetParametersToTerraform, false)(struct!.setParameters),
    sla_classes: cdktf.listMapper(applicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesToTerraform, false)(struct!.slaClasses),
  }
}


export function applicationPriorityTrafficPolicyPolicySequencesActionsToHclTerraform(struct?: ApplicationPriorityTrafficPolicyPolicySequencesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_sla_preferred_color: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backupSlaPreferredColor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cloud_probe: {
      value: cdktf.booleanToHclTerraform(struct!.cloudProbe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_saas: {
      value: cdktf.booleanToHclTerraform(struct!.cloudSaas),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fallback_to_routing: {
      value: cdktf.booleanToHclTerraform(struct!.fallbackToRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log: {
      value: cdktf.booleanToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loss_correct_fec_threshold: {
      value: cdktf.numberToHclTerraform(struct!.lossCorrectFecThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loss_correct_type: {
      value: cdktf.stringToHclTerraform(struct!.lossCorrectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_bypass: {
      value: cdktf.booleanToHclTerraform(struct!.natBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nat_dia_interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.natDiaInterface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    nat_dia_pool: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.natDiaPool),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    nat_fallback: {
      value: cdktf.booleanToHclTerraform(struct!.natFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nat_pool: {
      value: cdktf.numberToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_vpn: {
      value: cdktf.booleanToHclTerraform(struct!.natVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect_dns_field: {
      value: cdktf.stringToHclTerraform(struct!.redirectDnsField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_dns_value: {
      value: cdktf.stringToHclTerraform(struct!.redirectDnsValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_internet_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.secureInternetGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_parameters: {
      value: cdktf.listMapperHcl(applicationPriorityTrafficPolicyPolicySequencesActionsSetParametersToHclTerraform, false)(struct!.setParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersList",
    },
    sla_classes: {
      value: cdktf.listMapperHcl(applicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesToHclTerraform, false)(struct!.slaClasses),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationPriorityTrafficPolicyPolicySequencesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationPriorityTrafficPolicyPolicySequencesActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupSlaPreferredColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSlaPreferredColor = this._backupSlaPreferredColor;
    }
    if (this._cloudProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProbe = this._cloudProbe;
    }
    if (this._cloudSaas !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSaas = this._cloudSaas;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._fallbackToRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackToRouting = this._fallbackToRouting;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._lossCorrectFecThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.lossCorrectFecThreshold = this._lossCorrectFecThreshold;
    }
    if (this._lossCorrectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.lossCorrectType = this._lossCorrectType;
    }
    if (this._natBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.natBypass = this._natBypass;
    }
    if (this._natDiaInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.natDiaInterface = this._natDiaInterface;
    }
    if (this._natDiaPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natDiaPool = this._natDiaPool;
    }
    if (this._natFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.natFallback = this._natFallback;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    if (this._natVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.natVpn = this._natVpn;
    }
    if (this._redirectDnsField !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectDnsField = this._redirectDnsField;
    }
    if (this._redirectDnsValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectDnsValue = this._redirectDnsValue;
    }
    if (this._secureInternetGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureInternetGateway = this._secureInternetGateway;
    }
    if (this._setParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setParameters = this._setParameters?.internalValue;
    }
    if (this._slaClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaClasses = this._slaClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationPriorityTrafficPolicyPolicySequencesActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupSlaPreferredColor = undefined;
      this._cloudProbe = undefined;
      this._cloudSaas = undefined;
      this._count = undefined;
      this._fallbackToRouting = undefined;
      this._log = undefined;
      this._lossCorrectFecThreshold = undefined;
      this._lossCorrectType = undefined;
      this._natBypass = undefined;
      this._natDiaInterface = undefined;
      this._natDiaPool = undefined;
      this._natFallback = undefined;
      this._natPool = undefined;
      this._natVpn = undefined;
      this._redirectDnsField = undefined;
      this._redirectDnsValue = undefined;
      this._secureInternetGateway = undefined;
      this._setParameters.internalValue = undefined;
      this._slaClasses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupSlaPreferredColor = value.backupSlaPreferredColor;
      this._cloudProbe = value.cloudProbe;
      this._cloudSaas = value.cloudSaas;
      this._count = value.count;
      this._fallbackToRouting = value.fallbackToRouting;
      this._log = value.log;
      this._lossCorrectFecThreshold = value.lossCorrectFecThreshold;
      this._lossCorrectType = value.lossCorrectType;
      this._natBypass = value.natBypass;
      this._natDiaInterface = value.natDiaInterface;
      this._natDiaPool = value.natDiaPool;
      this._natFallback = value.natFallback;
      this._natPool = value.natPool;
      this._natVpn = value.natVpn;
      this._redirectDnsField = value.redirectDnsField;
      this._redirectDnsValue = value.redirectDnsValue;
      this._secureInternetGateway = value.secureInternetGateway;
      this._setParameters.internalValue = value.setParameters;
      this._slaClasses.internalValue = value.slaClasses;
    }
  }

  // backup_sla_preferred_color - computed: false, optional: true, required: false
  private _backupSlaPreferredColor?: string[]; 
  public get backupSlaPreferredColor() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_sla_preferred_color'));
  }
  public set backupSlaPreferredColor(value: string[]) {
    this._backupSlaPreferredColor = value;
  }
  public resetBackupSlaPreferredColor() {
    this._backupSlaPreferredColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSlaPreferredColorInput() {
    return this._backupSlaPreferredColor;
  }

  // cloud_probe - computed: false, optional: true, required: false
  private _cloudProbe?: boolean | cdktf.IResolvable; 
  public get cloudProbe() {
    return this.getBooleanAttribute('cloud_probe');
  }
  public set cloudProbe(value: boolean | cdktf.IResolvable) {
    this._cloudProbe = value;
  }
  public resetCloudProbe() {
    this._cloudProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProbeInput() {
    return this._cloudProbe;
  }

  // cloud_saas - computed: false, optional: true, required: false
  private _cloudSaas?: boolean | cdktf.IResolvable; 
  public get cloudSaas() {
    return this.getBooleanAttribute('cloud_saas');
  }
  public set cloudSaas(value: boolean | cdktf.IResolvable) {
    this._cloudSaas = value;
  }
  public resetCloudSaas() {
    this._cloudSaas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSaasInput() {
    return this._cloudSaas;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // fallback_to_routing - computed: false, optional: true, required: false
  private _fallbackToRouting?: boolean | cdktf.IResolvable; 
  public get fallbackToRouting() {
    return this.getBooleanAttribute('fallback_to_routing');
  }
  public set fallbackToRouting(value: boolean | cdktf.IResolvable) {
    this._fallbackToRouting = value;
  }
  public resetFallbackToRouting() {
    this._fallbackToRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToRoutingInput() {
    return this._fallbackToRouting;
  }

  // log - computed: false, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // loss_correct_fec_threshold - computed: false, optional: true, required: false
  private _lossCorrectFecThreshold?: number; 
  public get lossCorrectFecThreshold() {
    return this.getNumberAttribute('loss_correct_fec_threshold');
  }
  public set lossCorrectFecThreshold(value: number) {
    this._lossCorrectFecThreshold = value;
  }
  public resetLossCorrectFecThreshold() {
    this._lossCorrectFecThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossCorrectFecThresholdInput() {
    return this._lossCorrectFecThreshold;
  }

  // loss_correct_type - computed: false, optional: true, required: false
  private _lossCorrectType?: string; 
  public get lossCorrectType() {
    return this.getStringAttribute('loss_correct_type');
  }
  public set lossCorrectType(value: string) {
    this._lossCorrectType = value;
  }
  public resetLossCorrectType() {
    this._lossCorrectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossCorrectTypeInput() {
    return this._lossCorrectType;
  }

  // nat_bypass - computed: false, optional: true, required: false
  private _natBypass?: boolean | cdktf.IResolvable; 
  public get natBypass() {
    return this.getBooleanAttribute('nat_bypass');
  }
  public set natBypass(value: boolean | cdktf.IResolvable) {
    this._natBypass = value;
  }
  public resetNatBypass() {
    this._natBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natBypassInput() {
    return this._natBypass;
  }

  // nat_dia_interface - computed: false, optional: true, required: false
  private _natDiaInterface?: string[]; 
  public get natDiaInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('nat_dia_interface'));
  }
  public set natDiaInterface(value: string[]) {
    this._natDiaInterface = value;
  }
  public resetNatDiaInterface() {
    this._natDiaInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natDiaInterfaceInput() {
    return this._natDiaInterface;
  }

  // nat_dia_pool - computed: false, optional: true, required: false
  private _natDiaPool?: number[]; 
  public get natDiaPool() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('nat_dia_pool')));
  }
  public set natDiaPool(value: number[]) {
    this._natDiaPool = value;
  }
  public resetNatDiaPool() {
    this._natDiaPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natDiaPoolInput() {
    return this._natDiaPool;
  }

  // nat_fallback - computed: false, optional: true, required: false
  private _natFallback?: boolean | cdktf.IResolvable; 
  public get natFallback() {
    return this.getBooleanAttribute('nat_fallback');
  }
  public set natFallback(value: boolean | cdktf.IResolvable) {
    this._natFallback = value;
  }
  public resetNatFallback() {
    this._natFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natFallbackInput() {
    return this._natFallback;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: number; 
  public get natPool() {
    return this.getNumberAttribute('nat_pool');
  }
  public set natPool(value: number) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // nat_vpn - computed: false, optional: true, required: false
  private _natVpn?: boolean | cdktf.IResolvable; 
  public get natVpn() {
    return this.getBooleanAttribute('nat_vpn');
  }
  public set natVpn(value: boolean | cdktf.IResolvable) {
    this._natVpn = value;
  }
  public resetNatVpn() {
    this._natVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natVpnInput() {
    return this._natVpn;
  }

  // redirect_dns_field - computed: false, optional: true, required: false
  private _redirectDnsField?: string; 
  public get redirectDnsField() {
    return this.getStringAttribute('redirect_dns_field');
  }
  public set redirectDnsField(value: string) {
    this._redirectDnsField = value;
  }
  public resetRedirectDnsField() {
    this._redirectDnsField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectDnsFieldInput() {
    return this._redirectDnsField;
  }

  // redirect_dns_value - computed: false, optional: true, required: false
  private _redirectDnsValue?: string; 
  public get redirectDnsValue() {
    return this.getStringAttribute('redirect_dns_value');
  }
  public set redirectDnsValue(value: string) {
    this._redirectDnsValue = value;
  }
  public resetRedirectDnsValue() {
    this._redirectDnsValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectDnsValueInput() {
    return this._redirectDnsValue;
  }

  // secure_internet_gateway - computed: false, optional: true, required: false
  private _secureInternetGateway?: boolean | cdktf.IResolvable; 
  public get secureInternetGateway() {
    return this.getBooleanAttribute('secure_internet_gateway');
  }
  public set secureInternetGateway(value: boolean | cdktf.IResolvable) {
    this._secureInternetGateway = value;
  }
  public resetSecureInternetGateway() {
    this._secureInternetGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInternetGatewayInput() {
    return this._secureInternetGateway;
  }

  // set_parameters - computed: false, optional: true, required: false
  private _setParameters = new ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParametersList(this, "set_parameters", false);
  public get setParameters() {
    return this._setParameters;
  }
  public putSetParameters(value: ApplicationPriorityTrafficPolicyPolicySequencesActionsSetParameters[] | cdktf.IResolvable) {
    this._setParameters.internalValue = value;
  }
  public resetSetParameters() {
    this._setParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setParametersInput() {
    return this._setParameters.internalValue;
  }

  // sla_classes - computed: false, optional: true, required: false
  private _slaClasses = new ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClassesList(this, "sla_classes", false);
  public get slaClasses() {
    return this._slaClasses;
  }
  public putSlaClasses(value: ApplicationPriorityTrafficPolicyPolicySequencesActionsSlaClasses[] | cdktf.IResolvable) {
    this._slaClasses.internalValue = value;
  }
  public resetSlaClasses() {
    this._slaClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaClassesInput() {
    return this._slaClasses.internalValue;
  }
}

export class ApplicationPriorityTrafficPolicyPolicySequencesActionsList extends cdktf.ComplexList {
  public internalValue? : ApplicationPriorityTrafficPolicyPolicySequencesActions[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPriorityTrafficPolicyPolicySequencesActionsOutputReference {
    return new ApplicationPriorityTrafficPolicyPolicySequencesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationPriorityTrafficPolicyPolicySequencesMatchEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#application_list_id ApplicationPriorityTrafficPolicyPolicy#application_list_id}
  */
  readonly applicationListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#destination_data_ipv4_prefix_list_id ApplicationPriorityTrafficPolicyPolicy#destination_data_ipv4_prefix_list_id}
  */
  readonly destinationDataIpv4PrefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#destination_data_ipv6_prefix_list_id ApplicationPriorityTrafficPolicyPolicy#destination_data_ipv6_prefix_list_id}
  */
  readonly destinationDataIpv6PrefixListId?: string;
  /**
  * Destination Data IP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#destination_ipv4_prefix ApplicationPriorityTrafficPolicyPolicy#destination_ipv4_prefix}
  */
  readonly destinationIpv4Prefix?: string;
  /**
  * Destination Data IP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#destination_ipv6_prefix ApplicationPriorityTrafficPolicyPolicy#destination_ipv6_prefix}
  */
  readonly destinationIpv6Prefix?: string;
  /**
  * Destination Port (0-65535) range or individual number separated by space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#destination_ports ApplicationPriorityTrafficPolicyPolicy#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Destination Region
  *   - Choices: `primary-region`, `secondary-region`, `other-region`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#destination_region ApplicationPriorityTrafficPolicyPolicy#destination_region}
  */
  readonly destinationRegion?: string;
  /**
  * Dns
  *   - Choices: `request`, `response`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#dns ApplicationPriorityTrafficPolicyPolicy#dns}
  */
  readonly dns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#dns_application_list_id ApplicationPriorityTrafficPolicyPolicy#dns_application_list_id}
  */
  readonly dnsApplicationListId?: string;
  /**
  * DSCP number
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#dscp ApplicationPriorityTrafficPolicyPolicy#dscp}
  */
  readonly dscp?: number;
  /**
  * ICMP6 Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#icmp6_message ApplicationPriorityTrafficPolicyPolicy#icmp6_message}
  */
  readonly icmp6Message?: string[];
  /**
  * ICMP Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#icmp_message ApplicationPriorityTrafficPolicyPolicy#icmp_message}
  */
  readonly icmpMessage?: string[];
  /**
  * Packet Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#packet_length ApplicationPriorityTrafficPolicyPolicy#packet_length}
  */
  readonly packetLength?: string;
  /**
  * protocol (0-255) range or individual number separated by space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#protocols ApplicationPriorityTrafficPolicyPolicy#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#saas_application_list_id ApplicationPriorityTrafficPolicyPolicy#saas_application_list_id}
  */
  readonly saasApplicationListId?: string;
  /**
  * M365 Service Area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#service_area ApplicationPriorityTrafficPolicyPolicy#service_area}
  */
  readonly serviceArea?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#source_data_ipv4_prefx_list_id ApplicationPriorityTrafficPolicyPolicy#source_data_ipv4_prefx_list_id}
  */
  readonly sourceDataIpv4PrefxListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#source_data_ipv6_prefx_list_id ApplicationPriorityTrafficPolicyPolicy#source_data_ipv6_prefx_list_id}
  */
  readonly sourceDataIpv6PrefxListId?: string;
  /**
  * Source Data IP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#source_ipv4_prefix ApplicationPriorityTrafficPolicyPolicy#source_ipv4_prefix}
  */
  readonly sourceIpv4Prefix?: string;
  /**
  * Source Data IP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#source_ipv6_prefix ApplicationPriorityTrafficPolicyPolicy#source_ipv6_prefix}
  */
  readonly sourceIpv6Prefix?: string;
  /**
  * Source Port (0-65535) range or individual number separated by space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#source_ports ApplicationPriorityTrafficPolicyPolicy#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * TCP States
  *   - Choices: `syn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#tcp ApplicationPriorityTrafficPolicyPolicy#tcp}
  */
  readonly tcp?: string;
  /**
  * M365 Traffic Category
  *   - Choices: `optimize-allow`, `optimize`, `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#traffic_category ApplicationPriorityTrafficPolicyPolicy#traffic_category}
  */
  readonly trafficCategory?: string;
  /**
  * Traffic Class
  *   - Choices: `gold-voip-telephony`, `gold-broadcast-video`, `gold-real-time-interactive`, `gold-multimedia-conferencing`, `gold-multimedia-streaming`, `gold-network-control`, `gold-signaling`, `gold-ops-admin-mgmt`, `gold-transactional-data`, `gold-bulk-data`, `silver`, `bronze`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#traffic_class ApplicationPriorityTrafficPolicyPolicy#traffic_class}
  */
  readonly trafficClass?: string;
  /**
  * Traffic to
  *   - Choices: `core`, `service`, `access`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#traffic_to ApplicationPriorityTrafficPolicyPolicy#traffic_to}
  */
  readonly trafficTo?: string;
}

export function applicationPriorityTrafficPolicyPolicySequencesMatchEntriesToTerraform(struct?: ApplicationPriorityTrafficPolicyPolicySequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_list_id: cdktf.stringToTerraform(struct!.applicationListId),
    destination_data_ipv4_prefix_list_id: cdktf.stringToTerraform(struct!.destinationDataIpv4PrefixListId),
    destination_data_ipv6_prefix_list_id: cdktf.stringToTerraform(struct!.destinationDataIpv6PrefixListId),
    destination_ipv4_prefix: cdktf.stringToTerraform(struct!.destinationIpv4Prefix),
    destination_ipv6_prefix: cdktf.stringToTerraform(struct!.destinationIpv6Prefix),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPorts),
    destination_region: cdktf.stringToTerraform(struct!.destinationRegion),
    dns: cdktf.stringToTerraform(struct!.dns),
    dns_application_list_id: cdktf.stringToTerraform(struct!.dnsApplicationListId),
    dscp: cdktf.numberToTerraform(struct!.dscp),
    icmp6_message: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.icmp6Message),
    icmp_message: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.icmpMessage),
    packet_length: cdktf.stringToTerraform(struct!.packetLength),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    saas_application_list_id: cdktf.stringToTerraform(struct!.saasApplicationListId),
    service_area: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceArea),
    source_data_ipv4_prefx_list_id: cdktf.stringToTerraform(struct!.sourceDataIpv4PrefxListId),
    source_data_ipv6_prefx_list_id: cdktf.stringToTerraform(struct!.sourceDataIpv6PrefxListId),
    source_ipv4_prefix: cdktf.stringToTerraform(struct!.sourceIpv4Prefix),
    source_ipv6_prefix: cdktf.stringToTerraform(struct!.sourceIpv6Prefix),
    source_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePorts),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    traffic_category: cdktf.stringToTerraform(struct!.trafficCategory),
    traffic_class: cdktf.stringToTerraform(struct!.trafficClass),
    traffic_to: cdktf.stringToTerraform(struct!.trafficTo),
  }
}


export function applicationPriorityTrafficPolicyPolicySequencesMatchEntriesToHclTerraform(struct?: ApplicationPriorityTrafficPolicyPolicySequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_list_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_ipv4_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataIpv4PrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_ipv6_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataIpv6PrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.destinationIpv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.destinationIpv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_region: {
      value: cdktf.stringToHclTerraform(struct!.destinationRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_application_list_id: {
      value: cdktf.stringToHclTerraform(struct!.dnsApplicationListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp6_message: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.icmp6Message),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    icmp_message: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.icmpMessage),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    packet_length: {
      value: cdktf.stringToHclTerraform(struct!.packetLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    saas_application_list_id: {
      value: cdktf.stringToHclTerraform(struct!.saasApplicationListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_area: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceArea),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_data_ipv4_prefx_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataIpv4PrefxListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_ipv6_prefx_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataIpv6PrefxListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_category: {
      value: cdktf.stringToHclTerraform(struct!.trafficCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_class: {
      value: cdktf.stringToHclTerraform(struct!.trafficClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_to: {
      value: cdktf.stringToHclTerraform(struct!.trafficTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationPriorityTrafficPolicyPolicySequencesMatchEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationListId = this._applicationListId;
    }
    if (this._destinationDataIpv4PrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataIpv4PrefixListId = this._destinationDataIpv4PrefixListId;
    }
    if (this._destinationDataIpv6PrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataIpv6PrefixListId = this._destinationDataIpv6PrefixListId;
    }
    if (this._destinationIpv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpv4Prefix = this._destinationIpv4Prefix;
    }
    if (this._destinationIpv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpv6Prefix = this._destinationIpv6Prefix;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRegion = this._destinationRegion;
    }
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._dnsApplicationListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsApplicationListId = this._dnsApplicationListId;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._icmp6Message !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp6Message = this._icmp6Message;
    }
    if (this._icmpMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpMessage = this._icmpMessage;
    }
    if (this._packetLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLength = this._packetLength;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._saasApplicationListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.saasApplicationListId = this._saasApplicationListId;
    }
    if (this._serviceArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceArea = this._serviceArea;
    }
    if (this._sourceDataIpv4PrefxListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataIpv4PrefxListId = this._sourceDataIpv4PrefxListId;
    }
    if (this._sourceDataIpv6PrefxListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataIpv6PrefxListId = this._sourceDataIpv6PrefxListId;
    }
    if (this._sourceIpv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpv4Prefix = this._sourceIpv4Prefix;
    }
    if (this._sourceIpv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpv6Prefix = this._sourceIpv6Prefix;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._trafficCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficCategory = this._trafficCategory;
    }
    if (this._trafficClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClass = this._trafficClass;
    }
    if (this._trafficTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficTo = this._trafficTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationPriorityTrafficPolicyPolicySequencesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationListId = undefined;
      this._destinationDataIpv4PrefixListId = undefined;
      this._destinationDataIpv6PrefixListId = undefined;
      this._destinationIpv4Prefix = undefined;
      this._destinationIpv6Prefix = undefined;
      this._destinationPorts = undefined;
      this._destinationRegion = undefined;
      this._dns = undefined;
      this._dnsApplicationListId = undefined;
      this._dscp = undefined;
      this._icmp6Message = undefined;
      this._icmpMessage = undefined;
      this._packetLength = undefined;
      this._protocols = undefined;
      this._saasApplicationListId = undefined;
      this._serviceArea = undefined;
      this._sourceDataIpv4PrefxListId = undefined;
      this._sourceDataIpv6PrefxListId = undefined;
      this._sourceIpv4Prefix = undefined;
      this._sourceIpv6Prefix = undefined;
      this._sourcePorts = undefined;
      this._tcp = undefined;
      this._trafficCategory = undefined;
      this._trafficClass = undefined;
      this._trafficTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationListId = value.applicationListId;
      this._destinationDataIpv4PrefixListId = value.destinationDataIpv4PrefixListId;
      this._destinationDataIpv6PrefixListId = value.destinationDataIpv6PrefixListId;
      this._destinationIpv4Prefix = value.destinationIpv4Prefix;
      this._destinationIpv6Prefix = value.destinationIpv6Prefix;
      this._destinationPorts = value.destinationPorts;
      this._destinationRegion = value.destinationRegion;
      this._dns = value.dns;
      this._dnsApplicationListId = value.dnsApplicationListId;
      this._dscp = value.dscp;
      this._icmp6Message = value.icmp6Message;
      this._icmpMessage = value.icmpMessage;
      this._packetLength = value.packetLength;
      this._protocols = value.protocols;
      this._saasApplicationListId = value.saasApplicationListId;
      this._serviceArea = value.serviceArea;
      this._sourceDataIpv4PrefxListId = value.sourceDataIpv4PrefxListId;
      this._sourceDataIpv6PrefxListId = value.sourceDataIpv6PrefxListId;
      this._sourceIpv4Prefix = value.sourceIpv4Prefix;
      this._sourceIpv6Prefix = value.sourceIpv6Prefix;
      this._sourcePorts = value.sourcePorts;
      this._tcp = value.tcp;
      this._trafficCategory = value.trafficCategory;
      this._trafficClass = value.trafficClass;
      this._trafficTo = value.trafficTo;
    }
  }

  // application_list_id - computed: false, optional: true, required: false
  private _applicationListId?: string; 
  public get applicationListId() {
    return this.getStringAttribute('application_list_id');
  }
  public set applicationListId(value: string) {
    this._applicationListId = value;
  }
  public resetApplicationListId() {
    this._applicationListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListIdInput() {
    return this._applicationListId;
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

  // destination_data_ipv6_prefix_list_id - computed: false, optional: true, required: false
  private _destinationDataIpv6PrefixListId?: string; 
  public get destinationDataIpv6PrefixListId() {
    return this.getStringAttribute('destination_data_ipv6_prefix_list_id');
  }
  public set destinationDataIpv6PrefixListId(value: string) {
    this._destinationDataIpv6PrefixListId = value;
  }
  public resetDestinationDataIpv6PrefixListId() {
    this._destinationDataIpv6PrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataIpv6PrefixListIdInput() {
    return this._destinationDataIpv6PrefixListId;
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

  // destination_ipv6_prefix - computed: false, optional: true, required: false
  private _destinationIpv6Prefix?: string; 
  public get destinationIpv6Prefix() {
    return this.getStringAttribute('destination_ipv6_prefix');
  }
  public set destinationIpv6Prefix(value: string) {
    this._destinationIpv6Prefix = value;
  }
  public resetDestinationIpv6Prefix() {
    this._destinationIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpv6PrefixInput() {
    return this._destinationIpv6Prefix;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_ports'));
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_region - computed: false, optional: true, required: false
  private _destinationRegion?: string; 
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }
  public set destinationRegion(value: string) {
    this._destinationRegion = value;
  }
  public resetDestinationRegion() {
    this._destinationRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionInput() {
    return this._destinationRegion;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // dns_application_list_id - computed: false, optional: true, required: false
  private _dnsApplicationListId?: string; 
  public get dnsApplicationListId() {
    return this.getStringAttribute('dns_application_list_id');
  }
  public set dnsApplicationListId(value: string) {
    this._dnsApplicationListId = value;
  }
  public resetDnsApplicationListId() {
    this._dnsApplicationListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsApplicationListIdInput() {
    return this._dnsApplicationListId;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // icmp6_message - computed: false, optional: true, required: false
  private _icmp6Message?: string[]; 
  public get icmp6Message() {
    return cdktf.Fn.tolist(this.getListAttribute('icmp6_message'));
  }
  public set icmp6Message(value: string[]) {
    this._icmp6Message = value;
  }
  public resetIcmp6Message() {
    this._icmp6Message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6MessageInput() {
    return this._icmp6Message;
  }

  // icmp_message - computed: false, optional: true, required: false
  private _icmpMessage?: string[]; 
  public get icmpMessage() {
    return cdktf.Fn.tolist(this.getListAttribute('icmp_message'));
  }
  public set icmpMessage(value: string[]) {
    this._icmpMessage = value;
  }
  public resetIcmpMessage() {
    this._icmpMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpMessageInput() {
    return this._icmpMessage;
  }

  // packet_length - computed: false, optional: true, required: false
  private _packetLength?: string; 
  public get packetLength() {
    return this.getStringAttribute('packet_length');
  }
  public set packetLength(value: string) {
    this._packetLength = value;
  }
  public resetPacketLength() {
    this._packetLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthInput() {
    return this._packetLength;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // saas_application_list_id - computed: false, optional: true, required: false
  private _saasApplicationListId?: string; 
  public get saasApplicationListId() {
    return this.getStringAttribute('saas_application_list_id');
  }
  public set saasApplicationListId(value: string) {
    this._saasApplicationListId = value;
  }
  public resetSaasApplicationListId() {
    this._saasApplicationListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasApplicationListIdInput() {
    return this._saasApplicationListId;
  }

  // service_area - computed: false, optional: true, required: false
  private _serviceArea?: string[]; 
  public get serviceArea() {
    return cdktf.Fn.tolist(this.getListAttribute('service_area'));
  }
  public set serviceArea(value: string[]) {
    this._serviceArea = value;
  }
  public resetServiceArea() {
    this._serviceArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAreaInput() {
    return this._serviceArea;
  }

  // source_data_ipv4_prefx_list_id - computed: false, optional: true, required: false
  private _sourceDataIpv4PrefxListId?: string; 
  public get sourceDataIpv4PrefxListId() {
    return this.getStringAttribute('source_data_ipv4_prefx_list_id');
  }
  public set sourceDataIpv4PrefxListId(value: string) {
    this._sourceDataIpv4PrefxListId = value;
  }
  public resetSourceDataIpv4PrefxListId() {
    this._sourceDataIpv4PrefxListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataIpv4PrefxListIdInput() {
    return this._sourceDataIpv4PrefxListId;
  }

  // source_data_ipv6_prefx_list_id - computed: false, optional: true, required: false
  private _sourceDataIpv6PrefxListId?: string; 
  public get sourceDataIpv6PrefxListId() {
    return this.getStringAttribute('source_data_ipv6_prefx_list_id');
  }
  public set sourceDataIpv6PrefxListId(value: string) {
    this._sourceDataIpv6PrefxListId = value;
  }
  public resetSourceDataIpv6PrefxListId() {
    this._sourceDataIpv6PrefxListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataIpv6PrefxListIdInput() {
    return this._sourceDataIpv6PrefxListId;
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

  // source_ipv6_prefix - computed: false, optional: true, required: false
  private _sourceIpv6Prefix?: string; 
  public get sourceIpv6Prefix() {
    return this.getStringAttribute('source_ipv6_prefix');
  }
  public set sourceIpv6Prefix(value: string) {
    this._sourceIpv6Prefix = value;
  }
  public resetSourceIpv6Prefix() {
    this._sourceIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpv6PrefixInput() {
    return this._sourceIpv6Prefix;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ports'));
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // traffic_category - computed: false, optional: true, required: false
  private _trafficCategory?: string; 
  public get trafficCategory() {
    return this.getStringAttribute('traffic_category');
  }
  public set trafficCategory(value: string) {
    this._trafficCategory = value;
  }
  public resetTrafficCategory() {
    this._trafficCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficCategoryInput() {
    return this._trafficCategory;
  }

  // traffic_class - computed: false, optional: true, required: false
  private _trafficClass?: string; 
  public get trafficClass() {
    return this.getStringAttribute('traffic_class');
  }
  public set trafficClass(value: string) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
  }

  // traffic_to - computed: false, optional: true, required: false
  private _trafficTo?: string; 
  public get trafficTo() {
    return this.getStringAttribute('traffic_to');
  }
  public set trafficTo(value: string) {
    this._trafficTo = value;
  }
  public resetTrafficTo() {
    this._trafficTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficToInput() {
    return this._trafficTo;
  }
}

export class ApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : ApplicationPriorityTrafficPolicyPolicySequencesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesOutputReference {
    return new ApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationPriorityTrafficPolicyPolicySequences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#actions ApplicationPriorityTrafficPolicyPolicy#actions}
  */
  readonly actions?: ApplicationPriorityTrafficPolicyPolicySequencesActions[] | cdktf.IResolvable;
  /**
  * Base Action
  *   - Choices: `drop`, `accept`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#base_action ApplicationPriorityTrafficPolicyPolicy#base_action}
  */
  readonly baseAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#match_entries ApplicationPriorityTrafficPolicyPolicy#match_entries}
  */
  readonly matchEntries?: ApplicationPriorityTrafficPolicyPolicySequencesMatchEntries[] | cdktf.IResolvable;
  /**
  * Sequence IP Type
  *   - Choices: `ipv4`, `ipv6`, `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#protocol ApplicationPriorityTrafficPolicyPolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * Sequence Id
  *   - Range: `1`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#sequence_id ApplicationPriorityTrafficPolicyPolicy#sequence_id}
  */
  readonly sequenceId?: number;
  /**
  * Sequence Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#sequence_name ApplicationPriorityTrafficPolicyPolicy#sequence_name}
  */
  readonly sequenceName?: string;
}

export function applicationPriorityTrafficPolicyPolicySequencesToTerraform(struct?: ApplicationPriorityTrafficPolicyPolicySequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(applicationPriorityTrafficPolicyPolicySequencesActionsToTerraform, false)(struct!.actions),
    base_action: cdktf.stringToTerraform(struct!.baseAction),
    match_entries: cdktf.listMapper(applicationPriorityTrafficPolicyPolicySequencesMatchEntriesToTerraform, false)(struct!.matchEntries),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    sequence_id: cdktf.numberToTerraform(struct!.sequenceId),
    sequence_name: cdktf.stringToTerraform(struct!.sequenceName),
  }
}


export function applicationPriorityTrafficPolicyPolicySequencesToHclTerraform(struct?: ApplicationPriorityTrafficPolicyPolicySequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(applicationPriorityTrafficPolicyPolicySequencesActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationPriorityTrafficPolicyPolicySequencesActionsList",
    },
    base_action: {
      value: cdktf.stringToHclTerraform(struct!.baseAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_entries: {
      value: cdktf.listMapperHcl(applicationPriorityTrafficPolicyPolicySequencesMatchEntriesToHclTerraform, false)(struct!.matchEntries),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_id: {
      value: cdktf.numberToHclTerraform(struct!.sequenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_name: {
      value: cdktf.stringToHclTerraform(struct!.sequenceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationPriorityTrafficPolicyPolicySequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationPriorityTrafficPolicyPolicySequences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._baseAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAction = this._baseAction;
    }
    if (this._matchEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntries = this._matchEntries?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sequenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceId = this._sequenceId;
    }
    if (this._sequenceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceName = this._sequenceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationPriorityTrafficPolicyPolicySequences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._baseAction = undefined;
      this._matchEntries.internalValue = undefined;
      this._protocol = undefined;
      this._sequenceId = undefined;
      this._sequenceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._baseAction = value.baseAction;
      this._matchEntries.internalValue = value.matchEntries;
      this._protocol = value.protocol;
      this._sequenceId = value.sequenceId;
      this._sequenceName = value.sequenceName;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new ApplicationPriorityTrafficPolicyPolicySequencesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: ApplicationPriorityTrafficPolicyPolicySequencesActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // base_action - computed: false, optional: true, required: false
  private _baseAction?: string; 
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }
  public set baseAction(value: string) {
    this._baseAction = value;
  }
  public resetBaseAction() {
    this._baseAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseActionInput() {
    return this._baseAction;
  }

  // match_entries - computed: false, optional: true, required: false
  private _matchEntries = new ApplicationPriorityTrafficPolicyPolicySequencesMatchEntriesList(this, "match_entries", false);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: ApplicationPriorityTrafficPolicyPolicySequencesMatchEntries[] | cdktf.IResolvable) {
    this._matchEntries.internalValue = value;
  }
  public resetMatchEntries() {
    this._matchEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntriesInput() {
    return this._matchEntries.internalValue;
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

  // sequence_id - computed: false, optional: true, required: false
  private _sequenceId?: number; 
  public get sequenceId() {
    return this.getNumberAttribute('sequence_id');
  }
  public set sequenceId(value: number) {
    this._sequenceId = value;
  }
  public resetSequenceId() {
    this._sequenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceIdInput() {
    return this._sequenceId;
  }

  // sequence_name - computed: false, optional: true, required: false
  private _sequenceName?: string; 
  public get sequenceName() {
    return this.getStringAttribute('sequence_name');
  }
  public set sequenceName(value: string) {
    this._sequenceName = value;
  }
  public resetSequenceName() {
    this._sequenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNameInput() {
    return this._sequenceName;
  }
}

export class ApplicationPriorityTrafficPolicyPolicySequencesList extends cdktf.ComplexList {
  public internalValue? : ApplicationPriorityTrafficPolicyPolicySequences[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPriorityTrafficPolicyPolicySequencesOutputReference {
    return new ApplicationPriorityTrafficPolicyPolicySequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy sdwan_application_priority_traffic_policy_policy}
*/
export class ApplicationPriorityTrafficPolicyPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_application_priority_traffic_policy_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationPriorityTrafficPolicyPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationPriorityTrafficPolicyPolicy to import
  * @param importFromId The id of the existing ApplicationPriorityTrafficPolicyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationPriorityTrafficPolicyPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_application_priority_traffic_policy_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_traffic_policy_policy sdwan_application_priority_traffic_policy_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationPriorityTrafficPolicyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationPriorityTrafficPolicyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_application_priority_traffic_policy_policy',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultAction = config.defaultAction;
    this._description = config.description;
    this._direction = config.direction;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._sequences.internalValue = config.sequences;
    this._vpns = config.vpns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
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

  // sequences - computed: false, optional: true, required: false
  private _sequences = new ApplicationPriorityTrafficPolicyPolicySequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: ApplicationPriorityTrafficPolicyPolicySequences[] | cdktf.IResolvable) {
    this._sequences.internalValue = value;
  }
  public resetSequences() {
    this._sequences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencesInput() {
    return this._sequences.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpns - computed: false, optional: false, required: true
  private _vpns?: string[]; 
  public get vpns() {
    return cdktf.Fn.tolist(this.getListAttribute('vpns'));
  }
  public set vpns(value: string[]) {
    this._vpns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnsInput() {
    return this._vpns;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_action: cdktf.stringToTerraform(this._defaultAction),
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.stringToTerraform(this._direction),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      sequences: cdktf.listMapper(applicationPriorityTrafficPolicyPolicySequencesToTerraform, false)(this._sequences.internalValue),
      vpns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpns),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
      sequences: {
        value: cdktf.listMapperHcl(applicationPriorityTrafficPolicyPolicySequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationPriorityTrafficPolicyPolicySequencesList",
      },
      vpns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
