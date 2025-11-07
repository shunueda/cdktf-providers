// https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtVpcGatewayPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#action NsxtVpcGatewayPolicyRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#description NsxtVpcGatewayPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#destination_groups NsxtVpcGatewayPolicyRule#destination_groups}
  */
  readonly destinationGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#destinations_excluded NsxtVpcGatewayPolicyRule#destinations_excluded}
  */
  readonly destinationsExcluded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#direction NsxtVpcGatewayPolicyRule#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#disabled NsxtVpcGatewayPolicyRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#display_name NsxtVpcGatewayPolicyRule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#id NsxtVpcGatewayPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#ip_protocol NsxtVpcGatewayPolicyRule#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#logged NsxtVpcGatewayPolicyRule#logged}
  */
  readonly logged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#notes NsxtVpcGatewayPolicyRule#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#nsx_id NsxtVpcGatewayPolicyRule#nsx_id}
  */
  readonly nsxId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#parent_path NsxtVpcGatewayPolicyRule#parent_path}
  */
  readonly parentPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#profiles NsxtVpcGatewayPolicyRule#profiles}
  */
  readonly profiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#resource_type NsxtVpcGatewayPolicyRule#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#scope NsxtVpcGatewayPolicyRule#scope}
  */
  readonly scope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#sequence_number NsxtVpcGatewayPolicyRule#sequence_number}
  */
  readonly sequenceNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#services NsxtVpcGatewayPolicyRule#services}
  */
  readonly services?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#source_groups NsxtVpcGatewayPolicyRule#source_groups}
  */
  readonly sourceGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#sources_excluded NsxtVpcGatewayPolicyRule#sources_excluded}
  */
  readonly sourcesExcluded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#tag NsxtVpcGatewayPolicyRule#tag}
  */
  readonly tag?: string;
  /**
  * service_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#service_entries NsxtVpcGatewayPolicyRule#service_entries}
  */
  readonly serviceEntries?: NsxtVpcGatewayPolicyRuleServiceEntries[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#tags NsxtVpcGatewayPolicyRule#tags}
  */
  readonly tags?: NsxtVpcGatewayPolicyRuleTags[] | cdktf.IResolvable;
}
export interface NsxtVpcGatewayPolicyRuleServiceEntriesTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#scope NsxtVpcGatewayPolicyRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#tag NsxtVpcGatewayPolicyRule#tag}
  */
  readonly tag?: string;
}

export function nsxtVpcGatewayPolicyRuleServiceEntriesTagsToTerraform(struct?: NsxtVpcGatewayPolicyRuleServiceEntriesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function nsxtVpcGatewayPolicyRuleServiceEntriesTagsToHclTerraform(struct?: NsxtVpcGatewayPolicyRuleServiceEntriesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcGatewayPolicyRuleServiceEntriesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtVpcGatewayPolicyRuleServiceEntriesTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcGatewayPolicyRuleServiceEntriesTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class NsxtVpcGatewayPolicyRuleServiceEntriesTagsList extends cdktf.ComplexList {
  public internalValue? : NsxtVpcGatewayPolicyRuleServiceEntriesTags[] | cdktf.IResolvable

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
  public get(index: number): NsxtVpcGatewayPolicyRuleServiceEntriesTagsOutputReference {
    return new NsxtVpcGatewayPolicyRuleServiceEntriesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtVpcGatewayPolicyRuleServiceEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#alg NsxtVpcGatewayPolicyRule#alg}
  */
  readonly alg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#description NsxtVpcGatewayPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#destination_ports NsxtVpcGatewayPolicyRule#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#display_name NsxtVpcGatewayPolicyRule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#ether_type NsxtVpcGatewayPolicyRule#ether_type}
  */
  readonly etherType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#icmp_code NsxtVpcGatewayPolicyRule#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#icmp_type NsxtVpcGatewayPolicyRule#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#l4_protocol NsxtVpcGatewayPolicyRule#l4_protocol}
  */
  readonly l4Protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#nested_service_path NsxtVpcGatewayPolicyRule#nested_service_path}
  */
  readonly nestedServicePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#protocol NsxtVpcGatewayPolicyRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#protocol_number NsxtVpcGatewayPolicyRule#protocol_number}
  */
  readonly protocolNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#resource_type NsxtVpcGatewayPolicyRule#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#source_ports NsxtVpcGatewayPolicyRule#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#tags NsxtVpcGatewayPolicyRule#tags}
  */
  readonly tags?: NsxtVpcGatewayPolicyRuleServiceEntriesTags[] | cdktf.IResolvable;
}

export function nsxtVpcGatewayPolicyRuleServiceEntriesToTerraform(struct?: NsxtVpcGatewayPolicyRuleServiceEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    description: cdktf.stringToTerraform(struct!.description),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPorts),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    ether_type: cdktf.numberToTerraform(struct!.etherType),
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    l4_protocol: cdktf.stringToTerraform(struct!.l4Protocol),
    nested_service_path: cdktf.stringToTerraform(struct!.nestedServicePath),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_number: cdktf.numberToTerraform(struct!.protocolNumber),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    source_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePorts),
    tags: cdktf.listMapper(nsxtVpcGatewayPolicyRuleServiceEntriesTagsToTerraform, true)(struct!.tags),
  }
}


