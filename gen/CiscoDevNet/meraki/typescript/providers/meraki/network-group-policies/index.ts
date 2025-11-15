// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkGroupPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#items NetworkGroupPolicies#items}
  */
  readonly items: NetworkGroupPoliciesItems[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#network_id NetworkGroupPolicies#network_id}
  */
  readonly networkId: string;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#organization_id NetworkGroupPolicies#organization_id}
  */
  readonly organizationId: string;
}
export interface NetworkGroupPoliciesItemsBonjourForwardingRules {
  /**
  * A description for your Bonjour forwarding rule. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#description NetworkGroupPolicies#description}
  */
  readonly description?: string;
  /**
  * A list of Bonjour services. At least one service must be specified. Available services are `All Services`, `AirPlay`, `AFP`, `BitTorrent`, `FTP`, `iChat`, `iTunes`, `Printers`, `Samba`, `Scanners` and `SSH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#services NetworkGroupPolicies#services}
  */
  readonly services: string[];
  /**
  * The ID of the service VLAN. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#vlan_id NetworkGroupPolicies#vlan_id}
  */
  readonly vlanId: string;
}

export function networkGroupPoliciesItemsBonjourForwardingRulesToTerraform(struct?: NetworkGroupPoliciesItemsBonjourForwardingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function networkGroupPoliciesItemsBonjourForwardingRulesToHclTerraform(struct?: NetworkGroupPoliciesItemsBonjourForwardingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkGroupPoliciesItemsBonjourForwardingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkGroupPoliciesItemsBonjourForwardingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkGroupPoliciesItemsBonjourForwardingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._services = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._services = value.services;
      this._vlanId = value.vlanId;
    }
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

  // services - computed: false, optional: false, required: true
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class NetworkGroupPoliciesItemsBonjourForwardingRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkGroupPoliciesItemsBonjourForwardingRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkGroupPoliciesItemsBonjourForwardingRulesOutputReference {
    return new NetworkGroupPoliciesItemsBonjourForwardingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkGroupPoliciesItemsL3FirewallRules {
  /**
  * Description of the rule (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#comment NetworkGroupPolicies#comment}
  */
  readonly comment?: string;
  /**
  * Destination IP address (in IP or CIDR notation), a fully-qualified domain name (FQDN, if your network supports it) or `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#dest_cidr NetworkGroupPolicies#dest_cidr}
  */
  readonly destCidr: string;
  /**
  * Destination port (integer in the range 1-65535), a port range (e.g. 8080-9090), or `any`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#dest_port NetworkGroupPolicies#dest_port}
  */
  readonly destPort?: string;
  /**
  * `allow` or `deny` traffic specified by this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#policy NetworkGroupPolicies#policy}
  */
  readonly policy: string;
  /**
  * The type of protocol (must be `tcp`, `udp`, `icmp`, `icmp6` or `any`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#protocol NetworkGroupPolicies#protocol}
  */
  readonly protocol: string;
}

export function networkGroupPoliciesItemsL3FirewallRulesToTerraform(struct?: NetworkGroupPoliciesItemsL3FirewallRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    dest_cidr: cdktf.stringToTerraform(struct!.destCidr),
    dest_port: cdktf.stringToTerraform(struct!.destPort),
    policy: cdktf.stringToTerraform(struct!.policy),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function networkGroupPoliciesItemsL3FirewallRulesToHclTerraform(struct?: NetworkGroupPoliciesItemsL3FirewallRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_cidr: {
      value: cdktf.stringToHclTerraform(struct!.destCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_port: {
      value: cdktf.stringToHclTerraform(struct!.destPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkGroupPoliciesItemsL3FirewallRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkGroupPoliciesItemsL3FirewallRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._destCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destCidr = this._destCidr;
    }
    if (this._destPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkGroupPoliciesItemsL3FirewallRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._destCidr = undefined;
      this._destPort = undefined;
      this._policy = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._destCidr = value.destCidr;
      this._destPort = value.destPort;
      this._policy = value.policy;
      this._protocol = value.protocol;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dest_cidr - computed: false, optional: false, required: true
  private _destCidr?: string; 
  public get destCidr() {
    return this.getStringAttribute('dest_cidr');
  }
  public set destCidr(value: string) {
    this._destCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destCidrInput() {
    return this._destCidr;
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: string; 
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }
  public set destPort(value: string) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class NetworkGroupPoliciesItemsL3FirewallRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkGroupPoliciesItemsL3FirewallRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkGroupPoliciesItemsL3FirewallRulesOutputReference {
    return new NetworkGroupPoliciesItemsL3FirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkGroupPoliciesItemsL7FirewallRules {
  /**
  * The policy applied to matching traffic. Must be `deny`.
  *   - Choices: `deny`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#policy NetworkGroupPolicies#policy}
  */
  readonly policy?: string;
  /**
  * Type of the L7 Rule. Must be `application`, `applicationCategory`, `host`, `port` or `ipRange`
  *   - Choices: `application`, `applicationCategory`, `host`, `ipRange`, `port`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#type NetworkGroupPolicies#type}
  */
  readonly type?: string;
  /**
  * The `value` of what you want to block. If `type` is `host`, `port` or `ipRange`, `value` must be a string matching either a hostname (e.g. somewhere.com), a port (e.g. 8080), or an IP range (e.g. 192.1.0.0/16). If `type` is `application` or `applicationCategory`, then `value` must be an ID for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#value NetworkGroupPolicies#value}
  */
  readonly value?: string;
}

export function networkGroupPoliciesItemsL7FirewallRulesToTerraform(struct?: NetworkGroupPoliciesItemsL7FirewallRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkGroupPoliciesItemsL7FirewallRulesToHclTerraform(struct?: NetworkGroupPoliciesItemsL7FirewallRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkGroupPoliciesItemsL7FirewallRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkGroupPoliciesItemsL7FirewallRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkGroupPoliciesItemsL7FirewallRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy = value.policy;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetworkGroupPoliciesItemsL7FirewallRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkGroupPoliciesItemsL7FirewallRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkGroupPoliciesItemsL7FirewallRulesOutputReference {
    return new NetworkGroupPoliciesItemsL7FirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkGroupPoliciesItemsTrafficShapingRulesDefinitions {
  /**
  * The type of definition. Can be one of `application`, `applicationCategory`, `host`, `port`, `ipRange` or `localNet`.
  *   - Choices: `application`, `applicationCategory`, `host`, `ipRange`, `localNet`, `port`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#type NetworkGroupPolicies#type}
  */
  readonly type: string;
  /**
  * If 'type' is `host`, `port`, `ipRange` or `localNet`, then 'value' must be a string, matching either a hostname (e.g. 'somesite.com'), a port (e.g. 8080), or an IP range ('192.1.0.0', '192.1.0.0/16', or '10.1.0.0/16:80'). `localNet` also supports CIDR notation, excluding custom ports. If 'type' is `application` or `applicationCategory`, then 'value' must be an application category or application ID (for a list of IDs for your network, use the trafficShaping/applicationCategories endpoint).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#value NetworkGroupPolicies#value}
  */
  readonly value: string;
}

export function networkGroupPoliciesItemsTrafficShapingRulesDefinitionsToTerraform(struct?: NetworkGroupPoliciesItemsTrafficShapingRulesDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkGroupPoliciesItemsTrafficShapingRulesDefinitionsToHclTerraform(struct?: NetworkGroupPoliciesItemsTrafficShapingRulesDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkGroupPoliciesItemsTrafficShapingRulesDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkGroupPoliciesItemsTrafficShapingRulesDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsList extends cdktf.ComplexList {
  public internalValue? : NetworkGroupPoliciesItemsTrafficShapingRulesDefinitions[] | cdktf.IResolvable

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
  public get(index: number): NetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsOutputReference {
    return new NetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkGroupPoliciesItemsTrafficShapingRules {
  /**
  * A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#definitions NetworkGroupPolicies#definitions}
  */
  readonly definitions: NetworkGroupPoliciesItemsTrafficShapingRulesDefinitions[] | cdktf.IResolvable;
  /**
  * The DSCP tag applied by your rule. null means `Do not change DSCP tag`. For a list of possible tag values, use the trafficShaping/dscpTaggingOptions endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#dscp_tag_value NetworkGroupPolicies#dscp_tag_value}
  */
  readonly dscpTagValue?: number;
  /**
  * The PCP tag applied by your rule. Can be 0 (lowest priority) through 7 (highest priority). null means `Do not set PCP tag`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#pcp_tag_value NetworkGroupPolicies#pcp_tag_value}
  */
  readonly pcpTagValue?: number;
  /**
  * The maximum download limit (integer, in Kbps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#per_client_bandwidth_limits_bandwidth_limits_limit_down NetworkGroupPolicies#per_client_bandwidth_limits_bandwidth_limits_limit_down}
  */
  readonly perClientBandwidthLimitsBandwidthLimitsLimitDown?: number;
  /**
  * The maximum upload limit (integer, in Kbps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#per_client_bandwidth_limits_bandwidth_limits_limit_up NetworkGroupPolicies#per_client_bandwidth_limits_bandwidth_limits_limit_up}
  */
  readonly perClientBandwidthLimitsBandwidthLimitsLimitUp?: number;
  /**
  * How bandwidth limits are applied by your rule. Can be one of `network default`, `ignore` or `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#per_client_bandwidth_limits_settings NetworkGroupPolicies#per_client_bandwidth_limits_settings}
  */
  readonly perClientBandwidthLimitsSettings?: string;
  /**
  * A string, indicating the priority level for packets bound to your rule. Can be `low`, `normal` or `high`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#priority NetworkGroupPolicies#priority}
  */
  readonly priority?: string;
}

export function networkGroupPoliciesItemsTrafficShapingRulesToTerraform(struct?: NetworkGroupPoliciesItemsTrafficShapingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definitions: cdktf.listMapper(networkGroupPoliciesItemsTrafficShapingRulesDefinitionsToTerraform, false)(struct!.definitions),
    dscp_tag_value: cdktf.numberToTerraform(struct!.dscpTagValue),
    pcp_tag_value: cdktf.numberToTerraform(struct!.pcpTagValue),
    per_client_bandwidth_limits_bandwidth_limits_limit_down: cdktf.numberToTerraform(struct!.perClientBandwidthLimitsBandwidthLimitsLimitDown),
    per_client_bandwidth_limits_bandwidth_limits_limit_up: cdktf.numberToTerraform(struct!.perClientBandwidthLimitsBandwidthLimitsLimitUp),
    per_client_bandwidth_limits_settings: cdktf.stringToTerraform(struct!.perClientBandwidthLimitsSettings),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function networkGroupPoliciesItemsTrafficShapingRulesToHclTerraform(struct?: NetworkGroupPoliciesItemsTrafficShapingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definitions: {
      value: cdktf.listMapperHcl(networkGroupPoliciesItemsTrafficShapingRulesDefinitionsToHclTerraform, false)(struct!.definitions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsList",
    },
    dscp_tag_value: {
      value: cdktf.numberToHclTerraform(struct!.dscpTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pcp_tag_value: {
      value: cdktf.numberToHclTerraform(struct!.pcpTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_client_bandwidth_limits_bandwidth_limits_limit_down: {
      value: cdktf.numberToHclTerraform(struct!.perClientBandwidthLimitsBandwidthLimitsLimitDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_client_bandwidth_limits_bandwidth_limits_limit_up: {
      value: cdktf.numberToHclTerraform(struct!.perClientBandwidthLimitsBandwidthLimitsLimitUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_client_bandwidth_limits_settings: {
      value: cdktf.stringToHclTerraform(struct!.perClientBandwidthLimitsSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkGroupPoliciesItemsTrafficShapingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkGroupPoliciesItemsTrafficShapingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitions = this._definitions?.internalValue;
    }
    if (this._dscpTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpTagValue = this._dscpTagValue;
    }
    if (this._pcpTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcpTagValue = this._pcpTagValue;
    }
    if (this._perClientBandwidthLimitsBandwidthLimitsLimitDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.perClientBandwidthLimitsBandwidthLimitsLimitDown = this._perClientBandwidthLimitsBandwidthLimitsLimitDown;
    }
    if (this._perClientBandwidthLimitsBandwidthLimitsLimitUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.perClientBandwidthLimitsBandwidthLimitsLimitUp = this._perClientBandwidthLimitsBandwidthLimitsLimitUp;
    }
    if (this._perClientBandwidthLimitsSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.perClientBandwidthLimitsSettings = this._perClientBandwidthLimitsSettings;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkGroupPoliciesItemsTrafficShapingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitions.internalValue = undefined;
      this._dscpTagValue = undefined;
      this._pcpTagValue = undefined;
      this._perClientBandwidthLimitsBandwidthLimitsLimitDown = undefined;
      this._perClientBandwidthLimitsBandwidthLimitsLimitUp = undefined;
      this._perClientBandwidthLimitsSettings = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definitions.internalValue = value.definitions;
      this._dscpTagValue = value.dscpTagValue;
      this._pcpTagValue = value.pcpTagValue;
      this._perClientBandwidthLimitsBandwidthLimitsLimitDown = value.perClientBandwidthLimitsBandwidthLimitsLimitDown;
      this._perClientBandwidthLimitsBandwidthLimitsLimitUp = value.perClientBandwidthLimitsBandwidthLimitsLimitUp;
      this._perClientBandwidthLimitsSettings = value.perClientBandwidthLimitsSettings;
      this._priority = value.priority;
    }
  }

  // definitions - computed: false, optional: false, required: true
  private _definitions = new NetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsList(this, "definitions", false);
  public get definitions() {
    return this._definitions;
  }
  public putDefinitions(value: NetworkGroupPoliciesItemsTrafficShapingRulesDefinitions[] | cdktf.IResolvable) {
    this._definitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionsInput() {
    return this._definitions.internalValue;
  }

  // dscp_tag_value - computed: false, optional: true, required: false
  private _dscpTagValue?: number; 
  public get dscpTagValue() {
    return this.getNumberAttribute('dscp_tag_value');
  }
  public set dscpTagValue(value: number) {
    this._dscpTagValue = value;
  }
  public resetDscpTagValue() {
    this._dscpTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpTagValueInput() {
    return this._dscpTagValue;
  }

  // pcp_tag_value - computed: false, optional: true, required: false
  private _pcpTagValue?: number; 
  public get pcpTagValue() {
    return this.getNumberAttribute('pcp_tag_value');
  }
  public set pcpTagValue(value: number) {
    this._pcpTagValue = value;
  }
  public resetPcpTagValue() {
    this._pcpTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcpTagValueInput() {
    return this._pcpTagValue;
  }

  // per_client_bandwidth_limits_bandwidth_limits_limit_down - computed: false, optional: true, required: false
  private _perClientBandwidthLimitsBandwidthLimitsLimitDown?: number; 
  public get perClientBandwidthLimitsBandwidthLimitsLimitDown() {
    return this.getNumberAttribute('per_client_bandwidth_limits_bandwidth_limits_limit_down');
  }
  public set perClientBandwidthLimitsBandwidthLimitsLimitDown(value: number) {
    this._perClientBandwidthLimitsBandwidthLimitsLimitDown = value;
  }
  public resetPerClientBandwidthLimitsBandwidthLimitsLimitDown() {
    this._perClientBandwidthLimitsBandwidthLimitsLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perClientBandwidthLimitsBandwidthLimitsLimitDownInput() {
    return this._perClientBandwidthLimitsBandwidthLimitsLimitDown;
  }

  // per_client_bandwidth_limits_bandwidth_limits_limit_up - computed: false, optional: true, required: false
  private _perClientBandwidthLimitsBandwidthLimitsLimitUp?: number; 
  public get perClientBandwidthLimitsBandwidthLimitsLimitUp() {
    return this.getNumberAttribute('per_client_bandwidth_limits_bandwidth_limits_limit_up');
  }
  public set perClientBandwidthLimitsBandwidthLimitsLimitUp(value: number) {
    this._perClientBandwidthLimitsBandwidthLimitsLimitUp = value;
  }
  public resetPerClientBandwidthLimitsBandwidthLimitsLimitUp() {
    this._perClientBandwidthLimitsBandwidthLimitsLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perClientBandwidthLimitsBandwidthLimitsLimitUpInput() {
    return this._perClientBandwidthLimitsBandwidthLimitsLimitUp;
  }

  // per_client_bandwidth_limits_settings - computed: false, optional: true, required: false
  private _perClientBandwidthLimitsSettings?: string; 
  public get perClientBandwidthLimitsSettings() {
    return this.getStringAttribute('per_client_bandwidth_limits_settings');
  }
  public set perClientBandwidthLimitsSettings(value: string) {
    this._perClientBandwidthLimitsSettings = value;
  }
  public resetPerClientBandwidthLimitsSettings() {
    this._perClientBandwidthLimitsSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perClientBandwidthLimitsSettingsInput() {
    return this._perClientBandwidthLimitsSettings;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class NetworkGroupPoliciesItemsTrafficShapingRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkGroupPoliciesItemsTrafficShapingRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkGroupPoliciesItemsTrafficShapingRulesOutputReference {
    return new NetworkGroupPoliciesItemsTrafficShapingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkGroupPoliciesItems {
  /**
  * The maximum download limit (integer, in Kbps). null indicates no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#bandwidth_limit_down NetworkGroupPolicies#bandwidth_limit_down}
  */
  readonly bandwidthLimitDown?: number;
  /**
  * The maximum upload limit (integer, in Kbps). null indicates no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#bandwidth_limit_up NetworkGroupPolicies#bandwidth_limit_up}
  */
  readonly bandwidthLimitUp?: number;
  /**
  * How bandwidth limits are enforced. Can be `network default`, `ignore` or `custom`.
  *   - Choices: `custom`, `ignore`, `network default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#bandwidth_settings NetworkGroupPolicies#bandwidth_settings}
  */
  readonly bandwidthSettings?: string;
  /**
  * A list of the Bonjour forwarding rules for your group policy. If `settings` is set to `custom`, at least one rule must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#bonjour_forwarding_rules NetworkGroupPolicies#bonjour_forwarding_rules}
  */
  readonly bonjourForwardingRules?: NetworkGroupPoliciesItemsBonjourForwardingRules[] | cdktf.IResolvable;
  /**
  * How Bonjour rules are applied. Can be `network default`, `ignore` or `custom`.
  *   - Choices: `custom`, `ignore`, `network default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#bonjour_forwarding_settings NetworkGroupPolicies#bonjour_forwarding_settings}
  */
  readonly bonjourForwardingSettings?: string;
  /**
  * A list of URL patterns that are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#content_filtering_allowed_url_patterns NetworkGroupPolicies#content_filtering_allowed_url_patterns}
  */
  readonly contentFilteringAllowedUrlPatterns?: string[];
  /**
  * How URL patterns are applied. Can be `network default`, `append` or `override`.
  *   - Choices: `append`, `network default`, `override`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#content_filtering_allowed_url_patterns_settings NetworkGroupPolicies#content_filtering_allowed_url_patterns_settings}
  */
  readonly contentFilteringAllowedUrlPatternsSettings?: string;
  /**
  * A list of URL categories to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#content_filtering_blocked_url_categories NetworkGroupPolicies#content_filtering_blocked_url_categories}
  */
  readonly contentFilteringBlockedUrlCategories?: string[];
  /**
  * How URL categories are applied. Can be `network default`, `append` or `override`.
  *   - Choices: `append`, `network default`, `override`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#content_filtering_blocked_url_categories_settings NetworkGroupPolicies#content_filtering_blocked_url_categories_settings}
  */
  readonly contentFilteringBlockedUrlCategoriesSettings?: string;
  /**
  * A list of URL patterns that are blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#content_filtering_blocked_url_patterns NetworkGroupPolicies#content_filtering_blocked_url_patterns}
  */
  readonly contentFilteringBlockedUrlPatterns?: string[];
  /**
  * How URL patterns are applied. Can be `network default`, `append` or `override`.
  *   - Choices: `append`, `network default`, `override`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#content_filtering_blocked_url_patterns_settings NetworkGroupPolicies#content_filtering_blocked_url_patterns_settings}
  */
  readonly contentFilteringBlockedUrlPatternsSettings?: string;
  /**
  * How firewall and traffic shaping rules are enforced. Can be `network default`, `ignore` or `custom`.
  *   - Choices: `custom`, `ignore`, `network default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#firewall_and_traffic_shaping_settings NetworkGroupPolicies#firewall_and_traffic_shaping_settings}
  */
  readonly firewallAndTrafficShapingSettings?: string;
  /**
  * If true, the system deletes the GP even if there are active clients using the GP. After deletion, active clients that were assigned to that Group Policy will be left without any policy applied. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#force_delete NetworkGroupPolicies#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * An ordered array of the L3 firewall rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#l3_firewall_rules NetworkGroupPolicies#l3_firewall_rules}
  */
  readonly l3FirewallRules?: NetworkGroupPoliciesItemsL3FirewallRules[] | cdktf.IResolvable;
  /**
  * An ordered array of L7 firewall rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#l7_firewall_rules NetworkGroupPolicies#l7_firewall_rules}
  */
  readonly l7FirewallRules?: NetworkGroupPoliciesItemsL7FirewallRules[] | cdktf.IResolvable;
  /**
  * The name for your group policy. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#name NetworkGroupPolicies#name}
  */
  readonly name: string;
  /**
  * Whether scheduling is enabled (true) or disabled (false). Defaults to false. If true, the schedule objects for each day of the week (monday - sunday) are parsed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_enabled NetworkGroupPolicies#scheduling_enabled}
  */
  readonly schedulingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_friday_active NetworkGroupPolicies#scheduling_friday_active}
  */
  readonly schedulingFridayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_friday_from NetworkGroupPolicies#scheduling_friday_from}
  */
  readonly schedulingFridayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_friday_to NetworkGroupPolicies#scheduling_friday_to}
  */
  readonly schedulingFridayTo?: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_monday_active NetworkGroupPolicies#scheduling_monday_active}
  */
  readonly schedulingMondayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_monday_from NetworkGroupPolicies#scheduling_monday_from}
  */
  readonly schedulingMondayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_monday_to NetworkGroupPolicies#scheduling_monday_to}
  */
  readonly schedulingMondayTo?: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_saturday_active NetworkGroupPolicies#scheduling_saturday_active}
  */
  readonly schedulingSaturdayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_saturday_from NetworkGroupPolicies#scheduling_saturday_from}
  */
  readonly schedulingSaturdayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_saturday_to NetworkGroupPolicies#scheduling_saturday_to}
  */
  readonly schedulingSaturdayTo?: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_sunday_active NetworkGroupPolicies#scheduling_sunday_active}
  */
  readonly schedulingSundayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_sunday_from NetworkGroupPolicies#scheduling_sunday_from}
  */
  readonly schedulingSundayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_sunday_to NetworkGroupPolicies#scheduling_sunday_to}
  */
  readonly schedulingSundayTo?: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_thursday_active NetworkGroupPolicies#scheduling_thursday_active}
  */
  readonly schedulingThursdayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_thursday_from NetworkGroupPolicies#scheduling_thursday_from}
  */
  readonly schedulingThursdayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_thursday_to NetworkGroupPolicies#scheduling_thursday_to}
  */
  readonly schedulingThursdayTo?: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_tuesday_active NetworkGroupPolicies#scheduling_tuesday_active}
  */
  readonly schedulingTuesdayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_tuesday_from NetworkGroupPolicies#scheduling_tuesday_from}
  */
  readonly schedulingTuesdayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_tuesday_to NetworkGroupPolicies#scheduling_tuesday_to}
  */
  readonly schedulingTuesdayTo?: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_wednesday_active NetworkGroupPolicies#scheduling_wednesday_active}
  */
  readonly schedulingWednesdayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_wednesday_from NetworkGroupPolicies#scheduling_wednesday_from}
  */
  readonly schedulingWednesdayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#scheduling_wednesday_to NetworkGroupPolicies#scheduling_wednesday_to}
  */
  readonly schedulingWednesdayTo?: string;
  /**
  * Whether clients bound to your policy will bypass splash authorization or behave according to the network`s rules. Can be one of `network default` or `bypass`. Only available if your network has a wireless configuration.
  *   - Choices: `bypass`, `network default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#splash_auth_settings NetworkGroupPolicies#splash_auth_settings}
  */
  readonly splashAuthSettings?: string;
  /**
  * An array of traffic shaping rules. Rules are applied in the order that they are specified in. An empty list (or null) means no rules. Note that you are allowed a maximum of 8 rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#traffic_shaping_rules NetworkGroupPolicies#traffic_shaping_rules}
  */
  readonly trafficShapingRules?: NetworkGroupPoliciesItemsTrafficShapingRules[] | cdktf.IResolvable;
  /**
  * How VLAN tagging is applied. Can be `network default`, `ignore` or `custom`.
  *   - Choices: `custom`, `ignore`, `network default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#vlan_tagging_settings NetworkGroupPolicies#vlan_tagging_settings}
  */
  readonly vlanTaggingSettings?: string;
  /**
  * The ID of the vlan you want to tag. This only applies if `settings` is set to `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#vlan_tagging_vlan_id NetworkGroupPolicies#vlan_tagging_vlan_id}
  */
  readonly vlanTaggingVlanId?: string;
}

export function networkGroupPoliciesItemsToTerraform(struct?: NetworkGroupPoliciesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_limit_down: cdktf.numberToTerraform(struct!.bandwidthLimitDown),
    bandwidth_limit_up: cdktf.numberToTerraform(struct!.bandwidthLimitUp),
    bandwidth_settings: cdktf.stringToTerraform(struct!.bandwidthSettings),
    bonjour_forwarding_rules: cdktf.listMapper(networkGroupPoliciesItemsBonjourForwardingRulesToTerraform, false)(struct!.bonjourForwardingRules),
    bonjour_forwarding_settings: cdktf.stringToTerraform(struct!.bonjourForwardingSettings),
    content_filtering_allowed_url_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentFilteringAllowedUrlPatterns),
    content_filtering_allowed_url_patterns_settings: cdktf.stringToTerraform(struct!.contentFilteringAllowedUrlPatternsSettings),
    content_filtering_blocked_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentFilteringBlockedUrlCategories),
    content_filtering_blocked_url_categories_settings: cdktf.stringToTerraform(struct!.contentFilteringBlockedUrlCategoriesSettings),
    content_filtering_blocked_url_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentFilteringBlockedUrlPatterns),
    content_filtering_blocked_url_patterns_settings: cdktf.stringToTerraform(struct!.contentFilteringBlockedUrlPatternsSettings),
    firewall_and_traffic_shaping_settings: cdktf.stringToTerraform(struct!.firewallAndTrafficShapingSettings),
    force_delete: cdktf.booleanToTerraform(struct!.forceDelete),
    l3_firewall_rules: cdktf.listMapper(networkGroupPoliciesItemsL3FirewallRulesToTerraform, false)(struct!.l3FirewallRules),
    l7_firewall_rules: cdktf.listMapper(networkGroupPoliciesItemsL7FirewallRulesToTerraform, false)(struct!.l7FirewallRules),
    name: cdktf.stringToTerraform(struct!.name),
    scheduling_enabled: cdktf.booleanToTerraform(struct!.schedulingEnabled),
    scheduling_friday_active: cdktf.booleanToTerraform(struct!.schedulingFridayActive),
    scheduling_friday_from: cdktf.stringToTerraform(struct!.schedulingFridayFrom),
    scheduling_friday_to: cdktf.stringToTerraform(struct!.schedulingFridayTo),
    scheduling_monday_active: cdktf.booleanToTerraform(struct!.schedulingMondayActive),
    scheduling_monday_from: cdktf.stringToTerraform(struct!.schedulingMondayFrom),
    scheduling_monday_to: cdktf.stringToTerraform(struct!.schedulingMondayTo),
    scheduling_saturday_active: cdktf.booleanToTerraform(struct!.schedulingSaturdayActive),
    scheduling_saturday_from: cdktf.stringToTerraform(struct!.schedulingSaturdayFrom),
    scheduling_saturday_to: cdktf.stringToTerraform(struct!.schedulingSaturdayTo),
    scheduling_sunday_active: cdktf.booleanToTerraform(struct!.schedulingSundayActive),
    scheduling_sunday_from: cdktf.stringToTerraform(struct!.schedulingSundayFrom),
    scheduling_sunday_to: cdktf.stringToTerraform(struct!.schedulingSundayTo),
    scheduling_thursday_active: cdktf.booleanToTerraform(struct!.schedulingThursdayActive),
    scheduling_thursday_from: cdktf.stringToTerraform(struct!.schedulingThursdayFrom),
    scheduling_thursday_to: cdktf.stringToTerraform(struct!.schedulingThursdayTo),
    scheduling_tuesday_active: cdktf.booleanToTerraform(struct!.schedulingTuesdayActive),
    scheduling_tuesday_from: cdktf.stringToTerraform(struct!.schedulingTuesdayFrom),
    scheduling_tuesday_to: cdktf.stringToTerraform(struct!.schedulingTuesdayTo),
    scheduling_wednesday_active: cdktf.booleanToTerraform(struct!.schedulingWednesdayActive),
    scheduling_wednesday_from: cdktf.stringToTerraform(struct!.schedulingWednesdayFrom),
    scheduling_wednesday_to: cdktf.stringToTerraform(struct!.schedulingWednesdayTo),
    splash_auth_settings: cdktf.stringToTerraform(struct!.splashAuthSettings),
    traffic_shaping_rules: cdktf.listMapper(networkGroupPoliciesItemsTrafficShapingRulesToTerraform, false)(struct!.trafficShapingRules),
    vlan_tagging_settings: cdktf.stringToTerraform(struct!.vlanTaggingSettings),
    vlan_tagging_vlan_id: cdktf.stringToTerraform(struct!.vlanTaggingVlanId),
  }
}


export function networkGroupPoliciesItemsToHclTerraform(struct?: NetworkGroupPoliciesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_limit_down: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthLimitDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_limit_up: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthLimitUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_settings: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bonjour_forwarding_rules: {
      value: cdktf.listMapperHcl(networkGroupPoliciesItemsBonjourForwardingRulesToHclTerraform, false)(struct!.bonjourForwardingRules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkGroupPoliciesItemsBonjourForwardingRulesList",
    },
    bonjour_forwarding_settings: {
      value: cdktf.stringToHclTerraform(struct!.bonjourForwardingSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_filtering_allowed_url_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentFilteringAllowedUrlPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    content_filtering_allowed_url_patterns_settings: {
      value: cdktf.stringToHclTerraform(struct!.contentFilteringAllowedUrlPatternsSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_filtering_blocked_url_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentFilteringBlockedUrlCategories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    content_filtering_blocked_url_categories_settings: {
      value: cdktf.stringToHclTerraform(struct!.contentFilteringBlockedUrlCategoriesSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_filtering_blocked_url_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentFilteringBlockedUrlPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    content_filtering_blocked_url_patterns_settings: {
      value: cdktf.stringToHclTerraform(struct!.contentFilteringBlockedUrlPatternsSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firewall_and_traffic_shaping_settings: {
      value: cdktf.stringToHclTerraform(struct!.firewallAndTrafficShapingSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_delete: {
      value: cdktf.booleanToHclTerraform(struct!.forceDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    l3_firewall_rules: {
      value: cdktf.listMapperHcl(networkGroupPoliciesItemsL3FirewallRulesToHclTerraform, false)(struct!.l3FirewallRules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkGroupPoliciesItemsL3FirewallRulesList",
    },
    l7_firewall_rules: {
      value: cdktf.listMapperHcl(networkGroupPoliciesItemsL7FirewallRulesToHclTerraform, false)(struct!.l7FirewallRules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkGroupPoliciesItemsL7FirewallRulesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.schedulingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduling_friday_active: {
      value: cdktf.booleanToHclTerraform(struct!.schedulingFridayActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduling_friday_from: {
      value: cdktf.stringToHclTerraform(struct!.schedulingFridayFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_friday_to: {
      value: cdktf.stringToHclTerraform(struct!.schedulingFridayTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_monday_active: {
      value: cdktf.booleanToHclTerraform(struct!.schedulingMondayActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduling_monday_from: {
      value: cdktf.stringToHclTerraform(struct!.schedulingMondayFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_monday_to: {
      value: cdktf.stringToHclTerraform(struct!.schedulingMondayTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_saturday_active: {
      value: cdktf.booleanToHclTerraform(struct!.schedulingSaturdayActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduling_saturday_from: {
      value: cdktf.stringToHclTerraform(struct!.schedulingSaturdayFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_saturday_to: {
      value: cdktf.stringToHclTerraform(struct!.schedulingSaturdayTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_sunday_active: {
      value: cdktf.booleanToHclTerraform(struct!.schedulingSundayActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduling_sunday_from: {
      value: cdktf.stringToHclTerraform(struct!.schedulingSundayFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_sunday_to: {
      value: cdktf.stringToHclTerraform(struct!.schedulingSundayTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_thursday_active: {
      value: cdktf.booleanToHclTerraform(struct!.schedulingThursdayActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduling_thursday_from: {
      value: cdktf.stringToHclTerraform(struct!.schedulingThursdayFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_thursday_to: {
      value: cdktf.stringToHclTerraform(struct!.schedulingThursdayTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_tuesday_active: {
      value: cdktf.booleanToHclTerraform(struct!.schedulingTuesdayActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduling_tuesday_from: {
      value: cdktf.stringToHclTerraform(struct!.schedulingTuesdayFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_tuesday_to: {
      value: cdktf.stringToHclTerraform(struct!.schedulingTuesdayTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_wednesday_active: {
      value: cdktf.booleanToHclTerraform(struct!.schedulingWednesdayActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduling_wednesday_from: {
      value: cdktf.stringToHclTerraform(struct!.schedulingWednesdayFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_wednesday_to: {
      value: cdktf.stringToHclTerraform(struct!.schedulingWednesdayTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splash_auth_settings: {
      value: cdktf.stringToHclTerraform(struct!.splashAuthSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_shaping_rules: {
      value: cdktf.listMapperHcl(networkGroupPoliciesItemsTrafficShapingRulesToHclTerraform, false)(struct!.trafficShapingRules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkGroupPoliciesItemsTrafficShapingRulesList",
    },
    vlan_tagging_settings: {
      value: cdktf.stringToHclTerraform(struct!.vlanTaggingSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_tagging_vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanTaggingVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkGroupPoliciesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkGroupPoliciesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthLimitDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimitDown = this._bandwidthLimitDown;
    }
    if (this._bandwidthLimitUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimitUp = this._bandwidthLimitUp;
    }
    if (this._bandwidthSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthSettings = this._bandwidthSettings;
    }
    if (this._bonjourForwardingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bonjourForwardingRules = this._bonjourForwardingRules?.internalValue;
    }
    if (this._bonjourForwardingSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.bonjourForwardingSettings = this._bonjourForwardingSettings;
    }
    if (this._contentFilteringAllowedUrlPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFilteringAllowedUrlPatterns = this._contentFilteringAllowedUrlPatterns;
    }
    if (this._contentFilteringAllowedUrlPatternsSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFilteringAllowedUrlPatternsSettings = this._contentFilteringAllowedUrlPatternsSettings;
    }
    if (this._contentFilteringBlockedUrlCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFilteringBlockedUrlCategories = this._contentFilteringBlockedUrlCategories;
    }
    if (this._contentFilteringBlockedUrlCategoriesSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFilteringBlockedUrlCategoriesSettings = this._contentFilteringBlockedUrlCategoriesSettings;
    }
    if (this._contentFilteringBlockedUrlPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFilteringBlockedUrlPatterns = this._contentFilteringBlockedUrlPatterns;
    }
    if (this._contentFilteringBlockedUrlPatternsSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFilteringBlockedUrlPatternsSettings = this._contentFilteringBlockedUrlPatternsSettings;
    }
    if (this._firewallAndTrafficShapingSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallAndTrafficShapingSettings = this._firewallAndTrafficShapingSettings;
    }
    if (this._forceDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceDelete = this._forceDelete;
    }
    if (this._l3FirewallRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3FirewallRules = this._l3FirewallRules?.internalValue;
    }
    if (this._l7FirewallRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7FirewallRules = this._l7FirewallRules?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schedulingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingEnabled = this._schedulingEnabled;
    }
    if (this._schedulingFridayActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingFridayActive = this._schedulingFridayActive;
    }
    if (this._schedulingFridayFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingFridayFrom = this._schedulingFridayFrom;
    }
    if (this._schedulingFridayTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingFridayTo = this._schedulingFridayTo;
    }
    if (this._schedulingMondayActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingMondayActive = this._schedulingMondayActive;
    }
    if (this._schedulingMondayFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingMondayFrom = this._schedulingMondayFrom;
    }
    if (this._schedulingMondayTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingMondayTo = this._schedulingMondayTo;
    }
    if (this._schedulingSaturdayActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingSaturdayActive = this._schedulingSaturdayActive;
    }
    if (this._schedulingSaturdayFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingSaturdayFrom = this._schedulingSaturdayFrom;
    }
    if (this._schedulingSaturdayTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingSaturdayTo = this._schedulingSaturdayTo;
    }
    if (this._schedulingSundayActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingSundayActive = this._schedulingSundayActive;
    }
    if (this._schedulingSundayFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingSundayFrom = this._schedulingSundayFrom;
    }
    if (this._schedulingSundayTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingSundayTo = this._schedulingSundayTo;
    }
    if (this._schedulingThursdayActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingThursdayActive = this._schedulingThursdayActive;
    }
    if (this._schedulingThursdayFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingThursdayFrom = this._schedulingThursdayFrom;
    }
    if (this._schedulingThursdayTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingThursdayTo = this._schedulingThursdayTo;
    }
    if (this._schedulingTuesdayActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingTuesdayActive = this._schedulingTuesdayActive;
    }
    if (this._schedulingTuesdayFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingTuesdayFrom = this._schedulingTuesdayFrom;
    }
    if (this._schedulingTuesdayTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingTuesdayTo = this._schedulingTuesdayTo;
    }
    if (this._schedulingWednesdayActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingWednesdayActive = this._schedulingWednesdayActive;
    }
    if (this._schedulingWednesdayFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingWednesdayFrom = this._schedulingWednesdayFrom;
    }
    if (this._schedulingWednesdayTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingWednesdayTo = this._schedulingWednesdayTo;
    }
    if (this._splashAuthSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.splashAuthSettings = this._splashAuthSettings;
    }
    if (this._trafficShapingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficShapingRules = this._trafficShapingRules?.internalValue;
    }
    if (this._vlanTaggingSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTaggingSettings = this._vlanTaggingSettings;
    }
    if (this._vlanTaggingVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTaggingVlanId = this._vlanTaggingVlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkGroupPoliciesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthLimitDown = undefined;
      this._bandwidthLimitUp = undefined;
      this._bandwidthSettings = undefined;
      this._bonjourForwardingRules.internalValue = undefined;
      this._bonjourForwardingSettings = undefined;
      this._contentFilteringAllowedUrlPatterns = undefined;
      this._contentFilteringAllowedUrlPatternsSettings = undefined;
      this._contentFilteringBlockedUrlCategories = undefined;
      this._contentFilteringBlockedUrlCategoriesSettings = undefined;
      this._contentFilteringBlockedUrlPatterns = undefined;
      this._contentFilteringBlockedUrlPatternsSettings = undefined;
      this._firewallAndTrafficShapingSettings = undefined;
      this._forceDelete = undefined;
      this._l3FirewallRules.internalValue = undefined;
      this._l7FirewallRules.internalValue = undefined;
      this._name = undefined;
      this._schedulingEnabled = undefined;
      this._schedulingFridayActive = undefined;
      this._schedulingFridayFrom = undefined;
      this._schedulingFridayTo = undefined;
      this._schedulingMondayActive = undefined;
      this._schedulingMondayFrom = undefined;
      this._schedulingMondayTo = undefined;
      this._schedulingSaturdayActive = undefined;
      this._schedulingSaturdayFrom = undefined;
      this._schedulingSaturdayTo = undefined;
      this._schedulingSundayActive = undefined;
      this._schedulingSundayFrom = undefined;
      this._schedulingSundayTo = undefined;
      this._schedulingThursdayActive = undefined;
      this._schedulingThursdayFrom = undefined;
      this._schedulingThursdayTo = undefined;
      this._schedulingTuesdayActive = undefined;
      this._schedulingTuesdayFrom = undefined;
      this._schedulingTuesdayTo = undefined;
      this._schedulingWednesdayActive = undefined;
      this._schedulingWednesdayFrom = undefined;
      this._schedulingWednesdayTo = undefined;
      this._splashAuthSettings = undefined;
      this._trafficShapingRules.internalValue = undefined;
      this._vlanTaggingSettings = undefined;
      this._vlanTaggingVlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthLimitDown = value.bandwidthLimitDown;
      this._bandwidthLimitUp = value.bandwidthLimitUp;
      this._bandwidthSettings = value.bandwidthSettings;
      this._bonjourForwardingRules.internalValue = value.bonjourForwardingRules;
      this._bonjourForwardingSettings = value.bonjourForwardingSettings;
      this._contentFilteringAllowedUrlPatterns = value.contentFilteringAllowedUrlPatterns;
      this._contentFilteringAllowedUrlPatternsSettings = value.contentFilteringAllowedUrlPatternsSettings;
      this._contentFilteringBlockedUrlCategories = value.contentFilteringBlockedUrlCategories;
      this._contentFilteringBlockedUrlCategoriesSettings = value.contentFilteringBlockedUrlCategoriesSettings;
      this._contentFilteringBlockedUrlPatterns = value.contentFilteringBlockedUrlPatterns;
      this._contentFilteringBlockedUrlPatternsSettings = value.contentFilteringBlockedUrlPatternsSettings;
      this._firewallAndTrafficShapingSettings = value.firewallAndTrafficShapingSettings;
      this._forceDelete = value.forceDelete;
      this._l3FirewallRules.internalValue = value.l3FirewallRules;
      this._l7FirewallRules.internalValue = value.l7FirewallRules;
      this._name = value.name;
      this._schedulingEnabled = value.schedulingEnabled;
      this._schedulingFridayActive = value.schedulingFridayActive;
      this._schedulingFridayFrom = value.schedulingFridayFrom;
      this._schedulingFridayTo = value.schedulingFridayTo;
      this._schedulingMondayActive = value.schedulingMondayActive;
      this._schedulingMondayFrom = value.schedulingMondayFrom;
      this._schedulingMondayTo = value.schedulingMondayTo;
      this._schedulingSaturdayActive = value.schedulingSaturdayActive;
      this._schedulingSaturdayFrom = value.schedulingSaturdayFrom;
      this._schedulingSaturdayTo = value.schedulingSaturdayTo;
      this._schedulingSundayActive = value.schedulingSundayActive;
      this._schedulingSundayFrom = value.schedulingSundayFrom;
      this._schedulingSundayTo = value.schedulingSundayTo;
      this._schedulingThursdayActive = value.schedulingThursdayActive;
      this._schedulingThursdayFrom = value.schedulingThursdayFrom;
      this._schedulingThursdayTo = value.schedulingThursdayTo;
      this._schedulingTuesdayActive = value.schedulingTuesdayActive;
      this._schedulingTuesdayFrom = value.schedulingTuesdayFrom;
      this._schedulingTuesdayTo = value.schedulingTuesdayTo;
      this._schedulingWednesdayActive = value.schedulingWednesdayActive;
      this._schedulingWednesdayFrom = value.schedulingWednesdayFrom;
      this._schedulingWednesdayTo = value.schedulingWednesdayTo;
      this._splashAuthSettings = value.splashAuthSettings;
      this._trafficShapingRules.internalValue = value.trafficShapingRules;
      this._vlanTaggingSettings = value.vlanTaggingSettings;
      this._vlanTaggingVlanId = value.vlanTaggingVlanId;
    }
  }

  // bandwidth_limit_down - computed: false, optional: true, required: false
  private _bandwidthLimitDown?: number; 
  public get bandwidthLimitDown() {
    return this.getNumberAttribute('bandwidth_limit_down');
  }
  public set bandwidthLimitDown(value: number) {
    this._bandwidthLimitDown = value;
  }
  public resetBandwidthLimitDown() {
    this._bandwidthLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitDownInput() {
    return this._bandwidthLimitDown;
  }

  // bandwidth_limit_up - computed: false, optional: true, required: false
  private _bandwidthLimitUp?: number; 
  public get bandwidthLimitUp() {
    return this.getNumberAttribute('bandwidth_limit_up');
  }
  public set bandwidthLimitUp(value: number) {
    this._bandwidthLimitUp = value;
  }
  public resetBandwidthLimitUp() {
    this._bandwidthLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitUpInput() {
    return this._bandwidthLimitUp;
  }

  // bandwidth_settings - computed: false, optional: true, required: false
  private _bandwidthSettings?: string; 
  public get bandwidthSettings() {
    return this.getStringAttribute('bandwidth_settings');
  }
  public set bandwidthSettings(value: string) {
    this._bandwidthSettings = value;
  }
  public resetBandwidthSettings() {
    this._bandwidthSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthSettingsInput() {
    return this._bandwidthSettings;
  }

  // bonjour_forwarding_rules - computed: false, optional: true, required: false
  private _bonjourForwardingRules = new NetworkGroupPoliciesItemsBonjourForwardingRulesList(this, "bonjour_forwarding_rules", false);
  public get bonjourForwardingRules() {
    return this._bonjourForwardingRules;
  }
  public putBonjourForwardingRules(value: NetworkGroupPoliciesItemsBonjourForwardingRules[] | cdktf.IResolvable) {
    this._bonjourForwardingRules.internalValue = value;
  }
  public resetBonjourForwardingRules() {
    this._bonjourForwardingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bonjourForwardingRulesInput() {
    return this._bonjourForwardingRules.internalValue;
  }

  // bonjour_forwarding_settings - computed: false, optional: true, required: false
  private _bonjourForwardingSettings?: string; 
  public get bonjourForwardingSettings() {
    return this.getStringAttribute('bonjour_forwarding_settings');
  }
  public set bonjourForwardingSettings(value: string) {
    this._bonjourForwardingSettings = value;
  }
  public resetBonjourForwardingSettings() {
    this._bonjourForwardingSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bonjourForwardingSettingsInput() {
    return this._bonjourForwardingSettings;
  }

  // content_filtering_allowed_url_patterns - computed: false, optional: true, required: false
  private _contentFilteringAllowedUrlPatterns?: string[]; 
  public get contentFilteringAllowedUrlPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('content_filtering_allowed_url_patterns'));
  }
  public set contentFilteringAllowedUrlPatterns(value: string[]) {
    this._contentFilteringAllowedUrlPatterns = value;
  }
  public resetContentFilteringAllowedUrlPatterns() {
    this._contentFilteringAllowedUrlPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilteringAllowedUrlPatternsInput() {
    return this._contentFilteringAllowedUrlPatterns;
  }

  // content_filtering_allowed_url_patterns_settings - computed: false, optional: true, required: false
  private _contentFilteringAllowedUrlPatternsSettings?: string; 
  public get contentFilteringAllowedUrlPatternsSettings() {
    return this.getStringAttribute('content_filtering_allowed_url_patterns_settings');
  }
  public set contentFilteringAllowedUrlPatternsSettings(value: string) {
    this._contentFilteringAllowedUrlPatternsSettings = value;
  }
  public resetContentFilteringAllowedUrlPatternsSettings() {
    this._contentFilteringAllowedUrlPatternsSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilteringAllowedUrlPatternsSettingsInput() {
    return this._contentFilteringAllowedUrlPatternsSettings;
  }

  // content_filtering_blocked_url_categories - computed: false, optional: true, required: false
  private _contentFilteringBlockedUrlCategories?: string[]; 
  public get contentFilteringBlockedUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('content_filtering_blocked_url_categories'));
  }
  public set contentFilteringBlockedUrlCategories(value: string[]) {
    this._contentFilteringBlockedUrlCategories = value;
  }
  public resetContentFilteringBlockedUrlCategories() {
    this._contentFilteringBlockedUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilteringBlockedUrlCategoriesInput() {
    return this._contentFilteringBlockedUrlCategories;
  }

  // content_filtering_blocked_url_categories_settings - computed: false, optional: true, required: false
  private _contentFilteringBlockedUrlCategoriesSettings?: string; 
  public get contentFilteringBlockedUrlCategoriesSettings() {
    return this.getStringAttribute('content_filtering_blocked_url_categories_settings');
  }
  public set contentFilteringBlockedUrlCategoriesSettings(value: string) {
    this._contentFilteringBlockedUrlCategoriesSettings = value;
  }
  public resetContentFilteringBlockedUrlCategoriesSettings() {
    this._contentFilteringBlockedUrlCategoriesSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilteringBlockedUrlCategoriesSettingsInput() {
    return this._contentFilteringBlockedUrlCategoriesSettings;
  }

  // content_filtering_blocked_url_patterns - computed: false, optional: true, required: false
  private _contentFilteringBlockedUrlPatterns?: string[]; 
  public get contentFilteringBlockedUrlPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('content_filtering_blocked_url_patterns'));
  }
  public set contentFilteringBlockedUrlPatterns(value: string[]) {
    this._contentFilteringBlockedUrlPatterns = value;
  }
  public resetContentFilteringBlockedUrlPatterns() {
    this._contentFilteringBlockedUrlPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilteringBlockedUrlPatternsInput() {
    return this._contentFilteringBlockedUrlPatterns;
  }

  // content_filtering_blocked_url_patterns_settings - computed: false, optional: true, required: false
  private _contentFilteringBlockedUrlPatternsSettings?: string; 
  public get contentFilteringBlockedUrlPatternsSettings() {
    return this.getStringAttribute('content_filtering_blocked_url_patterns_settings');
  }
  public set contentFilteringBlockedUrlPatternsSettings(value: string) {
    this._contentFilteringBlockedUrlPatternsSettings = value;
  }
  public resetContentFilteringBlockedUrlPatternsSettings() {
    this._contentFilteringBlockedUrlPatternsSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilteringBlockedUrlPatternsSettingsInput() {
    return this._contentFilteringBlockedUrlPatternsSettings;
  }

  // firewall_and_traffic_shaping_settings - computed: false, optional: true, required: false
  private _firewallAndTrafficShapingSettings?: string; 
  public get firewallAndTrafficShapingSettings() {
    return this.getStringAttribute('firewall_and_traffic_shaping_settings');
  }
  public set firewallAndTrafficShapingSettings(value: string) {
    this._firewallAndTrafficShapingSettings = value;
  }
  public resetFirewallAndTrafficShapingSettings() {
    this._firewallAndTrafficShapingSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAndTrafficShapingSettingsInput() {
    return this._firewallAndTrafficShapingSettings;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // l3_firewall_rules - computed: false, optional: true, required: false
  private _l3FirewallRules = new NetworkGroupPoliciesItemsL3FirewallRulesList(this, "l3_firewall_rules", false);
  public get l3FirewallRules() {
    return this._l3FirewallRules;
  }
  public putL3FirewallRules(value: NetworkGroupPoliciesItemsL3FirewallRules[] | cdktf.IResolvable) {
    this._l3FirewallRules.internalValue = value;
  }
  public resetL3FirewallRules() {
    this._l3FirewallRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3FirewallRulesInput() {
    return this._l3FirewallRules.internalValue;
  }

  // l7_firewall_rules - computed: false, optional: true, required: false
  private _l7FirewallRules = new NetworkGroupPoliciesItemsL7FirewallRulesList(this, "l7_firewall_rules", false);
  public get l7FirewallRules() {
    return this._l7FirewallRules;
  }
  public putL7FirewallRules(value: NetworkGroupPoliciesItemsL7FirewallRules[] | cdktf.IResolvable) {
    this._l7FirewallRules.internalValue = value;
  }
  public resetL7FirewallRules() {
    this._l7FirewallRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7FirewallRulesInput() {
    return this._l7FirewallRules.internalValue;
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

  // scheduling_enabled - computed: false, optional: true, required: false
  private _schedulingEnabled?: boolean | cdktf.IResolvable; 
  public get schedulingEnabled() {
    return this.getBooleanAttribute('scheduling_enabled');
  }
  public set schedulingEnabled(value: boolean | cdktf.IResolvable) {
    this._schedulingEnabled = value;
  }
  public resetSchedulingEnabled() {
    this._schedulingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingEnabledInput() {
    return this._schedulingEnabled;
  }

  // scheduling_friday_active - computed: false, optional: true, required: false
  private _schedulingFridayActive?: boolean | cdktf.IResolvable; 
  public get schedulingFridayActive() {
    return this.getBooleanAttribute('scheduling_friday_active');
  }
  public set schedulingFridayActive(value: boolean | cdktf.IResolvable) {
    this._schedulingFridayActive = value;
  }
  public resetSchedulingFridayActive() {
    this._schedulingFridayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingFridayActiveInput() {
    return this._schedulingFridayActive;
  }

  // scheduling_friday_from - computed: false, optional: true, required: false
  private _schedulingFridayFrom?: string; 
  public get schedulingFridayFrom() {
    return this.getStringAttribute('scheduling_friday_from');
  }
  public set schedulingFridayFrom(value: string) {
    this._schedulingFridayFrom = value;
  }
  public resetSchedulingFridayFrom() {
    this._schedulingFridayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingFridayFromInput() {
    return this._schedulingFridayFrom;
  }

  // scheduling_friday_to - computed: false, optional: true, required: false
  private _schedulingFridayTo?: string; 
  public get schedulingFridayTo() {
    return this.getStringAttribute('scheduling_friday_to');
  }
  public set schedulingFridayTo(value: string) {
    this._schedulingFridayTo = value;
  }
  public resetSchedulingFridayTo() {
    this._schedulingFridayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingFridayToInput() {
    return this._schedulingFridayTo;
  }

  // scheduling_monday_active - computed: false, optional: true, required: false
  private _schedulingMondayActive?: boolean | cdktf.IResolvable; 
  public get schedulingMondayActive() {
    return this.getBooleanAttribute('scheduling_monday_active');
  }
  public set schedulingMondayActive(value: boolean | cdktf.IResolvable) {
    this._schedulingMondayActive = value;
  }
  public resetSchedulingMondayActive() {
    this._schedulingMondayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingMondayActiveInput() {
    return this._schedulingMondayActive;
  }

  // scheduling_monday_from - computed: false, optional: true, required: false
  private _schedulingMondayFrom?: string; 
  public get schedulingMondayFrom() {
    return this.getStringAttribute('scheduling_monday_from');
  }
  public set schedulingMondayFrom(value: string) {
    this._schedulingMondayFrom = value;
  }
  public resetSchedulingMondayFrom() {
    this._schedulingMondayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingMondayFromInput() {
    return this._schedulingMondayFrom;
  }

  // scheduling_monday_to - computed: false, optional: true, required: false
  private _schedulingMondayTo?: string; 
  public get schedulingMondayTo() {
    return this.getStringAttribute('scheduling_monday_to');
  }
  public set schedulingMondayTo(value: string) {
    this._schedulingMondayTo = value;
  }
  public resetSchedulingMondayTo() {
    this._schedulingMondayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingMondayToInput() {
    return this._schedulingMondayTo;
  }

  // scheduling_saturday_active - computed: false, optional: true, required: false
  private _schedulingSaturdayActive?: boolean | cdktf.IResolvable; 
  public get schedulingSaturdayActive() {
    return this.getBooleanAttribute('scheduling_saturday_active');
  }
  public set schedulingSaturdayActive(value: boolean | cdktf.IResolvable) {
    this._schedulingSaturdayActive = value;
  }
  public resetSchedulingSaturdayActive() {
    this._schedulingSaturdayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingSaturdayActiveInput() {
    return this._schedulingSaturdayActive;
  }

  // scheduling_saturday_from - computed: false, optional: true, required: false
  private _schedulingSaturdayFrom?: string; 
  public get schedulingSaturdayFrom() {
    return this.getStringAttribute('scheduling_saturday_from');
  }
  public set schedulingSaturdayFrom(value: string) {
    this._schedulingSaturdayFrom = value;
  }
  public resetSchedulingSaturdayFrom() {
    this._schedulingSaturdayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingSaturdayFromInput() {
    return this._schedulingSaturdayFrom;
  }

  // scheduling_saturday_to - computed: false, optional: true, required: false
  private _schedulingSaturdayTo?: string; 
  public get schedulingSaturdayTo() {
    return this.getStringAttribute('scheduling_saturday_to');
  }
  public set schedulingSaturdayTo(value: string) {
    this._schedulingSaturdayTo = value;
  }
  public resetSchedulingSaturdayTo() {
    this._schedulingSaturdayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingSaturdayToInput() {
    return this._schedulingSaturdayTo;
  }

  // scheduling_sunday_active - computed: false, optional: true, required: false
  private _schedulingSundayActive?: boolean | cdktf.IResolvable; 
  public get schedulingSundayActive() {
    return this.getBooleanAttribute('scheduling_sunday_active');
  }
  public set schedulingSundayActive(value: boolean | cdktf.IResolvable) {
    this._schedulingSundayActive = value;
  }
  public resetSchedulingSundayActive() {
    this._schedulingSundayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingSundayActiveInput() {
    return this._schedulingSundayActive;
  }

  // scheduling_sunday_from - computed: false, optional: true, required: false
  private _schedulingSundayFrom?: string; 
  public get schedulingSundayFrom() {
    return this.getStringAttribute('scheduling_sunday_from');
  }
  public set schedulingSundayFrom(value: string) {
    this._schedulingSundayFrom = value;
  }
  public resetSchedulingSundayFrom() {
    this._schedulingSundayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingSundayFromInput() {
    return this._schedulingSundayFrom;
  }

  // scheduling_sunday_to - computed: false, optional: true, required: false
  private _schedulingSundayTo?: string; 
  public get schedulingSundayTo() {
    return this.getStringAttribute('scheduling_sunday_to');
  }
  public set schedulingSundayTo(value: string) {
    this._schedulingSundayTo = value;
  }
  public resetSchedulingSundayTo() {
    this._schedulingSundayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingSundayToInput() {
    return this._schedulingSundayTo;
  }

  // scheduling_thursday_active - computed: false, optional: true, required: false
  private _schedulingThursdayActive?: boolean | cdktf.IResolvable; 
  public get schedulingThursdayActive() {
    return this.getBooleanAttribute('scheduling_thursday_active');
  }
  public set schedulingThursdayActive(value: boolean | cdktf.IResolvable) {
    this._schedulingThursdayActive = value;
  }
  public resetSchedulingThursdayActive() {
    this._schedulingThursdayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingThursdayActiveInput() {
    return this._schedulingThursdayActive;
  }

  // scheduling_thursday_from - computed: false, optional: true, required: false
  private _schedulingThursdayFrom?: string; 
  public get schedulingThursdayFrom() {
    return this.getStringAttribute('scheduling_thursday_from');
  }
  public set schedulingThursdayFrom(value: string) {
    this._schedulingThursdayFrom = value;
  }
  public resetSchedulingThursdayFrom() {
    this._schedulingThursdayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingThursdayFromInput() {
    return this._schedulingThursdayFrom;
  }

  // scheduling_thursday_to - computed: false, optional: true, required: false
  private _schedulingThursdayTo?: string; 
  public get schedulingThursdayTo() {
    return this.getStringAttribute('scheduling_thursday_to');
  }
  public set schedulingThursdayTo(value: string) {
    this._schedulingThursdayTo = value;
  }
  public resetSchedulingThursdayTo() {
    this._schedulingThursdayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingThursdayToInput() {
    return this._schedulingThursdayTo;
  }

  // scheduling_tuesday_active - computed: false, optional: true, required: false
  private _schedulingTuesdayActive?: boolean | cdktf.IResolvable; 
  public get schedulingTuesdayActive() {
    return this.getBooleanAttribute('scheduling_tuesday_active');
  }
  public set schedulingTuesdayActive(value: boolean | cdktf.IResolvable) {
    this._schedulingTuesdayActive = value;
  }
  public resetSchedulingTuesdayActive() {
    this._schedulingTuesdayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingTuesdayActiveInput() {
    return this._schedulingTuesdayActive;
  }

  // scheduling_tuesday_from - computed: false, optional: true, required: false
  private _schedulingTuesdayFrom?: string; 
  public get schedulingTuesdayFrom() {
    return this.getStringAttribute('scheduling_tuesday_from');
  }
  public set schedulingTuesdayFrom(value: string) {
    this._schedulingTuesdayFrom = value;
  }
  public resetSchedulingTuesdayFrom() {
    this._schedulingTuesdayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingTuesdayFromInput() {
    return this._schedulingTuesdayFrom;
  }

  // scheduling_tuesday_to - computed: false, optional: true, required: false
  private _schedulingTuesdayTo?: string; 
  public get schedulingTuesdayTo() {
    return this.getStringAttribute('scheduling_tuesday_to');
  }
  public set schedulingTuesdayTo(value: string) {
    this._schedulingTuesdayTo = value;
  }
  public resetSchedulingTuesdayTo() {
    this._schedulingTuesdayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingTuesdayToInput() {
    return this._schedulingTuesdayTo;
  }

  // scheduling_wednesday_active - computed: false, optional: true, required: false
  private _schedulingWednesdayActive?: boolean | cdktf.IResolvable; 
  public get schedulingWednesdayActive() {
    return this.getBooleanAttribute('scheduling_wednesday_active');
  }
  public set schedulingWednesdayActive(value: boolean | cdktf.IResolvable) {
    this._schedulingWednesdayActive = value;
  }
  public resetSchedulingWednesdayActive() {
    this._schedulingWednesdayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingWednesdayActiveInput() {
    return this._schedulingWednesdayActive;
  }

  // scheduling_wednesday_from - computed: false, optional: true, required: false
  private _schedulingWednesdayFrom?: string; 
  public get schedulingWednesdayFrom() {
    return this.getStringAttribute('scheduling_wednesday_from');
  }
  public set schedulingWednesdayFrom(value: string) {
    this._schedulingWednesdayFrom = value;
  }
  public resetSchedulingWednesdayFrom() {
    this._schedulingWednesdayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingWednesdayFromInput() {
    return this._schedulingWednesdayFrom;
  }

  // scheduling_wednesday_to - computed: false, optional: true, required: false
  private _schedulingWednesdayTo?: string; 
  public get schedulingWednesdayTo() {
    return this.getStringAttribute('scheduling_wednesday_to');
  }
  public set schedulingWednesdayTo(value: string) {
    this._schedulingWednesdayTo = value;
  }
  public resetSchedulingWednesdayTo() {
    this._schedulingWednesdayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingWednesdayToInput() {
    return this._schedulingWednesdayTo;
  }

  // splash_auth_settings - computed: false, optional: true, required: false
  private _splashAuthSettings?: string; 
  public get splashAuthSettings() {
    return this.getStringAttribute('splash_auth_settings');
  }
  public set splashAuthSettings(value: string) {
    this._splashAuthSettings = value;
  }
  public resetSplashAuthSettings() {
    this._splashAuthSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashAuthSettingsInput() {
    return this._splashAuthSettings;
  }

  // traffic_shaping_rules - computed: false, optional: true, required: false
  private _trafficShapingRules = new NetworkGroupPoliciesItemsTrafficShapingRulesList(this, "traffic_shaping_rules", false);
  public get trafficShapingRules() {
    return this._trafficShapingRules;
  }
  public putTrafficShapingRules(value: NetworkGroupPoliciesItemsTrafficShapingRules[] | cdktf.IResolvable) {
    this._trafficShapingRules.internalValue = value;
  }
  public resetTrafficShapingRules() {
    this._trafficShapingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingRulesInput() {
    return this._trafficShapingRules.internalValue;
  }

  // vlan_tagging_settings - computed: false, optional: true, required: false
  private _vlanTaggingSettings?: string; 
  public get vlanTaggingSettings() {
    return this.getStringAttribute('vlan_tagging_settings');
  }
  public set vlanTaggingSettings(value: string) {
    this._vlanTaggingSettings = value;
  }
  public resetVlanTaggingSettings() {
    this._vlanTaggingSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTaggingSettingsInput() {
    return this._vlanTaggingSettings;
  }

  // vlan_tagging_vlan_id - computed: false, optional: true, required: false
  private _vlanTaggingVlanId?: string; 
  public get vlanTaggingVlanId() {
    return this.getStringAttribute('vlan_tagging_vlan_id');
  }
  public set vlanTaggingVlanId(value: string) {
    this._vlanTaggingVlanId = value;
  }
  public resetVlanTaggingVlanId() {
    this._vlanTaggingVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTaggingVlanIdInput() {
    return this._vlanTaggingVlanId;
  }
}

export class NetworkGroupPoliciesItemsList extends cdktf.ComplexList {
  public internalValue? : NetworkGroupPoliciesItems[] | cdktf.IResolvable

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
  public get(index: number): NetworkGroupPoliciesItemsOutputReference {
    return new NetworkGroupPoliciesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies meraki_network_group_policies}
*/
export class NetworkGroupPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_group_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkGroupPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkGroupPolicies to import
  * @param importFromId The id of the existing NetworkGroupPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkGroupPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_group_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_group_policies meraki_network_group_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkGroupPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkGroupPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_group_policies',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._items.internalValue = config.items;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new NetworkGroupPoliciesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: NetworkGroupPoliciesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(networkGroupPoliciesItemsToTerraform, false)(this._items.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(networkGroupPoliciesItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkGroupPoliciesItemsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
