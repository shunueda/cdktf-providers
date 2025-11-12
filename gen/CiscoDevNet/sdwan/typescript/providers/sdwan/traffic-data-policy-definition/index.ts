// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficDataPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default action, either `accept` or `drop`
  *   - Choices: `accept`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#default_action TrafficDataPolicyDefinition#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#description TrafficDataPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#name TrafficDataPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of sequences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#sequences TrafficDataPolicyDefinition#sequences}
  */
  readonly sequences: TrafficDataPolicyDefinitionSequences[] | cdktf.IResolvable;
}
export interface TrafficDataPolicyDefinitionSequencesActionEntriesNatParameters {
  /**
  * Fallback, Attribute conditional on `type` being equal to `fallback`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#fallback TrafficDataPolicyDefinition#fallback}
  */
  readonly fallback?: boolean | cdktf.IResolvable;
  /**
  * Type of NAT parameter
  *   - Choices: `useVpn`, `fallback`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#type TrafficDataPolicyDefinition#type}
  */
  readonly type: string;
  /**
  * DSCP, Attribute conditional on `type` being equal to `useVpn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#vpn_id TrafficDataPolicyDefinition#vpn_id}
  */
  readonly vpnId?: number;
}

export function trafficDataPolicyDefinitionSequencesActionEntriesNatParametersToTerraform(struct?: TrafficDataPolicyDefinitionSequencesActionEntriesNatParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback: cdktf.booleanToTerraform(struct!.fallback),
    type: cdktf.stringToTerraform(struct!.type),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function trafficDataPolicyDefinitionSequencesActionEntriesNatParametersToHclTerraform(struct?: TrafficDataPolicyDefinitionSequencesActionEntriesNatParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback: {
      value: cdktf.booleanToHclTerraform(struct!.fallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficDataPolicyDefinitionSequencesActionEntriesNatParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficDataPolicyDefinitionSequencesActionEntriesNatParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficDataPolicyDefinitionSequencesActionEntriesNatParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallback = undefined;
      this._type = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallback = value.fallback;
      this._type = value.type;
      this._vpnId = value.vpnId;
    }
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback?: boolean | cdktf.IResolvable; 
  public get fallback() {
    return this.getBooleanAttribute('fallback');
  }
  public set fallback(value: boolean | cdktf.IResolvable) {
    this._fallback = value;
  }
  public resetFallback() {
    this._fallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }
}

export class TrafficDataPolicyDefinitionSequencesActionEntriesNatParametersList extends cdktf.ComplexList {
  public internalValue? : TrafficDataPolicyDefinitionSequencesActionEntriesNatParameters[] | cdktf.IResolvable

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
  public get(index: number): TrafficDataPolicyDefinitionSequencesActionEntriesNatParametersOutputReference {
    return new TrafficDataPolicyDefinitionSequencesActionEntriesNatParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficDataPolicyDefinitionSequencesActionEntriesSetParameters {
  /**
  * DSCP, Attribute conditional on `type` being equal to `dscp`
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#dscp TrafficDataPolicyDefinition#dscp}
  */
  readonly dscp?: number;
  /**
  * Forwarding class, Attribute conditional on `type` being equal to `forwardingClass`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#forwarding_class TrafficDataPolicyDefinition#forwarding_class}
  */
  readonly forwardingClass?: string;
  /**
  * Local TLOC list color. Space separated list of colors., Attribute conditional on `type` being equal to `localTlocList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#local_tloc_list_color TrafficDataPolicyDefinition#local_tloc_list_color}
  */
  readonly localTlocListColor?: string;
  /**
  * Local TLOC list encapsulation., Attribute conditional on `type` being equal to `localTlocList`
  *   - Choices: `ipsec`, `gre`, `ipsec gre`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#local_tloc_list_encap TrafficDataPolicyDefinition#local_tloc_list_encap}
  */
  readonly localTlocListEncap?: string;
  /**
  * Local TLOC list restrict, Attribute conditional on `type` being equal to `localTlocList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#local_tloc_list_restrict TrafficDataPolicyDefinition#local_tloc_list_restrict}
  */
  readonly localTlocListRestrict?: boolean | cdktf.IResolvable;
  /**
  * Next hop IP, Attribute conditional on `type` being equal to `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#next_hop TrafficDataPolicyDefinition#next_hop}
  */
  readonly nextHop?: string;
  /**
  * Use routing table entry to forward the packet in case Next-hop is not available, Attribute conditional on `type` being equal to `nextHopLoose`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#next_hop_loose TrafficDataPolicyDefinition#next_hop_loose}
  */
  readonly nextHopLoose?: boolean | cdktf.IResolvable;
  /**
  * Policer list ID, Attribute conditional on `type` being equal to `policer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#policer_list_id TrafficDataPolicyDefinition#policer_list_id}
  */
  readonly policerListId?: string;
  /**
  * Policer list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#policer_list_version TrafficDataPolicyDefinition#policer_list_version}
  */
  readonly policerListVersion?: number;
  /**
  * Preferred color group list ID, Attribute conditional on `type` being equal to `preferredColorGroup`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#preferred_color_group_list_id TrafficDataPolicyDefinition#preferred_color_group_list_id}
  */
  readonly preferredColorGroupListId?: string;
  /**
  * Preferred color group list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#preferred_color_group_list_version TrafficDataPolicyDefinition#preferred_color_group_list_version}
  */
  readonly preferredColorGroupListVersion?: number;
  /**
  * Service TLOC color, Attribute conditional on `type` being equal to `service`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#service_tloc_color TrafficDataPolicyDefinition#service_tloc_color}
  */
  readonly serviceTlocColor?: string;
  /**
  * Service TLOC encapsulation, Attribute conditional on `type` being equal to `service`
  *   - Choices: `ipsec`, `gre`, `ipsec gre`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#service_tloc_encapsulation TrafficDataPolicyDefinition#service_tloc_encapsulation}
  */
  readonly serviceTlocEncapsulation?: string;
  /**
  * Service TLOC IP address, Attribute conditional on `type` being equal to `service`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#service_tloc_ip TrafficDataPolicyDefinition#service_tloc_ip}
  */
  readonly serviceTlocIp?: string;
  /**
  * Service TLOC list ID, Attribute conditional on `type` being equal to `service`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#service_tloc_list_id TrafficDataPolicyDefinition#service_tloc_list_id}
  */
  readonly serviceTlocListId?: string;
  /**
  * Service TLOC list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#service_tloc_list_version TrafficDataPolicyDefinition#service_tloc_list_version}
  */
  readonly serviceTlocListVersion?: number;
  /**
  * Service TLOC Local, Attribute conditional on `type` being equal to `service`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#service_tloc_local TrafficDataPolicyDefinition#service_tloc_local}
  */
  readonly serviceTlocLocal?: boolean | cdktf.IResolvable;
  /**
  * Service TLOC Restrict, Attribute conditional on `type` being equal to `service`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#service_tloc_restrict TrafficDataPolicyDefinition#service_tloc_restrict}
  */
  readonly serviceTlocRestrict?: boolean | cdktf.IResolvable;
  /**
  * Service type, Attribute conditional on `type` being equal to `service`
  *   - Choices: `FW`, `IDP`, `IDS`, `netsvc1`, `netsvc2`, `netsvc3`, `netsvc4`, `netsvc5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#service_type TrafficDataPolicyDefinition#service_type}
  */
  readonly serviceType?: string;
  /**
  * Service VPN ID, Attribute conditional on `type` being equal to `service`
  *   - Range: `0`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#service_vpn_id TrafficDataPolicyDefinition#service_vpn_id}
  */
  readonly serviceVpnId?: number;
  /**
  * TLOC color, Attribute conditional on `type` being equal to `tloc`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#tloc_color TrafficDataPolicyDefinition#tloc_color}
  */
  readonly tlocColor?: string;
  /**
  * TLOC encapsulation, Attribute conditional on `type` being equal to `tloc`
  *   - Choices: `ipsec`, `gre`, `ipsec gre`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#tloc_encapsulation TrafficDataPolicyDefinition#tloc_encapsulation}
  */
  readonly tlocEncapsulation?: string;
  /**
  * TLOC IP address, Attribute conditional on `type` being equal to `tloc`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#tloc_ip TrafficDataPolicyDefinition#tloc_ip}
  */
  readonly tlocIp?: string;
  /**
  * TLOC list ID, Attribute conditional on `type` being equal to `tlocList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#tloc_list_id TrafficDataPolicyDefinition#tloc_list_id}
  */
  readonly tlocListId?: string;
  /**
  * TLOC list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#tloc_list_version TrafficDataPolicyDefinition#tloc_list_version}
  */
  readonly tlocListVersion?: number;
  /**
  * Type of set parameter
  *   - Choices: `dscp`, `forwardingClass`, `localTlocList`, `nextHop`, `nextHopLoose`, `policer`, `preferredColorGroup`, `tlocList`, `tloc`, `service`, `vpn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#type TrafficDataPolicyDefinition#type}
  */
  readonly type: string;
  /**
  * DSCP, Attribute conditional on `type` being equal to `vpn`
  *   - Range: `0`-`65530`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#vpn_id TrafficDataPolicyDefinition#vpn_id}
  */
  readonly vpnId?: number;
}

export function trafficDataPolicyDefinitionSequencesActionEntriesSetParametersToTerraform(struct?: TrafficDataPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.numberToTerraform(struct!.dscp),
    forwarding_class: cdktf.stringToTerraform(struct!.forwardingClass),
    local_tloc_list_color: cdktf.stringToTerraform(struct!.localTlocListColor),
    local_tloc_list_encap: cdktf.stringToTerraform(struct!.localTlocListEncap),
    local_tloc_list_restrict: cdktf.booleanToTerraform(struct!.localTlocListRestrict),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    next_hop_loose: cdktf.booleanToTerraform(struct!.nextHopLoose),
    policer_list_id: cdktf.stringToTerraform(struct!.policerListId),
    policer_list_version: cdktf.numberToTerraform(struct!.policerListVersion),
    preferred_color_group_list_id: cdktf.stringToTerraform(struct!.preferredColorGroupListId),
    preferred_color_group_list_version: cdktf.numberToTerraform(struct!.preferredColorGroupListVersion),
    service_tloc_color: cdktf.stringToTerraform(struct!.serviceTlocColor),
    service_tloc_encapsulation: cdktf.stringToTerraform(struct!.serviceTlocEncapsulation),
    service_tloc_ip: cdktf.stringToTerraform(struct!.serviceTlocIp),
    service_tloc_list_id: cdktf.stringToTerraform(struct!.serviceTlocListId),
    service_tloc_list_version: cdktf.numberToTerraform(struct!.serviceTlocListVersion),
    service_tloc_local: cdktf.booleanToTerraform(struct!.serviceTlocLocal),
    service_tloc_restrict: cdktf.booleanToTerraform(struct!.serviceTlocRestrict),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    service_vpn_id: cdktf.numberToTerraform(struct!.serviceVpnId),
    tloc_color: cdktf.stringToTerraform(struct!.tlocColor),
    tloc_encapsulation: cdktf.stringToTerraform(struct!.tlocEncapsulation),
    tloc_ip: cdktf.stringToTerraform(struct!.tlocIp),
    tloc_list_id: cdktf.stringToTerraform(struct!.tlocListId),
    tloc_list_version: cdktf.numberToTerraform(struct!.tlocListVersion),
    type: cdktf.stringToTerraform(struct!.type),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function trafficDataPolicyDefinitionSequencesActionEntriesSetParametersToHclTerraform(struct?: TrafficDataPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable): any {
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
    forwarding_class: {
      value: cdktf.stringToHclTerraform(struct!.forwardingClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_tloc_list_color: {
      value: cdktf.stringToHclTerraform(struct!.localTlocListColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_tloc_list_encap: {
      value: cdktf.stringToHclTerraform(struct!.localTlocListEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_tloc_list_restrict: {
      value: cdktf.booleanToHclTerraform(struct!.localTlocListRestrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
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
    policer_list_id: {
      value: cdktf.stringToHclTerraform(struct!.policerListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policer_list_version: {
      value: cdktf.numberToHclTerraform(struct!.policerListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_color_group_list_id: {
      value: cdktf.stringToHclTerraform(struct!.preferredColorGroupListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_color_group_list_version: {
      value: cdktf.numberToHclTerraform(struct!.preferredColorGroupListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_tloc_color: {
      value: cdktf.stringToHclTerraform(struct!.serviceTlocColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    service_tloc_list_version: {
      value: cdktf.numberToHclTerraform(struct!.serviceTlocListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_tloc_local: {
      value: cdktf.booleanToHclTerraform(struct!.serviceTlocLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_tloc_restrict: {
      value: cdktf.booleanToHclTerraform(struct!.serviceTlocRestrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.serviceVpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tloc_color: {
      value: cdktf.stringToHclTerraform(struct!.tlocColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    tloc_list_version: {
      value: cdktf.numberToHclTerraform(struct!.tlocListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficDataPolicyDefinitionSequencesActionEntriesSetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficDataPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._forwardingClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingClass = this._forwardingClass;
    }
    if (this._localTlocListColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTlocListColor = this._localTlocListColor;
    }
    if (this._localTlocListEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTlocListEncap = this._localTlocListEncap;
    }
    if (this._localTlocListRestrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTlocListRestrict = this._localTlocListRestrict;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._nextHopLoose !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopLoose = this._nextHopLoose;
    }
    if (this._policerListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policerListId = this._policerListId;
    }
    if (this._policerListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.policerListVersion = this._policerListVersion;
    }
    if (this._preferredColorGroupListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredColorGroupListId = this._preferredColorGroupListId;
    }
    if (this._preferredColorGroupListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredColorGroupListVersion = this._preferredColorGroupListVersion;
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
    if (this._serviceTlocListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTlocListVersion = this._serviceTlocListVersion;
    }
    if (this._serviceTlocLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTlocLocal = this._serviceTlocLocal;
    }
    if (this._serviceTlocRestrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTlocRestrict = this._serviceTlocRestrict;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._serviceVpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVpnId = this._serviceVpnId;
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
    if (this._tlocListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocListVersion = this._tlocListVersion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficDataPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dscp = undefined;
      this._forwardingClass = undefined;
      this._localTlocListColor = undefined;
      this._localTlocListEncap = undefined;
      this._localTlocListRestrict = undefined;
      this._nextHop = undefined;
      this._nextHopLoose = undefined;
      this._policerListId = undefined;
      this._policerListVersion = undefined;
      this._preferredColorGroupListId = undefined;
      this._preferredColorGroupListVersion = undefined;
      this._serviceTlocColor = undefined;
      this._serviceTlocEncapsulation = undefined;
      this._serviceTlocIp = undefined;
      this._serviceTlocListId = undefined;
      this._serviceTlocListVersion = undefined;
      this._serviceTlocLocal = undefined;
      this._serviceTlocRestrict = undefined;
      this._serviceType = undefined;
      this._serviceVpnId = undefined;
      this._tlocColor = undefined;
      this._tlocEncapsulation = undefined;
      this._tlocIp = undefined;
      this._tlocListId = undefined;
      this._tlocListVersion = undefined;
      this._type = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dscp = value.dscp;
      this._forwardingClass = value.forwardingClass;
      this._localTlocListColor = value.localTlocListColor;
      this._localTlocListEncap = value.localTlocListEncap;
      this._localTlocListRestrict = value.localTlocListRestrict;
      this._nextHop = value.nextHop;
      this._nextHopLoose = value.nextHopLoose;
      this._policerListId = value.policerListId;
      this._policerListVersion = value.policerListVersion;
      this._preferredColorGroupListId = value.preferredColorGroupListId;
      this._preferredColorGroupListVersion = value.preferredColorGroupListVersion;
      this._serviceTlocColor = value.serviceTlocColor;
      this._serviceTlocEncapsulation = value.serviceTlocEncapsulation;
      this._serviceTlocIp = value.serviceTlocIp;
      this._serviceTlocListId = value.serviceTlocListId;
      this._serviceTlocListVersion = value.serviceTlocListVersion;
      this._serviceTlocLocal = value.serviceTlocLocal;
      this._serviceTlocRestrict = value.serviceTlocRestrict;
      this._serviceType = value.serviceType;
      this._serviceVpnId = value.serviceVpnId;
      this._tlocColor = value.tlocColor;
      this._tlocEncapsulation = value.tlocEncapsulation;
      this._tlocIp = value.tlocIp;
      this._tlocListId = value.tlocListId;
      this._tlocListVersion = value.tlocListVersion;
      this._type = value.type;
      this._vpnId = value.vpnId;
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

  // forwarding_class - computed: false, optional: true, required: false
  private _forwardingClass?: string; 
  public get forwardingClass() {
    return this.getStringAttribute('forwarding_class');
  }
  public set forwardingClass(value: string) {
    this._forwardingClass = value;
  }
  public resetForwardingClass() {
    this._forwardingClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingClassInput() {
    return this._forwardingClass;
  }

  // local_tloc_list_color - computed: false, optional: true, required: false
  private _localTlocListColor?: string; 
  public get localTlocListColor() {
    return this.getStringAttribute('local_tloc_list_color');
  }
  public set localTlocListColor(value: string) {
    this._localTlocListColor = value;
  }
  public resetLocalTlocListColor() {
    this._localTlocListColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTlocListColorInput() {
    return this._localTlocListColor;
  }

  // local_tloc_list_encap - computed: false, optional: true, required: false
  private _localTlocListEncap?: string; 
  public get localTlocListEncap() {
    return this.getStringAttribute('local_tloc_list_encap');
  }
  public set localTlocListEncap(value: string) {
    this._localTlocListEncap = value;
  }
  public resetLocalTlocListEncap() {
    this._localTlocListEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTlocListEncapInput() {
    return this._localTlocListEncap;
  }

  // local_tloc_list_restrict - computed: false, optional: true, required: false
  private _localTlocListRestrict?: boolean | cdktf.IResolvable; 
  public get localTlocListRestrict() {
    return this.getBooleanAttribute('local_tloc_list_restrict');
  }
  public set localTlocListRestrict(value: boolean | cdktf.IResolvable) {
    this._localTlocListRestrict = value;
  }
  public resetLocalTlocListRestrict() {
    this._localTlocListRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTlocListRestrictInput() {
    return this._localTlocListRestrict;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
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

  // policer_list_id - computed: false, optional: true, required: false
  private _policerListId?: string; 
  public get policerListId() {
    return this.getStringAttribute('policer_list_id');
  }
  public set policerListId(value: string) {
    this._policerListId = value;
  }
  public resetPolicerListId() {
    this._policerListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerListIdInput() {
    return this._policerListId;
  }

  // policer_list_version - computed: false, optional: true, required: false
  private _policerListVersion?: number; 
  public get policerListVersion() {
    return this.getNumberAttribute('policer_list_version');
  }
  public set policerListVersion(value: number) {
    this._policerListVersion = value;
  }
  public resetPolicerListVersion() {
    this._policerListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerListVersionInput() {
    return this._policerListVersion;
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

  // preferred_color_group_list_version - computed: false, optional: true, required: false
  private _preferredColorGroupListVersion?: number; 
  public get preferredColorGroupListVersion() {
    return this.getNumberAttribute('preferred_color_group_list_version');
  }
  public set preferredColorGroupListVersion(value: number) {
    this._preferredColorGroupListVersion = value;
  }
  public resetPreferredColorGroupListVersion() {
    this._preferredColorGroupListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredColorGroupListVersionInput() {
    return this._preferredColorGroupListVersion;
  }

  // service_tloc_color - computed: false, optional: true, required: false
  private _serviceTlocColor?: string; 
  public get serviceTlocColor() {
    return this.getStringAttribute('service_tloc_color');
  }
  public set serviceTlocColor(value: string) {
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

  // service_tloc_list_version - computed: false, optional: true, required: false
  private _serviceTlocListVersion?: number; 
  public get serviceTlocListVersion() {
    return this.getNumberAttribute('service_tloc_list_version');
  }
  public set serviceTlocListVersion(value: number) {
    this._serviceTlocListVersion = value;
  }
  public resetServiceTlocListVersion() {
    this._serviceTlocListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlocListVersionInput() {
    return this._serviceTlocListVersion;
  }

  // service_tloc_local - computed: false, optional: true, required: false
  private _serviceTlocLocal?: boolean | cdktf.IResolvable; 
  public get serviceTlocLocal() {
    return this.getBooleanAttribute('service_tloc_local');
  }
  public set serviceTlocLocal(value: boolean | cdktf.IResolvable) {
    this._serviceTlocLocal = value;
  }
  public resetServiceTlocLocal() {
    this._serviceTlocLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlocLocalInput() {
    return this._serviceTlocLocal;
  }

  // service_tloc_restrict - computed: false, optional: true, required: false
  private _serviceTlocRestrict?: boolean | cdktf.IResolvable; 
  public get serviceTlocRestrict() {
    return this.getBooleanAttribute('service_tloc_restrict');
  }
  public set serviceTlocRestrict(value: boolean | cdktf.IResolvable) {
    this._serviceTlocRestrict = value;
  }
  public resetServiceTlocRestrict() {
    this._serviceTlocRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTlocRestrictInput() {
    return this._serviceTlocRestrict;
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

  // service_vpn_id - computed: false, optional: true, required: false
  private _serviceVpnId?: number; 
  public get serviceVpnId() {
    return this.getNumberAttribute('service_vpn_id');
  }
  public set serviceVpnId(value: number) {
    this._serviceVpnId = value;
  }
  public resetServiceVpnId() {
    this._serviceVpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVpnIdInput() {
    return this._serviceVpnId;
  }

  // tloc_color - computed: false, optional: true, required: false
  private _tlocColor?: string; 
  public get tlocColor() {
    return this.getStringAttribute('tloc_color');
  }
  public set tlocColor(value: string) {
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

  // tloc_list_version - computed: false, optional: true, required: false
  private _tlocListVersion?: number; 
  public get tlocListVersion() {
    return this.getNumberAttribute('tloc_list_version');
  }
  public set tlocListVersion(value: number) {
    this._tlocListVersion = value;
  }
  public resetTlocListVersion() {
    this._tlocListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocListVersionInput() {
    return this._tlocListVersion;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }
}

export class TrafficDataPolicyDefinitionSequencesActionEntriesSetParametersList extends cdktf.ComplexList {
  public internalValue? : TrafficDataPolicyDefinitionSequencesActionEntriesSetParameters[] | cdktf.IResolvable

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
  public get(index: number): TrafficDataPolicyDefinitionSequencesActionEntriesSetParametersOutputReference {
    return new TrafficDataPolicyDefinitionSequencesActionEntriesSetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficDataPolicyDefinitionSequencesActionEntries {
  /**
  * Enable cflowd, Attribute conditional on `type` being equal to `cflowd`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#cflowd TrafficDataPolicyDefinition#cflowd}
  */
  readonly cflowd?: boolean | cdktf.IResolvable;
  /**
  * Counter name, Attribute conditional on `type` being equal to `count`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#counter TrafficDataPolicyDefinition#counter}
  */
  readonly counter?: string;
  /**
  * Enable DRE optimization, Attribute conditional on `type` being equal to `dreOptimization`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#dre_optimization TrafficDataPolicyDefinition#dre_optimization}
  */
  readonly dreOptimization?: boolean | cdktf.IResolvable;
  /**
  * Enable fallback to routing, Attribute conditional on `type` being equal to `fallbackToRouting`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#fallback_to_routing TrafficDataPolicyDefinition#fallback_to_routing}
  */
  readonly fallbackToRouting?: boolean | cdktf.IResolvable;
  /**
  * Enable logging, Attribute conditional on `type` being equal to `log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#log TrafficDataPolicyDefinition#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Loss correction, Attribute conditional on `type` being equal to `lossProtect`
  *   - Choices: `fecAdaptive`, `fecAlways`, `packetDuplication`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#loss_correction TrafficDataPolicyDefinition#loss_correction}
  */
  readonly lossCorrection?: string;
  /**
  * Loss correction FEC, Attribute conditional on `type` being equal to `lossProtectFec`
  *   - Choices: `fecAdaptive`, `fecAlways`, `packetDuplication`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#loss_correction_fec TrafficDataPolicyDefinition#loss_correction_fec}
  */
  readonly lossCorrectionFec?: string;
  /**
  * Loss correction FEC threshold, Attribute conditional on `type` being equal to `lossProtectFec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#loss_correction_fec_threshold TrafficDataPolicyDefinition#loss_correction_fec_threshold}
  */
  readonly lossCorrectionFecThreshold?: string;
  /**
  * Loss correction packet duplication, Attribute conditional on `type` being equal to `lossProtectPktDup`
  *   - Choices: `fecAdaptive`, `fecAlways`, `packetDuplication`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#loss_correction_packet_duplication TrafficDataPolicyDefinition#loss_correction_packet_duplication}
  */
  readonly lossCorrectionPacketDuplication?: string;
  /**
  * List of NAT parameters, Attribute conditional on `type` being equal to `nat`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#nat_parameters TrafficDataPolicyDefinition#nat_parameters}
  */
  readonly natParameters?: TrafficDataPolicyDefinitionSequencesActionEntriesNatParameters[] | cdktf.IResolvable;
  /**
  * NAT pool, Attribute conditional on `type` being equal to `nat`
  *   - Choices: `pool`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#nat_pool TrafficDataPolicyDefinition#nat_pool}
  */
  readonly natPool?: string;
  /**
  * NAT pool ID, Attribute conditional on `type` being equal to `nat`
  *   - Range: `1`-`31`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#nat_pool_id TrafficDataPolicyDefinition#nat_pool_id}
  */
  readonly natPoolId?: number;
  /**
  * Redirect DNS, Attribute conditional on `type` being equal to `redirectDns`
  *   - Choices: `dnsType`, `ipAddress`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#redirect_dns TrafficDataPolicyDefinition#redirect_dns}
  */
  readonly redirectDns?: string;
  /**
  * Redirect DNS IP address, Attribute conditional on `redirect_dns` being equal to `ipAddress`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#redirect_dns_address TrafficDataPolicyDefinition#redirect_dns_address}
  */
  readonly redirectDnsAddress?: string;
  /**
  * Redirect DNS type, Attribute conditional on `redirect_dns` being equal to `dnsType`
  *   - Choices: `host`, `umbrella`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#redirect_dns_type TrafficDataPolicyDefinition#redirect_dns_type}
  */
  readonly redirectDnsType?: string;
  /**
  * Enable secure internet gateway, Attribute conditional on `type` being equal to `sig`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#secure_internet_gateway TrafficDataPolicyDefinition#secure_internet_gateway}
  */
  readonly secureInternetGateway?: boolean | cdktf.IResolvable;
  /**
  * Service node group, Attribute conditional on `type` being equal to `serviceNodeGroup`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#service_node_group TrafficDataPolicyDefinition#service_node_group}
  */
  readonly serviceNodeGroup?: string;
  /**
  * List of set parameters, Attribute conditional on `type` being equal to `set`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#set_parameters TrafficDataPolicyDefinition#set_parameters}
  */
  readonly setParameters?: TrafficDataPolicyDefinitionSequencesActionEntriesSetParameters[] | cdktf.IResolvable;
  /**
  * Enable TCP optimization, Attribute conditional on `type` being equal to `tcpOptimization`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#tcp_optimization TrafficDataPolicyDefinition#tcp_optimization}
  */
  readonly tcpOptimization?: boolean | cdktf.IResolvable;
  /**
  * Type of action entry
  *   - Choices: `cflowd`, `count`, `dreOptimization`, `fallbackToRouting`, `log`, `lossProtect`, `lossProtectPktDup`, `lossProtectFec`, `nat`, `redirectDns`, `serviceNodeGroup`, `set`, `sig`, `tcpOptimization`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#type TrafficDataPolicyDefinition#type}
  */
  readonly type: string;
}

export function trafficDataPolicyDefinitionSequencesActionEntriesToTerraform(struct?: TrafficDataPolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cflowd: cdktf.booleanToTerraform(struct!.cflowd),
    counter: cdktf.stringToTerraform(struct!.counter),
    dre_optimization: cdktf.booleanToTerraform(struct!.dreOptimization),
    fallback_to_routing: cdktf.booleanToTerraform(struct!.fallbackToRouting),
    log: cdktf.booleanToTerraform(struct!.log),
    loss_correction: cdktf.stringToTerraform(struct!.lossCorrection),
    loss_correction_fec: cdktf.stringToTerraform(struct!.lossCorrectionFec),
    loss_correction_fec_threshold: cdktf.stringToTerraform(struct!.lossCorrectionFecThreshold),
    loss_correction_packet_duplication: cdktf.stringToTerraform(struct!.lossCorrectionPacketDuplication),
    nat_parameters: cdktf.listMapper(trafficDataPolicyDefinitionSequencesActionEntriesNatParametersToTerraform, false)(struct!.natParameters),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
    nat_pool_id: cdktf.numberToTerraform(struct!.natPoolId),
    redirect_dns: cdktf.stringToTerraform(struct!.redirectDns),
    redirect_dns_address: cdktf.stringToTerraform(struct!.redirectDnsAddress),
    redirect_dns_type: cdktf.stringToTerraform(struct!.redirectDnsType),
    secure_internet_gateway: cdktf.booleanToTerraform(struct!.secureInternetGateway),
    service_node_group: cdktf.stringToTerraform(struct!.serviceNodeGroup),
    set_parameters: cdktf.listMapper(trafficDataPolicyDefinitionSequencesActionEntriesSetParametersToTerraform, false)(struct!.setParameters),
    tcp_optimization: cdktf.booleanToTerraform(struct!.tcpOptimization),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function trafficDataPolicyDefinitionSequencesActionEntriesToHclTerraform(struct?: TrafficDataPolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cflowd: {
      value: cdktf.booleanToHclTerraform(struct!.cflowd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    counter: {
      value: cdktf.stringToHclTerraform(struct!.counter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dre_optimization: {
      value: cdktf.booleanToHclTerraform(struct!.dreOptimization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    loss_correction: {
      value: cdktf.stringToHclTerraform(struct!.lossCorrection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loss_correction_fec: {
      value: cdktf.stringToHclTerraform(struct!.lossCorrectionFec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loss_correction_fec_threshold: {
      value: cdktf.stringToHclTerraform(struct!.lossCorrectionFecThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loss_correction_packet_duplication: {
      value: cdktf.stringToHclTerraform(struct!.lossCorrectionPacketDuplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_parameters: {
      value: cdktf.listMapperHcl(trafficDataPolicyDefinitionSequencesActionEntriesNatParametersToHclTerraform, false)(struct!.natParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TrafficDataPolicyDefinitionSequencesActionEntriesNatParametersList",
    },
    nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_pool_id: {
      value: cdktf.numberToHclTerraform(struct!.natPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_dns: {
      value: cdktf.stringToHclTerraform(struct!.redirectDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_dns_address: {
      value: cdktf.stringToHclTerraform(struct!.redirectDnsAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_dns_type: {
      value: cdktf.stringToHclTerraform(struct!.redirectDnsType),
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
    service_node_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceNodeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_parameters: {
      value: cdktf.listMapperHcl(trafficDataPolicyDefinitionSequencesActionEntriesSetParametersToHclTerraform, false)(struct!.setParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TrafficDataPolicyDefinitionSequencesActionEntriesSetParametersList",
    },
    tcp_optimization: {
      value: cdktf.booleanToHclTerraform(struct!.tcpOptimization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficDataPolicyDefinitionSequencesActionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficDataPolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cflowd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cflowd = this._cflowd;
    }
    if (this._counter !== undefined) {
      hasAnyValues = true;
      internalValueResult.counter = this._counter;
    }
    if (this._dreOptimization !== undefined) {
      hasAnyValues = true;
      internalValueResult.dreOptimization = this._dreOptimization;
    }
    if (this._fallbackToRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackToRouting = this._fallbackToRouting;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._lossCorrection !== undefined) {
      hasAnyValues = true;
      internalValueResult.lossCorrection = this._lossCorrection;
    }
    if (this._lossCorrectionFec !== undefined) {
      hasAnyValues = true;
      internalValueResult.lossCorrectionFec = this._lossCorrectionFec;
    }
    if (this._lossCorrectionFecThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.lossCorrectionFecThreshold = this._lossCorrectionFecThreshold;
    }
    if (this._lossCorrectionPacketDuplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.lossCorrectionPacketDuplication = this._lossCorrectionPacketDuplication;
    }
    if (this._natParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natParameters = this._natParameters?.internalValue;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    if (this._natPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolId = this._natPoolId;
    }
    if (this._redirectDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectDns = this._redirectDns;
    }
    if (this._redirectDnsAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectDnsAddress = this._redirectDnsAddress;
    }
    if (this._redirectDnsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectDnsType = this._redirectDnsType;
    }
    if (this._secureInternetGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureInternetGateway = this._secureInternetGateway;
    }
    if (this._serviceNodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNodeGroup = this._serviceNodeGroup;
    }
    if (this._setParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setParameters = this._setParameters?.internalValue;
    }
    if (this._tcpOptimization !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOptimization = this._tcpOptimization;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficDataPolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cflowd = undefined;
      this._counter = undefined;
      this._dreOptimization = undefined;
      this._fallbackToRouting = undefined;
      this._log = undefined;
      this._lossCorrection = undefined;
      this._lossCorrectionFec = undefined;
      this._lossCorrectionFecThreshold = undefined;
      this._lossCorrectionPacketDuplication = undefined;
      this._natParameters.internalValue = undefined;
      this._natPool = undefined;
      this._natPoolId = undefined;
      this._redirectDns = undefined;
      this._redirectDnsAddress = undefined;
      this._redirectDnsType = undefined;
      this._secureInternetGateway = undefined;
      this._serviceNodeGroup = undefined;
      this._setParameters.internalValue = undefined;
      this._tcpOptimization = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cflowd = value.cflowd;
      this._counter = value.counter;
      this._dreOptimization = value.dreOptimization;
      this._fallbackToRouting = value.fallbackToRouting;
      this._log = value.log;
      this._lossCorrection = value.lossCorrection;
      this._lossCorrectionFec = value.lossCorrectionFec;
      this._lossCorrectionFecThreshold = value.lossCorrectionFecThreshold;
      this._lossCorrectionPacketDuplication = value.lossCorrectionPacketDuplication;
      this._natParameters.internalValue = value.natParameters;
      this._natPool = value.natPool;
      this._natPoolId = value.natPoolId;
      this._redirectDns = value.redirectDns;
      this._redirectDnsAddress = value.redirectDnsAddress;
      this._redirectDnsType = value.redirectDnsType;
      this._secureInternetGateway = value.secureInternetGateway;
      this._serviceNodeGroup = value.serviceNodeGroup;
      this._setParameters.internalValue = value.setParameters;
      this._tcpOptimization = value.tcpOptimization;
      this._type = value.type;
    }
  }

  // cflowd - computed: false, optional: true, required: false
  private _cflowd?: boolean | cdktf.IResolvable; 
  public get cflowd() {
    return this.getBooleanAttribute('cflowd');
  }
  public set cflowd(value: boolean | cdktf.IResolvable) {
    this._cflowd = value;
  }
  public resetCflowd() {
    this._cflowd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cflowdInput() {
    return this._cflowd;
  }

  // counter - computed: false, optional: true, required: false
  private _counter?: string; 
  public get counter() {
    return this.getStringAttribute('counter');
  }
  public set counter(value: string) {
    this._counter = value;
  }
  public resetCounter() {
    this._counter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterInput() {
    return this._counter;
  }

  // dre_optimization - computed: false, optional: true, required: false
  private _dreOptimization?: boolean | cdktf.IResolvable; 
  public get dreOptimization() {
    return this.getBooleanAttribute('dre_optimization');
  }
  public set dreOptimization(value: boolean | cdktf.IResolvable) {
    this._dreOptimization = value;
  }
  public resetDreOptimization() {
    this._dreOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dreOptimizationInput() {
    return this._dreOptimization;
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

  // loss_correction - computed: false, optional: true, required: false
  private _lossCorrection?: string; 
  public get lossCorrection() {
    return this.getStringAttribute('loss_correction');
  }
  public set lossCorrection(value: string) {
    this._lossCorrection = value;
  }
  public resetLossCorrection() {
    this._lossCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossCorrectionInput() {
    return this._lossCorrection;
  }

  // loss_correction_fec - computed: false, optional: true, required: false
  private _lossCorrectionFec?: string; 
  public get lossCorrectionFec() {
    return this.getStringAttribute('loss_correction_fec');
  }
  public set lossCorrectionFec(value: string) {
    this._lossCorrectionFec = value;
  }
  public resetLossCorrectionFec() {
    this._lossCorrectionFec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossCorrectionFecInput() {
    return this._lossCorrectionFec;
  }

  // loss_correction_fec_threshold - computed: false, optional: true, required: false
  private _lossCorrectionFecThreshold?: string; 
  public get lossCorrectionFecThreshold() {
    return this.getStringAttribute('loss_correction_fec_threshold');
  }
  public set lossCorrectionFecThreshold(value: string) {
    this._lossCorrectionFecThreshold = value;
  }
  public resetLossCorrectionFecThreshold() {
    this._lossCorrectionFecThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossCorrectionFecThresholdInput() {
    return this._lossCorrectionFecThreshold;
  }

  // loss_correction_packet_duplication - computed: false, optional: true, required: false
  private _lossCorrectionPacketDuplication?: string; 
  public get lossCorrectionPacketDuplication() {
    return this.getStringAttribute('loss_correction_packet_duplication');
  }
  public set lossCorrectionPacketDuplication(value: string) {
    this._lossCorrectionPacketDuplication = value;
  }
  public resetLossCorrectionPacketDuplication() {
    this._lossCorrectionPacketDuplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossCorrectionPacketDuplicationInput() {
    return this._lossCorrectionPacketDuplication;
  }

  // nat_parameters - computed: false, optional: true, required: false
  private _natParameters = new TrafficDataPolicyDefinitionSequencesActionEntriesNatParametersList(this, "nat_parameters", false);
  public get natParameters() {
    return this._natParameters;
  }
  public putNatParameters(value: TrafficDataPolicyDefinitionSequencesActionEntriesNatParameters[] | cdktf.IResolvable) {
    this._natParameters.internalValue = value;
  }
  public resetNatParameters() {
    this._natParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natParametersInput() {
    return this._natParameters.internalValue;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // nat_pool_id - computed: false, optional: true, required: false
  private _natPoolId?: number; 
  public get natPoolId() {
    return this.getNumberAttribute('nat_pool_id');
  }
  public set natPoolId(value: number) {
    this._natPoolId = value;
  }
  public resetNatPoolId() {
    this._natPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolIdInput() {
    return this._natPoolId;
  }

  // redirect_dns - computed: false, optional: true, required: false
  private _redirectDns?: string; 
  public get redirectDns() {
    return this.getStringAttribute('redirect_dns');
  }
  public set redirectDns(value: string) {
    this._redirectDns = value;
  }
  public resetRedirectDns() {
    this._redirectDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectDnsInput() {
    return this._redirectDns;
  }

  // redirect_dns_address - computed: false, optional: true, required: false
  private _redirectDnsAddress?: string; 
  public get redirectDnsAddress() {
    return this.getStringAttribute('redirect_dns_address');
  }
  public set redirectDnsAddress(value: string) {
    this._redirectDnsAddress = value;
  }
  public resetRedirectDnsAddress() {
    this._redirectDnsAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectDnsAddressInput() {
    return this._redirectDnsAddress;
  }

  // redirect_dns_type - computed: false, optional: true, required: false
  private _redirectDnsType?: string; 
  public get redirectDnsType() {
    return this.getStringAttribute('redirect_dns_type');
  }
  public set redirectDnsType(value: string) {
    this._redirectDnsType = value;
  }
  public resetRedirectDnsType() {
    this._redirectDnsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectDnsTypeInput() {
    return this._redirectDnsType;
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

  // service_node_group - computed: false, optional: true, required: false
  private _serviceNodeGroup?: string; 
  public get serviceNodeGroup() {
    return this.getStringAttribute('service_node_group');
  }
  public set serviceNodeGroup(value: string) {
    this._serviceNodeGroup = value;
  }
  public resetServiceNodeGroup() {
    this._serviceNodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodeGroupInput() {
    return this._serviceNodeGroup;
  }

  // set_parameters - computed: false, optional: true, required: false
  private _setParameters = new TrafficDataPolicyDefinitionSequencesActionEntriesSetParametersList(this, "set_parameters", false);
  public get setParameters() {
    return this._setParameters;
  }
  public putSetParameters(value: TrafficDataPolicyDefinitionSequencesActionEntriesSetParameters[] | cdktf.IResolvable) {
    this._setParameters.internalValue = value;
  }
  public resetSetParameters() {
    this._setParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setParametersInput() {
    return this._setParameters.internalValue;
  }

  // tcp_optimization - computed: false, optional: true, required: false
  private _tcpOptimization?: boolean | cdktf.IResolvable; 
  public get tcpOptimization() {
    return this.getBooleanAttribute('tcp_optimization');
  }
  public set tcpOptimization(value: boolean | cdktf.IResolvable) {
    this._tcpOptimization = value;
  }
  public resetTcpOptimization() {
    this._tcpOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOptimizationInput() {
    return this._tcpOptimization;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class TrafficDataPolicyDefinitionSequencesActionEntriesList extends cdktf.ComplexList {
  public internalValue? : TrafficDataPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable

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
  public get(index: number): TrafficDataPolicyDefinitionSequencesActionEntriesOutputReference {
    return new TrafficDataPolicyDefinitionSequencesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficDataPolicyDefinitionSequencesMatchEntries {
  /**
  * Application list ID, Attribute conditional on `type` being equal to `appList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#application_list_id TrafficDataPolicyDefinition#application_list_id}
  */
  readonly applicationListId?: string;
  /**
  * Application list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#application_list_version TrafficDataPolicyDefinition#application_list_version}
  */
  readonly applicationListVersion?: number;
  /**
  * Destination Data Prefix list ID, Attribute conditional on `type` being equal to `destinationDataPrefixList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#destination_data_prefix_list_id TrafficDataPolicyDefinition#destination_data_prefix_list_id}
  */
  readonly destinationDataPrefixListId?: string;
  /**
  * Destination Data Prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#destination_data_prefix_list_version TrafficDataPolicyDefinition#destination_data_prefix_list_version}
  */
  readonly destinationDataPrefixListVersion?: number;
  /**
  * Destination IP, Attribute conditional on `type` being equal to `destinationIp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#destination_ip TrafficDataPolicyDefinition#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Destination port, 0-65535 (Single value, range or multiple values separated by spaces), Attribute conditional on `type` being equal to `destinationPort`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#destination_port TrafficDataPolicyDefinition#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Destination region, Attribute conditional on `type` being equal to `destinationRegion`
  *   - Choices: `primary-region`, `secondary-region`, `other-region`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#destination_region TrafficDataPolicyDefinition#destination_region}
  */
  readonly destinationRegion?: string;
  /**
  * DNS request or response, Attribute conditional on `type` being equal to `dns`
  *   - Choices: `request`, `response`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#dns TrafficDataPolicyDefinition#dns}
  */
  readonly dns?: string;
  /**
  * DNS Application list ID, Attribute conditional on `type` being equal to `dnsAppList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#dns_application_list_id TrafficDataPolicyDefinition#dns_application_list_id}
  */
  readonly dnsApplicationListId?: string;
  /**
  * DNS Application list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#dns_application_list_version TrafficDataPolicyDefinition#dns_application_list_version}
  */
  readonly dnsApplicationListVersion?: number;
  /**
  * DSCP value, Attribute conditional on `type` being equal to `dscp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#dscp TrafficDataPolicyDefinition#dscp}
  */
  readonly dscp?: string;
  /**
  * ICMP Message, Attribute conditional on `type` being equal to `icmpMessage`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#icmp_message TrafficDataPolicyDefinition#icmp_message}
  */
  readonly icmpMessage?: string;
  /**
  * Packet length, Attribute conditional on `type` being equal to `packetLength`
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#packet_length TrafficDataPolicyDefinition#packet_length}
  */
  readonly packetLength?: number;
  /**
  * PLP, Attribute conditional on `type` being equal to `plp`
  *   - Choices: `low`, `high`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#plp TrafficDataPolicyDefinition#plp}
  */
  readonly plp?: string;
  /**
  * IP Protocol, 0-255 (Single value or multiple values separated by spaces), Attribute conditional on `type` being equal to `protocol`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#protocol TrafficDataPolicyDefinition#protocol}
  */
  readonly protocol?: string;
  /**
  * Source Data Prefix list ID, Attribute conditional on `type` being equal to `sourceDataPrefixList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#source_data_prefix_list_id TrafficDataPolicyDefinition#source_data_prefix_list_id}
  */
  readonly sourceDataPrefixListId?: string;
  /**
  * Source Data Prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#source_data_prefix_list_version TrafficDataPolicyDefinition#source_data_prefix_list_version}
  */
  readonly sourceDataPrefixListVersion?: number;
  /**
  * Source IP, Attribute conditional on `type` being equal to `sourceIp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#source_ip TrafficDataPolicyDefinition#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Source port, 0-65535 (Single value, range or multiple values separated by spaces), Attribute conditional on `type` being equal to `sourcePort`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#source_port TrafficDataPolicyDefinition#source_port}
  */
  readonly sourcePort?: string;
  /**
  * TCP flags, Attribute conditional on `type` being equal to `tcp`
  *   - Choices: `syn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#tcp TrafficDataPolicyDefinition#tcp}
  */
  readonly tcp?: string;
  /**
  * Traffic to, Attribute conditional on `type` being equal to `trafficTo`
  *   - Choices: `access`, `core`, `service`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#traffic_to TrafficDataPolicyDefinition#traffic_to}
  */
  readonly trafficTo?: string;
  /**
  * Type of match entry
  *   - Choices: `appList`, `dnsAppList`, `dns`, `dscp`, `packetLength`, `plp`, `protocol`, `sourceDataPrefixList`, `sourceIp`, `sourcePort`, `destinationDataPrefixList`, `destinationIp`, `destinationRegion`, `destinationPort`, `tcp`, `trafficTo`, `icmpMessage`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#type TrafficDataPolicyDefinition#type}
  */
  readonly type: string;
}

export function trafficDataPolicyDefinitionSequencesMatchEntriesToTerraform(struct?: TrafficDataPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_list_id: cdktf.stringToTerraform(struct!.applicationListId),
    application_list_version: cdktf.numberToTerraform(struct!.applicationListVersion),
    destination_data_prefix_list_id: cdktf.stringToTerraform(struct!.destinationDataPrefixListId),
    destination_data_prefix_list_version: cdktf.numberToTerraform(struct!.destinationDataPrefixListVersion),
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    destination_region: cdktf.stringToTerraform(struct!.destinationRegion),
    dns: cdktf.stringToTerraform(struct!.dns),
    dns_application_list_id: cdktf.stringToTerraform(struct!.dnsApplicationListId),
    dns_application_list_version: cdktf.numberToTerraform(struct!.dnsApplicationListVersion),
    dscp: cdktf.stringToTerraform(struct!.dscp),
    icmp_message: cdktf.stringToTerraform(struct!.icmpMessage),
    packet_length: cdktf.numberToTerraform(struct!.packetLength),
    plp: cdktf.stringToTerraform(struct!.plp),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_data_prefix_list_id: cdktf.stringToTerraform(struct!.sourceDataPrefixListId),
    source_data_prefix_list_version: cdktf.numberToTerraform(struct!.sourceDataPrefixListVersion),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    traffic_to: cdktf.stringToTerraform(struct!.trafficTo),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function trafficDataPolicyDefinitionSequencesMatchEntriesToHclTerraform(struct?: TrafficDataPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
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
    application_list_version: {
      value: cdktf.numberToHclTerraform(struct!.applicationListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_data_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.destinationDataPrefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_ip: {
      value: cdktf.stringToHclTerraform(struct!.destinationIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    dns_application_list_version: {
      value: cdktf.numberToHclTerraform(struct!.dnsApplicationListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp: {
      value: cdktf.stringToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_message: {
      value: cdktf.stringToHclTerraform(struct!.icmpMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_length: {
      value: cdktf.numberToHclTerraform(struct!.packetLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    plp: {
      value: cdktf.stringToHclTerraform(struct!.plp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.sourceDataPrefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficDataPolicyDefinitionSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficDataPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationListId = this._applicationListId;
    }
    if (this._applicationListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationListVersion = this._applicationListVersion;
    }
    if (this._destinationDataPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataPrefixListId = this._destinationDataPrefixListId;
    }
    if (this._destinationDataPrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataPrefixListVersion = this._destinationDataPrefixListVersion;
    }
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
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
    if (this._dnsApplicationListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsApplicationListVersion = this._dnsApplicationListVersion;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._icmpMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpMessage = this._icmpMessage;
    }
    if (this._packetLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLength = this._packetLength;
    }
    if (this._plp !== undefined) {
      hasAnyValues = true;
      internalValueResult.plp = this._plp;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceDataPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataPrefixListId = this._sourceDataPrefixListId;
    }
    if (this._sourceDataPrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataPrefixListVersion = this._sourceDataPrefixListVersion;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._trafficTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficTo = this._trafficTo;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficDataPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationListId = undefined;
      this._applicationListVersion = undefined;
      this._destinationDataPrefixListId = undefined;
      this._destinationDataPrefixListVersion = undefined;
      this._destinationIp = undefined;
      this._destinationPort = undefined;
      this._destinationRegion = undefined;
      this._dns = undefined;
      this._dnsApplicationListId = undefined;
      this._dnsApplicationListVersion = undefined;
      this._dscp = undefined;
      this._icmpMessage = undefined;
      this._packetLength = undefined;
      this._plp = undefined;
      this._protocol = undefined;
      this._sourceDataPrefixListId = undefined;
      this._sourceDataPrefixListVersion = undefined;
      this._sourceIp = undefined;
      this._sourcePort = undefined;
      this._tcp = undefined;
      this._trafficTo = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationListId = value.applicationListId;
      this._applicationListVersion = value.applicationListVersion;
      this._destinationDataPrefixListId = value.destinationDataPrefixListId;
      this._destinationDataPrefixListVersion = value.destinationDataPrefixListVersion;
      this._destinationIp = value.destinationIp;
      this._destinationPort = value.destinationPort;
      this._destinationRegion = value.destinationRegion;
      this._dns = value.dns;
      this._dnsApplicationListId = value.dnsApplicationListId;
      this._dnsApplicationListVersion = value.dnsApplicationListVersion;
      this._dscp = value.dscp;
      this._icmpMessage = value.icmpMessage;
      this._packetLength = value.packetLength;
      this._plp = value.plp;
      this._protocol = value.protocol;
      this._sourceDataPrefixListId = value.sourceDataPrefixListId;
      this._sourceDataPrefixListVersion = value.sourceDataPrefixListVersion;
      this._sourceIp = value.sourceIp;
      this._sourcePort = value.sourcePort;
      this._tcp = value.tcp;
      this._trafficTo = value.trafficTo;
      this._type = value.type;
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

  // application_list_version - computed: false, optional: true, required: false
  private _applicationListVersion?: number; 
  public get applicationListVersion() {
    return this.getNumberAttribute('application_list_version');
  }
  public set applicationListVersion(value: number) {
    this._applicationListVersion = value;
  }
  public resetApplicationListVersion() {
    this._applicationListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListVersionInput() {
    return this._applicationListVersion;
  }

  // destination_data_prefix_list_id - computed: false, optional: true, required: false
  private _destinationDataPrefixListId?: string; 
  public get destinationDataPrefixListId() {
    return this.getStringAttribute('destination_data_prefix_list_id');
  }
  public set destinationDataPrefixListId(value: string) {
    this._destinationDataPrefixListId = value;
  }
  public resetDestinationDataPrefixListId() {
    this._destinationDataPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataPrefixListIdInput() {
    return this._destinationDataPrefixListId;
  }

  // destination_data_prefix_list_version - computed: false, optional: true, required: false
  private _destinationDataPrefixListVersion?: number; 
  public get destinationDataPrefixListVersion() {
    return this.getNumberAttribute('destination_data_prefix_list_version');
  }
  public set destinationDataPrefixListVersion(value: number) {
    this._destinationDataPrefixListVersion = value;
  }
  public resetDestinationDataPrefixListVersion() {
    this._destinationDataPrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataPrefixListVersionInput() {
    return this._destinationDataPrefixListVersion;
  }

  // destination_ip - computed: false, optional: true, required: false
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
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

  // dns_application_list_version - computed: false, optional: true, required: false
  private _dnsApplicationListVersion?: number; 
  public get dnsApplicationListVersion() {
    return this.getNumberAttribute('dns_application_list_version');
  }
  public set dnsApplicationListVersion(value: number) {
    this._dnsApplicationListVersion = value;
  }
  public resetDnsApplicationListVersion() {
    this._dnsApplicationListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsApplicationListVersionInput() {
    return this._dnsApplicationListVersion;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // icmp_message - computed: false, optional: true, required: false
  private _icmpMessage?: string; 
  public get icmpMessage() {
    return this.getStringAttribute('icmp_message');
  }
  public set icmpMessage(value: string) {
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
  private _packetLength?: number; 
  public get packetLength() {
    return this.getNumberAttribute('packet_length');
  }
  public set packetLength(value: number) {
    this._packetLength = value;
  }
  public resetPacketLength() {
    this._packetLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthInput() {
    return this._packetLength;
  }

  // plp - computed: false, optional: true, required: false
  private _plp?: string; 
  public get plp() {
    return this.getStringAttribute('plp');
  }
  public set plp(value: string) {
    this._plp = value;
  }
  public resetPlp() {
    this._plp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plpInput() {
    return this._plp;
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

  // source_data_prefix_list_id - computed: false, optional: true, required: false
  private _sourceDataPrefixListId?: string; 
  public get sourceDataPrefixListId() {
    return this.getStringAttribute('source_data_prefix_list_id');
  }
  public set sourceDataPrefixListId(value: string) {
    this._sourceDataPrefixListId = value;
  }
  public resetSourceDataPrefixListId() {
    this._sourceDataPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataPrefixListIdInput() {
    return this._sourceDataPrefixListId;
  }

  // source_data_prefix_list_version - computed: false, optional: true, required: false
  private _sourceDataPrefixListVersion?: number; 
  public get sourceDataPrefixListVersion() {
    return this.getNumberAttribute('source_data_prefix_list_version');
  }
  public set sourceDataPrefixListVersion(value: number) {
    this._sourceDataPrefixListVersion = value;
  }
  public resetSourceDataPrefixListVersion() {
    this._sourceDataPrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataPrefixListVersionInput() {
    return this._sourceDataPrefixListVersion;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class TrafficDataPolicyDefinitionSequencesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : TrafficDataPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): TrafficDataPolicyDefinitionSequencesMatchEntriesOutputReference {
    return new TrafficDataPolicyDefinitionSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficDataPolicyDefinitionSequences {
  /**
  * List of action entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#action_entries TrafficDataPolicyDefinition#action_entries}
  */
  readonly actionEntries?: TrafficDataPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable;
  /**
  * Base action, either `accept` or `drop`
  *   - Choices: `accept`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#base_action TrafficDataPolicyDefinition#base_action}
  */
  readonly baseAction?: string;
  /**
  * Sequence ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#id TrafficDataPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Sequence IP type, either `ipv4`, `ipv6` or `all`
  *   - Choices: `ipv4`, `ipv6`, `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#ip_type TrafficDataPolicyDefinition#ip_type}
  */
  readonly ipType?: string;
  /**
  * List of match entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#match_entries TrafficDataPolicyDefinition#match_entries}
  */
  readonly matchEntries?: TrafficDataPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable;
  /**
  * Sequence name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#name TrafficDataPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * Sequence type
  *   - Choices: `applicationFirewall`, `qos`, `serviceChaining`, `trafficEngineering`, `data`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#type TrafficDataPolicyDefinition#type}
  */
  readonly type: string;
}

export function trafficDataPolicyDefinitionSequencesToTerraform(struct?: TrafficDataPolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_entries: cdktf.listMapper(trafficDataPolicyDefinitionSequencesActionEntriesToTerraform, false)(struct!.actionEntries),
    base_action: cdktf.stringToTerraform(struct!.baseAction),
    id: cdktf.numberToTerraform(struct!.id),
    ip_type: cdktf.stringToTerraform(struct!.ipType),
    match_entries: cdktf.listMapper(trafficDataPolicyDefinitionSequencesMatchEntriesToTerraform, false)(struct!.matchEntries),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function trafficDataPolicyDefinitionSequencesToHclTerraform(struct?: TrafficDataPolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_entries: {
      value: cdktf.listMapperHcl(trafficDataPolicyDefinitionSequencesActionEntriesToHclTerraform, false)(struct!.actionEntries),
      isBlock: true,
      type: "set",
      storageClassType: "TrafficDataPolicyDefinitionSequencesActionEntriesList",
    },
    base_action: {
      value: cdktf.stringToHclTerraform(struct!.baseAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_type: {
      value: cdktf.stringToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_entries: {
      value: cdktf.listMapperHcl(trafficDataPolicyDefinitionSequencesMatchEntriesToHclTerraform, false)(struct!.matchEntries),
      isBlock: true,
      type: "set",
      storageClassType: "TrafficDataPolicyDefinitionSequencesMatchEntriesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficDataPolicyDefinitionSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficDataPolicyDefinitionSequences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionEntries = this._actionEntries?.internalValue;
    }
    if (this._baseAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAction = this._baseAction;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    if (this._matchEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntries = this._matchEntries?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficDataPolicyDefinitionSequences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = undefined;
      this._baseAction = undefined;
      this._id = undefined;
      this._ipType = undefined;
      this._matchEntries.internalValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = value.actionEntries;
      this._baseAction = value.baseAction;
      this._id = value.id;
      this._ipType = value.ipType;
      this._matchEntries.internalValue = value.matchEntries;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // action_entries - computed: false, optional: true, required: false
  private _actionEntries = new TrafficDataPolicyDefinitionSequencesActionEntriesList(this, "action_entries", true);
  public get actionEntries() {
    return this._actionEntries;
  }
  public putActionEntries(value: TrafficDataPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable) {
    this._actionEntries.internalValue = value;
  }
  public resetActionEntries() {
    this._actionEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEntriesInput() {
    return this._actionEntries.internalValue;
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

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }

  // match_entries - computed: false, optional: true, required: false
  private _matchEntries = new TrafficDataPolicyDefinitionSequencesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: TrafficDataPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable) {
    this._matchEntries.internalValue = value;
  }
  public resetMatchEntries() {
    this._matchEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntriesInput() {
    return this._matchEntries.internalValue;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class TrafficDataPolicyDefinitionSequencesList extends cdktf.ComplexList {
  public internalValue? : TrafficDataPolicyDefinitionSequences[] | cdktf.IResolvable

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
  public get(index: number): TrafficDataPolicyDefinitionSequencesOutputReference {
    return new TrafficDataPolicyDefinitionSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition sdwan_traffic_data_policy_definition}
*/
export class TrafficDataPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_traffic_data_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficDataPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficDataPolicyDefinition to import
  * @param importFromId The id of the existing TrafficDataPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficDataPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_traffic_data_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/traffic_data_policy_definition sdwan_traffic_data_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficDataPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficDataPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_traffic_data_policy_definition',
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
    this._name = config.name;
    this._sequences.internalValue = config.sequences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

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

  // sequences - computed: false, optional: false, required: true
  private _sequences = new TrafficDataPolicyDefinitionSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: TrafficDataPolicyDefinitionSequences[] | cdktf.IResolvable) {
    this._sequences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencesInput() {
    return this._sequences.internalValue;
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
      default_action: cdktf.stringToTerraform(this._defaultAction),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      sequences: cdktf.listMapper(trafficDataPolicyDefinitionSequencesToTerraform, false)(this._sequences.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequences: {
        value: cdktf.listMapperHcl(trafficDataPolicyDefinitionSequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficDataPolicyDefinitionSequencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