export function nsxtVpcGatewayPolicyRuleServiceEntriesToHclTerraform(struct?: NsxtVpcGatewayPolicyRuleServiceEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg: {
      value: cdktf.stringToHclTerraform(struct!.alg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ether_type: {
      value: cdktf.numberToHclTerraform(struct!.etherType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_protocol: {
      value: cdktf.stringToHclTerraform(struct!.l4Protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nested_service_path: {
      value: cdktf.stringToHclTerraform(struct!.nestedServicePath),
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
    protocol_number: {
      value: cdktf.numberToHclTerraform(struct!.protocolNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(nsxtVpcGatewayPolicyRuleServiceEntriesTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtVpcGatewayPolicyRuleServiceEntriesTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcGatewayPolicyRuleServiceEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtVpcGatewayPolicyRuleServiceEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._etherType !== undefined) {
      hasAnyValues = true;
      internalValueResult.etherType = this._etherType;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._l4Protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Protocol = this._l4Protocol;
    }
    if (this._nestedServicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.nestedServicePath = this._nestedServicePath;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolNumber = this._protocolNumber;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcGatewayPolicyRuleServiceEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._description = undefined;
      this._destinationPorts = undefined;
      this._displayName = undefined;
      this._etherType = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._l4Protocol = undefined;
      this._nestedServicePath = undefined;
      this._protocol = undefined;
      this._protocolNumber = undefined;
      this._resourceType = undefined;
      this._sourcePorts = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alg = value.alg;
      this._description = value.description;
      this._destinationPorts = value.destinationPorts;
      this._displayName = value.displayName;
      this._etherType = value.etherType;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._l4Protocol = value.l4Protocol;
      this._nestedServicePath = value.nestedServicePath;
      this._protocol = value.protocol;
      this._protocolNumber = value.protocolNumber;
      this._resourceType = value.resourceType;
      this._sourcePorts = value.sourcePorts;
      this._tags.internalValue = value.tags;
    }
  }

  // _revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('_revision');
  }

  // alg - computed: true, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
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

  // destination_ports - computed: true, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
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

  // display_name - computed: true, optional: true, required: false
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

  // ether_type - computed: true, optional: true, required: false
  private _etherType?: number; 
  public get etherType() {
    return this.getNumberAttribute('ether_type');
  }
  public set etherType(value: number) {
    this._etherType = value;
  }
  public resetEtherType() {
    this._etherType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etherTypeInput() {
    return this._etherType;
  }

  // icmp_code - computed: true, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: true, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // l4_protocol - computed: true, optional: true, required: false
  private _l4Protocol?: string; 
  public get l4Protocol() {
    return this.getStringAttribute('l4_protocol');
  }
  public set l4Protocol(value: string) {
    this._l4Protocol = value;
  }
  public resetL4Protocol() {
    this._l4Protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProtocolInput() {
    return this._l4Protocol;
  }

  // nested_service_path - computed: true, optional: true, required: false
  private _nestedServicePath?: string; 
  public get nestedServicePath() {
    return this.getStringAttribute('nested_service_path');
  }
  public set nestedServicePath(value: string) {
    this._nestedServicePath = value;
  }
  public resetNestedServicePath() {
    this._nestedServicePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedServicePathInput() {
    return this._nestedServicePath;
  }

  // nsx_id - computed: true, optional: false, required: false
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // protocol - computed: true, optional: true, required: false
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

  // protocol_number - computed: true, optional: true, required: false
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

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // source_ports - computed: true, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
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

  // tags - computed: false, optional: true, required: false
  private _tags = new NsxtVpcGatewayPolicyRuleServiceEntriesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NsxtVpcGatewayPolicyRuleServiceEntriesTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class NsxtVpcGatewayPolicyRuleServiceEntriesList extends cdktf.ComplexList {
  public internalValue? : NsxtVpcGatewayPolicyRuleServiceEntries[] | cdktf.IResolvable

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
  public get(index: number): NsxtVpcGatewayPolicyRuleServiceEntriesOutputReference {
    return new NsxtVpcGatewayPolicyRuleServiceEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtVpcGatewayPolicyRuleTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#scope NsxtVpcGatewayPolicyRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#tag NsxtVpcGatewayPolicyRule#tag}
  */
  readonly tag?: string;
}

export function nsxtVpcGatewayPolicyRuleTagsToTerraform(struct?: NsxtVpcGatewayPolicyRuleTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function nsxtVpcGatewayPolicyRuleTagsToHclTerraform(struct?: NsxtVpcGatewayPolicyRuleTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcGatewayPolicyRuleTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtVpcGatewayPolicyRuleTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcGatewayPolicyRuleTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class NsxtVpcGatewayPolicyRuleTagsList extends cdktf.ComplexList {
  public internalValue? : NsxtVpcGatewayPolicyRuleTags[] | cdktf.IResolvable

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
  public get(index: number): NsxtVpcGatewayPolicyRuleTagsOutputReference {
    return new NsxtVpcGatewayPolicyRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule nsxt_vpc_gateway_policy_rule}
*/
export class NsxtVpcGatewayPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_vpc_gateway_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtVpcGatewayPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtVpcGatewayPolicyRule to import
  * @param importFromId The id of the existing NsxtVpcGatewayPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtVpcGatewayPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_vpc_gateway_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_gateway_policy_rule nsxt_vpc_gateway_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtVpcGatewayPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtVpcGatewayPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_vpc_gateway_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'nsxt-virtual-private-cloud',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._destinationGroups = config.destinationGroups;
    this._destinationsExcluded = config.destinationsExcluded;
    this._direction = config.direction;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._id = config.id;
    this._ipProtocol = config.ipProtocol;
    this._logged = config.logged;
    this._notes = config.notes;
    this._nsxId = config.nsxId;
    this._parentPath = config.parentPath;
    this._profiles = config.profiles;
    this._resourceType = config.resourceType;
    this._scope = config.scope;
    this._sequenceNumber = config.sequenceNumber;
    this._services = config.services;
    this._sourceGroups = config.sourceGroups;
    this._sourcesExcluded = config.sourcesExcluded;
    this._tag = config.tag;
    this._serviceEntries.internalValue = config.serviceEntries;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('_revision');
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // destination_groups - computed: true, optional: true, required: false
  private _destinationGroups?: string[]; 
  public get destinationGroups() {
    return this.getListAttribute('destination_groups');
  }
  public set destinationGroups(value: string[]) {
    this._destinationGroups = value;
  }
  public resetDestinationGroups() {
    this._destinationGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationGroupsInput() {
    return this._destinationGroups;
  }

  // destinations_excluded - computed: false, optional: true, required: false
  private _destinationsExcluded?: boolean | cdktf.IResolvable; 
  public get destinationsExcluded() {
    return this.getBooleanAttribute('destinations_excluded');
  }
  public set destinationsExcluded(value: boolean | cdktf.IResolvable) {
    this._destinationsExcluded = value;
  }
  public resetDestinationsExcluded() {
    this._destinationsExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsExcludedInput() {
    return this._destinationsExcluded;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // display_name - computed: true, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
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

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // logged - computed: false, optional: true, required: false
  private _logged?: boolean | cdktf.IResolvable; 
  public get logged() {
    return this.getBooleanAttribute('logged');
  }
  public set logged(value: boolean | cdktf.IResolvable) {
    this._logged = value;
  }
  public resetLogged() {
    this._logged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggedInput() {
    return this._logged;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // nsx_id - computed: false, optional: false, required: true
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // parent_path - computed: false, optional: false, required: true
  private _parentPath?: string; 
  public get parentPath() {
    return this.getStringAttribute('parent_path');
  }
  public set parentPath(value: string) {
    this._parentPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPathInput() {
    return this._parentPath;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // profiles - computed: true, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // sequence_number - computed: false, optional: false, required: true
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }

  // services - computed: true, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // source_groups - computed: true, optional: true, required: false
  private _sourceGroups?: string[]; 
  public get sourceGroups() {
    return this.getListAttribute('source_groups');
  }
  public set sourceGroups(value: string[]) {
    this._sourceGroups = value;
  }
  public resetSourceGroups() {
    this._sourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupsInput() {
    return this._sourceGroups;
  }

  // sources_excluded - computed: false, optional: true, required: false
  private _sourcesExcluded?: boolean | cdktf.IResolvable; 
  public get sourcesExcluded() {
    return this.getBooleanAttribute('sources_excluded');
  }
  public set sourcesExcluded(value: boolean | cdktf.IResolvable) {
    this._sourcesExcluded = value;
  }
  public resetSourcesExcluded() {
    this._sourcesExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesExcludedInput() {
    return this._sourcesExcluded;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // service_entries - computed: false, optional: true, required: false
  private _serviceEntries = new NsxtVpcGatewayPolicyRuleServiceEntriesList(this, "service_entries", false);
  public get serviceEntries() {
    return this._serviceEntries;
  }
  public putServiceEntries(value: NsxtVpcGatewayPolicyRuleServiceEntries[] | cdktf.IResolvable) {
    this._serviceEntries.internalValue = value;
  }
  public resetServiceEntries() {
    this._serviceEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEntriesInput() {
    return this._serviceEntries.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NsxtVpcGatewayPolicyRuleTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NsxtVpcGatewayPolicyRuleTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      destination_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationGroups),
      destinations_excluded: cdktf.booleanToTerraform(this._destinationsExcluded),
      direction: cdktf.stringToTerraform(this._direction),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      logged: cdktf.booleanToTerraform(this._logged),
      notes: cdktf.stringToTerraform(this._notes),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      parent_path: cdktf.stringToTerraform(this._parentPath),
      profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profiles),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scope),
      sequence_number: cdktf.numberToTerraform(this._sequenceNumber),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      source_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceGroups),
      sources_excluded: cdktf.booleanToTerraform(this._sourcesExcluded),
      tag: cdktf.stringToTerraform(this._tag),
      service_entries: cdktf.listMapper(nsxtVpcGatewayPolicyRuleServiceEntriesToTerraform, true)(this._serviceEntries.internalValue),
      tags: cdktf.listMapper(nsxtVpcGatewayPolicyRuleTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      destination_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destinations_excluded: {
        value: cdktf.booleanToHclTerraform(this._destinationsExcluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logged: {
        value: cdktf.booleanToHclTerraform(this._logged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_path: {
        value: cdktf.stringToHclTerraform(this._parentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scope),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sequence_number: {
        value: cdktf.numberToHclTerraform(this._sequenceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sources_excluded: {
        value: cdktf.booleanToHclTerraform(this._sourcesExcluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_entries: {
        value: cdktf.listMapperHcl(nsxtVpcGatewayPolicyRuleServiceEntriesToHclTerraform, true)(this._serviceEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtVpcGatewayPolicyRuleServiceEntriesList",
      },
      tags: {
        value: cdktf.listMapperHcl(nsxtVpcGatewayPolicyRuleTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtVpcGatewayPolicyRuleTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
